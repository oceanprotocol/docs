# Key Storage & Management in OpenBao

All key operations go through a single CLI, `manage-accounts.sh`, baked into the image at `/opt/openbao/scripts/manage-accounts.sh`.

```bash
manage-accounts.sh import [--private-keys-file <path>] [--persist|--no-persist]
manage-accounts.sh delete <wallet_id>
manage-accounts.sh list [--verify]
```

Invoke it from the module's `docker-compose/` directory:

```
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh <subcommand> [options]
```

**Authentication.** The script resolves `BAO_TOKEN` from the environment, falling back to `/vault/keys/root_token`. If neither is available it exits with `BAO_TOKEN is not set … cannot authenticate`. It also defaults `BAO_ADDR` to `https://127.0.0.1:8200` and `BAO_CACERT` to `/etc/openbao/tls/tls.crt`, so no TLS flags are needed for in-container use.

**Prerequisite.** The vault must be running, unsealed, and healthy. Check first:

```bash
docker compose ps openbao
docker compose exec openbao bao status -tls-skip-verify
```

### List Keys from Vault

```bash
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh list
ID     ADDRESS                                     KEY_HASH
────────────────────────────────────────────────────────────────────────
1      0x8f4a...c21b                               3f9c1ab2d40e7755
2      0x2b71...9de4                               a01e77c4b9236610
────────────────────────────────────────────────────────────────────────
Total: 2 wallet(s)
```

The `KEY_HASH` column is the first 16 characters of the SHA-256 hash of the normalised private key; the full hash is in `private_key_registry.json`. Rows are ordered by numeric wallet ID. A wallet present in `addresses.json` but absent from the registry shows `KEY_HASH` as `unknown`.

**Reconciling local state against the live vault:**

```bash
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh list --verify
ID     ADDRESS                                     KEY_HASH          STATUS
───────────────────────────────────────────────────────────────────────────────────
1      0x8f4a...c21b                               3f9c1ab2d40e7755  OK
2      0x2b71...9de4                               a01e77c4b9236610  [MISSING]
───────────────────────────────────────────────────────────────────────────────────
Total: 2 wallet(s)  —  vault_missing: 1
```

`--verify` fetches `ethereum/accounts` from the running vault and cross-checks each address. A `[MISSING]` row means the wallet is recorded locally but the account is gone from the vault — typically because the `openbao-data` volume was recreated while `openbao-keys` survived. Re-running `import` repairs this: the registry hash is found but the account is not, so the key is re-imported and the existing wallet ID is preserved.

Run `list --verify` after every restart, rebuild, or restore. It is read-only and safe to run at any time.

**Raw vault view (bypassing the local registry):**

```
docker compose exec openbao sh -c \
  'BAO_TOKEN=$(cat /vault/keys/root_token) bao list ethereum/accounts'
```

### List Key Mappings from Vault

The wallet-ID → address mapping consumed by the Signer Server lives in the `kv-v2` engine at `secret/wallets/by-id/<id>`, written on every successful import.

#### **List all mappings:**

```bash
docker compose exec openbao sh -c \
  'BAO_TOKEN=$(cat /vault/keys/root_token) bao kv list secret/wallets/by-id'
Keys
----
1
2
```

#### **Read one mapping:**

```bash
docker compose exec openbao sh -c \
  'BAO_TOKEN=$(cat /vault/keys/root_token) bao kv get secret/wallets/by-id/1'
====== Data ======
Key        Value
---        -----
address    0x8f4a...c21b
```

#### **JSON output, for scripting:**

```bash
docker compose exec openbao sh -c \
  'BAO_TOKEN=$(cat /vault/keys/root_token) bao kv get -format=json secret/wallets/by-id/1' \
  | jq -r '.data.data.address'
```

#### **Inspect the on-disk registries directly:**

```bash
docker compose exec openbao jq . /vault/keys/addresses.json
docker compose exec openbao jq . /vault/keys/private_key_registry.json
```

Four representations of the same fact must agree — the KV mapping, `addresses.json`, `private_key_registry.json`, and `ethereum/accounts`. When they diverge:

| Symptom                                   | Likely cause                                      | Remedy                                                     |
| ----------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------- |
| `list --verify` shows `[MISSING]`         | `openbao-data` recreated, `openbao-keys` retained | Re-run `import` — the wallet ID is preserved               |
| KV path exists, no `addresses.json` entry | Interrupted delete                                | `bao kv metadata delete secret/wallets/by-id/<id>`         |
| `KEY_HASH` shows `unknown`                | Registry lost or predates the key                 | Re-run `import` with the original key to rebuild the entry |

### Import new private key into Vault

Import is **idempotent and additive**. Running it repeatedly is safe: already-imported keys are skipped, not duplicated.

**Default import** — reads `/run/secrets/private_keys` (bind-mounted from `secrets/private_keys`) and persists:

```bash
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh import
```

#### **Import from a specific file:**

```bash
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh \
  import --private-keys-file /vault/keys/tmp/new_keys.txt --persist
```

**Import without writing to the persistent keys file** — useful for a short-lived key that should not survive a rebuild:

```
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh import --no-persist
```

| Flag                         | Alias       | Default                     | Effect                                             |
| ---------------------------- | ----------- | --------------------------- | -------------------------------------------------- |
| `--private-keys-file <path>` | `--pk-file` | `/run/secrets/private_keys` | Source file to read keys from                      |
| `--persist`                  | —           | enabled                     | Append newly seen keys to the persistent keys file |
| `--no-persist`               | —           | —                           | Import only; leave the persistent file untouched   |

Both source and persistent paths can also be set via the `PRIVATE_KEYS_FILE` and `PERSISTENT_PRIVATE_KEYS_FILE` environment variables, which is how the `openbao` service configures them in `docker-compose.yml`.

**What import does, in order:**

1. Validates and normalises the _entire_ source file into a temp working copy. Any invalid key aborts the run with a non-zero exit **before a single write reaches the vault** — imports are never left half-applied by a malformed file.
2. Deduplicates within the file by key hash, warning on each duplicate.
3. Normalises the persistent keys file in place (lowercasing, prefixing, deduplicating), when persisting.
4. Loads the current account list from `ethereum/accounts` once.
5. For each key: if the registry already knows the hash **and** the vault still has the account, skips it. Otherwise writes `bao write ethereum/accounts privateKey=<hex-without-0x>` and takes the returned address.
6. Assigns a wallet ID — `max(existing numeric IDs) + 1` — unless the address is already known locally, in which case the existing ID is reused and the entry is repaired.
7. Writes the KV mapping at `secret/wallets/by-id/<id>` and the registry entry, and appends to the persistent file when persisting.

**Expected output:**

```bash
2026-08-26T09:41:07Z [INFO ] import-account: op=k3n8q1zx  trigger=manual  starting import  source=/run/secrets/private_keys  persistent_file=/run/secrets/private_keys  persist=true  persistent_source=true
2026-08-26T09:41:07Z [INFO ] import-account: op=k3n8q1zx  trigger=manual  source file validated  file=/run/secrets/private_keys  valid=3  unique=3  duplicates_skipped=0
2026-08-26T09:41:08Z [INFO ] import-account: op=k3n8q1zx  trigger=manual  new account imported  id=3  address=0x2b71...9de4  key_hash=a01e77c4...
2026-08-26T09:41:08Z [INFO ] import-account: op=k3n8q1zx  trigger=manual  import complete  imported=1  repaired=0  skipped=2  total_accounts=3  persistent_keys_total=3  registry_repairs=0  duration=1s
```

**Reading the summary counters:**

| Counter                 | Meaning                                                                  |
| ----------------------- | ------------------------------------------------------------------------ |
| `imported`              | New wallets created, with new IDs                                        |
| `repaired`              | Address already known locally; metadata rewritten, ID preserved          |
| `skipped`               | Key already in the registry and present in the vault; no action          |
| `registry_repairs`      | Stale registry entries for an address removed after a key change         |
| `persistent_keys_added` | Keys appended to the persistent file (omitted when source == persistent) |
| `persistent_keys_total` | Total keys in the persistent file after the run                          |

**Startup import.** `init-vault.sh` runs the same command automatically on every container start, after unsealing and enabling the engines, with `OPERATION_TRIGGER=startup`. In normal operation you never need to run `import` by hand — adding a key to `secrets/private_keys` and restarting the container achieves the same result:

```
docker compose restart openbao
docker compose logs -f openbao
```

**Failure modes:**

### Delete private key from Vault

```bash
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh delete <wallet_id>
```

Example:

```bash
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh delete 5
```

> **Warning.** Deletion is not reversible from within the deployment. Unless you hold an independent backup of the private key, any funds, permissions, or on-chain identity bound to that address become permanently unusable. Always run `list` first and confirm the ID maps to the address you intend to remove.

The command takes a **wallet ID**, not an address. Resolve it first:

```
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh list
```

**What delete does, in order:**

1. Resolves `wallet_id` → address via `addresses.json`; exits `1` with `wallet ID not found` if absent.
2. Resolves address → key hash via `private_key_registry.json` (may be `unknown`).
3. Deletes the KV mapping `secret/wallets/by-id/<id>`.
4. Deletes the vault account `ethereum/accounts/<address>`.
5. Removes the `addresses.json` entry and every `private_key_registry.json` entry for that address.
6. Removes the matching key from the persistent keys file, matched by hash — so the key does **not** come back on the next startup import.

**Expected output:**

```bash
2026-08-26T09:44:12Z [INFO ] delete-account: op=p7f2m4bd  trigger=manual  starting deletion  id=5  address=0x91cd...77af  key_hash=b52d90e1...
2026-08-26T09:44:12Z [INFO ] delete-account: op=p7f2m4bd  trigger=manual  KV mapping deleted  id=5
2026-08-26T09:44:12Z [INFO ] delete-account: op=p7f2m4bd  trigger=manual  ethereum account deleted  address=0x91cd...77af
2026-08-26T09:44:12Z [INFO ] delete-account: op=p7f2m4bd  trigger=manual  key removed from persistent file  key_hash=b52d90e1...  keys_removed=1  keys_kept=2  keys_remaining=2  persistent_file=/run/secrets/private_keys
2026-08-26T09:44:12Z [INFO ] delete-account: op=p7f2m4bd  trigger=manual  deletion complete  id=5  address=0x91cd...77af  key_hash=b52d90e1...  persistent_keys_removed=1  persistent_keys_remaining=2  duration=0s
```

Steps 3 and 4 warn rather than fail if the target is already gone, so a re-run after a partial failure is safe.

**Important caveats:**

* **The persistent file is edited in place.** If the file is bind-mounted from `secrets/private_keys` on the host — the default — the host file is modified too. Back it up before bulk deletions.
* **If the key hash cannot be resolved** (a missing or incomplete registry), the script logs `key hash is unknown … cannot remove from persistent file` and leaves the persistent file alone. The vault account is still removed, but the key will be **re-imported on the next startup**. Remove the line from `secrets/private_keys` manually in that case.
* **Wallet IDs are not recycled.** `next_id` takes `max(existing IDs) + 1`, so deleting ID 5 leaves a gap and the next import gets a fresh higher ID. Do not renumber `addresses.json` by hand — the Signer Server resolves wallets through the KV mapping and stale IDs will break it.
*   **`bao kv delete` on a kv-v2 mount is a soft delete.** The version is marked deleted but the path metadata remains, so a deleted ID may still appear in `bao kv list`. To purge it completely:

    ```
    docker compose exec openbao sh -c \
      'BAO_TOKEN=$(cat /vault/keys/root_token) bao kv metadata delete secret/wallets/by-id/5'
    ```

**Verify the deletion:**

```
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh list --verify
docker compose exec openbao sh -c \
  'BAO_TOKEN=$(cat /vault/keys/root_token) bao list ethereum/accounts'
```

### Audit Files & Logging

**Log format**

Every line emitted by the OpenBao tooling follows one structure:

```bash
<UTC timestamp> [<LEVEL>] <component>: op=<operation_id>  trigger=<trigger>  <message>  <key=value pairs>
2026-08-26T09:41:08Z [INFO ] import-account: op=k3n8q1zx  trigger=manual  new account imported  id=3  address=0x2b71...9de4  key_hash=a01e77c4...
```

| Field       | Values                                                                    | Notes                                                             |
| ----------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `LEVEL`     | `INFO`, `WARN`, `ERROR`                                                   | Fixed 5-character field                                           |
| `component` | `entrypoint`, `init`, `import-account`, `delete-account`, `list-accounts` | Set from the subcommand, so the action is visible without parsing |
| `op`        | 8-character random token from `/dev/urandom`                              | Constant for one invocation; the primary correlation key          |
| `trigger`   | `manual` (default) or `startup` (set by `init-vault.sh`)                  | Distinguishes operator actions from automatic startup imports     |

`entrypoint` and `init` lines omit `op`/`trigger`, since they belong to container startup rather than an account operation.

**Where the logs go**

`manage-accounts.sh` writes to its own stdout **and**, when `trigger=manual` and `/proc/1/fd/1` is writable, tees the same line to the container's PID 1 stdout. That second write is what makes a manually executed `docker compose exec` operation appear in the container log stream — without it, the action would be visible only in the terminal that ran it, and the audit trail would have a hole.

```bash
# Live stream
docker compose logs -f openbao
​
# All OpenBao log output
docker compose logs openbao
​
# Only account operations
docker compose logs openbao | grep -E 'import-account|delete-account|list-accounts'
​
# Every line from one invocation
docker compose logs openbao | grep 'op=k3n8q1zx'
​
# Automatic startup imports only
docker compose logs openbao | grep 'trigger=startup'
​
# Problems only
docker compose logs openbao | grep -E '\[WARN |\[ERROR\]'
​
# Everything touching one key, by hash
docker compose logs openbao | grep 'key_hash=a01e77c4'
```

Container logs are ephemeral — they are lost when the container is removed. For retention, configure a Docker logging driver on the `openbao` service, or ship the stream to your platform's log aggregator:

```yaml
  openbao:
    logging:
      driver: json-file
      options:
        max-size: "10m"
        max-file: "5"
```

**What is deliberately not logged**

**Private keys are never written to any log, at any level.** Keys are referenced exclusively by their SHA-256 hash (`key_hash=…`), which is one-way and safe to paste into a ticket or share with support. Addresses, wallet IDs, and file paths _are_ logged, and are non-sensitive by design.

When reporting a problem, include the `op=` token and the relevant `key_hash=` values. Never include lines from `secrets/private_keys`.

**Audit files on disk**

Three files under `/vault/keys` (Docker volume `openbao-keys`) constitute the persistent record of what exists and how it got there:

| File                        | Role                                                                   | Sensitivity                              |
| --------------------------- | ---------------------------------------------------------------------- | ---------------------------------------- |
| `addresses.json`            | Wallet ID → address                                                    | Not secret; addresses are public         |
| `private_key_registry.json` | Key hash → `{id, address}`                                             | Not secret; hashes are one-way           |
| `init.json`, `root_token`   | Unseal keys and root token, written mode `600` on first initialisation | **Highly sensitive — full vault access** |

Back them up with:

```bash
docker compose exec openbao tar -cf - -C /vault/keys addresses.json private_key_registry.json \
  > openbao-registry-backup-$(date +%F).tar
```

Back up `init.json` and `root_token` **separately**, into whatever your organisation uses for break-glass credentials — never alongside routine backups, and never into the repository. Losing them means a sealed vault that cannot be unsealed.

**OpenBao server logging**

The server itself is configured in `openbao.hcl`:

```bash
log_level = "info"
```

Raise it temporarily when diagnosing plugin or unseal problems:

```bash
docker compose exec openbao sh -c \
  'BAO_TOKEN=$(cat /vault/keys/root_token) bao read sys/health'
```

Editing `log_level` to `debug` requires rebuilding the image or overriding the config, and should be reverted afterwards — debug output is verbose and may include request paths you would rather not retain.

**Optional: enabling a vault audit device**

The shipped configuration does **not** enable an OpenBao audit device. The script-level logging above covers account lifecycle operations, but it does not record signing requests made by the Signer Server. For deployments that need a complete, tamper-evident record of every vault request, enable a file audit device:

```bash
docker compose exec openbao sh -c \
  'BAO_TOKEN=$(cat /vault/keys/root_token) \
   bao audit enable file file_path=/vault/keys/audit.log'
```

Two operational consequences to plan for before enabling this in production:

* OpenBao **refuses requests it cannot audit**. If the audit log becomes unwritable — a full disk, wrong permissions — the vault stops serving. Monitor the file and rotate it externally (`logrotate` with `copytruncate`, or a sidecar), never by deleting it out from under the process.
* The audit log records request and response _metadata_; sensitive values are HMAC'd, not plaintext. It is still access-controlled material and belongs under the same handling rules as the rest of `/vault/keys`.

Verify and list enabled devices with:

```bash
docker compose exec openbao sh -c \
  'BAO_TOKEN=$(cat /vault/keys/root_token) bao audit list -detailed'
```

***

## Quick reference

```bash
cd <module>/docker-compose      # participant/ or dataspace-operator/
​
# Generate
cast wallet new --json | jq -r '.[0].private_key' >> openbao/secrets/private_keys
printf '0x%s\n' "$(openssl rand -hex 32)"        >> openbao/secrets/private_keys
​
# Import
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh import
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh import --no-persist
​
# Inspect
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh list
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh list --verify
docker compose exec openbao sh -c 'BAO_TOKEN=$(cat /vault/keys/root_token) bao kv list secret/wallets/by-id'
​
# Delete
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh delete <wallet_id>
​
# Audit
docker compose logs openbao | grep -E 'import-account|delete-account'
docker compose exec openbao jq . /vault/keys/private_key_registry.json
```


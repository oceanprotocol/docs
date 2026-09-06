# Generate Private Keys

To add a Web3 address to the secrets vault, place a raw `secp256k1` private key in the keys file and import it. **You never supply the address** — the `secpsign` plugin derives it during import and returns it, and that returned address is what gets recorded everywhere else.

The keys file is /openbao/secrets/private\_keys

## Accepted key format

The script [`manage-accounts.sh`](key-storage-and-management-in-openbao.md) normalises every line before validating: it lowercases the string and re-applies a single `0x` prefix. Both `0xAB…` and `AB…` are therefore accepted on input and stored normalised.

After normalisation, the key must satisfy all of the following rules, or the **entire import aborts before anything is written to the vault**:

| **Rule**                                               | **Failure message**                                                     |
| ------------------------------------------------------ | ----------------------------------------------------------------------- |
| Matches `0x[0-9a-f]{64}` exactly                       | `invalid format — expected 0x followed by 64 lowercase hex characters`  |
| Value is not zero                                      | `key value is zero — not a valid private key`                           |
| Value is below the secp256k1 curve order `FFFF…364141` | `key value exceeds the secp256k1 curve order — not a valid private key` |

File conventions:

* one key per line;
* blank lines and surrounding whitespace/CR characters are stripped and ignored;
* duplicate keys inside the same file are detected by hash, logged as `duplicate key ignored`, and imported once;
* there is no comment syntax — a `#` line will fail format validation.

> **Note on randomness.** Every generation method below must use a cryptographically secure random source. Never derive a production key from a passphrase, a timestamp, `$RANDOM`, or any non-CSPRNG source, and never reuse a key across the Dataspace Operator and Participant stacks.

## Open-source web3 CLI Tools to generate private keys

### **Foundry (`cast`)**

Foundry's `cast` is the most direct option and outputs a key already in the `0x` + 64-hex form the importer expects.

```bash
# Install Foundry (once)
curl -L https://foundry.paradigm.xyz | bash
foundryup
​
# Generate a keypair
cast wallet new
Successfully created new keypair.
Address:     0x8f4a...c21b
Private key: 0x1d087ab9b34b004122ac333753dd225d5384c862f5f5009564eb52f39ef81521
```

Append a new key straight to the keys file, in machine-readable form:

```bash
cd <module>/docker-compose/openbao
​
cast wallet new --json \
  | jq -r '.[0].private_key' \
  >> secrets/private_keys
```

Keep the printed address — you will use it to confirm the import produced the wallet you expected.

### **gochain `web3` CLI**

```bash
# Install (once) — see https://github.com/gochain/web3
web3 account create
```

The command prints a new private key and its address. Flag names have changed between releases, so confirm with `web3 account --help` before scripting against it. Whatever the output shape, only the raw private key belongs in `secrets/private_keys`.

### **ethers.js one-liner**

Useful when Node is already available on the host:

```bash
node -e 'const {Wallet}=require("ethers");const w=Wallet.createRandom();console.error(w.address);console.log(w.privateKey);' \
  >> secrets/private_keys
```

The address goes to stderr (visible on your terminal), the key to stdout (appended to the file).

**Note**: It requires Node to be installed before generating the wallet.

### **`eth-account` (Python)**

```bash
pip install eth-account
from eth_account import Account
​
acct = Account.create()                       # uses os.urandom under the hood
key = "0x" + acct.key.hex().removeprefix("0x")  # normalise the prefix across versions
​
print(acct.address)
print(key)
```

`hexbytes` changed whether `.hex()` emits the `0x` prefix, so normalise it explicitly as shown rather than assuming either behaviour.

Note: It requires Python to be installed on the system before generating the wallet.

### Unix commands

If a Web3 CLI is unavailable, a raw 32-byte candidate can be generated from the operating system CSPRNG and validated against the secp256k1 order. The repository itself validates imported keys, so invalid candidates are rejected.

Example candidate generation:

```bash
printf '0x'
openssl rand -hex 32
```

A safer scripted example that guarantees the integer is in the secp256k1 private-key range is:

```bash
python3 - <<'PY'
import secrets
N = int('FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141', 16)
while True:
    k = secrets.randbelow(N)
    if k != 0:
        print('0x' + k.to_bytes(32, 'big').hex())
        break
PY
```

Write keys to an import file with restrictive permissions:

```bash
umask 077
python3 generate_key.py > new_private_keys
chmod 600 new_private_keys
```

> Avoid generating private keys on shared systems, CI logs, terminal recording sessions, or hosts with untrusted software.

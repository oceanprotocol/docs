# Migrate private keys from MetaMask to OpenBao Vault

Use this when an existing MetaMask account already holds funds, permissions, or on-chain identity that the deployment needs to keep.

> **Warning.** Exporting a private key from MetaMask removes every protection the extension provides. Perform this on a trusted machine, never over screen-share, never into a chat or ticket, and never into shell history (`export HISTFILE=/dev/null` or prefix commands with a space where your shell supports it).

## **Step 1 — Export the key from MetaMask**

1\. Open MetaMask and select the account to migrate.

2\. Open the account menu (⋮) → **Account details**.<br>

<figure><img src="../../../.gitbook/assets/image (136).png" alt="" width="375"><figcaption></figcaption></figure>

3\. Choose **Private keys** and click on the option "**Unlock to reveal**"

<figure><img src="../../../.gitbook/assets/image (137).png" alt="" width="371"><figcaption></figcaption></figure>



4\. Enter your MetaMask password and hold to reveal.

<figure><img src="../../../.gitbook/assets/image (138).png" alt="" width="375"><figcaption></figcaption></figure>



5\. Copy the 64-character hex string. Record the account's **address** separately — you will verify against it in step 4.





<figure><img src="../../../.gitbook/assets/image (139).png" alt="" width="360"><figcaption></figcaption></figure>

MetaMask exports the key without a `0x` prefix. That is fine: `normalize_pk` adds it during import.



### **Step 2 — Add the key to the keys file**

```bash
cd <module>/docker-compose/openbao
​
# Note the leading space to keep this out of shell history (bash/zsh with HIST_IGNORE_SPACE)
 printf '0x%s\n' "<pasted-key-lowercased>" >> secrets/private_keys
​
chmod 600 secrets/private_keys
```

Alternatively, import from a throwaway file and let the deployment persist it:

```bash
docker compose cp /tmp/metamask_key.txt openbao:/vault/keys/tmp/metamask_key.txt
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh \
  import --private-keys-file /vault/keys/tmp/metamask_key.txt --persist
docker compose exec openbao rm -f /vault/keys/tmp/metamask_key.txt
shred -u /tmp/metamask_key.txt   # or: rm -P on BSD/macOS
```

With `--persist` (the default), the key is appended to the persistent keys file so it survives a container rebuild.



## **Step 3 — Import**&#x20;

If you appended to `secrets/private_keys`, run the standard import:

```bash
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh import
```



## **Step 4 — Verify the address matches MetaMask**



```bash
docker compose exec openbao /opt/openbao/scripts/manage-accounts.sh list --verify
```

The address on the new row must match the address you recorded in step 1, case-insensitively. If it does not, the key was mistyped or truncated — delete the wallet and repeat.



## **Step 5 — Decommission the browser copy**

Once the vault-held key is confirmed working through the Signer Server:

* remove or lock the account in MetaMask so the same key is not signing from two places;
* clear the clipboard and any editor buffer or scratch file that held the key;
* confirm the key never entered shell history: `grep -c '0x[0-9a-f]\{64\}' ~/.bash_history` should return `0`.

> **Direction of travel.** This migration is one-way by design. Once the key is in OpenBao, all signing should go through the Signer Server (`SIGNER_MODE=vault`), not through the browser extension.

***

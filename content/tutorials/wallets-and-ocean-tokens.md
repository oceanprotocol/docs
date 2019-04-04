---
title: Teach Your Wallet to Track Ocean Tokens
description: How to teach various crypto wallet software to track Ocean Tokens.
---

If you don't see any Ocean Tokens in your wallet software (e.g. MetaMask or MyEtherWallet), don't worry! It might not know how to track Ocean Tokens yet. You can teach it how.

## Step 1: Determine the Ocean Token Contract Address in the Network You're Using

### Kovan or Nile Testnet

| Testnet | Ocean Token Contract Address                 |
| ------- | -------------------------------------------- |
| Kovan   | `0xB57C4D626548eB8AC0B82b086721516493E2908d` |
| Nile    | `0xcDae1AFa8025BE03Bc56D112eB4da3277913563d` |

If the above addresses are out-of-date, then you can find newer ones in the [keeper-contracts repository on GitHub](https://github.com/oceanprotocol/keeper-contracts):

1. Click on the "Branch: **develop**" button and switch to the tag of the latest release (e.g. `v0.8.6`).
1. In the `README.md` file, check the address of the OceanToken contract (in Nile or Kovan).
1. Double-check the address by looking in the file named `zos.kovan.json` (for Kovan) or `zos.dev-8995.json` (for Nile). Check for a block of JSON that looks like:

   ```json
       "@oceanprotocol/keeper-contracts/OceanToken": [
         {
           "address": "0xB57C4D626548eB8AC0B82b086721516493E2908d",
           "version": "v0.8.6",
           "implementation": "0x6E2c2D9c1fA947FAE47AD3EFF86A97C0e1E82EE4",
           "admin": "0xA18999a10D9e7d8116c406D284fa31541e019177"
         }
   ```

   Compare the `"address"` value to the value from the `README.md` file.

### Spree or Ganache-Based Testnet

If you're using [Barge](https://github.com/oceanprotocol/barge) to run a local Spree Testnet or a local Ganache-based testnet, then you can get the address of the OceanToken contract by looking at the value of `"address"` in:

- `$HOME/.ocean/keeper-contracts/artifacts/OceanToken.spree.json` for Spree
- `$HOME/.ocean/keeper-contracts/artifacts/OceanToken.development.json` for Ganache

## Step 2: Teach Your Wallet Software about Ocean Tokens

### MetaMask Instructions

1. Make sure MetaMask is connected to the correct network (Nile, Kovan or whatever). See [the tutorial about how to do that](/tutorials/connect-to-networks/).
1. For the account you want to manage, click the `☰` (hamburger menu icon).
1. Scroll down until the `ADD TOKEN` link is visible, then click on it.
1. Click on `Custom Token`.
1. Paste the OceanToken contract address (from Step 1 above) into the "Token Contract Address" field. The other two fields should auto-fill. If they don't then something is wrong.
1. Click `NEXT`.
1. Click `ADD TOKENS`.

### Other Wallet Software

Do a web search to find out how to add a custom ERC-20 token to the wallet software you're using.

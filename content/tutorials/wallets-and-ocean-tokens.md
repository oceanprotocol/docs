---
title: Use Your Wallet to Manage Ocean Tokens
description: How to use crypto wallet software to check your Ocean Token balance and to send Ocean Tokens to others.
---

If you don't see any Ocean Tokens in your crypto wallet software (e.g. MetaMask or MyEtherWallet), don't worry! It might not know how to manage Ocean Tokens yet.

## Step 1: Determine the Ocean Token Contract Address in the Network You're Using

If you know the URL of a Brizo instance attached to the network you're using, then just go to that URL in your web browser and get the value of `contracts.OceanToken`.

### Ethereum Mainnet

The Ocean Token contract address in the Ethereum Mainnet is:

[`0xxxx`](https://etherscan.io/token/0xxxx)

### Pacific Network

The Ocean Token contract address in the [Pacific Network](/concepts/pacific-network/) is:

[`0x012578f9381e876A9E2a9111Dfd436FF91A451ae`](https://submarine.oceanprotocol.com/address/0x012578f9381e876a9e2a9111dfd436ff91a451ae/transactions)

### Nile Testnet

The Ocean Token contract address in the [Nile Testnet](/concepts/testnets/#the-nile-testnet) is:

[`0x9861Da395d7da984D5E8C712c2EDE44b41F777Ad`](https://submarine.nile.dev-ocean.com/address/0x9861Da395d7da984D5E8C712c2EDE44b41F777Ad)

### Spree or Ganache-Based Testnet

If you're using [Barge](https://github.com/oceanprotocol/barge) to run a local Spree Testnet or a local Ganache-based testnet, then you can get the address of the OceanToken contract by looking at the value of `"address"` in:

- `$HOME/.ocean/keeper-contracts/artifacts/OceanToken.spree.json` for Spree
- `$HOME/.ocean/keeper-contracts/artifacts/OceanToken.development.json` for Ganache

## Step 2: Teach Your Wallet Software about Ocean Tokens

### MetaMask Instructions

1. Make sure MetaMask is connected to the correct network (Pacific, Nile or whatever). See [the tutorial about how to do that](/tutorials/connect-to-networks/).
2. For the account you want to manage, click the `☰` (hamburger menu icon).
3. Scroll down until the `Add Token` link is visible, then click on it.
4. Click on `Custom Token`.
5. Paste the OceanToken contract address (from Step 1 above) into the "Token Contract Address" field. The other two fields should auto-fill. If they don't then something is wrong.
6. Click `Next`.
7. Click `Add Tokens`.

MetaMask should now show your Ocean Token (OCEAN) balance, and when you're looking at that, there should be a `Send` button to send Ocean Tokens to others. For help with that, see [the MetaMask docs about how to send tokens](https://metamask.zendesk.com/hc/en-us/articles/360015488931-How-to-Send-Tokens).

### Other Wallet Software

Do a web search to find out how to add a custom ERC-20 token to the wallet software you're using.

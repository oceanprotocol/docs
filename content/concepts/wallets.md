---
title: Wallet Basics
description: Ocean users need a wallet to manage their Ocean Tokens and Ether. This page explains the basics of wallets.
---

To get and manage Ocean Tokens or Ether, you need a _cryptocurrency wallet_, _crypto wallet_ or just "wallet." More generally, you need a wallet to store your private keys (explained below).

## Recommendations

- **Easiest:** Use [MetaMask][1]. See the tutorial about [how to set up MetaMask](/tutorials/metamask-setup/). OR
- **Still easy, but more secure:** Get a [TREZOR][2] or [Ledger][3] wallet, and use [MetaMask][1] to interact with it.

## The Meaning of "Wallet"

A **wallet** usually means "a thing that stores private keys (and maybe signs transactions)" (explained below). Examples include [MetaMask][1], [TREZOR][2] wallets and a [Ledger][3] wallets.

A wallet can sometimes mean (web3) _software_ for interacting with a thing that stores private keys. Examples include [MetaMask][1], [MyEtherWallet][4], and [MyCrypto][5].

Note how MetaMask is in both lists!

You can also have a _chain_ of software which ultimately connects to the thing that stores the private keys. An example would be [Pleuston](/concepts/components/#pleuston) connecting to MetaMask connecting to a TREZOR wallet.

## Related Terminology

When you set up a new wallet, it might generate a **seed phrase** for you. Store that seed phrase somewhere secure and non-digital (e.g. on paper in a safe). It's extremely secret and sensitive. Anyone with your wallet's seed phrase could spend all the Ether and Ocean Tokens in all the accounts in your wallet.

Once your wallet is set up, it will have one or more **accounts**.

Each account has several **balances**, e.g. an Ether balance, an Ocean Token balance, and maybe other balances. All balances start at zero.

An account's Ether balance might be 7.1 ETH in the Ethereum mainnet, 2.39 ETH in the Kovan testnet, and 0.1 ETH in the Nile testnet. You can't move ETH from one network to another (unless there is a special exchange or bridge set up). The same is true of Ocean Token balances.

Each account has one **private key**, one **public key** and one **address**. The public key and address can be calculated from the private key. You must keep the private key secret because it's what's needed to spend/transfer Ether and Ocean Tokens (or to sign transactions of any kind). You can share the address with others. In fact, if you want someone to send some Ether or Ocean Tokens to an account, you give them the account's address.

Note that unlike traditional pocket wallets, crypto wallets don't actually store tokens or Ether. They store private keys.

## Tutorials

See the [tutorials about using wallets with Ocean Protocol](http://localhost:8000/tutorials/introduction/).


[1]: https://metamask.io/
[2]: https://trezor.io/
[3]: https://www.ledger.com/
[4]: https://www.myetherwallet.com/
[5]: https://www.mycrypto.com/

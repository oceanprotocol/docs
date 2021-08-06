---
title: Wallet Basics
description: 
---

Ocean users need an ERC-20 compatible wallet to manage their ETH and OCEAN tokens. 

## Recommendations

- **Easiest:** Use [MetaMask](https://metamask.io/) browser plug-in. 
- **Still easy, but more secure:** Get a [Trezor](https://trezor.io/) or [Ledger](https://www.ledger.com/) hardware wallet, and use MetaMask to interact with it.
- The [OCEAN Token page](https://oceanprotocol.com/token) at oceanprotocol.com lists some other possible wallets.

## The Meaning of "Wallet"

A wallet usually means "a thing that stores private keys (and maybe signs transactions)" (explained below). Examples include MetaMask, Trezor, and Ledger wallets.

A wallet can sometimes mean (web3) _software_ for interacting with a thing that stores private keys. Examples include MetaMask, [MyEtherWallet](https://www.myetherwallet.com/), and [MyCrypto](https://www.mycrypto.com/).

Note how MetaMask is in both lists!

## Related Terminology

When you set up a new wallet, it might generate a **seed phrase** for you. Store that seed phrase somewhere secure and non-digital (e.g. on paper in a safe). It's extremely secret and sensitive. Anyone with your wallet's seed phrase could spend all the Ether and Ocean Tokens in all the accounts in your wallet.

Once your wallet is set up, it will have one or more **accounts**.

Each account has several **balances**, e.g. an Ether balance, an Ocean Token balance, and maybe other balances. All balances start at zero.

An account's Ether balance might be 7.1 ETH in the Ethereum Mainnet, 2.39 ETH in Ropsten testnet. You can move ETH from one network to another only with a specially setup exchange or bridge. Also, you can't transfer tokens from networks holding value such as Ethereum mainnet to networks not holding value, ie testnets like Ropsten. The same is true of OCEAN token balances.

Each account has one **private key** and one **address**. The address can be calculated from the private key. You must keep the private key secret because it's what's needed to spend/transfer ETH and OCEAN (or to sign transactions of any kind). You can share the address with others. In fact, if you want someone to send some ETH or OCEAN to an account, you give them the account's address.

Note that unlike traditional pocket wallets, crypto wallets don't actually store ETH or OCEAN. They store private keys.

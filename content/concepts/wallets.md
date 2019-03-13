---
title: Wallet Basics
description: Ocean users need a wallet to manage their Ocean Tokens and Ether. This page explains the basics of wallets.
---

## Introduction

If you want to use the Ocean Network, then you need [Ocean Tokens](/concepts/ocean-tokens/) and Ether. To get and manage Ocean Tokens and Ether, you need a _cryptocurrency wallet_ or _crypto wallet_.

## What Crypto Wallets Can Be Used with Ocean?

The following combinations will almost certainly work:

Wallet User Interface Software | Access Wallet with           | Wallet (Stores Private Keys)
-------------------------------|------------------------------|-----------------------------
[MetaMask][1]                  | [MetaMask][1]                | [MetaMask][1]
[MetaMask][1]                  | [MetaMask][1]                | [TREZOR][2] hardware wallet
[MyEtherWallet][4]             | [MetaMask][1]                | [MetaMask][1]
[MyEtherWallet][4]             | [MetaMask][1]                | [TREZOR][2] hardware wallet
[MyEtherWallet][4]             | [TREZOR][2] hardware wallet  | [TREZOR][2] hardware wallet
[MyCrypto][5]                  | [MetaMask][1]                | [MetaMask][1]
[MyCrypto][5]                  | [MetaMask][1]                | [TREZOR][2] hardware wallet
[MyCrypto][5]                  | [TREZOR][2] hardware wallet  | [TREZOR][2] hardware wallet

Note: Other combinations will _probably_ also work. For example, a [Ledger][3] hardware wallet can probably be used in place of a TREZOR hardware wallet.

See the [MetaMask setup tutorial](/tutorials/metamask-setup/).

Why only those combinations? You need a combination that can:

1. connect to both the Main Ethereum Network or the Main Ocean Network (or a custom network), and
1. manage Ether and Ocean Tokens (or custom tokens).

## Terminology

When you set up a new (crypto) wallet, it might generate a **seed phrase** for you. Store that seed phrase somewhere secure and non-digital (e.g. on paper in a safe). It's extremely secret and sensitive. Anyone with your wallet's seed phrase could spend all the Ether and Ocean Tokens in all the accounts in your wallet.

Once your wallet is set up, it will have one or more **accounts**.

Each account has several **balances**, e.g. an Ether balance, an Ocean Token balance, and maybe other balances. All balances start at zero.

An account's Ether balance might be 7.1 ETH in the Ethereum mainnet, 2.39 ETH in the Kovan testnet, and 0.1 ETH in the Nile testnet. You can't move ETH from one network to another (unless there is a special exchange or bridge set up). The same is true of Ocean Token balances.

Each account has one **private key**, one **public key** and one **address**. The public key and address can be calculated from the private key. You must keep the private key secret because it's what's needed to spend/transfer Ether and Ocean Tokens. You can share the address with others. In fact, if you want someone to send some Ether or Ocean Tokens to an account, you give them the account's address.

Notes:

- The blockchain has a record of every spend/receive transaction ever and it's public, so anyone can determine all the balances of all the accounts.
- Unlike traditional pocket wallets, crypto wallets don't actually store the tokens or Ether. They store private keys and maybe other things. (An account's public key and address can be calculated from its private key.)

## Types of Wallets

It's easy to get confused or overwhelmed by all the types of wallets and all the options for accessing them. However, there are really only a few questions you need to ask about a given wallet + software combination:

1. Where are my private keys stored? How secure is that?
1. Can the combination connect to the networks I care about (such as the Main Ocean Network)?
1. Can the combination be used to manage the cryptocurrencies I care about (such as Ocean Tokens)?

Hardware wallets store private keys inside a "secure enclave" (on a special device) so they can't be read out easily. All you can do is send a transaction to the hardware wallet to get the transaction signed by the private key. It then returns the signed transaction. The private key never leaves the hardware wallet.
Other wallets store private keys on a hard drive, in memory, on a remote server, or on a piece of paper.
Each option gives you a tradeoff between security and ease of use / convenience. It's easier to steal or delete a private key if it's stored on a computer, especially a computer that's connected to the internet.

We encourage you to search around and read about wallets to understand the options. This page isn't a deep dive; it's just a primer.

[1]: https://metamask.io/
[2]: https://trezor.io/
[3]: https://www.ledger.com/
[4]: https://www.myetherwallet.com/
[5]: https://www.mycrypto.com/

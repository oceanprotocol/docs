---
title: Wallet Basics
description: Ocean users need a wallet to manage their Ocean Tokens and Ether. This page explains the basics of wallets.
---

## Introduction

If you want to use the Ocean Network, then you need Ocean Tokens (typical ERC-20 tokens) and Ether, and to get Ocean Tokens and Ether, you need a _cryptocurrency wallet_ or _crypto wallet_ to manage them.

When you set up a new (crypto) wallet, it might generate a **seed phrase** for you. Store that seed phrase somewhere secure and non-digital (e.g. on paper in a safe). It's extremely secret and sensitive. Anyone with your wallet's seed phrase could spend all the Ether and Ocean Tokens in all the accounts in your wallet.

Once your wallet is set up, it will have one or more **accounts**.

Each account has several **balances**, e.g. an Ether balance, an Ocean Token balance, and maybe other balances. All balances start at zero.

An account's Ether balance might be 7.1 ETH in the Ethereum mainnet, 2.39 ETH in the Kovan testnet, and 0.1 ETH in the Nile testnet. You can't move ETH from one network to another (unless there is a special exchange or bridge set up). The same is true of Ocean Token balances.

Each account has one **private key**, one **public key** and one **address**. The public key and address can be calculated from the private key. You must keep the private key secret because it's what's needed to spend/transfer Ether and Ocean Tokens. You can share the address with others. In fact, if you want someone to send some Ether or Ocean Tokens to an account, you give them the account's address.

Notes:

- The blockchain has a record of every spend/receive transaction ever and it's public, so anyone can determine all the balances of all the accounts.
- Unlike traditional pocket wallets, crypto wallets don't actually store the tokens or Ether. They store private keys and maybe other things. (An account's public key and address can be calculated from its private key.)

## Types of Wallets

It's easy to get confused or overwhelmed by all the types of wallets. However, there is really only one question you need to ask about a given wallet:

_Where are my private keys stored?_

Hardware wallets store private keys inside a "secure enclave" (on a special device) so they can't be read out easily. All you can do is send a transaction to the hardware wallet to get the transaction signed by the private key. It then returns the signed transaction. The private key never leaves the hardware wallet.

Other wallets store private keys on a hard drive, or in memory, or on a remote server.

A "paper wallet" is just a piece of paper with one or more private keys written on it.

Each option gives you a tradeoff between security and ease of use / convenience. It's easier to steal or delete a private key if it's stored on a computer, especially a computer that's connected to the internet.

We encourage you to search around and read about wallets to understand the options. This page isn't a deep dive; it's just a primer.

## Wallets which Might Work with Ocean Tokens

[ERC-20 tokens](https://en.wikipedia.org/wiki/ERC-20) are the most common kind of tokens found in Ethereum-based networks. **Ocean Tokens are ERC-20 tokens**, so any wallet that supports arbitrary ERC-20 tokens should work to hold Ocean Tokens. 

For example, you could use [MetaMask](https://metamask.io/), either as a stand-alone wallet, or with to a hardware wallet. We have a [tutorial about how to set up MetaMask for Chrome](/tutorials/metamask-setup).

Other wallets which _might_ work with Ocean Tokens are:

- [Gnosis Safe](https://safe.gnosis.io)
- [Trust Wallet](https://trustwallet.com)
- [Tokenary](https://tokenary.io)
- [Ledger](https://www.ledger.com/) hardware wallets (along with Ledger software)
- [TREZOR](https://trezor.io/) hardware wallets (along with other software such as MyEtherWallet)

**We don't recommend or endorse any particular wallets at this time.**

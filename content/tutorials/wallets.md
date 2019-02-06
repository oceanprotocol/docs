---
title: Wallets for Ocean Tokens
description: If you want to use the Ocean Network, you need Ocean Tokens (typical ERC-20 tokens), and to get Ocean Tokens, you need to get a wallet that can hold Ocean Tokens.
---
## Intro to wallets

In this section, we will be reviewing what crypto wallets are, how they work and the different types of wallets you can find.

**What is a crypto wallet?**
As the name suggests, a crypto wallet is a type of digital wallet that stores cryptocurrencies. It uses private and public key based encryption to allow users to send and receive cryptocurrencies.

**Why do we need a wallet?**
Unlike traditional pocket wallets, digital wallets do not actually store the currency. For example, your bank app or website does not store the money. It just shows what is recorded on the bank’s servers. The difference for a cryptocurrency is that the record of your transactions are written onto the blockchain, so everyone who is a part of the blockchain has access to these transaction records. A crypto wallet is a software program that interacts with these various blockchains to show the final recorded amount so the wallet owners can monitor their balance, and send/receive cryptos. 

**What are the different types of wallets?**
Just as wallets come in various shapes and sizes in the real world, several types crypto-wallets are also available offering different ways of storing your cryptocurrencies. Each type has its own strengths and weaknesses. Here’s a brief overview

| **Type of Wallet** | **Strengths** | **Weaknesses**
| --- | --- | --- |
| Desktop/mobile | These are downloaded and stored on the desktop or mobile device and can only be accessed through this one device so it&#39;s highly secure. Mobile wallets have the additional benefit of being portable | If the computer/phone is hacked or gets a virus, there's a possibility that your funds could be lost forever. Mobile wallets are also restricted by limited space so tend to be smaller. 
| Hardware | The private keys are stored on a physical device such as a USB stick. Hardware wallets have the ability to make transactions online, but are very secure because they are stored offline. | If you lose your hardware wallet, all your funds are lost. So this may not be the best option for careless folks!
| Software | These are cloud-based wallets that are accessible over the internet. They are the most convenient to access, and are currently the most popular way to store cryptos. | Since online wallets are controlled by third parties, this centralization leads to a greater risk of your private keys being stolen through hacking. |   |
| Paper | A physical copy or printout of your public and private keys. Highly secure, portable and easy to store. These can come in the form of printing out hexa numbers or via a QR code.   | Similar weaknesses to a hardware wallet, that if you loose the keys, then you don&#39;t have any access. 
|   |   |   |   |

This article isn't a deep-dive, but is just a primer into how wallets work. For a more in-depth understanding, you can [check out this article](https://blockgeeks.com/guides/cryptocurrency-wallet-guide/).


## Wallet Options

Ocean Tokens are [ERC-20 tokens](https://en.wikipedia.org/wiki/ERC-20), so any wallet that supports arbitrary ERC-20 tokens should work to hold Ocean Tokens. ERC-20 tokens are Ethereum-compatible standard tokens.

There are many kinds of wallets (such as paper wallets, hardware wallets, software wallets, custodial wallets), and each of these has its own advantages and disadvantages. We encourage you to search around and read about wallets to understand the options. 


## Software Wallet

In this section, we will explore different types of software wallets.

### MetaMask Setup

We will explain briefly what Metamask is, and how to setup a Metamask account.

**What is MetaMask?**
MetaMask is a browser extension that allows web applications to interact with the Ethereum blockchain. In our current setup, browsers like Chrome/Firefox display information by fetching it from a server. Our current web browsers (web 2.0 as it’s called) are not build to interface with distributed systems. This is why MetaMask is needed, as it allows modern web browsers to interact with the Ethereum blockchain.


**Why is Metamask required?**
The unique part about MetaMask is that it serves a dual purpose as an ERC-20 wallet and a Web 3.0 browser. For users, it works as an Ethereum wallet, allowing them to store and send any ERC-20 tokens. For developers, it allows you to design and run Ethereum DApps right in your browser without running a full Ethereum node. MetaMask talks to the Ethereum blockchain for you.

**How to setup Metamask?**
Here are some setup Instructions for Metamask

1. Go to the Chrome Web Store for extensions and search/install metamask. ![metamask-chrome-store](images/metamask-chrome-extension.png)

2. It will get added as a browser extension on the top right portion. Read through and accept the terms and conditions. Create a username and password in the next step. ![tandc-metamask](images/metamask-create-username-password.png)

3. MetaMask will generate a secret backup phrase for you. Write it down, store it in a safe place, and click next. ![backup](images/metamask-secret-passcode.png)

4. Confirm your secret backup phrase and finish your MetaMask wallet set up! ![setup-final-metamask](images/metamask_view-account-options.png)

5. Voila! Your account is now created! You can now store tokens in your wallet. You can copy your account address to clipboard from the options. This address is where you will be receiving all your ERC-20 tokens.  

You can find more resources for setting up [here]().

**We don't recommend or endorse any particular wallets at this time.** Some other software wallets which _might_ work with Ocean Tokens are:

- Gnosis Safe
- Trust Wallet
- Tokenary

## Hardware Wallets

Two of the most popular options are [Trezor](https://trezor.io/) and [Ledger](https://www.ledger.com/pages/ledger-live).

Here is the tutorial for setting up both. **Please note** that hardware wallet tutorials mentioned are general purpose for all ERC-20 tokens, and not specific to Ocean. 

1. [Ledger](https://coinsutra.com/edger-nano-s-setup-guide/).
2. [Trezor](https://wiki.trezor.io/User_manual)

## Some Terminology

There's a lot of terminology around wallets, so we'll start by going over some of it.

A wallet might contain only one **account** (Ethereum account) or it might contain many accounts.

Each account has a **balance** (e.g. 1.832 Ocean Tokens), an **address** (e.g. 0xa0A9d7e78bF29351997cA5589A0Af689eEC99211), a **public key** and a **private key**.

An account is identified by its address, so if you want someone to send some Ocean Tokens to a specific account, you give them the account's address.

The private key is used to spend the Ocean Tokens in the account. You must keep it secret, because anyone with that private key can spend those tokens. If you lose the secret key, then you loose _all access_ to your funds, so be careful not to loose it!

> Note: The same account might have an Ocean Token balance, an [Ether](https://www.ethereum.org/ether) balance, and other balances.



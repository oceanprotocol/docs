---
title: Wallets for Ocean Tokens
description: If you want to use the Ocean Network, you need Ocean Tokens (typical ERC-20 tokens), and to get Ocean Tokens, you need to get a wallet that can hold Ocean Tokens.
---

## Some Terminology

There's a lot of terminology around wallets, so we'll start by going over some of it.

A wallet might contain only one **account** (Ethereum account) or it might contain many accounts.

Each account has a **balance** (e.g. 1.832 Ocean Tokens), an **address** (e.g. 0xa0A9d7e78bF29351997cA5589A0Af689eEC99211), a **public key** and a **private key**.

An account is identified by its address, so if you want someone to send some Ocean Tokens to a specific account, you give them the account's address.

The private key is used to spend the Ocean Tokens in the account. You must keep it secret, because anyone with that private key can spend those tokens. If you lose the secret key, and nobody else has it, then _nobody_ can spend those tokens, so don't lose it!

> Note: The same account might have an Ocean Token balance, an [Ether](https://www.ethereum.org/ether) balance, and other balances.

## Wallet Options

Ocean Tokens are [ERC-20 tokens](https://en.wikipedia.org/wiki/ERC-20), so any wallet that supports arbitrary ERC-20 tokens should work to hold Ocean Tokens. Any standard Ethereum-compatible tokens are called ERC-20 tokens.

There are many kinds of wallets (e.g. paper wallets, hardware wallets, software wallets, custodial wallets), each with its own advantages and disadvantages. There is a tradeoff between security and convenience. We encourage you to search around and read about wallets to understand the options. In this section, we will explain how to setup a create a MetaMask wallet account. 


## Software Wallet
### MetaMast Setup

We will be walking you through a tutorial to setup Metamask, if you haven't done so already.

**What is MetaMask?**

MetaMask is a browser extension that allows web applications to interact with the Ethereum blockchain. In our current setup, browsers like Chrome/Firefox display information by fetching it from a database. But our current web browsers (web 2.0 as it’s called) are not build to interface with distributed databases a.k.a. the blockchain (web 3.0). This is why MetaMask is needed, as it allows modern web browsers to interface with the Ethereum blockchain.


**Why is Metamask required?**

The unique part about MetaMask is that it serves a dual purpose as an ERC-20 wallet and a Web 3.0 browser. For users, it works as an Ethereum wallet, allowing them to store and send any ERC-20 tokens. For developers, it allows you to design and run Ethereum DApps right in your browser without running a full Ethereum node. MetaMask talks to the Ethereum blockchain for you.

**Setup Instructions for Metamask**
1. Go to the Chrome Web Store for extensions and search/install metamask.

![metamask-chrome-store](images/metamask-chrome-extension.png)

2. It will get added as a browser extension on the top right portion. Go ahead and accept the terms and conditions. Create a username and password as well.
![tandc-metamask](images/metamask-create-username-password.png)

3. MetaMask will generate a secret backup phrase for you. Write it down, store it in a safe place, and click next.  
![backup](images/metamask-secret-passcode)

4. Confirm your secret backup phrase and finish your MetaMask wallet set up!
![setup-final-metamask](metamask_view-account options)

5. Voila! Your account is now created! You can now buy and sell tokens. You can copy your account address to clipboard from the options. This address is where you will be receiving all your ERC-20 tokens.  


**We don't recommend or endorse any particular wallets at this time.** Some wallets which _might_ work with Ocean Tokens are:

- Gnosis Safe
- MetaMask
- Trust Wallet
- Tokenary

## Hardware Wallets
Two of the most popular options are [Trezor](https://trezor.io/) and [Ledger](https://www.ledger.com/pages/ledger-live).

Here is the tutorial for setting up both. 
1. [Ledger](https://coinsutra.com/edger-nano-s-setup-guide/).
2. [Trezor](https://wiki.trezor.io/User_manual)

## New to this?

**What is a crypto wallet?**
As the name suggests, a crypto wallet is a type of digital wallet that stores cryptocurrencies. It uses private and public key based encryption to allow users to send and receive cryptocurrencies.

**Why do we need a wallet?**
Unlike traditional pocket wallets, digital wallets do not actually store the currency. For example, your bank app or website does not store the money. It just shows what is recorded on the bank’s servers. The difference for a cryptocurrency is that the record of your transactions are written onto the blockchain, so everyone who is a part of the blockchain has access to these transaction records. A crypto wallet is a software program that interfaces with these various blockchains to show the final recorded amount so the wallet owners can monitor their balance, and send/receive money. 

**What are the different types of wallets?**
Just as wallets come in various shapes and sizes in the real world, several types crypto-wallets are also available offering different ways of storing your cryptocurrencies. Each type has its own strengths and weaknesses. Here’s a brief overview

| **Type of Wallet** | **Strengths** | **Weaknesses**
| --- | --- | --- |
| Desktop or mobile | Can be downloaded and stored on the desktop or mobile device. Can only be accessed through this one device so it&#39;s highly secure. Mobile wallets have the additional benefit of being portable | If the computer/phone is hacked or gets a virus, it&#39;s possible that your funds could be lost forever. Mobile wallets are also restricted by limited space so tend to be smaller. 
| Hardware | The private keys are stored on a physical device such as a USB stick.Hardware wallets have the ability to make transactions online, but are very secure because they are stored offline. | If you lose your hardware wallet, all your funds are lost. So this may not be the best option if you&#39;re careless.
| Software | These are cloud-based wallets that are accessible over the internet. They are the most convenient to access, and are currently the most popular way to store cryptos. | Since online wallets are controlled by third parties, this centralization leads to a greater risk of your private keys being stolen through hacking. |   |
| Paper | A physical copy or printout of your public and private keys. Highly secure, portable and easy to store. These can come in the form of printing out hexa numbers or via a QR code.   | Similar weaknesses to a hardware wallet, that if you loose the keys, then you don&#39;t have any access. 
|   |   |   |   |
This article isn't a deep-dive into how various wallets work, but is a primer into how to buy and sell cryptos. For a more in-depth understanding, you can [check out this article](https://blockgeeks.com/guides/cryptocurrency-wallet-guide/).

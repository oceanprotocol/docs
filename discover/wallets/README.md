---
description: Fundamental knowledge of using ERC-20 crypto wallets.
---

# Wallets

Ocean Protocol users require an ERC-20 compatible wallet to manage their OCEAN and ETH tokens. In this guide, we will provide some recommendations for different wallet options.

<figure><img src="../../.gitbook/assets/gif/whats-a-wallet.gif" alt=""><figcaption></figcaption></figure>

### What is a wallet?

In the blockchain world, a wallet is a software program that stores cryptocurrencies secured by private keys to allow users to interact with the blockchain network. Private keys are used to sign transactions and provide proof of ownership for the digital assets stored on the blockchain. Wallets can be used to send and receive digital currencies, view account balances, and monitor transaction history. There are several types of wallets, including desktop wallets, mobile wallets, hardware wallets, and web-based wallets. Each type of wallet has its own unique features, advantages, and security considerations.

### Recommendations

* **Easiest:** Use the [MetaMask](https://metamask.io/) browser plug-in.
* **Still easy, but more secure:** Get a [Trezor](https://trezor.io/) or [Ledger](https://www.ledger.com/) hardware wallet, and use MetaMask to interact with it.
* The [OCEAN Token page](https://oceanprotocol.com/token) at oceanprotocol.com lists some other possible wallets.

### Related Terminology

When you set up a new wallet, it might generate a **seed phrase** for you. Store that seed phrase somewhere secure and non-digital (e.g. on paper in a safe). It's extremely secret and sensitive. Anyone with your wallet's seed phrase could spend all the Ether and Ocean Tokens in all the accounts in your wallet.

Once your wallet is set up, it will have one or more **accounts**.

Each account has several **balances**, e.g. an Ether balance, an Ocean Token balance, and maybe other balances. All balances start at zero.

An account's Ether balance might be 7.1 ETH in the Ethereum Mainnet, 2.39 ETH in Görli testnet. You can move ETH from one network to another only with a special setup exchange or bridge. Also, you can't transfer tokens from networks holding value such as Ethereum mainnet to networks not holding value, i.e., testnets like Görli. The same is true of OCEAN token balances.

Each account has one **private key** and one **address**. The address can be calculated from the private key. You must keep the private key secret because it's what's needed to spend/transfer ETH and OCEAN (or to sign transactions of any kind). You can share the address with others. In fact, if you want someone to send some ETH or OCEAN to an account, you give them the account's address.

{% hint style="info" %}
Unlike traditional pocket wallets, crypto wallets don't actually store ETH or OCEAN. They store private keys.
{% endhint %}

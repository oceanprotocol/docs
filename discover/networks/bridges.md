---
title: Bridges
description: Transfer tokens between two blockchain networks.
---

# Bridges

A bridge is a mechanism that connects two or more separate blockchain networks, enabling communication and interoperability between them. Bridges can be designed to facilitate the transfer of assets, data, or messages between different blockchain networks that may operate on different protocols, and consensus mechanisms, or have different native currencies.

This page covers:
- **Celer Bridge** - bridge OCEAN from Eth mainnet <> Oasis Sapphire mainnet
- **BNB Smart Chain Bridge** - bridge OCEAN from Eth mainnet <> BNB Smart Chain

For other bridges and networks, see the [Networks page](README.md).

The rest of this doc gives bridging details. You can skip it until you need the reference information.

## Celer Bridge

To transfer OCEAN to and from the Oasis Sapphire Mainnet, we recommend using the [Celer Bridge](https://cbridge.celer.network/1/23294/OCEAN). No bridge is needed for transfering OCEAN to the Oasis Sapphire Testnet because Ocean Protocol offers a [faucet](https://faucet.sapphire.oceanprotocol.com/) for OCEAN on Oasis Sapphire Testnet. Note that Ocean Protocol supports Oasis Sapphire networks for [Predictoor](https://predictoor.ai) development, and does not currently support Oasis Sapphire for ocean.js, ocean.py, or Ocean Market.

## BNB Smart Chain Bridge

To transfer OCEAN to and from the BNB Smart Chain, we recommend using the [Binance Bridge](https://www.bnbchain.org/en/bridge). BSC offers various options such as withdrawing crypto from [Binance](https://www.binance.com/en) and utilizing the [Binance Bridge](https://www.bnbchain.org/en/bridge). You can refer to the Binance Academy article "[How to Get Started with BSC](https://academy.binance.com/en/articles/how-to-get-started-with-binance-smart-chain-bsc)" for more information.

{% hint style="warning" %}
In case you opt for an alternative bridge option and intend to transfer tokens to Binance, it is **crucial** to ensure that the contract address you are sending the tokens to is correct.

<img src="../../.gitbook/assets/wallet/binance-receive.png" alt="Binance deposit" data-size="original">
{% endhint %}

## Polygon (ex Matic) Bridge

The Polygon Network (previously known as Matic) offers a [bridge](https://wallet.polygon.technology/bridge/), which lets you easily transfer digital assets between Ethereum and Polygon blockchains and a dedicated [wallet](https://wallet.polygon.technology/) designed for this purpose, which can be linked to your account through Metamask or other compatible wallets.



If you prefer a video tutorial, here is one available for you. Otherwise, you can follow the steps below.

{% embed url="https://www.youtube.com/watch?v=W5eIipUHl-w" %}

All you need to do is click on the [wallet](https://wallet.polygon.technology/) link, select your preferred method of connection, and log in to get started. In this guide, we'll be using Metamask to connect the wallet.

<figure><img src="../../.gitbook/assets/wallet/polygon-login.png" alt="Polygon login options"><figcaption><p>Login options</p></figcaption></figure>

You might come across the name "Matic" in some places instead of "Polygon" because the network is still using its old brand name in certain instances. Don't worry though, it's the same network whether you see Matic or Polygon.

Check out this [blog post](https://blog.oceanprotocol.com/ocean-on-polygon-network-8abad19cbf47) for more details.

#### Deposit Tokens

When you access the wallet's main page, you'll be able to view all the tokens you possess on the Polygon Mainnet. If you want to deposit tokens (i.e., transfer them from the Ethereum Mainnet), there are two ways to do it: you can either click the "deposit" button for a specific token or use the "Move funds from Ethereum to Polygon" option.

![Main wallet page](../../.gitbook/assets/wallet/polygon-wallet-page.png)

In case you are unable to find OCEAN in the list while depositing, simply click on "Manage token list" and enable the Polygon Tokens option, which contains a greater number of listed tokens. This will add Ocean to the tokens list.

![Ocean on Polygon](../../.gitbook/assets/wallet/polygon-ocean.png)

Both of these options will redirect you to the bridge interface. If you select the second option, you'll need to use the dropdown menu to choose the token that you wish to transfer from the Ethereum Mainnet.

![Bridge interface](../../.gitbook/assets/wallet/polygon-bridge.png)

Select the number of tokens you want to transfer and hit the "Transfer" button. The bridge interface provided by Polygon will guide you through all the necessary steps, including signing two transactions on the Ethereum Mainnet. The first transaction involves giving permission for the tokens to be traded on Polygon's bridge, while the second transaction is the actual deposit.

#### Withdraw Tokens

The process of withdrawing tokens also utilizes the bridge interface, but this time the withdrawal will happen from Polygon to the Ethereum Mainnet. The bridge interface will guide you through all the necessary steps for this process as well.

For more detailed information about depositing and withdrawing actions, you can refer to the official Polygon [documentation](https://wiki.polygon.technology/docs/develop/ethereum-polygon/plasma/eth/).

#### Sending Tokens

Unlike the first two cases where transactions are signed on the Ethereum Mainnet, transferring tokens between two Matic addresses occurs on the Polygon Mainnet. As a result, it's necessary to connect to the Polygon network in order to sign these transactions. Setting up the network on Metamask can be done in several ways.

The easiest one is to go to the [polygon network explorer](https://polygonscan.com/) and tap the "Add polygon network" button.

<figure><img src="../../.gitbook/assets/wallet/polygon-explorer.png" alt=""><figcaption></figcaption></figure>

Alternatively, you can manually configure the network on Metamask by using the following parameters. To learn how to set up a custom network in Metamask using these values, you can refer to this [guide](../wallets/metamask-setup.md#set-up-custom-network).

| What               | Value                                                |
| ------------------ | ---------------------------------------------------- |
| Network Name       | Polygon                                              |
| RPC                | `https://polygon-rpc.com/`                           |
| Chain Id           | `137`                                                |
| Currency Symbol    | `MATIC`                                              |
| Block Explorer URL | [`https://polygonscan.com`](https://polygonscan.com) |



----

_Next: [FAQ](../faq.md)_

_Back: [Networks](README.md)_


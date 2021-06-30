---
title: Polygon (ex Matic)
description: 
---


## Links

- [Matic Wallet](https://wallet.matic.network)
- [Matic Bridge](https://wallet.matic.network/bridge)
- [How to set up a custom network in MetaMask](/tutorials/metamask-setup/#set-up-custom-network)

## Intro to Polygon's Bridge

The Polygon Network (ex Matic) provide us with a bridge (connecting Ethereum & Polygon blockchains), and a dedicated [wallet](https://wallet.matic.network) that simplify the steps of transferring digital assets between the two networks. The wallet connects to your account via Metamask (or any of the other supported wallets). 

When you open the wallet link, the wallet will ask to log in. Select your preferred way of connecting and confirm the action. In our guide we'll use Metamask.

![Login options](images/login-options.png)

In some places, the Polygon Network is still using its old brand Matic. Either you run into Matic or Polygon - it's the exact same thing. For the purpose of this guide, we'll use Matic in the next few paragraphs since the interfaces you're going to use still use the old brand.

For details check the [blog post](https://blog.oceanprotocol.com/ocean-on-polygon-network-8abad19cbf47).

## Deposit Tokens

On the main page of the wallet, you can see all tokens you own on the Matic Mainnet. To deposit tokens (transfer them from the Ethereum Mainnet) you can either use the “deposit” button for a selected token or use “Move funds to Matic Mainnet”. 

![Main wallet page](images/main-wallet-page.png)

Both options will redirect you to the bridge interface. In case you chose the second one, use the dropdown and select the token you want to transfer from the Ethereum Mainnet.

![Bridge interface](images/matic-bridge.png)

Choose the amount to transfer and click the “Transfer” button. Matic’s bridge interface will guide you through the whole process and the different steps that will occur. You’ll need to sign two transactions on the Ethereum Mainnet. The first being the approval for your token to be traded on the Matic’s bridge and the second one being the deposit.

![Transferring process](images/transferring-process.png)

## Withdraw Tokens

The withdrawing tokens process uses the same bridge interface. The only difference being that the withdraw happens from the Matic to the Ethereum Mainnet. 

Again the bridge interface will guide you through the different steps. 

For more in dept explanation of the deposit and withdraw actions check [the official Polygon (ex Matic) docs](https://docs.matic.network/docs/develop/ethereum-matic/pos/getting-started).

## Sending Tokens

While in the first two cases, the transactions are signed on the Ethereum Mainnet, transferring tokens between two Matic addresses happens on the Matic Mainnet. Thus it’s required for you to connect to the Matic network to sign the transactions. You can use the following parameters to set the network in Metamask:

| What               | Value                                    |
|--------------------|------------------------------------------|
| Network Name       | `Matic Mainnet`                          |
| RPC                | `https://rpc.polygon.oceanprotocol.com/` |
| Chain Id           | `137`                                    |
| Currency Symbol    | `MATIC`                                  |
| Block Explorer URL | `https://explorer.matic.network/`        |

Follow our guide to learn how to use those values to [set up a custom network in MetaMask](/tutorials/metamask-setup/#set-up-custom-network).

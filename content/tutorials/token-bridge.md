---
title: Transfer Ocean Tokens between Networks
description: How to use the token bridge to transfer Ocean Tokens from the Ethereum Mainnet to the Pacific Network, and vice versa.
---

TODO: All images here are placeholders for now. Replace them with images showing the Ocean-specific token bridge UI.

## Introduction

There is a token bridge between the Ethereum Mainnet and the [Pacific Network](/concepts/pacific-network/):

- [**Ocean Token Bridge**](https://bridge.oceanprotocol.com)

It's based on the [TokenBridge by POA Network](https://medium.com/poa-network/introducing-the-erc20-to-erc20-tokenbridge-ce266cc1a2d0) (the company), but the user interface was modified to conform to the Ocean Protocol style, and the loaded contracts are fixed to a specific security-checked version.[^1]

This tutorial shows how you can use the token bridge to transfer Ocean Tokens (OCEAN) from the Ethereum Mainnet to the Pacific Network.

## Using the Token Bridge

> **Please Note: If you transfer your Ocean Tokens to the Pacific Network, then you are putting your Ocean Tokens at risk.**

### Ethereum Mainnet → Ocean Pacific

If you want to transfer OCEAN out of the Ethereum Mainnet, then first you need an Ethereum account with some OCEAN in the Ethereum Mainnet, and be connected to Ethereum Mainnet in MetaMask. If you want to get some OCEAN in the Ethereum Mainnet, then see the page about [Ocean Tokens](/concepts/ocean-tokens/).

Below is a screenshot of MetaMask showing an account (with address `0x8…`) which has 500 OCEAN in the Ethereum Mainnet. If you want MetaMask to show OCEAN, then see the page about [using your wallet to manage Ocean Tokens](/tutorials/wallets-and-ocean-tokens/).

![MetaMask showing an account that has 500 OCEAN in the Ethereum Mainnet](./images/tb01.png)

To use the token bridge between the Ethereum Mainnet and the Pacific Network, go to [**bridge.oceanprotocol.com**](https://bridge.oceanprotocol.com).

You should see something like this:

![The Ocean token bridge user interface](./images/tb02.png)

The above screenshot shows that the account with address `0x8…` has 500 OCEAN in the Ethereum Mainnet and 0 OCEAN in the Pacific Network.

- Enter the amount of OCEAN you want to transfer (e.g. 1 OCEAN in the screenshot)
- Click **Transfer**

A confirmation dialog box like the following should appear.

![Confirmation dialog box](./images/tb03.png)

- Click **Continue**

You should see some status updates like the following.

![A status update: Waiting for Block Confirmations](./images/tb04.png)

If the transfer is a success, then you should see a dialog box like the following.

![Success!](./images/tb05.png)

Notice how the transaction ID is shown.

- Click **OK**

If you go back to MetaMask and switch the network to Pacific, then the account's OCEAN balance in Pacific should be higher by the amount just transferred.

![MetaMask showing an account that has 1 OCEAN in the Pacific Network](./images/tb06.png)

### Ocean Pacific → Ethereum Mainnet

To go the other way around, transfering Ocean Tokens from Pacific back into the Ethereum Mainnet, you simply connect to Pacific in MetaMask.

This will reverse the order of the token bridge networks:

![From Pacific to Ethereum Mainnet](./images/tb07.png)

Then follow the same steps as outlined above.

[^1]: The code for the Ocean Protocol version of the token bridge UI is in the [oceanprotocol/token-bridge-ui](https://github.com/oceanprotocol/token-bridge-ui) repo on GitHub.

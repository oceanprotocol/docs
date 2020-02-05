---
title: Transfer Ocean Tokens between Networks
description: How to use the token bridge to transfer Ocean Tokens from the Ethereum Mainnet to the Pacific Network, and vice versa.
---

## Introduction

There is a token bridge between the Ethereum Mainnet and the [Pacific Network](/concepts/pacific-network/) available under [**bridge.oceanprotocol.com**](https://bridge.oceanprotocol.com) to transfer [Ocean Tokens](/concepts/ocean-tokens/) (OCEAN) between those networks.

[![The Ocean token bridge user interface](images/tb02.png)](https://bridge.oceanprotocol.com)

It's based on the [TokenBridge by POA Network](https://medium.com/poa-network/introducing-the-erc20-to-erc20-tokenbridge-ce266cc1a2d0) (the company), but the user interface was modified to conform to the Ocean Protocol style, and the loaded contracts are fixed to a specific security-checked version.[^1]

## Using the Token Bridge


### Ethereum Mainnet → Ocean Pacific

If you want to transfer OCEAN out of the Ethereum Mainnet, then first you need an Ethereum account with some OCEAN in the Ethereum Mainnet, and be connected to Ethereum Mainnet in MetaMask. If you want to get some OCEAN in the Ethereum Mainnet, then see the page about [Ocean Tokens](/concepts/ocean-tokens/).

Below is a screenshot of MetaMask showing an account (with address `0x8…`) which has 500 OCEAN in the Ethereum Mainnet. If you want MetaMask to show OCEAN, then see the page about [using your wallet to manage Ocean Tokens](/tutorials/wallets-and-ocean-tokens/).

![MetaMask showing an account that has 500 OCEAN in the Ethereum Mainnet](./images/tb01.png)

To use the token bridge to transfer Ocean Tokens from the Ethereum Mainnet to the Pacific Network, go to [**bridge.oceanprotocol.com**](https://bridge.oceanprotocol.com) while being connected to the Ethereum Mainnet in MetaMask.

You should see something like this:

[![From Ethereum Mainnet to Ocean Pacific](images/tb02.png)](https://bridge.oceanprotocol.com)

The above screenshot shows that the account with address `0x8…` has 500 OCEAN in the Ethereum Mainnet and 0 OCEAN in the Pacific Network.

- Enter the amount of OCEAN you want to transfer (e.g. 1 OCEAN)
- Click _Transfer_

A confirmation dialog box like the following should appear.

![Confirmation dialog box](./images/tb03.png)

- Click _Continue_

After the end of some status updates you should see a success message with a transaction ID.

If you go back to MetaMask and switch the network to Pacific, then the account's OCEAN balance in Pacific should be higher by the amount just transferred.

![MetaMask showing an account that has 1 OCEAN in the Pacific Network](./images/tb06.png)

### Ocean Pacific → Ethereum Mainnet

To go the other way around, transfering Ocean Tokens from Pacific back into the Ethereum Mainnet, you simply connect to Pacific in MetaMask when visiting [**bridge.oceanprotocol.com**](https://bridge.oceanprotocol.com).

This will reverse the order of the token bridge networks:

![From Pacific to Ethereum Mainnet](./images/tb07.png)

Then follow the same steps as outlined above to transfer Ocean Tokens between the networks.

## Reporting Issues

If you found something was not working right for you, feel free to reach out to us and open an issue on the [`token-bridge-ui`](https://github.com/oceanprotocol/token-bridge-ui) repository:

<repo name="token-bridge-ui" />

[^1]: The code for the Ocean Protocol version of the token bridge UI and all technical documentation is in the [oceanprotocol/token-bridge-ui](https://github.com/oceanprotocol/token-bridge-ui) repo on GitHub.

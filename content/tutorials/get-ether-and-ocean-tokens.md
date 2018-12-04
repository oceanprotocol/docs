---
title: Get Ether and Ocean Tokens for Testnets
description: A tutorial about how to get Ether and Ocean Tokens for testnets.
---

If you want to interact with a testnet, then you'll eventually need Ether or Ocean Tokens _for that testnet_. (Every Ethereum-based network has its own Ether and its own Ocean Tokens, and you can't use those in other networks, or at least it wasn't possible when we wrote this.)

At the time of writing, there were two public testnets you could use to test an Ocean Protocol application: the Kovan Testnet and the Ocean Testnet. For more information about those, see the page about [testnets](/concepts/testnets/). You could also run a local testnet (i.e. on your local machine).

## Get a Compatible Wallet

You will need a wallet that can hold Ether (for any Ethereum network) and Ocean Tokens (for any Ethereum network). For now, we recommend using [MetaMask](https://metamask.io/).

- Follow the MetaMask instructions to install it on your machine.
- In MetaMask, switch from the **Main Ethereum Network** to the **Kovan Test Network** or the test network you're using.

## Get Ether

### Get Ether for the Kovan Testnet

You can get Kovan Ether (KEth), for the Kovan Testnet, from a Kovan faucet: see [the official list of Kovan faucets](https://github.com/kovan-testnet/faucet). You have to give the faucet your Kovan address (wallet account address). You can get that from MetaMask. It's a string that looks like:

```text
0xa0A9d7f78bF293514e7cA2789A0Af689eEC99282
```

### Get Ether for the Ocean Testnet

At the time of writing, there was no easy way to get Ether for the Ocean Testnet.

### Get Ether for a Local Testnet

If you're running a local testnet, then it creates several accounts at network launch time, and gives each of them some Ether. The addresses and private keys of those accounts should be shared (to logs or the console) during the launch process. You can use those accounts and their Ether.

## Get Ocean Tokens

One way to get some Ocean Tokens, for the network you're connected to, is by running Pleuston (a demo Ocean marketplace web app) and then clicking in the top right corner of the Pleuston user interface. If you see "Make it rain" then click that.

Running Pleuston, along with all the software it needs to work, is beyond the scope of this tutorial. If you want to do _that_, then the current best option is to use the scripts and Docker Compose files in the [🐳 docker-images repository](https://github.com/oceanprotocol/docker-images).

<repo name="docker-images"></repo>

---
title: How to Use a Testnet
description: A tutorial showing how to get set up to use one of the public testnets.
---

At the time of writing, there were two public testnets you could use to test an Ocean Protocol application: the Kovan Testnet and the Ocean Testnet. For more information about those, see the page about [testnets](/concepts/testnets/). Also at the time of writing, there was no easy was to get Ether for the Ocean Testnet, so this tutorial is for the Kovan Testnet (for now).

## Get a Compatible Wallet

You will need a wallet that can hold Ether (for any Ethereum network) and Ocean Tokens (for any Ethereum network). For now, we recommend using [MetaMask](https://metamask.io/).

- Follow the MetaMask instructions to install it on your machine.
- In MetaMask, switch from the **Main Ethereum Network** to the **Kovan Test Network**.

## Get Kovan Ether (KEth)

You can get Kovan Ether (KEth) from a Kovan faucet: see [the official list of Kovan faucets](https://github.com/kovan-testnet/faucet). You have to give the faucet your Kovan address (wallet account address). You can get that from MetaMask. It's a string that looks like:

```text
0xa0A9d7f78bF293514e7cA2789A0Af689eEC99282
```

## Next Steps

You may want to get some Ocean Tokens for the Kovan Testnet (e.g. so you can buy assets). Currently, the easiest way to get some Ocean Tokens is by running Pleuston (a demo Ocean marketplace web app) and then clicking in the top right corner of the Pleuston user interface. If you see "Make it rain" then click that.

Running Pleuston, along with all the software it needs to work, and configuring everything to work together (and connect to Kovan) is beyond the scope of this tutorial. If you want to do _that_, then the current best option is to use the scripts and Docker Compose files in the [🐳 docker-images repository](https://github.com/oceanprotocol/docker-images).

<repo name="docker-images"></repo>

Note that Kovan Ocean Tokens can't be transferred to or used in other Ethereum networks (or at least it wasn't possible at the time of writing).

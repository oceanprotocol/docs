---
title: Get Ether and Ocean Tokens for Testnets
description: A tutorial about how to get Ether and Ocean Tokens for testnets.
---

If you want to interact with a testnet, then you'll eventually need Ether or Ocean Tokens _for that testnet_. (Every Ethereum-based network has its own Ether and its own Ocean Tokens, and you can't use those in other networks, or at least it wasn't possible when we wrote this.)

At the time of writing, there were some public testnets you could use to test an Ocean Protocol application. For more information about those, see the page about [testnets](/concepts/testnets/). You could also run a local testnet (i.e. on your local machine).

## Get a Compatible Wallet

You will need a [wallet that can hold Ether (for any Ethereum network) and Ocean Tokens (for any Ethereum network)](/tutorials/wallets/). For the purpose of this tutorial, you can use [MetaMask](https://metamask.io/).

- Follow the MetaMask instructions to install it on your machine.
- In MetaMask, switch from the **Main Ethereum Network** to the **Kovan Test Network** or the test network you're using.

## Get Ether

### Get Ether for the Kovan Testnet

You can get Kovan Ether (KEth), for the Kovan Testnet, from a Kovan faucet: see [the official list of Kovan faucets](https://github.com/kovan-testnet/faucet). You have to give the faucet your Kovan address (wallet account address). You can get that from MetaMask. It's a string that looks like:

```text
0xa0A9d7f78bF293514e7cA2789A0Af689eEC99282
```

### Get Ether for the Nile Testnet

At the time of writing, there was no easy way to get Ether for the Nile Testnet.

### Get Ether for a Local Ganache-Based Testnet

If you're running a local Ganache-based testnet, then it creates several accounts at network launch time, and gives each of them some Ether. The addresses and private keys of those accounts should be shared (to logs or the console) during the launch process. You can use those accounts and their Ether.

### Get Ether for a Local Parity-Ethereum-Based Testnet

If you're running a local Parity-Ethereum-based testnet based on [barge](https://github.com/oceanprotocol/barge), then you can send some Ether to `<YOUR ADDRESS>` using the command:

```bash
curl --data '{"jsonrpc":"2.0","method":"personal_sendTransaction","params":[{"from":"0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e","to":"<YOUR ADDRESS>","value":"0x7FFFFFFFFFFFFFFFFFF"}, "node0"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8545
```

That command uses [Ethereum's JSON RPC API](https://wiki.parity.io/JSONRPC.html). You can also create a new account using the Parity Ethereum CLI. See [the Parity Ethereum CLI documentation](https://wiki.parity.io/CLI-Sub-commands).

## Get Ocean Tokens

One way to get some Ocean Tokens, for the network you're connected to, is by running Pleuston (a demo Ocean marketplace web app) and then clicking in the top right corner of the Pleuston user interface. If you see "Make it rain" then click that.

Running Pleuston, along with all the software it needs to work, is beyond the scope of this tutorial. If you want to do _that_, then the current best option is to use the scripts and Docker Compose files in the [🐳 barge repository](https://github.com/oceanprotocol/barge).

<repo name="barge"></repo>

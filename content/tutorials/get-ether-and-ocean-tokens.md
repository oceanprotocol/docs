---
title: Get ETH and OCEAN Tokens
description: A tutorial about how to get Ether and Ocean Tokens.
---

If you want to interact with an Ethereum-based network that supports Ocean Protocol, then you'll eventually need Ether or [Ocean Tokens](/concepts/ocean-tokens/) _for that network_. Every Ethereum-based network has its own Ether and its own Ocean Tokens, and you can't use those in other networks.

There are some public testnets you can use to test an Ocean Protocol application. For more information about those, see the page about [testnets](/concepts/testnets/).

## Get a Compatible Wallet

You will need a [wallet](/concepts/wallets/) that can hold Ether (for any Ethereum network) and Ocean Tokens (for any Ethereum network). For the purpose of this tutorial, you can use MetaMask. See our tutorial about [how to set up MetaMask](/tutorials/metamask-setup/).

In MetaMask, be sure to switch from the _Main Ethereum Network_ to whatever Ocean network you're using.

## Get Ether

### Get Ether for the Pacific Network

If you're connecting to the Pacific network, you can use the [Ocean Faucet server](/concepts/tools/#faucet-server). A simple user interface for it is deployed as part of the Commons marketplace under:

- client: [commons.oceanprotocol.com/faucet](https://commons.oceanprotocol.com/faucet)

This interface is set up to communicate with the deployed Ocean Faucet Server under:

- server: [faucet.oceanprotocol.com](https://faucet.oceanprotocol.com)

You can also communicate with that server directly and get some Pacific Ether into `<YOUR ADDRESS>` using the following command:

```bash
curl --data '{"address": "<YOUR ADDRESS>", "agent": "curl"}' -H "Content-Type: application/json" -X POST https://faucet.oceanprotocol.com/faucet
```

Check out the [Ocean Faucet server repository](https://github.com/oceanprotocol/faucet) to learn more about what the server provides.

The Pacific faucet has a limit of one request every 24 hours for the same Ethereum address. But don't worry, the Ether given is more than enough for interacting with the network.

### Get Ether for the Nile Testnet

If you're connecting to the Nile testnet, you can use the Ocean Faucet. A simple UI for it is deployed as part of the Commons marketplace under:

- client: [commons.nile.dev-ocean.com/faucet](https://commons.nile.dev-ocean.com/faucet)

This interface is set up to communicate with the deployed Ocean Faucet Server under:

- server: [faucet.nile.dev-ocean.com](https://faucet.nile.dev-ocean.com)

You can also communicate with that server directly and get some Nile Ether into `<YOUR ADDRESS>` using the following command:

```bash
curl --data '{"address": "<YOUR ADDRESS>", "agent": "curl"}' -H "Content-Type: application/json" -X POST https://faucet.nile.dev-ocean.com/faucet
```

Check out the [Ocean Faucet Server repository](https://github.com/oceanprotocol/faucet) to learn more about what the server provides.

The Nile faucet has a limit of one request every 24 hours for the same Ethereum address. But don't worry, the Ether given is more than enough for interacting with the network.

### Get Ether for a Local Spree Testnet

You can use the [Ocean Faucet server](/concepts/tools/#faucet-server) which is stafrted by default when you run [Barge](/concepts/tools/#barge).

To ask the faucet to send some Spree Ether to `<YOUR ADDRESS>`, use the command:

```bash
curl --data '{"address":"<YOUR ADDRESS>"}' -H "Content-Type: application/json" -X POST localhost:3001/faucet
```

Alternatively, you can import the seed phrase used to generate the accounts in Spree into MetaMask (e.g. by logging out and then clicking "Import using account seed phrase"). By default, the Spree testnet is configured to bootstrap ten accounts with a decent amount of Spree Ether in each one.

`taxi music thumb unique chat sand crew more leg another off lamp`

Details about the bootstrapped accounts can be found in [the README.md file in the Barge repository](https://github.com/oceanprotocol/barge/#spree-network). They're the ones of type "mnemonic."

> **WARNING!** Never use any of those accounts in any mainnet. They are for testing purposes only.

### Get Ether for a Local Ganache-Based Testnet

If you're running a local Ganache-based testnet, then it creates several accounts at network launch time, and gives each of them some Ether. The addresses and private keys of those accounts should be shared (to logs or the console) during the launch process. You can use those accounts and their Ether.

## Get Ocean Tokens

See the page about [Ocean Tokens](/concepts/ocean-tokens/).

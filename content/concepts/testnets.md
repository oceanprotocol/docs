---
title: Testnets
description: An overview of public test networks that you can test Ocean Protocol applications against.
---

You can test an Ocean Protocol application (such as a marketplace) against the test networks (testnets) described below. This page is a brief overview of those testnets. The [tutorials](/tutorials/) cover more details (e.g. how to connect to specific ones).

## The Kovan Testnet

The [Kovan Testnet](https://github.com/kovan-testnet/proposal) (or just "Kovan") is a public Ethereum Testnet operated by members of the Ethereum community.

### Kovan Blockchain Explorers

There are some Kovan blockchain explorers, e.g. [Etherscan for Kovan](https://kovan.etherscan.io/) and [BlockScout for Kovan](https://blockscout.com/eth/kovan). You can use those to check the status of a transaction, the balance of an account, and more.

### Ocean Components Connected to Kovan

There is a [Secret Store](/concepts/components/#secret-store) connected to the Kovan Testnet for use by Ocean Protocol projects (including your projects). It's operated by BigchainDB GmbH. Its URL is:

[https://secret-store-kovan.dev-ocean.com/](https://secret-store-kovan.dev-ocean.com/)

Aside from the Secret Store, there is no other Ocean Protocol software component (e.g. Aquarius) that is live, connected to the Kovan Testnet, and operated by BigchainDB GmbH.

## The Nile Testnet

_Formerly called the Ocean POA Testnet._

The Nile Testnet is similar to the Kovan Testnet, except all the nodes are operated by BigchainDB GmbH.

### Connect to the Nile Testnet

See the [tutorial page about connecting to Ocean-related networks](/tutorials/connect-to-networks/#connect-to-the-nile-testnet).

### Nile Blockchain Explorers

There is a Nile blockchain explorer at [https://submarine.dev-ocean.com/](https://submarine.dev-ocean.com/). You can use it to check the status of a transaction, the balance of an account, and more. It uses the following symbols for Nile Ether and Nile Ocean Tokens:

| Cryptocurrency    | Symbol used      |
| ----------------- | ---------------- |
| Nile Ether        | POA              |
| Nile Ocean Tokens | OCEAN or SBT-OCN |

### Ocean Components Connected to Nile

There are several Ocean Protocol software components that are live, connected to the Nile Testnet, and operated by BigchainDB GmbH:

- Secret Store at [https://secret-store.dev-ocean.com](https://secret-store.dev-ocean.com)
- Aquarius at [https://nginx-aquarius.dev-ocean.com](https://nginx-aquarius.dev-ocean.com)
- Brizo at [https://nginx-brizo.dev-ocean.com](https://nginx-brizo.dev-ocean.com)
- Jupyter Hub at [https://mantaray.dev-ocean.com](https://mantaray.dev-ocean.com)
- [Token Bridge Frontend](https://github.com/oceanprotocol/bridge-ui) (for a token bridge between Nile and Kovan) at [https://token-bridge.dev-ocean.com](https://token-bridge.dev-ocean.com)

> Internal note: The private "atlantic" repo documents the internal details of the Nile Testnet in `networks/nile/README.md`.

## A Spree Testnet

When Ocean Protocol developers run [Barge](https://github.com/oceanprotocol/barge) with the `--local-spree-node` option, a "Spree Testnet" is deployed on their local machine: a local testnet not connected to any external public testnet.

When running a Spree Testnet, you can connect to a node at RPC URL [http://localhost:8545](http://localhost:8545) (called "Localhost 8545" in MetaMask).

Spree Testnet details can be found in the [Barge README.md file](https://github.com/oceanprotocol/barge/blob/develop/README.md). You can configure the Spree nodes by editing the files in the `barge/networks/spree/` directory.

Note: Spree testnets are named after the Spree River, the main river flowing through Berlin, Germany, where many Ocean Protocol developers are located.

## A Ganache-Based Testnet

A local testnet similar to Spree but launched by using the `--local-ganache-node` option with Barge.

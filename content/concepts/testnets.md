---
title: Testnets
description: An overview of public test networks that you can test Ocean Protocol applications against.
---

This page is a brief overview of available testnets. The [tutorials](/tutorials/) cover more details (e.g. how to connect to specific ones).

## A Spree Testnet (for Local Development)

By default, [Barge](https://github.com/oceanprotocol/barge) will deploy a local _Spree Testnet_[^1] on your machine: a local testnet not connected to any external public testnet.

When running a Spree Testnet, you can connect to a node at RPC URL [http://localhost:8545](http://localhost:8545) (called "Localhost 8545" in MetaMask).

Spree Testnet details can be found in the [Barge README.md file](https://github.com/oceanprotocol/barge#spree-network). You can configure the Spree nodes by editing the files in the `barge/networks/spree/` directory.

> Spree testnets are named after the Spree River, the main river flowing through Berlin, Germany, where many Ocean Protocol developers are located.

## The Nile Testnet

In the _Nile Testnet_[^2] all nodes are operated by BigchainDB GmbH.

> For developers building on Ocean Protocol, we recommend starting with a [Spree Testnet](#a-spree-testnet-for-local-development).

### Connect to the Nile Testnet

See [Tutorial: Connect to the Nile Testnet](/tutorials/connect-to-networks/#connect-to-the-nile-testnet).

### Nile Blockchain Explorers

There is a Nile blockchain explorer at [https://submarine.dev-ocean.com/](https://submarine.dev-ocean.com/). You can use it to check the status of a transaction, the balance of an account, and more. It uses the following symbols for Nile Ether and Nile Ocean Tokens:

| Cryptocurrency    | Symbol used      |
| ----------------- | ---------------- |
| Nile Ether        | POA              |
| Nile Ocean Tokens | OCEAN or SBT-OCN |

### Ocean Components Connected to Nile

There are several Ocean Protocol software components that are live, connected to the Nile Testnet, and operated by BigchainDB GmbH:

| Component              | URL                                               |
| ---------------------- | ------------------------------------------------- |
| Node                   | `https://nile.dev-ocean.com`                      |
| Secret Store           | `https://secret-store.nile.dev-ocean.com`         |
| Aquarius Test instance | `https://aquarius.nile.dev-ocean.com`             |
| Brizo Test instance    | `https://brizo.nile.dev-ocean.com`                |
| Aquarius for Commons   | `https://aquarius.marketplace.dev-ocean.com` |
| Brizo for Commons      | `https://brizo.marketplace.dev-ocean.com`    |
| Commons Marketplace    | `https://commons.nile.dev-ocean.com`              |
| Jupyter Hub            | `https://mantaray.dev-ocean.com`                  |
| Faucet Server          | `https://faucet.nile.dev-ocean.com`               |

> Internal note: The private "atlantic" repo documents the internal details of the Nile Testnet in `networks/nile/README.md`.

### Using Barge with Nile

If you run [Barge](https://github.com/oceanprotocol/barge) with the `--local-nile-node` option, then Barge will run a Nile node on your local machine (along with everything else Barge runs).

There might be many blocks in the Nile Testnet's blockchain, so it might take a long time for your local Nile node to sync, i.e. to download a local copy of all the blocks. **In the meantime, the local Nile node won't be able to do certain things.**

## A Ganache-Based Testnet (for Local Development)

A local testnet similar to Spree but launched by using the `--local-ganache-node` option with Barge.

> You shouldn't use a Ganache-Based Testnet unless you know why you're doing so. For example, a Ganache-based testnet can be used to test some smart contracts, but it can't be used with a Secret Store.

## The Duero Testnet

The Duero Testnet is similar to the Nile Testnet, but it's only for internal use by the Ocean Protocol dev team. They test new things in the Duero Testnet before deploying them in the Nile Testnet (which is for use by anyone). That is, the testing order is Spree (local), Duero (private), Nile (public).

If you need to know something technical about the Duero Testnet, such as the RPC URL, please contact the Ocean Protocol dev team.

[^1]: Formerly called Ocean Protocol Testnet v0.1, it was announced as part of the Plankton milestone.
[^2]: Also known as the Nile Beta Network. Formerly called the Ocean POA Testnet.

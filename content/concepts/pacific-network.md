---
title: The Pacific Network
description: An introduction to Ocean Protocol's main network, named Pacific.
---

## Overview

The _Pacific Network_[^1] is an EVM-compatible [Proof of Authority (POA) network](https://github.com/poanetwork/wiki/wiki/What-is-POA) of nodes ("keepers") running [Parity Ethereum](https://www.parity.io/ethereum/) software. Various Ocean Protocol smart contracts ("keeper contracts") are deployed to it.

Initially, all the nodes in the Pacific Network were operated solely by BigchainDB GmbH (i.e. one company), but the goal was for the nodes to be operated by many independent operators in the future.

We expect vulnerabilities to be discovered and will conduct security audits over time, but the Ocean Protocol smart contracts will be in the wild for all intents and purposes.
Over time, the Pacific Network will be upgraded and improved.
There is no intent to shut it down.
Eventually, the goal is for it to be used in production by many projects.

[^1]: The Pacific Network is (or was) also known by other names, including _Pacific_, _Main Ocean Network_, _Ocean Mainnet_, _Ocean Live Network_.

## Ocean Tokens in Pacific

To be able to use [Ocean Tokens](/concepts/ocean-tokens/) in Pacific, they need to be transferred from the Ethereum Mainnet with a token bridge.

For more information, see [Pacific Network Ocean Tokens](/concepts/ocean-tokens/#pacific-network-ocean-tokens).

## Connect to the Pacific Network

To connect to Pacific in your browser with MetaMask, see [Tutorial: Connect to the Pacific Network](/tutorials/connect-to-networks/#connect-to-the-pacific-network).

## Pacific Blockchain Explorers

There is a Pacific blockchain explorer at [submarine.oceanprotocol.com](https://submarine.oceanprotocol.com/). You can use it to check the status of a transaction, the balance of an account, and more.

It uses the following symbols for Pacific Ether and Pacific Ocean Tokens:

| Cryptocurrency       | Symbol used      |
| -------------------- | ---------------- |
| Pacific Ether        | POA              |
| Pacific Ocean Tokens | OCEAN or SBT-OCN |

## Ocean Components Connected to Pacific

There are several Ocean Protocol software components that are live, connected to the Pacific Network, and operated by BigchainDB GmbH:

| Component              | URL                                          |
| ---------------------- | -------------------------------------------- |
| Node                   | `https://pacific.oceanprotocol.com`          |
| Secret Store           | `https://secret-store.oceanprotocol.com`     |
| Aquarius Test instance | `https://aquarius.test.oceanprotocol.com`    |
| Brizo Test instance    | `https://brizo.test.oceanprotocol.com`       |
| Aquarius for Commons   | `https://aquarius.commons.oceanprotocol.com` |
| Brizo for Commons      | `https://brizo.commons.oceanprotocol.com`    |
| Commons Marketplace    | `https://commons.oceanprotocol.com`          |
| Faucet Server          | `https://faucet.oceanprotocol.com`           |
| Token Bridge Frontend  | `https://bridge.oceanprotocol.com`           |

> Internal note: The private "atlantic" repo documents the internal details of the Pacific Network in `networks/pacific/deployment.md`.

## Using Barge with Pacific

If you run [Barge](https://github.com/oceanprotocol/barge) with the `--local-pacific-node` option, then Barge will run a Pacific node on your local machine (along with everything else Barge runs).

There might be many blocks in the Pacific Network's blockchain, so it might take a long time for your local Pacific node to sync, i.e. to download a local copy of all the blocks. **In the meantime, the local Pacific node won't be able to do certain things.**

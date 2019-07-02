---
title: The Pacific Network
description: An introduction to the Pacific Network.
---

## Overview

You can use the Ocean Protocol in several EVM-compatible networks, including:

- the Ethereum Mainnet (also called the Main Ethereum Network),
- various [testnets](/concepts/testnets/), and
- the Pacific Network.

The Pacific Network is an EVM-compatible network of nodes ("keepers") running [Parity Ethereum](https://www.parity.io/ethereum/) software. Various Ocean Protocol smart contracts ("keeper contracts") are deployed to it.

The Pacific Network is (or was) also known by other names, including:

- Pacific
- The Main Ocean Network
- The Ocean Mainnet
- The Ocean Live Network

"Network" is sometimes shortened to just "Net."

Initially, all the nodes in the Pacific Network were operated solely by BigchainDB GmbH (i.e. one company), but the goal was for the nodes to be operated by many independent operators in the future.

We expect vulnerabilities to be discovered and will conduct security audits over time, but the Ocean Protocol smart contracts will be in the wild for all intents and purposes.
Over time, the Pacific Network will be upgraded and improved.
There is no intent to shut it down.
Eventually, the goal is for it to be used in production by many projects.

[Ocean Tokens](/concepts/ocean-tokens/) can, in principle, live in any EVM-compatible network. The ones sold in the Ocean Protocol token sale were in the Ethereum Mainnet. There is a token bridge between the Ethereum Mainnet and the Pacific Network, allowing anyone with Ocean Tokens to move them from the Ethereum Mainnet to the Pacific Network. However, please be aware that doing so would put those Ocean Tokens at risk. For more information, see [the page about Ocean Tokens](/concepts/ocean-tokens/).

## Connect to the Pacific Network

See the [tutorial page about connecting to Ocean-related networks](/tutorials/connect-to-networks/#connect-to-the-pacific-network).

## Pacific Blockchain Explorers

There is a Pacific blockchain explorer at [https://submarine.oceanprotocol.com/](https://submarine.oceanprotocol.com/). You can use it to check the status of a transaction, the balance of an account, and more. It uses the following symbols for Pacific Ether and Pacific Ocean Tokens:

| Cryptocurrency       | Symbol used      |
| -------------------- | ---------------- |
| Pacific Ether        | POA              |
| Pacific Ocean Tokens | OCEAN or SBT-OCN |

## Ocean Components Connected to Pacific

There are several Ocean Protocol software components that are live, connected to the Pacific Network, and operated by BigchainDB GmbH:

- Secret Store at [https://secret-store.oceanprotocol.com](https://secret-store.oceanprotocol.com)
- Aquarius at [https://aquarius.commons.oceanprotocol.com](https://aquarius.commons.oceanprotocol.com)
- Brizo at [https://brizo.commons.oceanprotocol.com](https://brizo.commons.oceanprotocol.com)
- Commons Marketplace at [https://commons.oceanprotocol.com](https://commons.oceanprotocol.com)
- Faucet Server at [https://faucet.oceanprotocol.com](https://faucet.oceanprotocol.com)
- Token Bridge Frontend at [https://bridge.oceanprotocol.com/](https://bridge.oceanprotocol.com/)

> Internal note: The private "atlantic" repo documents the internal details of the Pacific Network in `networks/pacific/deployment.md`.

## Using Barge with Pacific

If you run [Barge](https://github.com/oceanprotocol/barge) with the `--local-pacific-node` option, then Barge will run a Pacific node on your local machine (along with everything else Barge runs). There might be many blocks in the Pacific Network's blockchain, so it might take a long time for your local Pacific node to sync, i.e. to download a local copy of all the blocks. **In the meantime, the local Pacific node won't be able to do certain things.**

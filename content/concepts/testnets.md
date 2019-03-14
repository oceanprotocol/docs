---
title: Testnets
description: An overview of public test networks that you can test Ocean Protocol applications against.
---

You can test an Ocean Protocol application (such as a marketplace) against the test networks (testnets) described below.

## The Kovan Testnet

The [Kovan Testnet](https://github.com/kovan-testnet/proposal) (or just "Kovan") is a public Ethereum Testnet operated by members of the Ethereum community.

Most Ethereum wallets and libraries know how to connect to the Kovan Testnet. If you're using [Barge](https://github.com/oceanprotocol/barge) to run a local Kovan node, you can connect to that local Kovan node at RPC URL [http://localhost:8545](http://localhost:8545) (called "Localhost 8545" in MetaMask).

### Kovan Blockchain Explorers

There are some Kovan blockchain explorers, e.g. [Etherscan for Kovan](https://kovan.etherscan.io/) and [BlockScout for Kovan](https://blockscout.com/eth/kovan). You can use those to check the status of a transaction, the balance of an account, and more.

### Keeper Contracts on Kovan

The Ocean Protocol [keeper contracts](https://github.com/oceanprotocol/keeper-contracts) (smart contracts) are deployed on Kovan. In fact, several versions of the keeper contracts have been deployed there. You can find the addresses of recently-deployed keeper contracts (including the OceanToken contract) as follows:

1. Go to [the list of keeper-contracts releases (Git tags) on GitHub](https://github.com/oceanprotocol/keeper-contracts/releases).
1. Click on the name of a release's Git tag in the left sidebar. It will look something like `v0.8.3`.
1. Scroll down to the **Kovan Testnet** section of the README.md file. The contract addresses are listed there. Note: Sometimes there is a disconnect between the release number and the listed version number.

Note: Because Ocean Protocol uses ZeppelinOS to manage smart contract upgrades, a keeper contract address might not change over time (because it's just the address _of the proxy contract_) but the actually-used smart contract might change, along with its functionality.

### Ocean Components Connected to Kovan

There is a [Secret Store](/concepts/components/#secret-store) connected to the Kovan Testnet for use by Ocean Protocol projects (including your projects). It's operated by BigchainDB GmbH. Its URL is:

[https://secret-store-kovan.dev-ocean.com/](https://secret-store-kovan.dev-ocean.com/)

Aside from the Secret Store, there is no other Ocean Protocol software component (e.g. Aquarius) that is live, connected to the Kovan Testnet, and operated by BigchainDB GmbH.

## The Nile Testnet

_Formerly called the Ocean POA Testnet._

The Nile Testnet is similar to the Kovan Testnet, except all the nodes are operated by BigchainDB GmbH.

### Nile Testnet Parameters

Parameter          | Value
-------------------|---------------
RPC URL (required) | [https://nile.dev-ocean.com/](https://nile.dev-ocean.com/)
ChainID            | 8995 (decimal for MetaMask) or 0x2323 (hexadecimal)
Symbol             | Whatever you like
Nickname           | Whatever you like

- In MetaMask, you don't need to include the port number with the RPC URL.
- If you're using MetaMask, see the [MetaMask docs about how it uses the ChainID](https://metamask.github.io/metamask-docs/Main_Concepts/Sending_Transactions).
- If you're using [Barge](https://github.com/oceanprotocol/barge) to run a local Nile node:
  - You can connect to that local Nile node at RPC URL [http://localhost:8545](http://localhost:8545) (called "Localhost 8545" in MetaMask).
  - You can configure that local Nile node by editing the files in the `barge/networks/nile/config/` directory.

### Nile Blockchain Explorers

There is a Nile blockchain explorer at [https://submarine.dev-ocean.com/](https://submarine.dev-ocean.com/). You can use it to check the status of a transaction, the balance of an account, and more. It uses the following symbols for Nile Ether and Nile Ocean Tokens:

Cryptocurrency    | Symbol used
------------------|------------
Nile Ether        | POA
Nile Ocean Tokens | OCEAN or SBT-OCN

### Keeper Contracts on Nile

See the subsection about the [Keeper Contracts on Kovan](#keeper-contracts-on-kovan). The Nile contract addresses can be found in the same way.

### Ocean Components Connected to Nile

There are several Ocean Protocol software components that are live, connected to the Nile Testnet, and operated by BigchainDB GmbH:

- Secret Store at [https://secret-store.dev-ocean.com](https://secret-store.dev-ocean.com)
- Aquarius at [https://nginx-aquarius.dev-ocean.com](https://nginx-aquarius.dev-ocean.com)
- Brizo at [https://nginx-brizo.dev-ocean.com](https://nginx-brizo.dev-ocean.com)
- Jupyter Hub at [https://mantaray.dev-ocean.com](https://mantaray.dev-ocean.com)
- [Token Bridge Frontend](https://github.com/oceanprotocol/bridge-ui) (for a token bridge between Nile and Kovan) at [https://token-bridge.dev-ocean.com](https://token-bridge.dev-ocean.com)

> Internal note: The private "atlantic" repo documents the internal details of the Nile Testnet in `networks/nile/README.md`.

## A Spree Testnet

When Ocean Protocol developers run [Barge](https://github.com/oceanprotocol/barge) with the `--local-spree-node` option, a "Spree Testnet" is deployed on their local machine: a local testnet not connected to any external public testnet. The RPC URL is [http://localhost:8545](http://localhost:8545) (called "Localhost 8545" in MetaMask).

Spree Testnet details can be found in the [Barge README.md file](https://github.com/oceanprotocol/barge/blob/develop/README.md).

You can configure the Spree nodes by editing the files in the `barge/networks/spree/` directory.

Note: Spree testnets are named after the Spree River, the main river flowing through Berlin, Germany, where many Ocean Protocol developers are located.

---
title: Testnets
description: An overview of public test networks that you can test Ocean Protocol applications against.
---

You can test an Ocean Protocol application (such as a marketplace) against the test networks (testnets) described below.

## The Kovan Testnet

The [Kovan Testnet](https://github.com/kovan-testnet/proposal) (or just "Kovan") is a public Ethereum testnet operated by members of the Ethereum community.

### Kovan Blockchain Explorers

There are some Kovan blockchain explorers, e.g. [Etherscan for Kovan](https://kovan.etherscan.io/) and [BlockScout for Kovan](https://blockscout.com/eth/kovan). You can use those to check the status of a transaction, the balance of an account, and more.

### Keeper Contracts on Kovan

The Ocean Protocol [keeper contracts](https://github.com/oceanprotocol/keeper-contracts) (smart contracts) are deployed on Kovan. In fact, several versions of the keeper contracts have been deployed there. You can find the addresses of recently-deployed keeper contracts (including the OceanToken contract) as follows:

1. Go to [the list of keeper-contracts releases (Git tags) on GitHub](https://github.com/oceanprotocol/keeper-contracts/releases).
1. Click on the name of a release's Git tag in the left sidebar. It will look something like `v0.8.3`.
1. Scroll down to the **Kovan Testnet** section of the README.md file. The contract addresses are listed there. Note: Sometimes there is a disconnect between the release number and the listed version number.

Note: Because Ocean Protocol uses ZeppelinOS to manage smart contract upgrades, a keeper contract address might not change over time (because it's just the address _of the proxy contract_) but the actually-used smart contract might change, along with its functionality.

_At the time of writing_, the contract address of the OceanToken contract in Kovan was:

0x963f52e2f4827ef82c56ad2eb81f650f66aeb267

### Ocean Components Connected to Kovan

There is a [Secret Store](/concepts/components/#secret-store) connected to the Kovan Testnet for use by Ocean Protocol projects (including your projects). It's operated by BigchainDB GmbH. Its URL is:

[https://secret-store-kovan.dev-ocean.com/](https://secret-store-kovan.dev-ocean.com/)

Aside from the Secret Store, there is no other Ocean Protocol software component (e.g. Aquarius) that is live, connected to the Kovan testnet, and operated by BigchainDB GmbH.

## The Nile Testnet

_Formerly called the Ocean POA Testnet._

The Nile Testnet is similar to the Kovan Testnet, except all the nodes are operated by BigchainDB GmbH.
If you want to connect to the Nile Testnet e.g. using MetaMask, then you must enter an "RPC URL" for the Nile Testnet. It is:

[https://nile.dev-ocean.com/](https://nile.dev-ocean.com/)

(You don't need to include the port number.)

### Nile Blockchain Explorers

There is a Nile blockchain explorer at [https://submarine.dev-ocean.com/](https://submarine.dev-ocean.com/). You can use it to check the status of a transaction, the balance of an account, and more. It uses the following symbols for Nile Ether and Ocean Tokens:

Cryptocurrency    | Symbol used
------------------|------------
Nile Ether        | POA
Nile Ocean Tokens | SBT-OCN

### Keeper Contracts on Nile

See the subsection about the [Keeper Contracts on Kovan](#keeper-contracts-on-kovan). The Nile contract addresses can be found in the same way.

_At the time of writing_, the contract address of the OceanToken contract in Nile was:

0x5b39858a450e8b51b5dcc598aafc4045c499d14f

### Ocean Components Connected to Nile

There are several Ocean Protocol software components that are live, connected to the Nile testnet, and operated by BigchainDB GmbH:

- Secret Store at [https://secret-store.dev-ocean.com](https://secret-store.dev-ocean.com)
- Aquarius at [https://nginx-aquarius.dev-ocean.com](https://nginx-aquarius.dev-ocean.com)
- Brizo at [https://nginx-brizo.dev-ocean.com](https://nginx-brizo.dev-ocean.com)
- Jupyter Hub at [https://mantaray.dev-ocean.com](https://mantaray.dev-ocean.com)
- [Token Bridge Frontend](https://github.com/oceanprotocol/bridge-ui) (for a token bridge between Nile and Kovan) at [https://token-bridge.dev-ocean.com](https://token-bridge.dev-ocean.com)

> Internal note: The private "atlantic" repo documents the internal details of the Nile testnet in `networks/nile/README.md`.

## A Spree Testnet

When Ocean Protocol developers run [Barge](https://github.com/oceanprotocol/barge) with the `--local-spree-node` option, a "Spree Testnet" node is deployed on their local machine: a local "testnet" not connected to any public testnet. It's named after the main river flowing through Berlin, Germany, where many Ocean Protocol developers are located.

Spree testnet details can be found in the [Barge README.md file](https://github.com/oceanprotocol/barge/blob/develop/README.md).

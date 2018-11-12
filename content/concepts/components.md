---
title: Software Components
description: The Ocean Protocol network is brought to life by many interacting symbiotic software components.
---

Before reading this page, you should understand some [Ocean-specific terminology](/concepts/terminology/).

## Aquarius

Every marketplace must run an instance of Aquarius.
Aquarius provides an API to an off-chain database ("OceanDB") to store and manage metadata about data assets: the assets listed in that marketplace.
The off-chain database might be MongoDB, Elasticsearch or BigchainDB.

<repo name="aquarius"></repo>

## Brizo

Publishers run Brizo to manage access control to assets on behalf of asset owners or data service providers.

<repo name="brizo"></repo>

## Keeper

A computer running a blockchain client
(such as [Parity Ethereum](https://www.parity.io/ethereum/))
where the associated blockchain network is running the Ocean Protocol
[💧 keeper-contracts](https://github.com/oceanprotocol/keeper-contracts)
(smart contracts).

<repo name="keeper-contracts"></repo>

See also: [Set Up a Keeper](/setup/keeper/)

## Pleuston

An example marketplace front-end for consumers to explore, download, and publish data assets within the Ocean Protocol network. Implemented using [React](https://reactjs.org/) and [🦑 squid-js](https://github.com/oceanprotocol/squid-js).

<repo name="pleuston"></repo>

## Secret Store

A [Parity Secret Store](https://wiki.parity.io/Secret-Store): software for distributed key pair generation, distributed key storage, and threshold retrieval. It's used to store asset access-control keys.

## Squid Libraries

Client libraries used by applications (such as Pleuston or Jupyter notebooks) to interact with Ocean components, including Keepers, Aquarius nodes, Brizo nodes, etc.

- [🦑 squid-js](https://github.com/oceanprotocol/squid-js)
- [🦑 squid-py](https://github.com/oceanprotocol/squid-py)
- [🦑 squid-java](https://github.com/oceanprotocol/squid-java)

---
title: Software Components
description: The Ocean Protocol network is brought to life by many interacting symbiotic software components.
---

Before reading this page, you should understand some [Ocean-specific terminology](/concepts/terminology/).

## Aquarius

Aquarius provides an API to an off-chain database ("OceanDB") to store and manage metadata about data assets: the assets listed in that marketplace. Every marketplace must run an instance of Aquarius.

The off-chain database might be MongoDB, Elasticsearch or BigchainDB.

<repo name="aquarius" readme="true"></repo>

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

## Squid Libraries

Client libraries used by applications (such as Pleuston or Jupyter notebooks) to interact with Ocean components, including Keepers, Aquarius nodes, Brizo nodes, etc.

![How Squid is Used](images/Squid_role_diagram_small.jpg)

<repo name="squid-js"></repo>
<repo name="squid-py"></repo>
<repo name="squid-java"></repo>

## Secret Store

A [Parity Secret Store](https://wiki.parity.io/Secret-Store): software for distributed key pair generation, distributed key storage, and threshold retrieval. It's used to store asset access-control keys.

We have created multiple clients for integrating the Parity Secret Store into Ocean:

<repo name="secret-store-client-js"></repo>
<repo name="secret-store-client-py"></repo>
<repo name="secret-store-client-java"></repo>

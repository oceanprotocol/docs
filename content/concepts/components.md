---
title: Software Components
description: The Ocean Protocol network is brought to life by many interacting symbiotic software components.
---

Before reading this page, you should understand some [Ocean-specific terminology](/concepts/terminology/).

## Aquarius

Marketplaces run Aquarius to store and manage metadata about the [assets](/concepts/terminology/#asset-or-data-asset) available in their marketplace. It provides an HTTP API for interacting with an off-chain database (sometimes called "OceanDB").

<repo name="aquarius"></repo>

### OceanDB Drivers

Aquarius supports several options for the off-chain database (OceanDB), including MongoDB, Elasticsearch and BigchainDB. One can add support for another off-chain database by creating a new driver similar to the existing OceanDB drivers.

<repo name="oceandb-mongodb-driver"></repo>
<repo name="oceandb-bigchaindb-driver"></repo>
<repo name="oceandb-elasticsearch-driver"></repo>

## Brizo

Publishers run Brizo to manage interactions with marketplaces and consumers.
It interacts with the publisher's cloud and/or on-premise infrastructure.
The most basic scenario for a publisher is to provide access to the [assets](/concepts/terminology/#asset-or-data-asset) the publisher owns or manages, but [Brizo can do much more](/concepts/architecture/#brizo).

<repo name="brizo"></repo>

### Osmosis Drivers

Brizo supports several options for file storage, including Azure Storage, Amazon S3 and on-premise storage. One can add support for another file storage option by creating a new driver similar to one of the existing Osmosis drivers.

<repo name="osmosis-azure-driver"></repo>
<repo name="osmosis-aws-driver"></repo>
<repo name="osmosis-on-premise-driver"></repo>

## Keeper

A computer running a blockchain client
(such as [Parity Ethereum](https://www.parity.io/ethereum/))
where the associated blockchain network is running the Ocean Protocol
[💧 keeper-contracts](https://github.com/oceanprotocol/keeper-contracts)
(smart contracts).

<repo name="keeper-contracts"></repo>

See also: [Run a Keeper](/setup/keeper/)

## Pleuston

An example marketplace front-end for consumers to explore, download, and publish [assets](/concepts/terminology/#asset-or-data-asset) within the Ocean Protocol network. Implemented using [React](https://reactjs.org/) and [🦑 squid-js](https://github.com/oceanprotocol/squid-js).

<repo name="pleuston"></repo>

## Squid Libraries

Client libraries used by applications (such as Pleuston or Jupyter notebooks) to interact with Ocean components, including Keepers, Aquarius nodes, Brizo nodes, etc.

![How Squid is Used](images/ocean-squid-ecosystem.png)

<repo name="squid-js"></repo>
<repo name="squid-py"></repo>
<repo name="squid-java"></repo>

## Secret Store

A [Parity Secret Store](https://wiki.parity.io/Secret-Store): software for distributed key pair generation, distributed key storage, and threshold retrieval. It's used to store [asset](/concepts/terminology/#asset-or-data-asset) access-control keys.

There are several clients for integrating the Parity Secret Store into Ocean:

<repo name="secret-store-client-js"></repo>
<repo name="secret-store-client-py"></repo>
<repo name="secret-store-client-java"></repo>

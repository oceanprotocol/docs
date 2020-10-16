---
title: Software Components
description: Ocean components are tools meant to stay as simple as possible.
---

## Aquarius - Metadata Cache

Metadata is stored on-chain.

To improve GUI responsiveness, Ocean Market runs Aquarius to retrieve the metadata from the chain and cache it locally (using MongoDB). 

<repo name="aquarius"></repo>

## Brizo

Publishers run Brizo to manage interactions with marketplaces and consumers.
It interacts with the publisher's cloud and/or on-premise infrastructure.

The most basic scenario for a publisher is to provide access to the [assets](/concepts/terminology/#asset-or-data-asset) the publisher owns or manages, but [Brizo can do much more](/concepts/architecture/#brizo).

<repo name="brizo"></repo>

### Events Handler

Brizo communicates with the Events Handler to deal with Keeper Contracts events.

The Events Handler monitors Service Execution Agreement (SEA) events and acts as a provider agent to grant access and release rewards for the publisher/provider. This is a critical part in the process of consuming data sets in the Ocean Protocol network.

Every provider in the network must run some sort of an events handler to be able to fulfill the access condition of an `Access` service in a Service Execution Agreement.

<repo name="events-handler"></repo>

### Osmosis Drivers

Brizo supports several options for file storage, including Azure Storage, Amazon S3 and on-premise storage. One can add support for another file storage option by creating a new driver similar to one of the existing Osmosis drivers.

<repo name="osmosis-azure-driver"></repo>
<repo name="osmosis-aws-driver"></repo>
<repo name="osmosis-ipfs-driver"></repo>
<repo name="osmosis-on-premise-driver"></repo>

You can create your own Osmosis drivers by extending on the `osmosis-driver-interface`.

<repo name="osmosis-driver-interface"></repo>

## JavaScript & Python Drivers

Client libraries used by applications (such as Pleuston or Jupyter notebooks) to interact with Ocean components, including Keepers, Aquarius nodes, Brizo nodes, etc.

![How Squid is Used](images/ocean-squid-ecosystem.png)

<repo name="squid-js"></repo>
<repo name="squid-py"></repo>
<repo name="squid-java"></repo>

## Commons Marketplace

An online example marketplace/publisher for consumers to explore, download, and publish open data sets in the [Pacific Network](/concepts/pacific-network/). Implemented using [React](https://reactjs.org/) and [squid-js](https://github.com/oceanprotocol/squid-js).

For more information, see [the blog post about Commons Marketplace](https://blog.oceanprotocol.com/the-commons-data-marketplace-c57a44288314).

<repo name="commons"></repo>

The Commons Marketplace is also the default frontend when running a full Ocean network locally with [Barge](/setup/quickstart/).

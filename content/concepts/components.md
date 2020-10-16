---
title: Software Components
description: Components, from top-level (GUI) downwards 
---

## Ocean Market

A [live](http://market.oceanprotocol.com) community-oriented data marketplace. [Here's](https://blog.oceanprotocol.com/ocean-market-an-open-source-community-marketplace-for-data-4b99bedacdc3) a blog post with more information.

It uses React Hooks, which in turn uses the JavaScript driver.

<repo name="commons"></repo>

## React Hooks

Building blocks to help building GUI-based frontends.

## JavaScript & Python Drivers

Client libraries used by applications (such as Pleuston or Jupyter notebooks) to interact with Ocean components, including Keepers, Aquarius nodes, Brizo nodes, etc.

![How Squid is Used](images/ocean-squid-ecosystem.png)

<repo name="squid-js"></repo>
<repo name="squid-py"></repo>
<repo name="squid-java"></repo>


## Metadata Cache - Aquarius

Ocean stores metadata of data assets *on-chain*.

To improve GUI responsiveness, Ocean Market runs Aquarius to retrieve the metadata from the chain and cache it locally (using MongoDB). 

<repo name="aquarius"></repo>

## Provider

Publishers run Provider to serve up a data asset when requested. Provider interacts with the publisher's cloud and/or on-premise infrastructure.

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

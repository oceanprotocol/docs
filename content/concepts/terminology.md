---
title: Terminology
description: Terminology specific to Ocean Protocol.
---

## Ocean Network

Any EVM-compatible network where [Ocean smart contracts](https://github.com/oceanprotocol/ocean-contracts) are deployed. There can be many Ocean networks and you can use the Ocean Protocol in several EVM-compatible networks, including:

- [Ethereum Mainnet](https://www.ethereum.org)
- Ethereum [test networks](/concepts/testnets/)

## Data Service, Data Asset, Datatoken

A data service may serve up a dataset or a compute service like Compute-to-Data. It's characterized by a url.

Each data asset is represented by an ERC20 datatoken.

You can access a data service if you send 1.0 datatokens to the Provider.

## Data Owner or Data Service Provider

Someone who has data assets that they want to sell. An example is an almond distributor with 30 years of data about almond sales.

> Initially, most data owners or data service providers will also be the publishers of their own assets.

## Publisher

A service which mediates access to assets on behalf of data owners or data service providers.

> Initially, most publishers will also be the owners of the assets they publish.

## Data Consumer

Someone who buys a asset. An example is a data scientist working at an economic think tank.

## Marketplace

A service where publishers can list what assets they have, and consumers can see what's available then buy it.

Metadata is information about the data asset. In Ocean, metadata is stored on-chain, but marketplaces may have a local cache for faster search. 


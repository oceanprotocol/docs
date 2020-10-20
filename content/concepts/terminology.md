---
title: Terminology
description: Terminology specific to Ocean Protocol.
---

## Ocean Network

An _Ocean network_ is any EVM-compatible network where [Ocean smart contracts](https://github.com/oceanprotocol/ocean-contracts) are deployed. These include:

- [Ethereum Mainnet](https://www.ethereum.org)
- Ethereum [test networks](/concepts/testnets/)

## Data Service, Data Asset, Datatoken

A _data service_ may serve up a dataset or a compute service like Compute-to-Data. It's characterized by a url.

Each _data asset_ is represented by an ERC20 _datatoken_.

You can access a data service if you send 1.0 datatokens to the Provider.

## Data Publisher, Provider

A _data publisher_ is someone who has data services that they want to sell. An example is an almond distributor with 30 years of data about almond sales.

A _Provider_ is a service that mediates access to assets on behalf of data owners or data service providers.

> Initially, most data publishers will also be Providers.

## Data Consumer

A _data consumer_ is someone who buys a data asset, then consumes it by interacting with the _Provider_.

## Data Market

A data market is a service where publishers can list what assets they have, and consumers can see what's available then buy it.

## Metadata

Metadata is information about the data asset. In Ocean, metadata is stored on-chain, but marketplaces may have a local cache for faster search.

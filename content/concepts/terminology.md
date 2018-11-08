---
title: Terminology
---

There is terminology specific to Ocean Protocol.

## Asset

A data set or data service.

## Publisher

Someone who has assets that they want to sell (or give away freely). An example is an almond distributor with 30 years of data about almond sales.

## Consumer

Someone who wants assets. An example is a data scientist working at an economic think tank.

## Marketplace

A service where publishers can list what assets they have, and consumers can see what's available then buy it (or get it for free). The Ocean network supports many marketplaces.

## Keeper

A computer running a blockchain client (i.e. a blockchain node)
where the associated blockchain network is running the
[Ocean Protocol keeper contracts](https://github.com/oceanprotocol/keeper-contracts)
(smart contracts).

## Aquarius

Ocean-specific software to help store and manage metadata about assets (but not assets themselves). Every marketplace must run an instance of Aquarius.

## Brizo

Ocean-specific software to help publishers manage consumer access to their assets.

## Secret Store

[Parity Secret Store](https://wiki.parity.io/Secret-Store): software for distributed key pair generation, distributed key storage, and threshold retrieval.

## squid-py, squid-js, squid-java, etc.

Software libraries used by applications to interact with Ocean nodes, including Keepers, Aquarius nodes, Brizo nodes, etc.

## Pleuston

An example marketplace website frontend implemented using React and squid-js.

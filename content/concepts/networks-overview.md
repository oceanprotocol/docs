---
title: Networks Overview
description: Development on various Ethereum networks
---

## Supported Networks

Ocean is deployed to these public networks:

* [Ethereum mainnet](/concepts/network-ethmainnet/) - production
* [Rinkeby](/concepts/network-rinkeby/) - testnet
* [Ropsten](/concepts/network-ropsten) - testnet

You can also run your own local testnet:

* [Ganache](/concepts/network-local) - local testnet

## Barge

**Barge** is a shell script to help developers run Ocean Provider (data service) and Ocean Aquarius (metadata cache). It points to Ganache by default.

Barge is used used extensively by the Ocean core devs (with Ganache or Rinkeby).

<repo name="barge"></repo>

## Chain ids

Some apps may need `network_id` and `chain_id`. [Here's](https://medium.com/@piyopiyo/list-of-ethereums-major-network-and-chain-ids-2bc58e928508) a list of values for major Ethereum networks.


---
title: Supported Networks
description: 
---

## Summary

Ocean is deployed to these public networks:

- [Ethereum mainnet](/tutorials/network-ethmainnet/) - production
- [Rinkeby](/tutorials/network-rinkeby/) - testnet
- [Ropsten](/tutorials/network-ropsten) - testnet

You can also run your own local testnet:

- [Ganache](/tutorials/network-local) - local testnet

## Chain ids

Some apps may need `network_id` and `chain_id`. Here's a [list of values for major Ethereum networks](https://medium.com/@piyopiyo/list-of-ethereums-major-network-and-chain-ids-2bc58e928508).

## Barge

**Barge** is a shell script to help developers run Ocean Provider (data service) and Ocean Aquarius (metadata cache). It points to Ganache by default.

Barge is used used extensively by the Ocean core devs (with Ganache or Rinkeby).

<repo name="barge"></repo>

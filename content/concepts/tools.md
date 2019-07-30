---
title: Tools
description: Some tools that can be useful when working with Ocean Protocol.
---

## Barge

Barge is a shell script allowing you to run an Ocean network by orchestrating all [core components](/components) locally with Docker and Docker Compose.

<repo name="barge"></repo>

## Tuna

Tuna is a showcase and provides cross environment examples & tests for the Squid client libraries.

<repo name="tuna"></repo>

## Plecos

Plecos is a Python tool to check metadata (a JSON file) to see if it conforms to the [OEP-8 schema](https://github.com/oceanprotocol/OEPs/tree/master/8). It wraps the [jsonschema](https://github.com/Julian/jsonschema) validator. Aquarius uses Plecos for checking metadata and other Ocean Protocol software will probably use it in the future.

<repo name="plecos"></repo>

## Faucet Server

The [Ocean Protocol Faucet Server](https://github.com/oceanprotocol/faucet) is a microservice that allows users to request Ether for a particular Ethereum network (e.g. the Nile Testnet). It is [deployed in multiple networks](http://localhost:8000/tutorials/get-ether-and-ocean-tokens/#get-ether), and included when running [Barge](#barge).

<repo name="faucet"></repo>

## Submarine Blockchain Explorer

Submarine is based on [BlockScout](https://github.com/poanetwork/blockscout) (by [POA](https://poa.network/)), an open source blockchain explorer for EVM-based blockchain networks.
There is an [Ocean Protocol fork of BlockScout](https://github.com/oceanprotocol/blockscout). An instance is deployed in the Nile Testnet at [https://submarine.dev-ocean.com/](https://submarine.dev-ocean.com/).

<repo name="blockscout"></repo>

## Ocean Token Bridge

The Ocean Token Bridge between the Ethereum Mainnet and the Pacific Network allows anyone with Ocean Tokens to move them from the Ethereum Mainnet to the Pacific Network.

- [**Ocean Token Bridge**](https://bridge.oceanprotocol.com)
- [Tutorial: Transfer Ocean Tokens between Networks](/tutorials/token-bridge/)

<repo name="token-bridge-ui"></repo>

## Command-Line Interfaces

There are a few Ocean Protocol command-line interfaces (CLIs). All of them were under development at the time of writing, so you may have issues with using them.

- [ocean-cli](https://github.com/bigchaindb-gmbh/ocean-cli) was built using squid-java
- [ocean-cli-py](https://github.com/bigchaindb-gmbh/ocean-cli-py) was built using squid-py

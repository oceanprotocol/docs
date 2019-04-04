---
title: Tools
description: Some tools that can be useful when working with Ocean Protocol.
---

## Plecos

Plecos is a Python tool to check metadata (a JSON file) to see if it conforms to the [OEP8 schema](https://github.com/oceanprotocol/OEPs/tree/master/8). Plecos wraps the [jsonschema](https://github.com/Julian/jsonschema) validator. Users can use Plecos to check their metadata before sending it to an Aquarius instance. Aquarius can also use it to check metadata. Plecos can be found in [the Plecos repository on GitHub](https://github.com/oceanprotocol/plecos) and as [a Python package in PyPI](https://pypi.org/project/plecos/).

<repo name="Plecos"></repo>

Plecos can be used in a microservice to facilitate data onboarding, as described in the [plecos_service repository](https://github.com/oceanprotocol/plecos_service).

## Faucet Server

The [Ocean Protocol Faucet Server](https://github.com/oceanprotocol/faucet) is a microservice that allows users to request Ether for a particular Ethereum network (e.g. the Nile Testnet).

## BlockScout

[BlockScout](https://github.com/poanetwork/blockscout) (by [POA](https://poa.network/)) is an open source blockchain explorer for Ethereum networks. An instance is deployed in the Nile Testnet, for example, at [https://submarine.dev-ocean.com/](https://submarine.dev-ocean.com/).

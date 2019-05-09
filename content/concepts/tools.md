---
title: Tools
description: Some tools that can be useful when working with Ocean Protocol.
---

## Plecos

Plecos is a Python tool to check metadata (a JSON file) to see if it conforms to the [OEP-8 schema](https://github.com/oceanprotocol/OEPs/tree/master/8). It wraps the [jsonschema](https://github.com/Julian/jsonschema) validator. It can be found in [the Plecos repository on GitHub](https://github.com/oceanprotocol/plecos) and as [a Python package in PyPI](https://pypi.org/project/plecos/).

<repo name="Plecos"></repo>

Note: Aquarius uses Plecos for checking metadata and other Ocean Protocol software will probably use it in the future.

## Faucet Server

The [Ocean Protocol Faucet Server](https://github.com/oceanprotocol/faucet) is a microservice that allows users to request Ether for a particular Ethereum network (e.g. the Nile Testnet).

<repo name="faucet"></repo>

## Submarine Blockchain Explorer 

Submarine is based on [BlockScout](https://github.com/poanetwork/blockscout) (by [POA](https://poa.network/)), an open source blockchain explorer for Ethereum networks.

There is an [Ocean Protocol fork of BlockScout](https://github.com/oceanprotocol/blockscout). An instance is deployed in the Nile Testnet at [https://submarine.dev-ocean.com/](https://submarine.dev-ocean.com/).

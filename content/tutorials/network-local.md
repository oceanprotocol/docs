---
title: Ganache Local Testnet 
description: Details of Ganache deployment & services
---

## Smart Contracts

[Ganache](https://www.trufflesuite.com/ganache) is a local Ethereum "network" that you run on your machine for fast iterations while developing your app. 

The most straighforward case for local development is to use Ocean [Barge](https://www.github.com/oceanprotocol/barge). IT runs Ganache in addition to Aquarius and Provider.

Alternatively, you can run Ganache independently. Install it according to [the Ganache docs](https://www.trufflesuite.com/ganache). Then deploy Ocean contracts onto Ganache following [docs in Ocean contracts repo](https://www.github.com/oceanprotocol/contracts).

Ganache is at the RPC URL [http://localhost:8545](http://localhost:8545).

To connect from Metamask: in Metamask, connect to the network called "Localhost 8545". 

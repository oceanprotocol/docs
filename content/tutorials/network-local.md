---
title: Ganache Local Testnet 
description: Details of Ganache deployment & services
---

## Smart Contracts

[Ganache](https://www.trufflesuite.com/ganache) is a local Ethereum "network" that you run on your machine for fast iterations while developing your app. 

You can deploy Ocean contracts onto Ganache. To do so, please go to [Ocean contracts repo](https://www.github.com/oceanprotocol/contracts) and follow the instructions there.

## Connect Barge to Ganache

If you're using [Barge](https://www.github.com/oceanprotocol/barge) to help run a local network, you can connect to that local node at RPC URL [http://localhost:8545](http://localhost:8545) (called "Localhost 8545" in MetaMask). You can configure that local node by editing the files in the `barge/networks/pacific/config/` directory.

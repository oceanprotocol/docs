---
title: Ganache Local Testnet 
description: 
---

## Smart Contracts

[Ganache](https://www.trufflesuite.com/ganache) is a local Ethereum "network" that you run on your machine for fast iterations while developing your app. 

You can deploy Ocean contracts onto Ganache. The [Ocean contracts repo](https://www.github.com/oceanprotocol/contracts) has further instructions.

## Connect Metamask wallet to Ganache

In MetaMask, click on the network name then click on `Custom RPC` in the drop-down list. Scroll down to the `New Network` section. Enter the above RPC URL. You don't need to add a port number to the end of the RPC URL. Enter the ChainID, Symbol and Nickname if you like. See the [MetaMask docs about how it uses the ChainID](https://metamask.github.io/metamask-docs/Main_Concepts/Sending_Transactions).

## Connect Barge to Ganache

If you're using [Barge](https://www.github.com/oceanprotocol/barge) to help run a local network, you can connect to that local node at RPC URL [http://localhost:8545](http://localhost:8545) (called "Localhost 8545" in MetaMask). You can configure that local node by editing the files in the `barge/networks/pacific/config/` directory.
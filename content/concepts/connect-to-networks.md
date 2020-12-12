---
title: Connect Wallets to Networks
description: 
---

## Connect to Ethereum mainnet

Ocean's on Ethereum mainnet, for production usage.

Metamask and other ERC20 wallets default to Ethereum mainnet. Therefore your wallet is almost certainly pointing to Ethereum by default.

## Connect to public testnets

`Rinkeby` and `Ropsten` are prominent Ethereum testnets. Ocean is deployed to both.

In MetaMask, click on the network name dropdown, then select `Rinkeby` or `Ropsten`. That's it.

## Connect to local Ganache testnet

In MetaMask, click on the network name then click on `Custom RPC` in the drop-down list. Scroll down to the `New Network` section. Enter the above RPC URL. You don't need to add a port number to the end of the RPC URL. Enter the ChainID, Symbol and Nickname if you like. See the [MetaMask docs about how it uses the ChainID](https://metamask.github.io/metamask-docs/Main_Concepts/Sending_Transactions).



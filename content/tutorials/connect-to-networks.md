---
title: Connect to Ocean-Related Networks
description: On connecting to Ethereum, Ropsten and Your Local Network.
---

##Connect to Ethereum mainnet

Metamask and other ERC20 wallets default to Ethereum mainnet. Therefore your wallet is almost certainly pointing to Ethereum by default.

Some apps may need `network_id` and `chain_id`. The values are both `1` for Ethereum mainnet. `Symbol` and `nickname` can be whatever value you like.

##Connect to Ropsten testnet

In MetaMask, click on the network name dropdown, then select `Ropsten`.

Its `network_id` is 3 and `chain_id` is 3.

##Connect to local Ganache network

**Metamask.** In MetaMask, click on the network name then click on `Custom RPC` in the drop-down list. Scroll down to the `New Network` section. Enter the above RPC URL. You don't need to add a port number to the end of the RPC URL. Enter the ChainID, Symbol and Nickname if you like. See the [MetaMask docs about how it uses the ChainID](https://metamask.github.io/metamask-docs/Main_Concepts/Sending_Transactions).

**Barge.** If you're using Ocean [Barge](https://github.com/oceanprotocol/barge) to help run a local network, you can connect to that local node at RPC URL [http://localhost:8545](http://localhost:8545) (called "Localhost 8545" in MetaMask). You can configure that local node by editing the files in the `barge/networks/pacific/config/` directory.

## More info

- [List of Ethereum's Major Networks and Chain ids](https://medium.com/@piyopiyo/list-of-ethereums-major-network-and-chain-ids-2bc58e928508). 

- [Ganache documentation](https://www.trufflesuite.com/ganache) 



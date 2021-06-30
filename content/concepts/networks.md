---
title: Supported Networks
description: All the public networks the Ocean Protocol contracts are deployed to, and additional core components deployed to them.
---

Ocean Protocol contracts are deployed on multiple public networks. You can always find the most up-to-date deployment addresses for all individual contracts in the [address.json](https://github.com/oceanprotocol/contracts/blob/master/artifacts/address.json) artifact.

In each network, you’ll need ETH to pay for gas, and OCEAN for certain Ocean actions. Because the Ethereum mainnet is a network for production settings, ETH and OCEAN tokens have real value on there. The ETH and OCEAN tokens in each test network don’t have real value and are used for testing-purposes only. They can be obtained with _faucets_ to dole out ETH and OCEAN.

## Ethereum Mainnet

The Ethereum Mainnet is Ocean’s production network.

MetaMask and other ERC20 wallets default to Ethereum mainnet, therefore your wallet is almost certainly pointing to Ethereum by default.

**Get Tokens**

- ETH: [Exchanges to purchase](https://www.coingecko.com/en/coins/ethereum#markets)
- OCEAN: [Exchanges to purchase](https://oceanprotocol.com/token#get)
  - OCEAN address on Ethereum mainnet: [0x967da4048cD07aB37855c090aAF366e4ce1b9F48](https://etherscan.io/token/0x967da4048cD07aB37855c090aAF366e4ce1b9F48)

**Additional Components**

| What         | URL                                          |
| ------------ | -------------------------------------------- |
| Explorer     | https://etherscan.io                         |
| Ocean Market | https://market.oceanprotocol.com             |
| Provider     | `https://provider.mainnet.oceanprotocol.com` |
| Aquarius     | `https://aquarius.mainnet.oceanprotocol.com` |
| Subgraph     | `https://subgraph.mainnet.oceanprotocol.com` |

## Polygon Mainnet

Ocean is [deployed](https://blog.oceanprotocol.com/ocean-on-polygon-network-8abad19cbf47) to the [Polygon](https://polygon.technology/) production network. Polygon's native token is MATIC.

If you don't find Polygon as a predefined network in your wallet, you can connect to it manually via [this guide]((/tutorials/metamask-setup/#set-up-custom-network) and the parameters below.

| What               | Value                                    |
|--------------------|------------------------------------------|
| Network Name       | `Matic Mainnet`                          |
| RPC                | `https://rpc.polygon.oceanprotocol.com/` |
| Chain Id           | `137`                                    |
| Currency Symbol    | `MATIC`                                  |
| Block Explorer URL | `https://explorer.matic.network/`        |

**Get Tokens**

- MATIC: [Exchanges to purchase](https://www.coingecko.com/en/coins/polygon#markets)
- OCEAN: [Exchanges to purchase](https://oceanprotocol.com/token#get)
  - OCEAN address on Polygon: [0x282d8efCe846A88B159800bd4130ad77443Fa1A1](https://polygonscan.com/token/0x282d8efCe846A88B159800bd4130ad77443Fa1A1)

**Additional Components**

| What         | URL                                          |
| ------------ | -------------------------------------------- |
| Explorer     | https://polygonscan.com/                     |
| Ocean Market | Point wallet to Polygon network, at https://market.oceanprotocol.com |
| Provider     | `https://provider.polygon.oceanprotocol.com` |
| Aquarius     | `https://aquarius.polygon.oceanprotocol.com` |
| Subgraph     | `https://subgraph.polygon.oceanprotocol.com` |

**Bridge**

Check our [Polygon Bridge guide](/tutorials/polygon-bridge/) to learn how you can deposit, withdraw and send tokens.

## Binance Smart Chain

Ocean is deployed to [Binance Smart Chain (BSC)](https://academy.binance.com/en/articles/how-to-get-started-with-binance-smart-chain-bsc), another production network. BSC's native token is BNB - the Binance token.

If you don't find BSC as a predefined network in your wallet, you can connect to it manually via [Binance's guide](https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain) or [Ocean's guide](/tutorials/metamask-setup/#set-up-custom-network) and the parameters below.

| What               | Value                                    |
|--------------------|------------------------------------------|
| Network Name       | `Smart Chain`                            |
| RPC                | `https://bsc-dataseed.binance.org/`      |
| Chain Id           | `56`                                     |
| Currency Symbol    | `BNB`                                    |
| Block Explorer URL | `https://bscscan.com`                    |

**Get Tokens**

- BNB: Exchanges to purchase: typically [binance.com](https://www.binance.com)
- OCEAN: [Exchanges to purchase](https://oceanprotocol.com/token#get)
  - OCEAN address on BSC: [0xdce07662ca8ebc241316a15b611c89711414dd1a](https://bscscan.com/token/0xdce07662ca8ebc241316a15b611c89711414dd1a)

**Additional Components**

| What         | URL                                                                   |
|--------------|-----------------------------------------------------------------------|
| Explorer     | https://bscscan.com/                                                  |
| Ocean Market | Point wallet to BSC network, at https://market.oceanprotocol.com      |
| Provider     | `https://provider.bsc.oceanprotocol.com`                              |
| Aquarius     | `https://aquarius.bsc.oceanprotocol.com`                              |
| Subgraph     | `https://subgraph.bsc.oceanprotocol.com`                              |

**Bridge**

Check our [BSC Bridge guide](/tutorials/bsc-bridge/) to learn how you can deposit, withdraw and send tokens.

## Ropsten

Ropsten is a test network.

In MetaMask and other ERC20 wallets, click on the network name dropdown, then select _Ropsten_.

**Get Tokens**

- ETH: [Faucet for Ropsten](https://faucet.dimensions.network/). You may find others by [searching](https://www.google.com/search?q=ropsten+ether+faucet&oq=ropsten+ether+faucet).
- OCEAN: [Faucet for Ropsten](https://faucet.ropsten.oceanprotocol.com/)
  - OCEAN address on Ropsten: [0x5e8DCB2AfA23844bcc311B00Ad1A0C30025aADE9](https://ropsten.etherscan.io/token/0x5e8DCB2AfA23844bcc311B00Ad1A0C30025aADE9)

**Additional Components**

| What         | URL                                                                    |
| ------------ | ---------------------------------------------------------------------- |
| Explorer     | https://ropsten.etherscan.io                                           |
| Ocean Market | Point wallet to Ropsten network, at https://market.oceanprotocol.com   |
| Provider     | `https://provider.ropsten.oceanprotocol.com`                           |
| Aquarius     | `https://aquarius.ropsten.oceanprotocol.com`                           |
| Subgraph     | `https://subgraph.ropsten.oceanprotocol.com`                           |

## Rinkeby

Rinkeby is a test network.

In MetaMask and other ERC20 wallets, click on the network name dropdown, then select _Rinkeby_.

**Get Tokens**

- ETH: [Faucet for Rinkeby](https://faucet.rinkeby.io/). You may find others by [searching](https://www.google.com/search?q=rinkeby+ether+faucet&oq=rinkeby+ether+faucet).
- OCEAN: [Faucet for Rinkeby](https://faucet.rinkeby.oceanprotocol.com/)
  - OCEAN address on Rinkeby: [0x8967BCF84170c91B0d24D4302C2376283b0B3a07](https://rinkeby.etherscan.io/token/0x8967BCF84170c91B0d24D4302C2376283b0B3a07)

**Additional Components**

| What         | URL                                                                    |
| ------------ | ---------------------------------------------------------------------- |
| Explorer     | https://rinkeby.etherscan.io                                           |
| Ocean Market | Point wallet to Rinkeby network, at https://market.oceanprotocol.com   |
| Provider     | `https://provider.rinkeby.oceanprotocol.com`                           |
| Aquarius     | `https://aquarius.rinkeby.oceanprotocol.com`                           |
| Subgraph     | `https://subgraph.rinkeby.oceanprotocol.com`                           |

## Local

The most straightforward way for local-only development is to use [Barge](https://www.github.com/oceanprotocol/barge), which runs [Ganache](https://www.trufflesuite.com/ganache), Aquarius, and Provider. It is used extensively by the Ocean core devs (with Ganache or Rinkeby) and for automated integration testing.

<repo name="barge"></repo>

To connect to it from MetaMask, select the network called _Localhost 8545_.

Alternatively, you can run Ganache independently. Install it according to [the Ganache docs](https://www.trufflesuite.com/ganache). Then deploy Ocean contracts onto Ganache following [docs in Ocean contracts repo](https://www.github.com/oceanprotocol/contracts). Ganache is at the RPC URL [http://localhost:8545](http://localhost:8545).

**Get Tokens**

- ETH: By default, Ganache creates several Ethereum accounts at launch, gives each some ETH, and makes their private keys available in the logs. You can also instruct Ganache to give ETH to specific Ethereum addresses.
- OCEAN: You can deploy an ERC20 token with label OCEAN. At a minimum, the token needs to be ERC20Detailed and ERC20Capped. You’ll see examples in the quickstarts for the Ocean JavaScript and Python drivers.

## Chain IDs

Some apps may need `network_id` and `chain_id`. Here's a [list of values for major Ethereum networks](https://medium.com/@piyopiyo/list-of-ethereums-major-network-and-chain-ids-2bc58e928508).

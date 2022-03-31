---
title: Supported Networks
description: All the public networks the Ocean Protocol contracts are deployed to, and additional core components deployed to them.
---

Ocean Protocol contracts are deployed on multiple public networks. You can always find the most up-to-date deployment addresses for all individual contracts in the [address.json](https://github.com/oceanprotocol/contracts/blob/v4main/addresses/address.json).

In each network, you’ll need ETH to pay for gas, and OCEAN for certain Ocean actions. Because the Ethereum mainnet is a network for production settings, ETH and OCEAN tokens have real value on there. The ETH and OCEAN tokens in each test network don’t have real value and are used for testing-purposes only. They can be obtained with _faucets_ to dole out ETH and OCEAN.

The universal Aquarius Endpoint is `https://v4.aquarius.oceanprotocol.com`.



## Ropsten

Ropsten is a test network.

In MetaMask and other ERC20 wallets, click on the network name dropdown, then select _Ropsten_.

**Tokens**

- Ropsten ETH:
  - Native token to pay transaction fees
  - [Faucet](https://faucet.dimensions.network/). You may find others by [searching](https://www.google.com/search?q=ropsten+ether+faucet&oq=ropsten+ether+faucet).
- Ropsten OCEAN:
  - Address: [0x5e8DCB2AfA23844bcc311B00Ad1A0C30025aADE9](https://ropsten.etherscan.io/token/0x5e8DCB2AfA23844bcc311B00Ad1A0C30025aADE9)
  - [Faucet](https://faucet.ropsten.oceanprotocol.com/)

**Additional Components**

| What         | URL                                                                  |
| ------------ | -------------------------------------------------------------------- |
| Explorer     | https://ropsten.etherscan.io                                         |
| Ocean Market | Point wallet to Ropsten network, at https://market.oceanprotocol.com |
| Provider     | `https://v4.provider.ropsten.oceanprotocol.com`                         |
| Subgraph     | `https://v4.subgraph.ropsten.oceanprotocol.com`                         |

## Rinkeby

Rinkeby is a test network.

In MetaMask and other ERC20 wallets, click on the network name dropdown, then select _Rinkeby_.

**Tokens**

- Rinkeby ETH:
  - Native token to pay transaction fees
  - [Faucet](https://faucet.rinkeby.io/). You may find others by [searching](https://www.google.com/search?q=rinkeby+ether+faucet&oq=rinkeby+ether+faucet).
- Rinkeby OCEAN:
  - Address: [0x8967BCF84170c91B0d24D4302C2376283b0B3a07](https://rinkeby.etherscan.io/token/0x8967BCF84170c91B0d24D4302C2376283b0B3a07)
  - [Faucet](https://faucet.rinkeby.oceanprotocol.com/)

**Additional Components**

| What         | URL                                                                  |
| ------------ | -------------------------------------------------------------------- |
| Explorer     | https://rinkeby.etherscan.io                                         |
| Ocean Market | Point wallet to Rinkeby network, at https://market.oceanprotocol.com |
| Provider     | `https://v4.provider.rinkeby.oceanprotocol.com`                         |
| Subgraph     | `https://v4.subgraph.rinkeby.oceanprotocol.com`                         |

## Mumbai

Mumbai is a test network tuned for Matic / Polygon.

If you don't find Mumbai as a predefined network in your wallet, you can connect to it manually via [Matic's guide](https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/).

**Tokens**

- Mumbai MATIC:
  - Native token to pay transaction fees
  - [Faucet](https://faucet.matic.network/). You may find others by [searching](https://www.google.com/search?q=mumbai+faucet).
- Mumbai OCEAN:
  - Address: [0xd8992Ed72C445c35Cb4A2be468568Ed1079357c8](https://mumbai.polygonscan.com/token/0xd8992Ed72C445c35Cb4A2be468568Ed1079357c8)
  - [Faucet](https://faucet.mumbai.oceanprotocol.com/)

**Additional Components**

| What         | URL                                                                 |
| ------------ | ------------------------------------------------------------------- |
| Explorer     | https://mumbai.polygonscan.com                                      |
| Ocean Market | Point wallet to Mumbai network, at https://market.oceanprotocol.com |
| Provider     | `https://v4.provider.mumbai.oceanprotocol.com`                         |
| Subgraph     | `https://v4.subgraph.mumbai.oceanprotocol.com`                         |


## Moonbase

Moonbase is a test network tuned for Moonbeam / Moonriver.

If you don't find Moonbase as a predefined network in your wallet, you can connect to it manually via [Moonbase guide](https://docs.moonbeam.network/learn/platform/networks/moonbase/).

**Tokens**

- Moonbase DEV:
  - Native token to pay transaction fees
  - Facuet: See above guide You may find others by [searching](https://www.google.com/search?q=moonbase+dev+faucet).
- Moonbase OCEAN:
  - Address: [0xF6410bf5d773C7a41ebFf972f38e7463FA242477](https://moonbase.moonscan.io/token/0xF6410bf5d773C7a41ebFf972f38e7463FA242477)
  - [Faucet](https://faucet.moonbase.oceanprotocol.com/)

**Additional Components**

| What         | URL                                                                 |
| ------------ | ------------------------------------------------------------------- |
| Explorer     | https://moonbase.moonscan.io/                                      |
| Ocean Market | Point wallet to Moonbase network, at https://market.oceanprotocol.com |
| Provider     | `https://v4.provider.moonbase.oceanprotocol.com/`                       |
| Subgraph     | `https://v4.subgraph.moonbase.oceanprotocol.com`                         |



## Local / Ganache

The most straightforward way for local-only development is to use [Barge](https://www.github.com/oceanprotocol/barge), which runs [Ganache](https://www.trufflesuite.com/ganache), Aquarius, and Provider. It is used extensively by the Ocean core devs (with Ganache or Rinkeby) and for automated integration testing.

<repo name="barge"></repo>

To connect to it from MetaMask, select the network called _Localhost 8545_.

Alternatively, you can run Ganache independently. Install it according to [the Ganache docs](https://www.trufflesuite.com/ganache). Then deploy Ocean contracts onto Ganache following [docs in Ocean contracts repo](https://www.github.com/oceanprotocol/contracts). Ganache is at the RPC URL [http://localhost:8545](http://localhost:8545).

**Tokens**

- Ganache ETH:
  - Native token to pay transaction fees
  - By default, Ganache creates several Ethereum accounts at launch, gives each some ETH, and makes their private keys available in the logs. You can also instruct Ganache to give ETH to specific Ethereum addresses.
- Ganache OCEAN:
  - You can deploy an ERC20 token with label OCEAN. At a minimum, the token needs to be ERC20Detailed and ERC20Capped. You’ll see examples in the quickstarts for the Ocean JavaScript and Python drivers.

## Other

Some apps may need `network_id` and `chain_id`. Here's a [list of values for major Ethereum networks](https://medium.com/@piyopiyo/list-of-ethereums-major-network-and-chain-ids-2bc58e928508).

---
title: Supported Networks
description: All the public networks the Ocean Protocol contracts are deployed to, and additional core components deployed to them.
---

Ocean Protocol contracts are deployed on multiple public networks. You can always find the most up-to-date deployment addresses for all individual contracts in the [address.json](https://github.com/oceanprotocol/contracts/blob/v4main/addresses/address.json).

In each network, you’ll need ETH to pay for gas, and OCEAN for certain Ocean actions. Because the Ethereum mainnet is a network for production settings, ETH and OCEAN tokens have real value on there. The ETH and OCEAN tokens in each test network don’t have real value and are used for testing-purposes only. They can be obtained with _faucets_ to dole out ETH and OCEAN.

The universal Aquarius Endpoint is `https://v4.aquarius.oceanprotocol.com`.

## Ethereum Mainnet

Ethereum mainnet is a production network. In MetaMask and other ERC20 wallets, click on the network name dropdown, then select _Ethereum mainnet_.

**Tokens**

- Mainnet ETH:
  - Native token to pay transaction fees
- Mainnet OCEAN:
  - Address: [0x967da4048cD07aB37855c090aAF366e4ce1b9F48](https://etherscan.io/token/0x967da4048cD07aB37855c090aAF366e4ce1b9F48)

**Additional Components**

| What         | URL                                                                               |
| ------------ | --------------------------------------------------------------------------------- |
| Explorer     | https://etherscan.io                                                              |
| Ocean Market | Point wallet to Ethereum Mainnet network, at https://v4.market.oceanprotocol.com/ |
| Provider     | `https://v4.provider.mainnet.oceanprotocol.com`                                   |
| Subgraph     | `https://v4.subgraph.mainnet.oceanprotocol.com`                                   |

## Polygon Mainnet

Ocean is deployed to Polygon Mainnet, another production network. Polygon’s native token is MATIC.
If you don’t find Polygon as a predefined network in your wallet, you can connect to it manually via Polygon's guide [here](https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/#add-the-polygon-network-manually).

**Tokens**

- Matic:
  - Native token to pay transaction fees
- Matic OCEAN:
  - Address: [0x282d8efCe846A88B159800bd4130ad77443Fa1A1](https://polygonscan.com/token/0x282d8efce846a88b159800bd4130ad77443fa1a1)

**Additional Components**

| What         | URL                                                                              |
| ------------ | -------------------------------------------------------------------------------- |
| Explorer     | https://polygonscan.com                                                          |
| Ocean Market | Point wallet to Ploygon Mainnet network, at https://v4.market.oceanprotocol.com/ |
| Provider     | `https://v4.provider.polygon.oceanprotocol.com/`                                 |
| Subgraph     | `https://v4.subgraph.polygon.oceanprotocol.com/`                                 |

**Bridge**

Check our Polygon Bridge [guide](/tutorials/polygon-bridge/) to learn how you can deposit, withdraw and send tokens.

## Binance Smart Chain

Ocean is deployed to Binance Smart Chain (BSC), another production network. BSC’s native token is BNB - the Binance token.

If you don’t find BSC as a predefined network in your wallet, you can connect to it manually via Binance’s guide [here](https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain).

**Tokens**

- BSC BNB:
  - Native token to pay transaction fees.
- BSC OCEAN:
  - Address: [0xdce07662ca8ebc241316a15b611c89711414dd1a](https://bscscan.com/token/0xdce07662ca8ebc241316a15b611c89711414dd1a)

**Additional Components**

| What         | URL                                                                                  |
| ------------ | ------------------------------------------------------------------------------------ |
| Explorer     | https://bscscan.com/                                                                 |
| Ocean Market | Point wallet to Binance Smart Chain network, at https://v4.market.oceanprotocol.com/ |
| Provider     | `https://v4.provider.bsc.oceanprotocol.com`                                          |
| Subgraph     | `https://v4.subgraph.bsc.oceanprotocol.com`                                          |

**Bridge**

Check our BSC Bridge [guide](/tutorials/bsc-bridge/) to learn how you can deposit, withdraw and send tokens.

## Energy Web Chain

Ocean is deployed to [Energy Web Chain](https://energy-web-foundation.gitbook.io/energy-web/technology/the-stack/trust-layer-energy-web-chain), another production network. Energy Web’s native token is EWT.

If you don’t find Energy Web Chain as a predefined network in your wallet, you can connect to it using the guide [here](https://energy-web-foundation.gitbook.io/energy-web/how-tos-and-tutorials/connect-to-energy-web-chain-main-network-with-metamash).

**Tokens**

- Energy Web Chain EWT:
  - Native token to pay transaction fees.
- Energy Web Chain OCEAN:
  - Address: [0x593122aae80a6fc3183b2ac0c4ab3336debee528](https://explorer.energyweb.org/token/0x593122aae80a6fc3183b2ac0c4ab3336debee528)

**Additional Components**

| What         | URL                                                                               |
| ------------ | --------------------------------------------------------------------------------- |
| Explorer     | https://explorer.energyweb.org/                                                   |
| Ocean Market | Point wallet to Energy Web Chain network, at https://v4.market.oceanprotocol.com/ |
| Provider     | `https://v4.provider.energyweb.oceanprotocol.com/`                                |
| Subgraph     | `https://v4.subgraph.energyweb.oceanprotocol.com`                                 |

**Bridge**

Use the link [here](https://bridge.carbonswap.exchange) to bridge the assets between EWC and Ethereum mainnet.

## Moonriver

Ocean is deployed to [Moonriver](https://docs.moonbeam.network/builders/get-started/networks/moonriver/), another production network. Moonriver’s native token is MOVR.

If you don’t find Moonriver as a predefined network in your wallet, you can connect to it using the guide [here](https://docs.moonbeam.network/builders/get-started/networks/moonriver/#connect-metamask).

**Tokens**

- Moonriver MOVR:
  - Native token to pay transaction fees.
- Moonriver OCEAN:
  - Address: [0x99C409E5f62E4bd2AC142f17caFb6810B8F0BAAE](https://blockscout.moonriver.moonbeam.network/token/0x99C409E5f62E4bd2AC142f17caFb6810B8F0BAAE/token-transfers)

**Additional Components**

| What         | URL                                                                        |
| ------------ | -------------------------------------------------------------------------- |
| Explorer     | https://blockscout.moonriver.moonbeam.network                              |
| Ocean Market | Point wallet to Moonriver network, at https://v4.market.oceanprotocol.com/ |
| Provider     | `https://v4.provider.moonriver.oceanprotocol.com`                          |
| Subgraph     | `https://v4.subgraph.moonriver.oceanprotocol.com`                          |

**Bridge**

Use [Anyswap](https://anyswap.exchange/#/bridge) to bridge between ETH Mainnet and Moonriver.

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
| Provider     | `https://v4.provider.ropsten.oceanprotocol.com`                      |
| Subgraph     | `https://v4.subgraph.ropsten.oceanprotocol.com`                      |

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
| Provider     | `https://v4.provider.rinkeby.oceanprotocol.com`                      |
| Subgraph     | `https://v4.subgraph.rinkeby.oceanprotocol.com`                      |

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
| Provider     | `https://v4.provider.mumbai.oceanprotocol.com`                      |
| Subgraph     | `https://v4.subgraph.mumbai.oceanprotocol.com`                      |

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

| What         | URL                                                                   |
| ------------ | --------------------------------------------------------------------- |
| Explorer     | https://moonbase.moonscan.io/                                         |
| Ocean Market | Point wallet to Moonbase network, at https://market.oceanprotocol.com |
| Provider     | `https://v4.provider.moonbase.oceanprotocol.com/`                     |
| Subgraph     | `https://v4.subgraph.moonbase.oceanprotocol.com`                      |

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

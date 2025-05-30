---
title: null
description: All the public networks the Ocean Protocol contracts are deployed to.
---

# Networks - to be updated

Ocean Protocol's smart contracts and [OCEAN](broken-reference) are deployed on multiple public networks: several production chains, and several testnets too.

The file [`address.json`](https://github.com/oceanprotocol/contracts/blob/v4main/addresses/address.json) holds up-to-date deployment addresses for all Ocean contracts.

On tokens:

* You need the network's native token to pay for gas to make transactions: ETH for Ethereum mainnet, MATIC for Polygon, etc. You typically get these from exchanges.
* You may get OCEAN from an exchange, and bridge it as needed.
* For testnets, you'll need "fake" native tokens to pay for gas, and "fake" OCEAN. Typically, you get these from faucets.
* Below, we give token-related instructions, for each network.

## Networks Summary

Here are the networks that Ocean is deployed to.

**Production Networks:**

* Ethereum mainnet
* Polygon mainnet
* Oasis Sapphire mainnet
* BNB Smart Chain
* Energy Web Chain
* Optimism (OP) Mainnet
* Moonriver

**Test Networks:**

* Görli
* Sepolia
* Oasis Sapphire testnet
* Optimism (OP) Sepolia

The rest of this doc gives details for each network. You can skip it until you need the reference information.

## Production Networks

### Ethereum Mainnet

| Native token  | ETH                                                                                                                 |
| ------------- | ------------------------------------------------------------------------------------------------------------------- |
| OCEAN address | [0x967da4048cD07aB37855c090aAF366e4ce1b9F48](https://etherscan.io/token/0x967da4048cD07aB37855c090aAF366e4ce1b9F48) |
| Explorer      | [https://etherscan.io](https://etherscan.io)                                                                        |

**Wallet.** To connect to Ethereum mainnet with e.g. MetaMask, click on the network name dropdown and select "Ethereum mainnet" from the list.

### Polygon Mainnet

| Native token  | MATIC                                                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| OCEAN address | [0x282d8efCe846A88B159800bd4130ad77443Fa1A1](https://polygonscan.com/token/0x282d8efce846a88b159800bd4130ad77443fa1a1) |
| Explorer      | [https://polygonscan.com](https://polygonscan.com)                                                                     |

**Wallet.** If you can't find Polygon Mainnet as a predefined network, follow [Polygon's guide](https://wiki.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/#add-the-polygon-network-manually).

**Bridge.** Follow the [Polygon Bridge guide](bridges.md) in our docs.

### Oasis Sapphire Mainnet

[Ocean Predictoor](../../predictoor/) is deployed on Oasis Sapphire mainnet for its ability to keep EVM transactions private. This deployment does do not currently support ocean.js, ocean.py, or Ocean Market.

| Native token  | ROSE                                                                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| OCEAN address | [0x39d22B78A7651A76Ffbde2aaAB5FD92666Aca520](https://explorer.oasis.io/mainnet/sapphire/token/0x39d22B78A7651A76Ffbde2aaAB5FD92666Aca520) |
| Explorer      | [https://explorer.oasis.io/mainnet/sapphire](https://explorer.oasis.io/mainnet/sapphire/)                                                 |

**Wallet.** If you cannot find Oasis Sapphire Mainnet as a predefined network, fyou can manually connect by entering the following during import: Network Name: `Oasis Sapphire`, RPC URL: `https://sapphire.oasis.io`, Chain ID: `23294`, Token: `ROSE`. For further info, see [Oasis tokens docs](https://docs.oasis.io/general/manage-tokens/).

**Bridge.** Use [Celer](https://cbridge.celer.network/1/23294/OCEAN) to bridge OCEAN from Ethereum mainnet to Oasis Sapphire mainnet.

### BNB Smart Chain

| Native token  | BSC BNB                                                                                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| OCEAN address | [0xdce07662ca8ebc241316a15b611c89711414dd1a](https://bscscan.com/token/0xdce07662ca8ebc241316a15b611c89711414dd1a) |
| Explorer      | [https://bscscan.com/](https://bscscan.com/)                                                                       |

This is one of the [Binance](https://binance.com)-spawned chains. BNB is the token of Binance.

**Wallet.** If BNB Smart Chain is not listed as a predefined network in your wallet, see [Binance's Guide](https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain) to manually connect.

**Bridge.** Our [BNB Smart Chain Bridge Guide](bridges.md#bnb-smart-chain-bridge) describes how to get OCEAN to BNB Smart Chain.

### Energy Web Chain (EWC)

| Native token  | Energy Web Chain EWT                                                                                                          |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| OCEAN address | [0x593122aae80a6fc3183b2ac0c4ab3336debee528](https://explorer.energyweb.org/token/0x593122aae80a6fc3183b2ac0c4ab3336debee528) |
| Explorer      | [https://explorer.energyweb.org/](https://explorer.energyweb.org/)                                                            |

This is the chain for [Energy Web Foundation](https://www.energyweb.org/).

**Wallet.** If you cannot find Energy Web Chain as a predefined network in your wallet, you can manually connect to it by following this [guide](https://energy-web-foundation.gitbook.io/energy-web/how-tos-and-tutorials/connect-to-energy-web-chain-main-network-with-metamash).

**Bridge.** To bridge assets between Ethereum Mainnet and Energy Web Chain and Ethereum mainnet, you can use [Omni bridge by Carbonswap](https://bridge.carbonswap.exchange/).

### Optimism (OP) Mainnet

| Native token  | ETH                                                                                                                              |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| OCEAN address | [0x2561aa2bB1d2Eb6629EDd7b0938d7679B8b49f9E](https://optimistic.etherscan.io/address/0x2561aa2bB1d2Eb6629EDd7b0938d7679B8b49f9E) |
| Explorer      | [https://optimistic.etherscan.io](https://optimistic.etherscan.io)                                                               |

**Wallet.** If you cannot find Optimism as a predefined network in your wallet, you can manually connect to with [this OP guide](https://community.optimism.io/docs/useful-tools/networks/#op-mainnet).

**Bridge.** Follow the [OP Bridge guide](https://docs.optimism.io/builders/dapp-developers/bridging/standard-bridge).

### Moonriver

| Native token  | Moonriver MOVR                                                                                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| OCEAN address | [0x99C409E5f62E4bd2AC142f17caFb6810B8F0BAAE](https://blockscout.moonriver.moonbeam.network/token/0x99C409E5f62E4bd2AC142f17caFb6810B8F0BAAE/token-transfers) |
| Explorer      | [https://blockscout.moonriver.moonbeam.network](https://blockscout.moonriver.moonbeam.network)                                                               |

[Moonriver](https://moonbeam.network/networks/moonriver/) is an EVM-based parachain of Kusama.

**Wallet.** If Moonriver is not listed as a predefined network in your wallet, you can manually connect to it by following [Moonriver's guide](https://docs.moonbeam.network/builders/get-started/networks/moonriver/#connect-metamask).

**Bridge.** To bridge assets between Moonriver and Ethereum mainnet, you can use the [Celer](https://cbridge.celer.network/bridge/moonriver-ethereum/).

## Test Networks

Unlike production networks, tokens on test networks do not hold real economic value.

### Sepolia

| Native token        | Sepolia (fake) ETH                                                                                                            |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Native token faucet | [Here](https://sepoliafaucet.com/)                                                                                            |
| OCEAN address       | [0x1B083D8584dd3e6Ff37d04a6e7e82b5F622f3985](https://sepolia.etherscan.io/address/0x1B083D8584dd3e6Ff37d04a6e7e82b5F622f3985) |
| OCEAN faucet        | [Here](https://faucet.sepolia.oceanprotocol.com/)                                                                             |
| Explorer            | [https://sepolia.etherscan.io](https://sepolia.etherscan.io/)                                                                 |

**Wallet.** To connect with e.g. MetaMask, select "Sepolia" from the network dropdown list(enable "Show test networks").

### Oasis Sapphire Testnet

[Ocean Predictoor](../../predictoor/) is deployed on Oasis Sapphire testnet. This deployment does do not currently support ocean.js, ocean.py, or Ocean Market.

| Native token        | (fake) ROSE                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Native token faucet | [Here](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/testnet-faucet.md#get-fake-rose-on-sapphire-testnet)                  |
| OCEAN address       | [0x973e69303259B0c2543a38665122b773D28405fB](https://explorer.oasis.io/testnet/sapphire/address/0x973e69303259B0c2543a38665122b773D28405fB) |
| OCEAN faucet        | [Here](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/testnet-faucet.md#get-fake-ocean-on-sapphire-testnet)                 |
| Explorer            | [https://explorer.oasis.io/testnet/sapphire](https://explorer.oasis.io/testnet/sapphire/)                                                   |

**Wallet.** If you cannot find Oasis Sapphire Testnet as a predefined network, you can manually connect to it by entering the following during import: Network Name: `Oasis Sapphire Testnet`, RPC URL: `https://testnet.sapphire.oasis.dev`, Chain ID: `23295`, Token: `ROSE`. For further info, see [Oasis tokens docs](https://docs.oasis.io/general/manage-tokens/).

### Optimism (OP) Sepolia

| Native token        | Sepolia (fake) ETH                                                                                                                     |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Native token faucet | [Here](https://faucet.quicknode.com/optimism/sepolia)                                                                                  |
| OCEAN address       | [0xf26c6C93f9f1d725e149d95f8E7B2334a406aD10](https://sepolia-optimism.etherscan.io/address/0xf26c6c93f9f1d725e149d95f8e7b2334a406ad10) |
| OCEAN faucet        | [Here](https://faucet.op-sepolia.oceanprotocol.com/)                                                                                   |
| Explorer            | [https://sepolia-optimism.etherscan.io](https://sepolia-optimism.etherscan.io/)                                                        |

**Wallet.** If OP Sepolia is not listed as a predefined network, follow [OP's Guide](https://community.optimism.io/docs/useful-tools/networks/#op-sepolia).

***

_Next:_ [_Bridges_](bridges.md)

_Back:_ [_OCEAN: the Ocean token_](broken-reference)

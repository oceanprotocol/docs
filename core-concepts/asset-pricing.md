---
title: Asset Pricing
description: Choose the revenue model during asset publishing
---

# Asset Pricing

Ocean Protocol offers two types of pricing options for asset monetization. The publisher can choose a pricing model which best suits their needs while publishing an asset. The pricing model selected cannot be changed once the asset is published.

The price of an asset is determined by the number of Ocean tokens a buyer must pay to access the asset. When users pay the right amount of Ocean tokens, they get a _datatoken_ in their wallets, a tokenized representation of the access right stored on the blockchain. To read more about datatoken and data NFT click [here](datanft-and-datatoken.md).

### Fixed pricing

With the fixed price model, publishers set the price for the data in OCEAN. Ocean Market creates a datatoken in the background with a value equal to the dataset price in OCEAN so that buyers do not have to know about the datatoken. Buyers pay the amount specified in OCEAN for access. The publisher can update the price of the dataset later anytime.

A [FixedRateExchange](https://github.com/oceanprotocol/contracts/blob/v4main/contracts/pools/fixedRate/FixedRateExchange.sol) smart contract stores the information about the price of the assets published using this model.

The image below shows how to set the fixed pricing of an asset in the Ocean's Marketplace. Here, the price of the asset is set to 10 Ocean tokens.

![fixed-asset-pricing](<images/fixed-asset-pricing (3).png>)

### Free pricing

With the free pricing model, the buyers can access an asset without requiring them to pay for it except for the transaction fees.

With this pricing model, datatokens are allocated to the [dispenser](https://github.com/oceanprotocol/contracts/blob/v4main/contracts/pools/dispenser/Dispenser.sol) smart contract, which dispenses data tokens to users for free whenever they are accessing an asset.

Free pricing is suitable for individuals and organizations working in the public domain and want their datasets to be freely available. Publishers can also choose this model if they publish assets with licenses that require them to make them freely available.

The image below shows how to set free access to an asset in the Ocean's Marketplace.

![free-asset-pricing](<images/free-asset-pricing (3).png>)

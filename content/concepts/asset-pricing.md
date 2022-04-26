---
title: Asset pricing models
description: Choose one of the pricing models during asset publishing
---

Ocean Protocol offers 3 types of pricing options for asset monetization. The asset publisher can choose one of the available options which best suits their needs while publishing an asset. Once the pricing type is set, and the asset is published, the pricing model is permanently fixed for the asset and cannot be changed later.

## Fixed pricing

In a fixed pricing model, an asset's value is fixed as long as it is available in the market for buying. Publisher can set the price by deciding the value of a datatoken in terms of the number of Ocean tokens. The buyer needs to pay the exact number of Ocean tokens to get 1 datatoken. The publisher has an option to update the price of the dataset later anytime.

Publishers can choose this fixed pricing model when they do not want Automated Market Maker(AMM) pools to decide the price discovery. If the publisher has already analyzed and estimated the worth of the dataset and is ready to sell an asset at a constant price, this is the suitable pricing model.

The below image shows how to set the fixed pricing of an asset in the Ocean's Marketplace. Here, the price of the asset is set to 10 Ocean tokens.

![fixed-asset-pricing](images/fixed-asset-pricing.png 'Fixed asset pricing using Marketplace')

## Dynamic pricing

The publisher creates an Automated Market Maker(AMM) pool of Datatoken and Ocean tokens in dynamic pricing. *AMM* enables unstoppable, decentralized trading of assets in the liquidity pool.

AMM uses a constant product formula to price assets, which states: **x * y = k**
    where **x** and **y** represents the quantity of the two assets(in the form of tokens) in the pool and **k** is a constant.

A *liquidity pool* is a reserve of assets locked in the smart contract for market making. A buyer or a seller of an asset exchanges asset **x** for asset **y** or vice versa. AMM calculates the exchange ratio between the tokens based on the mathematical formula above.

Ocean Protocol facilitates the creation of Datatoken/OCEAN liquidity pool with Balancer smart contracts. 

While publishing an asset with dynamic pricing, the publisher decides the initial ratio of Datatokens and Ocean tokens in the pool, thus setting the initial price of an asset. The price of an asset is later dependent on the pool's liquidity and the price impact of trade in the pool.

Publishers can set the pricing model of an asset to Dynamic pricing if they want the market to decide the asset price and thus enable auto price discovery.

The below image shows how to set the Dynamic pricing of an asset in the Ocean's Marketplace. Here, the asset price is initially set to 50 Ocean tokens.

![dynamic-asset-pricing](images/dynamic-asset-pricing.png 'Dynamic asset pricing using Marketplace')

Ocean Protocol also allows publishers to set the pricing using ocean.js and ocean.py library.

## Free pricing

With free pricing, the buyers can access an asset without requiring to pay for it except for the transaction fees.

The below image shows how to set free access to an asset in the Ocean's Marketplace.

![free-asset-pricing](images/free-asset-pricing.png 'Free asset pricing using Marketplace')

---
title: Asset pricing models
description: Choose one of the pricing models during asset publishing
---

Ocean Protocol offers 3 types of pricing options for asset monetization. The asset publisher can choose one of the avialable options which best suits their needs while publishing an asset. Once the pricing type is set and the asset is published, the pricing model is fixed permanently the respective asset and cannot be changed later.

## Fixed pricing

In fixed pricing model, the value of an asset is fixed as long as it is available in the market for buying. The publisher can set the price by deciding the value of a datatoken in terms of number of Ocean tokens. The buyer needs to be pay the exact number of Ocean tokens to get 1 datatoken. The publisher has an option to update the price of the dataset later anytime.

Publishers can choose this fixed pricing model when they do not want the price discovery to be decided by the market through Automated Market Maker(AMM) pools. If the publisher has already analysed and estimated the worth of the dataset and ready to sell asset at a constant price, this is the right pricing model.

Below image shows how to set Fixed pricing of an asset in the Ocean's Marketplace. Here, the price of the asset is set to 10 Ocean tokens.

![fixed-asset-pricing](images/fixed-asset-pricing.png 'Fixed asset pricing using Marketplace')

Ocean Protocol also allows publishers to set the pricing using ocean.js and ocean.py library.

## Dynamic pricing

In dynamic pricing, the publisher creates an Automated Market Maker(AMM) pool of Datatoken and Ocean tokens. *AMM* enable unstoppable, decentralized trading of assets in the liquidity pool.

AMM use a constant product formula to price assets, which states: **x * y = k**
    where, **x** and **y** represents the quantity of the two assets(in the form of tokens) in the pool and **k** is a constant.

A *liquidity pool* is a reserve of assets locked in the smart contract for market making. A buyer or a seller of an asset exchange asset **x** for asset **y** or vice versa. AMM calculates the exchange ratio between the tokens based on the mathematical formula above.

Ocean Protocol facilictates creating of Datatoken/OCEAN liquidity pool with Balancer smart contracts. 

While publishing an asset with dynamic pricing, the publisher decides the intial ratio of Datatokens and Ocean tokens in the pool, thus setting initial price of an asset. The price of an asset is later dependent on the amount of liquidity in the pool and the price impact of a trade in the pool.

Publishers can set pricing model of an asset to Dynamic pricing if they want the market to decide the asset price and thus enable auto price discovery.

Below image shows how to set Dynamic pricing of an asset in the Ocean's Marketplace. Here, the price of the asset is set to 50 Ocean tokens initially.

![dynamic-asset-pricing](images/dynamic-asset-pricing.png 'Dynamic asset pricing using Marketplace')

Ocean Protocol also allows publishers to set the pricing using ocean.js and ocean.py library.

## Free pricing

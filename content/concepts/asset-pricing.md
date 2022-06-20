---
title: Asset pricing
description: Choose the revenue model during asset publishing
---

Ocean Protocol offers 3 types of pricing options for asset monetization. The publisher can choose a pricing model which best suits their needs while publishing an asset. The pricing model selected cannot be changed once the asset is published.

The price of an asset is determined by the number of Ocean tokens a buyer must pay to access the asset. When users pay the right amount of Ocean tokens, they get a _datatoken_ in their wallets, a tokenized representation of the access right stored on the blockchain. To read more about datatoken and data NFT click [here](/concepts/datanft-and-datatoken).

## Fixed pricing

With the fixed price model, publishers set the price for the data in OCEAN. Ocean Market creates a datatoken in the background with a value equal to the dataset price in OCEAN so that buyers do not have to know about the datatoken. Buyers pay the amount specified in OCEAN for access. The publisher can update the price of the dataset later anytime.

A [FixedRateExchange](https://github.com/oceanprotocol/contracts/blob/v4main/contracts/pools/fixedRate/FixedRateExchange.sol) smart contract stores the information about the price of the assets published using this model.

Publishers can choose this fixed pricing model when they do not want Automated Market Maker(AMM) pools to decide the price discovery. If the publisher has already analyzed and estimated the worth of the dataset and is ready to sell an asset at a constant price, this is the suitable pricing model.

The image below shows how to set the fixed pricing of an asset in the Ocean's Marketplace. Here, the price of the asset is set to 10 Ocean tokens.

![fixed-asset-pricing](images/fixed-asset-pricing.png 'Fixed asset pricing using Marketplace')

## Dynamic pricing

With the dynamic pricing model, the market defines the price with a mechanism derived from Decentralized Finance (DeFi): liquidity pools. While the publisher sets a base price for the token in OCEAN, the market will organically discover the right price for the data. This can be extremely handy when the value of the data is not known.

The Ocean Market helps create an Automated Market Maker(AMM) pool of Datatoken and Ocean tokens in dynamic pricing for each asset. _AMM_ enables unstoppable, decentralized trading of assets in the liquidity pool.

AMM uses a constant product formula to price tokens, which states: **x \* y = k**
where **x** and **y** represents the quantity of the two different tokens in the pool and **k** is a constant.

A _liquidity pool_ is a reserve of tokens locked in the smart contract for market making. A buyer or a seller of an asset exchanges token **x** for token **y** or vice versa. AMM calculates the exchange ratio between the tokens based on the mathematical formula above.

Ocean Protocol facilitates the creation of Datatoken/OCEAN liquidity pool with [Balancer smart contracts](https://github.com/oceanprotocol/contracts/tree/v4main/contracts/pools/balancer). The publisher needs to only approve a blockchain transaction that creates an AMM while publishing the asset. Thus, Ocean Market hides the complexities of deploying an AMM pool.

While publishing an asset with dynamic pricing, the publisher decides the initial ratio of Datatokens and Ocean tokens in the pool, thus setting the initial price of an asset. The price of an asset is later dependent on the pool's liquidity and the price impact of trade in the pool.

Publishers can set the pricing model of an asset to Dynamic pricing if they want the market to decide the asset price and thus enable auto price discovery.

The image below shows how to set the Dynamic pricing of an asset in the Ocean's Marketplace. Here, the asset price is initially set to 50 Ocean tokens.

![dynamic-asset-pricing](images/dynamic-asset-pricing.png 'Dynamic asset pricing using Marketplace')

Ocean Protocol also allows publishers to set the pricing using ocean.js and ocean.py library.

### Effect on price due to changing liquidity

#### Action: adding/removing liquidity from pool

With one-sided staking, when liquidity is added to the pool, the user's ocean tokens are added to the liquidity pool. To protect users' funds from impermanent loss due to changes in the ratio of tokens in the liquidity pool, Ocean protocol's bot mints new datatokens and adds them to the pool. Thus, when users add liquidity to the pool, the ratio of tokens remains constant, and there is no price impact on the datatoken.

Similarly, when the users remove liquidity, they get Ocean tokens in return for their address. To balance the ratio of tokens in the pool, Ocean Protocol's bot burns the datatokens. Thus, in this case, there is also no price impact on the datatoken.

#### Action: Buying datatoken

When the user buys a datatoken by paying Ocean tokens to the pool, the ratio of Ocean token and datatoken changes, there would be more Ocean tokens and fewer datatokens in the pool than previously. As there would be fewer datatokens, the pool will increase the amount of Ocean tokens required to buy a datatoken in the following transactions to maintain the constant ratio between tokens. Thus, the price of the datatoken increases whenever datatokens are bought.

#### Action: Sell datatoken

When the user sells a datatoken and gets Ocean tokens from the pool, the ratio of Ocean token and datatoken changes, and there would be fewer Ocean tokens and more datatokens in the pool than previously. As there would be more datatokens, the pool will decrease the amount of Ocean tokens required to buy a datatoken in the following transactions to maintain the constant ratio between tokens. Thus, the price of the datatoken decreases whenever datatokens are sold.

#### Action: Buy dataset

Buying a dataset requires the users to obtain the datatokens from the pool by paying Ocean tokens. This is the same as buying a datatoken from the pool. Thus, if users buy datatokens, the price of datatokens will increase. However, if users already have the datatokens, they can simply use them to buy the asset or the service without requiring interaction with the pool. In such a case, the price of the datatoken doesn't change.

## Free pricing

With the free pricing model, the buyers can access an asset without requiring them to pay for it except for the transaction fees.

With this pricing model, datatokens are allocated to the [dispenser](https://github.com/oceanprotocol/contracts/blob/v4main/contracts/pools/dispenser/Dispenser.sol) smart contract, which dispenses data tokens to users for free whenever they are accessing an asset.

Free pricing is suitable for individuals and organizations working in the public domain and want their datasets to be freely available. Publishers can also choose this model if they publish assets with licenses that require them to make them freely available.

The image below shows how to set free access to an asset in the Ocean's Marketplace.

![free-asset-pricing](images/free-asset-pricing.png 'Free asset pricing using Marketplace')

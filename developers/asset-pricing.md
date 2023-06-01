---
description: Choose the revenue model during asset publishing
---

# Asset Pricing



Ocean Protocol offers you flexible and customizable pricing options to monetize your valuable data assets. You have two main pricing models to choose from:&#x20;

* [Fixed pricing ](asset-pricing.md#fixed-pricing)
* [Free pricing](asset-pricing.md#free-pricing)

These models are designed to cater to your specific needs and ensure a smooth experience for data consumers.

The price of an asset is determined by the number of Ocean tokens a buyer must pay to access the asset. When users pay the right amount of Ocean tokens, they get a _datatoken_ in their wallets, a tokenized representation of the access right stored on the blockchain. To read more about datatoken and data NFT click [here](datanft-and-datatoken/).

### Fixed pricing

With the fixed pricing model, you have the power to set a specific price for your data assets in Ocean tokens (OCEAN). This means that buyers interested in accessing your data will need to pay the designated amount of OCEAN. To make things even easier, Ocean Market automatically creates a special token called a "datatoken" behind the scenes.&#x20;

This datatoken represents the access right to your data, so buyers don't have to worry about the technical details. If you ever want to adjust the price of your dataset, you have the flexibility to do so whenever you need.&#x20;

The fixed pricing model relies on the [createNftWithErc20WithFixedRate](https://github.com/oceanprotocol/contracts/blob/main/contracts/ERC721Factory.sol#LL674C14-L674C45) smart contract, which securely stores the pricing information for assets published using this model.

### Free pricing

On the other hand, the free pricing model gives data consumers access to your asset without requiring them to make a direct payment. Users can freely access your data, with the only cost being the transaction fees associated with the blockchain network.&#x20;

In this model, datatokens are allocated to a dispenser smart contract, which dispenses data tokens to users at no charge when they access your asset. This is perfect if you want to make your data widely available and encourage collaboration. It's particularly suitable for individuals and organizations working in the public domain or for assets that need to comply with open access licenses.

The fixed pricing model relies on the [createNftWithErc20WithDispenser](https://github.com/oceanprotocol/contracts/blob/main/contracts/ERC721Factory.sol#LL713C14-L713C45) smart contract, which securely stores the pricing information for assets published using this model.



To make the most of these pricing models, you can rely on user-friendly libraries such as [Ocean.js ](ocean.js/)and [Ocean.py](ocean.py/), specifically developed for interacting with Ocean Protocol. With Ocean.js, you can use the [createFRE() ](ocean.js/publish.md)function to effortlessly deploy a data NFT (non-fungible token) and datatoken with a fixed-rate exchange pricing model. Similarly, in Ocean.py, the [create\_url\_asset()](ocean.py/publish-flow.md) function allows you to create an asset with fixed pricing. These libraries simplify the process of interacting with Ocean Protocol, managing pricing, and handling asset creation.

By taking advantage of Ocean Protocol's pricing options and leveraging the capabilities of [Ocean.js](ocean.js/) and [Ocean.py](ocean.py/) (or by using the [Market](../user-guides/using-ocean-market.md)), you can effectively monetize your data assets while ensuring transparent and seamless access for data consumers.&#x20;

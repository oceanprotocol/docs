---
title: Fees
description: The Ocean Protocol defines various fees for creating a sustainability loop.
---

## Path to sustainability

Ocean Protocol aims to be a community-driven project. Through OceanDAO, the project aims at achieving decentralized governance and sustainability loop. For the project to grow and improve, the participants need to be rewarded for their contributions. The Ocean Protocol's smart contracts include a fee mechanism to maintain the sustainability loop.

## Fee types

### Swap fee

Swap fees are collected whenever someone swaps a datatoken for basetoken (e.g., OCEAN) or basetoken for datatoken. The swap could be inside a pool (using an automated market maker) or in a fixed-rate exchange.
These are the fees that are applied whenever a user swaps basetoken or datatoken:

- Publisher Marketplace swap fee
- Consumer Marketplace swap fee
- Provider Consumption Fees
- [Ocean Community Fee](#ocean-community-fee)

### Publish fee

Publish fees will be charged to a publisher when they publish an asset.

Currently, no fees are applicable in Ocean's default marketplace. However, it is possible to charge a publish fee in the custom marketplace by adding an extra transaction in the publish flow.

Based on the use case of the marketplace, the marketplace owner can decide if this fee should be charged or not.

### Consume fee

Consume fee is charged when a user holding datatoken exchanges it for a compute service, downloading a data asset or an algorithm.

The following fees apply to the consumption of data assets as a part of Consume fee:

- Consume Market Consumption Fee
- Publisher Market Consumption Fee
- Provider Consumption Fees
- [Ocean Community Fee](#ocean-community-fee)

### Ocean Community fee

Ocean's smart contract collects the **Ocean Community fee** during a swap operation. These fees are reinvested in community projects via Ocean DAO and other initiatives. Currently. This fee is set to 0 (as long as either Ocean or H20 are used as the base token in the market) in the smart contract but can be updated by the Ocean Protocol foundation.

Whereas a fee of 0.1% is applicable on all swaps using another token as the base token.

### Provider fee

Provider is a component of Ocean Protocol's ecosystem which facilitates data consumption, starting compute jobs, encryption of DDOs, and decryption of DDOs. Provider also validates if the user can access a particular data asset or service. To know more about Provider, click here.

Provider fees are paid to the individual or organization running their Provider instance whenever a user consumes a data asset or swaps a datatoken for a basetoken. These fees can be set to an absolute amount, and the receiver can also decide which token to receive the fees in - they don't have to be in the same currency used in the consuming market.

Provider fee can also be used to charge for computing resources. Based on the compute resources needed to run an algorithm in the Compute-to-Data environment, a consumer can choose the amount of pay according to their needs.

This fee incentivizes individuals and organizations to run their provider instances and charge consumers according to resource usage.

## Further reading

- [The Web3 Sustainability Loop](https://blog.oceanprotocol.com/the-web3-sustainability-loop-b2a4097a36e)

---
title: Fees
description: The Ocean Protocol defines various fees for creating a sustainability loop.
---

## Path to sustainability

Ocean Protocol is a community-driven project. Through OceanDAO, the project aims at achieving decentralized governance and sustainability loop. For the project to grow and improve, the participants are rewarded for their contributions. The Ocean Protocol's smart contracts include a fee mechanism to maintain the sustainability loop.

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

Currently, no fees are applicable in Ocean's default marketplace. However, it is possible to charge a publishing fee in the custom marketplace by adding an extra transaction in the publish flow.

Based on the use case of the marketplace, the marketplace owner can decide if this fee should be charged or not.

### Consume fee

Consume fee is charged when a user holding datatoken exchanges it for a compute service, downloading a data asset or an algorithm.

The following fees apply to the consumption of data assets as a part of Consume fee:

- Consume Market Consumption Fee
- Publisher Market Consumption Fee
- Provider Consumption Fees
- [Ocean Community Fee](#ocean-community-fee)

### Ocean Community fee

Ocean's smart contract collects the **Ocean Community fee** during a swap operation. These fees are reinvested in community projects via Ocean DAO and other initiatives. Currently, this fee is set to 0 (as long as either Ocean or H20 are used as the base token in the market) in the smart contract but can be updated by the Ocean Protocol foundation.

Whereas a fee of 0.1% is applicable on all swaps using another token as the base token.

### Provider fee

Provider is a component of Ocean Protocol's ecosystem which facilitates data consumption, starts compute jobs, encrypts DDOs, and decrypts DDOs. Provider also validates if the user can access a particular data asset or service. To know more about Provider, click [here](https://github.com/oceanprotocol/provider).

Provider fees are paid to the individual or organization running their Provider instance whenever a user consumes a data asset or swaps a datatoken for a basetoken. These fees can be set to an absolute amount, and the receiver can also decide which token to receive the fees in - they don't have to be in the same currency used in the consuming market.

Provider fee can also be used to charge for computing resources. Based on the compute resources needed to run an algorithm in the Compute-to-Data environment, a consumer can choose the amount to pay according to their needs.

This fee incentivizes individuals and organizations to run their provider instances and charge consumers according to resource usage.

## Fee values

| Swap Fees                                                                                                             | Value in Ocean Market, using any Provider               | Value in Other Markets                                       |
| --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------------ |
| publishMarket: Pools                                                                                                  | 0%                                                      | Set in the market config, by the publishing market.          |
| publishMarket: FixedRate                                                                                              | 0%                                                      | Set in the market config, by the publishing market.          |
| consumeMarket: Pools                                                                                                  | 0%                                                      | Set in market config, by the consuming market.               |
| consumeMarket: FixedRate <br>ERC20Template                                                                            | 0%                                                      | 0%                                                           |
| consumeMarket: FixedRate <br>EnterpriseTemplate                                                                       | 0%                                                      | Set in market config, by the consuming market.               |
| Ocean Community: Pools & FixedRate<br>OCEAN, H2O as basetoken                                                         | 0.1%                                                    | 0.1%                                                         |
| Ocean Community: Pools & FixedRate<br>other basetoken                                                                 | 0.2%                                                    | 0.2%                                                         |
| Pool Liquidity Provider (LP)                                                                                          | 1%                                                      | Set by the pool creator on contract deployment.<br> Min = 0.001%(contract) & 0.1%(market)<br>Max = 10%(contract & market) |
| <b>Publish Fees</b>                                                                                                   | 0%                                                      | 0%                                                           |
| <b>Order Fees <br>The consumer has 1.0 datatokens, they use it to get access to the dataset.</b>                      |                                                         |                                                              |
| publishMarket<br>Absolute value, in any token. E.g. 5 USDT                                                            | 0                                                       | Set in market config, by the publishing market.              |
| consumeMarket<br>Absolute value, in any token. E.g. 2 DAI                                                             | 0                                                       | Set in market config, by the consuming market.               |
| Ocean Community<br>Fixed price in DT                                                                                  | 0.03 DT                                                 | 0.03 DT                                                      |
| <b>Ocean Provider Fees</b>                                                                                            | <b>OPF Provider</b>                                     | <b>3rd party Provider</b>                                    |
| Token in which fee is charged: `PROVIDER_FEE_TOKEN`                                                                   | OCEAN                                                   | E.g. USDC                                                    |
| Download: `COST_PER_MB`                                                                                               | 0                                                       | Set in Provider envvars.                                     |
| Compute: `COST_PER_MIN`<br> Environment: 1 CPU, 60 secs max                                                                                               | 0                                                       | Set in OperatorEngine envvars.                               |
| Compute: `COST_PER_MIN`<br> Environment: 1 CPU, 1 hour max                                                                                               | 1.0 OCEAN/min                                           | Set in OperatorEngine envvars.                               |
| Ocean Community                                                                                                       | 0% of the Provider fee                                  | 0% of the Provider fee                                       |

## Further reading

- [The Web3 Sustainability Loop](https://blog.oceanprotocol.com/the-web3-sustainability-loop-b2a4097a36e)

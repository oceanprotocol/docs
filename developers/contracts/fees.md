---
description: The Ocean Protocol defines various fees for creating a sustainability loop.
---

# Fees

### Path to Sustainability

Ocean Protocol achieves sustainability via the [Web3 sustainability loop](https://blog.oceanprotocol.com/the-web3-sustainability-loop-b2a4097a36e).

* The project grows and improves through the efforts of OceanDAO grant recipients.
* The OceanDAO votes to decide which proposals receive grants.
* Grant funds are sourced from the Ocean Protocol community treasury.
* The Ocean Protocol community collects fees when users interact with the protocol, thus completing the sustainability loop.

### Fee types



#### Publish fee

Publish fees can be charged to a publisher when they publish an asset.

Currently, the Ocean marketplace does not charge a publishing fee. Custom marketplaces can charge a publishing fee by adding an extra transaction in the publish flow.

Based on the use case of the marketplace, the marketplace owner can decide if this fee should be charged or not.

#### Consume(aka. Order) fee

Consume fees are charged when a user holding a datatoken exchanges it for the right to download an asset or to start a compute job that uses the asset.

These are the fees that are applied whenever a user pays to access an asset:

* Consume Market Consumption Fee
* Publisher Market Consumption Fee
* Provider Consumption Fees
* [Ocean Community Fee](fees.md#ocean-community-fee)

#### Ocean Community fee

Ocean's smart contracts collect **Ocean Community fees** during order operations. These fees are reinvested in community projects and distributed to the veOcean holders through Data Farming.

The provider Ocean Community order fee is 0.03 DT per order operation.

These fees can be updated by the Ocean Protocol Foundation.

#### Provider fee

Provider is a component of Ocean Protocol's ecosystem that facilitates data consumption, starts compute jobs, encrypts DDOs, and decrypts DDOs. The provider also validates if the user can access a particular data asset or service. To learn more about Provider, click here.

Provider fees are paid to the individual or organization running their Provider instance when the user orders an asset. These fees can be set to an absolute amount, not as a percentage. The provider can also specify which token the fees must be paid in - they don't have to be the same token used in the consuming market.

Provider fees can also be used to charge for computing resources. Based on the compute resources needed to run an algorithm in the Compute-to-Data environment, a consumer can choose the amount to pay according to their needs.

These fees incentivize individuals and organizations to run their provider instances and charge consumers according to resource usage.

### Fee values

The table is periodically updated. Users are advised to confirm new values through the [contracts](https://github.com/oceanprotocol/contracts) and the [market](https://github.com/oceanprotocol/market).

#### Publish fees

| Market/Type | Value in Ocean Market, using any Provider | Value in Other Markets |
| ----------- | ----------------------------------------- | ---------------------- |
| -           | 0%                                        | 0%                     |

#### Order fees (1 DT)

| Market/Type                                                       | Value in Ocean Market, using any Provider | Value in Other Markets                          |
| ----------------------------------------------------------------- | ----------------------------------------- | ----------------------------------------------- |
| <p>publishMarket<br>Absolute value, in any token. E.g. 5 USDT</p> | 0                                         | Set in market config, by the publishing market. |
| <p>consumeMarket<br>Absolute value, in any token. E.g. 2 DAI</p>  | 0                                         | Set in market config, by the consuming market.  |
| <p>Ocean Community<br>Fixed price in DT</p>                       | 0.03 DT                                   | 0.03 DT                                         |

#### Ocean Provider fees

| Type                                                                         |      OPF Provider      | 3rd party Provider             |
| ---------------------------------------------------------------------------- | :--------------------: | ------------------------------ |
| Token in which fee is charged: `PROVIDER_FEE_TOKEN`                          |          OCEAN         | E.g. USDC                      |
| Download: `COST_PER_MB`                                                      |            0           | Set in Provider envvars.       |
| <p>Compute: <code>COST_PER_MIN</code><br>Environment: 1 CPU, 60 secs max</p> |            0           | Set in OperatorEngine envvars. |
| <p>Compute: <code>COST_PER_MIN</code><br>Environment: 1 CPU, 1 hour max</p>  |      1.0 OCEAN/min     | Set in OperatorEngine envvars. |
| Ocean Community                                                              | 0% of the Provider fee | 0% of the Provider fee         |

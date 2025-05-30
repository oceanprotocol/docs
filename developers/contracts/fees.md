---
description: The Ocean Protocol defines various fees for creating a sustainability loop.
---

# Fees

One transaction may have fees going to several entities, such as the market where the asset was published, or the Ocean Community. Here are all of them:

* Publish Market: the market where the asset was published.
* Consume Market: the market where the asset was consumed.
* Provider: the entity facilitating asset consumption. May serve up data, run compute, etc.
* Ocean Community: Ocean Community Wallet.

### Publish fee

When you publish an asset on the Ocean marketplace, there are currently no charges for publishing fees :tada:

However, if you're building a custom marketplace, you have the flexibility to include a publishing fee by adding an extra transaction in the publish flow. Depending on your marketplace's unique use case, you, as the marketplace owner, can decide whether or not to implement this fee. We believe in giving you the freedom to tailor your marketplace to your specific needs and preferences.

| Value in Ocean Market |     Value in Other Markets     |
| :-------------------: | :----------------------------: |
|           0%          | Customizable in market config. |

### Swap fee

Swap fees are incurred as a transaction cost whenever someone exchanges one type of token for another within a [fixed rate exchange](pricing-schemas.md#fixed-pricing). These exchanges can involve swapping a datatoken for a basetoken, like OCEAN or H2O, or vice versa, where basetoken is exchanged for datatoken. The specific value of the swap fee depends on the type of token being used in the exchange.

The swap fee values are set at the smart contract level and can only be modified by the Ocean Protocol Foundation (OPF).

| Value for OCCEAN or H2O | Value for other ERC20 tokens |
| :---------------------: | :--------------------------: |
|           0.1%          |             0.2%             |

### Consume(aka. Order) fee

When a user exchanges a [datatoken](datatokens.md) for the privilege of downloading an asset or initiating a compute job that utilizes the asset, consume fees come into play. These fees are associated with accessing an asset and include:

1. **Publisher Market** Consumption Fee
   * Defined during the ERC20 [creation](https://github.com/oceanprotocol/contracts/blob/b937a12b50dc4bdb7a6901c33e5c8fa136697df7/contracts/templates/ERC721Template.sol#L334).
   * Defined as Address, Token, Amount. The amount is an absolute value(not a percentage).
   * A marketplace can charge a specified amount per order.
   * Eg: A market can set a fixed fee of 10 USDT per order, no matter what pricing schemas are used (fixedrate with ETH, BTC, dispenser, etc).
2. **Consume Market** Consumption Fee
   * A market can specify what fee it wants on the order function.
3. **Provider** Consumption Fees
   * Defined by the [Provider](../old-infrastructure/provider/) for any consumption.
   * Expressed in: Address, Token, Amount (absolute), Timeout.
   * You can retrieve them when calling the initialize endpoint.
   * Eg: A provider can charge a fixed fee of 10 USDT per consume, irrespective of the pricing schema used (e.g., fixed rate with ETH, BTC, dispenser).
4. **Ocean Community** Fee
   * Ocean's smart contracts collect **Ocean Community fees** during order operations. These fees are reinvested in community projects and distributed to the veOCEAN holders through Data Farming.
   * This fee is set at the [smart contract](https://github.com/oceanprotocol/contracts/blob/main/contracts/communityFee/OPFCommunityFeeCollector.sol) level.
   * It can be updated by Ocean Protocol Foundation. See details in the [smart contracts](https://github.com/oceanprotocol/contracts/blob/main/contracts/pools/FactoryRouter.sol#L391-L407).

<details>

<summary>Update Ocean Community Fees</summary>

The Ocean Protocol Foundation can [change](https://github.com/oceanprotocol/contracts/blob/main/contracts/pools/FactoryRouter.sol#L391-L407) the Ocean community fees.

```solidity
/**
* @dev updateOPCFee
 *      Updates OP Community Fees
 * @param _newSwapOceanFee Amount charged for swapping with ocean approved tokens
 * @param _newSwapNonOceanFee Amount charged for swapping with non ocean approved tokens
 * @param _newConsumeFee Amount charged from consumeFees
 * @param _newProviderFee Amount charged for providerFees
 */
function updateOPCFee(uint256 _newSwapOceanFee, uint256 _newSwapNonOceanFee,
       uint256 _newConsumeFee, uint256 _newProviderFee) external onlyRouterOwner {

       swapOceanFee = _newSwapOceanFee;
       swapNonOceanFee = _newSwapNonOceanFee;
       consumeFee = _newConsumeFee;
       providerFee = _newProviderFee;
       emit OPCFeeChanged(msg.sender, _newSwapOceanFee, _newSwapNonOceanFee, _newConsumeFee, _newProviderFee);
}
```

</details>

Each of these fees plays a role in ensuring fair compensation and supporting the Ocean community.

| Fee              | Value in Ocean Market | Value in Other Markets                                   |
| ---------------- | :-------------------: | -------------------------------------------------------- |
| Publisher Market |           0           | Customizable in market config.                           |
| Consume Market   |           0           | Customizable in market config.                           |
| Provider         |           0           | Customizable. See details [below](fees.md#provider-fee). |
| Ocean Community  |        0.03 DT        | 0.03 DT                                                  |

### Provider fee

[Providers](../old-infrastructure/provider/) facilitate data consumption, initiate compute jobs, encrypt and decrypt DDOs, and verify user access to specific data assets or services.

Provider fees serve as [compensation](broken-reference) to the individuals or organizations operating their own provider instances when users request assets.

* Defined by the [Provider](../old-infrastructure/provider/) for any consumption.
* Expressed in: Address, Token, Amount (absolute), Timeout.
* You can retrieve them when calling the initialize endpoint.
* These fees can be set as a **fixed amount** rather than a percentage.
* Providers have the flexibility to specify the token in which the fees must be paid, which can differ from the token used in the consuming market.
* Provider fees can be utilized to charge for [computing](../compute-to-data/) resources. Consumers can select the desired payment amount based on the compute resources required to execute an algorithm within the [Compute-to-Data](../compute-to-data/) environment, aligning with their specific needs.
* Eg: A provider can charge a fixed fee of 10 USDT per consume, irrespective of the pricing schema used (e.g., fixed rate with ETH, BTC, dispenser).
* Eg: A provider may impose a fixed fee of 15 DAI to reserve compute resources for 1 hour, enabling the initiation of compute jobs.

These fees play a crucial role in incentivizing individuals and organizations to operate provider instances and charge consumers based on their resource usage. By doing so, they contribute to the growth and sustainability of the Ocean Protocol ecosystem.

| Type                                                                         |      OPF Provider      | 3rd party Provider                                                   |
| ---------------------------------------------------------------------------- | :--------------------: | -------------------------------------------------------------------- |
| Token to charge the fee: `PROVIDER_FEE_TOKEN`                                |          OCEAN         | <p>Customizable by the Provider Owner.<br>E.g. <code>USDC</code></p> |
| Download: `COST_PER_MB`                                                      |            0           | Customizable in the Provider `envvars`.                              |
| <p>Compute: <code>COST_PER_MIN</code><br>Environment: 1 CPU, 60 secs max</p> |            0           | Customizable in the OperatorEngine `envvars`.                        |
| <p>Compute: <code>COST_PER_MIN</code><br>Environment: 1 CPU, 1 hour max</p>  |      1.0 OCEAN/min     | Customizable in the OperatorEngine `envvars`.                        |
| Ocean Community                                                              | 0% of the Provider fee | 0% of the Provider fee.                                              |

{% hint style="info" %}
Stay up-to-date with the latest information! The values within the system are regularly updated. We recommend verifying the most recent values directly from the [contracts](https://github.com/oceanprotocol/contracts) and the [market](https://github.com/oceanprotocol/market).
{% endhint %}

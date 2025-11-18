---
description: >-
  The Ocean Enterprise Collective defines various fees for creating a
  sustainability loop.
---

# Fees

One transaction may have fees going to several entities, such as the market where the asset was published or the Ocean Enterprise Collective. Here are all of them:

* Publish Market: the market where the asset was published.
* Consume Market: the market where the asset was consumed.
* Provider: the Ocean Node facilitating asset consumption. May serve up data, run compute, etc.
* Ocean Enterprise Collective: Ocean Enterprise Collective Wallet.

### Publish fee

When you publish an asset on the Ocean Enterprise marketplace, there are currently no charges for publishing fees&#x20;

However, if you're building a custom marketplace, you have the flexibility to include a publishing fee by adding an extra transaction in the publish flow. Depending on your marketplace's unique use case, you, as the marketplace owner, can decide whether or not to implement this fee. We believe in giving you the freedom to tailor your marketplace to your specific needs and preferences.

### Consume (Order) fee

When a user purchases an asset, consumption fees apply. These fees are associated with accessing an asset and include:

1. **Consume Market** Consumption Fee
   * A market can specify what fee it wants on the order function.
2. **Provider** Consumption Fees
   * Defined by the Provider for any consumption.
   * Expressed in: Address, Token, Amount (absolute), Timeout.
   * You can retrieve them when calling the initialized endpoint.
   * E.g.: A provider can charge a fixed fee of 10 EURC per consumption, irrespective of the pricing schema used.
3. **Ocean Enterprise Collective** Fee
   * Ocean Enterprise smart contracts collect **Ocean Enterprise Collective fees** during order operations. These fees are used to fund essential OEC e.V. activities such as code development and maintenance.
   * It can be updated by Ocean Enterprise Collective.&#x20;

Each of these fees plays a role in ensuring fair compensation and supporting the Ocean community.

<table><thead><tr><th width="239.5">Fee</th><th align="center">Value</th></tr></thead><tbody><tr><td>Publisher Market</td><td align="center">set by marketplace operator</td></tr><tr><td>Consume Market</td><td align="center">set by marketplace operator</td></tr><tr><td>Provider</td><td align="center">set by the Ocean Node operator</td></tr><tr><td>Ocean Enterprise Collective </td><td align="center">1.9%, minimum 1 cent</td></tr></tbody></table>

### Provider fee

[Providers](old-infrastructure/provider/) facilitate data consumption, initiate compute jobs, encrypt and decrypt DDOs, and verify user access to specific data assets or services.

Provider fees serve as compensation to the individuals or organizations operating their own provider instances when users request assets.

* Defined by the [Provider](old-infrastructure/provider/) for any consumption.
* Expressed in: Address, Token, Amount (absolute), Timeout.
* You can retrieve them when calling the initialize endpoint.
* These fees can be set as a **fixed amount** rather than a percentage.
* Providers have the flexibility to specify the token in which the fees must be paid, which can differ from the token used in the consuming market.
* Provider fees can be utilized to charge for computing resources. Consumers can select the desired payment amount based on the compute resources required to execute an algorithm within the Compute-to-Data environment, aligning with their specific needs.
* Eg: A provider can charge a fixed fee of 10 USDT per consume, irrespective of the pricing schema used (e.g., fixed rate with ETH, BTC, dispenser).
* Eg: A provider may impose a fixed fee of 15 DAI to reserve compute resources for 1 hour, enabling the initiation of compute jobs.

These fees play a crucial role in incentivizing individuals and organizations to operate provider instances and charge consumers based on their resource usage. By doing so, they contribute to the growth and sustainability of the Ocean Protocol ecosystem.

{% hint style="info" %}
Stay up-to-date with the latest information! The values within the system are regularly updated. We recommend verifying the most recent values directly from the [contracts](https://github.com/oceanprotocol/contracts) and the [market](https://github.com/oceanprotocol/market).
{% endhint %}


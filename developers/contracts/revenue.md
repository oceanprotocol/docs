---
description: Explore and manage the revenue generated from your data NFTs.
---

# Revenue

Having a [data NFT](data-nfts.md) that generates revenue continuously, even when you're not actively involved, is an excellent source of income. This revenue stream allows you to earn consistently without actively dedicating your time and effort. Each time someone buys access to your NFT, you receive money, further enhancing the financial benefits. This steady income allows you to enjoy the rewards of your asset while minimizing the need for constant engagement:moneybag:

<figure><img src="../../.gitbook/assets/gif/sponge-money.gif" alt=""><figcaption><p>Make it rain</p></figcaption></figure>

By default, the revenue generated from a [data NFT](data-nfts.md) is directed to the [owner](roles.md#nft-owner) of the NFT. This arrangement automatically updates whenever the data NFT is transferred to a new owner.

However, there are scenarios where you may prefer the revenue to be sent to a different account instead of the owner. This can be accomplished by designating a new payment collector. This feature becomes particularly beneficial when the data NFT is owned by an organization or enterprise rather than an individual.

{% hint style="info" %}
There are two templates available: [ERC20Template](datatoken-templates.md#regular-template) and [ERC20TemplateEnterprise](datatoken-templates.md#enterprise-template).

In the case of [ERC20TemplateEnterprise](datatoken-templates.md#enterprise-template), when you deploy a fixed rate exchange, the funds generated as revenue are automatically sent to the owner's address. The owner receives the revenue without any manual intervention.

On the other hand, with [ERC20Template](datatoken-templates.md#regular-template), for a fixed rate exchange, the revenue is available at the fixed rate exchange level. The owner or the payment collector has the authority to manually retrieve the revenue.
{% endhint %}

There are several methods available for establishing a new **payment collector**. You have the option to utilize the ERC20Template/ERC20TemplateEnterprise contract directly. Another approach is to leverage the [ocean.py](../../data-scientists/ocean.py/) and [ocean.js](../ocean.js/) libraries. Alternatively, you can employ the network explorer associated with your asset. Lastly, you can directly set it up within the Ocean Market.

Here are some examples of how to set up a new payment collector using the mentioned methods:

1. Using [Ocean.js](https://github.com/oceanprotocol/ocean.js/blob/ae2ff1ccde53ace9841844c316a855de271f9a3f/src/contracts/Datatoken.ts#L393).

```typescript
datatokenAddress = 'Your datatoken address'
paymentCollectorAddress = 'New payment collector address'

await datatoken.setPaymentCollector(datatokenAddress, callerAddress, paymentCollectorAddress)
```

2. Using [Ocean.py](https://github.com/oceanprotocol/ocean.py/blob/bad11fb3a4cb00be8bab8febf3173682e1c091fd/ocean\_lib/models/test/test\_datatoken.py#L39).

```python
datatokenAddress = 'Your datatoken address'
paymentCollectorAddress = 'New payment collector address'

datatoken.setPaymentCollector(paymentCollectorAddress, {"from": publisher_wallet})
```

3. Using the [Ocean Market](https://market.oceanprotocol.com/).

Go to the asset detail page and then click on “Edit Asset” and then scroll down to the field called “Payment Collector Address”. Add the new Ethereum address in this field and then click “Submit“. Finally, you will then need to sign two transactions to finalize the update.

<figure><img src="../../.gitbook/assets/market/change-payment-collector.png" alt=""><figcaption><p>Update payment collector</p></figcaption></figure>

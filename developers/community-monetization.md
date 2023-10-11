---
description: How can you build a self sufficient project?
---

# Community Monetization

The intentions with all of the updates are to ensure that your project is able to become self-sufficient and profitable in the long run (if that’s your aim). We love projects that are built on top of Ocean and we want to ensure that you are able to generate enough income to keep your project running well into the future.

### 1. Publishing & Selling Data

**Do you have data that you can monetize?** :thinking:

Ocean V3 introduced the new crypto primitives of “data on-ramp” and “data off-ramp” via datatokens. The publisher creates ERC20 datatokens for a dataset (on-ramp). Then, anyone can access that dataset by acquiring and sending datatokens to the publisher via Ocean handshaking (data off-ramp). As a publisher, it’s in your best interest to create and publish useful data — datasets that people want to consume — because the more they consume the more you can **earn**. This is the heart of Ocean utility: connecting data publishers with data consumers :people\_hugging:

The datasets can take one of many shapes. For AI use cases, they may be raw datasets, cleaned-up datasets, feature-engineered **data**, **AI models**, **AI model predictions**, or otherwise. (They can even be other forms of copyright-style IP such as **photos**, **videos**, or **music**!) Algorithms themselves may be sold as part of Ocean’s Compute-to-Data feature.

The first opportunity of data NFTs is the potential to sell the base intellectual property (IP) as an exclusive license to others. This is akin to EMI selling the Beatles’ master tapes to Universal Music: whoever owns the masters has the right to create records, CDs, and digital [sub-licenses](../discover/glossary.md). It’s the same for data: as the data NFT owner you have the **exclusive right** to create ERC20 datatoken sub-licenses. With Ocean, this right is now transferable as a data NFT. You can sell these data NFTs in **OpenSea** and other NFT marketplaces.

If you’re part of an established organization or a growing startup, you’ll also love the new role structure that comes with data NFTs. For example, you can specify a different address to collect [revenue](contracts/revenue.md) compared to the address that owns the NFT. It’s now possible to fully administer your project through these [roles](contracts/roles.md).

**In short, if you have data to sell, then Ocean gives you superpowers to scale up and manage your data project. We hope this enables you to bring your data to new audiences and increase your profits.**

### 2. Running Your Own Data dApp

We have always been super encouraging of anyone who wishes to build a dApp on top of Ocean or to fork Ocean Market and make their own data marketplace. With the latest release, we have taken this to the next level and introduced more opportunities and even more fee customization options.

Ocean empowers dApp operators like yourself to have greater flexibility and control over the fees you can charge. This means you can tailor the fee structure to suit your specific needs and ensure the sustainability of your project.  **The smart contracts enable you to collect a fee not only in consume, but also in fixed-rate exchange, also you can set the fee value.**  For more detailed information regarding the fees, we invite you to visit the [fees](contracts/fees.md) page.

Another new opportunity is using your own **ERC20** token in your dApp, where it’s used as the unit of exchange. This is fully supported and can be a great way to ensure the sustainability of your project.

### 3. Running Your Own Provider

Now this is a completely brand new opportunity to start generating [revenue](contracts/revenue.md) — running your own [provider](https://github.com/oceanprotocol/provider). We have been aware for a while now that many of you haven’t taken up the opportunity to run your own provider, and the reason seems obvious — there aren’t strong enough incentives to do so.

For those that aren’t aware, [Ocean Provider](provider/README.md) is the proxy service that’s responsible for encrypting/ decrypting the data and streaming it to the consumer. It also validates if the user is allowed to access a particular data asset or service. It’s a crucial component in Ocean’s architecture.

Now, as mentioned above, fees are now paid to the individual or organization running the provider whenever a user downloads a data asset. The fees for downloading an asset are set as a cost per MB. In addition, there is also a provider fee that is paid whenever a compute job is run, which is set as a price per minute.

The download and compute fees can both be set to any absolute amount and you can also decide which token you want to receive the fees in — they don’t have to be in the same currency used in the consuming market. So for example, the provider fee could be a fixed rate of 5 USDT per 1000 MB of data downloaded, and this fee remains fixed in USDT even if the marketplace is using a completely different currency.

Additionally, provider fees are not limited to data consumption — they can also be used to charge for compute resources. So, for example, this means a provider can charge a fixed fee of 15 DAI to reserve compute resources for 1 hour. This has a huge upside for both the user and the provider host. From the user’s perspective, this means that they can now reserve a suitable amount of compute resources according to what they require. For the host of the provider, this presents another great opportunity to create an income.


**Benefits to the Ocean Community**
We’re always looking to give back to the Ocean community and collecting fees is an important part of that. As mentioned above, the Ocean Protocol Foundation retains the ability to implement community fees on data consumption. The tokens that we receive will either be burned or invested in the community via projects that they are building. These investments will take place either through [Data Farming](../rewards/df-intro.md), [Ocean Shipyard](https://oceanprotocol.com/shipyard), or Ocean Ventures.

Projects that utilize the Ocean token or H2O are subject to a 0.1% fee. In the case of projects that opt to use different tokens, an additional 0.1% fee will be applied. We want to support marketplaces that use other tokens but we also recognize that they don’t bring the same wider benefit to the Ocean community, so we feel this small additional fee is proportionate.

---
title: FAQs
description: Frequently Asked Questions about Ocean Protocol
---

# FAQ

Have some questions about Ocean Protocol?

Hopefully, you'll find the answers here! If not then please don't hesitate to reach out to us on [discord](https://discord.gg/TnXjkR5) - there are no stupid questions!

### General

<details>
<summary>How is Ocean Protocol related to AI?</summary>

Modern Artificial Intelligence (AI) models require vast amounts of training data.

In fact, _every stage_ in the AI modeling life cycle is about data: raw training data -> cleaned data -> feature vectors -> trained models -> model predictions.

Ocean's all about managing data: getting it, sharing it, selling it, and making $ from it -- all with Web3 benefits like decentralized control, data provenance, privacy, sovereign control, and more.

Thus, Ocean helps manage data all along the AI model life cycle:
- Ocean helps with raw training data
- Ocean helps with cleaned data & feature vectors
- Ocean helps with trained models as data
- Ocean helps with model predictions as data

A great example is [Ocean Predictoor](../predictoor/), where user make $ from their model predictions in a decentralized, private fashion.

</details>

<details>
<summary>How is Ocean Protocol aiming to start a new Data Economy?</summary>

Ocean Protocol's mission is to develop tools and services that facilitate the emergence of a new Data Economy. This new economy aims to empower data owners with control, maintain privacy, and catalyze the commercialization of data, including the establishment of data marketplaces.

To understand more about Ocean's vision, check out this [blog post](https://blog.oceanprotocol.com/mission-values-for-ocean-protocol-aba998e95b8).
</details>

<details>
<summary>How does Ocean Protocol generate revenue?</summary>

The protocol generates revenue through transaction fees. These fees serve multiple purposes: they fund the ongoing development of Ocean technology and support the buy-and-burn process of the OCEAN.

To get a glimpse of the revenue generated on the Polygon network, which is the most frequently used network, you can find detailed information [here](https://polygonscan.com/address/0x042BFbd88c3998282153088604207b2AeF045b43#tokentxns).

To monitor burned tokens, visit [etherscan](https://etherscan.io/token/0x967da4048cd07ab37855c090aaf366e4ce1b9f48?a=0x000000000000000000000000000000000000dead). As of September 2023, approximately 1.4 million tokens have been burned. 🔥📈
</details>

<details>
<summary>How decentralized is Ocean?</summary>

To be fully decentralized means no single point of control, at any level of the stack.

- OCEAN is already fully decentralized. 
- The Ocean core tech stack is already fully decentralized too: smart contracts on permissionless chains, and anyone can run support middleware.
- Predictoor is fully decentralized.
- Data Farming has some centralized components; we aim to decentralize those in the next 12-24 months. ⁣
  
</details>


### About OCEAN

<details>
<summary>How is OCEAN used? How does it capture value?</summary>

OCEAN has mechanics to increase demand and reduce supply.

OCEAN is used to stake on data for curation, to buy & sell data, and more. The [OCEAN page](https://www.oceanprotocol.com/token) has details. Usage drives demand.

OCEAN can be locked into veOCEAN; veOCEAN holders receive Data Farming rewards. The rewards increase demand for OCEAN; and locking veOCEAN reduces near-term supply of OCEAN.

For each consume transaction, a small fee goes to the Ocean community, which in turn goes to buy back OCEAN and burn it (buy-and-burn). This reduces supply permanently.
</details>

<details>
<summary>What is the total supply of OCEAN?</summary>

1.41 Billion OCEAN.
</details>

<details>
<summary>What is the circulating supply of OCEAN? What is the emission schedule for OCEAN?</summary>

All OCEAN have been [minted](https://blog.oceanprotocol.com/control-over-the-ocean-contract-to-be-revoked-soon-overview-6c5b15be2db).

There are more than 540 million OCEAN in circulation; the [OCEAN page](https://oceanprotocol.com/about-us/ocean-token) has the precise number.

The remaining tokens emit over decades, mostly for Ocean Data Farming. The [Emissions & APYs page](../data-farming/df-emissions-apys) has details.
</details>

<details>
<summary>Can OCEAN supply become deflationary?</summary>

A portion of the revenue earned in the Ocean ecosystem is earmarked for buy-and-burn. If the transaction volume on Ocean reaches scale and is broadly adopted to the point where the buy-burn mechanism outruns the emissions of OCEAN, the supply would deflate.
</details>

<details>
<summary>Does OCEAN also have governance functionality?</summary>

During the OceanDAO grants program (2021-2022), OCEAN was used for community voting and governance. Currently, there are no governance functions associated with the token.
</details>

<details>
<summary> Which blockchain network currently has the highest liquidity for OCEAN?</summary>

Ethereum mainnet.  
</details>

<details>
<summary>Can the Ocean tech stack be used without OCEAN?</summary>

All Ocean modules and components are open-source and freely available to the community. Developers can change the default currency from OCEAN to a different one for their dApp. 

</details>

<details>
<summary>How does the ecosystem and the token benefit from the usage of the open-source tech stack when transactions can be paid in any currency?</summary>

For each consume transaction, the Ocean community gets a small fee. This happens whether OCEAN is used or not. [Here are details](../developers/contracts/fees.md).
</details>


### Grants, challenges, and ecosystem

<details>
<summary>Is Acentrik from Mercedes Benz built on top of Ocean?</summary>

3rd party markets such as Gaia-X, BDP and Acentrik use Ocean components to power their marketplace. They will likely use another currency for the exchange of services. If these marketplaces are publicly accessible, indexable and abide by the fee structure set out by Ocean Protocol, transaction fees would be remitted back to the Ocean community. These transaction fees would be allocated according to plan set out [here](https://blog.oceanprotocol.com/ocean-token-model-3e4e7af210f9).

</details>

<details>
<summary>What is Ocean Shipyard?</summary>

Ocean Shipyard is an early-stage grant program established to fund the next generation of Web3 dApps built on Ocean Protocol. It is made for entrepreneurs looking to build Web3 solutions on Ocean, make valuable data available, build innovations, and create value for the Ocean ecosystem.

The [Shipyard page](https://oceanprotocol.com/shipyard) has details.
</details>

<details>
<summary>Where can we see previous data challenges and submitted solutions?</summary>

You can find a list of past data challenges on the [website](https://oceanprotocol.com/challenges).
</details>

<details>
<summary>What are the steps needed to encourage people to use the Ocean ecosystem?</summary>

There are a wide host of technical, business, and cultural barriers to overcome before volume sales can scale. Blockchain and crypto technology are relatively new and adopted by a niche group of enthusiasts. On top, the concept of a Data Economy is still nascent. Data buyers are generally restricted to data scientists, researchers, or large corporations, while data providers are mainly corporations and government entities. The commercialization of data is still novel and the processes are being developed and refined.
</details>


### Data security


<details>
<summary>Is my data secure?</summary>

Yes. Ocean Protocol understands that some data is too sensitive to be shared — potentially due to GDPR or other reasons. For these types of datasets, we offer a unique service called [compute-to-data](../developers/compute-to-data/README.md). This enables you to monetize the dataset that sits behind a firewall without ever revealing the raw data to the consumer. For example, researchers and data scientists pay to run their algorithms on the data set, and the computation is performed behind a firewall; all the researchers or data scientists receive is the results generated by their algorithm.
</details>


<details>
<summary>How does Ocean Protocol enforce penalties if data is shared without permission?</summary>

Determining whether someone has downloaded your data and is reselling it is quite challenging. While they are bound by a contract not to do so, it's practically impossible to monitor their actions. If you want to maintain the privacy of your dataset, you can explore the option of using compute-to-data(C2D). Via C2D your data remains private and people can only run algorithms(that you approve of) to extract intelligence. 

This issue is similar to what any digital distribution platform faces. For instance, can Netflix prevent individuals from downloading and redistributing their content? Not entirely. They invest significant resources in security, but ultimately, complete prevention is extremely difficult. They mainly focus on making it more challenging for such activities to occur.
</details>


### Data marketplaces & Ocean Market

<details>
<summary>What is a decentralized data marketplace?</summary>

A data marketplace allows providers to publish data and buyers to consume data.

Unlike centralized data marketplaces, decentralized ones give users more control over their data and algorithms by minimizing custodianship and providing transparent and immutable records of every transaction.

Ocean Market is a reference decentralized data marketplace powered by Ocean stack.

Ocean Compute-to-Data (C2D) enables data and algorithms can be ingested into secure Docker containers where escapes are avoided, protecting both the data and algorithms. C2D can be used from Ocean Market.
</details>

<details>
<summary>Is there a website or platform that tracks the consume volume of Ocean Market?</summary>


Yes. See [autobotocean.com](https://autobotocean.com/). 
</details>

<details>
<summary>Since Ocean Market is open source, what are the future plans for the project in terms of its economic direction?</summary>

Ocean Market is a showcase for the practical application of Ocean, showing others what a decentralized data marketplace look like.

Fees are generated Ocean Market from Ocean Market that head to Ocean community. The earlier Q&A on revenue has details.
</details>

### Contacting Ocean core team

<details>
<summary>Who is the right person to talk to regarding a marketing proposal or collaboration?</summary>

For collaborations, please fill in this [form](https://docs.google.com/forms/d/e/1FAIpQLSdBz7cblsz5yuOKMVoPVfK0Pp1Xuqjwner1kCkRibIIbYMe-w/viewform). 
One member of our team will reach out to you 🤝
</details>

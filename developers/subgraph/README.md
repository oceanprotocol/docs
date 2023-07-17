---
description: >-
  Unlocking the Speed: Subgraph - Bringing Lightning-Fast Retrieval to On-Chain
  Data.
---

# Subgraph

### What is the Subgraph?

The [Ocean Subgraph](https://github.com/oceanprotocol/ocean-subgraph) is built on top of [The Graph](https://thegraph.com/) (the popular :sunglasses: indexing and querying protocol for blockchain data). It is an essential component of the Ocean Protocol ecosystem. It provides an off-chain service that utilizes GraphQL to offer efficient access to information related to datatokens, users, and balances. By leveraging the subgraph, data retrieval becomes faster compared to an on-chain query. The data sourced from the Ocean subgraph can be accessed through [GraphQL](https://graphql.org/learn/) queries.

Imagine this 💭: if you were to always fetch data from the on-chain, you'd start to feel a little...old :older\_woman: Like your queries are stuck in a time warp. But fear not! When you embrace the power of the subgraph, data becomes your elixir of youth.

<figure><img src="../../.gitbook/assets/components/subgraph.png" alt=""><figcaption><p>Ocean Subgraph </p></figcaption></figure>

The subgraph reads data from the blockchain, extracting relevant information. Additionally, it indexes events emitted from the Ocean smart contracts. This collected data is then made accessible to any decentralized applications (dApps) that require it, through GraphQL queries. The subgraph organizes and presents the data in a JSON format, facilitating efficient and structured access for dApps.

### How to use the Subgraph?

You can utilize the Subgraph instances provided by Ocean Protocol or deploy your instance. Deploying your own instance allows you to have more control and customization options for your specific use case. To learn how to host your own Ocean Subgraph instance, refer to the guide available on the [Deploying Ocean Subgraph](../../infrastructure/deploying-ocean-subgraph.md) page.

If you're eager to use the Ocean Subgraph, here's some important information for you: We've deployed an Ocean Subgraph for each of the supported networks. Take a look at the table below, where you'll find handy links to both the subgraph instance and GraphiQL for each network. With the user-friendly GraphiQL interface, you can execute GraphQL queries directly, without any additional setup. It's a breeze! :ocean:

{% hint style="info" %}
When it comes to fetching valuable information about [Data NFTs](../contracts/data-nfts.md) and [datatokens](../contracts/datatokens.md), the subgraph queries play a crucial role. They retrieve numerous details and information, but, the Subgraph cannot decrypt the DDO. But worry not, we have a dedicated component for that—[Aquarius](../aquarius/)! 🐬 Aquarius communicates with the provider and decrypts the encrypted information, making it readily available for queries.
{% endhint %}

### Ocean Subgraph deployments

| Network             | Subgraph URL                                                | GraphiQL URL                                                                                                    |
| ------------------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Ethereum            | [Subgraph](https://v4.subgraph.mainnet.oceanprotocol.com)   | [GraphiQL](https://v4.subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql)   |
| Polygon             | [Subgraph](https://v4.subgraph.polygon.oceanprotocol.com/)  | [GraphiQL](https://v4.subgraph.polygon.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql)   |
| Binance Smart Chain | [Subgraph](https://v4.subgraph.bsc.oceanprotocol.com)       | [GraphiQL](https://v4.subgraph.bsc.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql)       |
| Energy Web Chain    | [Subgraph](https://v4.subgraph.energyweb.oceanprotocol.com) | [GraphiQL](https://v4.subgraph.energyweb.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql) |
| Moonriver           | [Subgraph](https://v4.subgraph.moonriver.oceanprotocol.com) | [GraphiQL](https://v4.subgraph.moonriver.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql) |
| Mumbai              | [Subgraph](https://v4.subgraph.mumbai.oceanprotocol.com)    | [GraphiQL](https://v4.subgraph.mumbai.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql)    |
| Görli               | [Subgraph](https://v4.subgraph.goerli.oceanprotocol.com)    | [GraphiQL](https://v4.subgraph.goerli.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql)    |

{% hint style="warning" %}
When making subgraph queries, please remember that the parameters you send, such as a datatoken address or a data NFT address, should be in **lowercase**. This is an essential requirement to ensure accurate processing of the queries. We kindly request your attention to this detail to facilitate a seamless query experience.
{% endhint %}

In the following pages, we've prepared a few examples just for you. From running queries to exploring data, you'll have the chance to dive right into the Ocean Subgraph data. There, you'll find a wide range of additional code snippets and examples that showcase the power and versatility of the Ocean Subgraph. So, grab a virtual snorkel, and let's explore together! 🤿

{% hint style="info" %}
For more examples, visit the subgraph GitHub [repository](https://github.com/oceanprotocol/ocean-subgraph), where you'll discover an extensive collection of code snippets and examples that highlight the Subgraph's capabilities and adaptability.
{% endhint %}

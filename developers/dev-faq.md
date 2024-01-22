---
title: Development FAQ
description: Frequently Asked Questions About Ocean Technology
---
## Development FAQ

Have some questions about the Ocean Protocol tech stack?

Hopefully, you'll find the answers here! If not then please don't hesitate to reach out to us on [discord](https://discord.gg/EdmenE7eTj) - there are no stupid questions!

<details>
<summary>The blockchain is public - does this mean that anyone can access my data?</summary>

The blockchain being public means that transaction information is transparent and can be viewed by anyone. However, your data isn't directly accessible to the public. Ocean Protocol employs various mechanisms, including encryption and access control, to safeguard your data. Access to the data is determined by the permissions you set, ensuring that only authorized users can retrieve and work with your data. So, while blockchain transactions are public, your data remains protected and accessible only to those with proper authorization.

</details>

<details>
<summary>How are datatokens created?</summary>

Datatokens are created within the Ocean Protocol ecosystem when you tokenize a dataset(convert a dataset into a fungible token that can be traded). More details, on the [datatokens page](../developers/contracts/datatokens.md)
</details>

<details>
<summary>How does the datatoken creator make money?</summary>

You can generate revenue as a dataset publisher by selling datatokens to access your published dataset. For more details, please visit the [community monetization](https://docs.oceanprotocol.com/developers/community-monetization#1.-publishing-and-selling-data) page. 
</details>

<details>
<summary>Where can I find information about the number of datatokens created and track their progress?</summary>

To access this data, some technical expertise is required. You can find this information at the subgraph level. In the documentation, we provide a few examples of how to retrieve this data using JavaScript. Feel free to give it a shot by visiting this [page](../developers/subgraph/list-datatokens). If it doesn't meet your requirements, don't hesitate to reach out to us on Discord.
</details>

<details>
<summary>How can developers use Ocean technology to build their own data marketplaces?</summary>

You can fork Ocean Market and then make changes as you wish. Please see the [customising your market](../developers/build-a-marketplace/customising-your-market) page for details.
</details>

<details>
<summary>Is there a trading platform or stock exchange that has successfully forked the Ocean marketplace codebase?</summary>

Ocean technology is actively used by Daimler/Acentrik, deltaDAO/GAIA-X, and several other entities. You can find further details on the Ocean [ecosystem page](https://oceanprotocol.com/explore/ecosystem).

</details>

<details>
<summary>What are the Ocean faucets and how can they be used?</summary>

An Ocean faucet is a site to get (fake) OCEAN for use on a given testnet. There's an Ocean faucet for each testnet that Ocean is deployed to. The [networks](../discover/networks/) page have more information.
</details>

<details>
<summary>How can I convert tokens from the BEP20 network to the ERC20 network?</summary>

Please follow this [tutorial](../discover/networks/bridges#bnb-smart-chain-bridge) to bridge from/to BNB Smart Chain. Please double-check the addresses and make sure you are using the right smart contracts.
</details>

<details>
<summary>How to bridge my mOcean back to Ocean?</summary>

Please follow this [tutorial](../discover/networks/bridges#polygon-ex-matic-bridge) to bridge to/from Polygon mainnet. Please double-check the addresses and make sure you are using the right smart contracts.
</details>

<details>
<summary>Is it possible to reverse engineer a dataset on Ocean by having access to both the algorithm and the output? </summary>

Not to our knowledge. But please, give it a shot and share the results with us 😄

PS: We offer good rewards 😇
</details>

<details>
<summary>If a dataset consists of 100 individuals' private data, does this solution allow each individual to maintain sovereign control over their data while still enabling algorithms to compute as if it were one dataset?</summary>

Yes. Each individual could publish their dataset themselves, to get a data NFT. From the data NFT, they can mint datatokens which are to access the data. They have sovereign control over this, as hold the keys to the data NFTs and datatokens, and have great flexibility in how to give others access. For example, they could send a datatoken to a DAO for the DAO can manage. Or they could grant datatoken-minting permissions to the DAO. The DAO could use this to assemble a dataset across 100 individuals. ⁣
⁣
Learn more about Data NFTs on the [Docs](../developers/contracts/data-nfts).
</details>
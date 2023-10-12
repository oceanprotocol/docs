---
title: Development FAQ
description: Commonly Asked Questions Regarding the Technical Aspects of the Ocean Stack
---
## Developement FAQ

Have some questions about the Ocean Protocol tech stack?

Hopefully, you'll find the answers here! If not then please don't hesitate to reach out to us on [discord](https://discord.gg/EdmenE7eTj) - there are no stupid questions!

<details>
<summary>The blockchain is public - does this mean that anyone can access my data?</summary>

Your data is protected as it is stored encrypted on the chain. So no one is able to access your data via the blockchain without purchasing access (with the datatoken) through the smart contract. Ocean smart contracts encrypt the URL to the dataset before it is published on the blockchain. This means that only the encrypted URL will be queryable in the public blockchain. Ocean technology facilitates data access to the consumer via a proxy (Ocean Provider) and the unencrypted URL is never exposed.

</details>

<details>
<summary>How are datatokens created, and how does the creator make money?</summary>

[Datatokens](../developers/contracts/datatokens) represent access rights to a specific dataset or data service on the Ocean Protocol. Creators of datasets tokenize their data, creating these datatokens. Each datatoken is unique to a dataset.
</details>

<details>
<summary>Where can I find information about the number of datatokens created and track their progress?</summary>

To access this data, some technical expertise is required. You can find this information at the subgraph level. In the documentation, we provide a few examples of how to retrieve this data using JavaScript. Feel free to give it a shot by visiting this [page](../developers/subgraph/list-datatokens). If it doesn't meet your requirements, don't hesitate to reach out to us on Discord.
</details>

<details>
<summary>How can collaborators and developers use Ocean technology to build their own data marketplaces?</summary>

Ocean technology is open-source, community-funded, and freely available for use by anyone. 
Anyone can fork various components from the Ocean [GitHub](https://github.com/oceanprotocol) repository and create their own. Additionally, Ocean empowers dApp owners with great flexibility and control over the fees they charge, allowing you to customize the fee structure to meet your specific needs and ensure your project's sustainability.
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
<summary>Can I use the off-the-shelf CSS available in the repo?</summary>

The marketplace name, logo, and typeface must be changed by the client. A slight modification would be enough for compliance. For more information consult the README file about [forking Ocean Market](https://github.com/oceanprotocol/market#-forking). 
</details>

<details>
<summary>How can I convert tokens from the BEP20 network to the ERC20 network?</summary>

Please follow this [tutorial](../discover/networks/bridges#binance-smart-chain-bsc-bridge) to bridge from/to binance smart chain. Please double-check the addresses and make sure you are using the right smart contracts.
</details>

<details>
<summary>How to bridge my mOcean back to Ocean?</summary>

Please follow this [tutorial](../discover/networks/bridges#polygon-ex-matic-bridge) to bridge to/from polygon. Please double-check the addresses and make sure you are using the right smart contracts.
</details>

<details>
<summary>Is it possible to reverse engineer a dataset on Ocean by having access to both the algorithm and the output? </summary>

Not to our knowledge. But please, give it a shot and share the results with us 😄

PS: We offer good rewards 😇
</details>

<details>
<summary>If a dataset consists of 100 individuals' private data, does this solution allow each individual to maintain sovereign control over their data while still enabling algorithms to compute as if it were one dataset?</summary>

Each individual could publish their dataset themselves, to get a data NFT. From the data NFT, they can mint datatokens which are to access the data. They have sovereign control over this, as hold the keys to the data NFTs and datatokens, and have great flexibility in how to give others access. For example, they could send a datatoken to a DAO for the DAO can manage. Or they could grant datatoken-minting permissions to the DAO. The DAO could use this to assemble a dataset across 100 individuals. ⁣
⁣
Learn more about Data NFTs on the [Docs](../developers/contracts/data-nfts).
</details>
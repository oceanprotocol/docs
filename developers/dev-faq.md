---
title: Development FAQ
description: Commonly Asked Questions Regarding the Technical Aspects of the Ocean Stack
---
## Developement FAQ

Have some questions about the Ocean Protocol tech-stack?

Hopefully, you'll find the answers here! If not then please don't hesitate to reach out to us on [discord](https://discord.gg/TnXjkR5) - there are no stupid questions!

<details>
<summary>The blockchain is public - does this mean that anyone can access my data?</summary>

No one is able to access data via the blockchain without purchasing access (with the datatoken) through the smart contract. Ocean smart contracts encrypt the URL to the dataset before it is published on the blockchain. This means that only the encrypted URL will be queryable in the public blockchain. Ocean technology facilitates data access to the consumer via a proxy (Ocean Provider) and the unencrypted URL is never exposed.

</details>

<details>
<summary>How are datatokens created, and how does the creator make money?</summary>

[Datatokens](https://docs.oceanprotocol.com/developers/contracts/datatokens) represent access rights to a specific dataset on the Ocean Protocol. Creators of datasets tokenize their data, creating these datatokens. Each datatoken is unique to a dataset.
</details>

<details>
<summary>Where can I find information about the number of datatokens created and track their progress?</summary>

To access this data, some technical expertise is required. You can find this information at the subgraph level. In our documentation, we provide a few examples of how to retrieve this data using JavaScript. Feel free to give it a shot by visiting this [page](https://docs.oceanprotocol.com/developers/subgraph/list-datatokens). If it doesn't meet your requirements, don't hesitate to reach out to us on Discord.
</details>

<details>
<summary>How can partners and developers use Ocean technology to build their own data marketplaces?</summary>

Ocean technology is open-source, community-funded, and freely available for use by anyone. Normally, when a developer wishes to use Ocean, they will let the core team know and we make a joint announcement if both parties agree.
A developer can fork various components from our GitHub repository and create their own. Within the default Ocean code, there is a 0.1% fee per transaction in the Ocean or H2O token or a 0.2% for transactions in other tokens, which is returned to the Ocean community for continued Ocean technology development.
</details>

<details>
<summary>Is there a trading platform or stock exchange that has successfully forked the Ocean marketplace codebase?</summary>
Ocean technology is actively in use with the following entities:

Proof of Concept:
1. Gaia-X
2. Catena-X
3. Move.id

Production:
1. Fetch.Ai
2. Acentrik (Daimler)
3. deltaDAO
4. DeSights
5. BDP
</details>

<details>
<summary>How privacy works in compute-to-data through the use of containers/kube?</summary>

Check out this [resource](https://docs.oceanprotocol.com/developers/compute-to-data/compute-to-data-architecture) 😎
</details>

<details>
<summary>What are the Ocean faucets and how can they be used?</summary>

Ocean offers faucets for every test network where the smart contracts are deployed. These faucets provide test Ocean tokens, allowing you to experiment with various functionalities of the platform. It's important to note that the tokens on these networks do not have any real-world value and are exclusively intended for testing purposes. Here are the faucets available:

1. [Goerli](https://faucet.goerli.oceanprotocol.com/) 
2. [Mumbai](https://faucet.mumbai.oceanprotocol.com/)
3. [Sepolia](https://faucet.sepolia.oceanprotocol.com/)
</details>

<details>
<summary>Can I use the off-the-shelf CSS available in the repo?</summary>

The marketplace name, logo, and typeface must be changed by the client. A slight modification would be enough for compliance. For more information consult the READ ME file on [GitHub](https://github.com/oceanprotocol/market#-forking). 
</details>

<details>
<summary>Where do the docker containers run?</summary>

Dockers containers can run anywhere. Ocean Market uses a docker run by the Ocean Protocol Foundation OPF); limit: 1 CPU limit / 60 seconds max. NOTE: This means OPF technically has access to data. In the case of a forked Ocean-powered marketplace, the owner of the marketplace must set up a computation environment. If individual users of the marketplace are concerned with security they should be prepared to host both the data and provide compute-to-data services on-premise.
</details>

<details>
<summary>How can I convert tokens from the BEP20 network to the ERC20 network?</summary>

We have a [tutorial](https://docs.oceanprotocol.com/discover/networks/bridges#binance-smart-chain-bsc-bridge) specific for this. Please double-check the addresses and make sure you are using the right smart contracts.
</details>

<details>
<summary>How to bridge my mOcean back to Ocean?</summary>

The OCEAN token address on the polygon network is [0x282d8efCe846A88B159800bd4130ad77443Fa1A1](https://polygonscan.com/address/0x282d8efCe846A88B159800bd4130ad77443Fa1A1). 
Please follow this [tutorial](https://docs.oceanprotocol.com/discover/networks/bridges#polygon-ex-matic-bridge) to bridge to/from polygon.
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
Learn more about Data NFTs on the [Docs](https://docs.oceanprotocol.com/developers/contracts/data-nfts).
</details>
---
description: Empowering the Decentralised Data Economy
---

# Contracts

The [V4 release](https://blog.oceanprotocol.com/ocean-v4-overview-1ccd4a7ce150) of Ocean Protocol introduces a comprehensive and enhanced suite of s[mart contracts](https://github.com/oceanprotocol/contracts/tree/main/contracts) that serve as the backbone of the decentralized data economy. These contracts facilitate secure, transparent, and efficient interactions among data providers, consumers, and ecosystem participants. With the introduction of V4 contracts, Ocean Protocol propels itself forward, delivering substantial functionality, scalability, and flexibility advancements.

The V4 smart contracts have been deployed across multiple [networks](../../discover/networks/) and are readily accessible through the GitHub [repository](https://github.com/oceanprotocol/contracts/tree/main/contracts). The V4 introduces significant enhancements that encompass the following key **features**:

### [**Data NFTs**](data-nfts.md) **for Enhanced Data IP Management**

In Ocean V3, the publication of a dataset involved deploying an ERC20 "datatoken" contract along with relevant [metadata](../metadata.md). This process allowed the dataset publisher to claim copyright or exclusive rights to the underlying Intellectual Property (IP). Upon obtaining 1.0 ERC20 datatokens for a particular dataset, users were granted a license to consume that dataset, utilizing the Ocean infrastructure by spending the obtained datatokens.

However, Ocean V3 faced limitations in terms of flexibility. It lacked support for different licenses associated with the same base IP, such as 1-day versus 1-month access, and the transferability of the base IP was not possible. Additionally, the ERC20 datatoken template was hardcoded, restricting customization options.

Ocean V4 effectively tackles these challenges by adopting **ERC721** **tokens** to explicitly represent the **base IP** as "data NFTs" (Non-Fungible Tokens). [**Data NFT**](data-nfts.md) owners can now deploy ERC20 "datatoken" contracts specific to their data NFTs, with each datatoken contract offering its own distinct licensing terms.

By utilizing ERC721 tokens, Ocean V4 **grants data creators greater flexibility and control over licensing arrangements**. The introduction of data NFTs allows for the representation of [base IP](../../discover/glossary.md#base-ip) and the creation of customized ERC20 datatoken contracts tailored to individual licensing requirements.&#x20;



<figure><img src="../../.gitbook/assets/v4-contracts.png" alt=""><figcaption><p>Ocean Protocol V4 Smart Contracts</p></figcaption></figure>

### [**Community monetization**](../community-monetization.md), to help the community create sustainable businesses.

Ocean V4 brings forth enhanced opportunities for marketplace operators, creating a conducive environment for the emergence of a thriving market of **third-party Providers**.

With Ocean V4, marketplace operators can unlock additional benefits. Firstly, the V4 smart contracts empower marketplace operators to collect [fees](fees.md) not only during **data consumption** but also through **fixed-rate exchanges**. This expanded revenue model allows operators to derive more value from the ecosystem. Moreover, in Ocean V4, the marketplace operator has the authority to determine the fee value, providing them with **increased control** over their pricing strategies.

In addition to empowering marketplace operators, Ocean V4 facilitates the participation of third-party [Providers](../provider/) who can offer compute services in exchange for a fee. This paves the way for the development of a diverse marketplace of Providers. This model supports both centralized trusted providers, where data publishers and consumers have established trust relationships, as well as trustless providers that leverage decentralization or other privacy-preserving mechanisms.

By enabling a marketplace of [Providers](../provider/), Ocean V4 fosters competition, innovation, and choice. It creates an ecosystem where various providers can offer their compute services, catering to the diverse needs of data publishers and consumers. Whether based on trust or privacy-preserving mechanisms, this expansion in provider options enhances the overall functionality and accessibility of the Ocean Protocol ecosystem.\


Key features of the V4 smart contracts:

* Base IP is now represented by a data [NFT](data-nfts.md), from which a data publisher can create multiple ERC20s [datatokens](datatokens.md) representing different types of access for the same dataset.
* Interoperability with the NFT ecosystem (and DeFi & DAO tools).
* Allows new data [NFT & datatoken templates](datatoken-templates.md), for flexibility and future-proofing.
* Besides base data IP, you can use data NFTs to **implement comments & ratings, verifiable claims, identity credentials, and social media posts**. They can point to parent data NFTs, enabling the nesting of comments on comments, or replies to tweets. All on-chain, GDPR-compliant, easily searched, with js & py drivers 🤯
* Introduce an advanced [Fee](fees.md) structure both for Marketplace and Provider runners 💰
* [Roles](roles.md) Administration: there are now multiple roles for a more flexible administration both at [NFT](data-nfts.md) and [ERC20](datatokens.md) levels 👥
* When the NFT is transferred, it auto-updates all permissions, e.g. who receives payment, or who can mint derivative ERC20 datatokens.
* Key-value store in the NFT contract: NFT contract can be used to store custom key-value pairs (ERC725Y standard) enabling applications like soulbound tokens and Sybil protection approaches 🗃️
* Multiple NFT template support: the Factory can deploy different types of NFT templates 🖼️
* Multiple datatoken template support: the Factory can deploy different types of [datatoken templates](datatoken-templates.md).

In the forthcoming pages, you will discover more information about the key features. If you have any inquiries or find anything missing, feel free to contact the core team on [Discord](https://discord.com/invite/TnXjkR5) 💬

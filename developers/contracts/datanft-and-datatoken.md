---
title: Data NFTs and Datatokens
description: >-
  In Ocean Protocol, ERC721 data NFTs represent holding the copyright/base IP of
  a data asset, and ERC20 datatokens represent licenses to access the assets.
---

# Data NFTs and Datatokens

In summary: A [**data NFT**](data-nfts.md) serves as a **representation of the copyright** or exclusive license for a data asset on the blockchain, known as the "[**base IP**](../../discover/glossary.md#base-ip)". **Datatokens**, on the other hand, function as a crucial mechanism for **decentralized access** to data assets.

For a specific data NFT, multiple ERC20 datatoken contracts can exist. Here's the main concept: Owning 1.0 datatokens grants you the ability to **consume** the corresponding dataset. Essentially, it acts as a **sub-license** from the [base IP](../../discover/glossary.md#base-ip), allowing you to utilize the dataset according to the specified license terms (when provided by the publisher). License terms can be established with a "good default" or by the Data NFT owner.

The choice to employ the ERC20 fungible token standard for datatokens is logical, as licenses themselves are fungible. This standard ensures compatibility and interoperability of datatokens with ERC20-based wallets, decentralized exchanges (DEXes), decentralized autonomous organizations (DAOs), and other relevant platforms. Datatokens can be transferred, acquired through marketplaces or exchanges, distributed via airdrops, and more.

Here is a visual representation:

<figure><img src="../../.gitbook/assets/DataNFT and Datatoken Flow.jpg" alt=""><figcaption><p>Data NFTs and Datatokens </p></figcaption></figure>

You can [publish](../../discover/glossary.md#to-publish) a data NFT initially with no ERC20 datatoken contracts. This means you simply aren’t ready to grant access to your data asset yet (sub-license it). Then, you can publish one or more ERC20 datatoken contracts against the data NFT. One datatoken contract might grant consume rights for **1 day**, another for **1 week**, etc. Each different datatoken contract is for **different** license terms.

For a more comprehensive exploration of intellectual property and its practical connections with ERC721 and ERC20,  you can read the blog post written by [Trent McConaghy](http://www.trent.st/), co-founder of Ocean Protocol. It delves into the subject matter in detail and provides valuable insights.

{% embed url="https://blog.oceanprotocol.com/nfts-ip-1-practical-connections-of-erc721-with-intellectual-property-dc216aaf005d" %}

**DataNFTs and Datatokens example:**

* In step 1, Alice **publishes** her dataset with Ocean: this means deploying an ERC721 data NFT contract (claiming copyright/base IP), then an ERC20 datatoken contract (license against base IP). Then Alice mints an ERC20 datatokens
* In step 2, Alice **transfers** 1.0 of them to Bob's wallet; now he has a license to be able to download that dataset.

<figure><img src="../../.gitbook/assets/DataNFT and Datatoken Flow.jpg" alt=""><figcaption><p>Data NFT &#x26; Datatokens flow</p></figcaption></figure>

We have some awesome hands-on experience when it comes to publishing a data NFT and minting datatokens.&#x20;

* Publish using [ocean.py ](../ocean.py/publish-flow.md)
* Publish using [ocean.js](../ocean.js/publish.md)

### Other References

* [Data & NFTs 1: Practical Connections of ERC721 with Intellectual Property](https://blog.oceanprotocol.com/nfts-ip-1-practical-connections-of-erc721-with-intellectual-property-dc216aaf005d)
* [Data & NFTs 2: Leveraging ERC20 Fungibility](https://blog.oceanprotocol.com/nfts-ip-2-leveraging-erc20-fungibility-bcee162290e3)
* [Data & NFTs 3: Combining ERC721 & ERC20](https://blog.oceanprotocol.com/nfts-ip-3-combining-erc721-erc20-b69ea659115e)
* [Fungibility sightings in NFTs](https://blog.oceanprotocol.com/on-difficult-to-explain-fungibility-sightings-in-nfts-26bc18620f70)


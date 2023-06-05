---
description: ERC20 datatokens represent licenses to access the assets.
---

# Datatokens

Fungible tokens are a type of digital asset that are identical and interchangeable with each other. Each unit of a fungible token holds the same value and can be exchanged on a one-to-one basis. This means that one unit of a fungible token is indistinguishable from another unit of the same token. Examples of fungible tokens include cryptocurrencies like Bitcoin (BTC) and Ethereum (ETH), where each unit of the token is equivalent to any other unit of the same token. Fungible tokens are widely used for transactions, trading, and as a means of representing value within blockchain-based ecosystems.

## What is a Datatoken?&#x20;

Datatokens are fundamental within Ocean Protocol, representing a key mechanism to **access** data assets in a decentralized manner. In simple terms, a datatoken is an **ERC20-compliant token** that serves as access control for a data/service represented by a [data NFT](data-nfts.md).

Datatokens enable data assets to be tokenized, allowing them to be easily traded, shared, and accessed within the Ocean Protocol ecosystem. Each datatoken is associated with a particular data asset, and its value is derived from the underlying dataset's availability, scarcity, and demand.

By using datatokens, data owners can retain ownership and control over their data while still enabling others to access and utilize it based on predefined license terms. These license terms define the conditions under which the data can be accessed, used, and potentially shared by data consumers.

### Understanding Datatokens and Licenses

Each datatoken represents a **sub-license** from the base intellectual property (IP) owner, enabling users to access and consume the associated dataset. The license terms can be set by the data NFT owner or default to a predefined "good default" license. The fungible nature of ERC20 tokens aligns perfectly with the fungibility of licenses, facilitating seamless exchangeability and interoperability between different datatokens.

By adopting the ERC20 standard for datatokens, Ocean Protocol ensures compatibility and interoperability with a wide array of ERC20-based wallets, [decentralized exchanges (DEXes)](https://blog.oceanprotocol.com/ocean-datatokens-will-be-tradeable-on-decentrs-dex-41715a166a1f), decentralized autonomous organizations (DAOs), and other blockchain-based platforms. This standardized approach enables users to effortlessly transfer, purchase, exchange, or receive datatokens through various means such as marketplaces, exchanges, or airdrops.

### Utilizing Datatokens

Data owners and consumers can engage with datatokens in numerous ways. Datatokens can be acquired through transfers or obtained by purchasing them on dedicated marketplaces or exchanges. Once in possession of the datatokens, users gain access to the corresponding dataset, enabling them to utilize the data within the boundaries set by the associated license terms.

Once someone has generated datatokens, they can be used in any ERC20 exchange, centralized or decentralized. In addition, Ocean provides a convenient default marketplace that is tuned for data: **Ocean Market**. It’s a vendor-neutral reference data marketplace for use by the Ocean community.

You can publish a [data NFT](data-nfts.md) initially with no ERC20 datatoken contracts. This means you simply aren’t ready to grant access to your data asset yet (sub-license it). Then, you can publish one or more ERC20 datatoken contracts against the data NFT. One datatoken contract might grant consume rights for 1 day, another for 1 week, etc. Each different datatoken contract is for different license terms.

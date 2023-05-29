---
description: ERC20 datatokens represent licenses to access the assets.
---

# Datatokens

Fungible tokens represent fungible assets. If you have 5 ETH and Alice has 5 ETH, you and Alice could swap your ETH and your final holdings remain the same. They're apples-to-apples. Licenses (contracts) to access a copyrighted asset are naturally fungible - they can be swapped with each other.



## What is a Datatoken?&#x20;

\
Datatokens are a fundamental concept within Ocean Protocol, representing a key mechanism to access data assets in a decentralized manner. In simple terms, a datatoken is an ERC20-compliant token that serves as a digital representation of a specific dataset.

Datatokens enable data assets to be tokenized, allowing them to be easily traded, shared, and accessed within the Ocean Protocol ecosystem. Each datatoken is associated with a particular data asset, and its value is derived from the underlying dataset's availability, scarcity, and demand.

By using datatokens, data owners can retain ownership and control over their data while still enabling others to access and utilize it based on predefined license terms. These license terms define the conditions under which the data can be accessed, used, and potentially shared by data consumers.

### Understanding Datatokens and Licenses

Each datatoken represents a sub-license from the base intellectual property (IP) owner, enabling users to access and consume the associated dataset. The license terms can be set by the data NFT owner or default to a predefined "good default" license. The fungible nature of ERC20 tokens aligns perfectly with the fungibility of licenses, facilitating seamless exchangeability and interoperability between different datatokens.

By adopting the ERC20 standard for datatokens, Ocean Protocol ensures compatibility and interoperability with a wide array of ERC20-based wallets, decentralized exchanges (DEXes), decentralized autonomous organizations (DAOs), and other blockchain-based platforms. This standardized approach enables users to effortlessly transfer, purchase, exchange, or receive datatokens through various means such as marketplaces, exchanges, or airdrops.

### Utilizing Datatokens

Data owners and consumers can engage with datatokens in numerous ways. Datatokens can be acquired through transfers or obtained by purchasing them on dedicated marketplaces or exchanges. Once in possession of the datatokens, users gain access to the corresponding dataset, enabling them to utilize the data within the boundaries set by the associated license terms.



Once someone has generated datatokens, they can be used in any ERC20 exchange, centralized or decentralized. In addition, Ocean provides a convenient default marketplace that is tuned for data: **Ocean Market**. It’s a vendor-neutral reference data marketplace for use by the Ocean community.

The marketplaces are decentralized (no single owner or controller), and non-custodial (only the data owner holds the keys for the datatokens).

Ocean Market supports fixed pricing or free pricing. For more detials on pricing schema refer [this guide](../contracts/asset-pricing.md).

Complementary to Ocean Market, Ocean has reference code to ease building **third-party data marketplaces**, such as for logistics ([dexFreight data marketplace](https://blog.oceanprotocol.com/dexfreight-ocean-protocol-partner-to-enable-transportation-logistics-companies-to-monetize-data-7aa839195ac)) or mobility ([Daimler](https://blog.oceanprotocol.com/ocean-protocol-delivers-proof-of-concept-for-daimler-ag-in-collaboration-with-daimler-south-east-564aa7d959ca)).

[This post](https://blog.oceanprotocol.com/ocean-market-an-open-source-community-marketplace-for-data-4b99bedacdc3) elaborates on Ocean marketplace tools.

---
title: Architecture Overview
description: Ocean Protocol Architecture Adventure!
---

# Architecture Overview

Embark on a journey through the innovative world of Ocean Protocol, where data flows like waves and AI takes flight! Explore the intricate layers of our architecture, where data and services converge in a symphony of collaboration. So, let's dive in and uncover the depths of Ocean Protocol's design!🐬

<figure><img src="../.gitbook/assets/OP High Level Architecture.jpg" alt=""><figcaption><p>Overview of the Ocean Protocol Architecture</p></figcaption></figure>

### Layer 1: The Foundational Blockchain Layer

At the core of Ocean Protocol lies the robust Blockchain Layer. Powered by blockchain technology, this layer ensures secure and transparent transactions. It forms the bedrock of decentralized trust, where data providers and consumers come together to trade valuable assets.&#x20;

The [smart contracts](contracts/) are deployed on the Ethereum mainnet and other compatible [networks](../discover/networks/). The libraries encapsulate the calls to these smart contracts and provide features like publishing new assets, facilitating consumption, managing pricing, and much more. To explore the contracts in more depth, go ahead to the [contracts](contracts/) section.



### Layer 2: The Empowering Middle Layer

Above the smart contracts, you'll find essential libraries employed by applications within the Ocean Protocol ecosystem. These libraries include: [Ocean.js](ocean-libraries/), a JavaScript library, and [Ocean.py](ocean.py/), a Python library. They serve as powerful tools for developers, enabling seamless integration and interaction with the protocol.

1. [Ocean.js](ocean-libraries/): Ocean.js is a robust JavaScript library that serves as a powerful tool for developers looking to integrate their applications with the Ocean Protocol ecosystem. Designed to facilitate interaction with the protocol, Ocean.js provides a comprehensive set of functionalities, including data tokenization, asset management, and smart contract interaction. Ocean.js simplifies the process of implementing data access controls, building data marketplaces, and exploring data sets within a decentralized environment.&#x20;
2. [Ocean.py](ocean.py/): Ocean.py is a Python library that empowers developers to integrate their applications with the Ocean Protocol ecosystem. With its rich set of functionalities, Ocean.py provides a comprehensive toolkit for interacting with the protocol. Developers can leverage Ocean.py to perform a wide range of tasks, including data tokenization, asset management, and smart contract interactions. This library serves as a bridge between Python and the decentralized world of Ocean Protocol, enabling developers to harness the power of decentralized data in their applications.&#x20;

Additionally, supporting the discovery process, middleware components come into play:

1. [Aquarius](aquarius/): Aquarius acts as a metadata cache, enhancing search efficiency by caching on-chain data into Elasticsearch. By accelerating metadata retrieval, Aquarius enables faster and more efficient data discovery.
2. [Provider](provider/): The Provider component plays a crucial role in facilitating various operations within the ecosystem. It assists in asset downloading, handles [DDO](ddo-specification.md) (Decentralized Data Object) encryption, and establishes communication with the operator-service for Compute-to-Data jobs. This ensures secure and streamlined interactions between different participants.
3. [Subgraph](subgraph/): The Subgraph is an off-chain service that utilizes GraphQL to offer efficient access to information related to datatokens, users, and balances. By leveraging the subgraph, data retrieval becomes faster compared to an on-chain query. This enhances the overall performance and responsiveness of applications that rely on accessing this information.

### Layer 3: The Accessible Application Layer

Here, the ocean comes alive with a vibrant ecosystem of apps, marketplaces, and more. This layer hosts a variety of user-friendly interfaces, applications, and tools, inviting data scientists and curious explorers alike to access, explore, and contribute to the ocean's treasures.&#x20;

Prominently featured within this layer is [Ocean Market](../user-guides/using-ocean-market.md), a hub where data enthusiasts and industry stakeholders converge to discover, trade, and unlock the inherent value of data assets. Beyond Ocean Market, the Application Layer hosts a diverse ecosystem of specialized applications and marketplaces, each catering to unique use cases and industries. Empowered by the capabilities of Ocean Protocol, these applications facilitate advanced data exploration, analytics, and collaborative ventures, revolutionizing the way data is accessed, shared, and monetized.&#x20;



### Layer 4: The Friendly Wallets

At the top of the Ocean Protocol ecosystem, we find the esteemed [Web 3 Wallets](../discover/wallets.md), the gateway for users to immerse themselves in the world of decentralized data transactions. These wallets serve as the trusted companions, enabling users to seamlessly transact within the ecosystem, purchase and sell data NFTs, and acquire valuable datatokens. For a more detailed exploration of Web 3 Wallets and their capabilities, you can refer to the [wallet intro page](../discover/wallets.md).



### Data NFTs, Datatokens and Access Control Tools

Data NFTs are based on [ERC721](https://eips.ethereum.org/EIPS/eip-721) standard. The publisher can use Marketplace or client libraries to deploy a new data NFT contract. To save gas fees, it uses [ERC1167](https://eips.ethereum.org/EIPS/eip-1167) proxy approach on the **ERC721 template**. Publisher can then assign manager role to other Ethereum addresses who can deploy new datatoken contracts and even mint them. Each datatoken contract is associated with one data NFT contract. Click [here](datanft-and-datatoken.md) to further read about data NFTs and datatokens.

ERC721 data NFTs represent holding copyright/base IP of a data asset, and ERC20 datatokens represent licenses to access the asset by downloading the content or running Compute-to-Data jobs.

Datatoken represents the asset that the publisher wants to monetize. The asset can be a dataset or an algorithm. The publisher actor holds the asset in Google Drive, Dropbox, AWS S3, on their phone, on their home server, etc. The publisher can optionally use IPFS for a content-addressable URL. Or instead of a file, the publisher may run a compute-to-data service.

In the **publish** step, the publisher invokes **Ocean Datatoken Factory** to deploy a new datatoken to the chain. To save gas fees, it uses [ERC1167](https://eips.ethereum.org/EIPS/eip-1167) proxy approach on the **ERC20 datatoken template**. The publisher then mints datatokens.

The publisher runs their own **Ocean Provider** or can use one deployed by Ocean Protocol. In the **download** step or while running C2D job, Provider software needs to retrieve the data service URL given a datatoken address. One approach would be for the publisher to run a database. However, this adds another dependency. To avoid this, the Provider encrypts the URL, which then gets published on-chain.

To initiate the **download** step, the data buyer sends 1.0 datatokens to the Provider wallet. Then they make a service request to the Provider. The Provider loads the encrypted URL, decrypts it, and provisions the requested service (send static data, or enable a compute-to-data job).

Instead of running a Provider themselves, the publisher can have a 3rd party like Ocean Market to run it. While more convenient, it means that the 3rd party has custody of the private encryption/decryption key (more centralized). Ocean will support more service types and URL custody options in the future.

**Ocean JavaScript and Python libraries** act as drivers for the lower-level contracts. Each library integrates with Ocean Provider to provision & access data services, and Ocean Aquarius for metadata.

### Market Tools

Once someone has generated datatokens, they can be used in any ERC20 exchange, centralized or decentralized. In addition, Ocean provides a convenient default marketplace that is tuned for data: **Ocean Market**. It’s a vendor-neutral reference data marketplace for use by the Ocean community.

The marketplaces are decentralized (no single owner or controller), and non-custodial (only the data owner holds the keys for the datatokens).

Ocean Market supports fixed pricing or free pricing. For more detials on pricing schema refer [this guide](asset-pricing.md).

Complementary to Ocean Market, Ocean has reference code to ease building **third-party data marketplaces**, such as for logistics ([dexFreight data marketplace](https://blog.oceanprotocol.com/dexfreight-ocean-protocol-partner-to-enable-transportation-logistics-companies-to-monetize-data-7aa839195ac)) or mobility ([Daimler](https://blog.oceanprotocol.com/ocean-protocol-delivers-proof-of-concept-for-daimler-ag-in-collaboration-with-daimler-south-east-564aa7d959ca)).

[This post](https://blog.oceanprotocol.com/ocean-market-an-open-source-community-marketplace-for-data-4b99bedacdc3) elaborates on Ocean marketplace tools.

### Metadata Tools

Marketplaces use the Metadata of the asset for discovery. Metadata consists of information like the type of asset, name of the asset, creation date, license, etc. Each data asset can have a [decentralized identifier](https://w3c-ccg.github.io/did-spec/) (DID) that resolves to a DID document (DDO) for associated metadata. The DDO is essentially [JSON](https://www.json.org/) filling in metadata fields. For more details on working with OCEAN DIDs check out the [DID concept documentation](Identifiers-Metadata.md). The [DDO Metadata documentation](Identifiers-Metadata.md) goes into more depth regarding metadata structure.

[OEP8](broken-reference/) specifies Ocean metadata schema, including fields that must be filled. It’s based on the public [DataSet schema from schema.org](https://schema.org/Dataset).

Ocean uses the Ethereum mainnet and other compatible networks as an **on-chain metadata store**, i.e. to store both DID and DDO. This means that once the transaction fee is paid, there are no further expenses or devops work needed to ensure metadata availability into the future, aiding in the discoverability of data assets. It also simplifies integration with the rest of the Ocean system, which is Ethereum-based. Storage cost on Ethereum mainnet is not negligible, but not prohibitive and the other benefits are currently worth the trade-off compared to alternatives.

Due to the permissionless, decentralized nature of data on the Ethereum mainnet, any last mile tool can access metadata. **Ocean Aquarius** supports different metadata fields for each different Ocean-based marketplace. Developers could also use [The Graph](https://www.thegraph.com) to see metadata fields that are common across all marketplaces.

### Third-Party ERC20 Apps & Tools

The ERC20 nature of datatokens eases composability with other Ethereum tools and apps, including **MetaMask** and **Trezor** as data wallets, DEXes as data exchanges, and more. [This post](https://blog.oceanprotocol.com/ocean-datatokens-from-money-legos-to-data-legos-4f867cec1837) has details.

### Actor Identities

Actors like data providers and buyers have Ethereum addresses, aka web3 accounts. These are managed by crypto wallets, as one would expect. For most use cases, this is all that’s needed. There are cases where the Ocean community could layer on protocols like [Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) or tools like [3Box](https://3box.io/).

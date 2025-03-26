---
description: Ocean Protocol Architecture Adventure!
---

# Architecture Overview

Embark on an exploration of the innovative realm of Ocean Protocol, where data flows seamlessly and AI achieves new heights. Dive into the intricately layered architecture that converges data and services, fostering a harmonious collaboration. Let us delve deep and uncover the profound design of Ocean Protocol.🐬

<figure><img src="../.gitbook/assets/image.webp" alt=""><figcaption><p>Overview of the Ocean Protocol Architecture</p></figcaption></figure>

### Layer 1: The Foundational Blockchain Layer

At the core of Ocean Protocol lies the robust [Blockchain Layer](contracts/). Powered by blockchain technology, this layer ensures secure and transparent transactions. It forms the bedrock of decentralized trust, where data providers and consumers come together to trade valuable assets.

The [smart contracts](contracts/) are deployed on the Ethereum mainnet and other compatible [networks](../discover/networks/). The libraries encapsulate the calls to these smart contracts and provide features like publishing new assets, facilitating consumption, managing pricing, and much more. To explore the contracts in more depth, go ahead to the [contracts](contracts/) section.

### Layer 2: The Empowering Middle Layer

Above the smart contracts, you'll find essential [libraries](architecture.md#libraries) employed by applications within the Ocean Protocol ecosystem, the [middleware components](architecture.md#middleware-components), and [Compute-to-Data](architecture.md#compute-to-data).

#### Libraries

These libraries include [Ocean.js](ocean.js), a JavaScript library, and [Ocean.py](../data-scientists/ocean.py), a Python library. They serve as powerful tools for developers, enabling integration and interaction with the protocol.

1. [Ocean.js](ocean.js): Ocean.js is a JavaScript library that serves as a powerful tool for developers looking to integrate their applications with the Ocean Protocol ecosystem. Designed to facilitate interaction with the protocol, Ocean.js provides a comprehensive set of functionalities, including data tokenization, asset management, and smart contract interaction. Ocean.js simplifies the process of implementing data access controls, building dApps, and exploring data sets within a decentralized environment.
2. [Ocean.py](../data-scientists/ocean.py): Ocean.py is a Python library that empowers developers to integrate their applications with the Ocean Protocol ecosystem. With its rich set of functionalities, Ocean.py provides a comprehensive toolkit for interacting with the protocol. Developers and [data scientists](../data-scientists/) can leverage Ocean.py to perform a wide range of tasks, including data tokenization, asset management, and smart contract interactions. This library serves as a bridge between Python and the decentralized world of Ocean Protocol, enabling you to harness the power of decentralized data.

#### Ocean Nodes

Ocean Node is a single component which runs all core middleware services within the Ocean stack. It replaces the roles of Aquarius, Provider and the Subgraph. It integrates the Indexer for metadata management and the Provider for secure data access. It ensures efficient and reliable interactions within the Ocean Protocol network.

Ocean Nodes handles network communication through libp2p, supports secure data handling, and enables flexible compute-to-data operations.&#x20;

The functions of Ocean nodes include:

* It is crucial in handling the asset downloads, it streams the purchased data directly to the buyer.
* It conducts the permission an access checks during the consume flow.&#x20;
* The Node handles [new DDO structure](https://docs.oceanprotocol.com/developers/new-ddo-specification) (Decentralized Data Object) encryption, but it offers support for [existing DDO format](https://docs.oceanprotocol.com/developers/ddo-specification).
* It establishes communication with the operator-service for initiating Compute-to-Data jobs.
* It provides a metadata cache, enhancing search efficiency by caching on-chain data into a Typesense database. This enables faster and more efficient data discovery.
* It supports multiple chains.

#### Old components

Previously Ocean used the following middleware components:

1. [Aquarius](old-infrastructure/aquarius/)
2. [Provider](old-infrastructure/provider/)
3. [Subgraph](old-infrastructure/subgraph/)

#### Compute-to-Data

[Compute-to-Data](compute-to-data/) (C2D) represents a groundbreaking paradigm within the Ocean Protocol ecosystem, revolutionizing the way data is processed and analyzed. With C2D, the traditional approach of moving data to the computation is inverted, ensuring privacy and security. Instead, algorithms are securely transported to the data sources, enabling computation to be performed locally, without the need to expose sensitive data. This innovative framework facilitates collaborative data analysis while preserving data privacy, making it ideal for scenarios where data owners want to retain control over their valuable assets. C2D provides a powerful tool for enabling secure and privacy-preserving data analysis and encourages collaboration among data providers, ensuring the utilization of valuable data resources while maintaining strict privacy protocols.

### Layer 3: The Accessible Application Layer

Here, the ocean comes alive with a vibrant ecosystem of dApps, marketplaces, and more. This layer hosts a variety of user-friendly interfaces, applications, and tools, inviting data scientists and curious explorers alike to access, explore, and contribute to the ocean's treasures.

Prominently featured within this layer is [Ocean Market](https://market.oceanprotocol.com), a hub where data enthusiasts and industry stakeholders converge to discover, trade, and unlock the inherent value of data assets. Beyond Ocean Market, the Application Layer hosts a diverse ecosystem of specialized applications and marketplaces, each catering to unique use cases and industries. Empowered by the capabilities of Ocean Protocol, these applications facilitate advanced data exploration, analytics, and collaborative ventures, revolutionizing the way data is accessed, shared, and monetized.

### Layer 4: The Friendly Wallets

At the top of the Ocean Protocol ecosystem, we find the esteemed [Web 3 Wallets](../user-guides/wallets/), the gateway for users to immerse themselves in the world of decentralized data transactions. These wallets serve as trusted companions, enabling users to seamlessly transact within the ecosystem, purchase and sell data NFTs, and acquire valuable datatokens. For a more detailed exploration of Web 3 Wallets and their capabilities, you can refer to the [wallet intro page](../user-guides/wallets/).

With the layers of the architecture clearly delineated, the stage is set for a comprehensive exploration of their underlying logic and intricate design. By examining each individually, we can gain a deeper understanding of their unique characteristics and functionalities.

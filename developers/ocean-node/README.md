---
description: The new Ocean stack
---

# Ocean Nodes

Ocean Nodes are a vital part of the Ocean Protocol core technology stack. The Ocean Nodes monorepo that replaces the three previous components: [Provider](../old-infrastructure/provider/), [Aquarius](../old-infrastructure/aquarius/) and [subgraph](../old-infrastructure/subgraph/). It has been designed to significantly simplify the process of starting the Ocean stack - it runs everything you need with one simple command.

It integrates multiple services for secure and efficient data operations, utilizing technologies like libp2p for peer-to-peer communication. Its modular and scalable architecture supports various use cases, from simple data retrieval to complex compute-to-data (C2D) tasks.

The node is structured into separate layers, including the network layer for communication, and the components layer for core services like the Indexer and Provider. This layered architecture ensures efficient data management and high security.

Flexibility and extensibility are key features of Ocean Node, allowing multiple compute engines, such as Docker and Kubernetes, to be managed within the same framework. The orchestration layer coordinates interactions between the core node and execution environments, ensuring the smooth operation of compute tasks.

For details on how to run a node see the [readme](https://github.com/oceanprotocol/ocean-node/) in the GitHub repository.

#### Ocean Nodes replace the Provider: <a href="#what-does-the-provider-do" id="what-does-the-provider-do"></a>

* The Node is the only component that can access your data
* It performs checks on-chain for buyer permissions and payments
* Encrypts the URL and metadata during publish
* Decrypts the URL when the dataset is downloaded or a compute job is started
* Provides access to data assets by streaming data (and never the URL)
* Provides compute services (connects to C2D environment)
* Typically run by the Data owner

#### Ocean Nodes replace Aquarius: <a href="#what-does-aquarius-do" id="what-does-aquarius-do"></a>

* A new component called Indexer replaces the functionality of Aquarius.
* The indexer acts as a cache for on-chain data. It stores the metadata from the smart contract events off-chain in a Typesense database.
* It monitors events: It continually checks for MetadataCreated and MetadataUpdated events, processing these events and updating them in the database.
* Serves as an API: It provides a REST API that fetches data from the off-chain datastore.
* Offers easy query access: The API provides a convenient method to access metadata without scanning the blockchain.

**Ocean Nodes replace the Subgraph:**

* Indexing the data from the smart contact events.
* The data is indexed and updated in real-time.
* Providing an API which receives and responds to queries.
* Simplifying the development experience for anyone building on Ocean.

### API

For details on all of the HTTP endpoints exposed by the Ocean Nodes API, refer to the API.md file in the github repository.

{% embed url="https://github.com/oceanprotocol/ocean-node/blob/develop/API.md" %}

### Compute to Data (C2D)

The Ocean nodes provide a convenient and easy way to run a compute-to-data environment. This gives you the opportunity to monetize your node as you can charge fees for using the C2D environment and there are also additional incentives provided Ocean Protocol Foundation (OPF). Soon we will also be releasing C2D V2 which will provide different environments and new ways to pay for computation.

For more details on the C2D V2 architecture, refer to the documentation in the repository:\


{% embed url="https://github.com/oceanprotocol/ocean-node/blob/develop/docs/C2DV2.md" %}
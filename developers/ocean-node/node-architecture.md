# Node Architecture

Ocean Node is the core infrastructure component within the Ocean Protocol ecosystem, designed to facilitate decentralized data exchange and management. It operates by leveraging a multi-layered architecture that includes network, components, and module layers.&#x20;

Key features include secure peer-to-peer communication via libp2p, flexible and secure encryption solutions, and support for various Compute-to-Data (C2D) operations.&#x20;

Ocean Node's modular design allows for customization and scalability, enabling seamless integration of its core services—such as the Indexer for metadata management and the Provider for secure data transactions—ensuring robust and efficient decentralized data operations.

### Architecture Overview

The Node stack is divided into the following layers:

* Network layer (libp2p & HTTP API)
* Components layer (Indexer, Provider)
* Modules layer

<figure><img src="../../.gitbook/assets/image (1).png" alt=""><figcaption><p>Ocean Node Infrastructure diagram</p></figcaption></figure>

### Features

* libp2p supports ECDSA key pairs, and node identity should be defined as a public key.
* Multiple ways of storing URLs:
  * Choose one node and use that private key to encrypt URLs (enterprise approach).
  * Choose several nodes, so your files can be accessed even if one node goes down (given at least one node is still alive).
  * Use MPC to divide the key among multiple nodes (so no one node has the entire key).
* Protecting URLs during download: use a TEE enclave to decrypt the key (makes sense only for the MPC approach) and read content in the enclave.
* Supports multiple C2D types:
  * Light Docker only (for edge nodes).
  * Ocean C2D (Kubernetes).
* Each component can be enabled/disabled on startup (e.g., start node without Indexer).

### Nodes and Network Model

Nodes can receive user requests in two ways:

* HTTP API
* libp2p from another node

They are merged into a common object and passed to the appropriate component.

Nodes should be able to forward requests between them if the local database is missing objects. (Example: Alice wants to get DDO id #123 from Node A. Node A checks its local database. If the DDO is found, it is sent back to Alice. If not, Node A can query the network and retrieve the DDO from another node that has it.)

Nodes' libp2p implementation:

* Should support core protocols (ping, identify, kad-dht for peering, circuit relay for connections).
* For peer discovery, we should support both mDNS & Kademlia DHT.
* All Ocean Nodes should subscribe to the topic: OceanProtocol. If any interesting messages are received, each node is going to reply.

### Components & Modules

#### Indexer

An off-chain, multi-chain metadata & chain events cache. It continually monitors the chains for well-known events and caches them (V4 equivalence: Aquarius).

Features:

* Monitors MetadataCreated, MetadataUpdated, MetadataState and stores DDOs in the database.
* Validates DDOs according to multiple SHACL schemas. When hosting a node, you can provide your own SHACL schema or use the ones provided.
* Provides proof for valid DDOs.
* Monitors all transactions and events from the data token contracts. This includes minting tokens,  creating pricing schema (fixed & free pricing), and orders.
* Allows queries for all the above.

#### Provider

* Performs checks on-chain for buyer permissions and payments.
* The provider is crucial in checking that all the relevant fees have been paid before the consumer is able to download the asset. See the [Fees page](../contracts/fees.md) for details on all of the different types of fees.
* Encrypts the URL and metadata during publishing.
* Decrypts the URL when the dataset is downloaded or a compute job is started.
* Encrypts/decrypts files before storage/while accessing.
* Provides access to data assets by streaming data (and never the URL).
* Provides compute services.&#x20;
* The node operator can charge provider fees, compensating the individuals or organizations operating their own node when users request assets.
* Currently, we are providing the legacy Ocean C2D compute services (which run in Kubernetes) via the node. In the future, we will also allow connections to multiple C2D engines: light, Ocean C2D, and third parties.

###

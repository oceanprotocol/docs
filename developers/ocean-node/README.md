# Ocean Node

Ocean Node is a vital part of the Ocean Protocol core technology stack. Ocean Node replaces the three previous components: [Provider](../old-infrastructure/provider/), [Aquarius](../old-infrastructure/aquarius/) and [subgraph](../old-infrastructure/subgraph/). It has been designed to be use to use - instead of running three separate services Ocean node runs everything you need with one simple command.

It integrates multiple services for secure and efficient data operations, utilizing technologies like libp2p for peer-to-peer communication and multi-party computation (MPC) for secure data handling. Its modular and scalable architecture supports various use cases, from simple data retrieval to complex compute-to-data (C2D) tasks.

The node is structured into three layers: the network layer for communication, the components layer for core services like the Indexer and Provider, and the modules layer for additional functionalities like Trusted Execution Environments (TEE) and MPC. This layered architecture ensures efficient data management and high security.

Flexibility and extensibility are key features of Ocean Node, allowing multiple compute engines, such as Docker and Kubernetes, to be managed within the same framework. The orchestration layer coordinates interactions between the core node and execution environments, ensuring the smooth operation of compute tasks. Ocean Node's advanced architecture and comprehensive features are essential for enabling the decentralized data economy envisioned by Ocean Protocol.

For details on how to run a node see the [readme](https://github.com/oceanprotocol/ocean-node/) in the GitHub repository.

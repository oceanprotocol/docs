# Old Infrastructure

Ocean Protocol is now using Ocean Nodes for all backend infrastructure. Previously we used these three components:&#x20;

1. [Aquarius](aquarius/): Aquarius is a metadata cache used to enhance search efficiency by caching on-chain data into Elasticsearch. By accelerating metadata retrieval, Aquarius enables faster and more efficient data discovery.
2. [Provider](provider/): The Provider component was used to facilitate various operations within the ecosystem. It assists in asset downloading, handles [DDO](../ddo-specification.md) (Decentralized Data Object) encryption, and establishes communication with the operator-service for Compute-to-Data jobs. This ensures secure and streamlined interactions between different participants.
3. [Subgraph](subgraph/): The Subgraph is an off-chain service that utilizes GraphQL to offer efficient access to information related to datatokens, users, and balances. By leveraging the subgraph, data retrieval becomes faster compared to an on-chain query. This enhances the overall performance and responsiveness of applications that rely on accessing this information.

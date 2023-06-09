---
description: 🧑🏽‍💻 Local Development Environment for Ocean Protocol
---

# Barge

The Barge component of Ocean Protocol is a powerful tool designed to simplify the development process by providing Docker Compose files for running the full Ocean Protocol stack locally. It allows developers to easily set up and configure the various services required by Ocean Protocol for local testing and development purposes.

By using the Barge component, developers can quickly spin up an environment that includes default versions of Aquarius, Provider, Subgraph, and Compute-to-Data. Additionally, it deploys all the smart contracts from the ocean-contracts repository, ensuring a complete and functional local setup. Barge component also starts additional services like Ganache, which is a local blockchain simulator used for smart contract development, and Elasticsearch, a powerful search and analytics engine required by Aquarius for efficient indexing and querying of data sets. Full list of components and exposed ports can be found here: [https://github.com/oceanprotocol/barge#component-versions-and-exposed-ports](https://github.com/oceanprotocol/barge#component-versions-and-exposed-ports)

To explore all the available options and gain a deeper understanding of how to utilize the Barge component, you can visit the official GitHub repository of Ocean Protocol at the following link: [https://github.com/oceanprotocol/barge#all-options](https://github.com/oceanprotocol/barge#all-options).

By utilizing the Barge component, developers gain the freedom to conduct experiments, customize, and fine-tune their local development environment, and offers the flexibility to override the Docker image tag associated with specific components. By simply setting the appropriate environment variable before executing the start\_ocean.sh command, developers can customize the versions of various components according to their requirements. For instance, developers can modify the: AQUARIUS\_VERSION, PROVIDER\_VERSION, CONTRACTS\_VERSION, RBAC\_VERSION, and ELASTICSEARCH\_VERSION environment variables to specify the desired Docker image tags for each respective component.&#x20;

By leveraging the power of the Barge component, developers can accelerate their development workflows.\

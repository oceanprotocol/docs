---
description: 🧑🏽‍💻 Local Development Environment for Ocean Protocol
---

# Barge

The Barge component of Ocean Protocol is a powerful tool designed to simplify the development process by providing Docker Compose files for running the full Ocean Protocol stack locally. It allows developers to set up and configure the various services required by Ocean Protocol for local testing and development purposes.

By using the Barge component, developers can spin up an environment that includes default versions of [Aquarius](../old-infrastructure/aquarius/), [Provider](../old-infrastructure/provider/), [Subgraph](../old-infrastructure/subgraph/), and [Compute-to-Data](../compute-to-data/). Additionally, it deploys all the [smart contracts](../contracts/) from the ocean-contracts repository, ensuring a complete and functional local setup. Barge component also starts additional services like [Ganache](https://trufflesuite.com/ganache/), which is a local blockchain simulator used for smart contract development, and [Elasticsearch](https://www.elastic.co/elasticsearch/), a powerful search and analytics engine required by Aquarius for efficient indexing and querying of data sets. A full list of components and exposed ports is available in the GitHub [repository](https://github.com/oceanprotocol/barge#component-versions-and-exposed-ports).

<figure><img src="../../.gitbook/assets/barge.png" alt=""><figcaption><p>Load Ocean components locally by using Barge</p></figcaption></figure>

To explore all the available options and gain a deeper understanding of how to utilize the Barge component, you can visit the official GitHub [repository](https://github.com/oceanprotocol/barge#all-options) of Ocean Protocol.

By utilizing the Barge component, developers gain the freedom to conduct experiments, customize, and fine-tune their local development environment, and offers the flexibility to override the Docker image tag associated with specific components. By setting the appropriate environment variable before executing the start\_ocean.sh command, developers can customize the versions of various components according to their requirements. For instance, developers can modify the: `AQUARIUS_VERSION`, `PROVIDER_VERSION`, `CONTRACTS_VERSION`, `RBAC_VERSION`, and `ELASTICSEARCH_VERSION` environment variables to specify the desired Docker image tags for each respective component.

{% hint style="warning" %}
⚠️ We've got an important heads-up about Barge that we want to share with you. Brace yourself, because **Barge is not for the faint-hearted**! Here's the deal: the barge works great on Linux, but we need to be honest about its limitations on macOS. And, well, it doesn't work at all on Windows. Sorry, Windows users!

To make things easier for everyone, we **strongly** recommend giving a try first on a **testnet**. Everything is configured already so it should be sufficient for your needs as well. Visit the [networks](../../discover/networks.md) page to have clarity on the available test networks. ⚠️
{% endhint %}

---
description: Ocean Protocol Architecture Adventure!
---

# Architecture Overview

Embark on an exploration of the innovative realm of Ocean Protocol, where data flows seamlessly and AI achieves new heights. Dive into the intricately layered architecture that converges data and services, fostering a harmonious collaboration. Let us delve deep and uncover the profound design of Ocean Protocol.🐬
 
<figure><img src="../.gitbook/assets/image.webp" alt=""><figcaption><p>Overview of the Ocean Protocol Architecture</p></figcaption></figure>

### Layer 1: The Foundational Blockchain Layer

At the core of Ocean Protocol lies the robust [Blockchain Layer](contracts/). Powered by blockchain technology, this layer ensures secure and transparent transactions. It forms the bedrock of decentralized trust, where data providers and consumers come together to trade valuable assets.

The smart contracts are deployed on the Ethereum mainnet and other compatible networks. The libraries encapsulate the calls to these smart contracts and provide features like publishing new assets, facilitating consumption, managing pricing, and much more. To explore the contracts in more depth, go ahead to the contracts section.

### Layer 2: The Empowering Middle Layer

Above the smart contracts, you'll find essential [libraries](architecture.md#libraries) employed by applications within the Ocean Protocol ecosystem, the [middleware components](architecture.md#middleware-components), and [Compute-to-Data](architecture.md#compute-to-data).

#### Libraries

These libraries include [Ocean.js](ocean.js), a JavaScript library, and [Ocean.py](../data-scientists/ocean.py), a Python library. They serve as powerful tools for developers, enabling integration and interaction with the protocol.

1. [Ocean.js](ocean.js): Ocean.js is a JavaScript library that serves as a powerful tool for developers looking to integrate their applications with the Ocean Protocol ecosystem. Designed to facilitate interaction with the protocol, Ocean.js provides a comprehensive set of functionalities, including data tokenization, asset management, and smart contract interaction. Ocean.js simplifies the process of implementing data access controls, building dApps, and exploring data sets within a decentralized environment.
2. [Ocean.py](../data-scientists/ocean.py): Ocean.py is a Python library that empowers developers to integrate their applications with the Ocean Protocol ecosystem. With its rich set of functionalities, Ocean.py provides a comprehensive toolkit for interacting with the protocol. Developers and [data scientists](../data-scientists/) can leverage Ocean.py to perform a wide range of tasks, including data tokenization, asset management, and smart contract interactions. This library serves as a bridge between Python and the decentralized world of Ocean Protocol, enabling you to harness the power of decentralized data.

#### Ocean Network

Ocean Network is the peer-to-peer GPU cloud that sits on top of Ocean Nodes. It connects people with idle GPUs to the developers and data scientists who need that compute, and it settles every job through an escrow contract on Base (Ethereum L2). The result is one global pool of GPUs that anyone can rent and anyone can contribute to.

**How a job flows through Ocean Network:**

Ocean Network gives you several ways to run work on a node's GPU: Ocean Inference, which keeps a model or app running for the session you book, and compute jobs, which run your algorithm once and return the output. Templates are the fastest way to start with Ocean Inference.

#### Running a template with Ocean Inference

1. **Open [Inference](https://dashboard.oncompute.ai/inference) on the dashboard.** The page offers three ways to start: **Templates**, **Models** (Custom or Curated), and **Services**. Templates are marked as the fastest way to start. The **My services** panel lists your running and recent inference services, and **Load services** pulls them up.
2. **Browse templates.** Click **Browse templates** to see ready-made bundles of an app and the models it needs. Each card shows the template name and publisher, a one-line description, its category (such as Image generation, Video generation, or Chat), how you use it (Web UI or Endpoint), the number of GPUs it needs, and the models included.
3. **Open a template.** The template page shows what it is, how it runs, and preview images. At the top, the **Quick Start** card shows a recommended setup picked for you: the GPU (for example 1× H200), CPU, RAM, and disk, plus the node that will run it, marked with a verified check.
4. **Choose your session length.** Select how long you want the session from the **Session length** dropdown. The **Start** button shows the cost for that length (for example, 3.0432 USDC for one hour). To pick the environment or resources yourself, use **Advanced setup**.
5. **Click Start.** The launch flow opens with four steps: **Template**, **Resources**, **Config**, and **Payment**. The first two are already complete from your Quick Start choices.
6. **Review the Config step.** Each template can add optional settings of its own. For example, Video Studio (MiniMax H3) offers **Persistent storage**, where you choose a bucket (or click **Create bucket**) to cache the app's model weights so relaunches skip the download. Without a bucket, the app re-downloads several GB of model weights on every launch, inside your paid session. Use **Go back** to change an earlier step, then click **Continue**.
7. **Fund the session.** The **Payment** step takes one escrow confirmation, which locks the cost of your booked session.
8. **Use your service.** Your running service appears under **My services**. Web UI templates run as an app, and Endpoint templates run as an API you can call.

#### Running a compute job

1. **Pick an environment.** Browse the node catalog on the dashboard and filter for the specs you need, such as an NVIDIA H200.
2. **Connect [Ocean Orchestrator](https://open-vsx.org/extension/OceanProtocol/ocean-protocol-vscode-extension).** The dashboard sends your editor (VS Code, Cursor, Antigravity, or Windsurf) a deep link that sets up your wallet, node, environment, and resources.
3. **Fund your escrow.** If your balance is below the estimated cost, use **Add funds**, then authorize the node when the dashboard asks you to sign.
4. **Click Run job.** Your algorithm runs once in an isolated container on the node, and you can watch the logs live.
5. **Get your results.** The outputs and logs are saved to your project's results folder, and the job's cost is settled from escrow.

**The main components:**

* **Ocean Nodes (supply):** Node operators run the Ocean Node software on their hardware and earn rewards. Benchmark jobs measure node performance, and operators compete on leaderboards. See Ocean Nodes below.
* **Escrow on Base (payments):** Settlement is on-chain, with low fees and fast confirmation. For Inference, the node operator claims the booked session window before the container starts.
* **Ocean Network dashboard (catalog and control):** A visual interface to find compute, launch jobs and services, and manage a node's performance, incentives, and connectivity. It includes wallet setup and a fiat on-ramp. [Learn more](https://docs.oncompute.ai/ocean-network-dashboard/running-compute-jobs-on-ocean-nodes-dashboard)
* **Ocean Inference (long-running services):** Keeps a model or AI app running on a node's GPU, reachable over HTTP. Launch a curated model, any Hugging Face model, a ready-made service, or a template. [Learn more](https://docs.oncompute.ai/inference/overview)
* **Ocean Orchestrator (jobs from your editor):** Run GPU jobs from VS Code, Cursor, or Windsurf with a one-click workflow, using the compute environment you selected on the dashboard. Compute-to-Data is built in. [Learn more](https://docs.oncompute.ai/ocean-orchestrator/overview)
* **Ocean CLI (terminal access):** Publish datasets and algorithms, consume them, and run compute jobs from the command line. [Learn more](https://docs.oncompute.ai/ocean-cli/markdown)
* **ON MCP server (agent access):** Exposes around 80 tools over the Model Context Protocol, so any AI agent can drive compute jobs. [Learn more](https://docs.oncompute.ai/on-mcp/quickstart)
* **Persistent Storage (data):** Store data once in a bucket and mount it into any container that needs it. It works with the CLI, the dashboard, and Ocean Orchestrator. [Learn more](https://docs.oncompute.ai/persistent-storage/quickstart)

Ocean Node is a single component which runs all core middleware services within the Ocean Network stack. It replaces the roles of Aquarius, Provider and the Subgraph. It integrates the Indexer for metadata management and the Provider for secure data access. It ensures efficient and reliable interactions within the Ocean Protocol network.

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


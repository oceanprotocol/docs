---
description: >-
  Key terms, concepts, and acronyms used in Ocean
---

# Glossary

## Ocean Network Concepts

### Getting Started

<details>

<summary>Ocean Network</summary>

Ocean Network is a decentralized, peer-to-peer (P2P) GPU compute network for AI inference and pay-per-use compute jobs. It turns idle and underutilized hardware into accessible compute: users pick a node with the resources they need, run a model, an AI app or a containerized job, and pay only for the time they book. Ocean Network is powered by the Ocean Protocol Foundation.

Inference, Templates, Ocean Orchestrator, Ocean MCP, the Ocean CLI and Ocean Nodes all sit under Ocean Network.

</details>

<details>

<summary>Orchestration Layer</summary>

The part of Ocean Network that connects people who need compute with the machines that provide it. It handles discovery, placement, payment and lifecycle, so users run their workload without managing remote servers, SSH keys or uptime themselves.

</details>

<details>

<summary>Supply Side and Demand Side</summary>

Ocean Network connects two groups. The **supply side** is node operators, who provide hardware and can earn from it. The **demand side** is developers, data scientists and AI agents, who select compute resources, pay for them and run jobs on them.

</details>

<details>

<summary>Code-to-Node</summary>

Ocean Network's workflow for moving from code to a selected compute node, running the job and receiving the results through a simple, one-click launch flow.

</details>

<details>

<summary>Pay-per-use</summary>

A billing model where you are charged for the compute that actually runs, not for idle infrastructure. The cost is shown before you launch, and there is no long-term contract or fixed-term reservation.

</details>

### Tools & Interfaces

<details>

<summary>Dashboard</summary>

The Ocean Network Dashboard (dashboard.oncompute.ai), also called the Ocean Nodes Dashboard, is the web interface for using and running the network. Users browse the catalogue, launch Inference and compute jobs and claim grant tokens. Node operators track their node's performance, eligibility and benchmark results. It runs in your browser and joins the P2P network itself, so it is a client and not a central broker.

</details>

<details>

<summary>Ocean Orchestrator</summary>

Ocean Network's editor extension (formerly the Ocean VS Code Extension). It lets you write, launch and manage GPU jobs from inside VS Code, Cursor, Windsurf and Antigravity with a one-click workflow and pay-per-use billing. It submits containerized jobs to remote nodes, monitors them and pulls the results back. Projects can be set up in Python, JavaScript or with your own Docker image.

</details>

<details>

<summary>Ocean CLI</summary>

A command-line tool for developers and data scientists to interact with Ocean Network from the terminal. It can publish datasets and algorithms, discover environments, consume data and run compute jobs, and it includes escrow commands to deposit funds, check your balance and withdraw.

</details>

<details>

<summary>Ocean MCP (ON MCP)</summary>

Ocean Network's Model Context Protocol (MCP) server and the agent interface to the network. Connect it to an AI client such as Claude, Cursor, ChatGPT, Gemini or VS Code with GitHub Copilot, and the agent can discover compute providers, write and validate algorithms, run free or paid jobs and manage persistent storage from a plain-language request. It exposes roughly 80 tools.

It covers three main flows: running a job, publishing data and algorithms, and operating or inspecting a node. It does not hold your funds or sign transactions for you.

</details>

### Compute Jobs

<details>

<summary>Compute Jobs</summary>

Finite workloads that run once on selected node resources and return their outputs when execution finishes, such as training, fine-tuning or data processing. Compute jobs are the batch counterpart to Inference.

</details>

<details>

<summary>Compute-to-Data (C2D)</summary>

A way of running compute where the algorithm travels to the data instead of the data travelling to the algorithm. The job runs in an isolated container near the data and only the outputs are returned, which is useful when the data is sensitive and must stay private. Ocean Orchestrator uses Compute-to-Data this way.

</details>

<details>

<summary>Algorithm</summary>

The code that a compute job runs. In an Ocean Orchestrator project, the algorithm file sits alongside a Dockerfile, a dependency file such as requirements.txt or package.json, and an environment (.env) file whose values are passed into the container.

</details>

<details>

<summary>Container</summary>

An isolated runtime that packages an application and its dependencies so it can run on a node's hardware. Ocean Network runs every job and service inside a container, and tears it down when the job finishes or the paid window ends.

</details>

<details>

<summary>Docker Image</summary>

The packaged blueprint a container is started from. If your project has no Dockerfile, you can provide your own Docker image and tag when you start a job.

</details>

<details>

<summary>Outputs Folder</summary>

The location where an algorithm must write its results: `./data/outputs/` inside the container. Whatever the algorithm writes there is what the runtime returns when the job finishes.

</details>

<details>

<summary>Job Status</summary>

The state of a compute job in the Dashboard: Queued, Running or Completed. You can follow live logs while a job runs and download the output files once it completes.

</details>

<details>

<summary>Node Failure vs. Algorithm Failure</summary>

A **node failure** is about resource availability and may allow a restart when the node comes back. An **algorithm failure** means the execution itself failed, so the job is treated as unsuccessful.

</details>

### Inference & Services

<details>

<summary>Inference (Ocean Network)</summary>

Ocean Network's flagship capability. A compute job runs once and exits, while Inference keeps a workload running: a model or an AI application on a node's GPU, reachable over HTTP for as long as you have paid for it. Inference has four entry points, from fully configured to fully custom: Curated Models, Custom Models, Services and Templates.

</details>

<details>

<summary>Inference Session</summary>

The booked runtime during which a model or AI application stays available on a node. When the paid window ends, the session ends. Unlike a compute job, a session is meant to keep running and answer requests.

</details>

<details>

<summary>Curated Models</summary>

Pre-sized packages that pair an open model with a tested inference engine preset and the hardware it needs. Pick one, pick an environment, pay and launch.

</details>

<details>

<summary>Custom Models</summary>

An Inference entry point that gives full control. Serve any model from the Hugging Face Hub on vLLM or llama.cpp, with every launch flag under your control, behind an OpenAI-compatible API.

</details>

<details>

<summary>Services</summary>

Ready-made containerized apps published by node operators, such as ComfyUI, Open WebUI and JupyterLab. A Service starts the empty app on a node's GPU, and you add your own models from inside it. Services are usually reached through their own browser interface.

</details>

<details>

<summary>Templates</summary>

Ready-to-run applications with their models and workflows already inside. You pick the outcome you want, such as text-to-image, image-to-video, music generation, UGC reels or agentic development, and launch it. Templates ship their model weights with them, so the first run does not start with a long download.

</details>

<details>

<summary>Endpoint</summary>

The network address used to call a running model's API or open an application's interface. Current endpoints have no built-in authentication, so anyone with the URL can use the model or app you are paying for. Treat endpoint URLs as secrets.

</details>

<details>

<summary>Catalog</summary>

The searchable list of Services, Templates and Curated Models that users can launch, built from what node operators publish. Operators can update or withdraw their offerings at any time without restarting the node, so a listing is not a permanent availability guarantee.

</details>

### Nodes & Hardware

<details>

<summary>Ocean Node</summary>

Ocean Node is the software that turns a machine into a provider on Ocean Network, and also the name for such a machine. Nodes process compute jobs, run containers, advertise what they can offer, index metadata and store data. Anyone can run a node and earn rewards through the Incentives Program.

The minimum requirements are Docker and Docker Compose, at least 1 vCPU, 2 GB of RAM and 4 GB of storage. You can run a node without a GPU, but a GPU is required to take part in the Incentives Program.

</details>

<details>

<summary>Node Operator</summary>

A person or organization that runs an Ocean Node and rents out their GPU and CPU resources on the network, earning payments for the time that users book.

</details>

<details>

<summary>Compute Environment</summary>

What a node advertises as available to book. Each environment lists its resources (GPUs, CPU, RAM and disk), how much of each is free, the maximum a single job can take, and the fee per unit and the token accepted as payment.

</details>

<details>

<summary>Network Indexer</summary>

An HTTP service that aggregates the environments nodes advertise, so the catalogue is searchable and filterable without contacting every node one by one.

</details>

<details>

<summary>CPU</summary>

The general-purpose processor that runs a workload's non-GPU work. On Ocean Network, CPU cores are advertised as an allocatable resource that you size for your job.

</details>

<details>

<summary>RAM</summary>

System memory allocated to a workload. It is separate from storage capacity and from GPU memory (VRAM).

</details>

<details>

<summary>VRAM</summary>

GPU memory used to hold model weights and working data during accelerated computation. A model has to fit in VRAM, which is why larger models need GPUs with more memory.

</details>

### Payments & Account

<details>

<summary>Escrow Contract</summary>

The smart contract on Base that makes pay-per-use work. The user deposits funds into escrow and authorizes the node, within set limits, to claim payment for the runtime they booked. The node will not start a workload it cannot get paid for, and the full cost is shown before any funds are committed.

Your balance is split into available and locked funds. An active job or session reserves funds, so check what is available before you withdraw. The Ocean CLI provides commands to deposit, check your escrow balance and withdraw.

</details>

<details>

<summary>Deposit</summary>

The transfer of tokens from your wallet into escrow to fund compute payments. A deposit and an authorization are separate steps from the final settlement of the job.

</details>

<details>

<summary>Payment Authorization</summary>

The permission that lets the selected node claim the agreed compute payment from escrow. It is bounded by a maximum amount, a maximum lock duration (`maxLockSeconds`) and a number of lock slots, so a node can only collect what you approved.

</details>

<details>

<summary>Paid Window</summary>

The block of time you book and pay for a service or job. When the window ends, the container is torn down and the endpoint stops answering. You can extend (prolong) a running service before it expires.

</details>

<details>

<summary>USDC on Base</summary>

A dollar-linked token on the Base network used to fund and pay for compute. Base has native USDC support, which is one reason Ocean Network settles there.

</details>

<details>

<summary>COMPY</summary>

The grant token offered through Ocean Network's grant flow and supported for compute payments on the Base network. Users claim it from the Dashboard ("Claim credits"). The claim option disappears once the grant has been claimed, and the documented flow does not offer a repeat claim for the same grant.

</details>

<details>

<summary>Smart Wallet</summary>

A built-in wallet in the Dashboard, created automatically when you sign in with email, Google or a passkey, so you do not need a browser wallet extension. It is an embedded wallet built on Alchemy Account Kit. Users can also connect an external wallet that holds funds on Base.

</details>

### Storage & Access

<details>

<summary>Persistent Storage</summary>

Node-side storage that keeps your files independently of individual compute jobs or service containers. You upload data once into a bucket and mount it into any container that needs it, instead of uploading data on every run. Storage inside a container is ephemeral, so anything you want to keep, such as downloaded model weights, belongs in a bucket.

</details>

<details>

<summary>Bucket</summary>

A user-owned storage space on one node, containing files that can be mounted into workloads. A mounted file is referenced by its bucket ID and file name.

</details>

<details>

<summary>Output Bucket</summary>

A persistent-storage bucket you select in Ocean Orchestrator so a job writes its results straight into it, instead of returning them as a local archive.

</details>

<details>

<summary>Access List</summary>

An on-chain contract that controls who can use a bucket. A wallet that holds a token in the bucket's access-list contract can upload, list and delete files. Without an access list, only the owner has those permissions. Access lists are also how one bucket can be shared across several agents.

</details>

### Node Incentives

<details>

<summary>Ocean Network Incentives Program</summary>

The program through which node operators earn rewards. Nodes that meet eligibility requirements receive paid benchmark jobs, funded from a weekly pool, that test GPU, CPU and bandwidth performance. Nodes that keep passing build a performance track record that affects their eligibility for future jobs and payouts, and nodes that fail repeatedly are temporarily removed from the pool.

</details>

<details>

<summary>Benchmark</summary>

A short compute job that Ocean Network runs on eligible nodes to measure performance. It combines a GPU test (70% of the score), a CPU test (20%) and a bandwidth test (10%) into a single composite score. Results are visible on the Dashboard.

</details>

<details>

<summary>Epoch</summary>

A seven-day incentive reporting period that runs from Thursday to the following Thursday. Bans are assessed at the end of each epoch.

</details>

<details>

<summary>Eligibility</summary>

A node's qualification to receive incentive benchmark jobs under the current configuration and performance requirements. Being online only means the node is reachable on the network. It does not mean the node is eligible. A node must pass every check, including public P2P reachability, a supported node version, an escrow address that includes Base, and a GPU compute environment that accepts USDC.

</details>

<details>

<summary>Allowlist</summary>

The approved addresses permitted to access a compute environment, including the incentive monitoring service. If the monitoring address is missing from a node's allowlist, the node is skipped for benchmark jobs even when every other check passes.

</details>

<details>

<summary>Suspension and Ban</summary>

A node that fails monitoring checks three times in a row enters an exponential suspension, starting at 4 hours and doubling up to a cap of 7 days. A node whose benchmark success rate is below 50% over an epoch is banned at the end of that epoch. Operators can request an unban from the node's page in the Dashboard, which schedules a high-priority benchmark job.

</details>

<details>

<summary>Leaderboard</summary>

The ranking of nodes in the Dashboard based on performance benchmarks. A new node can take some time to appear on it.

</details>

### Ocean MCP Tools

<details>

<summary>find_provider</summary>

Discovers compute providers across Ocean Network through the DHT.

</details>

<details>

<summary>getComputeEnvironments</summary>

Lists the compute environments available so that an agent can select one.

</details>

<details>

<summary>initializeCompute</summary>

Initializes a paid compute job and returns real pricing, without moving any funds. It is the step for verifying live pricing before a job starts.

</details>

<details>

<summary>computeStart</summary>

Launches a compute job.

</details>

<details>

<summary>computeStatus</summary>

Monitors a running compute job.

</details>

<details>

<summary>getComputeResult</summary>

Retrieves the outputs of a compute job once it finishes.

</details>

<details>

<summary>validate_algo_structure</summary>

Checks an algorithm against the Compute-to-Data filesystem contract before a job runs, so common mistakes are caught early.

</details>

### Node Configuration

<details>

<summary>PRIVATE_KEY</summary>

The one required setting for basic Ocean Node configuration. It holds the private key of the node's wallet. Keep it secret.

</details>

<details>

<summary>ALLOWED_ADMINS</summary>

The list of wallet addresses that are allowed to access the node's administration endpoints.

</details>

<details>

<summary>HTTP_PORT</summary>

The port used by the node's HTTP server, for example 8000.

</details>

<details>

<summary>RPCS</summary>

An optional JSON object that defines the RPC URLs for the chains the node supports.

</details>

<details>

<summary>DB_URL</summary>

An optional setting that gives the URL of the node's internal Typesense or Elastic database.

</details>

<details>

<summary>DOCKER_COMPUTE_ENVIRONMENTS</summary>

A JSON string that describes the compute resources a node offers, such as CPU, RAM, GPU and disk.

</details>

<details>

<summary>escrowAddress</summary>

The node setting that points to Ocean's Escrow contract on Base. It must include Base for a node to be eligible for incentives.

</details>

<details>

<summary>enableBenchmark</summary>

A node setting (or the `ENABLE_BENCHMARK=true` environment variable) that configures an eligible environment automatically. It registers Base and USDC, sets the GPU fee, adds the monitoring address to the access list and detects the available CPU, RAM, disk and GPU resources.

</details>

### Related Enterprise Context

<details>

<summary>Ocean Enterprise Collective (OEC)</summary>

A separate nonprofit association that supports Ocean Enterprise software and governance for sovereign data and AI collaboration. Its Compute-to-Data approach lets approved computation run where data is held. Enterprise deployment controls belong to that context and should not be assumed to protect every public Ocean Network session.

</details>


## Ocean Protocol Concepts

<details>

<summary>Ocean Protocol</summary>

Ocean Protocol is the open-source technology and foundation behind Ocean Network. It began as a decentralized data exchange protocol that let individuals and organizations share, sell and consume data in a secure, transparent and privacy-preserving way. Its blockchain, smart contract and Compute-to-Data foundations now underpin Ocean Network's compute and inference services.

</details>

<details>

<summary>OCEAN</summary>

OCEAN is an ERC-20 token created by Ocean Protocol. Until 2024 it served as the utility token of the Ocean Protocol data ecosystem, used for staking, governance and buying data services. Since Ocean Protocol Foundation left the ASI Alliance, OCEAN is positioned as a token that represents the ideals of decentralized AI and data and has no intended utility value. Its supply is capped at about 270 million and is expected to fall over time through buybacks and burns.

Compute on Ocean Network is paid in the fee token that each node's environment accepts, not in OCEAN.

</details>


## Web3 Fundamentals

<details>

<summary>Web3</summary>

Web3 (also known as Web 3.0 or the decentralized web) is a term used to describe the next evolution of the internet, where decentralized technologies are used to enable greater privacy, security, and user control over data and digital assets.

While the current version of the web (Web 2.0) is characterized by centralized platforms and services that collect and control user data, Web3 aims to create a more decentralized and democratized web by leveraging technologies such as blockchain, peer-to-peer networking, and decentralized file storage.

Ocean Network is built on these ideas. Compute providers and users transact directly with each other, with payments settled on-chain, without the need for centralized cloud providers or intermediaries.

</details>

<details>

<summary>Blockchain</summary>

A distributed ledger technology (DLT) that enables secure, transparent, and decentralized transactions. Blockchains use cryptography to maintain the integrity and security of the data they store.

Ocean Network uses blockchain technology for payments. Escrow contracts hold deposits and release them to node operators for the runtime that was booked, creating an on-chain, auditable record of each transaction.

</details>

<details>

<summary>Decentralization</summary>

Decentralization is the distribution of power, authority, or control away from a central authority or organization, towards a network of distributed nodes or participants. Decentralized systems are often characterized by their ability to operate without a central point of control, and their ability to resist censorship and manipulation.

In the context of Ocean Network, decentralization means that the machines doing the work are independent node operators around the world, the Dashboard talks to nodes directly over a peer-to-peer network, and payment settles on-chain between the user and the operator.

</details>

<details>

<summary>Block Explorer</summary>

A tool that allows users to view information about transactions, blocks, and addresses on a blockchain network. Block explorers provide a [graphical interface](https://etherscan.io/token/0x967da4048cD07aB37855c090aAF366e4ce1b9F48) for interacting with a blockchain, and they allow users to search for specific transactions, view the details of individual blocks, and track the movement of cryptocurrency between addresses. Block explorers are commonly used by cryptocurrency enthusiasts, developers, and businesses to monitor network activity and verify transactions.

</details>

<details>

<summary>Cryptocurrency</summary>

A digital or virtual currency that uses cryptography for security and operates independently of a central bank. Cryptocurrencies use blockchain or other distributed ledger technologies to maintain their transaction history and prevent fraud.

On Ocean Network, compute is paid for in tokens on the Base network, in the fee token a node's environment accepts. The OCEAN token is a separate ERC-20 token that no longer has an intended utility role.

</details>

<details>

<summary>Decentralized applications (dApps)</summary>

dApps (short for decentralized applications) are software applications that run on decentralized peer-to-peer networks, such as blockchain. Unlike traditional software applications that rely on a centralized server or infrastructure, dApps are designed to be decentralized, open-source, and community-driven.

The Ocean Network Dashboard is an example. It runs in the browser, connects directly to node operators over the P2P network, and settles payment on-chain.

</details>

<details>

<summary>Interoperability</summary>

The ability of different blockchain networks to communicate and interact with each other. Interoperability is important for creating a seamless user experience and enabling the transfer of value across different blockchain ecosystems.

</details>

<details>

<summary>Smart contract</summary>

Smart contracts are self-executing digital contracts that allow for the automation and verification of transactions without the need for a third party. They are programmed using code and operate on a decentralized blockchain network. Smart contracts are designed to enforce the rules and regulations of a contract, ensuring that all parties involved fulfill their obligations. Once the conditions of the contract are met, the smart contract automatically executes the transaction, ensuring that the terms of the contract are enforced in a transparent and secure manner.

Ocean Network's smart contracts, including the escrow contract that handles pay-per-use payments, are deployed on Base. The code is open source and available on the organization's [GitHub](https://github.com/oceanprotocol/contracts).

</details>

<details>

<summary>Ethereum Virtual Machine (EVM)</summary>

The Ethereum Virtual Machine (EVM) is a runtime environment that executes smart contracts on the Ethereum blockchain. It is a virtual machine that runs on top of the Ethereum network, allowing developers to create and deploy decentralized applications (dApps) on the network. The EVM provides a platform for developers to create smart contracts in various programming languages, including Solidity, Vyper, and others.

Many other chains, including Base, are EVM-compatible, which means contracts and wallets built for Ethereum work on them too.

</details>

<details>

<summary>Layer 2 (L2)</summary>

A blockchain built on top of another blockchain (a Layer 1 such as Ethereum) to process transactions faster and at lower cost, while relying on the underlying chain for security.

</details>

<details>

<summary>Base</summary>

Base is an Ethereum Layer 2 network. Ocean Network is deployed on Base because it offers lower fees and faster transactions than Ethereum itself, inherits Ethereum's security and has native USDC support. Its escrow contract, COMPY token claims and compute payments all settle there. Users need a wallet with funds on Base, either an external wallet or the Dashboard's built-in Smart Wallet.

</details>

<details>

<summary>ERC</summary>

ERC stands for Ethereum Request for Comments and refers to a series of technical standards for Ethereum-based tokens and smart contracts. ERC standards are created and proposed by developers to the Ethereum community for discussion, review, and implementation. These standards ensure that smart contracts and tokens are compatible with other applications and platforms built on the Ethereum blockchain.

Standards like [ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/), [ERC-721](https://eips.ethereum.org/EIPS/eip-721) and [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) are the ones most commonly referenced in Ocean's documentation.

</details>

<details>

<summary>ERC-20</summary>

[ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/) is a technical standard used for smart contracts on the Ethereum blockchain that defines a set of rules and requirements for creating tokens that are compatible with the Ethereum ecosystem. ERC-20 tokens are fungible, meaning they are interchangeable with other ERC-20 tokens and have a variety of use cases such as creating digital assets, utility tokens, or fundraising tokens for initial coin offerings (ICOs).

Tokens used for payment on Ocean Network, and the OCEAN token itself, follow the ERC-20 standard.

</details>

<details>

<summary>ERC-721</summary>

[ERC-721](https://eips.ethereum.org/EIPS/eip-721) is a technical standard used for smart contracts on the Ethereum blockchain that defines a set of rules and requirements for creating non-fungible tokens (NFTs). ERC-721 tokens are unique and cannot be exchanged for other tokens or assets on a one-to-one basis, making them ideal for creating digital assets such as collectibles, game items, and unique digital art.

In Ocean Protocol's original data marketplace design, ERC-721 was used to create data NFTs that represented ownership of a dataset or algorithm.

</details>

<details>

<summary>ERC-1155</summary>

[ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) is a technical standard for creating smart contracts on the Ethereum blockchain that allows for the creation of both fungible and non-fungible tokens within the same contract. This makes it a "multi-token" standard that provides more flexibility than the earlier ERC-20 and ERC-721 standards, which only allow for the creation of either fungible or non-fungible tokens, respectively.

</details>

<details>

<summary>Consensus Mechanism</summary>

A consensus mechanism is a method used in blockchain networks to ensure that all participants in the network agree on the state of the ledger or the validity of transactions. Consensus mechanisms are designed to prevent fraud, double-spending, and other types of malicious activity on the network.

Ocean does not run its own blockchain or consensus mechanism. Ocean Network settles on Base, an Ethereum Layer 2 that inherits its security from Ethereum, which uses Proof of Stake.

</details>

<details>

<summary>Proof of Stake (PoS)</summary>

A consensus mechanism used in blockchain networks that require validators to hold a certain amount of cryptocurrency as a stake in order to participate in the consensus process. PoS is an alternative to proof of work (PoW) and is designed to be more energy efficient. Ethereum uses PoS.

</details>

<details>

<summary>Proof of Work (PoW)</summary>

A consensus mechanism used in blockchain networks that require validators to solve complex mathematical puzzles in order to participate in the consensus process. PoW is the original consensus mechanism used in the Bitcoin blockchain and is known for its high energy consumption.

</details>

<details>

<summary>BUIDL</summary>

A term used in the cryptocurrency and blockchain space to encourage developers and entrepreneurs to build new products and services. The term is a deliberate misspelling of the word "build" and emphasizes the importance of taking action and creating value in the ecosystem.

</details>


## Decentralized Finance (DeFi) Fundamentals

<details>

<summary>DeFi</summary>

A financial system that operates on a decentralized, blockchain-based platform, rather than relying on traditional financial intermediaries such as banks, brokerages, or exchanges. In a DeFi system, financial transactions are executed using smart contracts, which are self-executing computer programs that automatically enforce the terms of an agreement between parties.

</details>

<details>

<summary>Decentralized exchange (DEX)</summary>

A Decentralized exchange (DEX) is an exchange that operates on a decentralized platform, allowing users to trade cryptocurrencies directly with one another without the need for a central authority or intermediary. DEXs typically use smart contracts to facilitate trades and rely on a network of nodes to process transactions and maintain the integrity of the exchange.

</details>

<details>

<summary>Staking</summary>

The act of holding a cryptocurrency in a wallet or on a platform to support the network and earn rewards. Staking is typically used in proof-of-stake (PoS) blockchain networks as a way to secure the network and maintain consensus.

</details>

<details>

<summary>Lending</summary>

The act of providing cryptocurrency to a borrower in exchange for interest payments. Lending platforms match borrowers with lenders and use smart contracts to facilitate loan agreements.

</details>

<details>

<summary>Borrowing</summary>

The act of borrowing cryptocurrency from a lender and agreeing to repay the loan with interest. Borrowing platforms match borrowers with lenders and use smart contracts to facilitate loan agreements.

</details>

<details>

<summary>Farming</summary>

A strategy in which investors provide liquidity to a DeFi protocol in exchange for rewards in the form of additional cryptocurrency or governance tokens. Farming typically involves providing liquidity to a liquidity pool and earning a share of the trading fees generated by the pool. Yield farming is a type of farming strategy.

</details>

<details>

<summary>Annual Percentage Yield (APY)</summary>

Represents the total amount of interest earned on a deposit or investment account over one year, including the effect of compounding.

</details>

<details>

<summary>Annual Percentage Rate (APR)</summary>

Represents the annual cost of borrowing money, including the interest rate and any fees or charges associated with the loan, expressed as a percentage.

</details>

<details>

<summary>Liquidity Pools (LP)</summary>

Liquidity Pools (LPs) are pools of tokens that are locked in a smart contract on a decentralized exchange (DEX) in order to facilitate the trading of those tokens. LPs provide liquidity to the DEX and allow traders to exchange tokens without needing a counterparty, while LP providers earn a share of the trading fees in exchange for providing liquidity.

</details>

<details>

<summary>Yield Farming</summary>

A strategy in which investors provide liquidity to a DeFi protocol in exchange for rewards in the form of additional cryptocurrency or governance tokens. Yield farming is designed to incentivize users to contribute to the growth and adoption of a DeFi protocol.

</details>


## Data Science and AI Terminology

<details>

<summary>AI</summary>

AI stands for Artificial Intelligence. It refers to the development of computer systems that can perform tasks that would typically require human intelligence to complete. AI technologies enable computers to learn, reason, and adapt in a way that resembles human cognition.

</details>

<details>

<summary>Machine learning</summary>

Machine learning is a subfield of artificial intelligence (AI) that involves teaching computers to learn from data, without being explicitly programmed. In other words, it is a way for machines to automatically learn and improve from experience, without being explicitly told what to do in every situation.

</details>

<details>

<summary>Generative AI</summary>

AI models that create new content, such as text, images, video, music or code, from a prompt. On Ocean Network, Templates package generative models, such as image, video and music generators, into ready-to-run applications.

</details>

<details>

<summary>Large Language Model (LLM)</summary>

An AI model trained on large amounts of text that can understand and generate language. LLMs power chat assistants, coding agents and many other applications, and they can be served on Ocean Network through Inference.

</details>

<details>

<summary>AI Agent</summary>

A software system that uses an AI model to pursue a goal on its own: planning steps, using tools and acting on the results. On Ocean Network, agents can run on node GPUs through Inference, or can drive the network itself through Ocean MCP.

</details>

<details>

<summary>Model Context Protocol (MCP)</summary>

An open standard that lets AI assistants and agents connect to external tools and data sources in a consistent way. Ocean MCP is Ocean Network's MCP server.

</details>

<details>

<summary>Open-source model</summary>

An AI model whose weights are published so that anyone can download, run and often modify it. Most models served on Ocean Network are open-source models from the Hugging Face Hub.

</details>

<details>

<summary>Model weights</summary>

The learned parameters of an AI model. Weights are large files, often hundreds of gigabytes for the biggest models, which is why Templates ship with them already in place and why Persistent Storage helps relaunches start quickly.

</details>

<details>

<summary>Hugging Face Hub</summary>

A public platform where open-source AI models and datasets are hosted and shared. Custom Models on Ocean Network pull their weights from the Hub when they start.

</details>

<details>

<summary>Inference engine</summary>

The software that loads a model and serves requests from it. vLLM and llama.cpp are inference engines. Curated Models come with the engine, launch flags and quantization already matched to the model and hardware.

</details>

<details>

<summary>OpenAI-compatible API</summary>

An API that follows the same request and response format as the OpenAI API, so existing tools and applications can connect to a self-hosted model without code changes. Models served through Ocean Network's Inference expose an OpenAI-compatible endpoint.

</details>

<details>

<summary>Quantization</summary>

A technique that stores a model's weights at lower numeric precision to reduce its memory use and cost, usually with a small trade-off in accuracy. It lets larger models fit on smaller GPUs.

</details>

<details>

<summary>Fine-tuning</summary>

Further training of an existing model on a smaller, specific dataset to adapt it to a task or domain. Techniques such as LoRA do this efficiently without retraining the whole model.

</details>

<details>

<summary>ComfyUI</summary>

An open-source, node-based application for building image, video and audio generation workflows. It is available on Ocean Network as a Service, and many Templates are built on ComfyUI workflows.

</details>

<details>

<summary>GPU</summary>

A Graphics Processing Unit, the processor type that accelerates AI training and inference by running many calculations in parallel. On Ocean Network, GPUs are booked in whole units, for example an NVIDIA H200, and priced per hour.

</details>

<details>

<summary>NVIDIA H200</summary>

A data-center GPU with 141 GB of HBM3e memory and 4.8 TB/s of memory bandwidth. Its large memory makes it suitable for 70B-class models, with room left over for the KV cache, on a single GPU.

</details>

<details>

<summary>HBM (High Bandwidth Memory)</summary>

A type of very fast memory built into data-center GPUs. HBM3e is the generation used on the H200. More memory lets a GPU hold larger models and datasets.

</details>

<details>

<summary>KV Cache</summary>

The memory a language model uses to store the attention keys and values of tokens it has already processed, so it does not recompute them for every new token. It grows with context length, which is why GPU memory headroom matters.

</details>

<details>

<summary>LoRA (Low-Rank Adaptation)</summary>

A fine-tuning method that freezes almost all of a pretrained model's weights and trains only a small set of adapter layers. This uses far less GPU memory and time than full fine-tuning, so many jobs fit on one GPU, and the resulting adapter is lightweight and portable across deployments.

</details>

<details>

<summary>QLoRA</summary>

A variant of LoRA that reduces memory requirements further, typically by quantizing the frozen base model. It can make some large-model fine-tuning workloads, such as Llama 70B, feasible on a single high-memory GPU.

</details>

<details>

<summary>Embeddings</summary>

Numeric vectors that represent text, images or other data so that similar items sit close together. Generating embeddings means sending data in and getting vectors out. A corpus-wide embedding job is a good example of a batch workload.

</details>

<details>

<summary>Batch Job</summary>

A workload that processes a whole dataset and then stops, rather than serving live requests. Batch jobs, such as embeddings, evaluation suites, synthetic data generation or overnight fine-tunes, do not need low-latency serving. They need reliable GPUs, and you can shut the GPU down when the job ends.

</details>


## Decentralized Computing Terminology

<details>
<summary>Decentralized Compute</summary>

Distribution of computational tasks across multiple independent machines (GPUs/CPUs) globally instead of relying on a central server.

</details>

<details>

<summary>Peer-to-Peer (P2P) Network</summary>

A system where computers (peers) share resources and data directly without centralized control.
  
</details>

<details>

<summary>libp2p</summary>

The open-source networking stack that Ocean Network uses so nodes, the Dashboard and agents can find and talk to each other directly. It also helps make nodes behind firewalls reachable.

</details>

<details>

<summary>Distributed Hash Table (DHT)</summary>

A decentralized lookup system spread across the nodes of a P2P network, which lets peers find each other and the resources they offer without a central directory. Ocean MCP uses it to discover compute providers.

</details>

<details>

<summary>Peer ID</summary>

The unique identifier of a node on the P2P network. Support may ask for your node's Peer ID, together with sanitized diagnostics, when troubleshooting connection problems.

</details>

<details>

<summary>DID and DDO</summary>

A **DID** (Decentralized Identifier) is a unique, self-owned identifier. A **DDO** (DID Document) is the metadata record attached to it, which describes an asset or offering. Nodes advertise DDOs on the P2P network so others can find them. An "Error advertising DDO: TimeoutError" message usually means the node is not properly reachable over P2P, so check that it has a public IP, an open P2P port and a correctly announced public address.

</details>

<details>

<summary>Node</summary>

An individual device or computer that participates in a decentralized network by providing compute, storage, or validation. On Ocean Network, see Ocean Node.
  
</details>

<details>

<summary>Inference</summary>

The process of using a trained AI model to generate predictions or insights from new, unseen data. On Ocean Network, see Inference (Ocean Network).
  
</details>

<details>

<summary>Scaling Laws</summary>

Empirical patterns showing how AI model performance improves predictably with increases in data, compute, and model size.
  
</details>


## Legacy Terms (Ocean Protocol Data Economy)

These terms come from Ocean Protocol's original data marketplace era. They remain useful for reading older material, but Ocean Network's current focus is compute and inference.

<details>

<summary>Data Consume Volume (DCV)</summary>

A metric for the amount of dollars spent over a time period to buy data assets that were subsequently consumed.

</details>

<details>

<summary>Transaction Volume (TV)</summary>

A metric for the number of blockchain transactions done over a time period.

</details>

<details>

<summary>Ocean Data Challenges</summary>

[Ocean Data Challenges](https://oceanprotocol.com/challenges) was a program organized by Ocean Protocol that sought to incentivize data-driven insights and algorithms for solving complex business problems. Each challenge involved a specific data problem or use case, and participants such as data scientists, developers, researchers and entrepreneurs were given access to data sets, tools and resources and invited to submit solutions.

</details>

<details>

<summary>Ocean Market</summary>

The [Ocean Market](http://market.oceanprotocol.com) is a decentralized data marketplace built on top of the Ocean Protocol, where data providers could list data assets for sale and data consumers could browse and purchase them. It was primarily a **technology demonstrator**, showcasing capabilities of the protocol such as secure and transparent data exchange, flexible access control and token-based incentivization.

</details>

<details>

<summary>Ocean Shipyard</summary>

[Ocean Shipyard](https://oceanprotocol.com/shipyard) is an early-stage grant program established to fund the next generation of Web3 dApps built on Ocean Protocol, curated by the Ocean core team around clear delivery milestones.

</details>

<details>

<summary><strong>Base IP</strong></summary>

**Base IP** means the artifact being copyrighted. Represented by the {ERC721 address, tokenId} from the publish transactions. Not related to the Base network.

</details>

<details>

<summary><strong>Base IP holder</strong></summary>

**Base IP holder** means the holder of the Base IP. Represented as the actor that did the initial "publish" action.

</details>

<details>

<summary><strong>Sub-licensee</strong></summary>

**Sub-licensee** is the holder of the sub-license. Represented as the entity that controls address ERC721.\_owners\[tokenId=x].

</details>

<details>

<summary><strong>To Publish</strong></summary>

Claim copyright or exclusive base license.

</details>

<details>

<summary><strong>To Sub-license</strong></summary>

Transfer one (of many) sub-licenses to new licensee: ERC20.transfer(to=licensee, value=1.0).

</details>

----


Congrats! You've completed this quick introduction to Ocean.

_Next: Jump to [Docs main](../README.md) and click on your interest._

_Back: [FAQ](faq.md)_

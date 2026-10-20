---
title: FAQs
description: 
---

# FAQ

Have some questions about Ocean Protocol?

Hopefully, you'll find the answers here! If not then please don't hesitate to reach out to us on [discord](https://discord.gg/TnXjkR5) - there are no stupid questions!

## Getting Started with Ocean Network

<details> 
  
<summary>What is Ocean Network, and what is its current focus?</summary>

Ocean Network is a decentralized, peer-to-peer compute network, powered by Ocean Protocol, that connects AI compute users with independent hardware providers. You can run containerized compute jobs through the Dashboard and developer tools, and launch long-running inference sessions from the [Dashboard](https://dashboard.oncompute.ai/inference).

</details> 

<details> 
  
<summary>Who is Ocean Network for?</summary>

Developers, data scientists, and researchers use Ocean Network to run GPU workloads without managing servers, and hardware operators use it to offer their machines to paying users. Availability, compatibility, and earnings depend on the selected environment and actual demand.

</details> 

<details> 
  
<summary>How do the Dashboard, Ocean Orchestrator, Ocean CLI, and ON MCP differ?</summary>

The Dashboard is the visual interface for finding compute, launching workloads, and managing nodes. Ocean Orchestrator runs jobs from supported code editors, Ocean CLI covers terminal workflows, and ON MCP lets an AI assistant discover resources and operate compute and storage tools. Choose the one that fits how you like to work, since each one connects you to the same network.

</details> 
  
<details> <summary>What is a compute environment?</summary>

A compute environment is a node's published configuration of hardware, limits, and pricing for running compatible workloads. The Dashboard lists each environment's GPU, CPU, RAM, price, region, availability, and maximum duration so you can choose the best fit before you launch.

</details>

## Running Compute Jobs

<details> <summary>What workloads can I run?</summary>

Typical jobs include embeddings, batch inference, evaluation suites, synthetic data generation, data preparation, and model fine-tuning. Package your runtime in a container and choose resources that fit the job and the permitted duration. The [use-case](https://docs.oncompute.ai/use-cases/quickstart) guides walk through ready-made examples such as LLM fine-tuning, transformer foundations, unsupervised clustering, and data preprocessing. For an endpoint or app that stays online, use Inference.

</details> 

<details> 
  
<summary>Which editors and programming languages are supported?</summary>

Ocean Orchestrator supports VS Code, Cursor, Antigravity, and Windsurf, with built-in Python and JavaScript templates and a custom Docker image option for any other runtime. Algorithms uploaded in the Dashboard can be written in Python or Node.js.

</details>

<details> 
  
<summary>What does an NVIDIA H200 offer on Ocean Network?</summary>

An H200 provides 141 GB of HBM3e memory and 4.8 TB/s of bandwidth, which gives a single GPU room for 70B-class models plus KV cache. The H200 SXM5 environment listed on the Orchestrator page includes 440 GB RAM, 40 vCPUs, and 1000 GB disk, with a starting price of $2.16 per hour on the Ocean Network homepage at the time of writing.

</details> 


## Inference & Services

<details>
  
<summary>How is an inference session different from a compute job?</summary>

A compute job runs a task and finishes. An inference session keeps a model or AI app available over HTTP for a booked period on dedicated GPU capacity, and it ends when the paid window expires unless you extend it.

</details> 

<details> 
  
<summary>What can I launch through Inference?</summary>

You can pick a [curated model](https://dashboard.oncompute.ai/inference) package, configure a custom model and engine, open a bare application, or start a template with models and workflows prepared. Model flows give you an OpenAI-compatible endpoint, and applications and templates can provide a browser interface.

</details> 

<details> 
  
<summary>How are inference sessions billed?</summary>

The full cost is shown before launch, and your payment goes into escrow to authorize the operator to claim the booked window. Billing is time-based access to hardware rather than per-token pricing.

</details> 

<details> 
  
  <summary>Can I extend, restart, or edit a running service?</summary>

Use Prolong session before expiry to buy more time. Restart or Edit rebuilds an unexpired service while keeping its ID, endpoint, and paid window, and changing hardware needs a new launch. After a session expires, start a new service.

</details> 

<details> <summary>What should I do if my service fails to start or ends earlier than I booked?</summary>

Payment is claimed only after the image is ready and the container is created, so a failure before that point cancels the escrow lock. If a service times out, ends early, or still shows locked funds, contact support on discord with the service ID, the node name, and your logs so the team can investigate.

</details> 

## Pricing, Payments & Credits
<details> 
  
<summary>How are batch compute jobs priced?</summary>

Each node prices CPU, RAM, disk, and GPU per minute, and the Dashboard shows an estimate before launch. A job that finishes early stops the meter, so you pay for the runtime you use rather than a full hour or a long-term reservation. Confirm the quoted units and conditions for each run.

</details> 

<details> 
  
<summary>Which network and payment tokens does Ocean Network use?</summary>

Payments run on Base, an Ethereum Layer 2 with low fees and native USDC. Use USDC or COMPY where the selected environment offers them, and check the fee token and network before you authorize.

</details> 

<details> 
<summary>How do I sign in, and do I need a browser wallet?</summary>

Sign in with email, Google, or a passkey to use an embedded Smart Wallet, or connect your own wallet. Smart Wallets work without a browser extension such as MetaMask.

</details> 

<details> 
  
<summary>How do I get USDC on Base?</summary>

If you signed in with email, Google, or a passkey, open My account → Top up (or the top-up link on the payment screen) to buy USDC with a card. With an external wallet, send USDC from Coinbase directly to your Base address, or move funds with the Base Bridge or Superbridge.

</details> 

<details> 
  
<summary>What is escrow, and how does payment work?</summary>

Escrow is the smart contract that holds your deposited tokens. Your budget is locked before a job starts, and once completion is verified the exact runtime cost is released to the node while the remaining balance returns to your wallet. Check your available and locked funds before you withdraw, since an active job or session reserves funds, and use the Dashboard escrow page or Ocean CLI to withdraw the rest.

</details> 

<details> 
  
<summary>What is COMPY, and how do I claim it?</summary>

COMPY is the token offered through Ocean Network's grant flow and accepted for compute payment by supported environments. Open Claim grant tokens in the Dashboard profile menu, complete the form, verify your email with the six-digit code (valid for 10 minutes), review your eligibility and amount, and submit the claim transaction on Base. See the claim docs page for the [full walkthrough](https://docs.oncompute.ai/ocean-network-dashboard/claim-your-compy-tokens), and use My account → Get COMPY to swap USDC for more.

</details> 

## Storage & Data

<details> 
  
<summary>How can I keep files between runs?</summary>

Create a persistent-storage bucket on your chosen node, upload your files, and mount them into later jobs so you can skip re-uploading for every run. A bucket lives on one node and is not replicated across providers, so keep copies of any results you need to keep.

</details> 

<details> 
  
<summary>How do I share a bucket with other people or agents?</summary>

Attach an ERC-721 soulbound access-list contract when you create the bucket, and every wallet holding a token from that contract can upload, list, and delete files in it. Decide on sharing at creation time, because an access list cannot be added afterward, and a bucket without one stays owner-only. The same setup lets several AI agents share one bucket for memory and coordination.

</details> 

## Privacy & Trust

<details> 
  
<summary>What is Compute-to-Data?</summary>

Compute-to-Data (C2D) runs code in an isolated container near the data and returns only the outputs designated for the consumer. Ocean Orchestrator uses this pattern for every job it submits.

</details> 

<details> <summary>Are my inputs and inference endpoints private?</summary>

A node operator can see the data and traffic processed on their machine, so assess the operator before you send sensitive data. Inference environment variables are encrypted in transit and decrypted by the node, and current endpoints have no built-in authentication, so treat each endpoint URL as a secret and add your own authentication for anything sensitive.

</details> 

<details> <summary>How are training jobs isolated on a node?</summary>

Every job runs in its own container with resources allocated per job, and each GPU serves one job at a time. The container is torn down when the job finishes.

</details> 

## Developer Tools

<details> <summary>How do I connect ON MCP to my AI assistant?</summary>

[ON MCP](https://docs.oncompute.ai/on-mcp/quickstart) is a hosted Model Context Protocol server, so there is nothing to install. Add https://mcp.oncompute.ai/mcp as a connector in Claude, Gemini, ChatGPT, Cursor, GitHub Copilot, or another MCP-compatible tool, then follow the quickstart.

</details> 

<details> <summary>What can an AI agent do with ON MCP?</summary>

Through roughly 80 tools, an agent can discover compute providers, write and validate Compute-to-Data algorithms, run free or paid jobs, manage private storage, publish datasets and algorithms, and inspect nodes and environments, all from natural-language instructions.

</details> 

<details> <summary>Which ON MCP tools run a job from start to finish?</summary>

A typical flow uses find_provider to discover providers, getComputeEnvironments to choose an environment, initializeCompute to verify live pricing without moving funds, computeStart to launch, computeStatus to monitor, and getComputeResult to retrieve outputs and logs. Run validate_algo_structure beforehand to check your algorithm against the Compute-to-Data filesystem contract.

</details> 

<details> 
  
<summary>Can ON MCP estimate my cost before I spend anything?</summary>

Yes. MCP compares providers, shows live node specifications and pricing, and walks you through the dataset, fine-tuning approach, and funding before you launch. Try a prompt such as "find an H200 node to fine-tune Llama 3 8B on my JSONL dataset."

</details> 

<details> <summary>Does ON MCP hold my funds or sign transactions?</summary>

No. ON MCP returns unsigned transactions for paid jobs, and you authorize and broadcast them from your own wallet, so your private keys stay with you. Free experiments can use an ephemeral key with no wallet.

</details> <details> <summary>How do I install and set up Ocean CLI?</summary>

[Ocean CLI](https://docs.oncompute.ai/persistent-storage/using-with-ocean-cli) runs on macOS and Linux, and Windows users can use WSL. Clone the repository, select the Node version, install dependencies, build the tool, and verify it with npm run cli -- --help. Set PRIVATE_KEY, RPC, and NODE_URL before running commands.

</details> 

<details> 
  
<summary>How do I run a paid job with Ocean CLI?</summary>

Run getComputeEnvironments to list the environments on your node, then use startCompute with the dataset DID, algorithm DID, environment ID, maximum duration, payment token address, and resources such as CPU, RAM, and disk. Add --accept true to skip the payment prompt, then use getJobStatus and downloadJobResults to monitor the job and collect your files.

</details> 

## Running a Node
<details> <summary>How do I get started as a node operator?</summary>

Install Docker and Docker Compose, open Run Node in the Dashboard, connect your wallet, fill in your configuration, download the generated docker-compose.yml, and run docker-compose up -d. The quickstart script is an alternative that guides you through your private key, admin address, networking, Compute-to-Data, GPU detection, and TLS. See the node guide for details.

</details> <details> <summary>Do I need a GPU, and which GPUs are supported?</summary>

CPU-only nodes can run, and the incentives program requires at least one eligible GPU environment. Nodes support NVIDIA GPUs (with drivers, CUDA, and the NVIDIA Container Toolkit), AMD Radeon GPUs through ROCm, and Intel Arc GPUs, and the quickstart script detects NVIDIA and AMD GPUs automatically. On Windows, run through WSL2, and share your logs with support if a benchmark cannot detect your GPU.

</details> <details> <summary>How do I set prices for my node?</summary>

In your compute environment configuration, set a per-minute price for each resource (CPU, RAM, disk, and GPU) for every chain and fee token you accept. You can also add a free tier with tighter limits so newcomers can try your hardware.

</details> <details> <summary>Can I choose who uses my node?</summary>

Yes. Each environment supports an allowlist of wallet addresses and on-chain access lists, so you can open it to everyone or limit it to approved users.

</details> <details> <summary>Can my node host inference services?</summary>

Yes. Enable Services on your Docker connection, and consumers can launch long-running containers on your environments. Services draw from the same resource pool as compute jobs, so your hardware stays fully used.

</details> <details> <summary>How do I update my node's configuration?</summary>

Edit the .env file in your node directory, then restart the deployment with docker-compose down followed by docker-compose up -d.

</details> <details> <summary>How do node operators get paid?</summary>

When a user's job completes and is verified, your node claims the exact runtime cost from that user's escrow. Your Dashboard profile shows your nodes, rewards history, and jobs.

</details> <details> <summary>Is running a node profitable?</summary>

Earnings depend on actual demand and on the prices and resources you offer. Review your environment's pricing and availability in the Dashboard, and check the current status of the incentives program before you plan around rewards.

</details>


 <details> <summary>I see "Validation failed: Validation service unavailable" when claiming COMPY. What now?</summary>

The grant validation service could not be reached. Wait a few minutes and try again, and if the message persists, contact support with a screenshot and the email you used for the claim.

</details>

##  Support & Community
<details> <summary>Where can I get help?</summary>

Join the Ocean Network Discord to chat with the team and community, or email help@oncompute.ai for direct support. Include your Peer ID, service ID, or job ID and sanitized logs to speed up the answer.

</details> <details> <summary>Where can I follow updates?</summary>

Follow @ONcompute on X for announcements, and browse the Ocean Network docs for guides and quickstarts.

</details> <details> <summary>How can I see live network activity and how many nodes are online?</summary>

The Dashboard shows network-wide stats such as total nodes, jobs, rewards, GPU popularity, and country distribution, plus a node explorer with each node's uptime and benchmark history.

</details>
----

_Next: [Glossary](glossary.md)_

_Back: [Bridges](networks/bridges.md)_


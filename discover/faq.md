---
title: FAQs
description: 
---

# FAQ

Have some questions about Ocean Protocol?

Hopefully, you'll find the answers here! If not then please don't hesitate to reach out to us on [discord](https://discord.gg/TnXjkR5) - there are no stupid questions!


## Getting Started with Ocean Network

<details> <summary>What is Ocean Network, and what is its current focus?</summary>

Ocean Network is a decentralized, peer-to-peer compute network, powered by Ocean Protocol, that connects AI compute users with independent hardware providers. You can run containerized compute jobs through the Dashboard and developer tools, and launch long-running inference sessions from the [Dashboard](https://dashboard.oncompute.ai/inference).

</details> <details> <summary>Who is Ocean Network for?</summary>

Developers, data scientists, and researchers use Ocean Network to run GPU workloads without managing servers, and hardware operators use it to offer their machines to paying users. Availability, compatibility, and earnings depend on the selected environment and actual demand.

</details> <details> <summary>How do the Dashboard, Ocean Orchestrator, Ocean CLI, and ON MCP differ?</summary>

The Dashboard is the visual interface for finding compute, launching workloads, and managing nodes. Ocean Orchestrator runs jobs from supported code editors, Ocean CLI covers terminal workflows, and ON MCP lets an AI assistant discover resources and operate compute and storage tools. Choose the one that fits how you like to work, since each one connects you to the same network.

</details> <details> <summary>How do I run my first job?</summary>

The fastest route is Ocean Orchestrator: install it in your editor, create a Python or JavaScript project, and click Run free test job. For a paid job, open the Dashboard, select a compute environment, configure your algorithm, resources, and duration, review the estimate, and authorize the payment. Follow progress in My Jobs or the Orchestrator Jobs list.

</details> <details> <summary>Can I try Ocean Network without paying?</summary>

Yes. Ocean Orchestrator offers a free test job on preset resources with no wallet needed, Ocean Network provides free CPU test environments, and some operators publish free environments to showcase their hardware. Complimentary grant credits come from a separate program, so check the claim screen in the Dashboard for current availability, eligibility, and amount.

</details> <details> <summary>What is a compute environment?</summary>

A compute environment is a node's published configuration of hardware, limits, and pricing for running compatible workloads. The Dashboard lists each environment's GPU, CPU, RAM, price, region, availability, and maximum duration so you can choose the best fit before you launch.

</details>
Running Compute Jobs
<details> <summary>What workloads can I run?</summary>

Typical jobs include embeddings, batch inference, evaluation suites, synthetic data generation, data preparation, and model fine-tuning. Package your runtime in a container and choose resources that fit the job and the permitted duration. The use-case guides walk through ready-made examples such as LLM fine-tuning, transformer foundations, unsupervised clustering, and data preprocessing. For an endpoint or app that stays online, use Inference.

</details> <details> <summary>Which editors and programming languages are supported?</summary>

Ocean Orchestrator supports VS Code, Cursor, Antigravity, and Windsurf, with built-in Python and JavaScript templates and a custom Docker image option for any other runtime. Algorithms uploaded in the Dashboard can be written in Python or Node.js.

</details> <details> <summary>How do I select a GPU and check the current price?</summary>

Browse the Dashboard catalog and filter by GPU model, CPU and RAM, price, and region, then review the cost shown for your chosen resources and duration before you confirm. Each node sets its own prices, so advertised starting prices are examples that vary from node to node.

</details> <details> <summary>What does an NVIDIA H200 offer on Ocean Network?</summary>

An H200 provides 141 GB of HBM3e memory and 4.8 TB/s of bandwidth, which gives a single GPU room for 70B-class models plus KV cache. The H200 SXM5 environment listed on the Orchestrator page includes 440 GB RAM, 40 vCPUs, and 1000 GB disk, with a starting price of $2.16 per hour on the Ocean Network homepage at the time of writing.

</details> <details> <summary>Which GPU should I choose for fine-tuning?</summary>

LoRA and QLoRA train small adapters instead of every model weight, so many large-model jobs fit on one high-memory GPU. The fine-tuning guide recommends a single H100 or H200 for decoder-only models, with runtimes of roughly 1 to 6 hours depending on your dataset.

</details> <details> <summary>What does a project contain, and where do my results go?</summary>

A project holds an algorithm file, a Dockerfile, a dependency file (requirements.txt or package.json), and a .env file whose values are passed into the container as environment variables. Write every output to ./data/outputs/ inside the container, and the runtime returns what is saved there. Orchestrator downloads results and logs into your project's results/<job-name>_<date>_<time>/ folder.

</details> <details> <summary>How do I avoid overpaying for compute?</summary>

Match GPU, CPU, RAM, disk, and duration to the job instead of reserving extra capacity. Keep your code, containers, and datasets close to the selected node to cut startup time and data movement, and review the estimate before every launch.

</details> <details> <summary>Where do I see job status, logs, and outputs?</summary>

Use My Jobs in the Dashboard, or the Jobs list and Output console in Ocean Orchestrator. Statuses include Queued, Running, Completed, Failed, and Stopped, live logs stream while the job runs, and outputs are ready to download when it completes. Click Stop job to end a running job.

</details> <details> <summary>What happens if the environment I selected is busy?</summary>

Your job waits until that node becomes available. You choose the node or environment based on resources, price limits, and availability, and the Dashboard shows current availability and maximum duration for each one, so check those details before you submit.

</details> <details> <summary>What happens if a node goes down during my job?</summary>

The job may restart on the same node when it becomes available again, and funds leave escrow only when the node marks the job successful. If your algorithm itself fails, the job is marked unsuccessful.

</details> <details> <summary>Can I use my own Docker image?</summary>

Yes. Choose the Docker Image template in Ocean Orchestrator and provide your image and tag before you start the job.

</details>
Inference & Services
<details> <summary>How is an inference session different from a compute job?</summary>

A compute job runs a task and finishes. An inference session keeps a model or AI app available over HTTP for a booked period on dedicated GPU capacity, and it ends when the paid window expires unless you extend it.

</details> <details> <summary>What can I launch through Inference?</summary>

You can pick a curated model package, configure a custom model and engine, open a bare application, or start a template with models and workflows prepared. Model flows give you an OpenAI-compatible endpoint, and applications and templates can provide a browser interface.

</details> <details> <summary>How are inference sessions billed?</summary>

The full cost is shown before launch, and your payment goes into escrow to authorize the operator to claim the booked window. Billing is time-based access to hardware rather than per-token pricing, and stopping early does not automatically refund unused session time, so book the window you need.

</details> <details> <summary>Can I extend, restart, or edit a running service?</summary>

Use Prolong session before expiry to buy more time. Restart or Edit rebuilds an unexpired service while keeping its ID, endpoint, and paid window, and changing hardware needs a new launch. After a session expires, start a new service.

</details> <details> <summary>What should I do if my service fails to start or ends earlier than I booked?</summary>

Payment is claimed only after the image is ready and the container is created, so a failure before that point cancels the escrow lock. If a service times out, ends early, or still shows locked funds, contact support with the service ID, the node name, and your logs so the team can investigate.

</details> <details> <summary>Why can a service or template disappear from the catalog?</summary>

Operators publish their own service templates and can update or withdraw them at any time without restarting the node. Check the selected operator's current offering before you pay, and choose another operator if a template you used earlier is no longer listed.

</details>
Pricing, Payments & Credits
<details> <summary>How are batch compute jobs priced?</summary>

Each node prices CPU, RAM, disk, and GPU per minute, and the Dashboard shows an estimate before launch. A job that finishes early stops the meter, so you pay for the runtime you use rather than a full hour or a long-term reservation. Confirm the quoted units and conditions for each run.

</details> <details> <summary>Which network and payment tokens does Ocean Network use?</summary>

Payments run on Base, an Ethereum Layer 2 with low fees and native USDC. Use USDC or COMPY where the selected environment offers them, and check the fee token and network before you authorize.

</details> <details> <summary>How do I sign in, and do I need a browser wallet?</summary>

Sign in with email, Google, or a passkey to use an embedded Smart Wallet, or connect your own wallet. Smart Wallets work without a browser extension such as MetaMask.

</details> <details> <summary>How do I get USDC on Base?</summary>

If you signed in with email, Google, or a passkey, open My account → Top up (or the top-up link on the payment screen) to buy USDC with a card. With an external wallet, send USDC from Coinbase directly to your Base address, or move funds with the Base Bridge or Superbridge.

</details> <details> <summary>What is escrow, and how does payment work?</summary>

Escrow is the smart contract that holds your deposited tokens. Your budget is locked before a job starts, and once completion is verified the exact runtime cost is released to the node while the remaining balance returns to your wallet. Check your available and locked funds before you withdraw, since an active job or session reserves funds, and use the Dashboard escrow page or Ocean CLI to withdraw the rest.

</details> <details> <summary>What is COMPY, and how do I claim it?</summary>

COMPY is the token offered through Ocean Network's grant flow and accepted for compute payment by supported environments. Open Claim grant tokens in the Dashboard profile menu, complete the form, verify your email with the six-digit code (valid for 10 minutes), review your eligibility and amount, and submit the claim transaction on Base. See the claim guide for the full walkthrough, and use My account → Get COMPY to swap USDC for more.

</details> <details> <summary>Can I claim the same COMPY grant again?</summary>

The Claim grant tokens option appears only before a grant has been claimed and disappears afterward, so each grant is claimed once. A new campaign or extra allocation comes with its own announcement from the team.

</details> <details> <summary>Why are environments greyed out when I filter by COMPY?</summary>

The Dashboard greys out an environment when your wallet is not on its paid compute access list or when compute jobs are not enabled on it. Pick another environment, or ask the operator to add your wallet address to the access list.

</details>
Storage & Data
<details> <summary>How can I keep files between runs?</summary>

Create a persistent-storage bucket on your chosen node, upload your files, and mount them into later jobs so you can skip re-uploading for every run. A bucket lives on one node and is not replicated across providers, so keep copies of any results you need to keep.

</details> <details> <summary>How do I use stored files inside a job?</summary>

Mount the files you want in the Configure Job panel, and they appear read-only inside your container at /data/persistentStorage/<bucketId>/<fileName>. You can mount files from several buckets in the same job. In Ocean Orchestrator, connect through the Dashboard first, because the Storage panel unlocks once you have a wallet, network, and signed session.

</details> <details> <summary>How do I share a bucket with other people or agents?</summary>

Attach an ERC-721 soulbound access-list contract when you create the bucket, and every wallet holding a token from that contract can upload, list, and delete files in it. Decide on sharing at creation time, because an access list cannot be added afterward, and a bucket without one stays owner-only. The same setup lets several AI agents share one bucket for memory and coordination.

</details> <details> <summary>Can my job write results straight to storage?</summary>

Yes. Set a bucket as your output bucket in Ocean Orchestrator, and the job writes results into it instead of returning a local archive, ready to mount into your next job.

</details>
Privacy & Trust
<details> <summary>What is Compute-to-Data?</summary>

Compute-to-Data (C2D) runs code in an isolated container near the data and returns only the outputs designated for the consumer. Ocean Orchestrator uses this pattern for every job it submits.

</details> <details> <summary>Are my inputs and inference endpoints private?</summary>

A node operator can see the data and traffic processed on their machine, so assess the operator before you send sensitive data. Inference environment variables are encrypted in transit and decrypted by the node, and current endpoints have no built-in authentication, so treat each endpoint URL as a secret and add your own authentication for anything sensitive.

</details> <details> <summary>How are jobs isolated on a node?</summary>

Every job runs in its own container with resources allocated per job, and each GPU serves one job at a time. The container is torn down when the job finishes.

</details> <details> <summary>How does Ocean Enterprise Collective relate to Ocean Network?</summary>

Ocean Enterprise Collective e.V. is a separate nonprofit association supporting Ocean Enterprise data-space software and governance, and its Compute-to-Data approach lets approved computation run where data is held. Assess enterprise deployment controls in that context, and apply the operator guidance above to public Ocean Network sessions.

</details>
Developer Tools
<details> <summary>How do I connect ON MCP to my AI assistant?</summary>

ON MCP is a hosted Model Context Protocol server, so there is nothing to install. Add https://mcp.oncompute.ai/mcp as a connector in Claude, Gemini, ChatGPT, Cursor, GitHub Copilot, or another MCP-compatible tool, then follow the quickstart.

</details> <details> <summary>What can an AI agent do with ON MCP?</summary>

Through roughly 80 tools, an agent can discover compute providers, write and validate Compute-to-Data algorithms, run free or paid jobs, manage private storage, publish datasets and algorithms, and inspect nodes and environments, all from natural-language instructions.

</details> <details> <summary>Which ON MCP tools run a job from start to finish?</summary>

A typical flow uses find_provider to discover providers, getComputeEnvironments to choose an environment, initializeCompute to verify live pricing without moving funds, computeStart to launch, computeStatus to monitor, and getComputeResult to retrieve outputs and logs. Run validate_algo_structure beforehand to check your algorithm against the Compute-to-Data filesystem contract.

</details> <details> <summary>Can ON MCP estimate my cost before I spend anything?</summary>

Yes. MCP compares providers, shows live node specifications and pricing, and walks you through the dataset, fine-tuning approach, and funding before you launch. Try a prompt such as "find an H200 node to fine-tune Llama 3 8B on my JSONL dataset."

</details> <details> <summary>Does ON MCP hold my funds or sign transactions?</summary>

No. ON MCP returns unsigned transactions for paid jobs, and you authorize and broadcast them from your own wallet, so your private keys stay with you. Free experiments can use an ephemeral key with no wallet.

</details> <details> <summary>How do I install and set up Ocean CLI?</summary>

Ocean CLI runs on macOS and Linux, and Windows users can use WSL. Clone the repository, select the Node version, install dependencies, build the tool, and verify it with npm run cli -- --help. Set PRIVATE_KEY, RPC, and NODE_URL before running commands.

</details> <details> <summary>How do I run a paid job with Ocean CLI?</summary>

Run getComputeEnvironments to list the environments on your node, then use startCompute with the dataset DID, algorithm DID, environment ID, maximum duration, payment token address, and resources such as CPU, RAM, and disk. Add --accept true to skip the payment prompt, then use getJobStatus and downloadJobResults to monitor the job and collect your files.

</details> <details> <summary>How do I publish a dataset or algorithm?</summary>

Run npm run cli publish metadata/my-dataset.json for a dataset and npm run cli publishAlgo metadata/my-algorithm.json for an algorithm. Use allowAlgo with the dataset and algorithm DIDs to control which algorithms can run on your dataset.

</details>
Running a Node
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
Incentives & Benchmarks
<details> <summary>Is the incentives program running right now?</summary>

Benchmark rounds and reward distributions have been paused at times, and the team announces when they resume. Check the Discord announcements and @ONcompute on X for the latest status and timeline before you plan around rewards.

</details> <details> <summary>What makes a node eligible for benchmark jobs?</summary>

The current checks cover these requirements:

A public IP with P2P reachability (relay-only connectivity is not accepted)
Node version 3.0.6 or later
Base escrow configuration
A GPU compute environment on Base (chain ID 8453) that accepts Base USDC, with total prices of at most 1 USDC per minute
The monitoring wallet on the environment's allowlist
A current-epoch benchmark success rate of at least 50% where history exists

Your eligibility record must also have refreshed within the last hour. Set ENABLE_BENCHMARK=true to let the node configure Base and USDC, the GPU fee, the monitoring access list, and resource detection for you. See the incentives guide for the full rules.

</details> <details> <summary>How are benchmarks scored?</summary>

Each node runs three tests inside one compute job capped at three minutes. The composite score weights GPU performance at 70%, CPU at 20%, and bandwidth at 10%. A benchmark fails if it times out, if the result archive cannot be downloaded, or if Merkle proof verification fails.

</details> <details> <summary>How do epochs, suspensions, and unbanning work?</summary>

An epoch is a seven-day period running from Thursday to Thursday. Three consecutive monitoring failures trigger a suspension that starts at four hours, doubles with each additional failure, and tops out at seven days. A banned node can request an unban: passing lifts the ban, and failing keeps the node banned until the next epoch. Ask support if you need another attempt within the same epoch.

</details> <details> <summary>Why haven't I received benchmark jobs, and can I trigger one?</summary>

Jobs go to nodes with an eligibility record refreshed in the last hour, scheduling is randomized within budgets, and a busy node waits for its turn. Review your eligibility and job history in Node Details to confirm every check passes, since an immediate job is not guaranteed.

</details> <details> <summary>Why does my node show as disconnected or not verified?</summary>

Open Node Details in the Dashboard and review connectivity, version, eligibility, and benchmark history one by one, since an online status only confirms the node is reachable. New nodes can take a while to appear on the leaderboard. If the cause stays unclear, send your Peer ID and sanitized diagnostics to support.

</details>
Troubleshooting
<details> <summary>What should I do about "Not enough available CPU"?</summary>

The selected environment is at capacity right now. Compare your requested allocation with the free CPU and per-job limits, then reduce it, try another node or environment, switch GPU type if your workload allows it, or wait for running jobs to finish. If an environment still shows this error while advertising free capacity, report the environment ID and sanitized logs to support.

</details> <details> <summary>How do I investigate a "P2P: Error advertising DDO: TimeoutError"?</summary>

Confirm your node runs on a public IP, the P2P port is open, and the node announces its public address instead of a local or relay one. Then inspect your networking and logs, and share your Peer ID and sanitized diagnostics with support if the error continues.

</details> <details> <summary>What should I check if my node container exits immediately?</summary>

Confirm that PRIVATE_KEY starts with 0x, that the configured port is free, and that the database container is healthy. For a database retrieve error, check the Typesense or Elasticsearch container's health and the network connection between it and the node container.

</details> <details> <summary>What should I check if my node does not detect a GPU?</summary>

Verify your GPU drivers and CUDA, install the NVIDIA Container Toolkit if you use Docker, and inspect DOCKER_COMPUTE_ENVIRONMENTS for a manual override that replaces auto-detection.

</details> <details> <summary>How do I fix "No valid escrow auths found" or "no valid escrow" errors?</summary>

Double-check the escrow address configuration on Base and the compute environment settings on the affected node. The monitoring system needs a valid Base escrow configuration, and nodes that fail eligibility checks can be skipped or fail to receive jobs.

</details> <details> <summary>The escrow payment step is stuck, or the Manage Escrow page will not load. What can I try?</summary>

Clear the cache inside your wallet app's settings, reconnect to the Dashboard, and sign in again when prompted. Browser cache clearing alone may leave the wallet connection active. Contact support if the page still does not load.

</details> <details> <summary>I see "Validation failed: Validation service unavailable" when claiming COMPY. What now?</summary>

The grant validation service could not be reached. Wait a few minutes and try again, and if the message persists, contact support with a screenshot and the email you used for the claim.

</details>
Support & Community
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


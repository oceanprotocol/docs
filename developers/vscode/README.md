# Ocean Orchestrator

Run affordable GPU AI jobs from your editor with a one-click workflow and pay-per-use pricing. Ocean Orchestrator lets you submit a containerized compute job to remote nodes on Ocean Network, monitor it, and automatically pull the results back. Open a project, click Run job, and your outputs land in your results folder.

Ocean Orchestrator uses Ocean Compute-to-Data (C2D), so your job runs in an isolated container near the data and only the outputs are returned. This gives you a low-friction way to run batch jobs without spinning up or managing servers.

Ocean Network coordinates those remote runs across a distributed set of GPU nodes, handling orchestration behind the scenes so pay-per-use compute jobs stay usable even as more nodes and workloads join.

Ocean Orchestrator works in VS Code, Cursor, Antigravity, and Windsurf.. You can install the extension from [here](https://marketplace.visualstudio.com/items?itemName=OceanProtocol.ocean-protocol-vscode-extension#:~:text=Run%20compute%20jobs%20on%20Ocean%20Protocol%20directly%20from,or%20javascript%20file%20and%20click%20Start%20Compute%20Job.)


<figure><img src="https://github.com/oceanprotocol/vscode-extension/raw/main/screenshots/main-screenshot.png" alt="Ocean Protocol VSCode Extension">

## Features

1) One-Click Job Runs: Run a job without spinning up servers. Create a project, press Run job, and receive the outputs in your folder. Python and JavaScript projects are supported, with built-in templates and dependencies.

2) Pay Per Use Compute: Start with free compute for quick tests, then switch to paid compute jobs when you need more resources.

3) Compute-to-Data: Your code runs in an isolated container, and only results are returned, so your data stays sealed.

4) Remote AI Compute: Run embeddings, inference, data cleanup, batch processing, and other containerized workloads without provisioning servers.

5) Real-Time Monitoring: Track job status and view logs directly in your editor through the Output console.

6) Automatic Results Retrieval: Outputs and logs are saved to your results folder as soon as the job completes.

## Getting Started

1) Install: Install Ocean Orchestrator from your editor's extension marketplace (VS Code, Cursor, Antigravity, or Windsurf). If your editor does not support the VS Code Marketplace, use the Open VSX listing.

2) Open the panel: Click the Ocean icon in the Activity Bar to open the Ocean Orchestrator panel.

3) Create a project by creating a new project folder. Choose a parent directory and name your project (default: new-compute-job).

4) Explore the project structure: Algorithm file (.py or .js), Dockerfile with the environment setup, Dependencies file (requirements.txt or package.json)
.env secrets file, whose contents are passed into the container as environment variables

5) Run: Click Run job. See Running a Job for the free and paid paths.

6) Monitor: Watch job status and real-time logs in the Output console.

7) Get your results: Check outputs and logs in your project's results/<job-name>_<date>_<time>/ folder.

8) Watch our step-by-step workshop on using the Ocean Protocol VSCode Extension: [Ocean VS code extension - Discord Algorithm Workshop](https://youtu.be/be5uq4nnZTU?si=slTr4NRAJOCqJtmk)

### Requirements

VS Code 1.96.0 or higher

## Running a Job


A) Free run: Free jobs run on the default public node with preset resources, and no wallet is required. They are a good way to test your code before spending tokens.

1) Create a new project folder or select an existing one.

2) Review your algorithm, Dockerfile, and dependencies.

3) Optionally set a job name. A friendly name like swift-falcon is generated automatically.

4) Click Run free test job. The job appears pinned at the top of the Jobs list with a live status badge and timer.

5) Watch real-time logs stream into the Output console.

6)When the job completes, select it in the Jobs list and click Download results.

B) Paid run: Paid environments and resources live on the Ocean Network dashboard, where you can browse the catalog of nodes and environments (for example NVIDIA H100, A100, and H200). Your token balance is under My Profile on the dashboard.

1) Click Connect for paid environments ↗ in the sidebar, or start the connection from the dashboard. The dashboard sends the extension a deep link that configures your wallet, node, environment, fee token, resources, and duration. The sidebar switches to paid mode and persistent storage unlocks.

2) Optionally click Configure ⚙ to refine the environment, resources, GPUs, dataset, and duration in the Configure Job panel.

3) Fund your escrow. Paid jobs are paid from an escrow balance:

- Deposit: If your escrow balance is below the estimated cost, click Add funds in the environment card or the Configure Job panel. It opens the dashboard escrow page, where you deposit the missing amount.

- Authorize: If you haven't yet authorized the node to spend your escrowed tokens, the dashboard prompts you to sign an authorization transaction.

4) Click Run job in the sidebar: Once the job is running, check the logs for GPU activity if you selected a GPU, or confirm CPU-only execution otherwise.

5) Your algorithm must write all outputs to ./data/outputs/ inside the container. The runtime mounts this path and returns only what is written there.



Paid jobs are charged per run, based on the selected resources, GPUs, duration, and environment. Free jobs use minimal preset resources on the default public node and require no payment.

## Troubleshooting

1) Job cannot start: Check the node connection state in the sidebar status line. For paid jobs, confirm that an environment is selected in the Configure Job panel.

2) Not enough funds or insufficient escrow: Run a free job instead, or use Add funds in the Configure Job panel to top up your escrow balance.

3) Storage is locked: Persistent storage is available after you connect through the Ocean Network dashboard. Use the Open dashboard button in the Storage panel.

4) General issues: Check the logs in the Output console. Logs are also saved in your project folder under results/<job-name>_<date>_<time>/logs/.

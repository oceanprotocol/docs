---
title: FAQs
---

# FAQ - to be updated

Have some questions about Ocean Protocol?

Hopefully, you'll find the answers here! If not then please don't hesitate to reach out to us on [discord](https://discord.gg/TnXjkR5) - there are no stupid questions!

## General

<details>

<summary>How is Ocean Protocol related to AI?</summary>

Modern Artificial Intelligence (AI) models require vast amounts of training data.

In fact, _every stage_ in the AI modeling life cycle is about data: raw training data -> cleaned data -> feature vectors -> trained models -> model predictions.

Ocean's all about managing data: getting it, sharing it, selling it, and making $ from it -- all with Web3 benefits like decentralized control, data provenance, privacy, sovereign control, and more.

Thus, Ocean helps manage data all along the AI model life cycle:

* Ocean helps with raw training data
* Ocean helps with cleaned data & feature vectors
* Ocean helps with trained models as data
* Ocean helps with model predictions as data

A great example is [Ocean Predictoor](../predictoor/), where user make $ from their model predictions in a decentralized, private fashion.

</details>

<details>

<summary>How is Ocean Protocol aiming to start a new Data Economy?</summary>

Ocean Protocol's mission is to develop tools and services that facilitate the emergence of a new Data Economy. This new economy aims to empower data owners with control, maintain privacy, and catalyze the commercialization of data, including the establishment of data marketplaces.

To understand more about Ocean's vision, check out this [blog post](https://blog.oceanprotocol.com/mission-values-for-ocean-protocol-aba998e95b8).

</details>

<details>

<summary>How does Ocean Protocol generate revenue?</summary>

The protocol generates revenue through transaction fees. These fees serve multiple purposes: they fund the ongoing development of Ocean technology and support the buy-and-burn process of the OCEAN.

To get a glimpse of the revenue generated on the Polygon network, which is the most frequently used network, you can find detailed information [here](https://polygonscan.com/address/0x042BFbd88c3998282153088604207b2AeF045b43#tokentxns).

To monitor burned tokens, visit [etherscan](https://etherscan.io/token/0x967da4048cd07ab37855c090aaf366e4ce1b9f48?a=0x000000000000000000000000000000000000dead). As of September 2023, approximately 1.4 million tokens have been burned. 🔥📈

</details>

<details>

<summary>How decentralized is Ocean?</summary>

To be fully decentralized means no single point of control, at any level of the stack.

* OCEAN is already fully decentralized.
* The Ocean core tech stack is already fully decentralized too: smart contracts on permissionless chains, and anyone can run support middleware.
* Predictoor is fully decentralized.
* Data Farming has some centralized components; we aim to decentralize those in the next 12-24 months. ⁣

</details>

## About OCEAN

<details>

<summary>What is ASI token and what it's major usecase?</summary>

In late March, Ocean Protocol, Singularity NET & Fetch.ai joined forces to form Superintelligence Alliance and announced a token merger, combining OCEAN, FET,& AGIX into a single ASI. ASI token will fund the Superintelligence Alliance's mission to build decentralized Artificial Superintelligence (ASI) for the benefit of humanity. We're focused on developing decentralized AI tools for today's business and retail applications, while also securing decentralized compute power for the future of AI.

</details>

<details>

<summary>How is OCEAN used? How does it capture value?</summary>

OCEAN token major usage is currently in Predictoor DF i.e. rewarding Predictoors who perform predictions on DeFi token price feeds to predict the price directions of Defi token feeds. To know more about this, navigate [here](https://docs.oceanprotocol.com/data-farming)

</details>

<details>

<summary>What is the total supply of OCEAN?</summary>

1.41 Billion OCEAN.

</details>

<details>

<summary>Can OCEAN supply become deflationary?</summary>

A portion of the revenue earned in the Ocean ecosystem is earmarked for buy-and-burn. If the transaction volume on Ocean reaches scale and is broadly adopted to the point where the buy-burn mechanism outruns the emissions of OCEAN, the supply would deflate.

</details>

<details>

<summary>Does OCEAN also have governance functionality?</summary>

During the OceanDAO grants program (2021-2022), OCEAN was used for community voting and governance. Currently, there are no governance functions associated with the token.

</details>

<details>

<summary>Which blockchain network currently has the highest liquidity for OCEAN?</summary>

Ethereum mainnet.

</details>

<details>

<summary>Can the Ocean tech stack be used without OCEAN?</summary>

All Ocean modules and components are open-source and freely available to the community. Developers can change the default currency from OCEAN to a different one for their dApp.

</details>

<details>

<summary>How does the ecosystem and the token benefit from the usage of the open-source tech stack when transactions can be paid in any currency?</summary>

For each consume transaction, the Ocean community gets a small fee. This happens whether OCEAN is used or not. [Here are details](../developers/contracts/fees.md).

</details>

## Ocean Nodes

<details>

<summary>What are Ocean Nodes?</summary>

Ocean Nodes is a decentralized solution that simplifies running and monetizing AI models by allowing users to manage data, computational resources, and AI models through Ocean Protocol's infrastructure, enabling easier and more secure data sharing and decentralized AI model development. Learn more [here](https://docs.oceanprotocol.com/developers/ocean-node).

</details>

<details>

<summary>What are the minimum requirements to run a node? Can it be run on a phone or other small devices?</summary>

We recommend the following minimum system requirements for running one Ocean node, though these may vary depending on your configuration:\
\- 1 vCPU\
\- 2 GB RAM for basic operations\
\- 4 GB storage\
\- Operating System: We recommend using the latest LTS version of Ubuntu or the latest iOS. However, nodes should also work on other operating systems, including Windows.

While it is technically feasible to run a node on smaller devices, such as phones, the limited processing power and memory of these devices can lead to significant performance issues, making them unreliable for stable node operation.

</details>

<details>

<summary>Can I run a node using Windows or macOS, and are there any recommended guides for those operating systems?</summary>

Yes, you can run an Ocean node on both Windows and macOS.

For Windows, it's recommended to use WSL2 (Windows Subsystem for Linux) to create a Linux environment, as it works better with Docker. Once WSL2 is set up, you can follow the Linux installation guides. Here’s a [helpful link](https://techcommunity.microsoft.com/t5/windows-11/how-to-install-the-linux-windows-subsystem-in-windows-11/m-p/2701207) to get started with WSL2

For macOS, you can install Docker directly and run the Docker image. It’s also recommended to use Homebrew to install necessary dependencies like Node.js.

For a detailed setup guide, refer to the [OceanNode GitHub Repository](https://github.com/oceanprotocol/ocean-node).

</details>

<details>

<summary>Is there a maximum number of nodes allowed, and are there rules against running multiple nodes on the same IP?</summary>

There’s no limit to the number of nodes you can run, however there are a few guidelines to keep in mind. You can run multiple nodes on the same IP address, as long as each node is using a different port.

</details>

<details>

<summary>How long does it take for a new node to appear in the dashboard?</summary>

The time it takes for a new node to appear on the dashboard depends on the system load. Typically, nodes become visible within a few hours, though this can vary based on network conditions.

</details>

<details>

<summary>How can I verify that my node is running successfully?</summary>

To verify your node is running properly, follow these steps:

1. Check the Local Dashboard: Go to http://your\_ip:8000/dashboard to view the status of your node, including connected peers and the indexer status.
2. Verify on the Ocean Node Dashboard: After a few hours, visit the [Ocean Node Dashboard](https://nodes.oceanprotocol.com/) and search for your Node ID, Wallet, or IP to confirm your node is correctly configured and visible on the network.

</details>

<details>

<summary>Are there penalties if my node goes offline?</summary>

If your node goes offline, it won't be treated as a new node when you restart it - the timer will pick up from where it left off. However, frequent disconnections can impact your eligibility and uptime metrics, which are important for earning rewards. To qualify for rewards, your node must maintain at least 90% uptime. For example, in a week (10,080 minutes), your node needs to be active for at least 9,072 minutes. If your node is down for more than 16 hours and 48 minutes in a week, it will not be eligible for rewards.

</details>

<details>

<summary>How many nodes a user can run using a single wallet or on a single server?</summary>

Each node needs its own wallet - one node per wallet. You can use an Admin wallet to manage multiple nodes, but it’s not recommended to use the same private key for multiple nodes. Since the node ID is derived from the private key, using the same key for different nodes may cause issues.

You can run as many nodes on a server as its resources allow, depending on the server’s capacity.

</details>

<details>

<summary>Why does my node show “Reward Eligibility: false” and “No peer data” even though it is connected?</summary>

Your node may show "Reward Eligibility: false" and "No peer data" even when connected, and this may be for a few reasons:

1. Random Round Checks: The node status may change due to random round checks. If your node is unreachable during one of these checks, it could trigger these messages.
2. Configuration Issues: Misconfigurations, like an incorrect P2P\_ANNOUNCE\_ADDRESS, can impact communication. Ensure your settings are correct.
3. Port Accessibility: Make sure the required ports are open and accessible for your node to operate properly.

</details>

<details>

<summary>How do I backup or migrate my node to a new server without losing uptime?</summary>

To back up or migrate your node without losing uptime, follow these steps:

1. Run a Parallel Node: Start a new node on the new VPS while keeping the old one active. This ensures uninterrupted uptime during migration.
2. Use the Same Private Key: Configure the new node with the same private key as the old one. This will retain the same node ID and ensure continuity in uptime and rewards eligibility.
3. Update Configuration: Update the new node's configuration, including the announce\_address in the Docker YAML file, to reflect the new IP address.
4. Verify on the Dashboard: Check the [Ocean Node Dashboard](https://nodes.oceanprotocol.com/) to confirm that the new node is recognized and that the IP address has been correctly updated.

</details>

<details>

<summary>How do I resolve the "No peer data" issue that affects node eligibility?</summary>

It's normal for a node's status to change automatically from time to time due to random round checks conducted on each node. If a node is unreachable during a check, the system will display the reason on the dashboard.

To resolve the "No peer data" issue, consider the following steps:

1. Restart Your Node: This simple action has been helpful for some users facing similar issues.
2. Check Configuration:\
   a) Ensure that your P2P\_ANNOUNCE\_ADDRESS is configured correctly.\
   b) Verify that the necessary ports are open.
3. Local Dashboard Access: Confirm that you can access your node from the local dashboard by visiting http://your\_ip:8000/dashboard.

</details>

<details>

<summary>Do I need to open all ports to the outside world (e.g., 9000-9003, 8000)?</summary>

It's not necessary to open all ports; typically, opening port 8000 is sufficient for most operations. However, if you are running services that require additional ports - such as ports 9000-9003 for P2P connections - you may need to open those based on your specific setup and requirements.

</details>

<details>

<summary>How is the node's reward calculated, and will my income depend on the server's capacity?</summary>

The rewards for Ocean nodes are mainly determined by your node's uptime. Nodes that maintain an uptime of 90% or higher qualify for rewards from a substantial reward pool of 250,000 ROSE per epoch. Your income is not affected by the server's capacity; it relies solely on the reliability and uptime of your node.

</details>

<details>

<summary>What are the rewards for running a node, and how is the distribution handled?</summary>

Rewards for running a node are 360,000 ROSE per epoch and are automatically sent to your wallet if you meet all the requirements. These rewards are distributed in ROSE tokens within the Oasis Sapphire network.

</details>

<details>

<summary>Does my node's hardware setup (CPU, RAM, storage) impact the rewards I receive?</summary>

Your node's hardware setup - CPU, RAM, and storage - does not directly influence your rewards. The primary factor for receiving rewards is your node's uptime. As long as your node meets the minimum system requirements (90% node uptime) and maintains high availability, you remain eligible for rewards. Rewards are based on uptime rather than hardware specifications.

</details>

## Grants, challenges, and ecosystem

<details>

<summary>Is Acentrik from Mercedes Benz built on top of Ocean?</summary>

3rd party markets such as Gaia-X, BDP and Acentrik use Ocean components to power their marketplace. They will likely use another currency for the exchange of services. If these marketplaces are publicly accessible, indexable and abide by the fee structure set out by Ocean Protocol, transaction fees would be remitted back to the Ocean community. These transaction fees would be allocated according to plan set out [here](https://blog.oceanprotocol.com/ocean-token-model-3e4e7af210f9).

</details>

<details>

<summary>What is Ocean Shipyard?</summary>

Ocean Shipyard is an early-stage grant program established to fund the next generation of Web3 dApps built on Ocean Protocol. It is made for entrepreneurs looking to build Web3 solutions on Ocean, make valuable data available, build innovations, and create value for the Ocean ecosystem.

The [Shipyard page](https://oceanprotocol.com/shipyard) has details.

</details>

<details>

<summary>Where can we see previous data challenges and submitted solutions?</summary>

You can find a list of past data challenges on the [website](https://oceanprotocol.com/challenges).

</details>

<details>

<summary>What are the steps needed to encourage people to use the Ocean ecosystem?</summary>

There are a wide host of technical, business, and cultural barriers to overcome before volume sales can scale. Blockchain and crypto technology are relatively new and adopted by a niche group of enthusiasts. On top, the concept of a Data Economy is still nascent. Data buyers are generally restricted to data scientists, researchers, or large corporations, while data providers are mainly corporations and government entities. The commercialization of data is still novel and the processes are being developed and refined.

</details>

## Data security

<details>

<summary>Is my data secure?</summary>

Yes. Ocean Protocol understands that some data is too sensitive to be shared — potentially due to GDPR or other reasons. For these types of datasets, we offer a unique service called [compute-to-data](../developers/compute-to-data/). This enables you to monetize the dataset that sits behind a firewall without ever revealing the raw data to the consumer. For example, researchers and data scientists pay to run their algorithms on the data set, and the computation is performed behind a firewall; all the researchers or data scientists receive is the results generated by their algorithm.

</details>

<details>

<summary>How does Ocean Protocol enforce penalties if data is shared without permission?</summary>

Determining whether someone has downloaded your data and is reselling it is quite challenging. While they are bound by a contract not to do so, it's practically impossible to monitor their actions. If you want to maintain the privacy of your dataset, you can explore the option of using compute-to-data(C2D). Via C2D your data remains private and people can only run algorithms(that you approve of) to extract intelligence.

This issue is similar to what any digital distribution platform faces. For instance, can Netflix prevent individuals from downloading and redistributing their content? Not entirely. They invest significant resources in security, but ultimately, complete prevention is extremely difficult. They mainly focus on making it more challenging for such activities to occur.

</details>

## Data marketplaces & Ocean Market

<details>

<summary>What is a decentralized data marketplace?</summary>

A data marketplace allows providers to publish data and buyers to consume data.

Unlike centralized data marketplaces, decentralized ones give users more control over their data and algorithms by minimizing custodianship and providing transparent and immutable records of every transaction.

Ocean Market is a reference decentralized data marketplace powered by Ocean stack.

Ocean Compute-to-Data (C2D) enables data and algorithms can be ingested into secure Docker containers where escapes are avoided, protecting both the data and algorithms. C2D can be used from Ocean Market.

</details>

<details>

<summary>Is there a website or platform that tracks the consume volume of Ocean Market?</summary>

Yes. See [autobotocean.com](https://autobotocean.com/).

</details>

<details>

<summary>Since Ocean Market is open source, what are the future plans for the project in terms of its economic direction?</summary>

Ocean Market is a showcase for the practical application of Ocean, showing others what a decentralized data marketplace look like.

Fees are generated Ocean Market from Ocean Market that head to Ocean community. The earlier Q\&A on revenue has details.

</details>

## Contacting Ocean core team

<details>

<summary>Who is the right person to talk to regarding a marketing proposal or collaboration?</summary>

For collaborations, please fill in this [form](https://docs.google.com/forms/d/e/1FAIpQLSdBz7cblsz5yuOKMVoPVfK0Pp1Xuqjwner1kCkRibIIbYMe-w/viewform).\
One member of our team will reach out to you 🤝

</details>

***

_Next:_ [_Glossary_](glossary.md)

_Back:_ [_Bridges_](networks/bridges.md)

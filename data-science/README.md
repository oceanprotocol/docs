---
description: Data Science
cover: ../.gitbook/assets/cover/data_science.png
coverY: 0
---

# 📊 Data Science

Ocean Protocol was built for a world running on data and AI in mind. At the base, Ocean Protocol is a neutral registry to act as a standard for ownership and access control across storage and compute providers for all types of digital assets and services. Providing a standard allows developers to focus on building the best product possible instead of proprietary methods for access control. The tools and libraries built on top of Ocean act as an operating system for interacting with this registry of assets. By choosing to build this protocol on top of crypto rails while leveraging standards such as wallets, ERC20s, and NFTs, Ocean Protocol inherits numerous benefits the natural benefits of blockchains and the innovation of the DeFi world. Some of those benefits are explained in more detail below. Together, they ensure Ocean Protocol is the best option for data scientists and data engineers to build and distribute their work around the world, while also easily allowing one to turn a simple project into a full-fledged business. \


* Privacy-preserving data sharing
  * There is an enormous amount of data in the world that can be used to build powerful analytics workflows and models for many tasks. While many companies and individuals can benefit from these insights, while also gaining an additional revenue stream with direct data monetization, current data privacy concerns with access to that data means that most of it is stuck inside data siloes. Ocean Protocol’s Compute-to-Data engine resolves the tradeoff between data openness and data privacy. Data publishers can publish their assets on Ocean, but make it so that only computation can be run on the dataset instead of downloading it. Data publishers can allow third parties to train models and generate insights from their data, without the underlying data itself being exposed. This unlocks a new revenue stream for businesses. While also making it possible to utilize third party data science talent for their internal needs without having to onboard them to the company. In addition, the C2D engine reduces the MLOps workload for data scientists. One of the largest pain points for data scientists is deploying their models into production. Many data scientists don’t possess the skill set to interact with cloud computing providers to run their models or simply don’t enjoy this part of the process. Ocean Protocol’s Compute-to-Data engine provides a way for data scientists to deploy their models without worrying about this MLOps work. Users simply need to create a docker image around their published models and algorithms to ensure they can be run with the C2D engine. For more information, check out our [Compute-to-Data section](../developers/compute-to-data/).



* Fine-grained access control
  * Access control is one of the most important parts of data sharing. Ocean Protocol is a standard for managing access control across various storage providers. Publishers can add the credentials for accessing their data assets directly into the assets they list on Ocean. Publishers can also utilize a fine-grained allow list for whitelisting only specific wallets are able to purchase their assets. The fine-grained access control of Ocean Protocol makes it easier for data publishers to interact with each others assets across different storage providers while ensuring only those they want to share the data with can access it. They can also ensure only whitelisted algorithms from trusted parties are allowed to run any computation on their data. To learn more, check out our [fine-grained access control section.](../developers/Fine-Grained-Permissions.md)\

* Crypto-native Payments
  * Utilizing Ocean Protocol contracts for payment processing brings numerous benefits compared to the traditional financial system. One major advantage is the significantly lower transaction fees, ranging from 0.1% to 0.2% per transaction, which can be a major reduction compared to the 2-6% typically associated with traditional financial systems. Another key benefit is the instant settlement feature nature of crypto. Payments are processed immediately, ensuring that funds are readily available for immediate use. This eliminates the usual wait of several days associated with traditional systems and avoids any additional charges that may arise from delayed settlements. This instant settlement also provides a zero counterparty risk environment. With the absence of chargebacks, businesses can enjoy greater stability in their revenue streams. This feature provides assurance and peace of mind, eliminating the concerns associated with potential payment reversals. Moreover, users can transact with each other with far greater ease across borders. Users can use any ERC20 token to transact, such as OCEAN or USDC. This provides a standard for selling products around the world. To learn more, check out our our [asset pricing](../developers/asset-pricing.md) and [contracts ](../developers/contracts/)sections.\

*   Provenance of data

    * One of the most important parts of building a good data science product is a strong understanding the context of how a dataset was created. With greater provenance, data scientists can be more confident in the data they are using. In web2 systems, this typically requires either having to learn to pull data from proprietary systems or paying for specialty software that passively monitors data pipelines. Ocean Protocol leverages the natural abilities of blockchains to provide an enhanced audit trail. For any given compute or data asset, anyone can query the chain to understand when and who published it, any metadata changes, and what compute jobs were used to create the asset. As more and more of the data pipeline metadata gets pushed on-chain, data scientists and engineers will be able to leverage the best system for data provenance possible to build greater trust in their data. To learn more, check out our [Subgraph section](../developers/subgraph/).


* Verified usage statistics
  * Receiving any product information from web2 platforms requires using their API and trusting all of the data that the company wants to provide. Their API may not contain all of the information a user might want, and schema changes and rate limits may make receiving information difficult. With Ocean Protocol, anyone can leverage composable subgraphs to receive rich information about their products. They can know exactly who accessed their asset, when, total revenue, and more. The verified access statistics help both data publishers and data consumers. Data publishers can create powerful customer analytics by building data models that incorporate their customer's on-chain activity to understand them at a high level while understanding their habits. Data consumers can have greater trust in the quality of the assets they are using for their projects. For more information, check out our subgraphs and Aquarius pages. To learn more, check out our [Subgraph section](../developers/subgraph/).



* Global discovery of assets
  * Being able to easily find useful data and models is vital part of sharing your work with the world and establishing a market. In the web2 world, only the company hosting the platform can impact how assets are discovered. For example, Amazon decides what assets are shown in their marketplace, and Huggingface decides how assets are found on their platform. While working with these platforms, there is rarely transparency on how exactly assets are displayed, and so users are left to guess what the best way to promote their assets. With Ocean Protocol, assets can be permissionlessly discovered since they utilize standards of NFTs and ERC20s on-chain. Anyone can fork the Ocean Market and develop their own method of promoting assets, while ensuring transparency on how it is done. To learn more, check out our [Aquarius ](../developers/aquarius/)and [Build a Marketplace](../developers/build-a-marketplace/) sections.

\
\
\
\
\
\

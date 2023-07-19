---
description: >-
  JavaScript library to privately & securely publish, exchange, and consume
  data.
---

# Ocean.js

With ocean.js, you can:

* **Publish** data services: downloadable files or compute-to-data. Create an ERC721 **data NFT** for each service, and ERC20 **datatoken** for access (1.0 datatokens to access).
* **Sell** datatokens for a fixed price. Sell data NFTs.
* **Transfer** data NFTs & datatokens.

Ocean.js is part of the [Ocean Protocol](https://oceanprotocol.com) toolset.

{% embed url="https://www.youtube.com/watch?v=lqGXPkPUCqI" %}
Introducing Ocean.JS
{% endembed %}

The Ocean.js library adopts the module architectural pattern, ensuring clear separation and organization of code units. Utilizing ES6 modules simplifies the process by allowing you to import only the necessary module for your specific task.

Our module structure follows this format:

* Types
* Config
* Contracts
* Services
* Utils

When working with a particular module, you will need to provide different parameters. To instantiate classes from the contracts module, you must pass objects such as Signer, which represents the wallet instance, or the contract address you wish to utilize, depending on the scenario. As for the services modules, you will need to provide the provider URI or metadata cache URI.

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

The module structure follows this format:

* Types
* Config
* Contracts
* Services
* Utils

When working with a particular module, you will need to provide different parameters. To instantiate classes from the contracts module, you must pass objects such as Signer, which represents the wallet instance, or the contract address you wish to utilize, depending on the scenario. As for the services modules, you will need to provide the provider URI or metadata cache URI.


# Examples and Showcases 🌟🚀

Ocean.js is more than just a library; it's a gateway to unlocking your potential in the world of decentralized data services. To help you understand its real-world applications, we've curated a collection of examples and showcases. These examples demonstrate how you can use Ocean.js to create innovative solutions that harness the power of decentralized technologies. Each example provides a unique perspective on how you can apply Ocean.js, from decentralized marketplaces for workshops to peer-to-peer platforms for e-books and AI-generated art. These showcases serve as an inspiration for developers like you, looking to leverage Ocean.js in your projects, showcasing its adaptability and transformative capabilities. Dive into these examples to see how Ocean.js can bring your creative visions to life. 📚
<table data-view="cards">
   <thead>
      <tr>
         <th></th>
         <th></th>
         <th data-hidden data-card-cover data-type="files"></th>
         <th data-hidden data-card-target data-type="content-ref"></th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Decentralised Data Marketplace 🌊</td>
         <td>A decentralised marketplace for peer-to-peer online workshops.</td>
         <td><a href="../../.gitbook/assets/templates/marketplace.png">marketplace.png</a></td>
         <td><a href="https://github.com/oceanprotocol/market">https://github.com/oceanprotocol/market</a></td>
      </tr>
      <tr>
         <td>Music NFTs Marketplace 🎼</td>
         <td>A peer-to-peer platform for buying on-demand music NFTs.</td>
         <td><a href="../../.gitbook/assets/templates/ocean_waves.png">ocean_waves.png</a></td>
         <td><a href="https://github.com/oceanprotocol/waves">https://github.com/oceanprotocol/waves</a></td>
      </tr>
      <tr>
         <td>Tokengated Content 🔒</td>
         <td>A decentralised marketplace for buying &#x26; selling AI-generated Art.</td>
         <td><a href="../../.gitbook/assets/templates/tokengate.png">tokengate.png</a></td>
         <td><a href="https://github.com/oceanprotocol/token-gating-template">https://github.com/oceanprotocol/token-gating-template</a></td>
      </tr>
      <tr>
         <td>Tokengated AI Chatbot 🤖</td>
         <td>A decentralised e-commerce platform to sell templates, UI kits and plugins.</td>
         <td><a href="../../.gitbook/assets/templates/tokengated_chatbot.png">tokengated_chatbot.png</a></td>
         <td><a href="https://github.com/oceanprotocol/tokengated-next-chatgpt">https://github.com/oceanprotocol/tokengated-next-chatgpt</a></td>
      </tr>
      <tr>
         <td>Buy &#x26; Sell Online Workshops 🎓</td>
         <td>A decentralised marketplace for peer-to-peer online workshops.</td>
         <td><a href="../../.gitbook/assets/templates/oceanLearn.jpg">oceanLearn.jpg</a></td>
         <td><a href="https://www.figma.com/proto/8nT6qEUMMmJsMs8Ow2KzAN/OceanLearn?type=design&#x26;scaling=min-zoom&#x26;page-id=5%3A44&#x26;starting-point-node-id=5%3A91">https://www.figma.com/proto/8nT6qEUMMmJsMs8Ow2KzAN/OceanLearn?type=design&#x26;scaling=min-zoom&#x26;page-id=5%3A44&#x26;starting-point-node-id=5%3A91</a></td>
      </tr>
      <tr>
         <td>E-Books On-Demand 📖</td>
         <td>A peer-to-peer platform for reading on-demand e-books.</td>
         <td><a href="../../.gitbook/assets/templates/oceanReads.jpg">oceanReads.jpg</a></td>
         <td><a href="https://www.figma.com/proto/xReYRMMnhrynRsNqdy63tT/OceanReads?type=design&#x26;node-id=28-380&#x26;scaling=min-zoom&#x26;page-id=28%3A380&#x26;starting-point-node-id=135%3A92">https://www.figma.com/proto/xReYRMMnhrynRsNqdy63tT/OceanReads?type=design&#x26;node-id=28-380&#x26;scaling=min-zoom&#x26;page-id=28%3A380&#x26;starting-point-node-id=135%3A92</a></td>
      </tr>
      <tr>
         <td>Buy Templates, UI Kits, and plugins 🎨</td>
         <td>A decentralized e-commerce platform to sell templates, UI kits, and plugins.</td>
         <td><a href="../../.gitbook/assets/templates/webPallete.png">webPallete.png</a></td>
         <td><a href="https://www.figma.com/proto/xAcyc0rqZNTA8TdW43NN5P/WebPalette?type=design&#x26;node-id=0-1&#x26;scaling=min-zoom&#x26;page-id=0%3A1&#x26;starting-point-node-id=9%3A138">https://www.figma.com/proto/xAcyc0rqZNTA8TdW43NN5P/WebPalette?type=design&#x26;node-id=0-1&#x26;scaling=min-zoom&#x26;page-id=0%3A1&#x26;starting-point-node-id=9%3A138</a></td>
      </tr>
      <tr>
         <td>Decentralised Ticketing Mobile App 📱</td>
         <td>The first end-to-end decentralized mobile App to buy, sell &#x26; trade tickets of any type.</td>
         <td><a href="../../.gitbook/assets/templates/TicketingMobileApp.png">TicketingMobileApp.png</a></td>
         <td><a href="https://www.figma.com/proto/lu5ODNDwIrJmlM0WqBeBJ3/OceanTickets?page-id=75%3A386&#x26;type=design&#x26;node-id=336-126&#x26;viewport=131%2C706%2C0.19&#x26;t=ia9UyDUfZxZQS4k1-1&#x26;scaling=scale-down&#x26;starting-point-node-id=336%3A126">https://www.figma.com/proto/lu5ODNDwIrJmlM0WqBeBJ3/OceanTickets?page-id=75%3A386&#x26;type=design&#x26;node-id=336-126&#x26;viewport=131%2C706%2C0.19&#x26;t=ia9UyDUfZxZQS4k1-1&#x26;scaling=scale-down&#x26;starting-point-node-id=336%3A126</a></td>
      </tr>
      <tr>
         <td>Publish &#x26; Collect Digital Art 🖼️</td>
         <td>A decentralised marketplace for buying &#x26; selling AI-generated Art.</td>
         <td><a href="../../.gitbook/assets/templates/oceanArt.jpg">oceanArt.jpg</a></td>
         <td><a href="https://www.figma.com/proto/LwbMqloVagXnmlaeDCFiJC/OceanArt?type=design&#x26;node-id=13-122&#x26;scaling=min-zoom&#x26;page-id=13%3A122&#x26;starting-point-node-id=13%3A169">https://www.figma.com/proto/LwbMqloVagXnmlaeDCFiJC/OceanArt?type=design&#x26;node-id=13-122&#x26;scaling=min-zoom&#x26;page-id=13%3A122&#x26;starting-point-node-id=13%3A169</a></td>
      </tr>
   </tbody>
</table>

With these examples and showcases, you've seen just a glimpse of what you can achieve with this library. Now, it's your turn to dive in, explore, and unleash your creativity using Ocean.js. 🚀


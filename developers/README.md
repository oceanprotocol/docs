---
cover: ../.gitbook/assets/cover/developer_banner.png
coverY: 0
---

# 💻 Technical Architecture - to be updated

## What can you build with Ocean?

1. **Token-gated dApps & REST APIs**: monetize by making your dApp or its REST API token-gated. [Here's how](https://github.com/oceanprotocol/token-gating-template).
2. **AI dApps**: monetize your AI dApp by token-gating on AI training data, feature vectors, models, or predictions.
3. **Data Markets**: build a decentralized data market. [Here's how](https://github.com/oceanprotocol/market)
4. **Private user profile data**: storing user profile data on your centralized server exposes you to liability. Instead, have it on-chain encrypted by the user's wallet, and just-in-time decrypt for the app. [Video](https://www.youtube.com/watch?v=xTfI8spLq1k\&ab_channel=ParticleNetwork), [slides](https://docs.google.com/presentation/d/1_lkDVUkA0Rx1R7RpkaSeLkX3PeOBoMQyRhvxjwTvd6A/edit?usp=sharing).

Example live dapps:

* **Data Markets**: [Acentrik Market](https://market.acentrik.io/) for enterprises, and [Ocean Market](https://market.oceanprotocol.com) for general.
* **Token-gated dapps**: [Autobot](https://autobotocean.com/) for analytics, and [Ocean Waves](https://waves.oceanprotocol.com/) for music.
* **Token-gated feeds**: [Ocean Predictoor](https://predictoor.ai) for AI prediction feeds

## How do developers start using Ocean?

* **App level:** [**Use an Ocean Template**](https://oceanprotocol.com/templates).
* **Library level:** [**Use ocean.js**](ocean.js) is a library built for the key environment of dApp developers: JavaScript. Import it & use it your frontend or NodeJS.
* **Contract level:** [**Call Ocean contracts**](contracts/) on Eth mainnet [or other chains](contracts/networks.md).

## Developer Docs Quick-links

* [Architecture](architecture.md) - blockchain/contracts layer, middleware, dapps
* Earning revenue: [code to get payment](broken-reference), [fractional $](fractional-ownership.md), [community $](broken-reference)
* Schemas: [Metadata](metadata.md), [identifiers/DIDs](assets-and-services/identifiers.md), [identifier objects/DDOs](broken-reference), [storage](assets-and-services/storage.md), [fine-grained permissions](fg-permissions.md)
* Components:
  * [Barge](barge/) - local chain for testing
  * [Ocean subgraph](old-infrastructure/subgraph/) - grabbing event data from the chain
  * [Ocean CLI](ocean-cli/) - command-line interface
  * [Compute-to-data](compute-to-data/) - practical privacy approach
  * [Aquarius](old-infrastructure/aquarius/) - metadata cache
  * [Provider](old-infrastructure/provider/) - handshaking for access control
* [FAQ](broken-reference)

***

_Next:_ [_Architecture_](architecture.md)

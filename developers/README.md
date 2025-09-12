---
description: >-
  This chapter describes the technical details of the Ocean Enterprise technical
  stack.
cover: ../.gitbook/assets/Technical.png
coverY: 0
---

# 💻 Technical Architecture

Architecture Overview







## How do developers start using Ocean?

* **App level:** [**Use an Ocean Template**](https://oceanprotocol.com/templates).
* **Library level:** [**Use ocean.js**](ocean.js) is a library built for the key environment of dApp developers: JavaScript. Import it & use it your frontend or NodeJS.
* **Contract level:** [**Call Ocean contracts**](contracts/) on Eth mainnet [or other chains](contracts/networks.md).

## Developer Docs Quick-links

* [Architecture](architecture.md) - blockchain/contracts layer, middleware, dapps
* Schemas: [Metadata](assets-and-services/metadata.md), [identifiers/DIDs](assets-and-services/identifiers.md), [identifier objects/DDOs](broken-reference), [storage](assets-and-services/storage.md), [fine-grained permissions](fg-permissions.md)
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

---
title: Run a Keeper
description: How to Run a Keeper node in the Ocean network.
---

The Ocean Protocol v0.9 (Trilobite) Testnet is an Ethereum [Proof-of-Authority (PoA) network](https://wiki.parity.io/Proof-of-Authority-Chains) where all the nodes (Keeper nodes) are running [Parity Ethereum](https://www.parity.io/ethereum/).
There are two kinds of Keeper nodes in the Trilobite Testnet: authority nodes (voting nodes) and user nodes (non-voting nodes).

Authority nodes have a say in determining which transactions are valid. _In the Trilobite Testnet_, the authority nodes are run by BigchainDB GmbH and its partners.

Anyone can run a user node. It will stay in sync with the other nodes in the Trilobite Testnet, it just won't have a say on whether transactions are valid.
Marketplaces and publishers should run user nodes.
See the pages for [marketplaces](/setup/marketplace/) and [publishers](/setup/publisher/).

---
description: >-
    "It was never easy to look into the future, but it is possible and we should not miss our chance." — Andrei Linde
---

# Predictoor Architecture

## Privacy and Oasis Sapphire
Predictoor needs privacy for:
- Submitted predictions
- Compute aggregate predictions; and
- Aggregated predictions — only subscribers can see

This could all be done on fully-centralized infrastructure. But doing so would fail on our other goals: **being globally distributed, censorship resistant, and non-custodial**.

Targeting these needs, we researched & prototyped many privacy technologies. [Oasis Sapphire](https://oasisprotocol.org/sapphire) emerged as the best choice because, as the only privacy-preserving EVM chain in production, it could handle these needs cleanly end-to-end.

## Software Implementation
Most of [predictoor.ai](https://predictoor.ai) dapp is implemented in the [pdr-web repo](https://github.com/oceanprotocol/pdr-web), with help from [pdr-websocket](https://github.com/oceanprotocol/pdr-websocket/) to fetch feed data and [Ocean Aquarius](https://github.com/oceanprotocol/aquarius) for metadata caching.

The template Predictoor bots, trader bots, trueval bot, and prediction feed publishing are all in the [pdr-backend repo](https://github.com/oceanprotocol/pdr-backend). Contracts are in the Ocean [contracts](https://github.com/oceanprotocol/contracts) repo.

Events emitted by contracts are indexed as Ocean subgraphs, to be consumed by predictoor.ai and the bots. The backend [subgraph README](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/subgraph.md) has more info.

## Backend & Contract Details
The section ["Predictoor Structure”](./pdr-intro.md#predictoor-structure) presented much of the Predictoor architecture.  

The image below adds detail around the backend (bottom 1/3 of diagram). Let’s discuss.

<figure><img src="../.gitbook/assets/predictoor/details_on_predictoor.png" alt=""><figcaption>Details of Predictoor Structure (Architecture)</figcaption></figure>

**Smart Contracts.** There’s one Predictoor contract for each prediction feed, at each exchange/timescale: BTC/USDT at Binance/5m, ETH/USDT at Binance/5m, and so on. Each contract is an Ocean datatoken contract, with a new template for prediction feeds. 

The implementation is in templates/ERC20Template3.sol at at [Ocean’s contracts repo](https://github.com/oceanprotocol/contracts). It implements ERC20, Ocean, and Predictoor-specific behavior as follows.  

**- ERC20 behavior.** It implements the ERC20 interface and therefore plays well with ERC20-friendly crypto wallets, DEXes, etc.  

**- Ocean behavior.** Being part of Ocean, having 1.0 datatokens means you can access the underlying data asset for the duration of the subscription (once you’ve initiated the order). For Predictoor contracts this is 24h. Each datatoken contract has a parent Ocean data NFT with metadata, means to specify & collect fees, and more.  

**- Predictoor behavior.** Each datatoken contract has additional methods specific to Predictoor: submitting predictions, submitting truevals, computing aggregated predictions, etc.

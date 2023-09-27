---
description: >-
    "We can only see a short distance ahead, but we can see plenty there that needs to be done." — Alan Turing
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
The section ["Predictoor Structure”](pdr-intro.md#predictoor-structure) presented much of the Predictoor architecture.  

The image below adds detail around the backend (bottom 1/3 of diagram). Let’s discuss.

<figure><img src="../.gitbook/assets/predictoor/details_on_predictoor.png" alt=""><figcaption>Details of Predictoor Structure (Architecture)</figcaption></figure>

**Smart Contracts.** There’s one Predictoor contract for each prediction feed, at each exchange/timescale: BTC/USDT at Binance/5m, ETH/USDT at Binance/5m, and so on. Each contract is an Ocean datatoken contract, with a new template for prediction feeds. 

The implementation is in templates/ERC20Template3.sol at at [Ocean’s contracts repo](https://github.com/oceanprotocol/contracts). It implements ERC20, Ocean, and Predictoor-specific behavior as follows.  

**- ERC20 behavior.** It implements the ERC20 interface and therefore plays well with ERC20-friendly crypto wallets, DEXes, etc.  

**- Ocean behavior.** Being part of Ocean, having 1.0 datatokens means you can access the underlying data asset for the duration of the subscription (once you’ve initiated the order). For Predictoor contracts this is 24h. Each datatoken contract has a parent Ocean data NFT with metadata, means to specify & collect fees, and more.  

**- Predictoor behavior.** Each datatoken contract has additional methods specific to Predictoor: submitting predictions, submitting truevals, computing aggregated predictions, etc.

## Testnet Details
As of Sep 12, 2023, Predictoor / Ocean contracts are deployed to [Oasis Sapphire testnet](https://docs.oasis.io/dapp/sapphire/#testnet).

Users need fake OCEAN & ROSE tokens. You can find the [Tutorial on How to Get tokens here](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/testnet-faucet.md).

**Fake OCEAN.** Staking & payment is in fake OCEAN. Users acquire it via a faucet.  
**Fake ROSE.** Gas fees are in fake ROSE. Users acquire it via a faucet.  

## Mainnet Details
As of Oct 10, 2023, Predictoor / Ocean contracts are deployed to [Oasis Sapphire mainnet](https://docs.oasis.io/dapp/sapphire/#mainnet).  

Users need (real) OCEAN & ROSE tokens:  

**OCEAN.** Staking & payment is in OCEAN. Users [acquire OCEAN via exchanges](https://oceanprotocol.com/about-us/ocean-token#get). Users bridge OCEAN tokens from ETH mainnet to Oasis Sapphire mainnet via [Celer](https://celer.network/).  
**ROSE.** Gas fees are in ROSE. Users bridge tokens bridge from Oasis Emerald mainnet to Oasis Sapphire mainnet via Celer. [Read the details here](https://oasisprotocol.org/blog/celer-messaging-bridge-integration)

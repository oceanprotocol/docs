---
description: Earn OCEAN rewards by locking OCEAN, curating data, and making predictions.
cover: ../.gitbook/assets/cover/data_farming_banner.png
coverY: 0
---

# What is Data Farming?

**Data Farming (DF) is Ocean's incentive program.** It rewards OCEAN to participants who lock OCEAN into veOCEAN, curate data, or make predictions -- all in the name of driving **data consume volume** (DCV). DF is a bit like DeFi liquidity mining, but tuned for DCV.

**[The DF webapp](https://df.oceandao.org)** is where users perform most DF actions.

There is currently 150,000 OCEAN / week available for DF rewards. 

## DF Streams & Budgets

DF is organized into two streams: Passive DF and Active DF. Each has 50% of the DF budget. Passive DF allows for passive earning potential. Active DF requires more engagement; it has several substreams, each with its own activity.

Here are all streams & substreams. The links lead to dedicated pages.

1. **[Passive DF](passivedf.md).** 75,000 OCEAN per week. Lock OCEAN for **veOCEAN**; rewards are pro-rata to veOCEAN holdings.
1. **Active DF.** 75,000 OCEAN per week. It has these substreams:
   1. **[Volume DF](volumedf.md).** Allocate veOCEAN towards data assets with high DCV, ie "curate data". Rewards are a function of DCV and veOCEAN stake.
   1. **[Challenge DF](challengedf.md).** Predict future ETH price, one-time weekly. Rewards are a function of accuracy. Runs from DF48 — DF65.
   1. **[Predictoor DF](predictoordf.md).** Run prediction bots to earn continuously. Starts on DF62.

All streams and substreams repeat **weekly** that start on Thursdays 00:00 at UTC and end on Wed at 23:59 UTC.

**[Claiming rewards](claim-rewards.md)**. You can claim rewards each Thursday, or wait and claim many weeks' of rewards at once.

Active DF's substreams can -- and do -- evolve over time. It's chronicled [here](https://blog.oceanprotocol.com/ocean-data-farming-series-c7922f1d0e45).

## Reward Schedule & APYs

**[Reward Schedule](reward-schedule.md)**. The 150,000 OCEAN / week currently available for DF rewards will increase over time to over 1.1M OCEAN / week.

**[Yields](apys.md)**. Historically, APYs are 5-15%. APYs vary week to week. APY depends on total OCEAN staked, duration of OCEAN lock, DCV, what DF streams you participate in, and other factors.

## Networks

OCEAN rewards for all DF streams & substreams are on Ethereum mainnet. One exception: rewards for Predictoor DF are on Oasis Sapphire.

Users engage in different networks, depending on the DF stream:
- Passive DF: veOCEAN is deployed on Ethereum mainet. Users lock OCEAN for veOCEAN on Ethereum mainnet
- Volume DF: users can allocate veOCEAN to data assets on Etherum mainnet, Polygon, BSC, Moonriver, Energy Web Chain, or Sapphire.
- Challenge DF: users submit predictions on Mumbai (Polygon testnet).
- Predictoor DF: users submit predictions on Sapphire. 

The [networks docs](../discover/networks/README.md) have more info about networks.

## Further resources

- The **[DF FAQ](faq.md)** answers more questions.
- Main DF github repos: [df-py (backend)](https://github.com/oceanprotocol/df-py), [df-web (frontend)](https://github.com/oceanprotocol/df-web)
- The [Ocean Data Farming Series](https://blog.oceanprotocol.com/ocean-data-farming-series-c7922f1d0e45) blog has a chronological account of all Data Farming activities since its inception. It links to related blog posts.


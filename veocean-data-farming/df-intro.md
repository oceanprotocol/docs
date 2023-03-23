---
description: An introduction to Data Farming and Ocean's core incentive streams.
---
# Rewards

Data Farming (DF) incentivizes for growth of Data Consume Volume (DCV) in the Ocean ecosystem.

It rewards OCEAN to pool liquidity providers (stakers) as a function of consume volume and liquidity. It’s like DeFi liquidity mining, but tuned for data consumption. DF’s aim is to achieve a minimum supply of data for network effects to kick in, and once the network flywheel is spinning, to increase growth rate.

## Reward Categories
Rewards are paid in OCEAN and distributed every week on Thursday as follow:  
**Passive Rewards** : 50% Emissions Reserved  
**Active Rewards**: 50% Emissions Reserved. Defined by the **Reward Function**.

You can claim rewards from [within our webapp](https://df.oceandao.org/rewards).

**Final Caveat:** We reserve the right to make reasonable changes to these plans, if unforeseen circumstances emerge.

## Reward Function

The Reward Function (RF) governs how active rewards are allocated to stakers.

Rewards are calculated as follows:

First, distribute OCEAN across each asset based on rank: highest-DCV asset gets most OCEAN, etc.
Then, for each asset and each veOCEAN holder:
– If the holder is a publisher, 2x the effective stake
– Baseline rewards = (% stake in asset) * (OCEAN for asset)
– Bound rewards to the asset by 125% APY
– Bound rewards by asset’s DCV * 0.1%. This prevents wash consume.

Here is the code from [calcrewards.py](https://github.com/oceanprotocol/df-py/blob/main/util/calcrewards.py) in the Ocean Protocol [df-py repo](https://github.com/oceanprotocol/df-py/)

## 3 Phases of Data Farming

**DF Alpha** - Counting starts Thu June 16. 10K OCEAN rewards are budgeted per week. Rewards are distributed at the end of every week, for the activity of the previous week. It runs 4 weeks. The aim is to test technology, learn, and onboard data publishers.

**DF Beta** - Counting starts Thu July 14. Rewards are up to 100K OCEAN per week. It runs up to 20 weeks. The aim is to test the effect of larger incentives, learn, and refine the technology.

**DF Main** - Immediately follows DF Beta. Rewards are up to 718K OCEAN per week. DF Main emits 503.4M OCEAN worth of rewards and lasts for decades. Expected APY is 125% over many months (once fully ramped), staying generous over the long term.

The amount of OCEAN released is determined by the emission schedule as defined in the [DF Main Blog Post](https://blog.oceanprotocol.com/ocean-data-farming-main-is-here-49c99602419e).

## DF Main

DF Main starts Mar 16, 2023 in DF Round 29. DF29 has 150K OCEAN rewards available (a 2x increase from DF28). As DF Main progresses, rewards will increase to 300K (another 2x), then 600K (another 2x), then beyond 1.1M OCEAN/week (near 2x) then decaying over time.

As of DF29, wash consuming will no longer be profitable. So, organically-generated Data Consume Volume will be the main driver of active DF rewards.

Typical APYs are 5–20%.

Full implementation of DF Main will be over many months, after which DF will be decentralized. DF Main lasts for decades.

## Reward Schedule

The table below cross-references DF Round Number, Start Date, Phase & Week, Sub-Phase & Week, and OCEAN Rewards/Week.

![](./images/reward_schedule.png)
_Ocean Reward Schedule for the next 20+ years_
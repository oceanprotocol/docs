---
description: Intuition and background on the Data Farming program.
---
# Data Farming Background

It rewards OCEAN to liquidity providers (stakers) as a function of consume volume and liquidity. It’s like DeFi liquidity mining, but tuned for data consumption. DF’s aim is to achieve a minimum supply of data for network effects to kick in, and once the network flywheel is spinning, to increase growth rate.


## Active Work to Drive APY

Data Farming is not a wholly passive activity. The name of the game is to drive Data Consume Volume (DCV). High APYs happen only when there is sufficiently high DCV. High DCV means publishing and consuming truly useful datasets (or algorithms).

Thus, if you really want to max out your APY:
- create & publish datasets (and make $ in selling them) — or work with people who can
- consume the datasets (to make $) — or work with people who can
- go stake on them, and finally claim the rewards.

Driving DCV for publishing & consuming is your challenge. It will take real work. And then the reward is APY. It’s incentives all the way down:)

## Reward Function

The Reward Function (RF) governs how active rewards are allocated to stakers.

Rewards are calculated as follows:
1. Distribute OCEAN across each asset based on rank: highest-DCV asset gets most OCEAN, etc.
1. For each asset and each veOCEAN holder:
– If the holder is a publisher, 2x the effective stake
– Baseline rewards = (% stake in asset) * (OCEAN for asset)
– Bound rewards to the asset by 125% APY
– Bound rewards by asset’s DCV * 0.1%. This prevents wash consume.

You can find this code inside [calcrewards.py](https://github.com/oceanprotocol/df-py/blob/main/util/calcrewards.py) in the Ocean Protocol [df-py repo](https://github.com/oceanprotocol/df-py/)

## Data Assets that Qualify for DF

Data assets that have veOCEAN allocated towards them get DF rewards.

The data asset may be of any type — dataset (for static URIs) or algorithm for Compute-to-Data. The data asset may be fixed price or free price. If fixed price, any token of exchange is alright (OCEAN, H2O, USDC, ..).

To qualify for DF, a data asset must also:
- Have been created by Ocean Smart contracts [deployed](https://github.com/oceanprotocol/contracts/blob/v4main/addresses/address.json) by OPF to [production networks](https://docs.oceanprotocol.com/core-concepts/networks)
- Be visible on [Ocean Market](https://market.oceanprotocol.com/)
- Can’t be in [purgatory](https://github.com/oceanprotocol/list-purgatory/blob/main/policies/README.md)

## 3 Phases of Data Farming

Data Farming has evolved over time and will continue to do so as the Emission Curve progresses. Below are important dates and parameters incurred during the evolution of the Data Farming program.

**DF Alpha** - Counting starts Thu June 16. 10K OCEAN rewards are budgeted per week. Rewards are distributed at the end of every week, for the activity of the previous week. It runs 4 weeks. The aim is to test technology, learn, and onboard data publishers.

**DF Beta** - Counting starts Thu July 14. Rewards are up to 100K OCEAN per week. It runs up to 20 weeks. The aim is to test the effect of larger incentives, learn, and refine the technology.

**DF Main** - Immediately follows DF Beta. Rewards are up to 718K OCEAN per week. DF Main emits 503.4M OCEAN worth of rewards and lasts for decades. Expected APY is 125% over many months (once fully ramped), staying generous over the long term.

The amount of OCEAN released is determined by the emission schedule as defined by the [Emission Curve](emissions-apys.md#emissions--apys), and perhaps more easily uderstood in the [Reward Schedule](df-intro.md#reward-schedule)
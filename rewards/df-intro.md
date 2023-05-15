---
description: An introduction to Data Farming and Ocean Protocol incentive mechanisms
---

# Data Farming 101

Data Farming (DF) incentivizes sustainable and perpetual growth of Data Consume Volume (DCV) inside the Ocean ecosystem.

DFing is similar to 'liquidity mining' apart of leading yield farming mechanisms in DeFi, but tuned for Data Consumption Volume (DCV).

Data Consume Volume (DCV) is a metric placed to represent the total $ amount spent on purchases of data assets, fees on executing transactions, sharing data, and more. So, the more data consumed, the more rewards are distributed.

Data Farming rewards OCEAN to liquidity providers (stakers) in two different ways: active and passive rewards. The two reward functions produce variable APYs, contingent user criteria and chosen eligiblity, plus data consume volume (DCV).&#x20;

How Data farming differentiates from yield farming is that Data Farming incentivizes a sustainable supply of polished and high-demand data assets into the protocol.&#x20;

Unlike yield farming in DeFi, data farming has real intrinsic utility for all stakeholders: Liquidity providers (LPs) earn additional tokens, the protocol receives sustainable liquidity, and the users can trust the protocol's secured data assets. It's a win-win situation for all parties involved.

DF’s aim is to achieve a minimum supply of data for network effects to kick in, and once the network flywheel is spinning, to increase growth rate.

## Reward Categories

Rewards are paid in OCEAN and distributed every week on Thursday as follow:

| Passive Rewards | Active Rewards |
| --------------- | -------------- |
| 50%             | 50%            |

Active Rewards are governed and defined by the [Reward Function](df-background.md#reward-function).

**Final Caveat:** We reserve the right to make reasonable changes to these plans, if unforeseen circumstances emerge.

## How to access DF and claim rewards

Please [follow this tutorial](veOcean-Data-Farming-Tutorial.md) to learn how the Ocean Protocol reward programs work, and how to access them.

Otherwise, go to the DF webapp at [df.oceandao.org](df.oceandao.org) and explore Data Farming for yourself.

### Where to claim?

All earnings for veOCEAN token holders are claimable on the ”Rewards” page inside the Data Farming webapp on Ethereum mainnet.

Data assets for DF may be published in any [network where Ocean’s deployed in production](../core-concepts/networks.md): Ethereum Mainnet, Polygon, etc.

### When to claim?

Yield rewards are distributed weekly, every Thursday. Users can choose to claim every week, or wait many weeks to accumulate before claiming. (It’s all on-chain.)

### When to do a first claim?

From the time you lock OCEAN, you must wait at least a week, and up to two weeks, to be able to claim rewards.

The nerdy version: if you lock OCEAN on day x, you’ll be able to claim rewards on the first weekly ve “epoch” that begins after day x+7.

This behavior is inherited from [veCRV](https://curve.readthedocs.io/dao-fees.html); [here’s the code](https://github.com/oceanprotocol/contracts/blob/main/contracts/ve/veFeeDistributor.vy#L240-L256).

## DF Main

[DF Main](https://blog.oceanprotocol.com/ocean-data-farming-main-is-here-49c99602419e) started Mar 16, 2023 in DF Round 29. DF29 has 150K OCEAN rewards available (a 2x increase from DF28). As DF Main progresses, rewards will increase to 300K (another 2x), then 600K (another 2x), then beyond 1.1M OCEAN/week (near 2x) then decaying over time.

As of DF29 (Mar 16, 2023), wash consuming is not profitable. So, organically-generated Data Consume Volume is the main driver of active DF rewards.

[Example APYs are 5–20%](emissions-apys.md#example-apys) between Passive & Active rewards.

Full implementation of DF Main will be over many months, after which DF will be decentralized.

DF Main lasts for decades.

## Reward Schedule

The table below cross-references DF Round Number, Start Date, Phase & Week, Sub-Phase & Week, and OCEAN Rewards/Week.

![Rewards Schedule](../.gitbook/assets/rewards/reward\_schedule.png) _Ocean Reward Schedule for the next 20+ years_

## Ranked Rewards

In DF23 Ranked Rewards were introduced and smooth the reward distribution by using a logarithmic function.

**Since rewards are distributed across the Top 100 assets, all participants (Publishers & Curators) are now incentivized to support a broader range of assets rather than optimizing on a single asset.**

At the top-end, this helps increase quality and diversification of inventory.

At the bottom-end, this eliminates some potential free-rider issues and smooths out the reward distribution.

![Ranked Rewards](images/ranked\_rewards\_study.png)

You can read more about the implementation [in this blog post](https://blog.oceanprotocol.com/data-farming-df22-completed-df23-started-reward-function-tuned-ffd4359657ee) and find the full study [in these slides](https://docs.google.com/presentation/d/1HIA2zV8NUPpCELmi2WFwnAbHmFFrcXjNQiCpEqJ2Jdg/).

## Publisher Rewards - 2x Stake

DF gives stronger incentives to publish data services, as follows.

_All the veOCEAN a publisher has allocated to an asset they’ve published (“staked”) is treated as 2x the stake for rewards calculation._

1. As a staker, due to their staked veOCEAN on their own assets (1x).
2. As a publisher, for having veOCEAN staked on their own asset(1x).

The final reward is then calculated and bundled together to be distributed.

You can read more about the implementation [in this blog post](https://blog.oceanprotocol.com/data-farming-publisher-rewards-f2639525e508).

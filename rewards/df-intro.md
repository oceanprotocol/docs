---
description: >-
  Get a blackbelt in Ocean Protocol's Data Farming dApp just by reading our
  docs!
---

# Data Farming 101

<figure><img src="../.gitbook/assets/the-rock-simple.gif" alt=""><figcaption></figcaption></figure>

### What is Data Farming?

Data Farming (DF) is Ocean Protocol's **incentive system for curating high quality assets on the Ocean Market.** Participants vote on the Ocean Market assets that they believe are high quality and likely to sell. If they are right, then these Data Farmers **get a portion of the Ocean Market sales of the assets** they voted on!

(If you are familiar with 'liquidity mining', then you will find that Data Farming is similar but tuned instead for the curation of high quality assets on the Ocean Market.)

### How is Data Farming different from Yield Farming?

Unlike yield farming in DeFi, data farming has real intrinsic utility for Ocean Protocol stakeholders: as Data Farmers determine which are the highest quality assets on the Ocean Market to purchase, then the Data Farmers earn active OCEAN rewards when these assets sell. It's this **curation of the "best" assets on the Ocean Market** that shortens the search times for those looking to shop on the Ocean Market. We also put in place an incentive system for Publishers of assets to gain **2x the rewards** in Data Farming, thus driving forward the addition of great assets on the OM.

### Measuring Data Farming's Success

**Data Consume Volume (DCV)** is a metric for **the total $ amount spent on purchases of Ocean Market assets**, transaction fees, and more. As Ocean Market assets are purchased (i.e. consumed), then the more OCEAN rewards are distributed to Data Farmers.

<figure><img src="../.gitbook/assets/please-dont-leave.gif" alt=""><figcaption><p>I know this is a lot of info, but please don't leave!</p></figcaption></figure>

### Passive and Active Rewards

Every week OCEAN rewards are paid out to Data Farmers in two different ways: **passive** rewards and **active** rewards. The two reward functions produce different variable APYs.&#x20;

#### What are Passive Rewards?

Passive rewards are the OCEAN rewards paid to Data Farmers just for locking their OCEAN tokens.&#x20;

<figure><img src="../.gitbook/assets/passive-income.gif" alt=""><figcaption></figcaption></figure>

#### What are Active Rewards?

Active rewards are OCEAN rewards paid to Data Farmers that allocate their veOCEAN tokens to Ocean Market assets. They're called Active rewards because the amount of rewards relies on the active participation of the Data Farmer to select and allocate veOCEAN to these assets. **Active rewards yield depends on the sales of allocated assets.** No sales = no rewards, so choose your favorites wisely & then allocate. Always DYOR.



Each Data Farming weekly round has a pool of OCEAN rewards, and 50% of the pool is paid out in the form of passive rewards & 50% in the form of active rewards.

| Passive Rewards | Active Rewards |
| --------------- | -------------- |
| 50%             | 50%            |

Active Rewards are governed and defined by the [Reward Function](df-background.md#reward-function).

#### **Final Caveat**

We reserve the right to make reasonable changes to these plans, if unforeseen circumstances emerge.

## How to access DF and claim rewards

Rewards are paid in OCEAN and distributed every week on Thursday and are claimable on the [Rewards page](https://df.oceandao.org/rewards).

Please [follow this tutorial](veOcean-Data-Farming-Tutorial.md) to learn how the Ocean Protocol reward programs work, and how to access them.

### Where to claim?

All earnings for veOCEAN token holders are claimable on the ”Rewards” page inside the Data Farming webapp on Ethereum mainnet.

Data assets for DF may be published in any [network where Ocean’s deployed in production](../discover/networks/): Ethereum Mainnet, Polygon, etc.

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

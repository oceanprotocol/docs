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

## On Claiming DF Rewards

Please [follow this tutorial](../tutorials/veOcean-Data-Farming-Tutorial.md) to learn how to access Ocean Protocol Rewards via Data Farming.

Otherwise, go to the DF webapp at [df.oceandao.org/activerewards](df.oceandao.org/activerewards)

### Where to claim?  
All earnings for veOCEAN holders are claimable on the ”Rewards” page inside the Data Farming webapp on Ethereum mainnet.  

Data assets for DF may published in any [network where Ocean’s deployed in production](https://docs.oceanprotocol.com/core-concepts/networks): Eth mainnet, Polygon, etc.

### When to claim?
There are fresh rewards available every Thursday. If you wish, you can wait for many weeks to accumulate before claiming. (It’s all on-chain.)

### When to do a first claim?
From the time you lock OCEAN, you must wait at least a week, and up to two weeks, to be able to claim rewards.  

The nerdy version: if you lock OCEAN on day x, you’ll be able to claim rewards on the first weekly ve “epoch” that begins after day x+7.  

This behavior is inherited from [veCRV](https://curve.readthedocs.io/dao-fees.html); [here’s the code](https://github.com/oceanprotocol/contracts/blob/main/contracts/ve/veFeeDistributor.vy#L240-L256).

## DF Main

DF Main started Mar 16, 2023 in DF Round 29. DF29 has 150K OCEAN rewards available (a 2x increase from DF28). As DF Main progresses, rewards will increase to 300K (another 2x), then 600K (another 2x), then beyond 1.1M OCEAN/week (near 2x) then decaying over time.

As of DF29, wash consuming will no longer be profitable. So, organically-generated Data Consume Volume will be the main driver of active DF rewards.

[Example APYs are 5–20%](emissions-apys.md#example-apys) between Passive & Active rewards.

Full implementation of DF Main will be over many months, after which DF will be decentralized. DF Main lasts for decades.

## Reward Schedule

The table below cross-references DF Round Number, Start Date, Phase & Week, Sub-Phase & Week, and OCEAN Rewards/Week.

![](./images/reward_schedule.png)
_Ocean Reward Schedule for the next 20+ years_
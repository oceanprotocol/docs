---
description: >-
  Earn passively by locking veOCEAN for OCEAN
---

# Passive Data Farming (and veOCEAN)

<figure><img src="../.gitbook/assets/gif/aquaman-fade.gif" alt=""><figcaption><p>I've got veOCEAN, my work is done.</p></figcaption></figure>

**This page** is about Passive DF, and veOCEAN. There's also a [user guide page](passivedf-guide.md), and a [page for liquid staking](liquid-staking.md).

# About veOCEAN and Passive DF

Here, Data Farmers earn OCEAN rewards by locking their OCEAN for veOCEAN for a period of time. That's it! It's low effort, ie passive.

veOCEAN is non-transferable. You can’t sell it or send it to other addresses.

**Yield** is gross income minus costs, divided by OCEAN locked up.  
- **Gross income** comes from passive DF rewards. This in turn depends on how much veOCEAN you hold compared to others. veOCEAN depends on:
  - how much OCEAN you've locked. More OCEAN -> more rewards.
  - how long you've locked it for. Longer lock -> more rewards. 4 years for max rewards.
  - how recently you've refreshed your locked OCEAN. More recent -> more rewards.
- **Costs** are gas fees for transactions (txs) on Ethereum mainnet (where veOCEAN runs).
  - In Passive DF, txs include: locking OCEAN, claiming rewards, and withdrawing rewards. 
  - Costs should not be under-estimated. If you lock a small amount of OCEAN for a short time, costs may exceed your gross income.
  - To compound returns, these txs need to be repeated. The ideal frequency to compound rate is whatever maximizes your yield - which depends on how much OCEAN you've locked, tx fees, etc.

**APY** is "Annual Percent Yield".  Where the [DF app](https://df.oceandao.org) shows APYs, these values are calculated assuming an initial 4-year lock up period with a weekly schedule of compounding rewards into an updated 4-year lock. This estimate works provided current: number of users, reward emissions, and other reward parameters stay constant while excluding all tx fees. See the [APYs](apys.md) page to understand APYs better.

The rest of this page has details.

### veOCEAN Time Locking

The longer you lock OCEAN for, the more veOCEAN you get. You can lock OCEAN for as short as two weeks, and as long as four years. (On the DF dapp [veOCEAN page](https://df.oceandao.org/veocean), "Lock Multiplier" represents the percentage amount of veOCEAN received per OCEAN locked.)

| Years | Lock Multiplier | veOCEAN |
| ---- | --------------- | ------- |
| 1    | 0.25x           | 0.25    |
| 2    | 0.50x           | 0.50    |
| 3    | 0.75x           | 0.75    |
| 4    | 1.00x           | 1.00    |

veOCEAN cannot be transferred or sold. 

At the end of your 4 years, your OCEAN is unlocked. **You will not be able to retrieve your locked OCEAN until the Lock End Date you selected on the dApp!**

After the Lock End Date, then you can withdraw your principal OCEAN on the [veOCEAN page](https://df.oceandao.org/veocean) on the left side panel.

### Linear Decay

Your veOCEAN balance will slowly start declining as soon as you receive it.

veOCEAN balance decreases linearly over time until the Lock End Date. For example, when your lock time has lapsed by 50%, you will have 50% of your original veOCEAN balance.

When your lock time ends your veOCEAN balance will hit 0, and your OCEAN can be withdrawn.

If you lock 1.0 OCEAN for 4 years, you get 1.0 veOCEAN at the start.

| Years Passed | veOCEAN Left |
| ------------ | ------------ |
| 1 year       | 0.75         |
| 2 years      | 0.50         |
| 3 years      | 0.25         |
| 4 years      | 0.00         |

You can’t lose your OCEAN through Impermanent Loss (IL). It is merely locked.  

### Replenishing veOCEAN

To achieve optimal APY, you would want to periodically update your 4-year lock back to 4 years, where there is no veOCEAN decay. 

You can also add more OCEAN to your vault when updating an existing vault.

### Passive DF Reward Distrubtion

Passive DF rewards are claimable on the Ethereum mainnet.  

DF rounds are weekly. In line with this, there’s a [`ve`](https://github.com/oceanprotocol/df-py/tree/main/contracts/ve) distribution “epoch” every week. This affects when you can first claim rewards. Specifically, if you lock OCEAN on day x, you’ll be able to claim rewards on the first ve epoch that begins after day x+7.  

Put another way, from the time you lock OCEAN, you must wait at least a week, and up to two weeks, to be able to claim rewards. (This behavior is inherited from veCRV. Here’s the [code](https://github.com/oceanprotocol/df-py/tree/main/contracts/ve)).  


### Flow of Value

The image below illustrates the flow of value. On the left, at time 0, the staker locks their OCEAN into the veOCEAN contract, and receives veOCEAN. In the middle, the staker receives OCEAN rewards every time there’s revenue to the Ocean Protocol Community (top), and also as part of Data Farming rewards (bottom). On the right, when the lock expires (e.g. 4 years) then the staker is able to move their OCEAN around again.

<figure><img src="../.gitbook/assets/data-farming/flow_of_value.png" alt=""><figcaption><p>Flow of Value</p></figcaption></figure>

### Background of veOCEAN Idea

It's been a long-held goal to reconcile near-term and long-term incentives. This is not an easy task.

Curve Finance's [veCRV](https://curve.readthedocs.io/dao-fees.html) was one of the first to do a great job at this, and have high usage and liquidity. So, [veOCEAN contracts](https://github.com/oceanprotocol/contracts/tree/main/contracts/ve) use veCRV code.

### veOCEAN Contract Security

veOCEAN core contracts have zero changes to veCRV code, on purpose: the veCRV contracts have been battle-tested since inception (2020). Nearly 500 million USD is locked across all forks of veCRV, with the leading DeFi protocols adopting this standard. veCRV contracts [have been audited by Trail of Bits and Quantstamp](https://github.com/curvefi/curve-dao-contracts#audits-and-security).

We have built [a new contract](https://github.com/oceanprotocol/contracts/blob/main/contracts/ve/veAllocate.sol) for users to allocate their veOCEAN towards data assets. These new contracts do not control the veOCEAN core contracts at all. In the event of a breach, the only funds at risk would be the rewards distributed for a single week; and we would be able to redirect future funds to a different contract.

We have an [ongoing bug bounty via Immunefi](https://immunefi.com/bounty/oceanprotocol/) for Ocean software, including veOCEAN and DF components. If you identify an issue, please report it there and get rewarded.


----

_Next: [Guide to Passive DF](passivedf-guide.md)_

_Back: [DF Main](README.md)_


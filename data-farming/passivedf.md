---
description: >-
  Earn passively by locking veOCEAN for OCEAN
---

# Passive Data Farming (and veOCEAN)

<figure><img src="../.gitbook/assets/gif/aquaman-fade.gif" alt=""><figcaption><p>I've got veOCEAN, my work is done.</p></figcaption></figure>

**This page** is about Passive DF, and veOCEAN. There's also a [user guide page](passivedf-guide.md), and a [page for liquid staking](liquid-staking.md)

# About veOCEAN and Passive DF

Here, Data Farmers earn OCEAN rewards by locking their OCEAN for veOCEAN for a period of time. That's it! It's low effort, ie passive.

The amount of rewards you get is pro-rata to the amount of veOCEAN you hold, cmopared to other veOCEAN holders.

### veOCEAN Time Locking

Users can lock their OCEAN for different lengths of time to gain more veOCEAN **voting power**. The Data Farming dApp is designed to lock OCEAN for **a minimum of 2 weeks and a maximum of four years** (for max rewards). The longer you lock your OCEAN, the more veOCEAN + OCEAN rewards you get!

On the dApp's [veOCEAN page](https://df.oceandao.org/veocean), the "Lock Multiplier" represents the percentage amount of veOCEAN received per OCEAN locked.

When users commit to locking their OCEAN for an extended time duration, they are rewarded with an increased amount of veOCEAN. This incentivizes users to have act with strong network support and confidence in the ecosystem.

| Year | Lock Multiplier | veOCEAN |
| ---- | --------------- | ------- |
| 1    | 0.25x           | 0.25    |
| 2    | 0.50x           | 0.50    |
| 3    | 0.75x           | 0.75    |
| 4    | 1.00x           | 1.00    |

After choosing your lock period and locking up your OCEAN into the vault, you will be credited with veOCEAN.

veOCEAN is non-transferable. You can’t sell it or send it to other addresses.

### Linear Decay

Your veOCEAN balance will slowly start declining as soon as you receive it.

veOCEAN balance decreases linearly over time until the Lock End Date. When your lock time has lapsed by 50%, you will have 50% of your original veOCEAN balance.

When your lock time ends your veOCEAN balance will hit 0, and your OCEAN can be withdrawn.

If you lock 1.0 OCEAN for 4 years, you get 1.0 veOCEAN at the start.

| Years Passed | veOCEAN Left |
| ------------ | ------------ |
| 1 year       | 0.75         |
| 2 years      | 0.50         |
| 3 years      | 0.25         |
| 4 years      | 0.00         |

At the end of your 4 years, your OCEAN is unlocked.

veOCEAN code is a fork of Curve's battle-tested [veCRV](https://curve.readthedocs.io/dao-vecrv.html) contracts that safeguard billions (veCRV). With this model there is no liquidity risk. You can’t lose your OCEAN through Impermanent Loss (IL). It is merely locked.  

# veOCEAN and your APY

Here are some good mental models to improve the outcome of your APY.
1. The longer you lock, the more you'll earn.
1. To improve yield, you will need to make good decisions for how long you'll choose to lock. The best way to do this is to learn how [Time Locking](#veocean-time-locking) and [Linear Decay](#linear-decay) function.
1. APYs are always calculated by dividing the amount of OCEAN received from rewards, by the relative amount of OCEAN locked up.
1. As a rule: _wherever APYs are provided to the user in the app (df.oceandao.org), they are caclulated assuming an initial 4-year lock up period with a weekly schedule of compounding rewards into an updated 4-year lock. This estimate works provided current: number of users, reward emissions, and other reward parameters stay constant while excluding all tx fees._

To help you more easily understand APYs, we have provided a couple of examples in the [how to estimate APY](user-guides/how-to-estimate-apy.md) user guide so you can visualize different setups and their relative yields.

### Replenishing your veOCEAN

To achieve optimal APY, participants would need to update their 4-year lock while considering costs and other variables to maintain an optimal amount of veOCEAN over time.

Participants are also able to add more OCEAN to their vault when updating an existing vault.

At any time, participants can choose to update their lock and continue from where they are or increase their lock duration.

### veOCEAN Earnings

All earnings for veOCEAN holders are claimable in the Ethereum mainnet.  

To be eligible for Data Farming Data assets for DFing may be published in any network where Ocean’s deployed in production: ETH Mainnet, Polygon, etc.)

Data Farming rounds occur weekly; in line with this, there’s a new [`ve`](https://github.com/oceanprotocol/df-py/tree/main/contracts/ve) distribution “epoch” every week. This affects when you can first claim rewards. Specifically, if you lock OCEAN on day x, you’ll be able to claim rewards on the first ve epoch that begins after day x+7.  

Put another way, from the time you lock OCEAN, you must wait at least a week, and up to two weeks, to be able to claim rewards. (This behavior is inherited from veCRV. Here’s the [code](https://github.com/oceanprotocol/df-py/tree/main/contracts/ve)).  

### Locks & Withdrawal

veOCEAN is architected to be locked (i.e. 'staked') for a certain period of time and cannot be transferred or sold during the lock time that is determined by each user.

So it's important to note that: **"you will not be able to retrieve your locked OCEAN until the Lock End Date you selected on the dApp!**

After the Lock End Date, then you can withdraw your principal OCEAN on the [veOCEAN page](https://df.oceandao.org/veocean) on the left side panel.

### Flow of Value

The image below illustrates the flow of value. On the left, at time 0, the staker locks their OCEAN into the veOCEAN contract, and receives veOCEAN. In the middle, the staker receives OCEAN rewards every time there’s revenue to the Ocean Protocol Community (top), and also as part of Data Farming rewards (bottom). On the right, when the lock expires (e.g. 4 years) then the staker is able to move their OCEAN around again.

<figure><img src="../.gitbook/assets/data-farming/flow_of_value.png" alt=""><figcaption><p>Flow of Value</p></figcaption></figure>

The veOCEAN design is in accordance with the Web3 Sustainability Loop, which Ocean uses as its system-level design.

The veOCEAN code was forked from the veCRV code. veCRV parameters will be the starting point. To minimize risk, tweaks will be circumspect.

### Background of veOCEAN Idea

It's been a long-held goal to reconcile near-term and long-term incentives. This is not an easy task.

Curve Finance's [veCRV](https://curve.readthedocs.io/dao-fees.html) was one of the first to do a great job at this, and have high usage and liquidity. So, [veOCEAN contracts](https://github.com/oceanprotocol/contracts/tree/main/contracts/ve) use veCRV code.

### veOCEAN Contract Security

veOCEAN core contracts have zero changes to veCRV code, on purpose: the veCRV contracts have been battle-tested since inception (2020). Nearly 500 million USD is locked across all forks of veCRV, with the leading DeFi protocols adopting this standard. veCRV contracts [have been audited by Trail of Bits and Quantstamp](https://github.com/curvefi/curve-dao-contracts#audits-and-security).

We have built [a new contract](https://github.com/oceanprotocol/contracts/blob/main/contracts/ve/veAllocate.sol) for users to allocate their veOCEAN towards data assets. These new contracts do not control the veOCEAN core contracts at all. In the event of a breach, the only funds at risk would be the rewards distributed for a single week; and we would be able to redirect future funds to a different contract.

We have an [ongoing bug bounty via Immunefi](https://immunefi.com/bounty/oceanprotocol/) for Ocean software, including veOCEAN and DF components. If you identify an issue, please report it there and get rewarded.


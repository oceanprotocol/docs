---
description: >-
  Learn the basic moves to start kicking a** at Data Farming
---

# Passive Farming veOCEAN

<figure><img src="../.gitbook/assets/gif/neo-blocking.gif" alt=""><figcaption><p>Data Farming is getting effortless.</p></figcaption></figure>

### What does the "ve" in veOCEAN stand for?

"ve" stands for <mark style="color:orange;">**vote escrowed**</mark>. And the "vote" part of "ve" and veOCEAN is what you really need to pay attention to in order to truly understand the function of this token.

You see, when you acquire veOCEAN via locking your OCEAN tokens in our Data Farming dApp, the intended use is to **vote on your favorite assets** in the Ocean ecosystem!

When you allocate to assets that sell, then **you get a portion of the sales**!

You can do this all from the Data Farming dApp [Farms page](https://df.oceandao.org/volume-df).

### The Superpowers of veOCEAN

veOCEAN allows you to engage with different Ocean Protocol mechanisms and benefit from the reward programs available.

4 key utility functionalities of veOCEAN:

1. **Holding it** veOCEAN pays **Passive OCEAN Rewards** every week.
2. **Allocating it** veOCEAN pays **Active OCEAN Rewards** every week to the top selling assets in the Ocean ecosystem.
3. **Delegating it** You can delegate veOCEAN to other Data Farmers who can curate Datasets for you. In return for their services, these farmers may charge you a fee for helping you receive APY on **Active Rewards**. The Delegate feature has just been recently released and enables veOCEAN holders to more easily manage Active Rewards.
4. **2x Publisher Stake** If you are a publisher in the Ocean ecosystem, then allocating your veOCEAN to your own asset gives your veOCEAN **a 2x Bonus**. This is an incentive for publishers to engage with their assets and benefit the assets in the Ocean ecosystem further.

### veOCEAN Time Locking

Users can lock their OCEAN for different lengths of time to gain more veOCEAN **voting power**. The Data Farming dApp is designed to lock OCEAN for **a minimum of 2 weeks and a maximum of four years** (for max rewards). The longer you lock your OCEAN, the more veOCEAN + OCEAN rewards you get!

On the dApp's [veOCEAN page](https://df.oceandao.org/veocean), the "Lock Multiplier" represents the percentage amount of veOCEAN tokens received per OCEAN token locked.

When users commit to locking their OCEAN tokens for an extended time duration, they are rewarded with an increased amount of veOCEAN tokens. This incentivizes users to have act with strong network support and confidence in the ecosystem.

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

When your lock time ends your veOCEAN balance will hit 0, and your OCEAN tokens can be withdrawn.

If you lock 1.0 OCEAN for 4 years, you get 1.0 veOCEAN at the start.

| Years Passed | veOCEAN Left |
| ------------ | ------------ |
| 1 year       | 0.75         |
| 2 years      | 0.50         |
| 3 years      | 0.25         |
| 4 years      | 0.00         |

At the end of your 4 years, your OCEAN is unlocked.

The veOCEAN code is a fork of Curve's battle tested [veCRV](https://curve.readthedocs.io/dao-vecrv.html) token code.

# veOCEAN and your APY

Here are some good mental models to improve the outcome of your APY.
1. The longer you lock, the more you'll earn.
1. To improve yield, you will need to make good decisions for how long you'll choose to lock. The best way to do this is to learn how [Time Locking](#veocean-time-locking) and [Linear Decay](#linear-decay) function.
1. APYs are always calculated by dividing the amount of OCEAN received from rewards, by the relative amount of OCEAN locked up.
1. As a rule: _wherever APYs are provided to the user in the app (df.oceandao.org), they are caclulated assuming an initial 4-year lock up period with a weekly schedule of compounding rewards into an updated 4-year lock. This estimate works provided current: number of users, reward emissions, and other reward parameters stay constant while excluding all tx fees._

To help you more easily understand APYs, we have provided a couple of examples in the [how to estimate APY](../user-guides/data-farming/how-to-estimate-apy.md) user guide so you can visualize different setups and their relative yields.

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

So it's important to note that: **"you will not be able to retrieve your locked OCEAN tokens until the Lock End Date you selected on the dApp!**

After the Lock End Date, then you can withdraw your principal OCEAN tokens on the [veOCEAN page](https://df.oceandao.org/veocean) on the left side panel.

### Flow of Value

The image below illustrates the flow of value. On the left, at time 0, the staker locks their OCEAN into the veOCEAN contract, and receives veOCEAN. In the middle, the staker receives OCEAN rewards every time there’s revenue to the Ocean Protocol Community (top), and also as part of Data Farming rewards (bottom). On the right, when the lock expires (e.g. 4 years) then the staker is able to move their OCEAN around again.

<figure><img src="../.gitbook/assets/rewards/flow_of_value.png" alt=""><figcaption><p>Flow of Value</p></figcaption></figure>

The veOCEAN design is in accordance with the Web3 Sustainability Loop, which Ocean uses as its system-level design.

The veOCEAN code was forked from the veCRV code. veCRV parameters will be the starting point. To minimize risk, tweaks will be circumspect.

### Where the heck did we get this idea from?

The "veTokenomics" model of veOCEAN (vote-escrowed token economics) is inspired by Curve Finance's [veCRV](https://curve.readthedocs.io/dao-fees.html) token code. We took this inspiration to enable our users to participate in on-chain governance and earn rewards within the Ocean Protocol ecosystem.

[Here is Ocean Protocol's open-source code](https://github.com/oceanprotocol/contracts/blob/main/contracts/ve/veFeeDistributor.vy#L240-L256) for veOCEAN, and if you're a developer, then you'll notice the strong similarities to [veCRV's](https://curve.readthedocs.io/dao-fees.html) code.

### veOCEAN's Smart Contracts Security

[veOCEAN core contracts](https://github.com/oceanprotocol/contracts/tree/main/contracts/ve) use [veCRV contracts](https://curve.readthedocs.io/dao-vecrv.html) with zero changes, on purpose: the veCRV contracts have been battle-tested since inception and have not had security issues. Nearly 500 million USD is locked across all forks of veCRV, with the leading DeFi protocols adopting this standard. veCRV contracts [have been audited by Trail of Bits and Quantstamp](https://github.com/curvefi/curve-dao-contracts#audits-and-security).

We have built [a new contract](https://github.com/oceanprotocol/contracts/blob/main/contracts/ve/veAllocate.sol) for users to point their veOCEAN towards given data assets (“allocate veOCEAN”). These new contracts do not control the veOCEAN core contracts at all. In the event of a breach, the only funds at risk would be the rewards distributed for a single week; and we would be able to redirect future funds to a different contract.

We have an [ongoing bug bounty via Immunefi](https://immunefi.com/bounty/oceanprotocol/) for Ocean software, including veOCEAN and DF components. If you identify an issue, please report it there and get rewarded.

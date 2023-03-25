---
description: An overview of the governance token, veOCEAN (vote-escrowed).
---
# veOCEAN

veOCEAN is a mechanism to align near-term incentives (maximize APY) with long-term incentives (long-term locking). It's a fork of veCRV contracts which have been battle-tested over years.

The amount of reward depends on how long the tokens are locked for. You must lock up your OCEAN into the vault for to obtain veOCEAN. Going forward, veOCEAN will be the main mechanism for staking OCEAN, and for curation of datasets.

After creating your lock you will be credited veOCEAN. We sometimes refer to veOCEAN as your “voting power”.

**WARNING:** You will not be able to retrieve your original OCEAN deposit until the lock ends.

## What can I do with veOCEAN?

veOCEAN allows you to engage with different protocol mechanisms and benefit from the reward programs available.

There are 4 things you can do with veOCEAN.
1. **Hold it** veOCEAN pays **Passive Rewards** every week.
2. **Allocate it** veOCEAN pays **Active Rewards** every week to the top performing Datasets, Algorithms, dApps, and more.
3. **Delegate it** You can delegate veOCEAN to other Data Farmers who can curate Datasets for you. In return for their services, these farmers may charge you a fee for helping you receive APY on **Active Rewards**. The Delegate feature has just been recently released and enables veOCEAN holders to more easily access Active Rewards.
4. **2x Stake** If you are a publisher, allocating veOCEAN to your own Dataset gives your veOCEAN a 2x Bonus. This is an incentive for publishers to engage with their assets and benefit from from the protocol further.

## What is time locking?

Users can lock their OCEAN for different lengths of time to gain voting power. Our app is configured to lock OCEAN for a minimum of 2 weeks and a maximum of four years for max benefit.

Users that lock their OCEAN for a longer period of time receive more veOCEAN to reflect their conviction in the system.

| Year | Lock Multiplier | veOCEAN |
| ---- | ----------| ------- |
| 1    | 0.25x     | 0.25    |
| 2    | 0.50x      | 0.50     |
| 3    | 0.75x     | 0.75    |
| 4    | 1.00x      | 1.00     |

_The Lock Multiplier. Amount of veOCEAN received per OCEAN locked._

If you’ve locked OCEAN for 4 years, you will be unable to retrieve your deposit until this time expires.

After choosing your lock period and locking up your OCEAN into the vault, you will be credited with veOCEAN.

veOCEAN is non-transferable. You can’t sell it or send it to other addresses.

## Linear Decay

Your veOCEAN balance will slowly start declining as soon as you receive it.

veOCEAN balance decreases linearly over time until the Lock End Date. When your lock time has lapsed by 50%, you will have 50% of your original veOCEAN balance.

When your lock time ends your veOCEAN balance will hit 0, and your OCEAN tokens can be withdrawn.

If you lock 1.0 OCEAN for 4 years, you get 1.0 veOCEAN at the start.

| Years Passed | veOCEAN Left |
| ---- | ---- |
| 1 year | 0.75 |
| 2 years | 0.50 |
| 3 years | 0.25 |
| 4 years | 0.00 |

At the end of your 4 years, your OCEAN is unlocked. [1]

## Replenishing your veOCEAN

You can choose to update your lock and replenish your veOCEAN balance at any time.

To maximize rewards, participants would need to update their 4-year lock every week in order to maintain their veOCEAN balance as high as possible.

## veOCEAN Earnings

All earnings for veOCEAN holders are claimable in Ethereum mainnet. (Data assets for DF may published in any network where Ocean’s deployed in production: Eth mainnet, Polygon, etc.)

There’s a new DF round every week; in line with this, there’s a new ve distribution “epoch” every week. This affects when you can first claim rewards. Specifically, if you lock OCEAN on day x, you’ll be able to claim rewards on the first ve epoch that begins after day x+7. Put another way, from the time you lock OCEAN, you must wait at least a week, and up to two weeks, to be able to claim rewards. (This behavior is inherited from veCRV. Here’s the code. )

veOCEAN holders have earnings from two sources:

### Earnings from Community Fees

Every transaction in Ocean Market and Ocean backend generates transaction fees, some of which go to the community. 50% of the community fees will go to veOCEAN holders; the rest will go to Ocean community-oriented traction programs.

All earnings here are passive.

### Earnings from Data Farming

veOCEAN holders will each get weekly DF rewards allocation, except a small carveout for any Data Challenge initiatives that may run through DF ops.

**veOCEAN holders can be passive, though they will earn more if active.**

“Being active” means allocating veOCEAN to promising data assets (data NFTs). Then, rewards follow the usual DF formula: DCV * stake. Stake is the amount of veOCEAN allocated to the data asset. There is no liquidity locked inside a datatoken pool. (And this stake is safe: you can’t lose your OCEAN as it is merely locked.)

## Flow of Value

The image below illustrates the flow of value. On the left, at time 0, the staker locks their OCEAN into the veOCEAN contract, and receives veOCEAN. In the middle, the staker receives OCEAN rewards every time there’s revenue to the Ocean Protocol Community (top), and also as part of Data Farming rewards (bottom). On the right, when the lock expires (e.g. 4 years) then the staker is able to move their OCEAN around again.

![](./images/flow_of_value.png)
_Flow of Value_

The veOCEAN design is in accordance with the Web3 Sustainability Loop, which Ocean uses as its system-level design.

The veOCEAN code was forked from the veCRV code. veCRV parameters will be the starting point. To minimize risk, tweaks will be circumspect.

## Security

[veOCEAN core contracts](https://github.com/oceanprotocol/contracts/tree/main/contracts/ve) use [veCRV contracts](https://curve.readthedocs.io/dao-vecrv.html) with zero changes, on purpose: the veCRV contracts have been battle-tested for two years and have not had security issues. Nearly 500 million USD is locked across all forks of veCRV, with the leading DeFi protocols adopting this standard. veCRV contracts [have been audited by Trail of Bits and Quantstamp](https://github.com/curvefi/curve-dao-contracts#audits-and-security).

We have built [a new contract](https://github.com/oceanprotocol/contracts/blob/main/contracts/ve/veAllocate.sol) for users to point their veOCEAN towards given data assets (“allocate veOCEAN”). These new contracts do not control the veOCEAN core contracts at all. In the event of a breach, the only funds at risk would be the rewards distributed for a single week; and we would be able to redirect future funds to a different contract.

We have an [ongoing bug bounty via Immunefi](https://immunefi.com/bounty/oceanprotocol/) for Ocean software, including veOCEAN and DF components. If you identify an issue, please report it there and get rewarded.
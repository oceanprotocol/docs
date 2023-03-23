---
description: Frequently asked questions on the Data Farming incentive program.
---
# FAQ

## Data Farming FAQ

<details>
<summary>When exactly does counting start and finish, for a given week?</summary>

The counting starts at 12.01am on Thursday, and ends at 11.59pm on the following Wednesday.

</details>

_Q: I staked for just one day. What rewards might I expect?_

At least 50 snapshots are randomly taken throughout the week. If you’ve staked just one day, and all else being equal, you should expect 1/7 the rewards compared to the full 7 days.

_Q: The datatoken price may change throughout the week. What price is taken in the DCV calculation?_

The price is taken at the same time as each consume. E.g. if a data asset has three consumes, where price was 1 OCEAN when the first consume happened, and the price was 10 OCEAN when the other consumes happened, then the total DCV for the asset is 1 + 10 + 10 = 21.

_Q: Can the reward function change during a given week?_

No. At the beginning of a new DF round (DF1, DF2, etc), rules are laid out, either implicitly if no change from previous round, or explicitly in a blog post if there are new rules. This is: reward function, bounds, etc. Then teams stake, buy data, consume, etc. And LPs are given DF rewards based on staking, DCV, etc at the end of the week. Overall cycle time is one week.

Caveat: it’s no at least in theory! Sometimes there may be tweaks if there is community consensus, or a bug.

## Staking FAQs
_Q: What about passive stakers — people who just want to stake in one place and be done?_

A: Earnings are passive by default

_Q: What about active stakers — people who want to do extra work and get rewarded?_

A: Ot works. Half the DF revenue goes to veOCEAN stake that users can allocate. Allocate well → more $$

## Third-Party Market FAQs
_Q: What do you think could be the monetization / incentive options for third party dApps and Data Markets that build on top of OCEAN?_

A: People pay fees on fixed-rate exchange and in consume. 3rd party markets can get a cut of both. More info at Ocean docs.

_Q: Staking veOCEAN will be an important part in curating the most valuable datasets. Which earning opportunities will stakers have other than DF and fees generated from consume transactions?_

A: veOCEAN holders’ earning potential via fees and DF on their own could be quite substantial, eg given that a large portion of OCEAN supply is directed towards DF. No need for more ways per se. There won’t be a fee on locking OCEAN for veOCEAN, because adding that code would have meant changes to veCRV contracts, something we’re not doing for security reasons. Re ALGA or other apps making money on facilitating veOCEAN: there are several ways, the best way to get inspiration is to look at projects on top of base ve tokens, such as Convex, Aura, Redacted Cartel, and more.

## Pricing FAQs
_Q: In this scheme, can people stake on fixed-price datasets?_

A: Yes. They allocate their veOCEAN to datasets. Then DF rewards follow the usual DF formula: DCV * veOCEAN stake.

_Q: Does this work for other pricing schemes?_

A: Yes, from the get-go! It doesn’t matter how data is priced, this works for all schemes.

_Q: With pools getting wound down in Ocean Market, will fixed-price be its only pricing scheme?_

A: For now in Ocean Market, yes. However people can price datatokens however they like, leveraging whatever DeFi tools they like. For example. do an IDO via Liquidity Bootstrapping Pool, ending up in an unmodified Balancer AMM. And we will continue listening to the community, to understand best where to focus our efforts.

## Chains FAQ
_Q: Will the Market still need to be multi-chain?_

A: Yes, Ocean Market still needs to be multi-chain: all the reasons that we went multi-chain for are as valid as ever.

_Q: Which chain will veOCEAN be deployed on?_

A: Current plan is for veOCEAN core contracts will only be on Ethereum mainnet, and allowing to allocate veOCEAN tokens to any chain.

_Q: Which chain should fixed price assets be deployed now in order to be ready for veOCEAN deployment and DF in 3 months time?_

A: You can publish assets to any chain that Ocean supports.
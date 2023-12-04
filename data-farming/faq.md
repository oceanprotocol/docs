---
title: Data Farming FAQ
description: Frequently Asked Questions about Data Farming
---
## Data Farming FAQ

### Staking and Risk

<details>

<summary>What does "staking" mean in an Ocean context?</summary>

Its precise meaning depends on the DF stream.

- Passive DF: stake OCEAN = lock OCEAN into veOCEAN
- Volume DF: stake OCEAN on asset = allocate veOCEAN towards an asset
- Challenge DF: (there is no staking)
- Predictoor DF: put OCEAN into a prediction transaction
  
</details>

<details>

<summary>Are there any risks associated with DF?</summary>

As with any system, inherent risks exist. We try to minimize them, as follows.

- Passive DF: uses veCRV contracts which have been battle-tested in high volume since 2020.
- Volume DF: doesn't change veOCEAN behavior. Rather, separate contracts "see" the veOCEAN staked to compute amount of rewards.
- Challenge DF: no funds at risk
- Predictoor DF: you stake a small amount of OCEAN in each epoch (eg every 5min). If issues arise, you can get out quickly. 

</details>

<details>

<summary>Is there any impermanent loss (IL) in my staking?</summary>

No. IL is typically associated with providing liquidity to decentralized exchange or pools. There are no pools involved in any of the DF streams [1].
</details>


### Rewards Payout

<details>

<summary>What APYs can I expect?</summary>

Historically, annual percentage yields (APYs) are 5-15%. See [APY docs](apys.md) for details.
  
</details>

<details>

<summary>When I claim my OCEAN, do I need to restake them manually, or are they auto-compounded?</summary>

They are not auto-compounded.

They can be claimed/redeposited whenever you want. If you don't claim, they just stack up. There is no loss.

The [APY docs](apys.md) provide formulae on compounding vs. not.  
</details>

<details>

<summary>Are rewards paid out in veOCEAN or OCEAN?</summary>

All rewards in Data Farming are paid out in OCEAN and can be claimed at the every epoch.

</details>

<details>

<summary>Can the DF rewards change during a given week?</summary>

No. At the beginning of a new DF round, rules are laid out, either implicitly if no change from the previous round, or explicitly in a blog post if there are new rules.

Caveat: it’s "no" at least in theory! Sometimes there may be tweaks if there is community consensus or a bug.

</details>

<details>

<summary>I locked 10,000 OCEAN but only received 0.1 OCEAN as a reward. What gives? </summary>

If you've locked 10,000 OCEAN for a short period, it's possible to see a near-0% APY. 

To boost your APY, consider locking your OCEAN for a more extended period. It's not only about the amount you lock but also **the duration of the lock that matters most**. Longer lock periods yield more significant results. 

</details>


<details>

<Summary>I locked my OCEAN for veOCEAN but can't see the rewards. What am I missing?</Summary>

Please hang in there and stay patient, as it can take almost two weeks to receive your first reward. 😊
  
</details>

<details>

<summary>High gas fields hurt my yield! What is the best time to avoid high gas fees?</summary>

When gas is cheap. [Here](https://www.useweb3.xyz/gas) is data on gas prices.

Also, remember that you don't need to claim rewards and re-stake every week. You could do it less frequently to avoid gas fees. (Balance this with the benefits of compounding.)
</details>

<details>

<summary>Where do I learn more about the OCEAN reward schedule?</summary>

In its [docs page](reward-schedule.md).
</details>


### Passive DF (and veOCEAN)

<details>

<summary>How much OCEAN do I need to lock to earn yield?</summary>

There is no minimum amount. The rewards will depend on the amount you lock.

You will get passive rewards by default when you lock OCEAN. And you can get Volume DF rewards if you allocate veOCEAN to data assets.

</details>


<details>

<summary>If I lock my OCEAN for 6 months and the price of OCEAN goes up during that time, will my staked tokens increase in value as well?</summary>

Yes. When you stake OCEAN, you'll receive them back at the end of the lock-up period. If the value increases during this time, your OCEAN will appreciate in worth. The same principle applies in reverse if the value decreases

</details>

<details>

<summary>What's the amount of veOCEAN one can get for locking 1 OCEAN?</summary>

1 veOCEAN if you lock for 4 years.
  
</details>

<details>

<summary>If I withdraw before the unlock date, what happens to my veOCEAN and rewards?</summary>

You can't withdraw before the unlock date.

</details>

<details>

<summary>Is there a way to transform veOCEAN to OCEAN gradually over the lock period?</summary>

No, you can't convert your veOCEAN to OCEAN during the lock period. When the lock period concludes, you gain access to all your locked OCEAN.  
  
</details>

<details>

<summary>Is it possible to only participate in Passive Rewards?</summary>

Yes.

And, you participate by default in Passive Rewards when you lock OCEAN.  

But to maximize your rewards, you will also need to engage in the other streams.
  
</details>

<details>

<summary>Where do I learn more about veOCEAN & Passive DF?</summary>

In its [docs page](passivedf.md).
</details>


### Volume DF

<details>

<summary>What data assets are eligible for Volume DF?</summary>

The data asset may be of any type — data feed, API, file, etc. dataset (for static URIs), algorithm for Compute-to-Data, or any other Datatoken token-gated system. The data asset may be fixed price or free price. 

</details>

<details>

<summary>Do I only receive Volume DF rewards if the datasets I've staked on have DCV?</summary>

Yes, correct.

</details>

<details>

<summary>How do I analyze projects and decide where to allocate? Do I look at current and past APYs, or is there more to consider? </summary>

Curators can select datasets to stake on based on previous DCV, publisher reputation, and more.

You can see DCV stats in the DF webapp's [Volume DF page](https://df.oceandao.org/volume-df).

Finally, Predictoor data feeds are promising, since they have good baseline volume due to Predictoor DF.

</details>

<details>

<summary>The datatoken price may change throughout the week. What price is taken in the DCV calculation?</summary>

The price is taken at the same time as each consume. E.g. if a data asset has three consumes, where the price was 1 OCEAN when the first consume happened, and the price was 10 OCEAN when the other consumes happened, then the total DCV for the asset is 1 + 10 + 10 = 21.

</details>

<details>

<summary>How long does it take for the system to update round allocations for veOCEAN?</summary>

Allocations happen instantly.

However, your voting power is counted progressively throughout the week and requires you to keep your veOCEAn allocated on datasets for it to work.

</details>


<details>

<summary>Where do I learn more about Volume DF?</summary>

In its [docs page](volumedf.md).
</details>

### Challenge DF

<details>

<summary>Where do I learn more about Challenge DF?</summary>

In its [docs page](challengedf.md).
</details>

### Predictoor DF

<details>

<summary>Where do I learn more about Predictoor DF?</summary>

In its [docs page](predictoordf.md).
</details>


### Parameters & Stats

<details>

<summary>Where can I find the veOCEAN and DF contracts?</summary>

They are deployed on the Ethereum mainnet, alongside other Ocean contract deployments. [Here](https://github.com/oceanprotocol/contracts/blob/main/addresses/address.json) is the full list of contract deployments.

</details>


<details>

<summary>What % of OCEAN is currently locked?</summary>

[autobotocean.com](https://autobotocean.com/veOcean) has those stats, and more.

</details>

<details>

<summary>What is the official veOCEAN epoch start_time?</summary>

veFeeDistributor has a start\_time of 1663804800 (Thu Sep 22 2022 00:00:00).

</details>

## Notes

[1] The initial version of Data Farming - in DF Alpha phase (DF1-DF4) - _did_ involve providing liquidity to datatoken pools, and therefore did incur risk of Impermanent Loss (IL). For this reason and others, we moved away from pools, to veOCEAN for the DF/VE Alpha phase and beyond (>=DF5). Therefore there has been no IL risk since then. [Here are details](https://blog.oceanprotocol.com/veocean-is-launching-data-farming-is-resuming-abed779211e3).
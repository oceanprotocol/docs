---
title: Data Farming FAQ
description: Frequently Asked Questions about Data Farming
---
## Data Farming FAQ

### Networks

<details>

<summary>Which networks does Data Farming operate on?</summary>

OCEAN rewards for all DF streams & substreams are on Ethereum mainnet. One exception: rewards for Predictoor DF are on Oasis Sapphire.

Here are the networks for each DF stream & substream:
- Passive DF: users lock OCEAN for veOCEAN on Ethereum mainnet
- Volume DF: users can allocate veOCEAN to data assets on Etherum mainnet, Polygon, BSC, Moonriver, Energy Web Chain, or Sapphire.
- Challenge DF: users submit predictions on Mumbai (Polygon testnet).
- Predictoor DF: users submit predictions on Sapphire. 

The [networks docs](../discover/networks/README.md) have more info about networks.

</details>


### veOCEAN and staking

<details>

<summary>I'm new to Ocean and I want to stake my OCEAN. Can you show me how? Where can I learn about APY and locks?</summary>

Absolutely, we've adopted the voting escrowed system from Curve Finance (veCRV) and created veOCEAN.

veOCEAN lets you lock OCEAN to receive veOCEAN. You then automatically access Passive Rewards via Data Farming while learning more about Active Rewards. Here are some handy resources to help you get started:
1. [Tutorial](user-guides/how-to-volumedf.md)
2. [Estimate your APY](user-guides/how-to-estimate-apy.md)

By exploring these links, you'll get step-by-step guidance and insights into maximizing your rewards with veOCEAN.

We cannot offer guidance as how to allocate your voting power, that's your decision.
  
</details>

<details>

<summary>Are veOCEAN tradeable or have a market price?</summary>

OCEAN has a market price; it's [available](https://www.oceanprotocol.com/ocean-token) on many exchanges.

Once you lock OCEAN, you get veOCEAN then it has more constraints. veOCEAN cannot be traded or transferred. However, you can [delegate](delegate.md) veOCEAN to others, such that they control allocation to data assets and receive rewards.

There's also the [psdnOCEAN](https://www.coingecko.com/en/coins/poseidon-ocean) option. psdnOCEAN is an ERC20-compliant "liquid staking derivative" [contract](https://etherscan.io/token/0x51fa2efd62ee56a493f24ae963eace7d0051929e) that in turn holds veOCEAN. psdnOCEAN is a product by [H2O](https://www.h2odata.xyz//), a team separate from - though collaborating with - the Ocean core team.
- You can lock OCEAN for psdnOCEAN via [the H2O "convert" dapp](https://liquid-staking.h2odata.xyz/convert/ocean).
- psdnOCEAN can be traded in exchanges like the [OCEAN-psdnOCEAN Balancer pool](https://app.balancer.fi/#/ethereum/swap?outputCurrency=0x51Fa2efd62ee56a493f24AE963eAce7D0051929E). ⚠️Be careful - if liquidity is low you will experience high slippage.
</details>

<details>

<summary>Which chain is veOCEAN deployed on?</summary>

[veOCEAN & DF](https://github.com/oceanprotocol/contracts/tree/main/contracts/ve) core contracts are deployed on Ethereum mainnet.

</details>

### veOCEAN and Staking

<summary>How much Ocean do I need to stake to earn interest?</summary>

There is no minimum amount. The rewards will depend on the amount you lock.
You will get passive rewards by default when you lock tokens. On top of that, you can get active rewards if you actively participate in the program. Here are some [resources](user-guides/how-to-veocean.md).

</details>

<details>

<Summary>I locked my OCEAN for veOCEAN but can't see the rewards. What am I missing?</Summary>

Please hang in there and stay patient, as it can take almost two weeks to receive your first reward. 😊
  
</details>

<details>

<summary>If I stake my Ocean for 6 months and the price of Ocean goes up during that time, will my staked tokens increase in value as well?</summary>

Yes. When you lock OCEAN, you'll receive them back at the end of the lock-up period. If the value increases during this time, your OCEAN will appreciate in worth. The same principle applies in reverse if the value decreases

</details>

<details>

<summary>Is it possible to only participate in Passive Rewards? Or should I participate in Active Rewards?</summary>

You participate by default in Passive Rewards when you lock OCEAN.  

But to maximize your rewards, you will also need to engage in Active Rewards.  

It's worth noting that active staking does come with associated costs, such as gas fees which you will need to cover.  

More information about [APYs](user-guides/how-to-estimate-apy).  
  
</details>

### Liquid Staking
<details>

<summary>Are there any liquid staking wrappers for veOCEAN?</summary>

You can also earn active staking rewards by assigning your veOCEAN directly on datasets or through a proxy ([psdnOCEAN](https://docs.h2odata.xyz/protocol-overview/psdnocean-veocean-liquid-staking)), which deploys your veOCEAN at no risk, in order to gain a share of active rewards.

</details>

<details>

<summary>Why the ratio between psdnOCEAN and OCEAN is not close to 1:1?</summary>

The ratio stands at 80% to 20%, creating an imbalanced pool that minimizes price fluctuations. You might find this [resource](https://blog.oceanprotocol.com/psdnocean-the-first-liquid-staking-wrapper-by-the-h2o-team-is-now-live-a3330e15fa5c) valuable.

</details>

<details>

<Summary> How to convert PsdnOcean back to OCEAN ?</Summary>

You can convert psdnOCEAN back to OCEAN using the Balancer AMM liquidity [pool](https://app.balancer.fi/#/ethereum/pool/0xf8c4cd95c7496cb7c8d97202cf7e5b8da2204c2b00020000000000000000039e).

[Price information](https://www.geckoterminal.com/eth/pools/0xf8c4cd95c7496cb7c8d97202cf7e5b8da2204c2b) for psdnOCEAN.

</details>

### Locking & Withdrawing

<details>

<summary>What's the amount of veOCEAN one can get for locking 1 OCEAN?</summary>

1 veOCEAN if you lock for 4 years. Learn more about VeOCEAN [here](df-veocean.md).
  
</details>

<details>

<summary>If I withdraw before the unlock date, what happens to my veOCEAN and rewards?</summary>

You can't withdraw before the [unlock date](df-veocean.md).

</details>

<details>

<summary>Is there a way to transform veOCEAN to OCEAN gradually over the lock period?</summary>

No, you can't convert your veOCEAN to OCEAN during the lock period. When the lock period concludes, you gain access to all your locked OCEAN.  

To learn more about veOCEAN, check out this [resource](df-veocean).
  
</details>

<details>

<summary>What is the best time to lock OCEAN to avoid high gas fees?</summary>

When [gas](https://www.useweb3.xyz/gas) is cheap. 

</details>

### Claiming Rewards

<details>

<summary>When I claim my OCEAN, do I need to restake them manually, or are they auto-compounded?</summary>

They are not auto-compounded.

They can be claimed/redeposited whenever you want. If you don't claim, they just stack up. There is no loss.
  
</details>

### APY

<details>

<summary>Are rewards paid out in veOCEAN or OCEAN?</summary>

All rewards in Data Farming are paid out in OCEAN and can be claimed at the every epoch.

</details>

<details>

<summary>I locked 10k OCEAN but only received 0.1 OCEAN as a reward. What gives? </summary>

If you've locked 10,000 OCEAN for a short period, it's possible to see a near-0% APY. 

To boost your APY, consider locking your OCEAN for a more extended period. It's not only about the amount you lock but also **the duration of the lock that matters most**. Longer lock periods yield more significant results. You can find further insights in this [document](user-guides/how-to-estimate-apy).

</details>

<details>

<summary>Could you explain the benefits of staking OCEAN and how the APY is calculated?</summary>

Yes, You can find the details in these resources.⁣
1. [Benefits](df-veocean).
2. [Passive Rewards](df-intro).
3. [Emissions & APYs](df-emissions-apys).
  
</details>

<details>

<summary>What is the current APY (Annual Percentage Yield) for staking?</summary>

The APY is highly dependent on the locked amount and more importantly on the locking period. Please see the [Estimate your APY](user-guides/how-to-estimate-apy) guide.

</details>

<details>

<summary>Where can I see the history for Data Farming APY to get an idea of what to expect?</summary>

Just, visit the Data Farming website and scroll down to the [Data Farming History](https://df.oceandao.org/activerewards) section.
  
</details>

### Volume DF

<details>

<summary>What assets are eligible for Data Farming?</summary>

The data asset may be of any type — dataset (for static URIs), algorithm for Compute-to-Data, or any other Datatoken token-gated system. The data asset may be fixed price or free price. You can find more details in the [DF Background page](df-volumedf.md#assets-that-qualify-for-data-farming)

</details>

<details>

<summary>Do I only receive Active Rewards from Volume DF if the datasets I staked on receive DCV?</summary>

Yes, you will receive [Active Rewards from Volume DF](df-intro#what-are-active-rewards) if the assets you've curated have Data consume Volume(DCV). ⁣

</details>

<details>

<summary>Is there a dashboard to view the volume of DF-main?</summary>

Yes

[DF Dashboard](https://df.oceandao.org/datafarming) (per round).
[Autobot](https://autobotocean.com/volumes) (historical).

</details>

<details>

<summary>How do I analyze projects and decide where to allocate? Do I look at current and past APYs, or is there more to consider? </summary>

Curators can select datasets to stake on based on several factors such as publisher reputation, number of previous consumes of the dataset, ratings, and comments of others.

We provide an overview into many of these stats inside the [Volume DF page](https://df.oceandao.org/volume-df) in the Data Farming dApp.

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

<summary>Are there any risks associated with Active Rewards?</summary>

When it comes to active staking, you aren't exposed to additional risks. Your veOCEAN remain securely locked, and your role is to curate datasets by allocating them.

As with any system, inherent risks exist. In terms of the liquidity you provide, rest assured that we have implemented battle-tested contracts, protecting assets worth billions, including veCRV. With this model, there is no liquidity risk, and you are shielded from losing your OCEAN due to Impermanent Loss (IL); your OCEAN are held securely in lock.

More info [here](user-guides/how-to-volumedf.md).

</details>

### Parameters & Stats
<details>

<summary>What is the official veOCEAN epoch start_time?</summary>

veFeeDistributor has a start\_time of 1663804800 (Thu Sep 22 2022 00:00:00).

</details>

<details>

<summary>Where can I find the veOCEAN and DF contracts?</summary>

They are deployed on the Ethereum mainnet, alongside other Ocean contract deployments. You can find the [full list of contracts here](https://github.com/oceanprotocol/contracts/blob/main/addresses/address.json).

</details>

<details>

<summary>Can the reward function change during a given week?</summary>

No. At the beginning of a new DF round (DF1, DF2, etc.), rules are laid out, either implicitly if no change from the previous round, or explicitly in a blog post if there are new rules. This is: reward function, bounds, etc. Then teams stake, buy data, consume, etc. LPs are given DF rewards based on staking, DCV, etc. at the end of the week. Overall cycle time is one week.

Caveat: it’s no at least in theory! Sometimes there may be tweaks if there is community consensus or a bug.

</details>

<details>

<summary>What is the percentage of tokens currently staked?</summary>

You can find the statistics for the number of locked tokens [here](https://autobotocean.com/veOcean). As of September 2023, there are approximately 700 million OCEAN in circulation, out of which approximately 30 million have been locked. ⁣

</details>

<details>

<summary>Is there a way to check the duration and amounts of veOCEAN locked on-chain for all wallets?</summary>

Yes, this information is available. Indeed, there is a technical aspect involved. You'll need to have some technical knowledge because you'll be required to query the subgraph. You can find a working example of how to get the list of holders [in the subgraph documentation](../developers/subgraph/get-veocean-stats#get-the-veocean-holders-list). Feel free to run the script by clicking on the "run" button.
  
</details>
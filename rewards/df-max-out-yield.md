---
description: >-
  If you've gotten this far, then you're half way to becoming a pro in
  Ocean Protocol's Data Farming dApp!
---

# Mastering Volume DF (Purple Belt)

<figure><img src="../.gitbook/assets/gif/i-know-kung-fu.gif" alt=""><figcaption><p>You know enough to be dangerous.</p></figcaption></figure>

## Yield Kung Fu

If you only lock your OCEAN tokens to get passive yield, then you're leaving money on the table. 

Data Farming rewards farmers that allocate their veOCEAN tokens to assets that **generate revenue** in the Ocean ecosystem. (No revenue, no rewards.) In addition, Data Farming incentivizes **publishing** assets in the Ocean ecosystem too - you get **2x the Allocation Power** when you allocate to an asset that you publish!

Thus, if you really want to max out Volume DF APY:

1. Lock your OCEAN for 4 years to receive 100% voting power.
2. Have other participants delegate their Allocation Power to you.
3. Create & publish assets (and make $ in selling them) — or work with people who can.
4. Point your Allocation Power towards your published assets to receive a 2x bonus.
5. Claim weekly Passive Rewards, Active Rewards, and update your lock.

Another way to improve your yield is by [delegating](../user-guides/data-farming/how-to-delegate.md) your veOCEAN to someone to generate Active Rewards for you! In this case, the idea is that they may do a better job at publishing assets or picking winners better than you can. However, there is some risk to this because the rewards generated will be sent to the person you delegated to, and it's their responsibility to return those rewards back to you if that's the agreement you both made.

### Data Farming success metrics

**Data Consume Volume (DCV)** is our term for **the total $ amount spent on purchases of Ocean ecosystem assets**, transaction fees, and more. The higher DCV of Ocean ecosystem assets, then the more OCEAN rewards are distributed to Data Farmers. It's that simple!

### Those assets don't sell themselves!

Marketing your assets to buyers can be a big challenge. Just because you publish them in the Ocean ecosystem doesn't mean that they will sell. It will take real work. Your reward is great APY. Its incentives all the way down 🙂

<figure><img src="../.gitbook/assets/gif/hustlin.gif" alt=""><figcaption></figcaption></figure>

### Don't have time to publish your own datasets?

Another way to improve your yield is by [delegating](../user-guides/README.md#how-to-delegate-your-active-rewards) your veOCEAN to someone to generate Active Rewards for you! In this case, the idea is that they may do a better job at publishing assets or picking winners better than you can. However, there is some risk to this because the rewards generated will be sent to the person you delegated to, and it's their responsibility to return those rewards back to you if that's the agreement you both made. To read more, see our [info on Delegation](../user-guides/README.md#how-to-delegate-your-active-rewards).

### How Rewards are Calculated

The Reward Function (RF) governs how active rewards are allocated to Data Farmers.

**Rewards are calculated as follows:**

1. Distribute OCEAN across each asset **based on rank**: highest-DCV asset gets the most OCEAN, etc.
2. For each asset and each veOCEAN holder: If the holder is a publisher, 2x the effective allocation – Baseline rewards = (% allocation in asset) \* (OCEAN for an asset) – Bound rewards to the asset by 125% APY – Bound rewards by asset’s DCV \* 0.1%.

For mathematicians and coders, you can find this code inside [calcrewards.py](https://github.com/oceanprotocol/df-py/blob/main/df_py/volume/calc_rewards.py) in the Ocean Protocol [df-py repo](https://github.com/oceanprotocol/df-py/)!

### What are Publisher Rewards?

<figure><img src="../.gitbook/assets/gif/just-publish.gif" alt=""><figcaption><p>Publishing makes you *more* OCEAN rewards</p></figcaption></figure>

Data Farming strongly incentivizes publishing assets in the Ocean ecosystem by giving double the active rewards to Data Farmers that allocate to their own published assets.

How is it calculated? _All the veOCEAN a Data Farmer has allocated to an asset they’ve published is **doubled for the rewards calculation.**_

You can read more about the implementation [in this blog post](https://blog.oceanprotocol.com/data-farming-publisher-rewards-f2639525e508).

### What are Ranked Rewards?

In Data Farming Round 23 Ranked Rewards were introduced to smooth out the reward distribution by using a logarithmic function.

**Since rewards are distributed across the Top 100 assets, all data farmers (Publishers & Curators) are now incentivized to support a broader range of assets rather than optimizing on a single asset.**

At the top-end, this helps increase the quality and diversification of inventory.

At the bottom-end, this eliminates some potential free-rider issues and smooths out the reward distribution.

![Ranked Rewards](../.gitbook/assets/rewards/ranked_rewards_study.png)

You can read more about the why, what, and how of Ranked Rewards [in this blog post](https://blog.oceanprotocol.com/data-farming-df22-completed-df23-started-reward-function-tuned-ffd4359657ee) and find the full study [in these slides](https://docs.google.com/presentation/d/1HIA2zV8NUPpCELmi2WFwnAbHmFFrcXjNQiCpEqJ2Jdg/).

### Assets that Qualify for Data Farming

Data assets that have veOCEAN allocated towards them get Data Farming active rewards.

The asset may be of any type — dataset, an algorithm for Compute-to-Data, or any other Datatoken token-gated system. The asset may be fixed price or free price. If fixed price, any token of exchange is alright (OCEAN, H2O, USDC, etc).

To qualify for DF, an asset must also:

* Have been created by Ocean Smart contracts [deployed](https://github.com/oceanprotocol/contracts/blob/v4main/addresses/address.json) by OPF to [production networks](../discover/networks/README.md)
* The asset must be listed on Ocean Market
* Can’t be in [purgatory](https://github.com/oceanprotocol/list-purgatory/blob/main/policies/README.md)

### Reward Schedule

The table below shows the total amount of OCEAN rewards that will be distributed among Passive and Active rewards each week. The table cross-references DF Round Number, Start Date, Phase & Week, Sub-Phase & Week, and OCEAN Rewards/Week.

<figure><img src="../.gitbook/assets/rewards/reward_schedule.png" alt=""><figcaption><p><em>Ocean Reward Schedule for the next 20+ years</em></p></figcaption></figure>

<figure><img src="../.gitbook/assets/gif/cash-flow.gif" alt=""><figcaption></figcaption></figure>

### A Brief History of Data Farming

Data Farming has evolved over time and will continue to do so as the Emission Curve progresses. Below are the phases and parameters incurred during the evolution of the Data Farming program. We are now in the DF Main phase.

**DF Alpha - Rounds 1-4 (4 wks)**\
10K OCEAN rewards were budgeted per week. Counting started Thu June 16, 2022 and ended July 13, 2022. Rewards were distributed at the end of every week, for the activity of the previous week. It ran for 4 weeks. The aim was to test technology, learn, and onboard data publishers.

**DF/VE Alpha - Rounds 5-8 (4 wks)**\
10K OCEAN rewards were budgeted per week. Counting started Thu Sep 29, 2022 and ended Oct 27, 2022. Rewards were distributed at the end of every week, for the activity of the previous week. It ran for 4 weeks. The aim was to resume Data Farming along with veOCEAN, test the technology, onboard data publishers, and keep learning.

**DF Beta - Rounds 9-28 (20 wks)**\
Up to 100K OCEAN rewards were budgeted per week. Counting started Thu Oct 27, 2022, and ended on March 15, 2023. It ran for 20 weeks. The aim was to test the effect of larger incentives, and support ecosystem participation, while continually refining the underlying technology.

**DF Main - Rounds 29-1000+**\
We are now in DF Main which immediately followed the release of DF Beta on Thu Mar 16, 2023. Rewards begin at 150k per week and goes up to 1.1M OCEAN per week. DF Main emits 503.4M OCEAN worth of rewards and lasts for decades.

The amount of OCEAN released is determined by the emission schedule as defined by the [Emission Curve](df-emissions-apys.md#emissions--first-5-years), and perhaps more easily understood in the Reward Schedule below.

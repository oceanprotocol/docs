---
title: veOCEAN & Data Farming FAQ
description: Frequently Asked Questions about Data Farming
---
## veOCEAN FAQ

<details>

<summary>Are the veOCEAN tokens tradeable or have a market price?</summary>

No. They cannot be traded, transferred, or sold. ⁣
⁣
You can delegate veOCEAN to others in order to facilitate farming, however, you need to understand how this works. ⁣
⁣
You can get the necessary info in the [docs](https://docs.oceanprotocol.com/user-guides/data-farming). ⁣
</details>

<details>

<summary>Do you offer staking of $OCEAN? Is there a tutorial available for staking, and can I learn about the APY and locking time for unstaking?</summary>

Absolutely, we've adopted a staking approach similar to veCRV, allowing you to lock your Ocean tokens for veOCEAN to enjoy both passive and active rewards. Here are some handy resources to help you get started:
1. [Tutorial](https://docs.oceanprotocol.com/veocean-data-farming/veocean-data-farming-tutorial)
2. [Estimate your APY](https://docs.oceanprotocol.com/user-guides/data-farming/how-to-estimate-apy)

Feel free to explore these links for step-by-step guidance and insights into maximizing your staking rewards with veOCEAN.

PS: We cannot offer guidance related to where to allocate your tokens, that's your decision. Your tokens, your curated assets.
  
</details>

<details>

<summary>Is there a way to transform VeOcean to Ocean gradually over the lock period? Also, how will VeOcean be distributed over a certain time frame, and will Ocean tokens be reduced at the end of the lock period?</summary>

No, you can't convert your VeOcean to Ocean during the lock period. However, you have the opportunity to earn rewards (in $OCEAN) through active or passive staking. When the lock period concludes, you gain access to all your locked Ocean tokens. You can find additional information about OCEAN emissions [here](https://docs.oceanprotocol.com/veocean-data-farming/emissions-apys). 
It's important to note that you won't lose Ocean tokens by locking them, and they won't be reduced at the end of the lock period. To learn more about VeOcean, check out this [resource](https://docs.oceanprotocol.com/rewards/df-veocean).
  
</details>

<details>

<summary>Is there a way to check the duration and amounts of veOCEAN locked on-chain for all wallets?</summary>

Yes, this information is available. Indeed, there is a technical aspect involved. You'll need to have some technical knowledge because you'll be required to query our subgraph. You can find a working example in our [documentation](https://docs.oceanprotocol.com/developers/subgraph/get-veocean-stats#get-the-veocean-holders-list). Feel free to run the script by clicking on the "run" button.
  
</details>

<details>

<summary>What is the official formula for the Linear Decay?</summary>

The Linear Decay formula for veOCEAN can be expressed as follows in python.

```python
FOUR_YEARS = 60 * 60 * 24 * 7 * 52

veOcean_balance = OCEAN_amount_locked * (your_unlock_timestamp — current_unix_timestamp ) / FOUR_YEARS
```

To learn more about systems driving veOCEAN and Data Farming, please [visit our df-py github repository](https://github.com/oceanprotocol/df-py).

</details>

<details>

<summary>Can I stake OCEAN tokens on the Binance Smart Chain protocol?</summary>

1. veOCEAN exists on the ETH mainnet only. 
2. Data Farming Active Rewards has native multi-chain support.
  
</details>

<details>

<summary>What's the amount of veOcean one can get for locking 1 Ocean token?</summary>

1 veOCEAN if you lock for 4 years. Learn more about VeOCEAN [here](https://docs.oceanprotocol.com/rewards/df-veocean).
  
</details>

<details>

<summary>Are there any liquid staking wrappers for veOCEAN?</summary>

You can also earn active staking rewards by assigning your veOCEAN directly on datasets or through a proxy ([psdnOCEAN](https://docs.h2odata.xyz/protocol-overview/psdnocean-veocean-liquid-staking)), which deploys your veOCEAN at no risk, in order to gain a share of active rewards.

</details>

<details>

<summary>Why the ratio between psdnOCEAN and OCEAN tokens is not close to 1:1?</summary>

The ratio stands at 80% to 20%, creating an imbalanced pool that minimizes price fluctuations. You might find this [resource](https://blog.oceanprotocol.com/psdnocean-the-first-liquid-staking-wrapper-by-the-h2o-team-is-now-live-a3330e15fa5c) valuable.

</details>

<details>

<Summary> How to convert PsdnOcean back to $OCEAN ?</Summary>

You can convert psdnOCEAN back to $OCEAN using the Balancer AMM liquidity [pool](https://app.balancer.fi/#/ethereum/pool/0xf8c4cd95c7496cb7c8d97202cf7e5b8da2204c2b00020000000000000000039e).

[Price information](https://www.geckoterminal.com/eth/pools/0xf8c4cd95c7496cb7c8d97202cf7e5b8da2204c2b) for psdnOCEAN.


</details>

### Locking (Staking)

<details>

<summary>What is veOcean and staking in context of Ocean Protocol? </summary>

[veOCEAN](https://docs.oceanprotocol.com/rewards/df-veocean) (vote-escrowed OCEAN) is a special token in the Ocean Protocol ecosystem. Users can obtain veOCEAN by Locking their OCEAN tokens for a specific period of time. Their OCEAN cannot be accessed during this time as a sign of conviction that lets them engage with the network. Longer lock periods for veOCEAN typically yield higher rewards.
You can lock your Ocean Token at - [df.oceandao.org](https://df.oceandao.org)

</details>

<details>

<summary>Could you explain the benefits of staking $OCEAN tokens and how the APY is calculated?</summary>

Yes, You can find the details in these resources.⁣
1. [Benefits](https://docs.oceanprotocol.com/rewards/veocean).
2. [Passive Rewards](https://docs.oceanprotocol.com/rewards/df-intro).
3. [Emissions & APYs](https://docs.oceanprotocol.com/rewards/df-emissions-apys).
  
</details>

<details>

<summary>What is the percentage of tokens currently staked?</summary>

You can find the statistics for the number of locked tokens [here](https://autobotocean.com/veOcean). As of September 2023, there are approximately 700 million Ocean tokens in circulation, out of which approximately 30 million have been locked. ⁣

</details>

<details>

<summary>Is there any value to veOcean tokens? When staking them on datasets, do you receive veOcean or Ocean tokens instead?</summary>

[veOCEAN](https://docs.oceanprotocol.com/rewards/df-veocean ) is locked $OCEAN and thus has exactly the same price as $OCEAN when unlocked. When veOCEAN is staked, rewards are granted back in veOCEAN. veOCEAN can be converted to $OCEAN at any time by the owner after the locking period ends. ⁣⁣

</details>

<details>

<summary>Are there any risks associated with staking Ocean tokens? Can the owner of a dataset run away with my coins? Are there any potential penalties or slashing mechanisms?</summary>

There are no counterparty risks associated with staking $OCEAN. Ocean uses standard, tried-and-audited "ve" smart contracts without modification. It is nonetheless conceivable that there exists a yet-to-be-discovered vulnerability that may be exploited in the future so put only amounts at risk that you are comfortable losing.

</details>

<details>

<summary>Is active staking on datasets limited to the ones I specifically staked my veOcean on? Do I receive active staking rewards only if the datasets I staked on receive DCV?</summary>

Yes, you will receive [active rewards](https://docs.oceanprotocol.com/rewards/df-intro#what-are-active-rewards) if the assets you've curated have Data consume Volume(DCV). ⁣

</details>

<details>

<summary>What is the current APY (Annual Percentage Yield) for staking?</summary>

The APY is highly dependent on the locked amount and more importantly on the locking period. A good tutorial to estimate the APY is available on our [documentation](https://docs.oceanprotocol.com/user-guides/data-farming/how-to-estimate-apy).

</details>

<details>

<summary>How do I analyze projects and decide where to allocate? Do I look at current and past APYs, or is there more to consider? </summary>

Active stakers can select datasets to stake on based on several factors such as publisher reputation, number of previous consumes of the dataset, ratings, and comments of others.

</details>

<details>

<summary>If I stake my Ocean for 6 months and the price of Ocean goes up during that time, will my staked tokens increase in value as well?</summary>

Yes. When you lock Ocean tokens, you'll receive them back at the end of the lock-up period. If the value increases during this time, your Ocean tokens will appreciate in worth. The same principle applies in reverse if the value decreases

</details>

<details>

<summary>I'm new to Ocean and I want to stake my Ocean tokens. Can you guide me on how and where to do this?</summary>

You can lock your Ocean tokens in exchange for veOcean tokens and participate in the Data Farming program. Please go through the mechanics and details of data farming to make informed decisions. [Here](https://docs.oceanprotocol.com/veocean-data-farming/veocean-data-farming-tutorial) is a good start.

</details>

<details>

<summary>Should I passively stake and earn income, or is it better to be an active speaker? Are there any risks associated with active staking?</summary>

You can't be an active staker without being a passive one first. In order to actively participate in data curation you first need to [lock](https://df.oceandao.org/passive-df) your OCEAN tokens and receive veOCEAN.
 In conclusion, the first and easiest step is to passively be part of Data Farming. There are no risks associated with actively participating in Data Farming, you are just pointing your voting power received by getting veOCEAN towards high-quality assets. Please keep in mind that active rewards have costs associated with mainly represented by the gas fees of the transaction(s) you need to do to actively allocate your voting power to certain data sets.

</details>

<details>

<summary>When I stake my Ocean tokens, do I need to restake them manually, or is it auto-compound?</summary>

They are not auto-compounded.

They can be claimed/redeposited whenever you want. If you don't claim, they just stack up. There is no loss.
  
</details>

<details>

<summary>Is it possible to participate only in passive income staking without participating in the active one? </summary>

Yes. You are participating by default in the passive rewards when you lock your Ocean tokens.

</details>

<details>

<summary>When one withdraws all locked amounts, the active and passive rewards are automatically claimed as well?</summary>

No, when the locking period concludes, and you withdraw your tokens, the rewards (passive or active) are not automatically claimed. You must claim them separately. 
  
</details>

<details>

<summary>How much Ocean do I need to stake to earn interest?</summary>

There is no minimum amount. The rewards will depend on the amount you lock.
You will get passive rewards by default when you lock tokens. On top of that, you can get active rewards if you actively participate in the program. Here are some [resources](https://docs.oceanprotocol.com/veocean-data-farming/veocean-data-farming-tutorial).

</details>

<details>

<summary>Does the lock open at 00:00 on the unlock day?</summary>

The lock opens at the time you lock your tokens. 
  
</details>

<details>

<summary>What is the best time to lock OCEAN to avoid high gas fees? Do I need to approve twice? </summary>

When gas prices are low, which you can check [here](https://www.useweb3.xyz/gas), the locking process occurs in two phases. Initially, you must approve the amount you wish to lock, and subsequently, you execute the lock transaction. If you've previously approved the desired amount for locking, there's no need to repeat the approval step. You only need to approve once, unless you intend to lock a higher amount than what you've already approved.

</details>

<details>

<summary>What about passive stakers — people who just want to stake in one place and be done?</summary>

Earnings are passive by default.

</details>

<details>

<summary>What about active stakers — people who want to do extra work and get rewarded?</summary>

Half the DF revenue goes to veOCEAN stake that users can allocate. Allocate well → more \$$.

</details>

<details>

<summary>How can I use my OCEAN tokens to earn more OCEAN? What is the role of curators and keepers?</summary>

"Staking" is similar to Ethereum or Chainlink where it gives you access to passive rewards. You can use OCEAN to access both passive and active rewards in Data Farming and earn more OCEAN.

Yes, there is active work in curating data assets. Both keep growing and you can now use delegation to make active rewards easier to access.

More info [here](https://docs.oceanprotocol.com/user-guides/data-farming).

</details>

<details>


<summary>Should I focus on passive income or be an active staker? What are the risks involved with active staking?</summary>

To optimize your rewards, you can choose to employ both passive and active methods. Passive rewards are automatically earned when you lock your Ocean tokens to acquire veOCEAN. It's crucial to understand that the longer you lock your tokens, the higher your potential rewards can be.

However, it's worth noting that active staking does come with associated costs, such as gas fees, which you will need to cover.

When it comes to active staking, you aren't exposed to additional risks. Your veOCEAN tokens remain securely locked, and your role is to curate datasets by allocating them.

As with any system, inherent risks exist. In terms of the liquidity you provide, rest assured that we have implemented battle-tested contracts, protecting assets worth billions, including veCRV. With this model, there is no liquidity risk, and you are shielded from losing your OCEAN due to Impermanent Loss (IL); your OCEAN tokens are held securely in lock.

More information about [APYs](https://docs.oceanprotocol.com/user-guides/data-farming/how-to-estimate-apy).
  
</details>

## Data Farming

<details>

<summary>Is there a tutorial on for staking Ocean tokens?</summary>

Yes, there is one in the [documentation](https://docs.oceanprotocol.com/veocean-data-farming/veocean-data-farming-tutorial).
  
</details>


<details>

<summary>If I withdraw before the unlock date, what happens to my veOCEAN and rewards?</summary>

You can't withdraw before the [unlock date](https://docs.oceanprotocol.com/rewards/df-veocean).

  
</details>


<details>

<summary>How long does it take for the system to update round allocations for veOCEAN?</summary>

Allocations happen instantly.

However, your allocation power is counted progressively throughout the week and requires you to leave them there for it to work.

</details>


<details>

<summary>What is the best time to lock OCEAN to avoid high gas fees?</summary>

When [gas](https://www.useweb3.xyz/gas) is cheap. 

</details>


<details>

<summary>When one withdraws all locked amounts, the active and passive rewards are automatically claimed as well?</summary>

No, when the locking period concludes, and you withdraw your tokens, the rewards (passive or active) are not automatically claimed. You must claim them separately. 

</details>

<details>

<summary> Which chain do most people stake on? What are the staking costs? </summary>

You can only "stake" via eth mainnet.

Data Farming Active Rewards has multi-chain support and you can farm assets on any chain.
  
</details>

<details>

<summary>Are there plans to switch to BNB or another blockchain for staking to reduce costs?</summary>

I'm sorry, but for now, all the earnings for veOCEAN holders can only be claimed on the Ethereum mainnet. We don't have immediate plans to add another chain for VeOcean staking at the moment. However, it's important to note that to be eligible for Data Farming, data assets for DFing can be published on various networks where Ocean Protocol is deployed in production, including ETH Mainnet and Polygon, among others. You can find more information about this in the [documentation](https://docs.oceanprotocol.com/rewards/df-veocean#veocean-earnings).
  
</details>

<details>

<summary>Which chain is veOCEAN be deployed on?</summary>

[veOCEAN & DF](https://github.com/oceanprotocol/contracts/tree/main/contracts/ve) core contracts are deployed on Ethereum mainnet and allow users to allocate veOCEAN tokens to any asset, on any chain.

</details>

<details>

<summary>Which networks are eligible for Data Farming?</summary>

Data assets for DF may published in any network where Ocean’s deployed in production: Eth Mainnet, Polygon, BSC, and more.

You can find a list of [all supported chains here](networks/README.md).

</details>

<details>

<summary>Where can I find the veOCEAN and DF contracts?</summary>

They are deployed on the Ethereum mainnet, alongside other Ocean contract deployments. You can find the [full list of contracts here](https://github.com/oceanprotocol/contracts/blob/main/addresses/address.json).

</details>

<details>

<summary>What is the official veOCEAN epoch start_time?</summary>

veFeeDistributor has a start\_time of 1663804800 (Thu Sep 22 2022 00:00:00).

</details>

<details>

<summary>Can I farm on other chains then Ethereum?</summary>

1. veOCEAN exists on ETH mainnet only. 
2. Data Farming Active Rewards has native multi-chain support.
  
</details>

<!--
### Data Farming

<details>

<summary>Is there historical data for Data Farming APYs to get an idea of what to expect?</summary>

Yes. Just,  Scroll down to the [Data Farming History](https://df.oceandao.org/activerewards) Section.
  
</details>


<details>

<summary>Why both my passive and active rewards appear to be the same and why I can't see the APY for active rewards.</summary>

Passive rewards are distributed relative to your % ownership of veOCEAN.

Active rewards are distributed relative to your ability to curate assets that are driving revenue. If you are able to curate quality assets better than others, you are able to receive a larger % reward.
Therfore, even though the total reward budgets are the same, the way you can earn rewards are not.

APY for active rewards is ~0% at the moment as most assets are not driving sales.
  
</details>

<details>

<summary>As a passive APY, what should I expect to receive? I locked 8057 Ocean three epochs ago and received 3.30 OCEAN so far. </summary>

That's a valid point, and we greatly value your feedback. We are continuously enhancing the Data Farming UI based on input like yours. 

Here's how the frontend logic works: We round your APY to two decimal places. So, if you've locked 8,000 OCEAN for a short period, it's possible to see a near-0% APY. 

To boost your APY, consider locking your OCEAN for a more extended period. It's not only about the amount you lock but also the duration of the lock that matters most. Longer lock periods yield more significant results. You can find further insights in this [document](https://docs.oceanprotocol.com/user-guides/data-farming/how-to-estimate-apy).
  
</details>

<details>

<summary>Is there a dashboard to view the volume of DF-main?</summary>

Yes

[DF Dashboard](https://df.oceandao.org/datafarming) (per round).
[Autobot](https://autobotocean.com/volumes) (historical).

</details>

<details>

<summary>Do we still receive rewards if there is no consume volume?</summary>

Yes, you will still earn Passive Rewards. However, Active rewards need "Data Consume Volume". More info on the [docs](https://docs.oceanprotocol.com/user-guides/data-farming).

</details>

<details>

<summary>What is the APY of data farming and is it rewarding to participate considering the high gas costs?</summary>

The amount of rewards is highly dependent on the locking period. the longer you lock your tokens, the greater the rewards. You can use [this document](https://docs.oceanprotocol.com/user-guides/data-farming/how-to-estimate-apy) to estimate the amount you'll get.

Likely because the sales were small and only 0.01% of sales volume is considered for rewards.

This data and information are well documented on the [Farms](https://df.oceandao.org/datafarming) page.

</details>

<details>

<summary>For data farming, will my stacked Ocean tokens be locked, or can I withdraw them anytime?</summary>

Your locked amount cannot be withdrawn before the lock ends. Your rewards in return can be claimed/redeposited whenever you want. If you don't claim, they just stack up. There is no loss.
  
</details>

<details>

<summary>Can I allocate my veOCEAN tokens for farming at any time, including now? </summary>

Allocations happen instantly. ⁣
⁣
However, your allocation power is counted progressively throughout the week and requires you to leave it there for it to work. ⁣
⁣
Learn more by going through the [documentation](https://docs.oceanprotocol.com/rewards/df-veocean). ⁣
  
</details>

<details>

<summary>Is there any guidance or tutorial available on when and where to allocate veOCEAN for data farming active rewards?</summary>

For sure, here is the intro [tutorial](https://docs.oceanprotocol.com/veocean-data-farming/veocean-data-farming-tutorial).
We cannot offer guidance related to where to allocate your tokens, that's your decision. Your tokens, your curated assets.

</details>

<details>

<summary>Do we need to claim data farming rewards weekly? What happens when the lock period ends? Are rewards automatically claimed?</summary>

They can be claimed/redeposited whenever you want. If you don't claim, they just stack up. There is no loss.
 
</details>

<details>
<summary>Are active rewards higher than passive rewards?  If I engage in active Data farming will I earn less passive rewards?</summary>

Engaging in active data farming does not diminish your passive rewards. By default, you will receive your passive rewards, and in addition to that, you'll also earn active rewards on top.

You have the flexibility to participate in every available reward stream.
</details>

<details>

<summary>What is the Data Farming APY? Can you provide a tutorial for staking OCEAN and information on APY and locking time?</summary>

Active rewards are dependent on data assets actually making sales for you to receive rewards. If you have veOCEAN allocated to a data asset that doesn't get consumed/has no demand, you do not receive rewards.

[Tutorial](https://docs.oceanprotocol.com/veocean-data-farming/veocean-data-farming-tutorial)

[Calculator](https://autobotocean.com/calculator)

</details>

<details>

<summary>How to choose the right asset to allocate veOcean?</summary>

Active stakers can select datasets to stake on based on several factors such as publisher reputation, number of previous consumes of the dataset, ratings and comments of others. ⁣


</details>

<details>

<summary>What assets are eligible for Data Farming?</summary>

The data asset may be of any type — dataset (for static URIs), algorithm for Compute-to-Data, or any other Datatoken token-gated system. The data asset may be fixed price or free price. You can find more details in the [DF Background page](../rewards/df-volumedf.md#assets-that-qualify-for-data-farming)

</details>

<details>

<summary>When exactly does counting start and finish, for a given week?</summary>

The counting starts at 00:00 am on Thursday UTC and ends at 11.59 pm UTC on the following Wednesday.

</details>

<details>

<summary>The datatoken price may change throughout the week. What price is taken in the DCV calculation?</summary>

The price is taken at the same time as each consume. E.g. if a data asset has three consumes, where the price was 1 OCEAN when the first consume happened, and the price was 10 OCEAN when the other consumes happened, then the total DCV for the asset is 1 + 10 + 10 = 21.

</details>

<details>

<summary>Can the reward function change during a given week?</summary>

No. At the beginning of a new DF round (DF1, DF2, etc.), rules are laid out, either implicitly if no change from the previous round, or explicitly in a blog post if there are new rules. This is: reward function, bounds, etc. Then teams stake, buy data, consume, etc. LPs are given DF rewards based on staking, DCV, etc. at the end of the week. Overall cycle time is one week.

Caveat: it’s no at least in theory! Sometimes there may be tweaks if there is community consensus or a bug.

</details>

<details>

<summary>Is it possible to use the Ocean tech stack without involving the OCEAN token? If fees are paid in other currencies, are they swapped to OCEAN to some extent? How does this impact the passive revenues of veOCEAN?</summary>

Ocean Market currently supports $OCEAN and $H2O for the exchange of services. Markets such as BDP and Acentrik may use another currency for the exchange of services. If these marketplaces are publicly accessible and indexable by Ocean Protocol, they are included in the data farming rewards program. If the marketplaces are closed and private, which cannot be indexed and tracked, then assets and activities are not part of the data farming program.
  
</details>

<details>

<summary>What is the use of Autobotocean.com?</summary>

Autobotocean.com can be used to explore Ocean-related metrics like $OCEAN locked vs. time, data consume volume, and more.
  
</details>

<details>

<Summary>I locked my OCEAN for veOcean but can't see the rewards. What am I missing?</Summary>

Please hang in there and stay patient, as it can take almost two weeks to receive your first reward. 😊
  
</details>

<details>

<summary>What is the APY of DF?</summary>

You can use [this document](https://docs.oceanprotocol.com/user-guides/data-farming/how-to-estimate-apy) to estimate your APY.
Please keep in mind that the algorithm offers higher incentives for longer lock periods. So, the longer you lock your assets, the greater your rewards will be. Once you go through our documentation, you'll have a better understanding of how it all works.


</details>

<details>

<summary>How do the data farming rewards work? Can rewards be claimed monthly or automatically deposited?</summary>

Data Farming serves as the fundamental incentive system within Ocean Protocol, offering diverse opportunities for participants to contribute to the protocol's growth and success. This system is divided into two rewarding streams:

1. Passive Rewards
2. Active Rewards
By actively participating in our available programs, you can earn both passive and active rewards. Your total rewards will be a combination of these two substreams.

The best part is that you have full control over claiming or redepositing your rewards at your convenience. Unclaimed rewards accumulate over time without any loss.

It's important to note that your veOCEAN balance will gradually decrease once you receive it. This decline occurs linearly over time until it reaches the Lock End Date. For instance, when your lock time has reached the halfway point, you will possess 50% of your initial veOCEAN balance. Once your lock time concludes, your veOCEAN balance will reach zero, allowing you to withdraw your OCEAN tokens.

Learn more in the [documentation](https://docs.oceanprotocol.com/rewards/df-veocean).

</details>
-->
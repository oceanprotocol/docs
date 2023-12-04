---
description: >-
  From emissions, estimate APYs
---

<figure><img src="../.gitbook/assets/gif/mafs.gif" alt=""><figcaption><p>K.I.S.S.</p></figcaption></figure>

# Guide to Estimating APYs

Recall that APY is Annual Percentage Yield, and WPY is Weekly Percentage Yield.

**This page provides guidance to estimate APYs.**

### Estimating APY from WPYs

Here are a couple ways to estimate APY from WPYs: _with_ compounding, and without.

**APY with compounding.** 
- If you were to take OCEAN rewards for given week and immediately put them back into Data Farming, then your rewards will **compound** every week.
- Then, `APY = (1.0 + WPY for week 1) * (1.0 + WPY for week 2) * ... * (1.0 WPY for week 52) - 1.0.
- Assuming equal WPY per week, `APY = (1.0 + WPY)^52 - 1.0`. Use 52.25 not 52.0 if you wish.
- For WPY of 0.005, then `APY = (1.0 + 0.005)^52 - 1.0 = 0.296 = 29.6%`.
- This assumes zero gas fees. That's reasonable given that staking & claiming are one-time transactions.

**APY without compounding.**
- If you don't do compounding, then `APY = (WPY for week 1) + (WPY for week 2) + ... + (WPY for week 52)`.
- Assuming equal WPY per week, `APY = WPY * 52`.
- For WPY of 0.05, then `APY = 0.005 * 52 = 0.260 = 26.0%`.
- This assumes zero gas fees. This works if you have a large amount of veOCEAN, and therefore large weekly OCEAN rewards, compared to gas fees. If that's not the case, so that gas fees don't destroy your profits, then you should (a) compound less often (b) use gas when it's cheapest, [see here](https://www.useweb3.xyz/gas).

### Estimating Passive DF APYs

To make it easier to estimate your APY, [we have created a simple spreadsheet](https://docs.google.com/spreadsheets/d/1zzuW5pBbX6j6hZL_XtJDtSR2-rDHa_LGOEwgoQ4D8lk/edit?usp=sharing) that let's you easily estimate your Passive APY.

We have provided 2 sheets as an example of locking-up 10,000 OCEAN for:
1. A 4-year investment period
2. A 6-mo investment period

The above are simplified examples meant for everyone to understand. They are naive investment strategies and are meant to provide you, the reader, with some examples to build upon. You can use these as a reference to create your own plan, so feel free to make a copy of this spreadsheet and customize it to your needs and wants.

### Estimating Volume DF APYs

APY from Volume DF is a bit more complicated and depend on many factors that are currently hard to predict accurately. It is unlikely for the user to get a practical result, which is why we don't offer a tool to estimate this value right now.

You can easily expand the spreadsheet above to support a basic, naive calculations for Volume DF Rewards such as adding a fixed-rate.

To help solve this challenge, [we built a dashboard](https://df.oceandao.org/volume-df) that shows historical and ongoing summaries of APY, Data Consume Volume, and veOCEAN allocations per-round.

<figure><img src="../.gitbook/assets/data-farming/curate-datasets.png" alt=""><figcaption><p>Curate like a Pro.</p></figcaption></figure>

Finally, you can [review df-web code](https://github.com/oceanprotocol/df-web/blob/main/src/utils/rewards.js) to understand how the APYs on the UI are calculated.

### Estimating Challenge DF APYs

Challenge DF requires no OCEAN locked or staked, yet provides rewards if you win the prediction game. Therefore theoretically APY is infinity. We ignore Challenge DF for APY discussion.

### Estimating Predictoor DF APYs

**Predictoor and staking.** Staking is a fundamental component of Predictoor: when someone makes a prediction, they must have an OCEAN stake amount accompanying that prediction.

Amount of stake increases potential gain and potential loss. For a given prediction, the more one stakes, the more they earn if they're right; and the more they lose if wrong. Earnings if right are also a function of Predictoor data feed sales revenue.

Predictoor has staking independent of Data Farming. Therefore, yield comes even without DF. Then, _Predictoor DF_ acts as _extra_ sales revenue for Predictoor data feeds; and yield with Predictoor DF is even higher.

**Yield for predictoors.** We can apply the yield formula for each prediction:

`yield = (start amount + gained amount) / (start amount) - 1.0`

Where in Predictoor and Predictoor DF, values are:
- `start amount` = OCEAN staked in prediction
- `gained amount` = `revenue * stake / (all users stake) - fee` if correct, `stake` if incorrect

**Be careful!** Yield can be negative if one's stake far exceeds revenue, even with a highly accurate model. But, if one has right-sized stakes and an accurate model, then yield can be quite healthy.

**Rapid compounding.** In other DF streams, rewards come weekly; so compounding is weekly. In Predictoor and Predictoor DF, a predictoor's revenue (rewards) come every epoch (every 5min or 1h). Therefore compounding in Predictoor could be _very_ fast, for much healthier yields yet.

**Estimation fidelity.** Since Predictoor is so young, we don't have detailed estimates of Predictoor APYs yet. We're excited to see where this takes us:)

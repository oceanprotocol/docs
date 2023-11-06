---
description: >-
  From emissions, estimate APYs
---

# APYs

<figure><img src="../.gitbook/assets/gif/many-penguins.gif" alt=""><figcaption><p>Multiply, and multiply again. And again.</p></figcaption></figure>

**Contents:**

- [About APYs](#about-apys)
- [Estimated APY vs Time](#estimated-apy-vs-time)
- [On Estimating APYs](#on-estimating-apys)

# About APYs

### Source of Rewards

Rewards are earned by users that participate in one or more Data Farming streams. Passive DF allows passive holding of veOCEAN; Active DF streams require more work from the user.

Historically, annual percentage yields (APYs) are 5-15%. See for yourself: in [DF app](https://df.oceandao.org/activerewards) and scroll down to "Data Farming History".

You can do your own APY estimations. In Passive DF, APY is highly dependent on the locked amount *and* duration of lock. In other DF streams, there are other factors.

### Definition of Yield, WPY, APY

A **yield** is the relative gain in value compared to the amount you started with. Specifically:

`yield = (start amount + gained amount) / (start amount) - 1.0`

For example, if you start with 1000 OCEAN and earn 5 OCEAN:

`yield = (1000 + 5) / (1000) - 1.0 = 0.005`

We can express yield as a percentage simply by multiplying by 100 (%). For example, yield of `0.005` in percentage is `0.005 * 100% = 0.5%`.

The yield for one week is **Weekly Percentage Yield**, or **WPY**. For example, if you started with 1000 OCEAN and earned 5 OCEAN from DF, in one week, then your WPY = 0.005 = 0.5%.

The yield for one year is **Annual Percentage Yield**, or **APY**. APY can be estimated from WPYs. Assuming no compounding, `APY = WPY*52`. We drill deeper below.

# Estimated APY vs Time

The plot below shows estimated APY over time. It brings together data from the [OCEAN reward schedule](ocean-reward-schedule) and estimates of **amount staked (yellow line** in plot).

**Green is total APY** from passive and active rewards.  **Passive rewards (black)** provides a great baseline with upside in **active rewards (green)**. For example, in DF29 wash consume became unprofitable and led to a drop in DCV and therefore active rewards.

<figure><img src="../.gitbook/assets/data-farming/example_apys.png" alt="" width="563"><figcaption><p><em>Green: estimated APYs (passive + active). Black: estimated APYs (just passive). Yellow: estimated staking</em> </p></figcaption></figure>

**It's an estimate.**
- That's ok! As the great statistician G.E. Box said, "All models are wrong, some are useful".
- APYs are an estimate because they depend on both DF rewards and OCEAN locked. Both of those are estimates, as follows.
- For simplicity, the model assumes that Active DF rewards are solely composed of Volume DF using the whole Active DF budget [1].
- OCEAN locked and lock time is not known for future weeks; it must be estimated [2].

**OCEAN lock time greatly affects APY.**
- The numbers above assume that all locked OCEAN is **locked for 4 years**, so that 1 OCEAN → 1 veOCEAN.
- But APY could be much worse or more if you lock for shorter durations. Divide by 4 if you lock for 1 year. [3] elaborates.

**Raw model.** All the plots are calculated from [this Google Sheet](https://docs.google.com/spreadsheets/d/1F4o7PbV45yW1aPWOJ2rwZEKkgJXbIk5Yq7tj8749drc/edit#gid=1051477754).


----

<figure><img src="../../.gitbook/assets/gif/mafs.gif" alt=""><figcaption><p>K.I.S.S.</p></figcaption></figure>

# On Estimating APYs

### Estimating APY from WPYs

Here are a couple ways to estimate APY: _with_ compounding, and without.

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

<figure><img src="../../.gitbook/assets/data-farming/curate-datasets.png" alt=""><figcaption><p>Curate like a Pro.</p></figcaption></figure>

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

# Notes

[1] For better accuracy, one would need to account for Challenge DF and Predictoor DF. However, this gets more complex because Predictoor DF is highly dependent on prediction accuracy.

[2] We modeled OCEAN locked by observing linear growth from DF week 5 (when OCEAN locking was introduced) to week 28: OCEAN locked grew from 7.89M OCEAN to 34.98M OCEAN respectively, or 1.177M more OCEAN locked per week. The true values of OCEAN locked was last updated on DF week 29. For more accuracy, that could be updated to the values since then.

[3] Here are approximate bounds: If you lock for 4 years, and everyone else locks for 2, then multiply expected APY by 2. If you lock for 4 years and others for 1, then multiply by 4. Conversely, if you lock for 2 years and everyone else for 4, then divide your expected APY by 2. If you lock for 1 year and others for 4, then divide by 4. The numbers assume that you’re actively allocating veOCEAN allocation towards high-DCV data assets. For passive locking or low-DCV data assets, divide APY by 2 (approximate).

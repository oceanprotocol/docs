---
description: >-
  Learn how to use basic math and a simple spreadsheet to estimate your
  Passive Rewards APY and get deeper into Active Rewards APY.
---

# veOCEAN and your APY

Rewards are earned by users that hold and use their veOCEAN to help the protocol improve and grow. Here are some good lessons to improve the outcome of your APY.
1. To improve your yield, you will need to make good decisions for how long you'll choose to lock. The best way to do this is to learn how [Time Locking](/rewards/veocean.md#veocean-time-locking) and [Linear Decay](/rewards/veocean.md#linear-decaywork) function.
2. APYs are always initially calculated by dividing the amount of OCEAN you have received from rewards, by the relative amount of OCEAN you have locked up.
3. As a rule: _Wherever APYs are provided to the user in the app (df.oceandao.org), they are caclulated assuming an initial 4-year lock up period with a weekly schedule of compounding rewards into an updated 4-year lock. This estimate works provided current: number of users, reward emissions, and other reward parameters stay constant while excluding all tx fees_

### Estimating Passive APY

To make it easier to estimate your APY, [we have created a simple spreadsheet](https://docs.google.com/spreadsheets/d/1zzuW5pBbX6j6hZL_XtJDtSR2-rDHa_LGOEwgoQ4D8lk/edit?usp=sharing) that let's you easily estimate your Passive APY.

We have provided 2 sheets as an example of locking-up 10,000 OCEAN for:
1. A 4-year investment period
2. A 6-mo investment period

These examples are meant to be as simple as possible so anyone can understand them. They are naive investment strategies and are meant to provide the reader some examples to build upon. Please copy this spreadsheet and modify as you wish.

<figure><img src="../.gitbook/assets/gif/mafs.gif" alt=""><figcaption><p>It doesn't have to be scary.</p></figcaption></figure>

### Estimating Active APY

Active Rewards are a bit more complicated and we currently do not provide a model/sim for estimating Active APY. This is also dependent on a lot of different variables and is unlikely for the user to get a practical result.

You can easily expand the spreadsheet above to support basic, naive calculations for Active Rewards such as defining a constant percent yield per week.

Having said this, we do provide a thorough dashboard that provides historical and ongoing summaries of APY, Data Consume Volume, and veOCEAN allocations per-round.

<figure><img src="../.gitbook/assets/rewards/curate-datasets.png" alt=""><figcaption><p>Curate like a Pro.</p></figcaption></figure>

You can also [learn how rewards are calculated here](rewards/df-max-out-yield.md#how-rewards-are-calculated) to understand more about what's happening behind the scenes each rounn of Data Farming.

Finally, you can [review the implementation inside df-web](https://github.com/oceanprotocol/df-web/blob/main/src/utils/rewards.js) to understand how APYs are calculated at the frontend/UI level.
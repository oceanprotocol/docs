---
description: >-
  From emissions, estimate APYs
---

# APYs

<figure><img src="../.gitbook/assets/gif/many-penguins.gif" alt=""><figcaption><p>Multiply, and multiply again. And again.</p></figcaption></figure>

**This page** is about APYs. There's also [estimates of APY vs time](apys-plot.md) and [a guide to estimating APYs](apys-guide.md).

# About APYs

### Source of Rewards

Rewards are earned by users that participate in one or more Data Farming streams. Passive DF allows passive holding of veOCEAN; Active DF streams require more work from the user.

Historically, annual percentage yields (APYs) are 5-20%. See for yourself: in [DF app](https://df.oceandao.org/activerewards) and scroll down to "Data Farming History".

You can do your own APY estimations. In Passive DF, APY is highly dependent on the locked amount *and* duration of lock. In other DF streams, there are other factors.

### Definition of Yield, WPY, APY

A **yield** is the relative gain in value compared to the amount you started with, minus costs. Specifically:

`yield = (start amount + gained amount - costs) / (start amount) - 1.0`

For example, if you start with 1000 OCEAN, have 6 OCEAN gross revenue, and 1 OCEAN costs (net 5 OCEAN):

`yield = (1000 + 6 - 1) / (1000) - 1.0 = 0.005`

We can express yield as a percentage simply by multiplying by 100 (%). For example, yield of `0.005` in percentage is `0.005 * 100% = 0.5%`.

The yield for one week is **Weekly Percentage Yield**, or **WPY**. For example, if you started with 1000 OCEAN and netted 5 OCEAN from DF, in one week, then your WPY = 0.005 = 0.5%.

The yield for one year is **Annual Percentage Yield**, or **APY**. APY can be estimated from WPYs. Assuming no compounding, `APY = WPY*52`. 

### Costs

Costs should not be under-estimated. Eg if you're only doing Passive DF, and you lock a small amount of OCEAN for a short time, costs may exceed your gross income.

**Costs include:**
- Gas fees for transactions (txs) on the various chains. Eg veOCEAN, passive DF rewards, and Volume DF rewards are on Ethereum mainnet. Predictoor DF is on Sapphire mainnet.
  - Txs include: locking OCEAN, claiming passive rewards, claiming active rewards, and withdrawing rewards.
  - To compound returns, these txs need to be repeated. The ideal frequency to compound rate is whatever maximizes your yield - which depends on how much OCEAN you've locked, tx fees, etc.
- Cost of compute hardware to run Predictoors, e.g. on cloud services 

The **[guide to estimate APYs](apys-guide.md)** drills deeper into estimating APYs. 


----

_Next: [APYs Guide](apys-guide.md)_

_Back: [Reward Schedule](reward-schedule.md)_

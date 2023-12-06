---
description: >-
  Baseline sales for predictoors
---

<figure><img src="../.gitbook/assets/data-farming/predictoordf_main.png" alt=""></figure>

**This page** is about Predictoor DF, and [this page](predictoordf-guide.md) is a guide.

# Predictoor DF Overview

**Predictoor DF** is a substream of Active DF that amplifies predictoors’ earnings, via extra sales to Ocean Predictoor data feeds.

Predictoor DF has 37K OCEAN weekly rewards (ongoing) and 100K ROSE rewards (first 4 weeks).

The higher baseline sales makes Volume DF and Passive DF more attractive.

## Introduction

**[Ocean Predictoor](../predictoor/README.md)** data feeds predict whether BTC, ETH etc will rise or fall 5min or 1h into the future. These feeds are crowdsourced by “predictoors”: people running AI-powered prediction bots.

**[Data Farming (DF)](../data-farming/README.md)** is Ocean’s incentive program, that rewards OCEAN to people who lock OCEAN or do active DF activities.

You should be familiar with both Predictoor and DF before reading on.

**Predictoor Data Farming is a substream of Active DF. It amplifies existing predictoors’ earnings based on their accuracy and stake.**

## Predictoor DF Timing

Predictoor DF starts counting on Nov 9, 23, at the beginning of Data Farming Round 63 (DF63). It runs indefinitely.

## Predictoor DF Rewards

Predictoor DF has two components: [OCEAN](https://oceanprotocol.com/about-us/ocean-token) rewards and [Oasis ROSE](https://www.coingecko.com/en/coins/oasis-network) rewards.

### OCEAN Rewards

OCEAN payouts are 37,000 OCEAN/week, ongoing.
- A special “DF buyer” bot purchases Predictoor feeds. It starts operating on Nov 9. Every day, it spends 1/7 of the weekly Predictoor OCEAN budget for another 24h subscription. It spends an equal amount per feed. (Currently there are  feeds: 10 x 5min, 10 x 1h.)
- The OCEAN comes from the Ocean DF budget, as part of the 75,000 OCEAN/week for Active DF. The Volume DF budget has been adjusted to 37,000 OCEAN/week, and Challenge DF to 1,000 OCEAN/week. Here are details.

### ROSE Rewards

ROSE payouts of 100,000 ROSE/week for the first 8 weeks of Predictoor DF.
- There will be payouts at the end of DF63, DF64, DF65, DF66, DF67, DF68, DF69, and DF70.
- Payout happens on Mondays, 4 days after the end of the DF round. 
- ⚠️ To be counted for ROSE rewards of a given DF round, you must claim your OCEAN rewards for that DF round. 
- Payout for a given predictoor is pro-rata to the net earnings of that predictoor over that DF round, specifically (total sales $ to the predictoor) minus (predictoor stake slashed due to being wrong).
- The ROSE comes from a generous contribution of[ Oasis Protocol Foundation](https://oasisprotocol.org/) 👪🙏.


## How to Earn $ Via Predictoor DF

**Running a predictoor bot will automatically make you eligible for Predictoor DF rewards.**

The [Predictoor DF user guide](predictoordf-guide.md) tells how to get started as a predictoor, and how to claim rewards.

## How to Earn More $ Via Passive DF & Volume DF

Predictoor DF makes [Active DF](../data-farming/volumedf.md) more attractive, and in turn [Passive DF](../data-farming/passivedf.md). You should be familiar with both before reading on.

**Predictoor DF makes Volume DF more attractive than status quo**, because the volume-based bounds on weekly rewards trends tend to be markedly higher for prediction feeds. (The Appendix has details.)

**Curating is straightforward.** Ocean assets with high DCV are easy to identify: it's the 20 OPF-published prediction feeds. This makes the choice of veOCEAN allocation easy: point to those 20 assets.

**Doing Volume DF gives Passive DF rewards too**, of course.

The net result: Predictoor DF means earnings potential from Predictoor DF, Volume DF, and Passive DF.

## Appendix: On DCV Bounds of Prediction Feeds

**Predictoor DF makes Volume DF more attractive than status quo.** Active DF's rewards are bounded by `DCV_bound` which in turn is bound by sales volume and fees. In Predictoor DF, both those factors are raised; this raises the bounds in Volume DF; this in turn means higher earning potential. Let's elaborate.

At one time, Volume DF had a "wash consume" problem, where people published and consumed their own datasets. [DF9](https://blog.oceanprotocol.com/data-farming-df8-completed-df9-started-reward-function-tuned-d74b5134b5d1) onwards address this, by putting a bounds on weekly rewards:

> `DCV_bound = DCV * m`

Where `m` = `DCV_bounding_multiplier` = `Ocean community fee (0.1%) + publish market fee`

This stopped wash consume 💪 because it became unprofitable to _do_ wash consume: fees eat up all potential profits.

A low `DCV` (data consume volume) or a low `m` (publish market fee) mean low `DCV_bound`.

Predictoor DF makes both `DCV` and `m` higher!

- **`DCV` is higher:** the 37K OCEAN/week counts as consume volume
- **`m` is higher:** publish market fee is 20% for prediction feeds

Therefore `DCV_bound` is higher. Specifically: `DCV_bound = 37000 * (0.001 + 0.20) = 7437 OCEAN`. In other words, at least 7437 OCEAN is available for Volume DF in any given week.

## Notes

The BTC/USDT 5m and 1h feeds follow the same Volume DF mechanics as the other feeds, despite being free on the webapp.

Details: the BTC feeds _are_ priced at the smart contract level. The webapp receives datatokens for those feeds and makes the prediction values public. Because the BTC feeds _are_ priced, then: their DCV is non-negligible; allocating veOCEAN to them makes sense; and Volume DF rewards accrue to them as well.

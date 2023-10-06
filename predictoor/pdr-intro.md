---
description: >-
    "Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin." - A mother
---

# Introduction

**Ocean Predictoor is a stack and a dapp for prediction feeds.** It has accountability for accuracy, via staking. It’s globally distributed and censorship-resistant, by being on-chain. We expect its accuracy to improve over time, due to its incentive structure. Its first use case is DeFi token prediction because users can [close the data value-creation loop](https://blog.oceanprotocol.com/the-data-value-creation-loop-68e23575be02) quickly to make tangible \$.

<figure><img src="../.gitbook/assets/predictoor/predictoor_overview.png" alt=""><figcaption>Conceptual overview of Predictoor</figcaption></figure>

**Prediction feeds are crowd-sourced. "Predictoor" agents submit individual predictions and stake on them.** They make money when they're correct and lose money when not. This drives accurate prediction feeds, because only accurate predictoors will be making \$ and sticking around.

**“Trader” agents buy aggregate predictions,** then use them to take action like buying or selling. The more accurate the predictions, the more easily they make \$, the longer they stick around to keep buying prediction feeds from trading profits.

**Predictoor is built on the Ocean Protocol stack**, including contracts for tokenized data and middleware to cache metadata. To keep predictions private unless paid for, Predictoor uses Oasis Sapphire privacy-preserving EVM chain.

**The initial dapp is live at [predictoor.ai](https://predictoor.ai).** It’s for up/down predictions of BTC, ETH, and other tokens’ prices. The dapp helps users build a mental model of Predictoor behavior. Predictoors and traders’ main workflow is to do run predicting / trading bots with the help of the Py SDK. We have seeded Predictoor with bots that have AI/ML models of accuracy comfortably above 50% — a precondition to make \$ trading.

<figure><img src="../.gitbook/assets/predictoor/predictoor_ui.png" alt=""><figcaption>Screenshot from predictoor.ai</figcaption></figure>

## Predictoor Structure

The image below gives an overview of Predictoor structure.

In the image top left, predictoors, traders, or anyone play with predictoor.ai to build an understanding how predictoor works. One feed is free; the rest are available for purchase. At first, only the free feed is visible. Users can connect their web3 wallet and buy another feed.

In the image top middle, predictoors graduate to building & deploying Python "Template Predictoor bots" (agents), which submit predictions every 5 minutes. Now, predictoors can see how to make revenue from making predictions, with plenty of room to improve AI/ML modeling accuracy and make more \$.

<figure><img src="../.gitbook/assets/predictoor/predictoor_structure.png" alt=""><figcaption>Predictoor Structure</figcaption></figure>

In the image top right, traders graduate from predictoor.ai to building & deploying Python "Template Trader bots" (agents), which grab the latest prediction every 5 minutes, as soon as it's available, then trade using that prediction (and other info). Now, Traders can see how to make \$ from buying predictions, with plenty of room to improve trading strategy and make more \$.

In the image bottom is the Oasis Sapphire chain, with Predictoor feed contracts deployed to it. There's one contract deployed for each {pair, exchange, timescale} such as {ETH/USDT, Binance, 5m}.

## Predictoor Behavior

We just covered Predictoor structure. Let's now layer on some Predictoor behavior, with the help of the image below. We'll walk through actions by Predictoors and Traders related to predictions for time slot "epoch t+1", and show how they make \$. 

We assume predictions on BTC, and where epoch t ends at 5:00pm, t+1 ends 5:05pm, and t+2 ends 5:10pm. We assume that Traders already purchased a subscription via predictoor.ai, Python, or otherwise. When we discuss an action by a Predictoor or Trader, we recognize that it's typically executed by their agent (bot).

**Epoch t.** This is left 1/3 of the image. It starts at 4:55pm and ends at 5:00pm. Predictoor 1 (pink) predicts that BTC close price for epoch t+1 will be higher ("↑") than close price for epoch t. He submits a tx to that chain with that prediction, and some OCEAN stake of his choice (higher stake = more confident). Predictoor 2 (dark green) does the same. Predictoor 3 (light green) predicts "↓" and stakes. The chain stores these prediction values, privately.

<figure><img src="../.gitbook/assets/predictoor/predictoor_behavior.png" alt=""><figcaption>Predictoor Behavior</figcaption></figure>

**Epoch t+1.** The middle 1/3 of the image covers epoch t+1. It starts at 5:00pm and ends at 5:05pm. The BTC Predictoor contract computes the aggregated predicted value (agg_predval) as stake-weighted sum across individual predictions.

> agg_predval = (stake1*predval1 + stake2*predval2 + …) / (stake1 + stake2 + …)

The contract then makes agg_predval visible to its subscribers. The predicted value is the stake-weighted sum across predictions. Smart traders may take the information and act immediately. A baseline strategy is "if it predicts ↑ then buy; if it predicts ↓ then sell or short".

**Epoch t+2.** This is the right 1/3 of the image. It starts at 5:05pm and ends at 5:10pm. Both traders and trueval agent take action (and, predictoors get paid).

- **Actions by Traders.** Typically, traders exit their position immediately, exactly 5 minutes since they got the 5-minute-ahead prediction and acted*. If the prediction feed was accurate enough and trading fees & slippage weren't too high, then the trader makes money on average.

- **Actions by Trueval agent; predictoors get paid.** The trueval agent is a process that grabs price feeds from e.g. Binance and submits it to chain, inside the smart contract*. The "submit" transaction also takes the opportunity to calculate each Predictoor's reward or slashing, and update their OCEAN holdings in the contract accordingly. (Funds aren't sent per se, they're made available via ERC20 "approve", for the predictoor to transfer at some later point). Predictoor 3 got his OCEAN slashed because he was wrong; predictoors 1 and 2 receive that as income, in addition to receiving income from prediction feed sales to traders. Predictoors can claim their balance anytime.

*Submitting a “true” price value like this could also have been performed using a Chainlink setup (or otherwise). However we wanted to retain flexibility for feeds not currently on Chainlink, for now.
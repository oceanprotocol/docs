---
title: Predictoor FAQ
description: Frequently Asked Questions about Predictoor
---

## Predictoor FAQ

### Getting Started

<details>

<summary>How can users begin experimenting with Predictoor?</summary>

You can start by playing with [predictoor.ai](https://predictoor.ai), then click "run bots" and go through [Predictoor](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/predictoor.md) or [Trader](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/trader.md) README. This [blog](https://blog.oceanprotocol.com/meet-predictoor-accountable-accurate-prediction-feeds-8b104d26a5d9#048b) "How to Earn" section has details.  

</details>

### For Predictoors

<details>

<summary>What happens if your prediction is good or bad?</summary> 

If the prediction is wrong, your staked amount on that prediction is going to be slashed and distributed among people who submitted the right predictions.

</details>

<details>

<summary>Is it possible to predict without using bots?</summary>

Before we answer, please understand that to make decent money, it will take hundreds or thousands of submissions, guided by AI/ML models. So doing this manually would be tedious and error-prone. Therefore a bot is the most practical way. This is why the Predictoor core team has made it easy to run a bot. Here are the getting-started READMEs [Predictoor](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/predictoor.md) and [Trader](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/trader.md), respectively.  

To the question "Is it possible to predict without a bot", the specific answer is "Yes". Here are the details
- Somehow you need to submit an up/down prediction, with OCEAN stake, as a transaction to Sapphire chain. Here are the Possible ways to do such a transaction:
  - (a) Core team-supplied Python bot
  - (b) simple Python script
  - (c) Use "Write Contract" in [Sapphire blockchain explorer](https://explorer.sapphire.oasis.io)
  - (d) 3rd-party bot that decides to support this
  - (e) dapp that decides to support this

</details>

### For Traders

<details>

<summary>How can I trust individual predictions?</summary>

The most important metric to assess confidence in a prediction is "how much OCEAN have people *staked* on this prediction", both up and down. It's how much they're willing to lose if they're wrong. This metric is not gameable because OCEAN has scarcity. It's "put your money where your mouth is".

</details>

<details>

<summary>What factors influence the accuracy of Predictoor? How accurate do you think the predictions will be over time?</summary>

That's up to Predictoors to figure out! Certainly, historical price information has a huge influence. After that, there are many possibilities: other CEX and DEX data, on-chain data, social media data, GitHub data, news, weather, and more. The [Predictoor README](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/predictoor.md) gets you started, using historical price information.

</details>

### Price and Rewards

<details>

<summary>How is the pricing determined and will it continue to be 3 OCEAN?</summary>

Pricing is 3 OCEAN for one feed for 24 hours. It will be like that for the near-term future. We can expect price changes and price structure over time, as the Predictoor core team learns what pricing makes sense.

</details>

<details>

<summary>How do Predictoors benefit from sales? Is there a burn mechanism?</summary>

20% of prediction feed sales go to OPF. A portion of that is passed on to the Ocean community, including burning.

</details>

<details>

<summary>How Is Predictoor related to Data Farming?</summary>

Predictoor is its own dapp, stack, and set of feeds. In addition, the Ocean Data Farming infrastructure is extended to incentivize for activities within Predictoor.

Starting Nov 9, 2023 via "Predictoor Data Farming", there is 37000 OCEAN (about $10K) and several $K worth of ROSE allocated weekly to Predictoor DF. This will be used to purchase prediction feeds, alongside purchases by traders, etc. 80% of prediction feed sales goes to predictoors themselves.

</details>


### How is Predictoor different
<details>

<summary>How does Predictoor compare to prediction markets? Like Predictoor, they use $ for accountability.</summary>

Prediction markets are for one-off predictions like “will Biden win in 2024?” whereas Predictoor-style prediction feeds are for a continuous stream of predictions.

</details>

<details>

<summary>How does Predictoor compare to Chainlink? Like Predictoor, it has price feeds on-chain.</summary>

Chainlink provides current prices on-chain, and Predictoor makes predictions for prices in the future.

</details>

<details>

<summary>How does Predictoor compare to Numerai? Like Predictoor, it crowd-sources predictions, related to trading.</summary>

They are different:  
- Numerai takes predictions, then aggregates them and uses them to trade directly. It operates as a hedge fund.  
- Whereas Predictoor takes predictions, then aggregates them and sells the aggregate. It operates as data feeds.  

Secondary differences:  
- Numerai focus is tradfi trading, as a hedge fund.  
- Whereas Predictoor is pure datafeeds, and applies to any vertical. Its first use case is defi trading.  
- Currently Numerai is mostly centralized.  
- Whereas Predictoor is decentralized. Predictoor tech may be useful to Numerai to help decentralize  

</details>

<details>

<summary>How does Predictoor compare to Numerai Signals? People supplying to Numerai Signals don’t get paid out from trading (like the main Numerai product).</summary>

In Numerai Signals, payout is a function of the submitter’s “originality” compared to other signals. These signals are used as inputs for prediction models in Numerai main product.  

Whereas in Predictoor, payout is a function of the the accuracy of the submitter’s prediction, compared to the true value. These signals are predictions, directly.

</details>

<details>

<summary>How does Predictoor compare to IntoTheBlock Price Predictions tool? Is has prediction feeds of crypto prices.</summary>

The IntoTheBlock tool is run internally by IntoTheBlock, to build build centralized AI models that are served up via a REST API and a webapp.

You can view Predictoor as a "next-gen" version of that tool: a decentralized version that crowd-sources predictions.

- Crowd-sourcing with accuracy incentives has potential to do much better than any centralized approach. It doesn't rely on the ideas of a single team; instead it makes the opportunity to predict open to anyone in the world. A perpetual data-science competition. The incentives mean that only the best will stick around. This will get reflected in the prediction feeds' accuracies.
- Being decentralized means one doesn't need to rely on a centralized actor running centralized services. Useful for anyone coming to rely on prediction feeds.

Finally, Predictoor's ambition is broader: to extend beyond crypto into energy, weather, agriculture and more. It's easier to expand scope of decentralized feeds, because you don't need to spin up a new team to focus on each new vertical.

</details>


### Networks

<details>

<summary>Will Predictoor become available on other blockchain networks in the future?</summary>

Predictoor needs to leverage a privacy-preserving EVM chain which is in production. Oasis Sapphire is currently the only such chain.
  
</details>


----

_Next: [Further Resources](pdr-resources.md)_

_Back: [Parameters](pdr-parameters.md)_


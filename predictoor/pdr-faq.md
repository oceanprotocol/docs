---
title: Predictoor FAQ
description: Frequently Asked Questions about Predictoor
---

## Predictoor FAQ
<details>

<summary>How does Predictoor compare to prediction markets? Like Predictoor, they use \$ for accountability.</summary>

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

<!--
## Predictoor 

<details>

<summary>What factors influence the accuracy of Predictoor? How accurate do you think the predictions will be over time?</summary>

That's up to Predictoors to figure out! Certainly, historical price information has a huge influence. After that, there are many possibilities: other CEX and DEX data, on-chain data, social media data, GitHub data, news, weather, and more. The [Predictoor README](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/predictoor.md) gets you started, using historical price information.

</details>

<details>

<summary>How can users begin experimenting with Predictoor? what are the steps?</summary>

You can start by playimg with predictoor.ai, then click "run bots" and go through [Predictoor](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/predictoor.md) or [Trader](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/trader.md) README. This [blog](https://blog.oceanprotocol.com/meet-predictoor-accountable-accurate-prediction-feeds-8b104d26a5d9#048b) "How to Earn" section has details.  
</details>

<details>

<summary>Given that prediction can actually affect our normal business plan. So, at what accuracy or percentage do you think we can rely on predictoor?</summary>

It depends on your business! Certainly, accuracy needs to be more than 50%. But then you need a high enough prediction to overcome other costs too, like slippage and trading fees.
</details>

<details>

<summary>What will be the sole benefits of predictions aside upfront market prices</summary>

The first feeds from Predictoor are up/down crypto market prices. Those can be used for trading, creating derivative feeds, and apps on top of it. They also create greater financial incentives to create feeds that help price predictions. Beyond these first feeds, expect more feeds in crypto/defi and for other verticals such as energy, weather, and agriculture.

Read more about Predictoor [here](https://blog.oceanprotocol.com/meet-predictoor-accountable-accurate-prediction-feeds-8b104d26a5d9#048b)
</details>

<details>

<summary>Will Predictoor become available on other blockchain networks in the future?</summary>

Predictoor needs to leverage a privacy-preserving EVM chain which is in production. Oasis Sapphire is currently the only such chain.
  
</details>

<details>

<summary>Is Predictoor being developed on Sapphire completely or is it using OPL(Oasis Privacy Layer) technology for Privacy?</summary> 

Yes, It is Completely on Sapphire.

</details>

<details>

<summary>What will the trader's journey look like, from purchasing a feed's insights to executing a trade upon that knowledge?</summary>

You can start by playimg with predictoor.ai, then click "run bots" and go through [Predictoor](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/predictoor.md) or [Trader](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/trader.md) README. This [blog](https://blog.oceanprotocol.com/meet-predictoor-accountable-accurate-prediction-feeds-8b104d26a5d9#048b) "How to Earn" section has details.

</details>

<details>

<summary>Any safeguards to eliminate market manipulation by using AI prediction?</summary>

There is already widespread market manipulation, in every market in the world, using AI and not AI. Don't expect this to change.

</details>


<details>

<summary>How is the pricing determined and will it continue to be 3 OCEAN after mainnet?</summary>

For the mainnet launch on Oct 10, pricing is 3 OCEAN for one feed for 24 hours. It will be like that for the near-term future. We can expect price changes and price structure over time, as the Predictoor core team learns what pricing makes sense.

</details>

<details>

<summary>Is it possible to predict without using bots?</summary>

Before we answer, please understand that to make decent money, it will take hundreds or thousands of submissions, guided by AI/ML models. So doing this manually would be tedious and error-prone. Therefore a bot is the most practical way. This is why OPF has made it easy to run a bot. Here are the Readme of both [predictoor](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/predictoor.md) and [Trader](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/trader.md).

To the question "Is it possible to predict without a bot", the specific answer is "Yes". Here are the details-
- Somehow you need to submit an up/down prediction, with OCEAN stake, as a transaction to Sapphire chain. 
  Here are the Possible ways to do such a transaction -
  (a) OPF-supplied Python bot
  (b) simple Python script
  (c) Use "Write Contract" in [Sapphire blockchain explorer](https://explorer.sapphire.oasis.io)
  (d) 3rd-party bot that decides to support this
  (e) dapp that decides to support this

</details>

<details>

<summary>How do you envision the future of prediction feeds with the introduction of platforms like Predictoor?</summary>

Prediction feeds will become ubiquitous, for every vertical from finance to weather, from agriculture to energy. We will see 10,000 feeds, then even more. Imagine trustworthy energy predictions that you can plan your winter's heating bill around. Imagine hourly rainfall prediction for every square kilometer on Earth. Imagine rolling 20-year CO2 predictions that are truly accurate. The possibilities are endless.

</details>

<details>

<summary>In what ways do you see Ocean Protocol benefiting from Predictoor?</summary>

Ocean Protocol's aim is to kickstart an open data economy. For such an economy to work, people need to make money, sustainably. Predictoor is a first-class example of how to do so: create data that people want, that they're willing to pay $ for because they can make $ with it. At the heart it's because predictions are *useful*: from predictions you can take action, to effect change.

Predictoor drives Ocean usage: it's built on the Ocean stack, using Ocean data NFTs and datatokens. 

Predictoor helps OCEAN. Every time a feed is purchased and consumed, a % of that goes back to the Ocean community to help drive OCEAN.

</details>

<details>

<summary> Is there a way about how many predictoors are participating in this prediction. </summary>

The most important metric to assess confidence in a prediction is "how much OCEAN have people *staked* on this prediction", both up and down. It's how much they're willing to lose if they're wrong. This metric is not gameable because OCEAN has scarcity. It's "put your money where your mouth is".

Regarding the metric "Number of people that made predictions": it's not as useful, and easily gamed. It's not as useful because there may be little economic stake; for example, 1000 people made predictions with 0.01 OCEAN stake each. Also, it can be easily gamed: someone wishing to trick others could easily stake from 1000 different addresses. Therefore the measure is not reliable. It could be fixed if proof-of-human techniques are used, but that adds complexity and user friction.

Summary: OCEAN staked is the best measure of confidence, and is not gameable. Number of  people that made predictions is a poor measure and is gameable

</details>

<details>

<summary>Is there a burn mechanism in the predictoor?</summary>

20% of prediction feed sales go to OPF. A portion of that is passed on to the Ocean community, including burning.

</details>

<details>

<summary>What happens if your prediction is good or bad?</summary> 

If the prediction is wrong, your staked amount on that prediction is going to be slashed and divided between people who submitted the right predictions.

</details>

<details>

<summary>How Is predictoor related to the data farming program?</summary>  

Yes, via "Predictoor Data Farming". Starting Nov 9, there will be 37000 OCEAN (about $10K) and several $K worth of ROSE allocated weekly to Predictoor DF. This will be used to purchase prediction feeds, alongside purchases by traders, etc. 80% of prediction feed sales goes to predictoors themselves.
Learn more about predictoor [here](https://blog.oceanprotocol.com/meet-predictoor-accountable-accurate-prediction-feeds-8b104d26a5d9#048b)

</details>

<details>

<summary>How much is Oasis Network involved in the development of Predictoor? Is Ocean only using the EVM or were both teams collectively involved in the development?</summary>  

The Ocean core team conceived, built, and shipped the Predictoor product. The Ocean team chose to deploy Predictoor to Oasis Sapphire for its privacy features. From this choice, the Ocean team has an ongoing collaboration with the Oasis team around the Predictoor product: resolving any issues that emerge on the deployment, joint events both online & offline, Oasis supplying $ROSE to Predictoor Data Farming, and more.

</details>

<details>

<summary>How does Predictoor compare to Numerai?</summary>

Like Predictoor, Numerai crowd-sources predictions, related to trading. Beyond that, they're quite different. Numerai takes predictions, then aggregates them and uses them to trade directly. It operates as a hedge fund. Whereas Predictoor takes predictions, then aggregates them and sells the aggregate. It operates as a data feed.
The Predictoor [blog post](https://blog.oceanprotocol.com/meet-predictoor-accountable-accurate-prediction-feeds-8b104d26a5d9#048b) has further details

</details>

<details>

<summary>Is this a direct application of responsible AI that Oasis has been focused on?</summary>

No.
</details>

<details>

<summary>How does Predictoor compare to prediction markets?</summary> 

Prediction markets are for one-off predictions like “Will Biden win in 2024? Whereas Predictoor-style prediction feeds are for a continuous stream of predictions.
Learn more [here](https://blog.oceanprotocol.com/meet-predictoor-accountable-accurate-prediction-feeds-8b104d26a5d9#048b)
</details>

<details>

<summary>How Predictoor compare to Chainlink?</summary> 

They’re different. Chainlink provides current prices on-chain, and Predictoor makes predictions for prices in the future.

</details>
-->
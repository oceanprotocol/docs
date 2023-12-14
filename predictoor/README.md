---
description: Tomorrow belongs to those who can hear it coming. — David Bowie
cover: ../.gitbook/assets/cover/predictoor_banner.png
coverY: 0
---

# Summary

Ocean Predictoor provides on-chain "prediction feeds" on whether ETH, BTC, etc will rise in the next 5 min or 60 min. "Predictoors" submit predictions and stake on them; predictions are aggregated and sold to traders as alpha. Get started at https://predictoor.ai.

# Quick Links

- [Detailed intro](pdr-intro.md)
- [Architecture](pdr-architecture.md)
- [How to earn](pdr-earn.md) by running a trader or predictoor bot
- [Pdr-backend repo](https://github.com/oceanprotocol/pdr-backend) - how to run bots, specifically
- [Parameters](pdr-parameters.md) on price of feeds, more
- [FAQ](pdr-faq.md)

# Introduction
[Prediction is intelligence](https://www.explainablestartup.com/2017/06/why-prediction-is-the-essence-of-intelligence.html), artificial or otherwise. We dream of a world of 10,000 truly accurate prediction feeds, for everything from rain forecasts to sea level rise, or traffic congestion to ETH price. [Ocean Predictoor](https://predictoor.ai/) is an on-chain, privacy-enabled, AI-powered application and stack that is bringing this dream to reality.

**Accurate predictions are valuable.** With them, one can take action and create value. Conversely, inaccurate predictions lead to disaster. Predictions have value because they're the [final step in a data supply chain](https://blog.oceanprotocol.com/the-data-value-creation-loop-68e23575be02), right before action is taken by the user.

**Prediction feeds** are a stream of predictions for a given time series. This could be predicting the price of ETH every 5 minutes, or the sea temperature daily. A feed may be binary, i.e. whether a time series changes up or down: ↑↓↓↓↑↓↑↑. Accurate prediction feeds are valuable.

Alas, accurate predictions are *hard*. Worse, typical prediction feeds have no accountability on accuracy. If the weatherman says "no rain for today" and then it rains, a farmer could get stuck in the mud, wrecking a portion of his crops. The weatherman doesn't feel the impact of wrong predictions, but the farmers sure care! 

**Accountable Predictions** - Imagine if there was accountability. Accuracy would go up; the farmer would be stuck less. Imagine accountable prediction feeds for not only for rain, but also wind, sea temperature, road congestion, train delays, ETH prices, NVID prices, housing prices, and more. **Imagine tens of thousands of prediction feeds with accountable accuracy.** Imagine them **globally distributed**, and censorship resistant. Imagine **accuracy improving with time**. 

## What's Predictoor
Ocean Predictoor is a stack and a dapp for prediction feeds. It has accountability for accuracy, via staking. It’s globally distributed and censorship-resistant, by being on-chain. We expect its accuracy to improve over time, due to its incentive structure. Its first use case is DeFi token prediction because users can close the data value-creation loop quickly to make tangible \$.  

Predictoor is composed of predictoors and traders. In the [Introduction](pdr-intro.md) page, you will out more about these actors, how they are structured in the system, and their behaviors. 

## Connect with Us
If you want to talk to other Predictoors, Traders, and contributors to this ecosystem, [join us on Discord](https://discord.gg/TnXjkR5).

## Predictoor Resources

Main:
- Mainnet webapp: [predictoor.ai](https://predictoor.ai). Testnet: [test.predictoor.ai](https://test.predictoor.ai)
- Run bots via [pdr-backend](https://github.com/oceanprotocol/pdr-backend) repo

Intro:
- _These_ docs are the best starting point to learn about Predictoor:)
- Original blogpost "Meet Predictoor", Sep 12, 2023 [[Link](https://blog.oceanprotocol.com/meet-predictoor-accountable-accurate-prediction-feeds-8b104d26a5d9)]
- Original talk "Introducing Prediction Feeds", Dappcon, Sep 12, 2023 [[Video](https://www.youtube.com/live/ev76qrunCn4?si=a6dw_qCgw3F3070y&t=24393)][[GSlides](https://docs.google.com/presentation/d/118tBnWNbzuq6vL1TITGq69RKPvHWbxVUZULp8KnfPyQ/edit#slide=id.g243aace1a9a_0_681)][[PDF](https://drive.google.com/drive/folders/1ekNmB1LcS81xfJ6ntZpzibi3PF6QFwFR)]

For thoroughness:
- All blog posts & media: ["Ocean Predictoor Series"](https://blog.oceanprotocol.com/ocean-predictoor-series-6a9122754a4d)
- Webapp code is at [pdr-web](https://github.com/oceanprotocol/pdr-web/) repo


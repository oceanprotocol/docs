---
description: >-
    "Tomorrow belongs to those who can hear it coming." — David Bowie
---

# Overview
We dream of a world of 10,000 truly accurate prediction feeds, for everything from rain forecasts to sea level rise, or traffic congestion to ETH price. [Ocean Predictoor](https://predictoor.ai/) is an on-chain, privacy-enabled, AI-powered application and stack that is bringing this dream to reality.

**Accurate predictions are valuable.** With them, one can take action and create value. Conversely, inaccurate predictions lead to disaster. Predictions have value because they're the [final step in a data supply chain](https://blog.oceanprotocol.com/the-data-value-creation-loop-68e23575be02), right before action is taken by the user.

**Prediction feeds** are a stream of predictions for a given time series. This could be predicting the price of ETH every 5 minutes, or the sea temperature daily. A feed may be binary, i.e. whether a time series changes up or down: ↑↓↓↓↑↓↑↑. Accurate prediction feeds are valuable.

Alas, accurate predictions are *hard*. Worse, typical prediction feeds have no accountability on accuracy. If the weatherman says "no rain for today" and then it rains, a farmer could get stuck in the mud, wrecking a portion of his crops. The weatherman doesn't feel the impact of wrong predictions, but the farmers sure care! 

**Accountable Predictions** - Imagine if there was accountability. Accuracy would go up; the farmer would be stuck less. Imagine accountable prediction feeds for not only for rain, but also wind, sea temperature, road congestion, train delays, ETH prices, NVID prices, housing prices, and more. **Imagine tens of thousands of prediction feeds with accountable accuracy.** Imagine them **globally distributed**, and censorship resistant. Imagine **accuracy improving with time**. 

## Roadmap
Predictoor's tesnet is live now and mainnet will rollout soon. Overall, it will happen in three phases: Testnet → Mainnet → Data Farming.
1. **LAUNCHED: Tue Sep 12, 2023 - Predictoor Testnet is ready for community.** This means Ocean Predictoor smart contracts, middleware, and frontend running on Oasis Sapphire testnet.
1. **NEXT: Tue Oct 3 [4w later] - Predictoor Mainnet is ready for community.** This is like testnet but tokens have real value. There will be bridges as appropriate. 
1. **Thu Nov 2 [4w 2d later] - Predictoor Data Farming starts counting.** There will be 37,000 OCEAN weekly rewards to incentivize predictoors. You can find more about it in [Data Farming Intro - What are Active Rewards?](../rewards/df-intro.md#what-are-active-rewards)

## Introduction
Predictoor is composed of different actors, often referred to as: predictoors and traders. You will learn in the [Introduction To Predictoor](#introduction) a lot more about these actors, how they are structured in the system, and their behaviors. By the time you've completed reading this, you'll know what Epochs are, and have a better understand of what "t+1" means.

## Architecture
After obtaining a broad overview of the system and it's actors, you should be ready to dive into [The Architecture of Predictoor](#architecture) and the repository. You'll become more exposed to the key building blocks and pdr-backend, the integration component for Predictoors and Traders.

We anticipate Predictoor to extend beyond DeFi to other verticals like climate and agriculture. Predictoor agents may evolve into AI DAOs with emergent swarm-like behavior. This is the future.

## Earning with Predictoor
Predictoor serves two groups of actors: Predictoors, and Traders. In this section, we'll explore [How to Earn with Predictoor](#earning-with-predictoor) and describe how both of these groups can benefit from it. After you are done with this, you should know what steps you need to take next in order to start leveraging the system for your own benefit.

We'll also provide some links and exercise to make this easier for you.

## Predictoor Parameters and Roadmap
[Predictoor Parameters](#predictoor-parameters) will provide such as incentives, feed costs, deployed feeds, and details about it's possible future.

## Connect with Us
If you want to talk to other Predictoors, Traders, and contributors to this ecosystem, [Join us on Discord](https://discord.gg/TnXjkR5).

## Predictoor Resources
These documents are a summary of many resources.
- Blog Post: ["Meet Predictoor: Accountable Accurate Prediction Feeds"](https://blog.oceanprotocol.com/meet-predictoor-accountable-accurate-prediction-feeds-8b104d26a5d9)
- Ocean meetup [[GSlides](https://docs.google.com/presentation/d/1Yj14l-FRaMOgxXflHV0-sdHEdAFaAuB2MJNovQEtRFE/edit)][[pdf](https://github.com/trentmc/slides/blob/main/20230913-ocean-meetup-predictoor.pdf)]  
- Dappcon [[GSlides](https://docs.google.com/presentation/d/118tBnWNbzuq6vL1TITGq69RKPvHWbxVUZULp8KnfPyQ/edit#slide=id.g243aace1a9a_0_681)][[pdf](https://github.com/trentmc/slides/blob/main/20230912-dappcon-berlin-predictoor.pdf)]  
- Core Repository `pdr-backend`: https://github.com/oceanprotocol/pdr-backend/
- Frontend Repository `pdr-web`: https://github.com/oceanprotocol/pdr-web/
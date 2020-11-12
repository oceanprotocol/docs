---
title: Network - Local / Barge
description: Tools for development on a local Ethereum network
---

You can deploy Ocean onto [Ganache](https://www.trufflesuite.com/ganache) - a local Ethereum "network" that you run on your machine for fast iterations while developing your app. You can easily do that with Barge.

**Barge** is a shell script to help run Ocean components (Provider, Aquarius), which runs Ganache by default.

<repo name="barge"></repo>

Barge launches Docker and Docker Compose, to run Ganache with Ocean smart contracts on top, along with Provider and Aquarius metadata cache. It's used extensively by the Ocean core devs (with Ganache or Rinkeby).

The [Connect-to-Networks](/tutorials/connect-to-networks/) tutorial has more information about connecting your wallet / app to Ganache.

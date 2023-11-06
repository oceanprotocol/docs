---
description: 
---

<figure><img src="../.gitbook/assets/gif/love-ice-melting.gif" alt=""><figcaption><p></p></figcaption></figure>


# Liquid Staking

This page is about liquid staking of veOCEAN using psdnOCEAN.

### Background & Motivation

Once you lock OCEAN, you get veOCEAN.

Unlike OCEAN, veOCEAN cannot be traded or transferred. This is by design, to reconcile near-term and long-term incentives. Commit to holding OCEAN longer, and you earn more in the near term.

But what if there _was_ a way to have lots of locked OCEAN, yet get tradeability? That's the idea of "liquid staking". In many ways, it's the best of both worlds.

### Liquid Staking in Ocean

**psdnOCEAN is a "liquid staking wrapper" for veOCEAN:**
- It holds veOCEAN
- And it allows transfers (using ERC20 interface)

psdnOCEAN is a product by [H2O](https://www.h2odata.xyz//), a team separate from - and collaborating with - the Ocean core team.

While you can't trade veOCEAN, **you can trade psdnOCEAN.**

### How to get OCEAN -> psdnOCEAN

You can lock OCEAN for psdnOCEAN via [the H2O "convert" dapp](https://liquid-staking.h2odata.xyz/convert/ocean).


### How to get psdnOCEAN -> OCEAN

psdnOCEAN can be traded in exchanges, for both psdnOCEAN -> OCEAN, and vice versa.

The main exchange option is the [OCEAN-psdnOCEAN Balancer pool](https://app.balancer.fi/#/ethereum/swap?outputCurrency=0x51Fa2efd62ee56a493f24AE963eAce7D0051929E).
- [Here are pool details.](https://app.balancer.fi/#/ethereum/pool/0xf8c4cd95c7496cb7c8d97202cf7e5b8da2204c2b00020000000000000000039e).

⚠️Be careful - if liquidity is low you will experience high slippage.

### Rewards to psdnOCEAN holders

Since psdnOCEAN holds veOCEAN, then Passive DF rewards go to that psdnOCEAN-held veOCEAN according to the usual Passive DF rules.

Over time, psdnOCEAN may also get rewards from other DF streams or protocols too.

### psdnOCEAN Resources

[Here's](https://blog.oceanprotocol.com/psdnocean-the-first-liquid-staking-wrapper-by-the-h2o-team-is-now-live-a3330e15fa5c) the original psdnOCEAN announcement.

psdnOCEAN contract & token info can be found at:
  - [Etherscan](https://etherscan.io/token/0x51fa2efd62ee56a493f24ae963eace7d0051929e)
  - [CoinGecko](https://www.coingecko.com/en/coins/poseidon-ocean)
  - [GeckoTerminal](https://www.geckoterminal.com/eth/pools/0xf8c4cd95c7496cb7c8d97202cf7e5b8da2204c2b)


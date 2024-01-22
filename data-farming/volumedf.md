---
description: >-
  Choose your fav data assets, earn more
---

# Volume Data Farming

<figure><img src="../.gitbook/assets/gif/avatar-plugin.gif" alt=""><figcaption><p>Make your selection and commit. Good things will come.</p></figcaption></figure>

**This page** is about Volume DF. There's also a [user guide page](volumedf-guide.md) and a [page for delegation](delegate.md).

# About Volume DF

We've already covered [Passive DF](passivedf.md), which is a great start to earn from your locked OCEAN (veOCEAN).

_Volume_ DF lets you can earn more yet, with that same veOCEAN.

In Volume DF, you allocate veOCEAN to data assets with high data consume volume (DCV). This acts as _data curation_.

### How to Maximize Volume DF rewards

Here are tactics:

- Only allocate to assets that actually qualify for DF. The "Assets that qualify" section below has details.
- Allocate to assets with high DCV. Predictoor data feeds are a good bet.
- Lock more OCEAN.
- Lock OCEAN for longer. For example, a 4-year lock is 4x more reward than 1-year.
- Refresh your OCEAN locks often. This is needed since veOCEAN degrades with time.
- Frequently claim your OCEAN rewards then lock it. Be careful: too often may make gas fees > OCEAN rewards.
- Publish your own assets; you get 2x rewards for such assets. [Here are details](https://blog.oceanprotocol.com/data-farming-publisher-rewards-f2639525e508).

<br>

<figure><img src="../.gitbook/assets/gif/hustlin.gif" alt=""><figcaption></figcaption></figure>

### Delegate veOCEAN

You can delegate your veOCEAN from one wallet to another. This is handy if you have a hardware wallet holding veOCEAN, and you want a "hot" software wallet to automatically re-allocate more often. There are other uses too. 

[Here's how to delegate](delegate.md).

### Assets that Qualify for Volume DF

Data assets that have veOCEAN allocated towards them get Volume DF rewards.

The asset may be of any type — dataset, data feed, a C2D algorithm, or other. It may be fixed price or free. If fixed price, any token of exchange is alright (OCEAN, H2O, USDC, etc). If free, then gas used for consume is the "volume".

To qualify for DF, an asset must also:

* Have been created by Ocean Smart contracts [deployed](https://github.com/oceanprotocol/contracts/blob/main/addresses/address.json) by OPF to [production networks](../discover/networks/README.md)
* The asset must be listed on Ocean Market
* Can’t be in [purgatory](https://github.com/oceanprotocol/list-purgatory/blob/main/policies/README.md)


### How Rewards are Calculated

The Reward Function (RF) governs how Volume DF rewards are allocated.

_Rewards are calculated as follows:_

1. Distribute OCEAN across each asset **based on rank**: highest-DCV asset gets the most OCEAN, second-highest-DCV gets second-most, etc. [Here are details](https://blog.oceanprotocol.com/data-farming-df22-completed-df23-started-reward-function-tuned-ffd4359657ee).
1. For each asset and each veOCEAN holder:
   1. If the holder is a publisher, 2x the effective allocation
   1. Baseline rewards = (% allocation in asset) \* (OCEAN for an asset)
   1. Bound rewards to the asset by 125% APY
   1. Bound rewards by asset’s `DCV` \* `DCV_multiplier`.

Step 2.4 is to prevent wash consume. `DCV_multiplier` is a function of fees, with a value of 0.201 for Predictoor feeds, and 0.001 for other data assets.

The actual code is in [calcrewards.py](https://github.com/oceanprotocol/df-py/blob/main/df_py/volume/calc_rewards.py) in df-py repo.

When DF restarts each Thursday, the global allocation towards each asset resets back to zero and then starts counting up again until the end of the round. After allocating your veOCEAN to different datasets, it will take time for your voting power to be accounted for. 


----

_Next: [Volume DF Guide](volumedf-guide.md)_

_Back: [Liquid Staking](liquid-staking.md)_


---
description: >-
  Choose your fav data assets, earn more
---

# Volume Data Farming

<figure><img src="../.gitbook/assets/gif/avatar-plugin.gif" alt=""><figcaption><p>Make your selection and commit. Good things will come.</p></figcaption></figure>

**Contents:**

- [About Volume DF](#about-volume-df)
- [User Guide to Volume DF](#user-guide-to-volume-df)
- [User Guide to Delegation](#user-guide-to-delegation)

# About Volume DF

We've already covered [Passive DF](passivedf.md), which is a great start to earn from your locked OCEAN (veOCEAN).

_Volume_ DF lets you can earn more yet, with that same veOCEAN.

In Volume DF, you allocate veOCEAN to data assets with high data consume volume (DCV). This acts as _data curation_.

You can delegate your veOCEAN to other wallets. This is helpful when you want a bot to automatically update your veOCEAN allocations (from a "hot" wallet) while keeping your locked OCEAN secure in a hardware wallet. There are other use cases too. There's more info [below](#user-guide-to-delegation).

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

[Here's how to delegate](user-guides/how-to-delegate.md).

### Assets that Qualify for Volume DF

Data assets that have veOCEAN allocated towards them get Volume DF rewards.

The asset may be of any type — dataset, data feed, a C2D algorithm, or other. It may be fixed price or free. If fixed price, any token of exchange is alright (OCEAN, H2O, USDC, etc). If free, then gas used for consume is the "volume".

To qualify for DF, an asset must also:

* Have been created by Ocean Smart contracts [deployed](https://github.com/oceanprotocol/contracts/blob/main/addresses/address.json) by OPF to [production networks](../discover/networks/README.md)
* The asset must be listed on Ocean Market
* Can’t be in [purgatory](https://github.com/oceanprotocol/list-purgatory/blob/main/policies/README.md)


### How Rewards are Calculated

The Reward Function (RF) governs how active rewards are allocated to Data Farmers.

**Rewards are calculated as follows:**

1. Distribute OCEAN across each asset **based on rank**: highest-DCV asset gets the most OCEAN, second-highest-DCV gets second-most, etc. [Here are details](https://blog.oceanprotocol.com/data-farming-df22-completed-df23-started-reward-function-tuned-ffd4359657ee).
1. For each asset and each veOCEAN holder:
   1. If the holder is a publisher, 2x the effective allocation
   1. Baseline rewards = (% allocation in asset) \* (OCEAN for an asset)
   1. Bound rewards to the asset by 125% APY
   1. Bound rewards by asset’s DCV \* 0.1%.

The actual code is in [calcrewards.py](https://github.com/oceanprotocol/df-py/blob/main/df_py/volume/calc_rewards.py) in df-py repo.

When DF restarts each Thursday, the global allocation towards each asset resets back to zero and then starts counting up again until the end of the round. After allocating your veOCEAN to different datasets, it will take time for your voting power to be accounted for. 

----

# User Guide to Volume DF

<figure><img src="../../.gitbook/assets/gif/avatar-pick-whale.gif" alt=""><figcaption>Pick your whale</figcaption></figure>

In Volume DF, you allocate veOCEAN to data assets with high data consume volume (DCV). You do this via the DF dApp.

We'll show you how!  

#### Step 1 - Navigate to the DF dApp

- Go to [https://df.oceandao.org](https://df.oceandao.org)

#### Step 2 - Connect your wallet

- Connect your wallet to the dApp, on Ethereum mainnet

#### Step 3 - Click the Volume DF tab in the top menu

<figure><img src="../../.gitbook/assets/data-farming/volumeDF-page.png" alt=""><figcaption><p>Click the Volume DF page link in the menu</p></figcaption></figure>

#### Step 4 - Select the assets which you would like to allocate to by toggling the percentage allocation at the end of the row

- On the rightmost column, toggle the percentage of your total Allocation Power that you wish to allocate to each asset of your choice. You will **get a portion of the sales** of each asset that you allocate to!
- Note that if you allocate to an asset that YOU published, then you will get an **effective 2x allocation boost**.
- If you are a publisher and curating your own asset, your asset may be styled differently in the UI.

<figure><img src="../../.gitbook/assets/data-farming/allocations.png" alt=""><figcaption><p>Toggle the percentage of your veOCEAN that you would like to allocate to each asset</p></figcaption></figure>

#### Step 5 - Click the Update Allocations button

- Click the pink Update Allocations button
- Sign the transactions with your wallet & pay the gas fees

<figure><img src="../../.gitbook/assets/data-farming/update-allocations.png" alt=""><figcaption><p>Click the Update Allocations button</p></figcaption></figure>

That's it! You've successfully allocated (aka "voted on") your favorite assets in the Ocean ecosystem using your veOCEAN and are generating active rewards yield. Now, just wait until next Thursday to see if you can [claim any OCEAN rewards](how-to-claim-rewards.md) on the Active Rewards section of the [Rewards page](https://df.oceandao.org/rewards) for your portion of the assets' sales. Remember that your first time claiming rewards will require at least one week, but not more than 2 weeks of wait!


----

# User Guide to Delegation


<figure><img src="../../.gitbook/assets/gif/underwater-buddy-peewee.gif" alt=""><figcaption></figcaption></figure>

## Why Delegate?

Delegation is a tool for Volume DF.

Consider these challenges:
- Your veOCEAN is on a hardware wallet and you want a "hot" software wallet to auto-delegate based on data consume volume, to increase APY
- You have >1 wallets and it's a pain to switch among them for delegating

[Delegation](https://df.oceandao.org/delegate) solves that. "To delegate" means "to transfer veOCEAN Allocation Power to another wallet address" for a limited period.

When you delegate, you delegate 100% of your veOCEAN Allocation power.

{% hint style="info" %}
If you delegate 100% of your Allocation Power, your allocations will not count until the delegation expires. The delegation expiration date is the same as your veOCEAN Lock End Date at the time of delegation. If necessary, you can extend your Lock End Date before delegating. You can also cancel your delegation at any time 💪.   

Once delegated, rewards will be sent to the wallet address you delegated to. Then, the delegation receiver is in charge of your active rewards and is responsible for returning those back to you should you choose to do so.

{% endhint %}


### Steps to Delegate

Follow these steps to delegate your veOCEAN:

1. Go to the [Data Farming dApp](https://df.oceandao.org).
2. Navigate to the [Delegate page](https://df.oceandao.org/delegate).
3. In the 'Receiver wallet address' field, enter the wallet address you wish to delegate to
4. Click the 'Delegate' button, and sign the transaction with your wallet.
5. (Optional) Cancel the delegation to regain your allocation power before the delegation expires.

### What if someone delegates to you?

If you receive veOCEAN allocation power from other wallets, then you will receive their active rewards.

You _cannot_ re-delegate this veOCEAN further downstream.&#x20;

<figure><img src="../../.gitbook/assets/data-farming/veOCEAN-Delegation.png" alt=""><figcaption></figcaption></figure>
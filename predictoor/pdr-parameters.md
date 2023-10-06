# Predictoor Parameters

## Testnet Details
As of Sep 12, 2023, Predictoor / Ocean contracts are deployed to [Oasis Sapphire testnet](https://docs.oasis.io/dapp/sapphire/#testnet).

Users need fake OCEAN & ROSE tokens. You can find the [Tutorial on How to Get tokens here](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/testnet-faucet.md).

**Fake OCEAN.** Staking & payment is in fake OCEAN. Users acquire it via a faucet.  
**Fake ROSE.** Gas fees are in fake ROSE. Users acquire it via a faucet.  

## Mainnet Details
As of Oct 10, 2023, Predictoor / Ocean contracts are deployed to [Oasis Sapphire mainnet](https://docs.oasis.io/dapp/sapphire/#mainnet).  

Users need (real) OCEAN & ROSE tokens:  

**OCEAN.** Staking & payment is in OCEAN. Users [acquire OCEAN via exchanges](https://oceanprotocol.com/about-us/ocean-token#get). Users bridge OCEAN tokens from ETH mainnet to Oasis Sapphire mainnet via [Celer](https://celer.network/).  
**ROSE.** Gas fees are in ROSE. Users bridge tokens bridge from Oasis Emerald mainnet to Oasis Sapphire mainnet via Celer. [Read the details here](https://oasisprotocol.org/blog/celer-messaging-bridge-integration)

## Feeds Published
For testnet, there are 10 feeds: X/USDT pair for each of the top-10 coins by market cap (ignoring stablecoins), 5m timescales, on Binance, >0% fees on Binance. Paid feeds. The coins are: X = BTC, ETH, BNB, XRP, ADA, DOGE, SOL, LTC, TRX, DOT

For mainnet, tentatively, there will be 20 feeds:  
- 10x at 5m timescales like above  
- 10x at 60m timescales like above  

## Pricing
The price to subscribe to one feed for 24 hours is 3.00 OCEAN. This includes all fees.  

Fee details:
- 0.1% community swap fee  
- 20% fee to Ocean Protocol Foundation. (Will be used to further drive Predictoor, and to burn OCEAN.)  
- For reference, price without fees is 2.49791840133 OCEAN. To calculate this: Let x = price without fees. Then x * (1 + 0.20 + 0.001) = 3.0 → x = 3.0 / (1 + 0.20 + 0.001) = 2.49791840133  

Pricing is subject to change based on learnings, and feedback from community.  

## Predictoor Data Farming
[Ocean Data Farming](https://df.oceandao.org/rewards) (DF) is an incentives program currently with [150K OCEAN rewards](../rewards/df-intro.md#reward-schedule) per week.

In Nov 2nd, a reward stream will be introduced to incentivize predictoors. This reward stream will provide 37,000 OCEAN in weekly rewards. You can find more about it in [Data Farming Intro - What are Active Rewards?](../rewards/df-intro.md#what-are-active-rewards)
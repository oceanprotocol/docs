# Predictoor Parameters

## Testnet Details
As of Sep 12, 2023, Predictoor / Ocean contracts are deployed to [Oasis Sapphire testnet](https://docs.oasis.io/dapp/sapphire/#testnet).

Users need fake OCEAN & ROSE tokens:  
**- Fake OCEAN.** Staking & payment is in fake OCEAN. Users acquire it via a faucet. [Here's how](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/testnet-faucet.md).  
**- Fake ROSE.** Gas fees are in fake ROSE. Users acquire it via a faucet. [Here's how](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/testnet-faucet.md).  

## Mainnet Details
As of Oct 10, 2023, Predictoor / Ocean contracts are deployed to [Oasis Sapphire mainnet](https://docs.oasis.io/dapp/sapphire/#mainnet).  

Users need (real) OCEAN & ROSE tokens:  
**- OCEAN.** Staking & payment is in OCEAN. [How to get OCEAN on Sapphire](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/get-ocean-on-sapphire.md).  
**- ROSE.** Gas fees are in ROSE. [How to get ROSE on Sapphire](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/get-ocean-on-sapphire.md).  

## Feeds Published
For testnet, there are 10 feeds: X/USDT pair for each of the top-10 coins by market cap (ignoring stablecoins), 5m timescales, on Binance, >0% fees on Binance. Paid feeds. The coins are: X = BTC, ETH, BNB, XRP, ADA, DOGE, SOL, LTC, TRX, DOT  

For both testnet and mainnet, there are 20 feeds:  
- X/USDT pair for each of the top-10 coins by market cap (ignoring stablecoins), on Binance, 5m timescales, on Binance. The coins are: X = BTC, ETH, BNB, XRP, ADA, DOGE, SOL, LTC, TRX, DOT  
- Like above, but for 60m timescales  

## Pricing
For each timescale, one feed is free: BTC/UTD on Binance.  Below is pricing for the remaining feeds.   

The price to subscribe to one feed for 24 hours is 3.00 OCEAN. This includes all fees. Fee details:  
- 0.1% community swap fee  
- 20% fee to Ocean Protocol Foundation. (Will be used to further drive Predictoor, and to burn OCEAN.)  
- For reference, price without fees is 2.49791840133 OCEAN. To calculate this: Let x = price without fees. Then x * (1 + 0.20 + 0.001) = 3.0 → x = 3.0 / (1 + 0.20 + 0.001) = 2.49791840133  

Pricing is subject to change based on learnings, and feedback from community.  


----

_Next: [FAQ](pdr-faq.md)_

_Back: [How to earn](pdr-earn.md)_


---
description: Metrics, Formulas, and definitions used by Data Farming.
---
## Contract Deployments

The [veOCEAN & DF contracts](https://github.com/oceanprotocol/contracts/tree/main/contracts/ve) are deployed to Ethereum mainnet, alongside other Ocean contract deployments. [Full list](https://github.com/oceanprotocol/contracts/blob/main/addresses/address.json).

veFeeDistributor has a start_time of 1663804800 (Thu Sep 22 2022 00:00:00)

## Formulas

### veOcean

**veOCEAN Linear Decay**  
```
veOcean_balance = OCEAN_amount_locked * (your_unlock_timestamp — current_unix_timestamp ) / 60 * 60 * 24 * 7 * 52 (that is 4 years)
```
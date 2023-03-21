## Contract Deployments

The [veOCEAN & DF contracts](https://github.com/oceanprotocol/contracts/tree/main/contracts/ve) are deployed to Ethereum mainnet, alongside other Ocean contract deployments. [Full list](https://github.com/oceanprotocol/contracts/blob/main/addresses/address.json).

```
{
 “veOCEAN”: “0xE86Bf3B0D3a20444DE7c78932ACe6e5EfFE92379”,
 “veAllocate”: “0x55567E038b0a50283084ae773FA433a5029822d3”,
 “veDelegation”: “0xc768eDF2d21fe00ef5804A7Caa775E877e65A70E”,
 “veFeeDistributor”: “0x256c54219816603BB8327F9019533B020a76e936”,
 “veDelegationProxy”: “0x45E3BEc7D139Cd8Ed7FeB161F3B094688ddB0c20”,
 “veFeeEstimate”: “0xe97a787420eD263583689Bd35B7Db1952A94710d”,
 “SmartWalletChecker”: “0xd7ddf62257A41cc6cdAd7A3d36e4f1d925fD142a”,
 “DFRewards”: “0xFe27534EA0c016634b2DaA97Ae3eF43fEe71EEB0”,
 “DFStrategyV1”: “0x545138e8D76C304C916B1261B3f6c446fe4f63e3”,
}
```

veFeeDistributor has a start_time of 1663804800 (Thu Sep 22 2022 00:00:00)

## Formulas

### veOcean

**veOCEAN Liner Decay**  
```
veOcean_balance = OCEAN_amount_locked * (your_unlock_timestamp — current_unix_timestamp ) / 60 * 60 * 24 * 7 * 52 (that is 4 years)
```
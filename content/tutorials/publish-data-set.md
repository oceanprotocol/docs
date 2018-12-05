---
title: Publish a Data Set
---

### Requirements ###
- Javascript frontend or nodejs app running
- Installed `@oceanprotocol/squid` and `web3` packages
- All required services running ([oceanprotocol/docker-images](https://github.com/oceanprotocol/docker-images))

### Publishing ###
  ```javascript
    // import package
    import { Ocean } from '@oceanprotocol/squid/dist/node/squid'
    // create ocean with configuration
    const ocean = await new Ocean.getInstance({/* < your configuration > */})
    // get accounts
    const accounts = await ocean.getAccounts()
    // register your asset
    const ddo = await ocean.registerAsset(/* < your asset > */, accounts[0])
  ```
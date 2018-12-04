---
title: Publish a Data Set
---

### Requirements ###
- `nodejs` >= 10 and `npm` >= 5.2 installed.
- [oceanprotocol/docker-images](https://github.com/oceanprotocol/docker-images) running.
- Browser with [Metamask](https://metamask.io/) and some ether in your account.

### Steps ###
1. Run `npx create-react-app marketplace` in you terminal. This will create folder `marketplace` with empty basic react app.
2. Move to your app directory with `cd marketplace` and run `yarn add @oceanprotocol/squid web3`. This adds OceanProtocol and Web3 packages to the app.
3. At this point you can already run `yarn start` which starts app in your browser at [localhost:3000](http://localhost:3000).
4. To clear react spinning icon open `src/App.js` in your favourite editor and modify the source to:
  ```javascript
  import React, { Component } from 'react';
  import './App.css';
  class App extends Component {
    render() {
      return (
        <div className="App">
          <h1>Marketplace dapp</h1>
        </div>
      );
    }
  }
  export default App;
  ```
5. Below `import './App.css';` lets import packages we installed, setup web3 and unlock Metamask accounts if locked.
  ```javascript
  import { Ocean } from '@oceanprotocol/squid/dist/node/squid'
  import * as Web3 from 'web3'
  const web3 = new Web3(window.web3.currentProvider)
  window.ethereum.enable()
  ```
6. Below code that you just added create asset with all details that you want to submit:
  ```javascript
  const asset = {
    base: {
      name: "Office Humidity",
      description: "Weather information of UK including temperature and humidity",
      dateCreated: "2012-02-01T10:55:11+00:00",
      author: "Met Office",
      size: "3.1bg",
      license: "Public Domain",
      copyrightHolder: "Met Office",
      contentUrls: ["https://testocnfiles.blob.core.windows.net/testfiles/testzkp.zip"],
      contentType: "text/csv",
      links: [{
        name: "Dataset sample",
        type: "sample",
        url: "http://data.ceda.ac.uk/badc/ukcp09/data/gridded-land-obs/gridded-land-obs-daily/"
      }],
      tags: "weather, uk, 2011, temperature, humidity",
      price: 5,
      type: "dataset"
    },
    curation: {
      rating: 0,
      numVotes: 0,
      schema: "Binary Voting"
    },
    additionalInformation: {
      updateFrequency: "yearly"
    }
  }
  ```
7. Next step is to initialize Squid. This starts loading all smart contracts so we will put  alert in the end to let us know when it finishes. Code for this goes after the `class App extends Component {` line.
  ```javascript
  async componentDidMount() {
    this.ocean = await new Ocean.getInstance({
      web3Provider: web3,
      nodeUri: "http://localhost:8545",
      aquariusUri: "http://localhost:5000",
      brizoUri: "http://localhost:8030",
      parityUri: "http://localhost:8545",
      secretStoreUri: "http://localhost:12001",
      threshold: 0,
      password: "secret",
      address: "0x068ed00cf0441e4829d9784fcbe7b9e26d4bd8d0",
    })
    alert("Finished loading contracts!")
  }
  ```
8. Below that add function that handles retrival of accounts from web3 and asset registration.
  ```javascript
  async submitAsset(){
    const accounts = await this.ocean.getAccounts()
    const ddo = await this.ocean.registerAsset(asset, accounts[0])
    alert("Asset successfully submited:", JSON.stringify(ddo))
  }
  ```
9. Last thing missing is to add button that submits asset after the `<h1>Marketplace dapp</h1>` line.
  ```
  <button onClick={()=>this.submitAsset()}>Register asset</button>
  ```

And that's it. You can now submit your asset to the network.
You can check final code src/App.js code at:??? and full repository at:???
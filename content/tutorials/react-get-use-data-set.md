---
title: Get & Use a Data Set
description: Tutorial to get and use a data set in a basic React app.
---

## Requirements

This is a continuation of the [React App Setup](/tutorials/react-setup/) and [React Publish Data-set](/tutorials/react-publish-data-set/) tutorial, so make sure you have done all the steps described in there.

Open `src/App.js` in your marketplace app from previous tutorials.

## Retrieve Assets

In the previous tutorial we added asset publishing. We can now search for published assets for consumption. Just after the `submitAsset()` function we can add a new function that will handle search:

```js
async retrieveAssets() {
  this.dbAssets = await this.ocean.searchAssetsByText("Office Humidity")
  console.log(this.dbAssets)
}
```

The last thing we need is a button to start our search inside the render function just after `<button onClick={() => this.submitAsset()}>Register asset</button>`:

```jsx
<button onClick={() => this.retrieveAssets()}>Retrieve assets</button>
```

## Consume Asset

The retrieved assets can now be consumed so in this tutorial we consume the first one. The following code goes after `async retrieveAssets()` function.

```js
async consumeAsset() {
  // get all accounts
  const accounts = await this.ocean.getAccounts()
  // get first asset
  const consumeAsset = this.dbAssets[0]
  // get service we want to execute
  const service = consumeAsset.findServiceByType('Access')
  // sign service
  const serviceAgreementSignatureResult = await this.ocean.signServiceAgreement(
      consumeAsset.id,
      service.serviceDefinitionId,
      accounts[0])
  // run it
  await this.ocean.initializeServiceAgreement(
      consumeAsset.id,
      service.serviceDefinitionId,
      serviceAgreementSignatureResult.serviceAgreementId,
      serviceAgreementSignatureResult.serviceAgreementSignature,
      // callback to handle the files we get
      (files) => { console.log('Asset files', files) },
      accounts[0])
}
```

We still need button in render function just after `<button onClick={()=>this.retrieveAssets()}>Retrieve assets</button>` to start consumption:

```jsx
<button onClick={() => this.consumeAsset()}>Consume asset</button>
```

With all these buttons in place, you should see this:

![React App 05](images/react-app-05.png)

## Final Result

That's it. If you have no errors in your `console.log` and your asset files listed you have working marketplace.

Here is the full source of `src/App.js` that you should have if you followed this tutorial:

```jsx
import React, { Component } from 'react'
import './App.css'
import { Ocean } from '@oceanprotocol/squid'
import * as Web3 from 'web3'

const web3 = new Web3(window.web3.currentProvider)
window.ethereum.enable()

const asset = {
  base: {
    name: 'Office Humidity',
    description: 'Weather information of UK including temperature and humidity',
    dateCreated: '2012-02-01T10:55:11+00:00',
    author: 'Met Office',
    size: '3.1bg',
    license: 'Public Domain',
    copyrightHolder: 'Met Office',
    contentUrls: [
      'https://testocnfiles.blob.core.windows.net/testfiles/testzkp.zip'
    ],
    contentType: 'text/csv',
    links: [
      {
        name: 'Dataset sample',
        type: 'sample',
        url:
          'http://data.ceda.ac.uk/badc/ukcp09/data/gridded-land-obs/gridded-land-obs-daily/'
      }
    ],
    tags: 'weather, uk, 2011, temperature, humidity',
    price: 5,
    type: 'dataset'
  },
  curation: {
    rating: 0,
    numVotes: 0,
    schema: 'Binary Voting'
  },
  additionalInformation: {
    updateFrequency: 'yearly'
  }
}

class App extends Component {
  async componentDidMount() {
    this.ocean = await new Ocean.getInstance({
      web3Provider: web3,
      nodeUri: 'http://localhost:8545',
      aquariusUri: 'http://localhost:5000',
      brizoUri: 'http://localhost:8030',
      parityUri: 'http://localhost:8545',
      secretStoreUri: 'http://localhost:12001',
      threshold: 0,
      password: 'secret',
      address: '0x068ed00cf0441e4829d9784fcbe7b9e26d4bd8d0'
    })
    console.log('Finished loading contracts!')
  }

  async submitAsset() {
    const accounts = await this.ocean.getAccounts()
    const ddo = await this.ocean.registerAsset(asset, accounts[0])
    alert('Asset successfully submited: ', JSON.stringify(ddo))
  }

  async retrieveAssets() {
    this.dbAssets = await this.ocean.searchAssetsByText('Office Humidity')
    console.log(this.dbAssets)
  }

  async consumeAsset() {
    // get all accounts
    const accounts = await this.ocean.getAccounts()
    // get first asset
    const consumeAsset = this.dbAssets[0]
    // get service we want to execute
    const service = consumeAsset.findServiceByType('Access')
    // sign service
    const serviceAgreementSignatureResult = await this.ocean.signServiceAgreement(
      consumeAsset.id,
      service.serviceDefinitionId,
      accounts[0]
    )
    // run it
    await this.ocean.initializeServiceAgreement(
      consumeAsset.id,
      service.serviceDefinitionId,
      serviceAgreementSignatureResult.serviceAgreementId,
      serviceAgreementSignatureResult.serviceAgreementSignature,
      // callback to handle the files we get
      files => {
        console.log('Asset files', files)
      },
      accounts[0]
    )
  }

  render() {
    return (
      <div className="App App-header">
        <h1>Marketplace app</h1>
        <button onClick={() => this.submitAsset()}>Register asset</button>
        <button onClick={() => this.retrieveAssets()}>Retrieve assets</button>
        <button onClick={() => this.consumeAsset()}>Consume asset</button>
      </div>
    )
  }
}

export default App
```

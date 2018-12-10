---
title: Publish a Data Set
description: Tutorial to add dataset publishing capabilities to a basic React app.
---

## Requirements

This is a continuation of the [React App Setup](/tutorials/react-setup) tutorial, so make sure you have done all the steps described in there.

Open `src/App.js` in your marketplace app from the [React App Setup](/tutorials/react-setup) tutorial.

## Define Asset

First, let's add the asset that we want to publish.

To do that, we need to add the following code after `window.ethereum.enable()` line, defining our asset based on the [OEP-08](https://github.com/oceanprotocol/OEPs/tree/master/8) metadata structure:

```js
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
```

## Handle Asset Publishing

Now that we have an asset to submit, we need a function to handle it. Just before `render() {` let's add this function:

```js
async submitAsset() {
  const accounts = await this.ocean.getAccounts()
  const ddo = await this.ocean.registerAsset(asset, accounts[0])
  alert('Asset successfully submited: ', JSON.stringify(ddo))
}
```

The last thing we need is a button to start our registration inside the render function just after `<h1>Marketplace app</h1>`:

```jsx
<button onClick={() => this.submitAsset()}>Register asset</button>
```

## Final Result

That's it. If you have no errors in your `console.log` and you receive an alert after you click `Register asset` then you have successfully registered an asset.

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

  render() {
    return (
      <div className="App App-header">
        <h1>Marketplace app</h1>
        <button onClick={() => this.submitAsset()}>Register asset</button>
      </div>
    )
  }
}

export default App
```

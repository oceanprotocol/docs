---
title: Publish a Data Set
description: Tutorial to add data set publishing capabilities to a basic React app.
---

## Requirements

This is continuation of the [React App Setup](/tutorials/react-setup) tutorial, so make sure you have all the steps running.

## Adding Publishing

1. Open `src/App.js` in your marketplace app from the [React App Setup](/tutorials/react-setup) tutorial.
2. First lets add asset that we want to publish. To do that we need to add the following code after `window.ethereum.enable()` line.

   ```javascript
   const asset = {
     base: {
       name: 'Office Humidity',
       description:
         'Weather information of UK including temperature and humidity',
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

3. Now that we have asset to submit we need function to handle it. Just before `render() {` let's add:

   ```javascript
     async submitAsset(){
       const accounts = await this.ocean.getAccounts()
       const ddo = await this.ocean.registerAsset(asset, accounts[0])
       alert("Asset successfully submited:", JSON.stringify(ddo))
     }
   ```

4. Last thing we need is button to start our registration inside render function just after `<h1>Marketplace app</h1>`

   ```jsx
   <button onClick={() => this.submitAsset()}>Register asset</button>
   ```

## Finished

That's it, if you have no errors in your `console.log` and you receive alert after you click `Register asset` you have successfully registered an asset.

Here is full source of `src/App.js` that you should have if you followed this tutorial:

```javascript
import React, { Component } from 'react'
import './App.css'
import { Ocean } from '@oceanprotocol/squid/dist/node/squid'
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
    alert('Asset successfully submited:', JSON.stringify(ddo))
  }
  render() {
    return (
      <div className="App">
        <h1>Marketplace app</h1>
        <button onClick={() => this.submitAsset()}>Register asset</button>
      </div>
    )
  }
}
export default App
```

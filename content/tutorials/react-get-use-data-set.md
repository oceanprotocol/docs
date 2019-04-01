---
title: Get & Use a Data Set
description: Tutorial to get and use a data set in a basic React app.
---

**NOTICE: This section of the React App Tutorial is not currently working because it hasn't been updated to work with the latest squid-js. There is [an open issue to update it](https://github.com/oceanprotocol/docs/issues/181).**

## Requirements

This is a continuation of the [React App Setup](/tutorials/react-setup/) and [React Publish Data-set](/tutorials/react-publish-data-set/) tutorial, so make sure you have done all the steps described in there.

Open `src/App.js` in your marketplace app from previous tutorials.

## Retrieve Assets

In the previous tutorial we added asset publishing. We can now search for published assets for consumption. Just after the `submitAsset()` function we can add a new function that will handle search:

```js
async retrieveAssets() {
  this.dbAssets = await this.ocean.assets.search("10 Monkey Species Small")
  console.log(this.dbAssets)
}
```

The last thing we need is a button to start our search inside the render function just after `<button onClick={() => this.submitAsset()}>Register asset</button>`:

```jsx
<button onClick={() => this.retrieveAssets()}>Retrieve assets</button>
```

## Consume Assets

The retrieved assets can now be consumed so in this tutorial we consume the first one. The following code goes after `async retrieveAssets()` function.

```js
async consumeAsset() {
  // get all accounts
  const accounts = await this.ocean.accounts.list()
  // get first asset
  const consumeAsset = this.dbAssets[0]
  // get service we want to execute
  const service = consumeAsset.findServiceByType('Access')
  // order service agreement
  const agreement = await this.ocean.assets.order(
      consumeAsset.id,
      service.serviceDefinitionId,
      accounts[0]
  )
  // consume it
  await this.ocean.assets.consume(
      agreement,
      consumeAsset.id,
      service.serviceDefinitionId,
      accounts[0],
      ''
  )
}
```

We still need button in render function just after `<button onClick={()=>this.retrieveAssets()}>Retrieve assets</button>` to start consumption:

```jsx
<button onClick={() => this.consumeAsset()}>Consume asset</button>
```

With all these buttons in place, you should see this:

![React App 05](images/react-app-05.png)

## Final Result

That's it. If you have no errors in your `console.log` and can see your asset files listed, you have a working marketplace.

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
    name: "10 Monkey Species Small",
    dateCreated: "2012-02-01T10:55:11Z",
    author: "Mario",
    license: "CC0: Public Domain",
    contentType: "jpg/txt",
    price: 10,
    files: [
      {
        checksum: "2bf9d229d110d1976cdf85e9f3256c7f",
        checksumType: "MD5",
        contentLength: 12057507,
        url: "https://s3.amazonaws.com/datacommons-seeding-us-east/10_Monkey_Species_Small/assets/training.zip"
      },
      {
        checksum: "354d19c0733c47ef3a6cce5b633116b0",
        checksumType: "MD5",
        contentLength: 928,
        url: "https://s3.amazonaws.com/datacommons-seeding-us-east/10_Monkey_Species_Small/assets/monkey_labels.txt"
      },
      {
        url: "https://s3.amazonaws.com/datacommons-seeding-us-east/10_Monkey_Species_Small/assets/validation.zip"
      }
    ],
    checksum: "",
    categories: [
      "image"
    ],
    tags: [
      "image data",
      "classification",
      "animals"
    ],
    type: "dataset",
    description: "EXAMPLE ONLY ",
    size: "3.1gb",
    copyrightHolder: "Unknown",
    encoding: "UTF-8",
    compression: "zip",
    workExample: "image path, id, label",
    links: [
      {
        name: "example model",
        url: "https://drive.google.com/open?id=1uuz50RGiAW8YxRcWeQVgQglZpyAebgSM"
      },
      {
        name: "example code",
        type: "example code",
        url: "https://github.com/slothkong/CNN_classification_10_monkey_species"
      },
      {
        url: "https://s3.amazonaws.com/datacommons-seeding-us-east/10_Monkey_Species_Small/links/discovery/n5151.jpg",
        name: "n5151.jpg",
        type: "discovery"
      },
      {
        url: "https://s3.amazonaws.com/datacommons-seeding-us-east/10_Monkey_Species_Small/links/sample/sample.zip",
        name: "sample.zip",
        type: "sample"
      }
    ],
    inLanguage: "en"
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
      password: 'node0',
      address: '0x00bd138abd70e2f00903268f3db08f2d25677c9e'
    })
    console.log('Finished loading contracts!')
  }

  async submitAsset() {
    const accounts = await this.ocean.accounts.list()
    const ddo = await this.ocean.assets.create(asset, accounts[0])
    alert('Asset successfully submitted: ', JSON.stringify(ddo))
  }

  async retrieveAssets() {
    this.dbAssets = await ocean.assets.search("10 Monkey Species Small")
    console.log(this.dbAssets)
  }

  async consumeAsset() {
    // get all accounts
    const accounts = await this.ocean.accounts.list()
    // get first asset
    const consumeAsset = this.dbAssets[0]
    // get service we want to execute
    const service = consumeAsset.findServiceByType('Access')
    // order service agreement
    const agreement = await ocean.assets.order(
      consumeAsset.id,
      service.serviceDefinitionId,
      accounts[0]
    )
    // consume it
    await ocean.assets.consume(
      agreement,
      consumeAsset.id,
      service.serviceDefinitionId,
      accounts[0],
      ''
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

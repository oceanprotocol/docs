---
title: Publish a Data Set
description: Tutorial to add dataset publishing capabilities to a basic React app.
---

## Requirements

This is a continuation of the [React App Setup](/tutorials/react-setup/) tutorial, so make sure you have done all the steps described in there.

Open `src/App.js` in your marketplace app from the [React App Setup](/tutorials/react-setup/) tutorial.

## Define Asset

First, let's add the [asset](/concepts/terminology/#asset-or-data-asset) that we want to publish.

To do that, we need to add the following code after `window.ethereum.enable()` line, defining our asset based on the [OEP-08](https://github.com/oceanprotocol/OEPs/tree/master/8) metadata structure:

```js
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
```

## Handle Asset Publishing

Now that we have an asset to submit, we need a function to handle it. Just before `render() {` let's add this function:

```js
async submitAsset() {
  const accounts = await this.ocean.getAccounts()
  const ddo = await this.ocean.registerAsset(asset, accounts[0])
  alert('Asset successfully submitted: ', JSON.stringify(ddo))
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
    const accounts = await this.ocean.getAccounts()
    const ddo = await this.ocean.registerAsset(asset, accounts[0])
    alert('Asset successfully submitted: ', JSON.stringify(ddo))
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

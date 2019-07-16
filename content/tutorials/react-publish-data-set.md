---
title: Publish a Data Set
description: Tutorial to add dataset publishing capabilities to a basic React app.
---

## Requirements

This is a continuation of the [React App Setup](/tutorials/react-setup/) tutorial, so make sure you have done all the steps described in there.

1. [React App Setup](/tutorials/react-setup/)

Open `src/App.js` from your `marketplace/` folder.

## Define Asset

First, let's add the [asset](/concepts/terminology/#asset-or-data-asset) that we want to publish.

To do that, we need to define the asset based on the [OEP-08](https://github.com/oceanprotocol/OEPs/tree/master/8) metadata structure. An asset can have multiple `files` attached to it and each file's `url` value will be encrypted during the publish process. To download that file later on, this value will be decrypted during the consume process.

Let's create a new file `src/asset.js` and fill it with:

```js:title=src/asset.js
const asset = {
  base: {
    name: '10 Monkey Species Small',
    dateCreated: '2012-02-01T10:55:11Z',
    author: 'Mario',
    license: 'CC0: Public Domain',
    price: '10',
    files: [
      {
        index: 0,
        contentType: 'application/zip',
        checksum: '2bf9d229d110d1976cdf85e9f3256c7f',
        checksumType: 'MD5',
        contentLength: 12057507,
        compression: 'zip',
        encoding: 'UTF-8',
        url:
          'https://s3.amazonaws.com/datacommons-seeding-us-east/10_Monkey_Species_Small/assets/training.zip'
      },
      {
        index: 1,
        contentType: 'text/txt',
        checksum: '354d19c0733c47ef3a6cce5b633116b0',
        checksumType: 'MD5',
        contentLength: 928,
        url:
          'https://s3.amazonaws.com/datacommons-seeding-us-east/10_Monkey_Species_Small/assets/monkey_labels.txt',
        resourceId: 'test'
      },
      {
        index: 2
      }
    ],
    checksum: '',
    categories: ['image'],
    tags: ['image data', 'classification', 'animals'],
    type: 'dataset',
    description: 'EXAMPLE ONLY ',
    copyrightHolder: 'Unknown',
    workExample: 'image path, id, label',
    links: [
      {
        name: 'example model',
        url:
          'https://drive.google.com/open?id=1uuz50RGiAW8YxRcWeQVgQglZpyAebgSM'
      },
      {
        name: 'example code',
        type: 'example code',
        url: 'https://github.com/slothkong/CNN_classification_10_monkey_species'
      },
      {
        url:
          'https://s3.amazonaws.com/datacommons-seeding-us-east/10_Monkey_Species_Small/links/discovery/n5151.jpg',
        name: 'n5151.jpg',
        type: 'discovery'
      },
      {
        url:
          'https://s3.amazonaws.com/datacommons-seeding-us-east/10_Monkey_Species_Small/links/sample/sample.zip',
        name: 'sample.zip',
        type: 'sample'
      }
    ],
    inLanguage: 'en'
  }
}

export default asset
```

Then import this asset definition at the top of `src/App.js`:

```js:title=src/App.js
// ...
import asset from './asset'
// ...
```

## Handle Asset Publishing

Now that we have an asset to submit, we need a function to handle it. Just before `render() {` let's add this function:

```jsx:title=src/App.js
// ...
async submitAsset() {
  const accounts = await this.ocean.accounts.list()
  const ddo = await this.ocean.assets.create(asset, accounts[0])
  console.log('Asset successfully submitted.')
  console.log(ddo)
  alert(
    'Asset successfully submitted. Look into your console to see the response DDO object.'
  )
}
// ...
```

The last thing we need is a button to start our registration inside the render function just after `<h1>Marketplace app</h1>`:

```jsx:title=src/App.js
// ...
<button onClick={() => this.submitAsset()}>Register asset</button>
// ...
```

Tip: Before clicking the `Register asset` button, it might help to reload the page.

When you click on the `Register asset` button, you should get four separate dialog boxes from MetaMask, in a series, i.e. the second one only appears after you accept/approve the first one, and so on.

Have a look into `console.log` to see the various steps of the register process. If you have no errors in your `console.log`, then you have successfully registered an asset.

## Final Result

Here is the full source of `src/App.js` that you should have if you followed this tutorial:

```jsx:title=src/App.js
import React, { Component } from 'react'
import './App.css'
import { Ocean } from '@oceanprotocol/squid'
import Web3 from 'web3'
import asset from './asset'

const web3 = new Web3(window.web3.currentProvider)
window.ethereum.enable()

class App extends Component {
  async componentDidMount() {
    this.ocean = await new Ocean.getInstance({
      web3Provider: web3,
      nodeUri: 'http://localhost:8545',
      aquariusUri: 'http://localhost:5000',
      brizoUri: 'http://localhost:8030',
      brizoAddress: '0x00bd138abd70e2f00903268f3db08f2d25677c9e',
      parityUri: 'http://localhost:8545',
      secretStoreUri: 'http://localhost:12001'
    })
    console.log('Finished loading contracts.')
  }

  async submitAsset() {
    const accounts = await this.ocean.accounts.list()
    const ddo = await this.ocean.assets.create(asset, accounts[0])
    console.log('Asset successfully submitted.')
    console.log(ddo)
    alert(
      'Asset successfully submitted. Look into your console to see the response DDO object.'
    )
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

Move on to [Get & Use a Data Set](/tutorials/react-get-use-data-set/).

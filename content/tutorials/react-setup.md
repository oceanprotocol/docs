---
title: React App Setup
description: This tutorial shows how you can build a basic [React](https://reactjs.org/) app with [Create React App](https://github.com/facebook/create-react-app) that uses the squid-js JavaScript package to publish a data set, get a data set, and more.
---

## Requirements

- `Node.js` >= 10 is installed. You can check using `node -v`
- `npm` >= 5.2 is installed. You can check using `npm -v`
- Do the tutorial to [Set Up Azure Storage](/tutorials/azure-for-brizo/).
- Use a browser with [MetaMask](https://metamask.io/) and some Ether in your account. See the tutorial about [getting Ether and Ocean Tokens for testnets](/tutorials/get-ether-and-ocean-tokens/).
- Git clone the [oceanprotocol/barge](https://github.com/oceanprotocol/barge) repository, then in that directory:
  - Edit the `brizo.env` file and set all `AZURE_`... values.
  - Run `./start_ocean.sh --no-pleuston --local-kovan-node`. This runs several Ocean services locally, including a local Parity Ethereum node connected to the Kovan Testnet.

## New Create React App

First, kick start your new React app by creating a boilerplate with Create React App:

```bash
npx create-react-app marketplace
```

This will create a folder named `marketplace` with a boilerplate React app. Go into that new folder and add the Ocean Protocol JavaScript library and Web3 packages to the app's dependencies:

```bash
cd marketplace/
npm install @oceanprotocol/squid web3
```

At this point you can already run `npm start` which starts the app in your browser at [localhost:3000](http://localhost:3000):

![React App 01](images/react-app-01.png)

## Add Markup & Web3

Let's make it ours, open `src/App.js` and replace the whole source with:

```jsx
import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App App-header">
        <h1>Marketplace app</h1>
      </div>
    )
  }
}

export default App
```

Below the `import './App.css'` line, let's import the packages we installed, set up web3 and unlock MetaMask accounts (if locked):

```js
import { Ocean } from '@oceanprotocol/squid'
import * as Web3 from 'web3'

const web3 = new Web3(window.web3.currentProvider)
window.ethereum.enable()
```

After those steps you should see this, and MetaMask should have asked you to allow access to your account:

![React App 02](images/react-app-02.png)
![React App 03](images/react-app-03.png)

## Create Ocean instance

Now that we are successfully connected with Web3, we can setup our Ocean instance.

At the beginning of your component, create a new Ocean instance with all configuration within the `componentDidMount` lifecycle method. All Ocean Protocol operations can be executed from this Ocean instance.

```js
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
  console.log("Finished loading contracts!")
}
```

## Final Result

That's it, if you have no errors in your `console.log` then you have successfully initialized an Ocean instance in your brand new React app and you are ready for the [next part of this tutorial](/tutorials/react-publish-data-set/).

![React App 04](images/react-app-04.png)

Here is the full source of `src/App.js` that you should have if you followed this tutorial:

```jsx
import React, { Component } from 'react'
import './App.css'
import { Ocean } from '@oceanprotocol/squid'
import * as Web3 from 'web3'

const web3 = new Web3(window.web3.currentProvider)
window.ethereum.enable()

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

  render() {
    return (
      <div className="App App-header">
        <h1>Marketplace app</h1>
      </div>
    )
  }
}

export default App
```

Move on to [Publish a Data Set](/tutorials/react-publish-data-set/).

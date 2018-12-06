---
title: React App Setup
description: Tutorial to set up a basic React app that uses squid-js.
---

This tutorial shows how you can build a basic [React](https://reactjs.org/) app with [Create React App](https://github.com/facebook/create-react-app) that uses the squid-js JavaScript package to publish a data set, get a data set, and more.

## Requirements

- `nodejs` >= 10 is installed. You can check using `node -v`
- `npm` >= 5.2 is installed. You can check using `npm -v`
- Do [the tutorial to Set Up Azure Storage](/tutorials/azure-for-brizo/).
- Git clone the [oceanprotocol/docker-images](https://github.com/oceanprotocol/docker-images) repository, then in that directory:
  - Edit the `brizo.env` file and set all `AZURE_`... values.
  - Run `./start_ocean.sh --no-pleuston --local-pond-node` in [oceanprotocol/docker-images](https://github.com/oceanprotocol/docker-images). This runs all services locally, including a local Parity Ethereum node.
- Use a browser with [MetaMask](https://metamask.io/) and some Ether in your account. See [the tutorial about getting Ether and Ocean Tokens for testnets](/tutorials/get-ether-and-ocean-tokens/).

## Tutorial Steps

1. Run `npx create-react-app marketplace` in you terminal. This will create a folder named `marketplace` with a boilerplate React app.
2. Move to your app directory with `cd marketplace` and run `npm install @oceanprotocol/squid web3`. This adds the Ocean Protocol JavaScript library and Web3 packages to the app.
3. At this point you can already run `npm start` which starts the app in your browser at [localhost:3000](http://localhost:3000).
4. To clear the React spinning icon, open `src/App.js` and modify the source to:

   ```javascript
   import React, { Component } from 'react'
   import './App.css'
   class App extends Component {
     render() {
       return (
         <div className="App">
           <h1>Marketplace app</h1>
         </div>
       )
     }
   }
   export default App
   ```

5. Below the `import './App.css'` line, let's import the packages we installed, set up web3 and unlock MetaMask accounts (if locked):

   ```javascript
   import { Ocean } from '@oceanprotocol/squid'
   import * as Web3 from 'web3'
   const web3 = new Web3(window.web3.currentProvider)
   window.ethereum.enable()
   ```

6. After the line `class App extends Component {` add the following Ocean initialization with all configuration. All OceanProtocol operations can be executed from this Ocean instance.

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
       console.log("Finished loading contracts!")
     }
   ```

## Finished

That's it, if you have no errors in your `console.log` then you have successfully initialized an Ocean instance in you brand new React app and you are ready for the next steps in this tutorial.

Here is the full source of `src/App.js` that you should have if you followed this tutorial:

```javascript
import React, { Component } from 'react'
import './App.css'
import { Ocean } from '@oceanprotocol/squid/dist/node/squid'
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
      <div className="App">
        <h1>Marketplace app</h1>
      </div>
    )
  }
}
export default App
```

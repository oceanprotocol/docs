---
title: React setup
---

### Requirements ###
- `nodejs` >= 10 and `npm` >= 5.2 installed.
- [oceanprotocol/docker-images](https://github.com/oceanprotocol/docker-images) running.
- Browser with [Metamask](https://metamask.io/) and some ether in your account.

### Tutorial Steps ###
1. Run `npx create-react-app marketplace` in you terminal. This will create folder `marketplace` with boilerplate react app.
2. Move to your dapp directory with `cd marketplace` and run `yarn add @oceanprotocol/squid web3`. This adds OceanProtocol and Web3 packages to the dapp.
3. At this point you can already run `yarn start` which starts dapp in your browser at [localhost:3000](http://localhost:3000).
4. To clear react spinning icon open `src/App.js` and modify the source to:
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
6. After line `class App extends Component {` add following ocean initialization with all configuration. All OceanProtocol operations can be executed from this ocean instance.
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

### Finished ###
That's it, if you have no errors in your `console.log` then you have successfully initialized Ocean instance in you breand new react dapp and you are ready for next steps in this tutorial.

Here is full source of `src/App.js` that you should have if you followed this tutorial:
  ```javascript
    import React, { Component } from 'react';
    import './App.css';
    import { Ocean } from '@oceanprotocol/squid/dist/node/squid'
    import * as Web3 from 'web3'
    const web3 = new Web3(window.web3.currentProvider)
    window.ethereum.enable()
    class App extends Component {
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

---
title: React App Setup
description: This tutorial shows how you can build a basic [React](https://reactjs.org/) app with [Create React App](https://github.com/facebook/create-react-app) that uses the squid-js JavaScript package to publish a data set, get a data set, and more.
---

## Requirements

- `Node.js` >= 10 is installed. You can check using `node -v`
- `npm` >= 5.2 is installed. You can check using `npm -v`
- [Docker](https://www.docker.com/products/docker-desktop) & [Docker Compose](https://docs.docker.com/compose/install/)
- A Web3 capable browser, like Firefox/Chrome with [MetaMask](https://metamask.io) installed, [connected to Nile network](http://localhost:8000/tutorials/connect-to-networks/#connect-to-the-nile-testnet)

## New Create React App

We are going to use Create React App to bootstrap our React app. You could use `npx create-react-app marketplace` but it creates more files than needed for the scope of this tutorial.

So let's go minimal and build up our app from scratch with this structure:

```text
marketplace/
├── package.json
├── public/
├──── index.html
├── src/
├──── index.js
```

First, create a new project folder for your new app, e.g. `marketplace`. Within that, add a new file `package.json` with the following content:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/master/package.json json GITHUB-EMBED

Notice the `@oceanprotocol/squid` dependency, which is the [Ocean Protocol JavaScript library](https://github.com/oceanprotocol/squid-js). Save that file, and in your terminal install the dependencies we have just defined in `package.json`:

```bash
npm install
```

Then create the HTML file used to render the React app into. For that, create a folder `public/` and in it a file `index.html` with the following content:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/master/public/index.html html GITHUB-EMBED

## Add Basic Markup

Create a new folder `src/` and within that a `index.js` file with the following content as our base, where we already import squid-js and web3.js:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/master/src/index.js js 1-4,6,14,91-101,113-118 GITHUB-EMBED

At this point you can start up the app and see the result in your browser:

```bash
npm start
```

Go to [localhost:3000](http://localhost:3000) to inspect your newly created app:

[screenshot app]

## Web3

We already are importing web3.js but we still need to enable account access for the browsers supporting it, and make sure nothing breaks in browsers which are not Web3-capable.

To do that we add a simple check at top of `src/index.js` and then enable account access with:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/master/src/index.js js 7-12 GITHUB-EMBED

And let's also output some warning for non-Web3 browsers within our `render()` function:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/master/src/index.js js 103 GITHUB-EMBED

This should give you the following markup:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/master/src/index.js js 1-4,6-13,14,91-104,113-118 GITHUB-EMBED

After those steps you should see this, and MetaMask should have asked you to allow access to your account:

[screenshot app]

[screenshot MetaMask]

> Note: If you see an error like `inpage.js:1 MetaMask - RPC Error: Internal JSON-RPC error.` in your browser console, don't worry about it. It's a MetaMask thing and won't affect functionality.

## Create Ocean Instance

Now that we are successfully connected with Web3, we can set up our Ocean instance.

At the beginning of your component, create a new Ocean instance with all required endpoint configurations within the `componentDidMount` lifecycle method. All Ocean Protocol operations can be executed from this Ocean instance.

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/master/src/index.js js 15-16,18-32 GITHUB-EMBED

This will initiate a connection to all Ocean components in Nile, load the contracts, and finally store the Ocean object in the local component state for reuse. We also set the `verbose` option of squid-js so we better see what's going on.

## Final Result

That's it, if you have no errors in your `console.log` then you have successfully initialized an Ocean instance in your brand new React app and you are ready for the [next part of this tutorial](/tutorials/react-publish-data-set/).

[screenshot app]

Here is the full source of `src/index.js` that you should have if you followed this tutorial:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/master/src/index.js js 1-4,6-16,18-33,91-104,113-118 GITHUB-EMBED

Move on to [Publish a Data Set](/tutorials/react-publish-data-set/).

## Bonus: Connect against local Spree network

`Spree`, a local Ocean test network, can be used locally:

- Git clone the [oceanprotocol/barge](https://github.com/oceanprotocol/barge) repository and use the startup script in Barge to run a [local Spree Testnet](https://docs.oceanprotocol.com/concepts/testnets/#a-spree-testnet-for-local-development):

  ```bash
  git clone https://github.com/oceanprotocol/barge.git
  cd barge/

  ./start_ocean.sh --no-pleuston
  ```

- Note that compiling and deploying the contracts in your local Docker network takes some time so it can take a few minutes until the network is ready to be interacted with. That usually is the case once `keeper-contracts_1` container doesn't show any messages anymore.

- You will also need some [some `Spree` Ether](/tutorials/get-ether-and-ocean-tokens/#get-ether-for-a-local-spree-testnet) in your MetaMask account. You can execute this, replacing `<YOUR ADDRESS>` with your MetaMask account address:

  ```bash
  curl --data '{"jsonrpc":"2.0","method":"personal_sendTransaction","params":[{"from":"0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e","to":"<YOUR ADDRESS>","value":"0x7FFFFFFFFFFFFFFFFFF"}, "node0"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8545
  ```

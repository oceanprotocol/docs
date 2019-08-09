---
title: Get & Use a Data Set
description: Tutorial to get and use a data set in a basic React app.
---

## Requirements

This is a continuation of the React App Tutorial. Make sure you already did the previous steps:

1. [React App Setup](/tutorials/react-setup/)
2. [Publish a Data Set](/tutorials/react-publish-data-set/)

Open `src/App.js` from your `marketplace/` folder.

## Retrieve Assets

In the previous tutorial we added asset publishing. We can now search for published assets for consumption. Just after the `submitAsset()` function we can add a new function that will handle search:

```js:title=src/App.js
// ...
async retrieveAssets() {
  this.search = await this.ocean.assets.search('10 Monkey Species Small')
  console.log(this.search)
  alert(
    'Asset successfully retrieved. Look into your console to see the search response.'
  )
}
// ...
```

Now we need a button to start our search inside the render function just after the _Register asset_ button:

```jsx:title=src/App.js
// ...
<button onClick={() => this.retrieveAssets()}>Retrieve assets</button>
// ...
```

## Consume Assets

Consuming means downloading one or multiple files attached to an asset. During that process the initial `url` value we added during the publish process for each file will be decrpyted and the file can be downloaded.

With the following code we start the consume process with the first search result, then go on to download its first attached file. Put it after the `retrieveAssets()` function:

```js:title=src/App.js
// ...
async consumeAsset() {
  // get all accounts
  const accounts = await this.ocean.accounts.list()
  // get first asset
  const consumeAsset = this.search.results[0]
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
    '',
    0
  )
  }
// ...
```

We still need a button to start consumption. In the render function, just after the _Retrieve assets_ button, add:

```jsx:title=src/App.js
// ...
<button onClick={() => this.consumeAsset()}>Consume asset</button>
// ...
```

With all these buttons in place, you should see this:

![React App 05](images/react-app-05.png)

> Tip: Before clicking the `Retrieve assets` button, it might help to reload the page.

Go ahead and click the _Retrieve assets_ button, and then the _Consume asset_ button. Approve all the MetaMask dialog boxes.

Have a look into `console.log` to see the various steps of the search and consume process. If you have no errors in your `console.log` and can see your asset files listed, you have a working marketplace.

> Consuming an asset will throw an error `Requested did is not found in the keeper network`. We are currently [investigating why that is happening](https://github.com/oceanprotocol/barge/issues/144) in either squid-js or Brizo and will remove this note once we verified a fix is in place in one of those components.

## Final Result

Here is the full source of `src/index.js` that you should have if you followed this tutorial:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/master/src/index.js js GITHUB-EMBED

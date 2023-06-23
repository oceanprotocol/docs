# Update Metadata

This tutorial will guide you to update an existing asset published on-chain using Ocean libraries. The tutorial assumes that you already have the `did` of the asset which needs to be updated. In this tutorial, we will update the name, description, tags of the data NFT. Please refer [the page on DDO](../../core-concepts/did-ddo.md) to know more about additional the fields which can be updated.

#### Prerequisites

* [Obtain an API key](broken-reference)
* [Set up the .env file](broken-reference)
* [Install the dependencies](broken-reference)
* [Create a configuration file](configuration.md)

{% hint style="info" %}
The variable **AQUARIUS\_URL** and **PROVIDER\_URL** should be set correctly in `.env` file
{% endhint %}

#### Create a script to update the metadata

Create a new file in the same working directory where configuration file (`config.js`) and `.env` files are present, and copy the code as listed below.

{% tabs %}
{% tab title="ocean.js" %}
{% code title="updateMetadata.js" overflow="wrap" %}
```javascript
// Note: Make sure .env file and config.js are created and setup correctly
const { oceanConfig } = require('./config.js');
const { ZERO_ADDRESS, NftFactory, getHash, Nft } = require ('@oceanprotocol/lib');

// replace the did here
const did = "did:op:a419f07306d71f3357f8df74807d5d12bddd6bcd738eb0b461470c64859d6f0f";

// This function takes did as a parameter and updates the data NFT information
const setMetadata = async (did) => {
  
  const publisherAccount = await oceanConfig.publisherAccount.getAddress();
  
  // Fetch ddo from Aquarius
  const ddo = await await oceanConfig.aquarius.resolve(did);

  const nft = new Nft(config.publisherAccount);

  // update the ddo here
  ddo.metadata.name = "Sample dataset v2";
  ddo.metadata.description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam";
  ddo.metadata.tags = ["new tag1", "new tag2"];

  const providerResponse = await oceanConfig.ethersProvider.encrypt(ddo, process.env.OCEAN_NETWORK_URL);
  const encryptedResponse = await providerResponse;
  const metadataHash = getHash(JSON.stringify(ddo));

  // Update the data NFT metadata
  await nft.setMetadata(
    ddo.nftAddress,
    publisherAccount,
    0,
    process.env.OCEAN_NETWORK_URL,
    '',
    '0x2',
    encryptedResponse,
    `0x${metadataHash}`
  );

  // Check if ddo is correctly udpated in Aquarius 
  await oceanConfig.aquarius.waitForAqua(ddo.id);

  console.log(`Resolved asset did [${ddo.id}]from aquarius.`);
  console.log(`Updated name: [${ddo.metadata.name}].`);
  console.log(`Updated description: [${ddo.metadata.description}].`);
  console.log(`Updated tags: [${ddo.metadata.tags}].`);

};

// Call setMetadata(...) function defined above
setMetadata(did).then(() => {
  process.exit();
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
```
{% endcode %}

Execute the script

```bash
node updateMetadata.js
```
{% endtab %}
{% endtabs %}

We provided several code examples using the Ocean.js library for interacting with the Ocean Protocol. Some highlights from our [code examples](https://github.com/oceanprotocol/ocean.js/blob/main/CodeExamples.md) ([compute examples](https://github.com/oceanprotocol/ocean.js/blob/main/ComputeExamples.md)) are:

1. **Minting an NFT** - This example demonstrates how to mint an NFT (Non-Fungible Token) using the Ocean.js library. It shows the necessary steps, including creating a NFTFactory instance, defining NFT parameters, and calling the `create()` method to mint the NFT.
2. **Publishing a dataset** - This example explains how to publish a dataset on the Ocean Protocol network. It covers steps such as creating a DDO, signing the DDO, and publish the dataset.
3. **Consuming a dataset** - This example demonstrates how to consume a published dataset. It shows how to search for available assets, retrieve the DDO for a specific asset, order the asset using a specific datatoken, and then download the asset.

You can explore more detailed code examples and explanations on Ocean.js [readme](https://github.com/oceanprotocol/ocean.js#readme).

# Update metadata

This tutorial will guide you to update an existing asset published on-chain using Ocean libraries. The tutorial assumes that you already have the `did` of the asset which needs to be updated. In this tutorial, we will update the name, description, tags of the data NFT. Please refer [the page on DDO](../../core-concepts/did-ddo.md) to know more about additional the fields which can be updated.

#### Prerequisites

See [this](configuration.md) guide on defining a `.env` file and a configuration file

{% hint style="info" %}
The variable **AQUARIUS\_URL** and **PROVIDER\_URL** should be set correctly in `.env` file
{% endhint %}

#### Create a script to update the metadata

Create a new file in the same working directory where configuration file (`config.py`/`config.js`) and `.env` files are present, and copy the code as listed below. &#x20;

{% tabs %}
{% tab title="ocean.js" %}
{% code title="updateMetadata.js" %}
```javascript
// Import dependencies
const {
  Nft,
  ProviderInstance,
  getHash,
  Aquarius
} = require('@oceanprotocol/lib');
const { SHA256 } = require('crypto-js');
const Web3 = require('web3');
const { web3Provider, oceanConfig } = require('./config');

// Create a web3 instance
const web3 = new Web3(web3Provider);

// Create Aquarius instance
const aquarius = new Aquarius(oceanConfig.metadataCacheUri);
const nft = new Nft(web3);
const providerUrl = oceanConfig.providerUri;

// replace the did here
const did = "did:op:a419f07306d71f3357f8df74807d5d12bddd6bcd738eb0b461470c64859d6f0f";

// This function takes did as a parameter and updates the data NFT information
const setMetadata = async (did) => {
  const accounts = await web3.eth.getAccounts();
  const publisherAccount = accounts[0];
  
  // Fetch ddo from Aquarius
  const ddo = await aquarius.resolve(did);

  // update the ddo here
  ddo.metadata.name = "Sample dataset v2";
  ddo.metadata.description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam";
  ddo.metadata.tags = ["new tag1", "new tag2"];

  providerResponse = await ProviderInstance.encrypt(ddo, providerUrl);
  const encryptedResponse = await providerResponse;
  const metadataHash = getHash(JSON.stringify(ddo));

  // Update the data NFT metadata
  await nft.setMetadata(
    ddo.nftAddress,
    publisherAccount,
    0,
    providerUrl,
    '',
    '0x2',
    encryptedResponse,
    `0x${metadataHash}`
  );

  // Check if ddo is correctly udpated in Aquarius 
  await aquarius.waitForAqua(ddo.id);

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

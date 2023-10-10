# Asset Visibility

In the Ocean Protocol ecosystem, each asset is associated with a state that is maintained by the NFT (Non-Fungible Token) contract. The [state of an asset](../ddo-specification.md#state) determines its visibility and availability for different actions on platforms like Ocean Market, as well as its appearance in user profiles. To explore the various asset's state in detail, please check out the [DDO Specification](../ddo-specification.md#state) page. It provides comprehensive information about the different states that assets can be in.

By assigning specific states to assets, Ocean Protocol enables a structured approach to asset management and visibility. These states help regulate asset discoverability, ordering permissions, and the representation of assets in user profiles, ensuring a controlled and reliable asset ecosystem.

It is possible to remove assets from Ocean Protocol by modifying the state of the asset. Each asset has a state, which is stored in the NFT contract. Additional details regarding asset states can be found at this [link](../ddo-specification.md#state). There is also an assets purgatory that contains information about the purgatory status of an asset, as defined in the list-purgatory. For more information about the purgatory, please refer to the [DID and DDO Identifier docs](/developers/identifiers.md).

We can utilize a portion of the previous tutorial on updating metadata and incorporate the steps to update the asset's state in the asset DDO.

#### Prerequisites

* [Obtain an API key](../get-api-keys-for-blockchain-access.md)
* [Set up the .env file](configuration.md#create-a-env-file)
* [Install the dependencies](configuration.md#setup-dependencies)
* [Create a configuration file](configuration.md#create-a-configuration-file)

{% hint style="info" %}
The variables **AQUARIUS\_URL** and **PROVIDER\_URL** should be set correctly in `.env` file
{% endhint %}

#### Create a script to update the state of an asset by updating the asset's metatada

Create a new file in the same working directory where the configuration file (`config.js`) and `.env` files are present, and copy the code as listed below.

{% code overflow="wrap" %}
```javascript
// Note: Make sure .env file and config.js are created and setup correctly
const { oceanConfig } = require('./config.js');
const { ZERO_ADDRESS, NftFactory, getHash, Nft } = require ('@oceanprotocol/lib');

// replace the did here
const did = "did:op:a419f07306d71f3357f8df74807d5d12bddd6bcd738eb0b461470c64859d6f0f";

// This function takes did as a parameter and updates the data NFT information
const updateAssetState = async (did) => {
  
  const publisherAccount = await oceanConfig.publisherAccount.getAddress();
  
   // Fetch ddo from Aquarius
  const asset = await await oceanConfig.aquarius.resolve(did);

  const nft = new Nft(oceanConfig.ethersProvider);
  
  // Update the metadata state and bring it to end-of-life state ("1")
  await nft.setMetadataState(
    asset?.nft?.address,
    publisherAccount,
    1
  )
  
  // Check if ddo is correctly udpated in Aquarius 
  await oceanConfig.aquarius.waitForAqua(ddo.id);
  
   // Fetch updated asset from Aquarius
  const updatedAsset = await await oceanConfig.aquarius.resolve(did);

  console.log(`Resolved asset did [${updatedAsset.id}]from aquarius.`);
  console.log(`Updated asset state: [${updatedAsset.nft.state}].`);

};

// Call setMetadata(...) function defined above
updateAssetState(did).then(() => {
  process.exit();
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
```
{% endcode %}

# Asset Visibility

In the Ocean Protocol ecosystem, each asset is associated with a state that is maintained by the NFT (Non-Fungible Token) contract. The [state of an asset](../ddo-specification.md#state) determines its visibility and availability for different actions on platforms like Ocean Market, as well as its appearance in user profiles. The following table outlines the possible states and their characteristics:

<table><thead><tr><th width="93">State</th><th width="236">Description</th><th width="140">Discoverable in Ocean Market</th><th width="160">Ordering Allowed</th><th>Listed Under Profile</th></tr></thead><tbody><tr><td><code>0</code></td><td>Active</td><td>Yes</td><td>Yes</td><td>Yes</td></tr><tr><td><code>1</code></td><td>End-of-life</td><td>No</td><td>No</td><td>No</td></tr><tr><td><code>2</code></td><td>Deprecated (by another asset)</td><td>No</td><td>No</td><td>No</td></tr><tr><td><code>3</code></td><td>Revoked by publisher</td><td>No</td><td>No</td><td>No</td></tr><tr><td><code>4</code></td><td>Ordering is temporarily disabled</td><td>Yes</td><td>No</td><td>Yes</td></tr><tr><td><code>5</code></td><td>Asset unlisted</td><td>No</td><td>Yes</td><td>Yes</td></tr></tbody></table>

Now let's explain each state in more detail:

1. **Active**: Assets in the "Active" state are fully functional and available for discovery in Ocean Market, and other components. Users can search for, view, and interact with these assets. Ordering is allowed, which means users can place orders to purchase or access the asset's services.
2. **End-of-life**: Assets in the "End-of-life" state are no longer discoverable. They are typically deprecated or outdated and are no longer actively promoted or maintained. Users cannot place orders or interact with these assets, and they are not listed under the owner's profile.
3. **Deprecated (by another asset)**: This state indicates that another asset has deprecated the current asset. Deprecated assets are not discoverable, and ordering is not allowed. Similar to the "End-of-life" state, deprecated assets are not listed under the owner's profile.
4. **Revoked by publisher**: When an asset is revoked by its publisher, it means that the publisher has explicitly revoked access or ownership rights to the asset. Revoked assets are not discoverable, and ordering is not allowed.
5. **Ordering is temporarily disabled**: Assets in this state are still discoverable, but ordering functionality is temporarily disabled. Users can view the asset and gather information, but they cannot place orders at that moment. However, these assets are still listed under the owner's profile.
6. **Asset unlisted**: Assets in the "Asset unlisted" state are not discoverable. However, users can still place orders for these assets, making them accessible. Unlisted assets are listed under the owner's profile, allowing users to view and access them.

By assigning specific states to assets, Ocean Protocol enables a structured approach to asset management and visibility. These states help regulate asset discoverability, ordering permissions, and the representation of assets in user profiles, ensuring a controlled and reliable asset ecosystem.

It is possible to remove assets from Ocean Protocol by modifying the state of the asset. Each asset has a state, which is stored in the NFT contract. Additional details regarding asset states can be found at this [link](../ddo-specification.md#state). There is also an assets purgatory that contains information about the purgatory status of an asset, as defined in the list-purgatory. For more information about the purgatory, please refer to: [https://docs.oceanprotocol.com/core-concepts/did-ddo#purgatory](https://docs.oceanprotocol.com/core-concepts/did-ddo#purgatory).

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

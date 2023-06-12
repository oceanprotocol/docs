# Consume Asset

Consuming an asset involves a two-step process: placing an order and then utilizing the order transaction to download and access the asset's files. Let's delve into each step in more detail.

To initiate the ordering process, there are two scenarios depending on the pricing schema of the asset. Firstly, if the asset has a fixed rate pricing schema configured, you would need to acquire the corresponding datatoken by purchasing it. Once you have obtained the datatoken, you send it to the publisher to place the order for the asset.

The second scenario applies when the asset follows a free pricing schema. In this case, you can obtain a free datatoken from the dispenser service provided by Ocean Protocol. Using the acquired free datatoken, you can place the order for the desired asset.

However, it's crucial to note that even when utilizing free assets, network gas fees still apply. These fees cover the costs associated with executing transactions on the blockchain network.

Additionally, the specific type of datatoken associated with an asset influences the ordering process. There are two common datatoken templates: Template 1 (regular template) and Template 2 (enterprise template). The type of template determines the sequence of method calls required before placing an order.

For assets utilizing Template '1', prior to ordering, you need to perform two separate method calls. First, you need to call the `approve` method to grant permission for the fixedRateExchange contract to spend the required amount of datatokens. Then, you proceed to call the `buyDatatokens` method from the fixedRateExchange contract. This process ensures that you have the necessary datatokens in your possession to successfully place the order. Alternatively, if the asset follows a free pricing schema, you can employ the `dispenser.dispense` method to obtain the free datatoken before proceeding with the order.

On the other hand, assets utilizing Template '2' offer bundled methods for a more streamlined approach. For ordering such assets, you can use methods like `buyFromFreeAndOrder` or `buyFromDispenserAndOrder`. These bundled methods handle the acquisition of the necessary datatokens and the subsequent ordering process in a single step, simplifying the workflow for enterprise-template assets.

Later on, when working with the ocean.js library, you can use this order transaction identifier to call the `getDownloadUrl` method from the provider service class. This method allows you to retrieve the download URL for accessing the asset's files.

#### Prerequisites

* [Obtain an API key](broken-reference)
* [Set up the .env file](broken-reference)
* [Install the dependencies](broken-reference)
* [Create a configuration file](configuration.md)

{% hint style="info" %}
The variable **AQUARIUS\_URL** and **PROVIDER\_URL** should be set correctly in `.env` file
{% endhint %}

#### Create a script to consume an asset

Create a new file in the same working directory where configuration file (`config.js`) and `.env` files are present, and copy the code as listed below.

<pre class="language-javascript"><code class="lang-javascript">// Note: Make sure .env file and config.js are created and setup correctly
const { oceanConfig } = require('./config.js');
const { ZERO_ADDRESS, NftFactory, getHash, Nft } = require ('@oceanprotocol/lib');

// replace the did here
const did = "did:op:a419f07306d71f3357f8df74807d5d12bddd6bcd738eb0b461470c64859d6f0f";

// This function takes did as a parameter and updates the data NFT information
const consumeAsset = async (did) => {
  
  const consumer = await oceanConfig.consumerAccount.getAddress();
  
   // Fetch ddo from Aquarius
  const asset = await await oceanConfig.aquarius.resolve(did);

  const nft = new Nft(oceanConfig.consumerAccount);
  
  await approve(
    consumerAccount,
    config,
    await consumerAccount.getAddress(),
    addresses.Ocean,
    freAddress,
    '1'
  )
    
 const fixedRate = new FixedRateExchange(fixedRateExchangeAddress, consumerAccount)
 const tx = await fixedRate.buyDatatokens(fixedRateId, '1', '2')
 
<strong> const initializeData = await ProviderInstance.initialize(
</strong>    resolvedDDO.id,
    resolvedDDO.services[0].id,
    0,
    await consumerAccount.getAddress(),
    providerUrl
  )

  const providerFees: ProviderFees = {
    providerFeeAddress: initializeData.providerFee.providerFeeAddress,
    providerFeeToken: initializeData.providerFee.providerFeeToken,
    providerFeeAmount: initializeData.providerFee.providerFeeAmount,
    v: initializeData.providerFee.v,
    r: initializeData.providerFee.r,
    s: initializeData.providerFee.s,
    providerData: initializeData.providerFee.providerData,
    validUntil: initializeData.providerFee.validUntil
  }

 datatoken = new Datatoken(consumerAccount)
    
 const tx = await datatoken.startOrder(
    freDatatokenAddress,
    await consumerAccount.getAddress(),
    0,
    providerFees
 )
    
 const orderTx = await tx.wait()
 const orderStartedTx = getEventFromTx(orderTx, 'OrderStarted')

 const downloadURL = await ProviderInstance.getDownloadUrl(
   fixedDDO.id,
   fixedDDO.services[0].id,
   0,
   orderStartedTx.transactionHash,
   providerUrl,
   consumerAccount
<strong> )
</strong>  console.log(`Resolved asset did [${updatedAsset.id}]from aquarius.`);
  console.log(`Updated asset state: [${updatedAsset.nft.state}].`);

};

// Call setMetadata(...) function defined above
consumeAsset(did).then(() => {
  process.exit();
}).catch((err) => {
  console.error(err);
  process.exit(1);
});

</code></pre>

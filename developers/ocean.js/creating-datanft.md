# Creating a data NFT

This tutorial guides you through the process of creating your own data NFT using Ocean libraries. To know more about data NFT please refer [this page](../contracts/data-nfts.md).

#### Prerequisites

* [Obtain an API key](../get-api-keys-for-blockchain-access.md)
* [Set up the .env file](configuration.md#create-a-env-file)
* [Install the dependencies](configuration.md#setup-dependencies)
* [Create a configuration file](configuration.md#create-a-configuration-file)

#### Create a script to deploy dataNFT

The provided script demonstrates how to create a data NFT using Oceanjs.

First, create a new file in the working directory, alongside the `config.js` and `.env` files. Name it `create_dataNFT.js` (or any appropriate name). Then, copy the following code into the new created file:

{% tabs %}
{% tab title="create_dataNFT.js" %}
{% code title="create_dataNFT.js" overflow="wrap" %}
```javascript
// Note: Make sure .env file and config.js are created and setup correctly
const { oceanConfig } = require('./config.js');
const { ZERO_ADDRESS, NftFactory } = require ('@oceanprotocol/lib');

// Deinfe a function which will create a dataNFT using Ocean.js library
const createDataNFT = async () => {
  let config = await oceanConfig();
  // Create a NFTFactory
  const factory = new NftFactory(config.nftFactoryAddress, config.publisherAccount);

  const publisherAddress = await config.publisherAccount.getAddress();

  // Define dataNFT parameters
  const nftParams = {
    name: '72120Bundle',
    symbol: '72Bundle',
    // Optional parameters
    templateIndex: 1,
    tokenURI: 'https://example.com',
    transferable: true,
    owner: publisherAddress
  };

  const bundleNFT = await factory.createNFT(nftParams);

  const trxReceipt = await bundleNFT.wait()

  return {
    trxReceipt
  };
};

// Call the create createDataNFT() function
createDataNFT()
  .then(({ nftAddress }) => {
    console.log(`DataNft address ${nftAddress}`);
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
```
{% endcode %}

Run script:

```bash
node create_dataNFT.js
```
{% endtab %}
{% endtabs %}

* Checkout the [code examples](https://github.com/oceanprotocol/ocean.js/blob/main/CodeExamples.md#L0-L1) or [compute to data examples](https://github.com/oceanprotocol/ocean.js/blob/main/ComputeExamples.md#L417) to see how you can use ocean.js.
* If you have any difficulties or if you have further questions about how to use ocean.js please reach out to us on [Discord](https://discord.gg/TnXjkR5).
* If you notice any bugs or issues with ocean.js please [open an issue on github](https://github.com/oceanprotocol/ocean.js/issues/new?assignees=\&labels=bug\&template=bug\_report.md\&title=).
* Visit the [Ocean Protocol website](https://oceanprotocol.com/) for general information about Ocean Protocol.

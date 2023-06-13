# Publish

This tutorial guides you through the process of creating your own data NFT and a datatoken using Ocean libraries. To know more about data NFTs and datatokens please refer [this page](../contracts/datanft-and-datatoken.md). Ocean Protocol supports different pricing schemes which can be set while publishing an asset. Please refer [this page](../contracts/pricing-schemas.md) for more details on pricing schemes.

#### Prerequisites

* [Obtain an API key](broken-reference)
* [Set up the .env file](broken-reference)
* [Install the dependencies](broken-reference)
* [Create a configuration file](configuration.md)

#### Create a script to deploy a data NFT and datatoken with the price schema you chose.

Create a new file in the same working directory where configuration file (`config.js`) and `.env` files are present, and copy the code as listed below.

{% hint style="info" %}
**Fees**: The code snippets below define fees related parameters. Please refer [fees page ](../../core-concepts/fees.md)for more details
{% endhint %}

The code utilizes methods such as `NftFactory` and `Datatoken` from the Ocean libraries to enable you to interact with the Ocean Protocol and perform various operations related to data NFTs and datatokens.&#x20;

The `createFRE()` performs the following:

1. Creates a web3 instance and import Ocean configs.
2. Retrieves the accounts from the web3 instance and sets the publisher.
3. Defines parameters for the data NFT, including name, symbol, template index, token URI, transferability, and owner.
4. Defines parameters for the datatoken, including name, symbol, template index, cap, fee amount, payment collector address, fee token address, minter, and multi-party fee address.
5. Defines parameters for the price schema, including the fixed rate address, base token address, owner, market fee collector, base token decimals, datatoken decimals, fixed rate, market fee, and optional parameters.
6. Uses the NftFactory to create a data NFT and datatoken with the fixed rate exchange, using the specified parameters.
7. Retrieves the addresses of the data NFT and datatoken from the result.
8. Returns the data NFT and datatoken addresses.

{% tabs %}
{% tab title="create_datatoken_with_fre.js" %}
{% code title="create_datatoken_with_fre.js" %}
```javascript
// Note: Make sure .env file and config.js are created and setup correctly
const { oceanConfig } = require('./config.js');
const { ZERO_ADDRESS, NftFactory } = require ('@oceanprotocol/lib');

// Define a function createFRE()
const createFRE = async () => {

  const FRE_NFT_NAME = 'Datatoken 2'
  const FRE_NFT_SYMBOL = 'DT2'

  let config = await oceanConfig();

  // Create a NFTFactory
  const factory = new NftFactory(config.nftFactoryAddress, config.publisherAccount);

  const nftParams = {
    name: FRE_NFT_NAME,
    symbol: FRE_NFT_SYMBOL,
    templateIndex: 1,
    tokenURI: '',
    transferable: true,
    owner: await config.publisherAccount.getAddress()
  }

  const datatokenParams = {
    templateIndex: 1,
    cap: '100000',
    feeAmount: '0',
    paymentCollector: ZERO_ADDRESS,
    feeToken: ZERO_ADDRESS,
    minter: await config.publisherAccount.getAddress(),
    mpFeeAddress: ZERO_ADDRESS
  }

  const freParams = {
    fixedRateAddress: config.fixedRateExchangeAddress,
    baseTokenAddress: config.oceanTokenAddress,
    owner: await config.publisherAccount.getAddress(),
    marketFeeCollector: await config.publisherAccount.getAddress(),
    baseTokenDecimals: 18,
    datatokenDecimals: 18,
    fixedRate: '1',
    marketFee: '0.001',
    allowedConsumer: ZERO_ADDRESS,
    withMint: true
  }

  const bundleNFT = await factory.createNftWithDatatokenWithFixedRate(
    nftParams,
    datatokenParams,
    freParams
  )
  
  const trxReceipt = await bundleNFT.wait()
  
  return {
    trxReceipt
  };
};

// Call the createFRE() function 
createFRE()
  .then(({ trxReceipt }) => {
    console.log(`TX Receipt ${trxReceipt}`);
    process.exit(1);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
```
{% endcode %}

Execute script

```
node create_datatoken_with_fre.js
```
{% endtab %}

{% tab title="create_datatoken_with_free.js" %}
{% code title="create_datatoken_with_free.js" %}
```javascript
// Note: Make sure .env file and config.js are created and setup correctly
const { oceanConfig } = require('./config.js');
const { ZERO_ADDRESS, NftFactory } = require ('@oceanprotocol/lib');

// Define a function createFRE()
const createFRE = async () => {

  const DISP_NFT_NAME = 'Datatoken 3'
  const DISP_NFT_SYMBOL = 'DT3'

  let config = await oceanConfig();

  // Create a NFTFactory
  const factory = new NftFactory(config.nftFactoryAddress, config.publisherAccount);

    const nftParams = {
      name: DISP_NFT_NAME,
      symbol: DISP_NFT_SYMBOL,
      templateIndex: 1,
      tokenURI: '',
      transferable: true,
      owner: await config.publisherAccount.getAddress()
    }

    const datatokenParams = {
      templateIndex: 1,
      cap: '100000',
      feeAmount: '0',
      paymentCollector: ZERO_ADDRESS,
      feeToken: ZERO_ADDRESS,
      minter: await config.publisherAccount.getAddress(),
      mpFeeAddress: ZERO_ADDRESS
    }

    const dispenserParams = {
      dispenserAddress: config.dispenserAddress,
      maxTokens: '1',
      maxBalance: '1',
      withMint: true,
      allowedSwapper: ZERO_ADDRESS
    }

    const bundleNFT = await factory.createNftWithDatatokenWithDispenser(
      nftParams,
      datatokenParams,
      dispenserParams
    )
    
    const trxReceipt = await bundleNFT.wait()
    
    return {
      trxReceipt
    };
};

// Call the createFRE() function 
createDispenser()
  .then(({ trxReceipt }) => {
    console.log(`TX Receipt ${trxReceipt}`);
    process.exit(1);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
```
{% endcode %}
{% endtab %}
{% endtabs %}

By utilizing these dependencies and configuration settings, the script can leverage the functionalities provided by the Ocean libraries and interact with the Ocean Protocol ecosystem effectively.

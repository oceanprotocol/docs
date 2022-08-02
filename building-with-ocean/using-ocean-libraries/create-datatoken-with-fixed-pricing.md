# Create datatoken with fixed pricing

This tutorial will guide you for creating your own data NFT and a datatoken using Ocean libraries. To know more about data NFT and datatoken please refer [this page](../../core-concepts/datanft-and-datatoken.md). Ocean Protocol supports different pricing schemes which can be set while publishing an asset. Please refer [this page](../../core-concepts/asset-pricing.md) for more details on pricing schemes.

#### Configuration

See [this](configuration.md) guide on defining a `.env` file and a configuration file.

#### Create a script to deploy data NFT and datatoken with fixed pricing.

Create a new file in the same working directory where configuration file (`config.py`/`config.js`) and `.env` files are present, and copy the code as listed below. &#x20;

{% hint style="info" %}
**Fees**: The code snippets below define fees related parameters. Please refer [fees page ](../../core-concepts/fees.md)for more details
{% endhint %}

{% tabs %}
{% tab title="ocean.js" %}
{% code title="create_datatoken_with_fre.js" %}
```javascript
// Import dependencies
const { NftFactory, Datatoken } = require('@oceanprotocol/lib');
const Web3 = require('web3');
const { web3Provider, oceanConfig } = require('./config');

// Create a web3 instance
const web3 = new Web3(web3Provider);

// Define a function createFRE()
const createFRE = async () => {
  const Factory = new NftFactory(oceanConfig.erc721FactoryAddress, web3);

  // Get accounts from web3 instance
  const accounts = await web3.eth.getAccounts();
  const publisherAccount = accounts[0];

  // data NFT parameters: name, symbol, templateIndex, etc.
  const nftParams = {
    name: '72120Bundle',
    symbol: '72Bundle',
    templateIndex: 1,
    tokenURI: 'https://example.com',
    transferable: true,
    owner: publisherAccount
  };
  
  // datatoken parameters: name, symbol, templateIndex, etc.
  const erc20Params = {
    name: "Sample datatoken",
    symbol: "SDT",
    templateIndex: 1,
    cap: '100000',
    feeAmount: '0',
    // paymentCollector is the address
    paymentCollector: '0x0000000000000000000000000000000000000000',
    feeToken: '0x0000000000000000000000000000000000000000',
    minter: publisherAccount,
    mpFeeAddress: '0x0000000000000000000000000000000000000000'
  };

  const fixedPriceParams = {
    fixedRateAddress: oceanConfig.fixedRateExchangeAddress,
    baseTokenAddress: oceanConfig.oceanTokenAddress,
    owner: publisherAccount,
    marketFeeCollector: publisherAccount,
    baseTokenDecimals: 18,
    datatokenDecimals: 18,
    fixedRate: '100',
    marketFee: '0',
    // Optional parameters
    // allowedConsumer: publisherAccount,  //  only account that consume the exhchange
    withMint: false // add FixedPriced contract as minter if withMint == true
  }

  // Create data NFT and a datatoken with Fixed Rate exchange
  const result = await Factory.createNftErc20WithFixedRate(
    publisherAccount,
    nftParams,
    erc20Params,
    fixedPriceParams
  );

  // Get the data NFT address and datatoken address from the result
  const erc721Address = result.events.NFTCreated.returnValues[0];
  const datatokenAddress = result.events.TokenCreated.returnValues[0];

  return {
    erc721Address,
    datatokenAddress
  };
};

// Call the createFRE() function 
createFRE()
  .then(({ erc721Address, datatokenAddress }) => {
    console.log(`DataNft address ${erc721Address}`);
    console.log(`Datatoken address ${datatokenAddress}`);
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

{% tab title="ocean.py" %}
{% code title="create_datatoken_with_fre.py" %}
```python
# Note: Ensure that .env and config.py are correctly setup
from config import web3_wallet, ocean

data_nft = ocean.create_data_nft(
    name="NFTToken1",
    symbol="NFT1",
    from_wallet=web3_wallet,
    # Optional parameters
    token_uri="https://example.com",
    template_index=1,
    transferable=True,
    owner=web3_wallet.address,
)
print(f"Created dataNFT. Its address is {data_nft.address}")

# replace the addresses here
fee_manager = "0x0000000000000000000000000000000000000000"
publish_market_order_fee_address = "0x0000000000000000000000000000000000000000"
publish_market_order_fee_token = "0x0000000000000000000000000000000000000000"
minter = web3_wallet.address

# replace the fee amount
publish_market_order_fee_amount = 0

datatoken = data_nft.create_datatoken(
    name="Datatoken 1",
    symbol="DT1",
    datatoken_cap="100000",
    from_wallet=web3_wallet,
    # Ootional parameters below
    template_index=1,
    fee_manager=fee_manager,
    publish_market_order_fee_token=publish_market_order_fee_token,
    publish_market_order_fee_amount=publish_market_order_fee_amount,
    minter=minter,
    publish_market_order_fee_address=publish_market_order_fee_address,
)
print(f"Created datatoken. Its address is {datatoken.address}")


exchange_id = ocean.create_fixed_rate(
    datatoken=datatoken,
    base_token=ocean.OCEAN_token,
    amount=ocean.to_wei(100),
    from_wallet=web3_wallet,
)

print(f"Created fixed rate exchange with ID {exchange_id.hex()}")

```
{% endcode %}

#### Execute script

```
python create_datatoken_with_fre.py
```
{% endtab %}
{% endtabs %}


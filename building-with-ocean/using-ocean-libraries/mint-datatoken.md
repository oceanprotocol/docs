# Mint datatoken

This tutorial will guide you to mint datatoken and send it to a receiver address. The tutorial assumes that you already have the address of the datatoken contract which is owned by you.&#x20;

#### Prerequisites

- [Obtain an API key](configuration.md#obtaining-api-key-for-ethereum-node-provider)
- [Set up the .env file](configuration.md#create-a-.env-file)
- [Install the dependencies](configuration.md#setup-dependencies)
- [Create a configuration file](configuration.md#create-a-configuration-file)

#### Create a script to mint datatokens

Create a new file in the same working directory where configuration file (`config.py`/`config.js`) and `.env` files are present, and copy the code as listed below. &#x20;

{% tabs %}
{% tab title="ocean.js" %}
{% code title="mint_datatoken.js" %}
```javascript
// Import dependencies
const { NftFactory, Datatoken } = require('@oceanprotocol/lib');
const Web3 = require('web3');
const { web3Provider, oceanConfig } = require('./config');

// Create a web3 instance
const web3 = new Web3(web3Provider);

// Change this
const datatokenAddress = "0xD3542e5F56655fb818F9118CE219e1D10751BC82"
const receiverAddress = "0xBE5449a6A97aD46c8558A3356267Ee5D2731ab5e"

// Create a function which will take `datatokenAddress` and `receiverAddress` as parameters 
const mintDatatoken = async (datatokenAddress, receiverAddress) => {
  const accounts = await web3.eth.getAccounts();
  const publisherAccount = accounts[0];

  // Create datatoken instance
  const datatoken = new Datatoken(web3);

  // Get current datatoken balance of receiver
  let receiverBalance = await datatoken.balance(
    datatokenAddress,
    receiverAddress
  );
  console.log(`Receiver balance before mint: ${receiverBalance}`);

  // Mint datatoken
  await datatoken.mint(
    datatokenAddress,
    publisherAccount,
    '1',
    receiverAddress
  );

  // Get new datatoken balance of receiver
  receiverBalance = await datatoken.balance(
    datatokenAddress,
    receiverAddress
  );
  console.log(`Receiver balance after mint: ${receiverBalance}`);
};

// Call mintDatatoken(...) function defined above
mintDatatoken(datatokenAddress, receiverAddress)
  .then(() => {
    process.exit((err) => {
      console.error(err);
      process.exit(1);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
```
{% endcode %}

#### Execute script

```
node mint_datatoken.js
```
{% endtab %}

{% tab title="ocean.py" %}
{% code title="mint_datatoken.py" %}
```python
# Note: Ensure that .env and config.py are correctly setup
from config import web3_wallet, ocean

# Change this
datatoken_address = "0xD3542e5F56655fb818F9118CE219e1D10751BC82"
receiver_address = "0xBE5449a6A97aD46c8558A3356267Ee5D2731ab5e"

datatoken = ocean.get_datatoken(datatoken_address)

print(f"Balance before mint: {datatoken.balanceOf(receiver_address)}")

# Mint datatokens
datatoken.mint(
    account_address=receiver_address,
    value=ocean.to_wei("1"),
    from_wallet=web3_wallet,
)

print(f"Balance after mint: {datatoken.balanceOf(receiver_address)}")
nt_d
```
{% endcode %}

#### Execute script

```
python mint_datatoken.py
```
{% endtab %}
{% endtabs %}

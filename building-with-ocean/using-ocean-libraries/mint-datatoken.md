# Mint datatoken

#### Configuration

See [this](configuration.md) guide on defining a `.env` file and a configuration file

#### Create a script to mint datatokens

{% tabs %}
{% tab title="ocean.js" %}
{% code title="mint_datatoken.js" %}
```javascript
const { NftFactory, Datatoken } = require('@oceanprotocol/lib');
const Web3 = require('web3');
const { web3Provider, oceanConfig } = require('./config');

const web3 = new Web3(web3Provider);

// Change this
const datatokenAddress = "0xD3542e5F56655fb818F9118CE219e1D10751BC82"
const receiverAddress = "0xBE5449a6A97aD46c8558A3356267Ee5D2731ab5e"

const mintDatatoken = async (datatokenAddress, receiverAddress) => {
  const accounts = await web3.eth.getAccounts();
  const publisherAccount = accounts[0];

  const datatoken = new Datatoken(web3);

  let receiverBalance = await datatoken.balance(
    datatokenAddress,
    receiverAddress
  );
  console.log(`Receiver balance before mint: ${receiverBalance}`);

  await datatoken.mint(
    datatokenAddress,
    publisherAccount,
    '1',
    receiverAddress
  );

  receiverBalance = await datatoken.balance(
    datatokenAddress,
    receiverAddress
  );
  console.log(`Receiver balance after mint: ${receiverBalance}`);
};

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

datatoken.mint(
    account_address=receiver_address,
    value=ocean.to_wei("1"),
    from_wallet=web3_wallet,
)

print(f"Balance after mint: {datatoken.balanceOf(receiver_address)}")
nt_d
```
{% endcode %}
{% endtab %}
{% endtabs %}

# Configuration

### Obtaining API key for Ethereum node provider

Ocean libraries need an Ethereum node provider API key to send transactions to the Ocean Protocol's Smart contracts.  See this [guide](../obtaining-api-key.md) on getting an API key to interact with EVM compatible networks. The supported networks are listed [here](../../core-concepts/networks.md).

### Create a directory

Let's start with creating a working directory where we store the environment variable file, configuration files and the scripts.

```
mkdir my-ocean-project
cd my-ocean-project
```

### Create a `.env` file

In the working directory create a `.env` file. The content of this file will store the values for following variables:

| Variable name           | Description                                                                                                                                                                 | Required |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **OCEAN\_NETWORK**      | Name of the network where the Ocean Protocol's smart contracts are deployed.                                                                                                | Yes      |
| **OCEAN\_NETWORK\_URL** | The URL of the Ethereum node (along with API key for non-local networks)                                                                                                    | Yes      |
| **PRIVATE\_KEY**        | The private key of the account which you want to use. A private key is made up of 64 hex characters. Make sure you have sufficient balance to pay for the transaction fees. | Yes      |
| **AQUARIUS\_URL**       | The URL of the Aquarius. This value is needed when reading an asset from off-chain store.                                                                                   | No       |
| **PROVIDER\_URL**       | The URL of the Provider. This value is needed when publishing a new asset or update an existing asset.                                                                      | No       |

{% hint style="info" %}
Treat this file as a secret and do not commit this file to git or share the content publicly.
{% endhint %}

The below tabs show partially filled `.env` file content for some of the supported networks.&#x20;

{% tabs %}
{% tab title="Mainnet" %}
{% code title=".env" %}
```
# Mandatory environment variables

OCEAN_NETWORK=mainnet
OCEAN_NETWORK_URL=<replace this>
PRIVATE_KEY=<secret>

# Optional environment variables

AQUARIUS_URL=https://v4.aquarius.oceanprotocol.com/
PROVIDER_URL=https://v4.provider.mainnet.oceanprotocol.com
```
{% endcode %}
{% endtab %}

{% tab title="Polygon" %}
{% code title=".env" %}
```
# Mandatory environment variables

OCEAN_NETWORK=polygon
OCEAN_NETWORK_URL=<replace this>
PRIVATE_KEY=<secret>

# Optional environment variables

AQUARIUS_URL=https://v4.aquarius.oceanprotocol.com/
PROVIDER_URL=https://v4.provider.polygon.oceanprotocol.com
```
{% endcode %}
{% endtab %}

{% tab title="Local (using Barge)" %}
{% code title=".env" %}
```
# Mandatory environment variables
OCEAN_NETWORK=development
OCEAN_NETWORK_URL=http://172.15.0.3:8545/
AQUARIUS_URL=http://172.15.0.5:5000
PROVIDER_URL=http://172.15.0.4:8030

# Replace PRIVATE_KEY if needed
PRIVATE_KEY=0xc594c6e5def4bab63ac29eed19a134c130388f74f019bc74b8f4389df2837a58
```
{% endcode %}
{% endtab %}
{% endtabs %}

_NOTE: If using ocean.py, additionally specify **ADDRESS\_FILE** variable in the `.env` file. Copy the content of this_ [_link_](https://github.com/oceanprotocol/contracts/blob/v4main/addresses/address.json) _locally and set the **ADDRESS\_FILE** so that its value is a correct file path._

### Setup dependencies

In this step the required dependencies will be installed.

{% tabs %}
{% tab title="ocean.js" %}
```bash
npm init
npm install @oceanprotocol/lib@latest dotenv web3 @truffle/hdwallet-provider
```
{% endtab %}

{% tab title="ocean.py" %}
```bash
python3 -m venv venv
source venv/bin/activate
pip3 install wheel

# Install Ocean library. Allow pre-releases to get the latest v4 version.
pip3 install ocean-lib python-dotenv web3
```
{% endtab %}
{% endtabs %}

### Create a configuration file

A configuration file will read the content of the `.env` file and initialize the required configuration objects which will be used in the further tutorials. The below scripts creates a Web3 wallet instance and a Ocean's configuration object.

Create the configuration file in the working directory i.e. at the same path where the `.env` is located.&#x20;

{% tabs %}
{% tab title="ocean.js" %}
{% code title="config.js" %}
```javascript
// Import dependencies
require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const { homedir } = require('os');
const { ConfigHelper } = require('@oceanprotocol/lib');

// Get configuration for the given network
let oceanConfig = new ConfigHelper().getConfig(process.env.OCEAN_NETWORK);

// If using local development environment, read the addresses from local file.
// The local deployment address file can be generated using barge.
if (process.env.OCEAN_NETWORK === 'development') {
  const addressData = JSON.parse(
    fs.readFileSync(
      process.env.ADDRESS_FILE
        || `${homedir}/.ocean/ocean-contracts/artifacts/address.json`,
      'utf8'
    )
  );
  const addresses = addressData[process.env.OCEAN_NETWORK];

  oceanConfig = {
    ...oceanConfig,
    oceanTokenAddress: addresses.Ocean,
    poolTemplateAddress: addresses.poolTemplate,
    fixedRateExchangeAddress: addresses.FixedPrice,
    dispenserAddress: addresses.Dispenser,
    erc721FactoryAddress: addresses.ERC721Factory,
    sideStakingAddress: addresses.Staking,
    opfCommunityFeeCollector: addresses.OPFCommunityFeeCollector
  };
}

oceanConfig = {
  ...oceanConfig,
  nodeUri: process.env.OCEAN_NETWORK_URL,
  // Set optional properties - Provider URL and Aquarius URL
  metadataCacheUri: process.env.AQUARIUS_URL || oceanConfig.metadataCacheUri,
  providerUri: process.env.PROVIDER_URL || oceanConfig.providerUri
};

const web3Provider = new HDWalletProvider(
  process.env.PRIVATE_KEY,
  oceanConfig.nodeUri
);

module.exports = {
  web3Provider,
  oceanConfig
};
```
{% endcode %}
{% endtab %}

{% tab title="ocean.py" %}
{% code title="config.py" %}
```python
import os
from dotenv import load_dotenv
from ocean_lib.ocean.ocean import Ocean
from ocean_lib.web3_internal.wallet import Wallet
from ocean_lib.example_config import ExampleConfig, get_config_dict
from ocean_lib.ocean.ocean import Ocean
from ocean_lib.ocean.util import get_web3

load_dotenv()

config = ExampleConfig.get_config()
ocean = Ocean(config)

user_private_key = os.getenv('PRIVATE_KEY')
web3_wallet = Wallet(ocean.web3, user_private_key, ocean.config.block_confirmations, ocean.config.transaction_timeout)
```
{% endcode %}
{% endtab %}
{% endtabs %}

Now, all the dependencies at ready and you can proceed with interacting with Ocean infrastructure using Ocean libraries.

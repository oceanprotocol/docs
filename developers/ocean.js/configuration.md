# Configuration

For obtaining the API keys for blockchain access and setting the correct environment variables, please consult [this section](http://127.0.0.1:5000/o/mTcjMqA4ylf55anucjH8/s/zQlpIJEeu8x5yl0OLuXn/) first and proceed with the next steps.

### Create a directory

Let's start with creating a working directory where we store the environment variable file, configuration files, and the scripts.

```bash
mkdir my-ocean-project
cd my-ocean-project
```

### Create a `.env` file

In the working directory create a `.env` file. The content of this file will store the values for the following variables:

<table><thead><tr><th width="235.47193347193348">Variable name</th><th width="421">Description</th><th>Required</th></tr></thead><tbody><tr><td><strong>OCEAN_NETWORK</strong></td><td>Name of the network where the Ocean Protocol's smart contracts are deployed.</td><td>Yes</td></tr><tr><td><strong>OCEAN_NETWORK_URL</strong></td><td>The URL of the Ethereum node (along with API key for non-local networks)**</td><td>Yes</td></tr><tr><td><strong>PRIVATE_KEY</strong></td><td>The private key of the account which you want to use. A private key is made up of 64 hex characters. Make sure you have sufficient balance to pay for the transaction fees.</td><td>Yes</td></tr><tr><td><strong>AQUARIUS_URL</strong></td><td>The URL of the Aquarius. This value is needed when reading an asset from off-chain store.</td><td>No</td></tr><tr><td><strong>PROVIDER_URL</strong></td><td>The URL of the Provider. This value is needed when publishing a new asset or update an existing asset.</td><td>No</td></tr></tbody></table>

{% hint style="info" %}
Treat this file as a secret and do not commit this file to git or share the content publicly. If you are using git, then include this file name in `.gitignore` file.
{% endhint %}

The below tabs show partially filled `.env` file content for some of the supported networks.

{% tabs %}
{% tab title="Mainnet" %}
{% code title=".env" %}
```bash
# Mandatory environment variables

OCEAN_NETWORK=mainnet
OCEAN_NETWORK_URL=<replace this>
PRIVATE_KEY=<secret>

# Optional environment variables

AQUARIUS_URL=https://v4.aquarius.oceanprotocol.com/
PROVIDER_URL=https://v4.provider.oceanprotocol.com
```
{% endcode %}
{% endtab %}

{% tab title="Polygon" %}
{% code title=".env" %}
```bash
# Mandatory environment variables

OCEAN_NETWORK=polygon
OCEAN_NETWORK_URL=<replace this>
PRIVATE_KEY=<secret>

# Optional environment variables

AQUARIUS_URL=https://v4.aquarius.oceanprotocol.com/
PROVIDER_URL=https://v4.provider.oceanprotocol.com
```
{% endcode %}
{% endtab %}

{% tab title="Local (using Barge)" %}
{% code title=".env" %}
```bash
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

Replace `<replace this>` with the appropriate values. \*\*You can see all the networks configuration on Oceanjs' [config helper](https://github.com/oceanprotocol/ocean.js/blob/main/src/config/ConfigHelper.ts#L42).

### Setup dependencies

In this step, all required dependencies will be installed.

### Installation & Usage

Let's install Ocean.js library into your current project by running:

{% tabs %}
{% tab title="Terminal" %}
{% code overflow="wrap" %}
```bash
npm init
npm i @oceanprotocol/lib@latest dotenv crypto-js ethers@5.7.4 @truffle/hdwallet-provider
```
{% endcode %}
{% endtab %}
{% endtabs %}

### Create a configuration file

A configuration file will read the content of the `.env` file and initialize the required configuration objects which will be used in the further tutorials. The below scripts creates a Web3 wallet instance and an Ocean's configuration object.

Create the configuration file in the working directory i.e. at the same path where the `.env` is located.

{% tabs %}
{% tab title="config.js" %}
{% code title="config.js" %}
```javascript
require('dotenv').config();
const { Aquarius, ZERO_ADDRESS, ConfigHelper, configHelperNetworks } = require('@oceanprotocol/lib');
const { providers } = require('ethers')
const ethers = require('ethers');
async function oceanConfig(){

  // Get configuration for the given network
  const provider = new providers.JsonRpcProvider(
    process.env.OCEAN_NETWORK_URL || configHelperNetworks[1].nodeUri
  )

  const ethersProvider = new ethers.Wallet(
    process.env.PRIVATE_KEY,
    provider
  );
  
  const publisherAccount = wallet.connect(provider);

  let oceanConfig = new ConfigHelper().getConfig(
    parseInt(String((await publisherAccount.provider.getNetwork()).chainId))
  )
  const aquarius = new Aquarius(oceanConfig?.metadataCacheUri)

  // If using local development environment, read the addresses from local file.
  // The local deployment address file can be generated using barge.
  if (process.env.OCEAN_NETWORK === 'development') {
    const addresses = JSON.parse(
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      fs.readFileSync(
        process.env.ADDRESS_FILE ||
          `${homedir}/.ocean/ocean-contracts/artifacts/address.json`,
        'utf8'
      )
    ).development

    oceanConfig = {
      ...oceanConfig,
      oceanTokenAddress: addresses.Ocean,
      poolTemplateAddress: addresses.poolTemplate,
      fixedRateExchangeAddress: addresses.FixedPrice,
      dispenserAddress: addresses.Dispenser,
      nftFactoryAddress: addresses.ERC721Factory,
      sideStakingAddress: addresses.Staking,
      opfCommunityFeeCollector: addresses.OPFCommunityFeeCollector
    };
  }

  oceanConfig = {
    ...oceanConfig,
    publisherAccount: publisherAccount,
    consumerAccount: consumerAccount,
    stakerAccount: stakerAccount,
    aquarius: aquarius
  };

  return oceanConfig
};

module.exports = {
  oceanConfig
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

Now you have set up the necessary files and configurations to interact with Ocean Protocol's smart contracts using ocean.js. You can proceed with further tutorials or development using these configurations.

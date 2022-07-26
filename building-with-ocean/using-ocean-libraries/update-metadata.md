# Update metadata

#### Configuration

See [this](configuration.md) guide on defining a `.env` file and a configuration file

#### Create a script to update the metadata

{% tabs %}
{% tab title="ocean.js" %}
{% code title="updateMetadata.js" %}
```javascript
const {
  Nft,
  ProviderInstance,
  getHash,
  Aquarius
} = require('@oceanprotocol/lib');
const { SHA256 } = require('crypto-js');
const Web3 = require('web3');
const { web3Provider, oceanConfig } = require('./config');

const web3 = new Web3(web3Provider);
const aquarius = new Aquarius(oceanConfig.metadataCacheUri);
const nft = new Nft(web3);
const providerUrl = oceanConfig.providerUri;

// replace the did here
const did = "did:op:a419f07306d71f3357f8df74807d5d12bddd6bcd738eb0b461470c64859d6f0f";

const setMetadata = async (did) => {
  const accounts = await web3.eth.getAccounts();
  const publisherAccount = accounts[0];

  const ddo = await aquarius.resolve(did);

  // update the ddo here
  ddo.metadata.name = "Sample dataset v2";
  ddo.metadata.description = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam";
  ddo.metadata.tags = ["new tag1", "new tag2"];

  providerResponse = await ProviderInstance.encrypt(ddo, providerUrl);
  const encryptedResponse = await providerResponse;
  const metadataHash = getHash(JSON.stringify(ddo));

  await nft.setMetadata(
    ddo.nftAddress,
    publisherAccount,
    0,
    providerUrl,
    '',
    '0x2',
    encryptedResponse,
    `0x${metadataHash}`
  );

  await aquarius.waitForAqua(ddo.id);

  console.log(`Resolved asset did [${ddo.id}]from aquarius.`);
  console.log(`Updated name: [${ddo.metadata.name}].`);
  console.log(`Updated description: [${ddo.metadata.description}].`);
  console.log(`Updated tags: [${ddo.metadata.tags}].`);

};

setMetadata(did).then(() => {
  process.exit();
}).catch((err) => {
  console.error(err);
  process.exit(1);
});

```
{% endcode %}

Execute the script

```bash
node updateMetadata.js
```
{% endtab %}

{% tab title="ocean.py" %}

{% endtab %}
{% endtabs %}

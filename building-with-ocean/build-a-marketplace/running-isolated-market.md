# Running Isolated Market

An isolated market can determine which assets can be listed in marketplace interface. An isolated market requires an **Aquarius** instance that serves the asset metadata. When an asset is published using a such Aquarius instance, it checks if the validator belongs to the list of allowed validators. If the metadata proof is valid and signed by a permitted validator, Aquarius caches the asset metadata. After caching, marketplace can fetch the asset details and show it on the marketplace UI.

### Use case

Suppose Alice and Bob are running their own Aquarius instance and caching assets independently. Now, using isolated an isolated market, Charlie can run a market place that lists assets that are allowed to be stored in both Alice and Bob's Aquarius instances. Here, Charlie would allow wallet addresses of Alice and Bob's Aquarius instances in `ALLOWED_VALIDATORS`. Thus, it is possible to compose marketplaces that list the same asset without the need to republish for each market individually.&#x20;

### Deploy Aquarius

The details on deploying Aquarius are on [this page](../deploying-components/deploying-aquarius.md).  Add the `ALLOWED_VALIDATORS` in the [`.env`](../deploying-components/deploying-aquarius.md#create-a-.env-file) file. `ALLOWED_VALIDATORS` is a JSON array of allowed addresses that can act as validators. A validator has to sign the hash of the metadata asset as proof which is then validated by Aquarius.&#x20;

`ALLOWED_VALIDATORS` is a list of addresses. e.g., `["0xBE5449a6A97aD46c8558A3356267Ee5D2731ab5e","`0xe2DD09d719Da89e5a3D0F2549c7E24566e947260`"]`

If the asset includes metadata proofs generated be any of the addresses in `ALLOWED_VALIDATORS`, then Aquarius will cache the asset.&#x20;

### Deploy Market

The details on deploying Market are on [this page](../deploying-components/deploying-marketplace.md). The guide on [customizing market](customising-your-market.md) gives details about changing the theme, colors, font that suits the your requirements. Set the `NEXT_PUBLIC_METADATACACHE_URI` variable in the marketplace [.env file](../deploying-components/deploying-marketplace.md#create-file-with-name-.env) to the correct Aquarius URL hosted in the [previous step](running-isolated-market.md#deploy-aquarius).&#x20;

### Add metadata proof to an asset with

#### Generating metadata proof

See [this guide](../using-ocean-libraries/configuration.md) on setting the required configuration for using ocean.py and ocean.js.

{% tabs %}
{% tab title="Python" %}
<pre class="language-python" data-title="set_metadata_proof.py"><code class="lang-python">from ocean_lib.aquarius import Aquarius
<strong>from config import web3_wallet, ocean, config
</strong>
# Replace this
other_aquarius_url = "https://other-aquarius-url"

other_aquarius = Aquarius.get_instance(other_aquarius_url)

did = "did:op:41726160b692e234d59e1611e1f7177e3f1ca0620a41867c53c0660ee9d017e6"
asset = other_aquarius.wait_for_asset(did)
asset_dictionary = asset.as_dictionary()

# Generate a proof
<strong>_, proof = other_aquarius.validate_asset(asset)
</strong>
# Generate ddo hash
ddo_string = json.dumps(asset_dict, separators=(",", ":"))
ddo_bytes = ddo_string.encode("utf-8")
ddo_hash = create_checksum(ddo_string)

# Encrypt the ddo
encrypt_response = DataEncryptor.encrypt(
    objects_to_encrypt=ddo_string, provider_uri=config.provider_url
)
document = encrypt_response.text

flags = bytes([2])

# Create data NFT instance
data_NFT = ocean.get_nft_token(asset_dictionary["nftAddress"])

# Set metadat with proof
data_NFT.set_metadata(
    metadata_state=0,
    metadata_decryptor_url=config.provider_url,
    metadata_decryptor_address=web3_wallet.address,
    flags=flags,
    data=document,
    data_hash=ddo_hash,
    metadata_proofs=[proof],
    from_wallet=web3_wallet,
)</code></pre>
{% endtab %}

{% tab title="Javascript" %}
<pre class="language-javascript" data-title="setMetadataProof.js"><code class="lang-javascript"><strong>// Import dependencies
</strong><strong>const {
</strong>    Nft,
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

// Replace the did
const did = "did:op:656b3ab786fc76255988d8c106c7df6db8af9fada6a5b5f9989377da05f8827a";

const setMetadataProof = async (did) => {
    const accounts = await web3.eth.getAccounts();
    const publisherAccount = accounts[0];

    const ddo = await aquarius.resolve(did);

    providerResponse = await ProviderInstance.encrypt(ddo, providerUrl);
    const encryptedResponse = await providerResponse;
    const metadataHash = getHash(JSON.stringify(ddo));
    
    // Replace the Auqarius URL
    const otherAquariusURL = "&#x3C;some-other-aquarius>"
    const otherAquarius = new Aquarius(otherAquariusURL);
    
    // Generate a proof
    const { valid, proof, hash } = await otherAquarius.validate(ddo);

    if (!valid) return;

    await nft.setMetadata(
        ddo.nftAddress,
        publisherAccount,
        0,
        providerUrl,
        '',
        '0x2',
        encryptedResponse,
        `0x${metadataHash}`,
        // Set the metadata proof
        [proof]

    );
};

setMetadataProof(did).then(() => {
    process.exit();
}).catch((err) => {
    console.error(err);
    process.exit(1);
});
</code></pre>
{% endtab %}
{% endtabs %}

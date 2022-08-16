# Running Isolated Market

An isolated market can determine which assets can be listed in marketplace interface. An isolated market requires an **Aquarius** instance that serves the asset metadata. When an asset is published using a such Aquarius instance, it checks if the validator belongs to the list of allowed validators. If the metadata proof is valid and signed by a permitted validator, Aquarius caches the asset metadata. After caching, marketplace can fetch the asset details and show it on the marketplace UI.

### Use case

Suppose Alice and Bob are running their own Aquarius instance and caching assets independently. Now, using isolated an isolated market, Charlie can run a market place that lists assets that are allowed to be stored in both Alice and Bob's Aquarius instances. Here, Charlie would allow wallet addresses of Alice and Bob's Aquarius instances in `ALLOWED_VALIDATORS.` Thus, it is possible to compose marketplaces that list the same asset without the need to republish for each market individually.&#x20;

### Deploy Aquarius

The details on deploying Aquarius are on [this page](../deploying-components/deploying-aquarius.md).  Add the `ALLOWED_VALIDATORS` in the [`.env`](../deploying-components/deploying-aquarius.md#create-a-.env-file) file. `ALLOWED_VALIDATORS` is a JSON array of allowed addresses that can act as validators. A validator has to sign the hash of the metadata asset as proof which is then validated by Aquarius. &#x20;

### Deploy Market

The details on deploying Market are on [this page](../deploying-components/deploying-marketplace.md). The guide on [customizing market](customising-your-market.md) gives details about changing the theme, colors, font that suits the your requirements. Set the `NEXT_PUBLIC_METADATACACHE_URI` variable in the marketplace [.env file](../deploying-components/deploying-marketplace.md#create-file-with-name-.env) to the correct Aquarius URL hosted in the [previous step](running-isolated-market.md#deploy-aquarius).&#x20;

### Add metadata proof to an asset with&#x20;

#### Generating metadata proof

{% tabs %}
{% tab title="Python" %}
See [this guide](../using-ocean-libraries/configuration.md) on setting the required configuration for using ocean.py

<pre class="language-python"><code class="lang-python">from ocean_lib.aquarius import Aquarius
from config import web3_wallet, ocean, config

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
{% endtabs %}

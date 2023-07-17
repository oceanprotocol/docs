---
description: Technical details about OceanAssets functions
---

# Ocean Assets Tech Details

Through this class we can publish different types of assets & consume them to make 💲💲💲

### Creates URL Asset

* **create\_url\_asset**(`self`, `name: str`, `url: str`, `publisher_wallet`, `wait_for_aqua: bool = True` ) -> `tuple`

It is the most used functions in all the READMEs.

Creates asset of type "dataset", having `UrlFiles`, with good defaults.

It can be called after instantiating Ocean object.

**Parameters**

* `name` - name of the asset, `string`
* `url` - url that is stored in the asset, `string`
* `publisher_wallet` - wallet of the asset publisher/owner, `Brownie account`
* `wait_for_aqua` - boolean value which default is `True`, waiting for aquarius to fetch the asset takes additional time, but if you want to be sure that your asset is indexed, keep the default value.

**Returns**

`tuple`

A tuple which contains the data NFT, datatoken and the data asset.

**Defined in**

[ocean/ocean_assets.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL178C1-L185C82)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
 @enforce_types
    def create_url_asset(
        self, name: str, url: str, publisher_wallet, wait_for_aqua: bool = True
    ) -> tuple:
        """Create asset of type "data", having UrlFiles, with good defaults"""
        metadata = self._default_metadata(name, publisher_wallet)
        files = [UrlFile(url)]
        return self._create_1dt(metadata, files, publisher_wallet, wait_for_aqua)
```
{% endcode %}

</details>

### Creates Algorithm Asset

* **create\_algo\_asset**(`self`, `name: str`, `url: str`, `publisher_wallet`, `image: str = "oceanprotocol/algo_dockers"`, `tag: str = "python-branin"`, `checksum: str = "sha256:8221d20c1c16491d7d56b9657ea09082c0ee4a8ab1a6621fa720da58b09580e4"`, `wait_for_aqua: bool = True`) -> `tuple`:

Create asset of type "algorithm", having `UrlFiles`, with good defaults.

It can be called after instantiating Ocean object.

**Parameters**:

* `name` - name of the asset, `string`
* `url` - url that is stored in the asset, `string`
* `publisher_wallet` - wallet of the asset publisher/owner, `Brownie account`
* `image` - docker image of that algorithm, `string`
* `tag` - docker tag for that algorithm image, `string`
* `checksum` - docker checksum for algorithm's image, `string`
* `wait_for_aqua` - boolean value which default is `True`, waiting for aquarius to fetch the asset takes additional time, but if you want to be sure that your asset is indexed, keep the default value.

**Returns**

`tuple`

A tuple which contains the algorithm NFT, algorithm datatoken and the algorithm asset.

**Defined in**

[ocean/ocean_assets.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL146C4-L176C82)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
@enforce_types
    def create_algo_asset(
        self,
        name: str,
        url: str,
        publisher_wallet,
        image: str = "oceanprotocol/algo_dockers",
        tag: str = "python-branin",
        checksum: str = "sha256:8221d20c1c16491d7d56b9657ea09082c0ee4a8ab1a6621fa720da58b09580e4",
        wait_for_aqua: bool = True,
    ) -> tuple:
        """Create asset of type "algorithm", having UrlFiles, with good defaults"""

        if image == "oceanprotocol/algo_dockers" or tag == "python-branin":
            assert image == "oceanprotocol/algo_dockers" and tag == "python-branin"

        metadata = self._default_metadata(name, publisher_wallet, "algorithm")
        metadata["algorithm"] = {
            "language": "python",
            "format": "docker-image",
            "version": "0.1",
            "container": {
                "entrypoint": "python $ALGO",
                "image": image,
                "tag": tag,
                "checksum": checksum,
            },
        }

        files = [UrlFile(url)]
        return self._create_1dt(metadata, files, publisher_wallet, wait_for_aqua)
```
{% endcode %}

</details>

### Creates Arweave Asset

* **create\_arweave\_asset**(`self`, `name: str`, `transaction_id: str`, `publisher_wallet`, `wait_for_aqua: bool = True`) -> `tuple`

Creates asset of type "data", having `ArweaveFile`, with good defaults.

It can be called after instantiating Ocean object.

**Parameters**

* `name` - name of the asset, `string`
* `transaction_id` - transaction id from the arweave file, `string`
* `publisher_wallet` - wallet of the asset publisher/owner, `Brownie account`
* `wait_for_aqua` - boolean value which default is `True`, waiting for aquarius to fetch the asset takes additional time, but if you want to be sure that your asset is indexed, keep the default value.

**Returns**

`tuple`

A tuple which contains the data NFT, datatoken and the data asset.

**Defined in**

[ocean/ocean_assets.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL187C5-L198C82)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
@enforce_types
    def create_arweave_asset(
        self,
        name: str,
        transaction_id: str,
        publisher_wallet,
        wait_for_aqua: bool = True,
    ) -> tuple:
        """Create asset of type "data", having ArweaveFiles, with good defaults"""
        metadata = self._default_metadata(name, publisher_wallet)
        files = [ArweaveFile(transaction_id)]
        return self._create_1dt(metadata, files, publisher_wallet, wait_for_aqua)
```
{% endcode %}

</details>

### Creates GraphQL Asset

* **create\_graphql\_asset**(`self`, `name: str`, `url: str`, `query: str`, `publisher_wallet`, `wait_for_aqua: bool = True`) -> `tuple`

Creates asset of type "data", having `GraphqlQuery` files, with good defaults.

It can be called after instantiating Ocean object.

**Parameters**

* `name` - name of the asset, `string`
* `url` - url of subgraph that you are using, `string`
* `query` - GraphQL query, `string`
* `publisher_wallet` - wallet of the asset publisher/owner, `Brownie account`
* `wait_for_aqua` - boolean value which default is `True`, waiting for aquarius to fetch the asset takes additional time, but if you want to be sure that your asset is indexed, keep the default value.

**Returns**

`tuple`

A tuple which contains the data NFT, datatoken and the data asset.

**Defined in**

[ocean/ocean_assets.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL200C5-L212C82)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
@enforce_types
    def create_graphql_asset(
        self,
        name: str,
        url: str,
        query: str,
        publisher_wallet,
        wait_for_aqua: bool = True,
    ) -> tuple:
        """Create asset of type "data", having GraphqlQuery files, w good defaults"""
        metadata = self._default_metadata(name, publisher_wallet)
        files = [GraphqlQuery(url, query)]
        return self._create_1dt(metadata, files, publisher_wallet, wait_for_aqua)
```
{% endcode %}

</details>

### Creates Onchain Asset

* **create\_onchain\_asset**(`self`, `name: str`, `contract_address: str`, `contract_abi: dict`, `publisher_wallet`, `wait_for_aqua: bool = True`) -> `tuple`

Creates asset of type "data", having `SmartContractCall` files, with good defaults.

It can be called after instantiating Ocean object.

**Parameters**

* `name` - name of the asset, `string`
* `contract_address` - contract address that should be stored in the asset, `string`
* `contract_abi` - ABI of functions presented in the contract, `string`
* `publisher_wallet` - wallet of the asset publisher/owner, `Brownie account`
* `wait_for_aqua` - boolean value which default is `True`, waiting for aquarius to fetch the asset takes additional time, but if you want to be sure that your asset is indexed, keep the default value.

**Returns**

`tuple`

A tuple which contains the data NFT, datatoken and the data asset.

**Defined in**

[ocean/ocean_assets.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL214C5-L229C1)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
@enforce_types
    def create_onchain_asset(
        self,
        name: str,
        contract_address: str,
        contract_abi: dict,
        publisher_wallet,
        wait_for_aqua: bool = True,
    ) -> tuple:
        """Create asset of type "data", having SmartContractCall files, w defaults"""
        chain_id = self._chain_id
        onchain_data = SmartContractCall(contract_address, chain_id, contract_abi)
        files = [onchain_data]
        metadata = self._default_metadata(name, publisher_wallet)
        return self._create_1dt(metadata, files, publisher_wallet, wait_for_aqua)
```
{% endcode %}

</details>

### Creates Asset (for advanced skills)

* **create**(`self`, `metadata: dict`, `publisher_wallet`, `credentials: Optional[dict] = None`, `data_nft_address: Optional[str] = None`, `data_nft_args: Optional[DataNFTArguments] = None`, `deployed_datatokens: Optional[List[Datatoken]] = None`, `services: Optional[list] = None`, `datatoken_args: Optional[List["DatatokenArguments"]] = None`, `encrypt_flag: Optional[bool] = True`, `compress_flag: Optional[bool] = True`, `wait_for_aqua: bool = True`) -> `tuple`

Register an asset on-chain. Asset = {data\_NFT, >=0 datatokens, DDO}

Creating/deploying a DataNFT contract and in the Metadata store (Aquarius).

**Parameters**

* `metadata`: `dictionary` conforming to the Metadata accepted by Ocean Protocol.
* `publisher_wallet`- `Brownie account` of the publisher registering this asset.
* `credentials` - credentials `dictionary` necessary for the asset, which establish who can consume the asset and who cannot.
* `data_nft_address`- hex string, the address of the data NFT. The new asset will be associated with this data NFT address.
* `data_nft_args`- object of DataNFTArguments type if creating a new one.
* `deployed_datatokens`- list of datatokens which are already deployed.
* `services` - list of `Service` objects if you want to run multiple services for a datatoken or you have multiple datatokens with a single service each.
* `datatoken_args` - list of objects of `DatatokenArguments` type if creating a new datatokens.
* `encrypt_flag`- bool for encryption of the DDO.
* `compress_flag`- bool for compression of the DDO.
* `wait_for_aqua`- bool for spending time waiting for DDO to be updated in Aquarius.

**Returns**

`tuple`

A tuple which contains the data NFT, datatoken and the data asset.

**Defined in**

[ocean/ocean_assets.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL259C5-L390C43)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
def create(
        self,
        metadata: dict,
        publisher_wallet,
        credentials: Optional[dict] = None,
        data_nft_address: Optional[str] = None,
        data_nft_args: Optional[DataNFTArguments] = None,
        deployed_datatokens: Optional[List[Datatoken]] = None,
        services: Optional[list] = None,
        datatoken_args: Optional[List["DatatokenArguments"]] = None,
        encrypt_flag: Optional[bool] = True,
        compress_flag: Optional[bool] = True,
        wait_for_aqua: bool = True,
    ) -> Optional[DDO]:
    
        self._assert_ddo_metadata(metadata)

        provider_uri = DataServiceProvider.get_url(self._config_dict)

        if not data_nft_address:
            data_nft_args = data_nft_args or DataNFTArguments(
                metadata["name"], metadata["name"]
            )
            data_nft = data_nft_args.deploy_contract(
                self._config_dict, publisher_wallet
            )
            # register on-chain
            if not data_nft:
                logger.warning("Creating new NFT failed.")
                return None, None, None
            logger.info(f"Successfully created NFT with address {data_nft.address}.")
        else:
            data_nft = DataNFT(self._config_dict, data_nft_address)

        # Create DDO object
        ddo = DDO()

        # Generate the did, add it to the ddo.
        ddo.did = data_nft.calculate_did()
        # Check if it's already registered first!
        if self._aquarius.ddo_exists(ddo.did):
            raise AquariusError(
                f"Asset id {ddo.did} is already registered to another asset."
            )
        ddo.chain_id = self._chain_id
        ddo.metadata = metadata

        ddo.credentials = credentials if credentials else {"allow": [], "deny": []}

        ddo.nft_address = data_nft.address
        datatokens = []

        if not deployed_datatokens:
            services = []
            for datatoken_arg in datatoken_args:
                new_dt = datatoken_arg.create_datatoken(
                    data_nft, publisher_wallet, with_services=True
                )
                datatokens.append(new_dt)

                services.extend(datatoken_arg.services)

            for service in services:
                ddo.add_service(service)
        else:
            if not services:
                logger.warning("services required with deployed_datatokens.")
                return None, None, None

            datatokens = deployed_datatokens
            dt_addresses = []
            for datatoken in datatokens:
                if deployed_datatokens[0].address not in data_nft.getTokensList():
                    logger.warning(
                        "some deployed_datatokens don't belong to the given data nft."
                    )
                    return None, None, None

                dt_addresses.append(datatoken.address)

            for service in services:
                if service.datatoken not in dt_addresses:
                    logger.warning("Datatoken services mismatch.")
                    return None, None, None

                ddo.add_service(service)

        # Validation by Aquarius
        _, proof = self.validate(ddo)
        proof = (
            proof["publicKey"],
            proof["v"],
            proof["r"][0],
            proof["s"][0],
        )

        document, flags, ddo_hash = self._encrypt_ddo(
            ddo, provider_uri, encrypt_flag, compress_flag
        )

        data_nft.setMetaData(
            0,
            provider_uri,
            Web3.toChecksumAddress(publisher_wallet.address.lower()).encode("utf-8"),
            flags,
            document,
            ddo_hash,
            [proof],
            {"from": publisher_wallet},
        )

        # Fetch the ddo on chain
        if wait_for_aqua:
            ddo = self._aquarius.wait_for_ddo(ddo.did)

        return (data_nft, datatokens, ddo)
```
{% endcode %}

**Publishing Alternatives**

Here are some examples similar to the `create()` above, but exposes more fine-grained control.

In the same python console:

```python
# Specify metadata and services, using the Branin test dataset
date_created = "2021-12-28T10:55:11Z"
metadata = {
    "created": date_created,
    "updated": date_created,
    "description": "Branin dataset",
    "name": "Branin dataset",
    "type": "dataset",
    "author": "Trent",
    "license": "CC0: PublicDomain",
}

# Use "UrlFile" asset type. (There are other options)
from ocean_lib.structures.file_objects import UrlFile
url_file = UrlFile(
    url="https://raw.githubusercontent.com/trentmc/branin/main/branin.arff"
)

# Publish data asset
from ocean_lib.models.datatoken_base import DatatokenArguments
_, _, ddo = ocean.assets.create(
    metadata,
    {"from": alice},
    datatoken_args=[DatatokenArguments(files=[url_file])],
)
```

**DDO Encryption or Compression**

The DDO is stored on-chain. It's encrypted and compressed by default. Therefore it supports GDPR "right-to-be-forgotten" compliance rules by default.

You can control this during `create()`:

* To disable encryption, use `ocean.assets.create(..., encrypt_flag=False)`.
* To disable compression, use `ocean.assets.create(..., compress_flag=False)`.
* To disable both, use `ocean.assetspy.create(..., encrypt_flag=False, compress_flag=False)`.

**Create **_**just**_** a data NFT**

Calling `create()` like above generates a data NFT, a datatoken for that NFT, and a ddo. This is the most common case. However, sometimes you may want _just_ the data NFT, e.g. if using a data NFT as a simple key-value store. Here's how:

```python
data_nft = ocean.data_nft_factory.create({"from": alice}, 'NFT1', 'NFT1')
```

If you call `create()` after this, you can pass in an argument `data_nft_address:string` and it will use that NFT rather than creating a new one.

**Create a datatoken from a data NFT**

Calling `create()` like above generates a data NFT, a datatoken for that NFT, and a ddo object. However, we may want a second datatoken. Or, we may have started with _just_ the data NFT, and want to add a datatoken to it. Here's how:

```python
datatoken = data_nft.create_datatoken({"from": alice}, "Datatoken 1", "DT1")
```

If you call `create()` after this, you can pass in an argument `deployed_datatokens:List[Datatoken1]` and it will use those datatokens during creation.

**Create an asset & pricing schema simultaneously**

Ocean Assets allows you to bundle several common scenarios as a single transaction, thus lowering gas fees.

Any of the `ocean.assets.create_<type>_asset()` functions can also take an optional parameter that describes a bundled pricing schema (Dispenser or Fixed Rate Exchange).

Here is an example involving an exchange:

{% code overflow="wrap" %}
```python
from ocean_lib.models.fixed_rate_exchange import ExchangeArguments
(data_nft, datatoken, ddo) = ocean.assets.create_url_asset(
    name,
    url,
    {"from": alice},
    pricing_schema_args=ExchangeArguments(rate=to_wei(3), base_token_addr=ocean.OCEAN_address, dt_decimals=18)
)

assert len(datatoken.get_exchanges()) == 1
```
{% endcode %}

</details>

### Updates Asset

* **update**(`self`, `ddo: DDO`, `publisher_wallet`, `provider_uri: Optional[str] = None`, `encrypt_flag: Optional[bool] = True`, `compress_flag: Optional[bool] = True`) -> `Optional[DDO]`

Updates a ddo on-chain.

**Parameters**

* `ddo` - DDO to update
* `publisher_wallet` - who published this DDO
* `provider_uri` - URL of service provider. This will be used as base to construct the serviceEndpoint for the `access` (download) service.
* `encrypt_flag` - boolean value for encryption the DDO
* `compress_flag` - boolean value for compression the DDO

**Returns**

`DDO` or `None`

The updated DDO, or `None` if updated DDO not found in Aquarius.

**Defined in**

[ocean/ocean_assets.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL392C5-L454C19)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
@enforce_types
    def update(
        self,
        ddo: DDO,
        publisher_wallet,
        provider_uri: Optional[str] = None,
        encrypt_flag: Optional[bool] = True,
        compress_flag: Optional[bool] = True,
    ) -> Optional[DDO]:
 
        self._assert_ddo_metadata(ddo.metadata)

        if not provider_uri:
            provider_uri = DataServiceProvider.get_url(self._config_dict)

        assert ddo.nft_address, "need nft address to update a ddo"
        data_nft = DataNFT(self._config_dict, ddo.nft_address)

        assert ddo.chain_id == self._chain_id

        for service in ddo.services:
            service.encrypt_files(ddo.nft_address)

        # Validation by Aquarius
        validation_result, errors_or_proof = self.validate(ddo)
        if not validation_result:
            msg = f"DDO has validation errors: {errors_or_proof}"
            logger.error(msg)
            raise ValueError(msg)

        document, flags, ddo_hash = self._encrypt_ddo(
            ddo, provider_uri, encrypt_flag, compress_flag
        )

        proof = (
            errors_or_proof["publicKey"],
            errors_or_proof["v"],
            errors_or_proof["r"][0],
            errors_or_proof["s"][0],
        )

        tx_result = data_nft.setMetaData(
            0,
            provider_uri,
            Web3.toChecksumAddress(publisher_wallet.address.lower()).encode("utf-8"),
            flags,
            document,
            ddo_hash,
            [proof],
            {"from": publisher_wallet},
        )

        ddo = self._aquarius.wait_for_ddo_update(ddo, tx_result.txid)

        return ddo
```
{% endcode %}

</details>

### Resolves Asset

* **resolve**(`self`, `did: str`) -> `"DDO"`

Resolves the asset from Metadata Cache store (Aquarius).

**Parameter**

* `did` - identifier of the DDO to be searched & resolved in Aquarius

**Returns**

`DDO`

Returns DDO instance.

**Defined in**

[ocean/ocean_assets.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL456C5-L458C43)

<details>

<summary>Source code</summary>

```python
@enforce_types
    def resolve(self, did: str) -> "DDO":
        return self._aquarius.get_ddo(did)
```

</details>

### Searches Assets by Text

* **search**(`self`, `text: str`) -> `list`

Searches a DDO by a specific text.

**Parameter**

* `text` - string text to search for assets which include it.

**Returns**

`list`

A list of DDOs which have matches with the text provided as parameter.

**Defined in**

[ocean/ocean_assets.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL460C4-L475C10)

<details>

<summary>Source code</summary>

```python
@enforce_types
    def search(self, text: str) -> list:
        """
        Search for DDOs in aquarius that contain the target text string
        :param text - target string
        :return - List of DDOs that match with the query
        """
        logger.info(f"Search for DDOs containing text: {text}")
        text = text.replace(":", "\\:").replace("\\\\:", "\\:")
        return [
            DDO.from_dict(ddo_dict["_source"])
            for ddo_dict in self._aquarius.query_search(
                {"query": {"query_string": {"query": text}}}
            )
            if "_source" in ddo_dict
        ]
```

</details>

### Searches Asset by GraphQL Query

* **query**(`self`, `query: dict`) -> `list`

Searches a DDO by a specific query.

**Parameter**

* `query` - dictionary type query to search for assets which include it.

**Returns**

`list`

A list of DDOs which have matches with the query provided as parameter.

**Defined in**

[ocean/ocean_assets.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL477C4-L490C10)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
 @enforce_types
    def query(self, query: dict) -> list:
        """
        Search for DDOs in aquarius with a search query dict
        :param query - dict with query parameters
          More info at: https://docs.oceanprotocol.com/api-references/aquarius-rest-api
        :return - List of DDOs that match the query.
        """
        logger.info(f"Search for DDOs matching query: {query}")
        return [
            DDO.from_dict(ddo_dict["_source"])
            for ddo_dict in self._aquarius.query_search(query)
            if "_source" in ddo_dict
        ]
```
{% endcode %}

</details>

### Downloads Asset

* **download\_asset**(`self`, `ddo: DDO`, `consumer_wallet`, `destination: str`, `order_tx_id: Union[str, bytes]`, `service: Optional[Service] = None`, `index: Optional[int] = None`, `userdata: Optional[dict] = None`) -> `str`

Downloads the asset from Ocean Market.

**Parameters**

* `ddo` - DDO to be downloaded.
* `consumer_wallet` - Brownie account for the wallet that "ordered" the asset.
* `destination` - destination path, as string, where the asset will be downloaded.
* `order_tx_id` - transaction ID for the placed order, string and bytes formats are accepted.

**Optional parameters**

* `service` - optionally if you want to provide the `Service` object through you downloaded the asset.
* `index` - optionally if you want to download certain files, not the whole asset, you can specify how many files you want to download as positive `integer` format.
* `userdata` - `dictionary` additional data from user.

**Returns**

`str`

The full path to the downloaded file as `string`.

**Defined in**

[ocean/ocean_assets.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL492C5-L516C20)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
@enforce_types
    def download_asset(
        self,
        ddo: DDO,
        consumer_wallet,
        destination: str,
        order_tx_id: Union[str, bytes],
        service: Optional[Service] = None,
        index: Optional[int] = None,
        userdata: Optional[dict] = None,
    ) -> str:
        service = service or ddo.services[0]  # fill in good default

        if index is not None:
            assert isinstance(index, int), logger.error("index has to be an integer.")
            assert index >= 0, logger.error("index has to be 0 or a positive integer.")

        assert (
            service and service.type == ServiceTypes.ASSET_ACCESS
        ), f"Service with type {ServiceTypes.ASSET_ACCESS} is not found."

        path: str = download_asset_files(
            ddo, service, consumer_wallet, destination, order_tx_id, index, userdata
        )
        return path
```
{% endcode %}

</details>

### Pays for Access Service

* **pay\_for\_access\_service**(`self`, `ddo: DDO`, `wallet`, `service: Optional[Service] = None`, `consume_market_fees: Optional[TokenFeeInfo] = None`, `consumer_address: Optional[str] = None`, `userdata: Optional[dict] = None`)

Pays for access service by calling initialize endpoint from Provider and starting the order.

**Parameters**

* `ddo` - DDO to be downloaded.
* `wallet`- Brownie account for the wallet that pays for the asset.

**Optional parameters**

* `service` - optionally if you want to provide the `Service` object through you downloaded the asset.
* `consume_market_fees` - `TokenFeeInfo` object which contains consume market fee address, amount and token address.
* `consumer_address` - address for the consumer which pays for the access.
* `userdata` - `dictionary` additional data from user.

**Returns**

`str`

Return value is a hex string for transaction hash which denotes the proof of starting order.

**Defined in**

[ocean/ocean_assets.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL518C5-L571C28)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
@enforce_types
    def pay_for_access_service(
        self,
        ddo: DDO,
        wallet,
        service: Optional[Service] = None,
        consume_market_fees: Optional[TokenFeeInfo] = None,
        consumer_address: Optional[str] = None,
        userdata: Optional[dict] = None,
    ):
        # fill in good defaults as needed
        service = service or ddo.services[0]
        consumer_address = consumer_address or wallet.address

        # main work...
        dt = Datatoken(self._config_dict, service.datatoken)
        balance = dt.balanceOf(wallet.address)

        if balance < to_wei(1):
            raise InsufficientBalance(
                f"Your token balance {balance} {dt.symbol()} is not sufficient "
                f"to execute the requested service. This service "
                f"requires 1 wei."
            )

        consumable_result = is_consumable(
            ddo,
            service,
            {"type": "address", "value": wallet.address},
            userdata=userdata,
        )
        if consumable_result != ConsumableCodes.OK:
            raise AssetNotConsumable(consumable_result)

        data_provider = DataServiceProvider

        initialize_args = {
            "did": ddo.did,
            "service": service,
            "consumer_address": consumer_address,
        }

        initialize_response = data_provider.initialize(**initialize_args)
        provider_fees = initialize_response.json()["providerFee"]

        receipt = dt.start_order(
            consumer=consumer_address,
            service_index=ddo.get_index_of_service(service),
            provider_fees=provider_fees,
            consume_market_fees=consume_market_fees,
            transaction_parameters={"from": wallet},
        )

        return receipt.txid
```
{% endcode %}

</details>

### Pays for Compute Service

* **pay\_for\_compute\_service**(`self`, `datasets: List[ComputeInput]`, `algorithm_data: Union[ComputeInput, AlgorithmMetadata]`, `compute_environment: str`, `valid_until: int`, `consume_market_order_fee_address: str`, `wallet`, `consumer_address: Optional[str] = None`)

Pays for compute service by calling `initializeCompute` endpoint from Provider to retrieve the provider fees and starting the order afterwards.

**Parameters**

* `datasets` - list of `ComputeInput` objects, each of them includes mandatory the DDO and service.
* `algorithm_data` - which can be either a `ComputeInput` object which contains the whole DDO and service, either provide just the algorithm metadata as `AlgorithmMetadata`.
* `compute_environment` - `string` that represents the ID from the chosen C2D environment.
* `valid_until` - `UNIX timestamp` which represents until when the algorithm can be used/run.
* `consume_market_order_fee_address` - string address which denotes the consume market fee address for that order and can be the wallet address itself.
* `wallet` - the `Brownie account` which pays for the compute service

**Optional parameters**

* `consumer_address` - is the string address of the C2D environment consumer.

**Returns**

`tuple`

Return value is a tuple composed of list of datasets and algorithm data (if exists in result), `(datasets, algorithm_data)`.

**Defined in**

[ocean/ocean_assets.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL573C5-L627C30)

<details>

<summary>Source code</summary>

```python
 @enforce_types
    def pay_for_compute_service(
        self,
        datasets: List[ComputeInput],
        algorithm_data: Union[ComputeInput, AlgorithmMetadata],
        compute_environment: str,
        valid_until: int,
        consume_market_order_fee_address: str,
        wallet,
        consumer_address: Optional[str] = None,
    ):
        data_provider = DataServiceProvider

        if not consumer_address:
            consumer_address = wallet.address

        initialize_response = data_provider.initialize_compute(
            [x.as_dictionary() for x in datasets],
            algorithm_data.as_dictionary(),
            datasets[0].service.service_endpoint,
            consumer_address,
            compute_environment,
            valid_until,
        )

        result = initialize_response.json()
        for i, item in enumerate(result["datasets"]):
            self._start_or_reuse_order_based_on_initialize_response(
                datasets[i],
                item,
                TokenFeeInfo(
                    consume_market_order_fee_address,
                    datasets[i].consume_market_order_fee_token,
                    datasets[i].consume_market_order_fee_amount,
                ),
                wallet,
                consumer_address,
            )

        if "algorithm" in result:
            self._start_or_reuse_order_based_on_initialize_response(
                algorithm_data,
                result["algorithm"],
                TokenFeeInfo(
                    address=consume_market_order_fee_address,
                    token=algorithm_data.consume_market_order_fee_token,
                    amount=algorithm_data.consume_market_order_fee_amount,
                ),
                wallet,
                consumer_address,
            )

            return datasets, algorithm_data

        return datasets, None
```

</details>

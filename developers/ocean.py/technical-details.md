---
description: Technical details about most used ocean.py functions
---

# Technical Details

At the beginning of most flows, we create an `ocean` object, which is an instance of class [`Ocean`](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean.py). It exposes useful information, including the following.

### Ocean Instance

Ocean class:

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/main/ocean_lib/ocean/ocean.py#L43"><code>Ocean</code> - The Ocean class is the entry point into Ocean Protocol.</a></summary>

In order to initialize a Ocean object, you must provide `config_dict` which is a `Dictionary` instance and optionally a `DataServiceProvider` instance.

[Here ](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean.py#LL43C1-L96C53)is the source code.

{% code overflow="wrap" %}
```python
class Ocean:
    """The Ocean class is the entry point into Ocean Protocol."""

    @enforce_types
    def __init__(self, config_dict: Dict, data_provider: Optional[Type] = None) -> None:
        """Initialize Ocean class.

        Usage: Make a new Ocean instance

        `ocean = Ocean({...})`

        This class provides the main top-level functions in ocean protocol:
        1. Publish assets metadata and associated services
            - Each asset is assigned a unique DID and a DID Document (DDO)
            - The DDO contains the asset's services including the metadata
            - The DID is registered on-chain with a URL of the metadata store
              to retrieve the DDO from

            `ddo = ocean.assets.create(metadata, publisher_wallet)`

        2. Discover/Search ddos via the current configured metadata store (Aquarius)

            - Usage:
            `ddos_list = ocean.assets.search('search text')`

        An instance of Ocean is parameterized by a `Config` instance.

        :param config_dict: variable definitions
        :param data_provider: `DataServiceProvider` instance
        """
        config_errors = {}
        for key, value in config_defaults.items():
            if key not in config_dict:
                config_errors[key] = "required"
                continue

            if not isinstance(config_dict[key], type(value)):
                config_errors[key] = f"must be {type(value).__name__}"

        if config_errors:
            raise Exception(json.dumps(config_errors))

        self.config_dict = config_dict

        network_name = config_dict["NETWORK_NAME"]
        check_network(network_name)

        if not data_provider:
            data_provider = DataServiceProvider

        self.assets = OceanAssets(self.config_dict, data_provider)
        self.compute = OceanCompute(self.config_dict, data_provider)

        logger.debug("Ocean instance initialized: ")
```
{% endcode %}

</details>

Config dict attribute:

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/main/ocean_lib/ocean/ocean.py#LL265C1-L268C32"><code>ocean.config_dict</code> or <code>ocean.config -> dict</code></a></summary>

It is a helper method for retrieving the user's configuration for ocean.py.\
It can be called only by Ocean object and returns a python dictionary.

```python
    @property
    @enforce_types
    def config(self) -> dict:  # alias for config_dict
        return self.config_dict
```

</details>

OCEAN token:

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/main/ocean_lib/ocean/ocean.py#LL100C1-L103C52"><code>ocean.OCEAN_address -> str</code></a></summary>

It is a helper method for retrieving the OCEAN's token address.\
It can be called only by Ocean object and returns the address as a `string`.

```python
 @property
    @enforce_types
    def OCEAN_address(self) -> str:
        return get_ocean_token_address(self.config)
```

[`get_ocean_token_address`](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/util.py#LL31C1-L38C89) function is an utilitary function which gets the address from `address.json` file

{% code overflow="wrap" %}
```python
@enforce_types
def get_ocean_token_address(config_dict: dict) -> str:
    """Returns the Ocean token address for given network or web3 instance
    Requires either network name or web3 instance.
    """
    addresses = get_contracts_addresses(config_dict)

    return Web3.toChecksumAddress(addresses.get("Ocean").lower()) if addresses else None
```
{% endcode %}

</details>

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/main/ocean_lib/ocean/ocean.py#LL105C1-L113C32"><code>ocean.OCEAN_token</code> or <code>ocean.OCEAN -> Datatoken</code></a></summary>

It is a helper method for retrieving the OCEAN token object (Datatoken class).\
It can be called within Ocean class and returns the OCEAN Datatoken.

```python
    @property
    @enforce_types
    def OCEAN_token(self) -> DatatokenBase:
        return DatatokenBase.get_typed(self.config, self.OCEAN_address)

    @property
    @enforce_types
    def OCEAN(self):  # alias for OCEAN_token
        return self.OCEAN_token
```

</details>

Ocean smart contracts:

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/main/ocean_lib/ocean/ocean.py#LL117C1-L120C80"><code>ocean.data_nft_factory -> DataNFTFactoryContract</code></a></summary>

It is a property for getting `Data NFT Factory` object for the singleton smart contract.\
It can be called within Ocean class and returns the `DataNFTFactoryContract` instance.

{% code overflow="wrap" %}
```python
@property
    @enforce_types
    def data_nft_factory(self) -> DataNFTFactoryContract:
        return DataNFTFactoryContract(self.config, self._addr("ERC721Factory"))
```
{% endcode %}

</details>

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/main/ocean_lib/ocean/ocean.py#LL122C1-L125C63"><code>ocean.dispenser -> Dispenser</code></a></summary>

`Dispenser` is represented by a faucet for free data.\
It is a property for getting `Dispenser` object for the singleton smart contract.\
It can be called within Ocean class and returns the `Dispenser` instance.

```python
    @property
    @enforce_types
    def dispenser(self) -> Dispenser:
        return Dispenser(self.config, self._addr("Dispenser"))
```

</details>

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/main/ocean_lib/ocean/ocean.py#LL127C1-L130C72"><code>ocean.fixed_rate_exchange -> FixedRateExchange</code></a></summary>

Exchange is used for priced data.\
It is a property for getting `FixedRateExchange` object for the singleton smart contract.\
It can be called within Ocean class and returns the `FixedRateExchange` instance.

```python
 @property
    @enforce_types
    def fixed_rate_exchange(self) -> FixedRateExchange:
        return FixedRateExchange(self.config, self._addr("FixedPrice"))
```

</details>

Simple getters:

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/main/ocean_lib/ocean/ocean.py#LL139C5-L145C51"><code>ocean.get_nft_token(self, token_address: str) -> DataNFT</code></a></summary>

It is a getter for a specific data NFT object based on its checksumed address.\
It can be called within Ocean class with a string `token_address` as parameter which returns the `DataNFT` instance.

```python
    @enforce_types
    def get_nft_token(self, token_address: str) -> DataNFT:
        """
        :param token_address: Token contract address, str
        :return: `DataNFT` instance
        """
        return DataNFT(self.config, token_address)
```

</details>

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/main/ocean_lib/ocean/ocean.py#LL147C5-L153C67"><code>ocean.get_datatoken(self, token_address: str) -> DatatokenBase</code></a></summary>

It is a getter for a specific `datatoken` object based on its checksumed address.\
It can be called within Ocean class with a string `token_address` as parameter which returns the `DatatokenBase` instance depending on datatoken's template index.

```python
@enforce_types
    def get_datatoken(self, token_address: str) -> DatatokenBase:
        """
        :param token_address: Token contract address, str
        :return: `Datatoken1` or `Datatoken2` instance
        """
        return DatatokenBase.get_typed(self.config, token_address)

```

</details>

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/main/ocean_lib/ocean/ocean.py#LL157C5-L173C23"><code>ocean.get_user_orders(self, address: str, datatoken: str)</code></a></summary>

Returns the list of orders that were made by a certain user on a specific datatoken.

As parameters:

1. `address` - ETH wallet address of that user
2. `datatoken` - datatoken address

\
It can be called within Ocean class.

{% code overflow="wrap" %}
```python
    @enforce_types
    def get_user_orders(self, address: str, datatoken: str) -> List[AttributeDict]:
        """
        :return: List of orders `[Order]`
        """
        dt = DatatokenBase.get_typed(self.config_dict, datatoken)
        _orders = []
        for log in dt.get_start_order_logs(address):
            a = dict(log.args.items())
            a["amount"] = int(log.args.amount)
            a["address"] = log.address
            a["transactionHash"] = log.transactionHash
            a = AttributeDict(a.items())

            _orders.append(a)

        return _orders
```
{% endcode %}



</details>

Provider fees:

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/main/ocean_lib/ocean/ocean.py#LL177C4-L189C1"><code>ocean.retrieve_provider_fees( self, ddo: DDO, access_service: Service, publisher_wallet ) -> dict:</code></a></summary>

Calls Provider to compute provider fees as dictionary for access service.

As parameters:

1. `ddo` - the data asset which has the DDO object
2. `access_service` - Service instance for the service that needs the provider fees
3. `publisher_wallet` - Wallet instance of the user that wants to retrieve the provider fees

{% code overflow="wrap" %}
```python
 @enforce_types
    def retrieve_provider_fees(
        self, ddo: DDO, access_service: Service, publisher_wallet
    ) -> dict:

        initialize_response = DataServiceProvider.initialize(
            ddo.did, access_service, consumer_address=publisher_wallet.address
        )
        initialize_data = initialize_response.json()
        provider_fees = initialize_data["providerFee"]

        return provider_fees
```
{% endcode %}

</details>

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/main/ocean_lib/ocean/ocean.py#LL190C4-L210C1"><code>ocean.retrieve_provider_fees_for_compute( self, datasets: List[ComputeInput], algorithm_data: Union[ComputeInput, AlgorithmMetadata], consumer_address: str, compute_environment: str, valid_until: int, ) -> dict:</code></a></summary>

Calls Provider to generate provider fees as dictionary for compute service.

As parameters:

1. `datasets` - list of `ComputeInput` which contains the data assets
2. `algorithm_data` - necessary data for algorithm and it can be either a `ComputeInput` object, either just the algorithm metadata, `AlgorithmMetadata`
3. `consumer_address` - address of the compute consumer wallet which is requesting the provider fees
4. `compute_environment` - id provided from the compute environment as `string`
5. `valid_until` - timestamp in UNIX miliseconds for the duration of provider fees for the compute service.

{% code overflow="wrap" %}
```python
@enforce_types
    def retrieve_provider_fees_for_compute(
        self,
        datasets: List[ComputeInput],
        algorithm_data: Union[ComputeInput, AlgorithmMetadata],
        consumer_address: str,
        compute_environment: str,
        valid_until: int,
    ) -> dict:

        initialize_compute_response = DataServiceProvider.initialize_compute(
            [x.as_dictionary() for x in datasets],
            algorithm_data.as_dictionary(),
            datasets[0].service.service_endpoint,
            consumer_address,
            compute_environment,
            valid_until,
        )

        return initialize_compute_response.json()
```
{% endcode %}

</details>

### Ocean Assets

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL178C1-L185C82"><code>ocean.assets.create_url_asset( self, name: str, url: str, publisher_wallet, wait_for_aqua: bool = True ) -> tuple</code></a></summary>

It is the most used functions in all the READMEs.

Creates asset of type "dataset", having `UrlFiles`, with good defaults.

It can be called after instantiating Ocean object.

Params:

1. `name` - name of the asset, `string`
2. `url` - url that is stored in the asset, `string`
3. `publisher_wallet` - wallet of the asset publisher/owner, `Brownie account`
4. `wait_for_aqua` - boolean value which default is `True`, waiting for aquarius to fetch the asset takes additional time, but if you want to be sure that your asset is indexed, keep the default value.

Return:

A tuple which contains the data NFT, datatoken and the data asset.

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

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL146C4-L176C82"><code>ocean.assets.create_algo_asset( self, name: str, url: str, publisher_wallet, image: str = "oceanprotocol/algo_dockers", tag: str = "python-branin", checksum: str = "sha256:8221d20c1c16491d7d56b9657ea09082c0ee4a8ab1a6621fa720da58b09580e4", wait_for_aqua: bool = True) -> tuple</code></a></summary>

Create asset of type "algorithm", having `UrlFiles`, with good defaults

It can be called after instantiating Ocean object.

Params:

1. `name` - name of the asset, `string`
2. `url` - url that is stored in the asset, `string`
3. `publisher_wallet` - wallet of the asset publisher/owner, `Brownie account`
4. `image` - docker image of that algorithm, `string`
5. `tag` - docker tag for that algorithm image, `string`
6. `checksum` - docker checksum for algorithm's image, `string`
7. `wait_for_aqua` - boolean value which default is `True`, waiting for aquarius to fetch the asset takes additional time, but if you want to be sure that your asset is indexed, keep the default value.

Return:

A tuple which contains the algorithm NFT, algorithm datatoken and the algorithm asset.

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

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL187C5-L198C82"><code>ocean.assets.create_arweave_asset( self, name: str, transaction_id: str, publisher_wallet, wait_for_aqua: bool = True) -> tuple</code></a></summary>

Creates asset of type "data", having `ArweaveFile`, with good defaults.

It can be called after instantiating Ocean object.

Params:

1. `name` - name of the asset, `string`
2. `transaction_id` - transaction id from the arweave file, `string`
3. `publisher_wallet` - wallet of the asset publisher/owner, `Brownie account`
4. `wait_for_aqua` - boolean value which default is `True`, waiting for aquarius to fetch the asset takes additional time, but if you want to be sure that your asset is indexed, keep the default value.

Return:

A tuple which contains the data NFT, datatoken and the data asset.

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

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL200C5-L212C82"><code>ocean.assets.create_graphql_asset( self, name: str, url: str, query: str, publisher_wallet, wait_for_aqua: bool = True, ) -> tuple</code></a></summary>

Creates asset of type "data", having `GraphqlQuery` files, with good defaults.

It can be called after instantiating Ocean object.

Params:

1. `name` - name of the asset, `string`
2. `url` - url of subgraph that you are using, `string`
3. `query` - GraphQL query, `string`
4. `publisher_wallet` - wallet of the asset publisher/owner, `Brownie account`
5. `wait_for_aqua` - boolean value which default is `True`, waiting for aquarius to fetch the asset takes additional time, but if you want to be sure that your asset is indexed, keep the default value.

Return:

A tuple which contains the data NFT, datatoken and the data asset.

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

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL214C5-L229C1"><code>ocean.assets.create_onchain_asset( self, name: str, contract_address: str, contract_abi: dict, publisher_wallet, wait_for_aqua: bool = True ) -> tuple</code></a></summary>

Creates asset of type "data", having `SmartContractCall` files, with good defaults.

It can be called after instantiating Ocean object.

Params:

1. `name` - name of the asset, `string`
2. `contract_address` - contract address that should be stored in the asset, `string`
3. `contract_abi` - ABI of functions presented in the contract, `string`
4. `publisher_wallet` - wallet of the asset publisher/owner, `Brownie account`
5. `wait_for_aqua` - boolean value which default is `True`, waiting for aquarius to fetch the asset takes additional time, but if you want to be sure that your asset is indexed, keep the default value.

Return:

A tuple which contains the data NFT, datatoken and the data asset.

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

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL259C5-L390C43"><code>ocean.assets.create( self, metadata: dict, publisher_wallet, credentials: Optional[dict] = None, data_nft_address: Optional[str] = None, data_nft_args: Optional[DataNFTArguments] = None, deployed_datatokens: Optional[List[Datatoken]] = None, services: Optional[list] = None, datatoken_args: Optional[List["DatatokenArguments"]] = None, encrypt_flag: Optional[bool] = True, compress_flag: Optional[bool] = True, wait_for_aqua: bool = True, ) -> Optional[DDO]</code></a></summary>



Register an asset on-chain. Asset = {data\_NFT, >=0 datatokens, DDO}

Creating/deploying a DataNFT contract and in the Metadata store (Aquarius).

Params:

* `metadata`: `dictionary` conforming to the Metadata accepted by Ocean Protocol.&#x20;
* `publisher_wallet`- `Brownie account` of the publisher registering this asset.
* `credentials` - credentials `dictionary` necessary for the asset, which establish who can consume the asset and who cannot.
* `data_nft_address`- hex string, the address of the data NFT. The new asset will be associated with this data NFT address.
* `data_nft_args`- object of DataNFTArguments type if creating a new one.
* `deployed_datatokens`- list of datatokens which are already deployed.
* `services` - list of `Service` objects if you want to run multiple services for a datatoken or you have multiple datatokens with a single service each.
* `datatoken_args` - list of objects  of `DatatokenArguments` type if creating a new datatokens.
* `encrypt_flag`- bool for encryption of the DDO.
* `compress_flag`- bool for compression of the DDO.
* `wait_for_aqua`- bool for spending time waiting for DDO to be updated in Aquarius.

Return:

A tuple which contains the data NFT, datatoken and the data asset.

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



</details>

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL392C5-L454C19"><code>ocean.assets.update( self, ddo: DDO, publisher_wallet, provider_uri: Optional[str] = None, encrypt_flag: Optional[bool] = True, compress_flag: Optional[bool] = True, ) -> Optional[DDO]</code></a></summary>

Updates a ddo on-chain.

Params:

* `ddo` - DDO to update
* `publisher_wallet` - who published this DDO
* `provider_uri` - URL of service provider. This will be used as base to construct the serviceEndpoint for the `access` (download) service.
* `encrypt_flag` - boolean value for encryption the DDO
* `compress_flag` - boolean value for compression the DDO

Return:

The updated DDO, or `None` if updated DDO not found in Aquarius.

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

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL456C5-L458C43"><code>ocean.assets.resolve(self, did: str) -> "DDO"</code></a></summary>

Resolves the asset from Metadata Cache store (Aquarius).

Param:

* did - identifier of the DDO to be searched & resolved in Aquarius

Return:

Returns DDO instance.

```python
@enforce_types
    def resolve(self, did: str) -> "DDO":
        return self._aquarius.get_ddo(did)
```

</details>

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL460C4-L475C10"><code>ocean.assets.search(self, text: str) -> list</code></a></summary>

Searches a DDO by a specific text.

Param:

* `text` - string text to search for assets which include it.

Return:

A list of DDOs which have matches with the text provided as parameter.

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

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL477C4-L490C10"><code>ocean.assets.query(self, query: dict) -> list</code></a></summary>

Searches a DDO by a specific query.

Param:

* `query` - dictionary type query to search for assets which include it.

Return:

A list of DDOs which have matches with the query provided as parameter.

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

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL492C5-L516C20"><code>ocean.assets.download_asset( self, ddo: DDO, consumer_wallet, destination: str, order_tx_id: Union[str, bytes], service: Optional[Service] = None, index: Optional[int] = None, userdata: Optional[dict] = None, ) -> str</code></a></summary>

Downloads the asset from Ocean Market.

Params:

* `ddo` - DDO to be downloaded.
* `consumer_wallet` - Brownie account for the wallet that "ordered" the asset.
* `destination` - destination path, as string, where the asset will be downloaded.
* `order_tx_id` - transaction ID for the placed order, string and bytes formats are accepted.

Optional params:

* `service` - optionally if you want to provide the `Service` object through you downloaded the asset.
* `index` - optionally if you want to download certain files, not the whole asset, you can specify how many files you want to download as positive `integer` format.
* `userdata` - `dictionary` additional data from user.

Return:

The full path to the downloaded file as `string`.

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

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL518C5-L571C28"><code>ocean.assets.pay_for_access_service( self, ddo: DDO, wallet, service: Optional[Service] = None, consume_market_fees: Optional[TokenFeeInfo] = None, consumer_address: Optional[str] = None, userdata: Optional[dict] = None, )</code></a></summary>

Pays for access service by calling initialize endpoint from Provider and starting the order.

Params:

* `ddo` - DDO to be downloaded.
* `wallet`- Brownie account for the wallet that pays for the asset.

Optional params:

* `service` - optionally if you want to provide the `Service` object through you downloaded the asset.
* `consume_market_fees` - `TokenFeeInfo` object which contains consume market fee address, amount and token address.
* `consumer_address` - address for the consumer which pays for the access.
* `userdata` - `dictionary` additional data from user.

Return value is a hex string for transaction hash which denotes the proof of starting order.

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

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/ocean/ocean_assets.py#LL573C5-L627C30"><code>ocean.assets.pay_for_compute_service( self, datasets: List[ComputeInput], algorithm_data: Union[ComputeInput, AlgorithmMetadata], compute_environment: str, valid_until: int, consume_market_order_fee_address: str, wallet, consumer_address: Optional[str] = None, )</code></a></summary>

Pays for compute service by calling `initializeCompute` endpoint from Provider to retrieve the provider fees and starting the order afterwards.

Params:

* `datasets` - list of `ComputeInput` objects, each of them includes mandatory the DDO and service.
* `algorithm_data` - which can be either a `ComputeInput` object which contains the whole DDO and service, either provide just the algorithm metadata as `AlgorithmMetadata`.
* `compute_environment` - `string` that represents the ID from the chosen C2D environemnt.
* `valid_until` - `UNIX timestamp` which represents until when the algorithm can be used/run.
* `consume_market_order_fee_address` - string address which denotes the consume market fee address for that order and can be the wallet address itself.
* `wallet` - the `Brownie account` which pays for the compute service

Optional params:

* `consumer_address` - is the string address of the C2D environment consumer.

Return value is a tuple composed of list of datasets and algorithm data (if exists in result), `(datasets, algorithm_data)`.

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

### Ocean Compute

### Datatoken Interface

Dispenser utils:

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/models/datatoken.py#LL336C5-L377C18"><code>datatoken.create_dispenser(self, tx_dict: dict, max_tokens: Optional[Union[int, str]] = None, max_balance: Optional[Union[int, str]] = None, with_mint: Optional[bool] = True)</code></a></summary>

Through datatoken, you can deploy a new dispenser schema which is used for creating free assets, because its behaviour is similar with a faucet. ⛲

It is implemented in DatatokenBase, inherited by Datatoken2, so it can be called within both instances.

Each parameter has the following meaning:

1. `tx_dict` - is the configuration `dictionary` for that specific transaction. Usually for `development` we include just the `from` wallet, but for remote networks, you can provide gas fees, required confirmations for that block etc. For more info, check [Brownie docs](https://eth-brownie.readthedocs.io/en/stable/).
2. `max_tokens` - maximum amount of tokens to dispense in wei. The default is a large number.
3. `max_balance` - maximum balance of requester in wei. The default is a large number.
4. `with_mint` - boolean, `true` if we want to allow the dispenser to be a minter as default value

Return value is a hex string which denotes the transaction hash of dispenser deployment.

```python
@enforce_types
    def create_dispenser(
        self,
        tx_dict: dict,
        max_tokens: Optional[Union[int, str]] = None,
        max_balance: Optional[Union[int, str]] = None,
        with_mint: Optional[bool] = True,
    ):
        """
        For this datataken, create a dispenser faucet for free tokens.

        This wraps the smart contract method Datatoken.createDispenser()
          with a simpler interface.

        :param: max_tokens - max # tokens to dispense, in wei
        :param: max_balance - max balance of requester
        :tx_dict: e.g. {"from": alice_wallet}
        :return: tx
        """
        # already created, so nothing to do
        if self.dispenser_status().active:
            return

        # set max_tokens, max_balance if needed
        max_tokens = max_tokens or MAX_UINT256
        max_balance = max_balance or MAX_UINT256

        # args for contract tx
        dispenser_addr = get_address_of_type(self.config_dict, "Dispenser")
        with_mint = with_mint  # True -> can always mint more
        allowed_swapper = ZERO_ADDRESS  # 0 -> so anyone can call dispense

        # do contract tx
        tx = self.createDispenser(
            dispenser_addr,
            max_tokens,
            max_balance,
            with_mint,
            allowed_swapper,
            tx_dict,
        )
        return tx
```



</details>

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/models/datatoken.py#LL379C5-L400C18"><code>datatoken.dispense(self, amount: Union[int, str], tx_dict: dict)</code></a></summary>

This function is used to retrieve funds or datatokens for an user who wants to start an order.

It is implemented in DatatokenBase, so it can be called within Datatoken class.

Each parameter has the following meaning:

1. `amount` - amount of datatokens to be dispensed in wei (int or string format)
2. `tx_dict` - is the configuration `dictionary` for that specific transaction. Usually for `development` we include just the `from` wallet, but for remote networks, you can provide gas fees, required confirmations for that block etc. For more info, check [Brownie docs](https://eth-brownie.readthedocs.io/en/stable/).

Return value is a hex string which denotes the transaction hash of dispensed datatokens, like a proof.

```python
    @enforce_types
    def dispense(self, amount: Union[int, str], tx_dict: dict):
        """
        Dispense free tokens via the dispenser faucet.

        :param: amount - number of tokens to dispense, in wei
        :tx_dict: e.g. {"from": alice_wallet}
        :return: tx
        """
        # args for contract tx
        datatoken_addr = self.address
        from_addr = (
            tx_dict["from"].address
            if hasattr(tx_dict["from"], "address")
            else tx_dict["from"]
        )

        # do contract tx
        tx = self._ocean_dispenser().dispense(
            datatoken_addr, amount, from_addr, tx_dict
        )
        return tx
```

</details>

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/models/datatoken.py#LL439C5-L483C1"><code>datatoken.dispense_and_order(self, consumer: str, service_index: int, provider_fees: dict, transaction_parameters: dict, consume_market_fees=None)</code></a></summary>

This function is used to retrieve funds or datatokens for an user who wants to start an order.

It is implemented in Datatoken2, so it can be called within Datatoken2 class (using the enterprise template).

Each parameter has the following meaning:

1. `consumer` - address of the consumer wallet that needs funding
2. `service_index` - service index as int for identifying the service that you want to further call [`start_order`](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#LL169C5-L197C10).
3. `transaction_parameters` - is the configuration `dictionary` for that specific transaction. Usually for `development` we include just the `from` wallet, but for remote networks, you can provide gas fees, required confirmations for that block etc. For more info, check [Brownie docs](https://eth-brownie.readthedocs.io/en/stable/).
4. `consume_market_fees` - [`TokenInfo` ](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#L31)object which contains the consume market fee amount, address & token address. If it is not explicitly specified, by default it has an empty `TokenInfo` object.

Return value is a hex string which denotes the transaction hash of dispensed datatokens, like a proof of starting order.

```python
def dispense_and_order(
        self,
        consumer: str,
        service_index: int,
        provider_fees: dict,
        transaction_parameters: dict,
        consume_market_fees=None,
    ) -> str:
        if not consume_market_fees:
            consume_market_fees = TokenFeeInfo()

        buyer_addr = (
            transaction_parameters["from"].address
            if hasattr(transaction_parameters["from"], "address")
            else transaction_parameters["from"]
        )

        bal = from_wei(self.balanceOf(buyer_addr))
        if bal < 1.0:
            dispenser_addr = get_address_of_type(self.config_dict, "Dispenser")
            from ocean_lib.models.dispenser import Dispenser  # isort: skip

            dispenser = Dispenser(self.config_dict, dispenser_addr)

            # catch key failure modes
            st = dispenser.status(self.address)
            active, allowedSwapper = st[0], st[6]
            if not active:
                raise ValueError("No active dispenser for datatoken")
            if allowedSwapper not in [ZERO_ADDRESS, buyer_addr]:
                raise ValueError(f"Not allowed. allowedSwapper={allowedSwapper}")

            # Try to dispense. If other issues, they'll pop out
            dispenser.dispense(
                self.address, "1 ether", buyer_addr, transaction_parameters
            )

        return self.start_order(
            consumer=ContractBase.to_checksum_address(consumer),
            service_index=service_index,
            provider_fees=provider_fees,
            consume_market_fees=consume_market_fees,
            transaction_parameters=transaction_parameters,
        )
```

</details>

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/models/datatoken.py#LL402C1-L409C43"><code>datatoken.dispenser_status(self) -> DispenserStatus</code></a></summary>

Returns a `DispenserStatus` object returned from `Dispenser.sol::status(dt_addr)` which is composed of:

* bool active
* address owner
* bool isMinter
* uint256 maxTokens
* uint256 maxBalance
* uint256 balance
* address allowedSwapper

These are Solidity return values & types, but `uint256` means int in Python and `address` is a `string` instance.

For tips & tricks, check [this section](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/READMEs/main-flow.md#faucet-tips--tricks) from the [README](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/READMEs/main-flow.md).

It is implemented in DatatokenBase, inherited by Datatoken2, so it can be called within both instances.

```python
@enforce_types
    def dispenser_status(self):
        """:return: DispenserStatus object"""
        # import here to avoid circular import
        from ocean_lib.models.dispenser import DispenserStatus

        status_tup = self._ocean_dispenser().status(self.address)
        return DispenserStatus(status_tup)
```

</details>

Fixed Rate Exchange utils:

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/models/datatoken.py#LL236C4-L310C1"><code>datatoken.create_exchange(self, rate: Union[int, str], base_token_addr: str, tx_dict: dict, owner_addr: Optional[str] = None, publish_market_fee_collector: Optional[str] = None, publish_market_fee: Union[int, str] = 0, with_mint: bool = False, allowed_swapper: str = ZERO_ADDRESS, full_info: bool = False) -> Union[OneExchange, tuple]</code></a></summary>

It is implemented in DatatokenBase, inherited by Datatoken2, so it can be called within both instances.

For this datatoken, create a single fixed-rate exchange (OneExchange).

This wraps the smart contract method `Datatoken.createFixedRate()` with a simpler interface.

Main params:

* `rate` - how many base tokens does 1 datatoken cost? In wei or string
* `base_token_addr` - e.g. OCEAN address
* `tx_dict` -  is the configuration `dictionary` for that specific transaction. Usually for `development` we include just the `from` wallet, but for remote networks, you can provide gas fees, required confirmations for that block etc. For more info, check [Brownie docs](https://eth-brownie.readthedocs.io/en/stable/).

Optional params, with good defaults:

* `owner_addr` - owner of the datatoken
* `publish_market_fee_collector` - fee going to publish market address
* `publish_market_fee` - in wei or string, e.g. `int(1e15)` or `"0.001 ether"`
* `with_mint` - should the exchange mint datatokens as needed (`True`), or do they need to be supplied/allowed by participants like base token (`False`)?
* `allowed_swapper` - if `ZERO_ADDRESS`, anyone can swap
* `full_info` - return just `OneExchange`, or `(OneExchange, <other info>)`

Return

* `exchange` - OneExchange
* (maybe) `tx_receipt`

{% code overflow="wrap" %}
```python
@enforce_types
    def create_exchange(
        self,
        rate: Union[int, str],
        base_token_addr: str,
        tx_dict: dict,
        owner_addr: Optional[str] = None,
        publish_market_fee_collector: Optional[str] = None,
        publish_market_fee: Union[int, str] = 0,
        with_mint: bool = False,
        allowed_swapper: str = ZERO_ADDRESS,
        full_info: bool = False,
    ) -> Union[OneExchange, tuple]:
    
        # import now, to avoid circular import
        from ocean_lib.models.fixed_rate_exchange import OneExchange

        FRE_addr = get_address_of_type(self.config_dict, "FixedPrice")
        from_addr = (
            tx_dict["from"].address
            if hasattr(tx_dict["from"], "address")
            else tx_dict["from"]
        )
        BT = Datatoken(self.config_dict, base_token_addr)
        owner_addr = owner_addr or from_addr
        publish_market_fee_collector = publish_market_fee_collector or from_addr

        tx = self.contract.createFixedRate(
            checksum_addr(FRE_addr),
            [
                checksum_addr(BT.address),
                checksum_addr(owner_addr),
                checksum_addr(publish_market_fee_collector),
                checksum_addr(allowed_swapper),
            ],
            [
                BT.decimals(),
                self.decimals(),
                rate,
                publish_market_fee,
                with_mint,
            ],
            tx_dict,
        )

        exchange_id = tx.events["NewFixedRate"]["exchangeId"]
        FRE = self._FRE()
        exchange = OneExchange(FRE, exchange_id)
        if full_info:
            return (exchange, tx)
        return exchange
```
{% endcode %}

</details>

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/models/datatoken.py#LL484C4-L518C10"><code>datatoken.buy_DT_and_order(self, consumer: str, service_index: int, provider_fees: dict, exchange: Any, transaction_parameters: dict, consume_market_fees=None, ) -> str:</code></a></summary>

This function is used to retrieve funds or datatokens for an user who wants to start an order.

It is implemented in Datatoken class and it is also inherited in Datatoken2 class.

Each parameter has the following meaning:

1. `consumer` - address of the consumer wallet that needs funding
2. `service_index` - service index as int for identifying the service that you want to further call [`start_order`](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#LL169C5-L197C10).
3. `transaction_parameters` - is the configuration `dictionary` for that specific transaction. Usually for `development` we include just the `from` wallet, but for remote networks, you can provide gas fees, required confirmations for that block etc. For more info, check [Brownie docs](https://eth-brownie.readthedocs.io/en/stable/).
4. `consume_market_fees` - [`TokenInfo` ](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#L31)object which contains the consume market fee amount, address & token address. If it is not explicitly specified, by default it has an empty `TokenInfo` object.

Return value is a hex string for transaction hash which denotes the proof of starting order.

```python
 @enforce_types
    def buy_DT_and_order(
        self,
        consumer: str,
        service_index: int,
        provider_fees: dict,
        exchange: Any,
        transaction_parameters: dict,
        consume_market_fees=None,
    ) -> str:
        fre_address = get_address_of_type(self.config_dict, "FixedPrice")

        # import now, to avoid circular import
        from ocean_lib.models.fixed_rate_exchange import OneExchange

        if not consume_market_fees:
            consume_market_fees = TokenFeeInfo()

        if not isinstance(exchange, OneExchange):
            exchange = OneExchange(fre_address, exchange)

        exchange.buy_DT(
            datatoken_amt=to_wei(1),
            consume_market_fee_addr=consume_market_fees.address,
            consume_market_fee=consume_market_fees.amount,
            tx_dict=transaction_parameters,
        )

        return self.start_order(
            consumer=ContractBase.to_checksum_address(consumer),
            service_index=service_index,
            provider_fees=provider_fees,
            consume_market_fees=consume_market_fees,
            transaction_parameters=transaction_parameters,
        )
```

</details>

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/models/datatoken.py#LL311C4-L322C25"><code>datatoken.get_exchanges(self) -> list</code></a></summary>

Returns `List[OneExchange]` - all the exchanges for this datatoken.

It is implemented in DatatokenBase, inherited by Datatoken2, so it can be called within both instances.

{% code overflow="wrap" %}
```python
@enforce_types
    def get_exchanges(self) -> list:
        """return List[OneExchange] - all the exchanges for this datatoken"""
        # import now, to avoid circular import
        from ocean_lib.models.fixed_rate_exchange import OneExchange

        FRE = self._FRE()
        addrs_and_exchange_ids = self.getFixedRates()
        exchanges = [
            OneExchange(FRE, exchange_id) for _, exchange_id in addrs_and_exchange_ids
        ]
        return exchanges

```
{% endcode %}

</details>

Orders:

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/models/datatoken.py#LL169C5-L197C10"><code>datatoken.start_order( self, consumer: str, service_index: int, provider_fees: dict, transaction_parameters: dict, consume_market_fees=None, ) -> str</code></a></summary>

Starting order of a certain datatoken.

It is implemented in Datatoken class and it is also inherited in Datatoken2 class.

Each parameter has the following meaning:

1. `consumer` - address of the consumer wallet that needs funding
2. `service_index` - service index as int for identifying the service that you want to apply `start_order`.
3. `provider_fees` - dictionary which includes provider fees generated when `initialize` endpoint from `Provider` was called.
4. `transaction_parameters` - is the configuration `dictionary` for that specific transaction. Usually for `development` we include just the `from` wallet, but for remote networks, you can provide gas fees, required confirmations for that block etc. For more info, check [Brownie docs](https://eth-brownie.readthedocs.io/en/stable/).
5. `consume_market_fees` - [`TokenInfo` ](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#L31)object which contains the consume market fee amount, address & token address. If it is not explicitly specified, by default it has an empty `TokenInfo` object.

Return value is a hex string for transaction hash which denotes the proof of starting order.

```python
@enforce_types
    def start_order(
        self,
        consumer: str,
        service_index: int,
        provider_fees: dict,
        transaction_parameters: dict,
        consume_market_fees=None,
    ) -> str:

        if not consume_market_fees:
            consume_market_fees = TokenFeeInfo()

        return self.contract.startOrder(
            checksum_addr(consumer),
            service_index,
            (
                checksum_addr(provider_fees["providerFeeAddress"]),
                checksum_addr(provider_fees["providerFeeToken"]),
                int(provider_fees["providerFeeAmount"]),
                provider_fees["v"],
                provider_fees["r"],
                provider_fees["s"],
                provider_fees["validUntil"],
                provider_fees["providerData"],
            ),
            consume_market_fees.to_tuple(),
            transaction_parameters,
        )
```

</details>

<details>

<summary><a href="https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean_lib/models/datatoken.py#LL199C5-L219C10"><code>datatoken.reuse_order(self, order_tx_id: Union[str, bytes], provider_fees: dict, transaction_parameters: dict) -> str</code></a></summary>

Reusing an order from a certain datatoken.

It is implemented in Datatoken class and it is also inherited in Datatoken2 class.

Each parameter has the following meaning:

1. `order_tx_id` - transaction hash of a previous order, string or bytes format.
2. `provider_fees` - dictionary which includes provider fees generated when `initialize` endpoint from `Provider` was called.
3. `transaction_parameters` - is the configuration `dictionary` for that specific transaction. Usually for `development` we include just the `from` wallet, but for remote networks, you can provide gas fees, required confirmations for that block etc. For more info, check [Brownie docs](https://eth-brownie.readthedocs.io/en/stable/).

Return value is a hex string for transaction hash which denotes the proof of reusing order.

```python
    @enforce_types
    def reuse_order(
        self,
        order_tx_id: Union[str, bytes],
        provider_fees: dict,
        transaction_parameters: dict,
    ) -> str:
        return self.contract.reuseOrder(
            order_tx_id,
            (
                checksum_addr(provider_fees["providerFeeAddress"]),
                checksum_addr(provider_fees["providerFeeToken"]),
                int(provider_fees["providerFeeAmount"]),
                provider_fees["v"],
                provider_fees["r"],
                provider_fees["s"],
                provider_fees["validUntil"],
                provider_fees["providerData"],
            ),
            transaction_parameters,
        )
```

</details>


---
description: Technical details about most used ocean.py functions
---

# Technical Details

At the beginning of most flows, we create an `ocean` object, which is an instance of class [`Ocean`](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean.py). It exposes useful information, including the following.

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

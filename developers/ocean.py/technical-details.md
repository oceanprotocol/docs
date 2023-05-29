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

* `ocean.data_nft_factory -> DataNFTFactoryContract`
* `ocean.dispenser -> Dispenser` - faucets for free data
* `ocean.fixed_rate_exchange -> FixedRateExchange` - exchanges for priced data

Simple getters:

* `ocean.get_nft_token(self, token_address: str) -> DataNFT`
* `ocean.get_datatoken(self, token_address: str) -> Datatoken`
* `ocean.get_user_orders(self, address: str, datatoken: str)`

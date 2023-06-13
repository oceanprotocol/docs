---
description: Technical details about most used ocean.py functions
---

# Ocean Instance Tech Details

At the beginning of most flows, we create an `ocean` object, which is an instance of class [`Ocean`](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean.py). It exposes useful information, including the following:

* properties for config & OCEAN token
* contract objects retrieval
* users' orders
* provider fees

### Constructor

* **\_\_init\_\_**(`self`, `config_dict: Dict`, `data_provider: Optional[Type] = None`)

The Ocean class is the entry point into Ocean Procol.

In order to initialize a Ocean object, you must provide `config_dict` which is a `Dictionary` instance and optionally a `DataServiceProvider` instance.

**Parameters**

* `config_dict`: `dict` which is mandatory and it contains the configuration as dictionary format.
* `data_provider`: `Optional[DataProvider]` which is optional with a default value of None. If it is not provided, the constructor will instantiate a new one from scratch.

**Returns**

`None`

**Defined in**

[ocean/ocean.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean.py#L43)

<details>

<summary>Source code</summary>

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

### Config Getter

* **config**(`self`) -> `dict`

It is a helper method for retrieving the user's configuration for ocean.py.\
It can be called only by Ocean object and returns a python dictionary.

**Returns**

`dict`

Configuration fields as dictionary.

**Defined in**

[ocean/ocean.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean.py#LL265C1-L268C32)

<details>

<summary>Source code</summary>

```python
@property
    @enforce_types
    def config(self) -> dict:  # alias for config_dict
        return self.config_dict
```

</details>

### OCEAN Token Address

* **OCEAN\_address**(`self`) -> `str`

It is a helper method for retrieving the OCEAN's token address.\
It can be called only by Ocean object and returns the address as a `string`.

**Returns**

`str`

OCEAN token address for that network.

**Defined in**

[ocean/ocean.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean.py#LL100C1-L103C52)

<details>

<summary>Source code</summary>

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

### OCEAN Token Object

* **OCEAN\_token**(`self`) -> `DatatokenBase`
* **OCEAN**(`self`) -> `DatatokenBase` as alias for the above option

It is a helper method for retrieving the OCEAN token object (Datatoken class).\
It can be called within Ocean class and returns the OCEAN Datatoken.

**Returns**

`DatatokenBase`

OCEAN token as `DatatokenBase` object.

**Defined in**

[ocean/ocean.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean.py#LL105C1-L113C32)

<details>

<summary>Source code</summary>

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

### Data NFT Factory

* **data\_nft\_factory**(`self`) -> `DataNFTFactoryContract`

It is a property for getting `Data NFT Factory` object for the singleton smart contract.\
It can be called within Ocean class and returns the `DataNFTFactoryContract` instance.

**Returns**

`DataNFTFactoryContract`

Data NFT Factory contract object which access all the functionalities available from smart contracts in Python.

**Defined in**

[ocean/ocean.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean.py#LL117C1-L120C80)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
@property
    @enforce_types
    def data_nft_factory(self) -> DataNFTFactoryContract:
        return DataNFTFactoryContract(self.config, self._addr("ERC721Factory"))
```
{% endcode %}

</details>

### Dispenser

* **dispenser**(`self`) -> `Dispenser`

`Dispenser` is represented by a faucet for free data.\
It is a property for getting `Dispenser` object for the singleton smart contract.\
It can be called within Ocean class and returns the `Dispenser` instance.

**Returns**

`Dispenser`

Dispenser contract object which access all the functionalities available from smart contracts in Python.

**Defined in**

[ocean/ocean.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean.py#LL122C1-L125C63)

<details>

<summary>Source code</summary>

```python
    @property
    @enforce_types
    def dispenser(self) -> Dispenser:
        return Dispenser(self.config, self._addr("Dispenser"))
```

</details>

### Fixed Rate Exchange

* **fixed\_rate\_exchange**(`self`) -> `FixedRateExchange`

Exchange is used for priced data.\
It is a property for getting `FixedRateExchange` object for the singleton smart contract.\
It can be called within Ocean class and returns the `FixedRateExchange` instance.

**Returns**

`FixedRateExchange`

Fixed Rate Exchange contract object which access all the functionalities available from smart contracts in Python.

**Defined in**

[ocean/ocean.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean.py#LL127C1-L130C72)

<details>

<summary>Source code</summary>

```python
 @property
    @enforce_types
    def fixed_rate_exchange(self) -> FixedRateExchange:
        return FixedRateExchange(self.config, self._addr("FixedPrice"))
```

</details>

### NFT Token Getter

* **get\_nft\_token**(`self`, `token_adress: str`) -> `DataNFT`

It is a getter for a specific data NFT object based on its checksumed address.\
It can be called within Ocean class which returns the `DataNFT` instance based on string `token_address` specified as parameter.

**Parameters**

* `token_address` - string checksumed address of the NFT token that you are searching for.

**Returns**

`DataNFT`

Data NFT object which access all the functionalities available for ERC721 template in Python.

**Defined in**

[ocean/ocean.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean.py#LL139C5-L145C51)

<details>

<summary>Source code</summary>

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

### Datatoken Getter

* **get\_datatoken**(`self`, `token_address: str`) -> `DatatokenBase`

It is a getter for a specific `datatoken` object based on its checksumed address.\
It can be called within Ocean class with a string `token_address` as parameter which returns the `DatatokenBase` instance depending on datatoken's template index.

**Parameters**

* `token_address` - string checksumed address of the datatoken that you are searching for.

**Returns**

`DatatokenBase`

Datatoken object which access all the functionalities available for ERC20 templates in Python.

**Defined in**

[ocean/ocean.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean.py#LL147C5-L153C67)

<details>

<summary>Source code</summary>

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

### User Orders Getter

* **get\_user\_orders**(`self`, `address: str`, `datatoken: str`) -> `List[AttributeDict]`

Returns the list of orders that were made by a certain user on a specific datatoken.

It can be called within Ocean class.

**Parameters**

* `address` - wallet address of that user
* `datatoken` - datatoken address

**Returns**

`List[AttributeDict]`

List of all the orders on that `datatoken` done by the specified `user`.

**Defined in**

[ocean/ocean.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean.py#LL157C5-L173C23)

<details>

<summary>Source code</summary>

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

### Provider Fees

* **retrieve\_provider\_fees**( `self`, `ddo: DDO`, `access_service: Service`, `publisher_wallet` ) -> `dict`

Calls Provider to compute provider fees as dictionary for access service.

**Parameters**

* `ddo` - the data asset which has the DDO object
* `access_service` - Service instance for the service that needs the provider fees
* `publisher_wallet` - Wallet instance of the user that wants to retrieve the provider fees

**Returns**

`dict`

A dictionary which contains the following keys (`providerFeeAddress`, `providerFeeToken`, `providerFeeAmount`, `providerData`, `v`, `r`, `s`, `validUntil`).

**Defined in**

[ocean/ocean.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean.py#LL177C4-L189C1)

<details>

<summary>Source code</summary>

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

### Compute Provider Fees

* **retrieve\_provider\_fees\_for\_compute**(`self`, `datasets: List[ComputeInput]`, `algorithm_data: Union[ComputeInput, AlgorithmMetadata]`, `consumer_address: str`, `compute_environment: str`, `valid_until: int`) -> `dict`

Calls Provider to generate provider fees as dictionary for compute service.

**Parameters**

* `datasets` - list of `ComputeInput` which contains the data assets
* `algorithm_data` - necessary data for algorithm and it can be either a `ComputeInput` object, either just the algorithm metadata, `AlgorithmMetadata`
* `consumer_address` - address of the compute consumer wallet which is requesting the provider fees
* `compute_environment` - id provided from the compute environment as `string`
* `valid_until` - timestamp in UNIX miliseconds for the duration of provider fees for the compute service.

**Returns**

`dict`

A dictionary which contains the following keys (`providerFeeAddress`, `providerFeeToken`, `providerFeeAmount`, `providerData`, `v`, `r`, `s`, `validUntil`).

**Defined in**

[ocean/ocean.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean.py#LL190C4-L210C1)

<details>

<summary>Source code</summary>

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

### Datatoken Interface

Dispenser utils:

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


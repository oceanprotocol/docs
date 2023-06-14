---
description: Technical details about Datatoken functions
---

# Datatoken Interface Tech Details

`Datatoken contract interface` is like the superhero that kicks off the action-packed adventure of contract calls! It's here to save the day by empowering us to unleash the mighty powers of dispensers, fixed rate exchanges, and initializing orders. For this page, we present the utilitary functions that embark you on the Ocean journey.

### Create Dispenser

* **create\_dispenser**(`self`, `tx_dict: dict`, `max_tokens: Optional[Union[int, str]] = None`, `max_balance: Optional[Union[int, str]] = None`, `with_mint: Optional[bool] = True`)

Through datatoken, you can deploy a new dispenser schema which is used for creating free assets, because its behaviour is similar with a faucet. ⛲

It is implemented in DatatokenBase, inherited by Datatoken2, so it can be called within both instances.

**Parameters**

* `tx_dict` - is the configuration `dictionary` for that specific transaction. Usually for `development` we include just the `from` wallet, but for remote networks, you can provide gas fees, required confirmations for that block etc. For more info, check [Brownie docs](https://eth-brownie.readthedocs.io/en/stable/).
* `max_tokens` - maximum amount of tokens to dispense in wei. The default is a large number.
* `max_balance` - maximum balance of requester in wei. The default is a large number.
* `with_mint` - boolean, `true` if we want to allow the dispenser to be a minter as default value

**Returns**

`str`

Return value is a hex string which denotes the transaction hash of dispenser deployment.

**Defined in**

[models/datatoken.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#LL336C5-L377C18)

<details>

<summary>Source code</summary>

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

### Dispense Datatokens

* **dispense**(`self`, `amount: Union[int, str]`, `tx_dict: dict`)

This function is used to retrieve funds or datatokens for an user who wants to start an order.

It is implemented in DatatokenBase, so it can be called within Datatoken class.

**Parameters**

* `amount` - amount of datatokens to be dispensed in wei (int or string format)
* `tx_dict` - is the configuration `dictionary` for that specific transaction. Usually for `development` we include just the `from` wallet, but for remote networks, you can provide gas fees, required confirmations for that block etc. For more info, check [Brownie docs](https://eth-brownie.readthedocs.io/en/stable/).

**Returns**

`str`

Return value is a hex string which denotes the transaction hash of dispensed datatokens, like a proof.

**Defined in**

[models/datatoken.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#LL379C5-L400C18)

<details>

<summary>Source code</summary>

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

### Dispense Datatokens & Order

* **dispense\_and\_order**(`self`, `consumer: str`, `service_index: int`, `provider_fees: dict`, `transaction_parameters: dict`, `consume_market_fees=None`) -> `str`

This function is used to retrieve funds or datatokens for an user who wants to start an order.

It is implemented in `Datatoken2`, so it can be called within `Datatoken2` class (using the enterprise template).

**Parameters**

* `consumer` - address of the consumer wallet that needs funding
* `service_index` - service index as int for identifying the service that you want to further call [`start_order`](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#LL169C5-L197C10).
* `transaction_parameters` - is the configuration `dictionary` for that specific transaction. Usually for `development` we include just the `from` wallet, but for remote networks, you can provide gas fees, required confirmations for that block etc. For more info, check [Brownie docs](https://eth-brownie.readthedocs.io/en/stable/).
* `consume_market_fees` - [`TokenInfo` ](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#L31)object which contains the consume market fee amount, address & token address. If it is not explicitly specified, by default it has an empty `TokenInfo` object.

**Returns**

`str`

Return value is a hex string which denotes the transaction hash of dispensed datatokens, like a proof of starting order.

**Defined in**

[models/datatoken.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#LL439C5-L483C1)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
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
{% endcode %}

</details>

### Dispenser Status

* **dispenser\_status**(`self`) -> `DispenserStatus`

**Returns**

`DispenserStatus`

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

It is implemented in `DatatokenBase`, inherited by `Datatoken2`, so it can be called within both instances.

**Defined in**

[models/datatoken.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#LL402C1-L409C43)

<details>

<summary>Source code</summary>

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

### Create Fixed Rate Exchange

* **create\_exchange**(`self`, `rate: Union[int, str]`, `base_token_addr: str`, `tx_dict: dict`, `owner_addr: Optional[str] = None`, `publish_market_fee_collector: Optional[str] = None, publish_market_fee: Union[int, str] = 0`, `with_mint: bool = False`, `allowed_swapper: str = ZERO_ADDRESS`, `full_info: bool = False`) -> `Union[OneExchange, tuple]`

It is implemented in `DatatokenBase`, inherited by `Datatoken2`, so it can be called within both instances.

For this datatoken, create a single fixed-rate exchange (`OneExchange`).

This wraps the smart contract method `Datatoken.createFixedRate()` with a simpler interface.

**Parameters**

* `rate` - how many base tokens does 1 datatoken cost? In wei or string
* `base_token_addr` - e.g. OCEAN address
* `tx_dict` -  is the configuration `dictionary` for that specific transaction. Usually for `development` we include just the `from` wallet, but for remote networks, you can provide gas fees, required confirmations for that block etc. For more info, check [Brownie docs](https://eth-brownie.readthedocs.io/en/stable/).

**Optional parameters**

* `owner_addr` - owner of the datatoken
* `publish_market_fee_collector` - fee going to publish market address
* `publish_market_fee` - in wei or string, e.g. `int(1e15)` or `"0.001 ether"`
* `with_mint` - should the exchange mint datatokens as needed (`True`), or do they need to be supplied/allowed by participants like base token (`False`)?
* `allowed_swapper` - if `ZERO_ADDRESS`, anyone can swap
* `full_info` - return just `OneExchange`, or `(OneExchange, <other info>)`

**Returns**

* `exchange` - OneExchange
* (maybe) `tx_receipt`

**Defined in**

[models/datatoken.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#LL236C4-L310C1)

<details>

<summary>Source code</summary>

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

### Buy Datatokens & Order

* **buy\_DT\_and\_order**(`self`, `consumer: str`, `service_index: int`, `provider_fees: dict`, `exchange: Any`, `transaction_parameters: dict`, `consume_market_fees=None`) -> `str`

This function is used to retrieve funds or datatokens for an user who wants to start an order.

It is implemented in `Datatoken` class and it is also inherited in `Datatoken2` class.

**Parameters**

* `consumer` - address of the consumer wallet that needs funding
* `service_index` - service index as int for identifying the service that you want to further call [`start_order`](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#LL169C5-L197C10).
* `transaction_parameters` - is the configuration `dictionary` for that specific transaction. Usually for `development` we include just the `from` wallet, but for remote networks, you can provide gas fees, required confirmations for that block etc. For more info, check [Brownie docs](https://eth-brownie.readthedocs.io/en/stable/).
* `consume_market_fees` - [`TokenInfo` ](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#L31)object which contains the consume market fee amount, address & token address. If it is not explicitly specified, by default it has an empty `TokenInfo` object.

**Returns**

`str`

Return value is a hex string for transaction hash which denotes the proof of starting order.

**Defined in**

[models/datatoken.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#LL484C4-L518C10)

<details>

<summary>Source code</summary>

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

### Get Exchanges

* **get\_exchanges**(`self`) -> `list`

**Returns**

`list`

Returns `List[OneExchange]` - all the exchanges for this datatoken.

It is implemented in `DatatokenBase`, inherited by `Datatoken2`, so it can be called within both instances.

**Defined in**

[models/datatoken.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#LL311C4-L322C25)

<details>

<summary>Source code</summary>

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

### Start Order

* **start\_order**(`self`, `consumer: str`, `service_index: int`, `provider_fees: dict`, `transaction_parameters: dict`, `consume_market_fees=None`) -> `str`

Starting order of a certain datatoken.

It is implemented in Datatoken class and it is also inherited in Datatoken2 class.

**Parameters**

* `consumer` - address of the consumer wallet that needs funding
* `service_index` - service index as int for identifying the service that you want to apply `start_order`.
* `provider_fees` - dictionary which includes provider fees generated when `initialize` endpoint from `Provider` was called.
* `transaction_parameters` - is the configuration `dictionary` for that specific transaction. Usually for `development` we include just the `from` wallet, but for remote networks, you can provide gas fees, required confirmations for that block etc. For more info, check [Brownie docs](https://eth-brownie.readthedocs.io/en/stable/).
* `consume_market_fees` - [`TokenInfo` ](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#L31)object which contains the consume market fee amount, address & token address. If it is not explicitly specified, by default it has an empty `TokenInfo` object.

**Returns**

`str`

Return value is a hex string for transaction hash which denotes the proof of starting order.

**Defined in**

[models/datatoken.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#LL169C5-L197C10)

<details>

<summary>Source code</summary>

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

### Reuse Order

* **reuse\_order**(`self`, `order_tx_id: Union[str, bytes]`, `provider_fees: dict`, `transaction_parameters: dict` ) -> `str`

Reusing an order from a certain datatoken.

It is implemented in Datatoken class and it is also inherited in Datatoken2 class.

**Parameters**

* `order_tx_id` - transaction hash of a previous order, string or bytes format.
* `provider_fees` - dictionary which includes provider fees generated when `initialize` endpoint from `Provider` was called.
* `transaction_parameters` - is the configuration `dictionary` for that specific transaction. Usually for `development` we include just the `from` wallet, but for remote networks, you can provide gas fees, required confirmations for that block etc. For more info, check [Brownie docs](https://eth-brownie.readthedocs.io/en/stable/).

**Returns**

`str`

Return value is a hex string for transaction hash which denotes the proof of reusing order.

**Defined in**

[models/datatoken.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/models/datatoken.py#LL199C5-L219C10)

<details>

<summary>Source code</summary>

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

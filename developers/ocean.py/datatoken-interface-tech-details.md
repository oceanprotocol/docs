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


---
description: Discover all about the extensible & flexible smart contract templates.
---

# Datatoken Templates

Each [data NFT](data-nfts.md) or [datatoken](datatokens.md) within Ocean Protocol is generated from pre-defined [template](https://github.com/oceanprotocol/contracts/tree/main/contracts/templates) contracts. The _**templateId**_ parameter specifies the template used for creating a data NFT or datatoken, which can be set during the creation process. The _**templateId**_ is stored within the smart contract code and can be accessed using the [_**getId**_](https://github.com/oceanprotocol/contracts/blob/9e29194d910f28a4f0ef17ce6dc8a70741f63309/contracts/interfaces/IERC20Template.sol#L134)_**()**_ function.

```solidity

it("#getId - should return templateId", async () => {
    const templateId = 1;
    assert((await erc20Token.getId()) == templateId);
  });

```

Currently, Ocean Protocol supports **1** [template](https://github.com/oceanprotocol/contracts/blob/main/contracts/templates/ERC721Template.sol) type for data NFTs and **2** template variants for datatokens: the [**regular template**](https://github.com/oceanprotocol/contracts/blob/main/contracts/templates/ERC20Template.sol) and the [**enterprise template**](https://github.com/oceanprotocol/contracts/blob/main/contracts/templates/ERC20TemplateEnterprise.sol). While these templates share the same interfaces, they differ in their underlying implementation and may offer additional features.

The details regarding currently supported **datatoken templates** are as follows:

### **Regular template**

The regular template allows users to buy/sell/hold datatokens. The datatokens can be minted by the address having a [`MINTER`](roles.md#minter) role, making the supply of datatoken variable. This template is assigned _**`templateId =`**_`1` and the source code is available [here](https://github.com/oceanprotocol/contracts/blob/v4main/contracts/templates/ERC20Template.sol).

### **Enterprise template**

The enterprise template has additional functions apart from methods in the ERC20 interface. This additional feature allows access to the service by paying in the basetoken instead of the datatoken. Internally, the smart contract handles the conversion of basetoken to datatoken, initiating an order to access the service, and minting/burning the datatoken. The total supply of the datatoken effectively remains 0 in the case of the enterprise template. This template is assigned _**`templateId =`**_`2` and the source code is available [here](https://github.com/oceanprotocol/contracts/blob/v4main/contracts/templates/ERC20TemplateEnterprise.sol).

#### Set the template

When you're creating an ERC20 datatoken, you can specify the desired template by passing on the template index.

{% tabs %}
{% tab title="Ocean.js" %}
To specify the datatoken template via ocean.js, you need to customize the [DatatokenCreateParams](https://github.com/oceanprotocol/ocean.js/blob/ae2ff1ccde53ace9841844c316a855de271f9a3f/src/%40types/Datatoken.ts#L3) with your desired `templateIndex`.

The default template used is 1.

```typescript
export interface DatatokenCreateParams {
  templateIndex: number
  minter: string
  paymentCollector: string
  mpFeeAddress: string
  feeToken: string
  feeAmount: string
  cap: string
  name?: string
  symbol?: string
}
```
{% endtab %}

{% tab title="Ocean.py" %}
To specify the datatoken template via ocean.py, you need to customize the [DatatokenArguments](https://github.com/oceanprotocol/ocean.py/blob/bad11fb3a4cb00be8bab8febf3173682e1c091fd/ocean_lib/models/datatoken_base.py#L64) with your desired template\_index.

The default template used is 1.

```python
class DatatokenArguments:
    def __init__(
        self,
        name: Optional[str] = "Datatoken 1",
        symbol: Optional[str] = "DT1",
        template_index: Optional[int] = 1,
        minter: Optional[str] = None,
        fee_manager: Optional[str] = None,
        publish_market_order_fees: Optional = None,
        bytess: Optional[List[bytes]] = None,
        services: Optional[list] = None,
        files: Optional[List[FilesType]] = None,
        consumer_parameters: Optional[List[Dict[str, Any]]] = None,
        cap: Optional[int] = None,
    ):
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
By default, all assets published through the Ocean Market use the Enterprise Template.
{% endhint %}

#### Retrieve the template

To identify the template used for a specific asset, you can easily retrieve this information using the network explorer. Here are the steps to follow:

1. Visit the network explorer where the asset was published.
2. Search for the datatoken address :mag:
3. Once you have located the datatoken address, click on the contract tab to access more details.
4.  Within the contract details, we can identify and determine the template used for the asset.

    

We like making things easy :sunglasses: so here is an even easier way to retrieve the info for [this](https://market.oceanprotocol.com/asset/did:op:cd086344c275bc7c560e91d472be069a24921e73a2c3798fb2b8caadf8d245d6) asset published in the Ocean Market:

{% embed url="https://app.arcade.software/share/wxBPSc42eSYUiawSY8rC" fullWidth="false" %}
{% endembed %}

{% hint style="info" %}
_It's important to note that Ocean Protocol may introduce new templates to support additional variations of data NFTs and datatokens in the future._
{% endhint %}

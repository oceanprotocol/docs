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

The regular template allows users to buy/sell/hold datatokens. The datatokens can be minted by the address having a [`MINTER`](roles.md#minter) role, making the supply of datatoken variable. This template is assigned _**templateId**_ `1` and the source code is available [here](https://github.com/oceanprotocol/contracts/blob/v4main/contracts/templates/ERC20Template.sol).



### **Enterprise template**

The enterprise template has additional functions apart from methods in the ERC20 interface. This additional feature allows access to the service by paying in the basetoken instead of the datatoken. Internally, the smart contract handles the conversion of basetoken to datatoken, initiating an order to access the service, and minting/burning the datatoken. The total supply of the datatoken effectively remains 0 in the case of the enterprise template. This template is assigned _**templateId**_ `2` and the source code is available [here](https://github.com/oceanprotocol/contracts/blob/v4main/contracts/templates/ERC20TemplateEnterprise.sol).



To identify the template used for a specific asset within the Ocean Protocol, you can easily retrieve this information using any network explorer. Here are the steps to follow:

1. Visit the network explorer where the asset was published.
2. Search for the datatoken address
3. Once you have located the datatoken address, click on the contract tab to access more details.
4.  Within the contract details, we can identify and determine the template used for the asset.

    &#x20;

Let's identify together the template of [this](https://market.oceanprotocol.com/asset/did:op:cd086344c275bc7c560e91d472be069a24921e73a2c3798fb2b8caadf8d245d6) asset published in the Ocean Market:&#x20;

{% @arcade/embed flowId="wxBPSc42eSYUiawSY8rC" url="https://app.arcade.software/share/wxBPSc42eSYUiawSY8rC" %}

{% hint style="info" %}
_Ocean Protocol might support additional variations of data NFT/datatoken by adding new templates._
{% endhint %}

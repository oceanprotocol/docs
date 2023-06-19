---
description: >-
  Explore the Power of Querying: Unveiling In-Depth Details of Individual
  Datatokens
---

# Get datatoken information

To fetch detailed information about a specific datatoken, you can utilize the power of GraphQL queries. By constructing a query tailored to your needs, you can access key parameters such as the datatoken's `ID`, `name`, `symbol`, `total supply`, and `creator`. This allows you to gain a deeper understanding of the datatoken's characteristics and properties. With this information at your disposal, you can make informed decisions, analyze market trends, and explore the vast potential of datatokens within the Ocean ecosystem.&#x20;



The result of the following GraphQL query returns the information about a particular datatoken. Here, `0x122d10d543bc600967b4db0f45f80cb1ddee43eb` is the address of the datatoken.

_PS: In this example, the query is executed on the Ocean subgraph deployed on the **mainnet**. If you want to change the network, please refer to_ [_this table_](broken-reference)_._

{% tabs %}
{% tab title="Javascript" %}
The javascript below can be used to run the query and fetch the information of a datatoken. If you wish to change the network, replace the variable's value `network` as needed. Change the value of the variable `datatokenAddress` with the address of your choice.

```runkit  nodeVersion="18.x.x"
var axios = require('axios');

const datatokenAddress = "0x122d10d543bc600967b4db0f45f80cb1ddee43eb";

const query = `{
  token(id:"${datatokenAddress}", subgraphError: deny){
    id
    symbol
    nft {
      name
      symbol
      address
    }
    name
    symbol
    cap
    isDatatoken
    holderCount
    orderCount
    orders(skip:0,first:1){
      amount
      serviceIndex
      payer {
        id
      }
      consumer{
        id
      }
      estimatedUSDValue
      lastPriceToken
      lastPriceValue
    }
  }
  fixedRateExchanges(subgraphError:deny){
    id
    price
    active
  }
}`

const network = "mainnet"
var config = {
  method: 'post',
  url: `https://v4.subgraph.${network}.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph`,
  headers: { "Content-Type": "application/json" },
  data: JSON.stringify({ "query": query })
};

axios(config)
  .then(function (response) {
    let result = JSON.stringify(response.data)
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

```
{% endtab %}

{% tab title="Python" %}
The Python script below can be used to run the query and fetch the datatoken information. If you wish to change the network, replace the variable's value `base_url` as needed. Change the value of the variable `datatoken_address` with the address of the datatoken of your choice.

**Create script**

{% code title="datatoken_information.py" %}
```python
import requests
import json

datatoken_address = "0x122d10d543bc600967b4db0f45f80cb1ddee43eb"
query = """
{{
  token(id:"{0}", subgraphError: deny){{
    id
    symbol
    nft {{
      name
      symbol
      address
    }}
    name
    symbol
    cap
    isDatatoken
    holderCount
    orderCount
    orders(skip:0,first:1){{
      amount
      serviceIndex
      payer {{
        id
      }}
      consumer{{
        id
      }}
      estimatedUSDValue
      lastPriceToken
      lastPriceValue
    }}
  }}
  fixedRateExchanges(subgraphError:deny){{
    id
    price
    active
  }}
}}""".format(
    datatoken_address
)

base_url = "https://v4.subgraph.mainnet.oceanprotocol.com/"
route = "/subgraphs/name/oceanprotocol/ocean-subgraph"

url = base_url + route

headers = {"Content-Type": "application/json"}
payload = json.dumps({"query": query})
response = requests.request("POST", url, headers=headers, data=payload)
result = json.loads(response.text)

print(json.dumps(result, indent=4, sort_keys=True))
```
{% endcode %}

**Execute script**

<pre class="language-bash"><code class="lang-bash"><strong>python datatoken_information.py
</strong></code></pre>
{% endtab %}

{% tab title="Query" %}
Copy the query to fetch the information of a datatoken in the Ocean Subgraph [GraphiQL interface](https://v4.subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql).&#x20;

```
{
  token(id:"0x122d10d543bc600967b4db0f45f80cb1ddee43eb", subgraphError: deny){
    id
    symbol
    nft {
      name
      symbol
      address
    }
    name
    symbol
    cap
    isDatatoken
    holderCount
    orderCount
    orders(skip:0,first:1){
      amount
      serviceIndex
      payer {
        id
      }
      consumer{
        id
      }
      estimatedUSDValue
      lastPriceToken
      lastPriceValue
    }
  }
  fixedRateExchanges(subgraphError:deny){
    id
    price
    active
  }
}
```
{% endtab %}
{% endtabs %}

<details>

<summary>Sample response</summary>

```json
{
  "data": {
    "fixedRateExchanges": [
      {
        "active": true,
        "id": "0xfa48673a7c36a2a768f89ac1ee8c355d5c367b02-0x06284c39b48afe5f01a04d56f1aae45dbb29793b190ee11e93a4a77215383d44",
        "price": "33"
      },
      {
        "active": true,
        "id": "0xfa48673a7c36a2a768f89ac1ee8c355d5c367b02-0x2719862ebc4ed253f09088c878e00ef8ee2a792e1c5c765fac35dc18d7ef4deb",
        "price": "35"
      },
      {
        "active": true,
        "id": "0xfa48673a7c36a2a768f89ac1ee8c355d5c367b02-0x2dccaa373e4b65d5ec153c150270e989d1bda1efd3794c851e45314c40809f9c",
        "price": "33"
      }
    ],
    "token": {
      "cap": "115792089237316195423570985008687900000000000000000000000000",
      "holderCount": "0",
      "id": "0x122d10d543bc600967b4db0f45f80cb1ddee43eb",
      "isDatatoken": true,
      "name": "Brave Lobster Token",
      "nft": {
        "address": "0xea615374949a2405c3ee555053eca4d74ec4c2f0",
        "name": "Ocean Data NFT",
        "symbol": "OCEAN-NFT"
      },
      "orderCount": "0",
      "orders": [],
      "symbol": "BRALOB-11"
    }
  }
}
```

</details>

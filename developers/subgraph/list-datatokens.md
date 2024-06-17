---
description: 'Discover the World of datatokens: Retrieving a List of datatokens'
---

# Get datatokens

With your newfound knowledge of fetching data NFTs and retrieving the associated information, fetching a list of datatokens will be a breeze :ocean:. Building upon your understanding, let's now delve into the process of retrieving a list of datatokens. By applying similar techniques and leveraging the power of GraphQL queries, you'll be able to effortlessly navigate the landscape of datatokens and access the wealth of information they hold. So, let's dive right in and unlock the potential of exploring datatokens with ease and efficiency.

_PS: In this example, the query is executed on the Ocean subgraph deployed on the mainnet. If you want to change the network, please refer to_ [_this table_](./#ocean-subgraph-deployments)_._

{% tabs %}
{% tab title="Javascript" %}
The javascript below can be used to run the query. If you wish to change the network, replace the variable's value `network` as needed.

```runkit nodeVersion="18.x.x"
var axios = require('axios');

const query = `{
    tokens(skip:0, first: 2, subgraphError: deny){
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
The Python script below can be used to run the query and fetch a list of datatokens. If you wish to change the network, then replace the value of the variable `base_url` as needed.

**Create script**

{% code title="list_all_tokens.py" %}
```python
import requests
import json

query = """
{{
	tokens(skip:0, first: 2, subgraphError: deny){{
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
}}"""

base_url = "https://v4.subgraph.mainnet.oceanprotocol.com"
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

```
python list_all_tokens.py
```
{% endtab %}

{% tab title="Query" %}
Copy the query to fetch a list of datatokens in the Ocean Subgraph [GraphiQL interface](https://v4.subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql).

```graphql
{
  tokens(skip:0, first: 2, subgraphError: deny){
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
}
```
{% endtab %}
{% endtabs %}

<details>

<summary>Sample Response</summary>

```json
{
  "data": {
    "tokens": [
      {
        "cap": null,
        "holderCount": "0",
        "id": "0x0642026e7f0b6ccac5925b4e7fa61384250e1701",
        "isDatatoken": false,
        "name": "H2O",
        "nft": null,
        "orderCount": "0",
        "orders": [],
        "symbol": "H2O"
      },
      {
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
    ]
  }
}
```

</details>

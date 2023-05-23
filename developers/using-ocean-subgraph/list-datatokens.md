---
description: 'Discover the World of datatokens: Retrieving a List of datatokens'
---

# Get datatokens

The result of following GraphQL query returns the information about datatokens.

{% hint style="info" %}
Copy the query in the [GraphiQL interface](https://v4.subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql) to fetch the results from the mainnet. For other networks use [this table](../ocean-subgraph/#ocean-subgraph-graphiql).
{% endhint %}

#### Query

#### Code

{% tabs %}
{% tab title="Query" %}
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

{% tab title="Python" %}
The python script below can be used to run the the query. If you wish to change the network, then replace the value of variable `base_url` as needed.

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

{% tab title="Javascript" %}
The javascript below can be used to run the the query. If you wish to change the network, then replace the value of variable `baseUrl` as needed.

**Create script**

{% code title="listAllTokens.js" %}
```javascript
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

const baseUrl = "https://v4.subgraph.mainnet.oceanprotocol.com"
const route = "/subgraphs/name/oceanprotocol/ocean-subgraph"

const url = `${baseUrl}${route}`

var config = {
    method: 'post',
    url: url,
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ "query": query })
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
```
{% endcode %}

**Execute script**

```bash
node listAllTokens.js
```
{% endtab %}
{% endtabs %}

#### Response

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

# Get datatoken information

The result of following GraphQL query returns the information about a particular datatoken. Here, `0x122d10d543bc600967b4db0f45f80cb1ddee43eb` is the address of the datatoken.

{% hint style="info" %}
Copy the query in the [GraphiQL interface](https://v4.subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql) to fetch the results from the mainnet. For other networks use [this table](./#ocean-subgraph-graphiql).
{% endhint %}

#### Query

```graphql
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

#### Code

{% tabs %}
{% tab title="Python" %}
The python script below can be used to run the the query. If you wish to change the network, then replace the value of variable `base_url` as needed. Change the value of the variable `datatoken_address` with the address of the datatoken of your choice.

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

<pre class="language-bash"><code class="lang-bash"><strong>python datatoken_information.py</strong></code></pre>
{% endtab %}

{% tab title="Javascript" %}
The javascript below can be used to run the the query. If you wish to change the network, then replace the value of variable `baseUrl` as needed. Change the value of the variable `datatokenAddress` with the address of the datatoken of your choice.

**Create script**

{% code title="datatokenInfo.js" %}
```javascript
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

#### Execute script

```bash
node datatokenInfo.js
```
{% endtab %}
{% endtabs %}

#### Response

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

# List Fixed Rate Exchanges

The result of following GraphQL query returns the information about the Fixed Rate Exchanges.

{% hint style="info" %}
Copy the query in the [GraphiQL interface](https://v4.subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql) to fetch the results from the mainnet. For other networks use [this table](./#ocean-subgraph-graphiql).
{% endhint %}

#### Query

```graphql
{
  fixedRateExchanges(skip:0, first:2, subgraphError:deny){
    id
    contract
    exchangeId
    owner{id}
    datatoken{
      id
      name
      symbol
    }
    price
    datatokenBalance
    active
    totalSwapValue
    swaps(skip:0, first:1){
      tx
      by {
        id
      }
      baseTokenAmount
      dataTokenAmount
      createdTimestamp
    }
    updates(skip:0, first:1){
      oldPrice
      newPrice
      newActive
      createdTimestamp
      tx
    }
  }
}
```

#### Code

{% tabs %}
{% tab title="Python" %}
The python script below can be used to run the the query. If you wish to change the network, then replace the value of variable `base_url` as needed.

**Create script**

{% code title="list_fixed_rate_exchanges.py" %}
```python
import requests
import json


query = """
{
  fixedRateExchanges(skip:0, first:2, subgraphError:deny){
    id
    contract
    exchangeId
    owner{id}
    datatoken{
      id
      name
      symbol
    }
    price
    datatokenBalance
    active
    totalSwapValue
    swaps(skip:0, first:1){
      tx
      by {
        id
      }
      baseTokenAmount
      dataTokenAmount
      createdTimestamp
    }
    updates(skip:0, first:1){
      oldPrice
      newPrice
      newActive
      createdTimestamp
      tx
    }
  }
}"""


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
python list_fixed_rate_exchanges.py
```
{% endtab %}

{% tab title="Javascript" %}
The javascript below can be used to run the the query. If you wish to change the network, then replace the value of variable `baseUrl` as needed.

#### Create script

{% code title="listFRE.js" %}
```javascript
var axios = require('axios');

const query = `{
  fixedRateExchanges(skip:0, first:2, subgraphError:deny){
    id
    contract
    exchangeId
    owner{id}
    datatoken{
      id
      name
      symbol
    }
    price
    datatokenBalance
    active
    totalSwapValue
    swaps(skip:0, first:1){
      tx
      by {
        id
      }
      baseTokenAmount
      dataTokenAmount
      createdTimestamp
    }
    updates(skip:0, first:1){
      oldPrice
      newPrice
      newActive
      createdTimestamp
      tx
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

#### Execute script

```bash
node listFRE.js
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
        "contract": "0xfa48673a7c36a2a768f89ac1ee8c355d5c367b02",
        "datatoken": {
          "id": "0x9b39a17cc72c8be4813d890172eff746470994ac",
          "name": "Delightful Pelican Token",
          "symbol": "DELPEL-79"
        },
        "datatokenBalance": "0",
        "exchangeId": "0x06284c39b48afe5f01a04d56f1aae45dbb29793b190ee11e93a4a77215383d44",
        "id": "0xfa48673a7c36a2a768f89ac1ee8c355d5c367b02-0x06284c39b48afe5f01a04d56f1aae45dbb29793b190ee11e93a4a77215383d44",
        "owner": {
          "id": "0x03ef3f422d429bcbd4ee5f77da2917a699f237ed"
        },
        "price": "33",
        "swaps": [
          {
            "baseTokenAmount": "33.033",
            "by": {
              "id": "0x9b39a17cc72c8be4813d890172eff746470994ac"
            },
            "createdTimestamp": 1656563684,
            "dataTokenAmount": "1",
            "tx": "0x0b55482f69169c103563062e109f9d71afa01d18f201c425b24b1c74d3c282a3"
          }
        ],
        "totalSwapValue": "0",
        "updates": []
      },
      {
        "active": true,
        "contract": "0xfa48673a7c36a2a768f89ac1ee8c355d5c367b02",
        "datatoken": {
          "id": "0x2cf074e36a802241f2f8ddb35f4a4557b8f1179b",
          "name": "Arcadian Eel Token",
          "symbol": "ARCEEL-17"
        },
        "datatokenBalance": "0",
        "exchangeId": "0x2719862ebc4ed253f09088c878e00ef8ee2a792e1c5c765fac35dc18d7ef4deb",
        "id": "0xfa48673a7c36a2a768f89ac1ee8c355d5c367b02-0x2719862ebc4ed253f09088c878e00ef8ee2a792e1c5c765fac35dc18d7ef4deb",
        "owner": {
          "id": "0x87b5606fba13529e1812319d25c6c2cd5c3f3cbc"
        },
        "price": "35",
        "swaps": [],
        "totalSwapValue": "0",
        "updates": []
      }
    ]
  }
}
```

</details>

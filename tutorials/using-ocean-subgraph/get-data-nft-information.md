# Get Data NFT Information

The result of following GraphQL query returns the information about a particular datatoken. Here, `0x1c161d721e6d99f58d47f709cdc77025056c544c` is the address of the dataNFT.

{% hint style="info" %}
Copy the query in the [GraphiQL interface](https://v4.subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql) to fetch the results from the mainnet. For other networks use [this table](./#ocean-subgraph-graphiql).
{% endhint %}

#### Query

```graphql
{
  nft (id:"0x1c161d721e6d99f58d47f709cdc77025056c544c", subgraphError:deny){
    id
    name
    symbol
    owner
    address
    assetState
    tx
    block
    transferable
    creator
    createdTimestamp
    providerUrl
    managerRole
    erc20DeployerRole
    storeUpdateRole
    metadataRole
    tokenUri
    template
    orderCount
 }
}
```

#### Code

{% tabs %}
{% tab title="Python" %}
The python script below can be used to run the the query. If you wish to change the network, then replace the value of variable `base_url` as needed. Change the value of the variable dataNFT\_address with the address of the datatoken of your choice.

#### Create script

{% code title="dataNFT_information.py" %}
```python
import requests
import json

dataNFT_address = "0x1c161d721e6d99f58d47f709cdc77025056c544c"
query = """
{{
  nft (id:"{0}", subgraphError:deny){{
    id
    name
    symbol
    owner
    address
    assetState
    tx
    block
    transferable
    creator
    createdTimestamp
    providerUrl
    managerRole
    erc20DeployerRole
    storeUpdateRole
    metadataRole
    tokenUri
    template
    orderCount
 }}
}}""".format(
    dataNFT_address
)

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

<pre class="language-bash"><code class="lang-bash"><strong>python dataNFT_information.py</strong></code></pre>
{% endtab %}

{% tab title="Javascript" %}
The javascript below can be used to run the the query. If you wish to change the network, then replace the value of variable `baseUrl` as needed. Change the value of the variable `datanftAddress` with the address of the datatoken of your choice.

#### Create script

{% code title="dataNFTInfo.js" %}
```javascript
var axios = require('axios');

const datanftAddress = "0x1c161d721e6d99f58d47f709cdc77025056c544c";

const query = `{
  nft (id:"${datanftAddress}", subgraphError:deny){
    id
    name
    symbol
    owner
    address
    assetState
    tx
    block
    transferable
    creator
    createdTimestamp
    providerUrl
    managerRole
    erc20DeployerRole
    storeUpdateRole
    metadataRole
    tokenUri
    template
    orderCount
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
node dataNFTInfo.js
```
{% endtab %}
{% endtabs %}

#### Response

<details>

<summary>Sample response</summary>

```json
{
  "data": {
    "nft": {
      "address": "0x1c161d721e6d99f58d47f709cdc77025056c544c",
      "assetState": 0,
      "block": 15185270,
      "createdTimestamp": 1658397870,
      "creator": "0xd30dd83132f2227f114db8b90f565bca2832afbd",
      "erc20DeployerRole": [
        "0x1706df1f2d93558d1d77bed49ccdb8b88fafc306"
      ],
      "id": "0x1c161d721e6d99f58d47f709cdc77025056c544c",
      "managerRole": [
        "0xd30dd83132f2227f114db8b90f565bca2832afbd"
      ],
      "metadataRole": null,
      "name": "Ocean Data NFT",
      "orderCount": "1",
      "owner": "0xd30dd83132f2227f114db8b90f565bca2832afbd",
      "providerUrl": "https://v4.provider.mainnet.oceanprotocol.com",
      "storeUpdateRole": null,
      "symbol": "OCEAN-NFT",
      "template": "",
      "tokenUri": "<removed>",
      "transferable": true,
      "tx": "0x327a9da0d2e9df945fd2f8e10b1caa77acf98e803c5a2f588597172a0bcbb93a"
    }
  }
}
```

</details>

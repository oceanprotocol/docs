# Get data NFT information

The result of following GraphQL query returns the information about a particular datatoken. Here, `0x1c161d721e6d99f58d47f709cdc77025056c544c` is the address of the dataNFT. &#x20;

{% hint style="info" %}
Copy the query in the [graphiQL interface](https://v4.subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql) to fetch the results from the mainnet. For other networks, change the domain name with appropriate subgraph domain as mentioned in [this page](../../core-concepts/networks.md).
{% endhint %}

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
}b
```

The python script below can be used to run the the query. If you wish to change the network, then replace the value of variable `base_url` as needed. Change the value of the variable dataNFT\_address with the address of the datatoken of your choice.

{% tabs %}
{% tab title="Python" %}
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

#### Execute script

```
python dataNFT_information.py
```
{% endtab %}
{% endtabs %}

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

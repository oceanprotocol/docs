---
description: >-
  Explore the Power of Querying: Unveiling In-Depth Details of Individual Data
  NFTs
---

# Get data NFT information

Now that you are familiar with the process of retrieving a list of data NFTs 😎, let's explore how to obtain more specific details about a particular NFT through querying. By utilizing the knowledge you have gained, you can customize your GraphQL query to include additional parameters such as the NFT's metadata, creator information, template, or any other relevant data points. This will enable you to delve deeper into the intricacies of a specific NFT and gain a comprehensive understanding of its attributes. With this newfound capability, you can unlock valuable insights and make informed decisions based on the specific details retrieved. So, let's dive into the fascinating world of querying and unravel the unique characteristics of individual data NFTs.



The result of the following GraphQL query returns the information about a particular data NFT. In this example, `0x1c161d721e6d99f58d47f709cdc77025056c544c`.

_PS: In this example, the query is executed on the Ocean subgraph deployed on the **mainnet**. If you want to change the network, please refer to_ [_this table_](broken-reference)_._

{% tabs %}
{% tab title="Javascript" %}
The javascript below can be used to run the query and fetch the information of a data NFT. If you wish to change the network, replace the variable's value `network` as needed. Change the value of the variable `datanftAddress` with the address of your choice.

```runkit  nodeVersion="18.x.x"
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
    console.log(result)
  })
  .catch(function (error) {
    console.log(error);
  });

```
{% endtab %}

{% tab title="Python" %}
The Python script below can be used to run the query and fetch the details about an NFT. If you wish to change the network, replace the variable's value `base_url` as needed. Change the value of the variable dataNFT\_address with the address of the datatoken of your choice.

**Create script**

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

<pre class="language-bash"><code class="lang-bash"><strong>python dataNFT_information.py
</strong></code></pre>
{% endtab %}

{% tab title="Query" %}
Copy the query to fetch the information about a data NFT in the Ocean Subgraph [GraphiQL interface](https://v4.subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql). If you want to fetch the information about another NFT, replace the `id` with the address of your choice.

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
{% endtab %}
{% endtabs %}

<details>

<summary>Sample response</summary>

{% code overflow="wrap" %}
```json
{
    "data": {
        "nft": {
            "address": "0x1c161d721e6d99f58d47f709cdc77025056c544c",
            "assetState": 0,
            "block": 15185270,
            "createdTimestamp": 1658397870,
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
            "providerUrl": "https://v4.provider.mainnet.oceanprotocol.com",
            "storeUpdateRole": null,
            "symbol": "OCEAN-NFT",
            "template": "",
            "tokenUri": "data:application/json;base64,eyJuYW1lIjoiT2NlYW4gRGF0YSBORlQiLCJzeW1ib2wiOiJPQ0VBTi1ORlQiLCJkZXNjcmlwdGlvbiI6IlRoaXMgTkZUIHJlcHJlc2VudHMgYW4gYXNzZXQgaW4gdGhlIE9jZWFuIFByb3RvY29sIHY0IGVjb3N5c3RlbS5cblxuVmlldyBvbiBPY2VhbiBNYXJrZXQ6IGh0dHBzOi8vbWFya2V0Lm9jZWFucHJvdG9jb2wuY29tL2Fzc2V0L2RpZDpvcDo1YzdjNThjYWNhNDAzMmU2NzNhNDE2NWM3N2YxOGQ0MDVmYmVlODc3YzA3OGFhMjU3ZjY1ODdhZjM5NzhkYTVmIiwiZXh0ZXJuYWxfdXJsIjoiaHR0cHM6Ly9tYXJrZXQub2NlYW5wcm90b2NvbC5jb20vYXNzZXQvZGlkOm9wOjVjN2M1OGNhY2E0MDMyZTY3M2E0MTY1Yzc3ZjE4ZDQwNWZiZWU4NzdjMDc4YWEyNTdmNjU4N2FmMzk3OGRhNWYiLCJiYWNrZ3JvdW5kX2NvbG9yIjoiMTQxNDE0IiwiaW1hZ2VfZGF0YSI6ImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgdmlld0JveD0nMCAwIDk5IDk5JyBmaWxsPSd1bmRlZmluZWQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGZpbGw9JyUyM2ZmNDA5Mjc3JyBkPSdNMCw5OUwwLDI3QzgsMjkgMTcsMzEgMjUsMzBDMzIsMjggMzgsMjQgNDYsMjVDNTMsMjUgNjIsMjkgNzIsMzFDODEsMzIgOTAsMzEgOTksMzBMOTksOTlaJy8lM0UlM0NwYXRoIGZpbGw9JyUyM2ZmNDA5MmJiJyBkPSdNMCw5OUwwLDU0QzgsNTIgMTcsNTAgMjYsNTFDMzQsNTEgNDIsNTUgNTEsNTVDNTksNTQgNjcsNDkgNzYsNDlDODQsNDggOTEsNTIgOTksNTZMOTksOTlaJyUzRSUzQy9wYXRoJTNFJTNDcGF0aCBmaWxsPSclMjNmZjQwOTJmZicgZD0nTTAsOTlMMCw4MEM4LDc4IDE3LDc3IDI3LDc3QzM2LDc2IDQ1LDc3IDUyLDc3QzU4LDc2IDYzLDc0IDcxLDczQzc4LDcxIDg4LDcxIDk5LDcxTDk5LDk5WiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0UifQ==",
            "transferable": true,
            "tx": "0x327a9da0d2e9df945fd2f8e10b1caa77acf98e803c5a2f588597172a0bcbb93a"
        }
    }
}

```
{% endcode %}

</details>

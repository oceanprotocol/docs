---
description: 'Discover the World of NFTs: Retrieving a List of Data NFTs'
---

# Get data NFTs

If you are already familiarized with the concept of NFTs, you're off to a great start. However, if you require a refresher, we recommend visiting the [data NFTs and datatokens page](../datanft-and-datatoken.md) for a quick overview.&#x20;

Now, let us delve into the fascinating realm of utilizing the subgraph to extract a list of data NFTs that have been published using the Ocean contracts. By employing GraphQL queries, we can seamlessly retrieve the desired information from the subgraph. You'll see how simple it is :sunglasses:

You'll find below an example of a GraphQL query that retrieves the first 10 data NFTs from the subgraph. The GraphQL query is structured to access the "nfts" route, extracting the first 10 elements. For each item retrieved, it retrieves the "id," "name," "symbol," "owner," "address," "assetState," "tx," "block," and "transferable" parameters.

There are several options available to see this query in action. Below, you will find three:

1. Run the GraphQL query in the GraphiQL interface.
2. Execute the query in Python by following the code snippet.
3. Execute the query in JavaScript by clicking on the "Run" button of the Javascript tab.

PS: In these examples, the query is executed on the Ocean subgraph deployed on the mainnet. If you want to change the network, please refer to [this table](../ocean-subgraph/#ocean-subgraph-deployments).

{% tabs %}
{% tab title="Query" %}
Copy the query to fetch a list of data NFTs in the Ocean Subgraph [GraphiQL interface](https://v4.subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql) to fetch the results.

```graphql
{
  nfts (skip:0, first: 10, subgraphError:degraphny){
    id
    name
    symbol
    owner
    address
    assetState
    tx
    block
    transferable
 }
}
```
{% endtab %}

{% tab title="Python" %}
The Python script below can be used to run the query to fetch a list of data NFTs from the subgraph. If you wish to change the network, replace the value of variable `base_url` as needed.

**Create script**

{% code title="list_dataNFTs.py" %}
```python
import requests
import json


query = """
{
  nfts (skip:0, first: 10, subgraphError:deny){
    id
    name
    symbol
    owner
    address
    assetState
    tx
    block
    transferable
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
python list_dataNFTs.py
```
{% endtab %}

{% tab title="Javascript" %}
The javascript below can be used to run the query. If you wish to change the network, then replace the value of `network` as needed.

```runkit  nodeVersion="18.x.x"
const axios = require('axios')

const query = `{
    nfts (skip:0, first: 10, subgraphError:deny){
      id
      name
      symbol
      owner
      address
      assetState
      tx
      block
      transferable
   }
}`

const network = "mainnet"
const config = {
  method: 'post',
  url: `https://v4.subgraph.${network}.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph`,
  headers: { 'Content-Type': 'application/json' },
  data: JSON.stringify({ query: query })
}

const response = await axios(config)
for (let nft of response.data.data.nfts) {
    console.log(' id:' + nft.id + ' name: ' + nft.name + ' address: ' + nft.address)
}

```
{% endtab %}
{% endtabs %}

#### Response

<details>

<summary>Sample response</summary>

```json
{
  "data": {
    "nfts": [
      {
        "address": "0x1c161d721e6d99f58d47f709cdc77025056c544c",
        "assetState": 0,
        "block": 15185270,
        "id": "0x1c161d721e6d99f58d47f709cdc77025056c544c",
        "name": "Ocean Data NFT",
        "owner": "0xd30dd83132f2227f114db8b90f565bca2832afbd",
        "symbol": "OCEAN-NFT",
        "transferable": true,
        "tx": "0x327a9da0d2e9df945fd2f8e10b1caa77acf98e803c5a2f588597172a0bcbb93a"
      },
      {
        "address": "0x1e06501660623aa973474e3c59efb8ba542cb083",
        "assetState": 0,
        "block": 15185119,
        "id": "0x1e06501660623aa973474e3c59efb8ba542cb083",
        "name": "Ocean Data NFT",
        "owner": "0xd30dd83132f2227f114db8b90f565bca2832afbd",
        "symbol": "OCEAN-NFT",
        "transferable": true,
        "tx": "0xd351ccee22b505d811c29fa524db920815936672b20b8f3a09485e389902fd27"
      },
      {
        "address": "0x2eaa55236f799c6ebec72e77a1a6296ea2e704b1",
        "assetState": 0,
        "block": 15185009,
        "id": "0x2eaa55236f799c6ebec72e77a1a6296ea2e704b1",
        "name": "Ocean Data NFT",
        "owner": "0xd30dd83132f2227f114db8b90f565bca2832afbd",
        "symbol": "OCEAN-NFT",
        "transferable": true,
        "tx": "0xf6d55306ab4dc339dc1655a2d119af468a79a70fa62ea11de78879da61e89e7b"
      },
      {
        "address": "0x2fbe924f6c92825929dc7785fe05d15e35f2612b",
        "assetState": 0,
        "block": 15185235,
        "id": "0x2fbe924f6c92825929dc7785fe05d15e35f2612b",
        "name": "Ocean Data NFT",
        "owner": "0xd30dd83132f2227f114db8b90f565bca2832afbd",
        "symbol": "OCEAN-NFT",
        "transferable": true,
        "tx": "0xa9ff9d461b4b7344ea181de32fa6412c7ea8e21f485ab4d8a7b9cfcdb68d9d51"
      },
      {
        "address": "0x4c04433bb1760a66be7713884bb6370e9c567cef",
        "assetState": 0,
        "block": 15185169,
        "id": "0x4c04433bb1760a66be7713884bb6370e9c567cef",
        "name": "Ocean Data NFT",
        "owner": "0xd30dd83132f2227f114db8b90f565bca2832afbd",
        "symbol": "OCEAN-NFT",
        "transferable": true,
        "tx": "0x54c5463e8988b5fa4e4cfe71ee391505801931abe9e94bf1588dd538ec3aa4c9"
      },
      {
        "address": "0x619c500dcb0251b31cd480030db2dcc19866c0c3",
        "assetState": 0,
        "block": 15236619,
        "id": "0x619c500dcb0251b31cd480030db2dcc19866c0c3",
        "name": "abc",
        "owner": "0x12fe650c86cd4346933ef1bcab21a1979d4c6786",
        "symbol": "GOAL-9956",
        "transferable": true,
        "tx": "0x6178b03589cda98573ff52a1afbcc07b14a2fddacc0132595949e9d8a0ed1b32"
      },
      {
        "address": "0x6d45a5b38a122a6dbc042601236d6ecc5c8e343e",
        "assetState": 0,
        "block": 15109853,
        "id": "0x6d45a5b38a122a6dbc042601236d6ecc5c8e343e",
        "name": "Ocean Data NFT",
        "owner": "0xbbd33afa85539fa65cc08a2e61a001876d2f13fe",
        "symbol": "OCEAN-NFT",
        "transferable": true,
        "tx": "0x27aa77a0bf3f7878910dc7bfe2116d9271138c222b3d898381a5c72eefefe624"
      },
      {
        "address": "0x7400078c5d4fd7704afca45a928d9fc97cbea744",
        "assetState": 0,
        "block": 15185056,
        "id": "0x7400078c5d4fd7704afca45a928d9fc97cbea744",
        "name": "Ocean Data NFT",
        "owner": "0xd30dd83132f2227f114db8b90f565bca2832afbd",
        "symbol": "OCEAN-NFT",
        "transferable": true,
        "tx": "0x2025374cd347e25e2651feec2f2faa2feb26664698eaea42b5dad1a31eda57f8"
      },
      {
        "address": "0x81decdb59dce5b4323e683a76f8fa8dd0eabc560",
        "assetState": 0,
        "block": 15185003,
        "id": "0x81decdb59dce5b4323e683a76f8fa8dd0eabc560",
        "name": "Ocean Data NFT",
        "owner": "0xd30dd83132f2227f114db8b90f565bca2832afbd",
        "symbol": "OCEAN-NFT",
        "transferable": true,
        "tx": "0x6ad6ec2ce86bb70e077590a64c886d72975374bd2e993f143d9da8edcaace82b"
      },
      {
        "address": "0x8684119ecf77c5be41f01760ad466725ffd9b960",
        "assetState": 0,
        "block": 14933034,
        "id": "0x8684119ecf77c5be41f01760ad466725ffd9b960",
        "name": "Ocean Data NFT",
        "owner": "0x87b5606fba13529e1812319d25c6c2cd5c3f3cbc",
        "symbol": "OCEAN-NFT",
        "transferable": true,
        "tx": "0x55ba746cd8e8fb4c739b8544a9034848082b627500b854cb8db0802dd7beb172"
      }
    ]
  }
}
```

</details>

---
description: Specification of storage options for assets in Ocean Protocol.
---

# Storage Specifications

Ocean does not handle the actual storage of files directly. The files are stored via other services which are then specified within the DDO.

During the publish process, file URLs must be encrypted with a respective _Provider_ API call before storing the DDO on-chain. For this, you need to send the following object to Provider (where "files" contains one or more storage objects):

```json
{
  "datatokenAddress":"0x1",
  "nftAddress": "0x2",
  "files": [
    ...
  ]
}
```

The remainder of this document specifies the different types of storage objects that are supported:

## Static URLs.

Parameters:

* `url` - File _URL_, **required**
* `method` - The HTTP _method_, **required**
* `headers` - Additional HTTP _headers_, **optional**

```json
{
    "type": "url",
    "url": "https://url.com/file1.csv",
    "method": "GET",
    "headers":
    {
        "Authorization": "Bearer 123",
        "APIKEY": "124",
    }
}
```

## Interplanetary File System

**`IPFS`**

The [Interplanetary File System](https://ipfs.tech/) (IPFS) is a distributed file storage protocol that allows computers all over the globe to store and serve files as part of a giant peer-to-peer network. Any computer, anywhere in the world, can download the IPFS software and start hosting and serving files.

Parameters:

* `hash` - The file _hash,_ **required**

<pre class="language-json"><code class="lang-json">{
<strong>    "type": "ipfs",
</strong>    "hash": "XXX"
}
</code></pre>

## GraphQL

**`GraphQL`**

[GraphQL](https://graphql.org/) is a query language for APIs and a runtime for fulfilling those queries with your existing data.

Parameters:

* `url` - Server endpoint _URL_, **required**
* `query` - The _query_ to be executed, **required**
* `headers` - Additional HTTP headers, **optional**

```json
{
     "type": "graphql",
     "url": "http://172.15.0.15:8000/subgraphs/name/oceanprotocol/ocean-subgraph",
     "headers":{
        	"Authorization": "Bearer 123",
        	"APIKEY": "124",
     },
     "query": """query{
            nfts(orderBy: createdTimestamp,orderDirection:desc){
                 id
                 symbol
                 createdTimestamp
            }
          }"""
}
```

## Smart Contract Data

Use a smart contract as data source.

Parameters:

* `chainId` - The _chainId_ used to query the contract, **required**
* `address` - The smartcontract _address_, **required**
* `abi` - The function _abi_ (NOT the entire contract abi), **required**

{% code overflow="wrap" %}
```json
{
"type": "smartcontract",
"chainId": 1,
"address": "0x8149276f275EEFAc110D74AFE8AFECEaeC7d1593",
"abi": {
	"inputs": [],
	"name": "swapOceanFee",
	"outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
	"stateMutability": "view",
	"type": "function"
	}
}
```
{% endcode %}

## Arweave

[Arweave](https://www.arweave.org/) is a decentralized data storage that allows permanently storing files over a distributed network of computers.

Parameters:

* `transactionId` - The _transaction identifier,_ **required**

```json
{
    "type": "arweave",
    "transactionId": "a4qJoQZa1poIv5guEzkfgZYSAD0uYm7Vw4zm_tCswVQ",
}
```

First-class integrations supported in the future : **`Filecoin`** **`Storj`** **`SQL`**

A service can contain multiple files, using multiple storage types.

Example:

```json
{
  "datatokenAddress": "0x1",
  "nftAddress": "0x2",
  "files": [
    {
      "type": "url",
      "url": "https://url.com/file1.csv",
      "method": "GET"
    },
    {
      "type": "ipfs",
      "hash": "XXXX"
    }
  ]
}
```

To get information about the files after encryption, the `/fileinfo` endpoint of the [_Provider_](provider/) returns based on a passed DID an array of file metadata (based on the file type):

```json
[
  {
    "type": "url",
    "contentLength": 100,
    "contentType": "application/json"
  },
  {
    "type": "ipfs",
    "contentLength": 130,
    "contentType": "application/text"
  }
]
```

This only concerns metadata about a file, but never the file URLs. The only way to decrypt them is to exchange at least 1 datatoken based on the respective service pricing scheme.

---
title: DIDs & DDOs - Asset Identifiers & Objects
description: Specification of Ocean asset identifiers and objects using DIDs & DDOs 
slug: /concepts/did-ddo/
section: concepts
---

## Overview

This document describes how Ocean assets follow the DID/DDO spec, such that Ocean assets can inherit DID/DDO benefits and enhance interoperability. 

Decentralized identifiers (DIDs) are a new type of identifier that enables verifiable, decentralized digital identity. Each DID is associated with a unique entity. DIDs may represent humans, objects, and more.

A DID Document (DDO) is JSON blob that holds information about the DID. Given a DID, a _resolver_ will return the DDO of that DID.

If a DID is the index key in a key-value pair, then the DID Document is the value to which the index key points.
The combination of a DID and its associated DID Document forms the root record for a decentralized identifier.

DIDs and DDOs follow [this specification](https://w3c-ccg.github.io/did-spec/) defined by the World Wide Web Consurtium (W3C).

## Rules for DIDs & DDOs in Ocean

- An _asset_ in Ocean represents a downloadable file, compute service, or similar. Each asset is a _resource_ under control of a _publisher_. The Ocean network itself does _not_ store the actual resource (e.g. files).
- An asset should have a DID and DDO. The DDO should include metadata about the asset.
- The DDO can only can be modified by _owners_ or _delegated users_.
- There _must_ be at least one client library acting as _resolver_, to get a DDO from a DID.
- A metadata cache like Aquarius can help in reading and searching through DDO data from the chain.

## Flow for publishing / retrieving DDOs

- The DDO is stored on-chain. 
- It's stored encrypted (using the private key of the provider). To resolve it, you must query the provider and you will might get the clear text ddo (depends on access rights, state, etc)
- Each asset has a state, which is held by the NFT Contract (and is also stored in the DDO.status.status).  The possible states are:
     - 0  = active
     - 1  = end-of-life
     - 2  = deprecated (by another asset)
     - 3  = revoked by publisher

## DID Structure

In Ocean, a DID is a string that looks like:

```text
did:op:0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea
```

where "0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea" = sha256(ERC721 contract addres + chainId)

It follows [the generic DID scheme](https://w3c-ccg.github.io/did-spec/#the-generic-did-scheme).


## DDO Attributes


A DDO has these standard attributes:

- `@context`   = array, contexts used for validation
- `id`  = string, computed as sha256(address of ERC721 contract + chainId)
- `created` = updated by aquarius, contains the date of publishing (block.timestamp)
- `updated`  = updated by aquarius, contains the date of the update (block.timestamp)
- `proof` = proof of ownership, optional


In Ocean, the DDO also has:

- `version` - stores version information (`v4` for us)
- `metadata` - stores metadata information [Metadata](#metadata)
- `services` - stores an array of services [Services](#services)
- `credentials` - optional flag, which describes the credentials needed to access a dataset [Credentials](#credentials)
- `status` -  stores status related fields [Status](#status)
- `files` and `encryptedFiles` - stores file(s) informations [Files](#files)
- `event` - stores the last event information [Event](#event)


## Metadata

The object has the following attributes. 

| Attribute           | Type                  | Required | Description                                                                                                                                                                                       |
| ------------------- | --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`description`**     | Text          | **Yes**       | Details of what the resource is. For a dataset, this attribute explains what the data represents and what it can be used for.|
| **`copyrightHolder`** | Text          | No       | The party holding the legal copyright. Empty by default.   
| **`name`**          | Text                  |**Yes**   | Descriptive name or title of the asset.                                                                                                                                                           |
| **`type`**          | Text                  |**Yes**   | Asset type. Includes `"dataset"` (e.g. csv file), `"algorithm"` (e.g. Python script). Each type needs a different subset of metadata attributes. |
| **`author`**        | Text                  |**Yes**   | Name of the entity generating this data (e.g. Tfl, Disney Corp, etc.).                                                                                                                            |
| **`license`**       | Text                  |**Yes**   | Short name referencing the license of the asset (e.g. Public Domain, CC-0, CC-BY, No License Specified, etc. ). If it's not specified, the following value will be added: "No License Specified". |
| **`links`**           | Array of Link | No       | Mapping of links for data samples, or links to find out more information. Links may be to either a URL or another Asset. We expect marketplaces to converge on agreements of typical formats for linked data: The Ocean Protocol itself does not mandate any specific formats as these requirements are likely to be domain-specific. The links array can be an empty array, but if there is a link object in it, then an "url" is required in that link object. |
| **`contentLanguage`**      | Text          | No       | The language of the content. Please use one of the language codes from the [IETF BCP 47 standard](https://tools.ietf.org/html/bcp47)|
| **`categories`**      | Array of Text | No       | Optional array of categories associated to the asset. Note: recommended to use `"tags"` instead of this.   |
| **`tags`**            | Array of Text | No       | Array of keywords or tags used to describe this content. Empty by default. |
| **`additionalInformation`**            | Object | No       | Stores additional information, this is customizable by publisher |

Depending on the asset type (dataset, algorithm), there are different metadata attributes supported:

### Algorithm attributes

An asset of type `algorithm` has the following additional attributes under `algorithm` in metadata object:

| Attribute           |   Type                |   Required  | Description                                         |
| ------------------- | ----------------------| ----------- |--------------------------------------------------- |
| **`language`**      | `string`              | no          | Language used to implement the software |
| **`version`**       | `string`              | no          | Version of the software. |
| **`container`**     | `Container Object`    | yes         | Object describing the Docker container image.(see below) |

The `container` object has the following attributes:

| Attribute           |   Type   | Required  | Description                                         |
| ------------------- | -------- | --------- | --------------------------------------------------- |
| **`entrypoint`**    | `string` | yes       | The command to execute, or script to run inside the Docker image. |
| **`image`**         | `string` | yes       | Name of the Docker image. |
| **`tag`**           | `string` | yes       | Tag of the Docker image. |
| **`checksum`**      | `string` | yes       | Checksum of the Docker image. |





## Services

| Attribute           | Type                  | Required | Description                                                                                                                                                                                       |
| ------------------- | --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`type`**            | Text          | **Yes**       | Type of service (access, compute, wss, etc |
| **`name`**            | Text          | No       | Service friendly name |
| **`description`**     | Text          | No       | Service description |
| **`datatokenAddress`**     | Text          | Yes       | Datatoken address |
| **`providerEndpoint`** | Text          | **Yes**       | Provider URI |
| **`timeout`**         | Number          | **Yes**       | describing how long the sevice can be used after consumption is initiated. A timeout of 0 represents no time limit. Expressed in seconds.|
| **`files`**           | Array of files object |**No **   | Array of `File` objects including the encrypted file urls that overwrites the root files object for this service [Files](#files)   |


Depending on the service type, the following attributes are applied:

### Compute datasets attributes

An asset with a service of type `compute` has the following additional attributes under `privacy` object :

| Attribute                    |   Type                |   Required  | Description                                               |
| ---------------------------- | ----------------------| ----------- |---------------------------------------------------------- |
| **`allowRawAlgorithm`**      | `boolean`             | yes         | If True, a drag & drop algo can be runned                 |
| **`allowNetworkAccess`**     | `boolean`             | yes         | If True, the algo job will have network access (stil WIP) |
| **`publisherTrustedAlgorithmPublishers `**      | Array of `String`     | yes         | If Empty , then any published algo is allowed. Otherwise, only published algorithms by some publishers are allowed |
| **`publisherTrustedAlgorithms `**      | Array of `publisherTrustedAlgorithms`     | yes         | If Empty , then any published algo is allowed. (see below) |

The `publisherTrustedAlgorithms ` is an array of objects with the following structure:

| Attribute                                |   Type   | Required  | Description                                         |
| ---------------------------------------- | -------- | --------- | --------------------------------------------------- |
| **`did`**                                | `string` | yes       | The did of the algo which is trusted by the publisher. |
| **`filesChecksum`**                      | `string` | yes       | Hash of ( algorithm's encryptedFiles + files section (as string) )
| **`containerSectionChecksum`**           | `string` | yes       | Hash of the algorithm container section (as string) |

To produce filesChecksum:  

```js
sha256(algorithm_ddo.service['metadata'].attributes.encryptedFiles + JSON.Stringify(algorithm_ddo.service['metadata'].attributes.main.files) )
```

To produce containerSectionChecksum: 

```js
sha256(JSON.Stringify(algorithm_ddo.service['metadata'].attributes.main.algorithm.container))
```

Example:

```json

{
   {...},
   "services":[
      {
         "type":"access",
         "name":"Download service",
         "description":"Download service",
         "datatokenAddress":"0x123",
         "providerEndpoint":"https://myprovider",
         "timeout":0
      },
      {
         "type":"compute",
         "name":"Compute service",
         "description":"Compute service",
         "datatokenAddress":"0x124",
         "providerEndpoint":"https://myprovider",
         "timeout":0,
         "privacy":{
            "allowRawAlgorithm":false,
            "allowNetworkAccess":true,
            "publisherTrustedAlgorithmPublishers":[
               "0x234",
               "0x235"
            ],
            "publisherTrustedAlgorithms":[
               {
                  "did":"did:op:123",
                  "filesChecksum":"100",
                  "containerSectionChecksum":"200"
               },
               {
                  "did":"did:op:124",
                  "filesChecksum":"110",
                  "containerSectionChecksum":"210"
               }
            ]
         }
      }
   ]
}

```

## Credentials

By default, a consumer can access a resource if they have 1.0 datatokens. _Credentials_ allow the publisher to optionally specify finer-grained permissions.

Consider a medical data use case, where only a credentialed EU researcher can legally access a given dataset. Ocean supports this as follows: a consumer can only access the resource if they have 1.0 datatokens _and_ one of the specified `"allow"` credentials.

This is like going to an R-rated movie, where you can only get in if you show both your movie ticket (datatoken) _and_ some some id showing you're old enough (credential).

Only credentials that can be proven are supported. This includes Ethereum public addresses, and (in the future) W3C Verifiable Credentials and more.

Ocean also supports `"deny"` credentials: if a consumer has any of these credentials, they cannot access the resource.

Here's an example object with both `"allow"` and `"deny"` entries.

```json
{
  {...},
  "credentials":{
      "allow":[
         {
            "type":"address",
            "values":[
               "0x123",
               "0x456"
            ]
         }
      ]
      },
      "deny":[
        {
         "type":"address",
         "values":[
            "0x2222",
            "0x333"
         ]
        }
      ]
  }
}
```


For future usage, we can extend that with different credentials types. Example:

```json
{
  "type": "credential3Box",
  "values": ["profile1", "profile2"]
}
```




## Status

The `status` object contains the following attributes:

| Attribute                                |   Type   | Required  | Description                                         |
| ---------------------------------------- | -------- | --------- | --------------------------------------------------- |
| **`status`**                             | `number` | yes       | Status of the asset (see above) |
| **`isListed`**                           | `boolean` | no       | If this asset should be displayed |
| **`isOrderDisabled`**                    | `boolean` | no       | If this asset has ordering disabled |

```json
{
  {...},
  "status": {
    "status": 0,
    "isListed": true,
    "isOrderDisabled": false
  }
```

## Files

The `files` section contains a `file` object (that contains a list of `file` objects) and a `encryptedFiles` string which contains the encrypted urls

Each `file` object has the following attributes, with the details necessary to consume and validate the data.

| Attribute            | Required | Description                                                                                                                                                                              |
| -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`contentType`**    |**Yes**   | File format.                                                                                                                                                                             |
| **`url`**            | Local    | Content URL. Omitted from the remote metadata. Supports `http(s)://` and `ipfs://` URLs.                                                                                                 |
| **`name`**           | No       | File name.                                                                                                                                                                               |
| **`checksum`**       | No       | Checksum of the file using your preferred format (i.e. MD5). Format specified in `checksumType`. If it's not provided can't be validated if the file was not modified after registering. |
| **`checksumType`**   | No       | Format of the provided checksum. Can vary according to server (i.e Amazon vs. Azure)                                                                                                     |
| **`contentLength`**  | No       | Size of the file in bytes.                                                                                                                                                               |
| **`encoding`**       | No       | File encoding (e.g. UTF-8).                                                                                                                                                              |
| **`compression`**    | No       | File compression (e.g. no, gzip, bzip2, etc).                                                                                                                                            |
| **`encrypted`**      | No       | Boolean. Is the file encrypted? If is not set is assumed the file is not encrypted                                                                                                       |
| **`encryptionMode`** | No       | Encryption mode used. Just valid if `encrypted=true`                                                                                                                                     |
| **`resourceId`**     | No       | Remote identifier of the file in the external provider. It is typically the remote id in the cloud provider.                                                                             |
| **`attributes`**     | No       | Key-Value hash map with additional attributes describing the asset file. It could include details like the Amazon S3 bucket, region, etc.     

Exanple:

```json
{
  {..},
  files:{
    "files": [
            {
              "contentLength": "3975",
              "contentType": "text/csv"
            }
          ],
    "encryptedFiles": "0x044736da6dae39889ff570c34540f24e5e084f4e5bd81eff3691b729c2dd1465ae8292fc721e9d4b1f10f56ce12036c9d149a4dab454b0795bd3ef8b7722c6001e0becdad5caeb2005859642284ef6a546c7ed76f8b350480691f0f6c6dfdda6c1e4d50ee90e83ce3cb3ca0a1a5a2544e10daa6637893f4276bb8d7301eb35306ece50f61ca34dcab550b48181ec81673953d4eaa4b5f19a45c0e9db4cd9729696f16dd05e0edb460623c843a263291ebe757c1eb3435bb529cc19023e0f49db66ef781ca692655992ea2ca7351ac2882bf340c9d9cb523b0cbcd483731dc03f6251597856afa9a68a1e0da698cfc8e81824a69d92b108023666ee35de4a229ad7e1cfa9be9946db2d909735",
  }
}
```

## Event

The `event` section contains informations about the latest transaction that created or update the ddo
This section is auto-completed by aquarius.

```json
{
  {...},
  "event": {
    "txid": "0x8d127de58509be5dfac600792ad24cc9164921571d168bff2f123c7f1cb4b11c",
    "blockNo": 12831214,
    "from": "0xAcca11dbeD4F863Bb3bC2336D3CE5BAC52aa1f83",
    "contract": "0x1a4b70d8c9DcA47cD6D0Fb3c52BB8634CA1C0Fdf",
    "update": false,
    "chainId": 1,
  }
```

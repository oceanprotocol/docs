---
title: DDO
slug: /developers/ddo/
section: developers
description: >-
  Specification of decentralized identifiers for assets in Ocean Protocol using
  the DDO standard.
---

# DDO Specification

**v4.1.0**

<< Diagram Work in Progress>>

```mermaid
erDiagram
DDO ||--|{ Metadata : contains
DDO ||--|{ Services : contains
Services ||--|{ ConsumerParameters : contains
Metadata ||--|{ AlgorithmMetadata : contains
AlgorithmMetadata ||--|{ Container : contains
    DDO {
        arrayOfString context
        string id
        string version
        number chainID
        string nftAddress 
        Metadata metadata
        Services services
        Credentials credentials       
}
    Metadata {
        ISODateTimeString created
        ISODateTimeString updated
        string description
        string copyrightHolder
        string name
        string type
        string author
        string license
        arrayOfString links
        string contentLanguage
        arrayOfString tags
        arrayOfStrings categories
        Object additionalInformation
        AlgorithmMetadata algorithm
}

AlgorithmMetadata {
    string language
    string version
    ConsumerParameters consumerParameters
    Container container
}

Container {
string entrypoint
string image
string tag
string checksum
}

Services {
string id
string type
string name
string description
string datatokenAddress
string serviceEndpoint
Files files
number timeout
Compute compute
ConsumerParameters consumerParameters
Object additionalInformation
}

ConsumerParameters {
string name
string type
string label
boolean required
string description
string-number-boolean default
ArrayOfOptions options
}
```

## Required Attributes

A DDO in Ocean has these required attributes:

| Attribute         | Type                                  | Description                                                                                                    |
| ----------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **`@context`**    | Array of `string`                     | Contexts used for validation.                                                                                  |
| **`id`**          | `string`                              | Computed as `sha256(address of ERC721 contract + chainId)`.                                                    |
| **`version`**     | `string`                              | Version information in [SemVer](https://semver.org) notation referring to this DDO spec version, like `4.1.0`. |
| **`chainId`**     | `number`                              | Stores chainId of the network the DDO was published to.                                                        |
| **`nftAddress`**  | `string`                              | NFT contract linked to this asset                                                                              |
| **`metadata`**    | [Metadata](did-ddo.md#metadata)       | Stores an object describing the asset.                                                                         |
| **`services`**    | [Services](did-ddo.md#services)       | Stores an array of services defining access to the asset.                                                      |
| **`credentials`** | [Credentials](did-ddo.md#credentials) | Describes the credentials needed to access a dataset in addition to the `services` definition.                 |

<details>

<summary>Full Enhanced DDO Example</summary>

```json
{
  "@context": ["https://w3id.org/did/v1"],
  "id": "did:op:ACce67694eD2848dd683c651Dab7Af823b7dd123",
  "version": "4.1.0",
  "chainId": 1,
  "nftAddress": "0x123",
  "metadata": {
    "created": "2020-11-15T12:27:48Z",
    "updated": "2021-05-17T21:58:02Z",
    "description": "Sample description",
    "name": "Sample asset",
    "type": "dataset",
    "author": "OPF",
    "license": "https://market.oceanprotocol.com/terms"
  },
  "services": [
    {
      "id": "1",
      "type": "access",
      "files": "0x044736da6dae39889ff570c34540f24e5e084f4e5bd81eff3691b729c2dd1465ae8292fc721e9d4b1f10f56ce12036c9d149a4dab454b0795bd3ef8b7722c6001e0becdad5caeb2005859642284ef6a546c7ed76f8b350480691f0f6c6dfdda6c1e4d50ee90e83ce3cb3ca0a1a5a2544e10daa6637893f4276bb8d7301eb35306ece50f61ca34dcab550b48181ec81673953d4eaa4b5f19a45c0e9db4cd9729696f16dd05e0edb460623c843a263291ebe757c1eb3435bb529cc19023e0f49db66ef781ca692655992ea2ca7351ac2882bf340c9d9cb523b0cbcd483731dc03f6251597856afa9a68a1e0da698cfc8e81824a69d92b108023666ee35de4a229ad7e1cfa9be9946db2d909735",
      "name": "Download service",
      "description": "Download service",
      "datatokenAddress": "0x123",
      "serviceEndpoint": "https://myprovider.com",
      "timeout": 0,
      "consumerParameters": [
        {
          "name": "surname",
          "type": "text",
          "label": "Name",
          "required": true,
          "default": "NoName",
          "description": "Please fill your name"
        },
        {
          "name": "age",
          "type": "number",
          "label": "Age",
          "required": false,
          "default": 0,
          "description": "Please fill your age"
        }
      ]
    },
    {
      "id": "2",
      "type": "compute",
      "files": "0x044736da6dae39889ff570c34540f24e5e084f4e5bd81eff3691b729c2dd1465ae8292fc721e9d4b1f10f56ce12036c9d149a4dab454b0795bd3ef8b7722c6001e0becdad5caeb2005859642284ef6a546c7ed76f8b350480691f0f6c6dfdda6c1e4d50ee90e83ce3cb3ca0a1a5a2544e10daa6637893f4276bb8d7301eb35306ece50f61ca34dcab550b48181ec81673953d4eaa4b5f19a45c0e9db4cd9729696f16dd05e0edb460623c843a263291ebe757c1eb3435bb529cc19023e0f49db66ef781ca692655992ea2ca7351ac2882bf340c9d9cb523b0cbcd483731dc03f6251597856afa9a68a1e0da698cfc8e81824a69d92b108023666ee35de4a229ad7e1cfa9be9946db2d909735",
      "name": "Compute service",
      "description": "Compute service",
      "datatokenAddress": "0x124",
      "serviceEndpoint": "https://myprovider.com",
      "timeout": 3600,
      "compute": {
        "allowRawAlgorithm": false,
        "allowNetworkAccess": true,
        "publisherTrustedAlgorithmPublishers": ["0x234", "0x235"],
        "publisherTrustedAlgorithms": [
          {
            "did": "did:op:123",
            "filesChecksum": "100",
            "containerSectionChecksum": "200"
          },
          {
            "did": "did:op:124",
            "filesChecksum": "110",
            "containerSectionChecksum": "210"
          }
        ]
      }
    }
  ],
  "credentials": {
    "allow": [
      {
        "type": "address",
        "values": ["0x123", "0x456"]
      }
    ],
    "deny": [
      {
        "type": "address",
        "values": ["0x2222", "0x333"]
      }
    ]
  },

  "nft": {
    "address": "0x123",
    "name": "Ocean Protocol Asset v4",
    "symbol": "OCEAN-A-v4",
    "owner": "0x0000000",
    "state": 0,
    "created": "2000-10-31T01:30:00",
    "tokenURI": "xxx"
  },

  "datatokens": [
    {
      "address": "0x000000",
      "name": "Datatoken 1",
      "symbol": "DT-1",
      "serviceId": "1"
    },
    {
      "address": "0x000001",
      "name": "Datatoken 2",
      "symbol": "DT-2",
      "serviceId": "2"
    }
  ],

  "event": {
    "tx": "0x8d127de58509be5dfac600792ad24cc9164921571d168bff2f123c7f1cb4b11c",
    "block": 12831214,
    "from": "0xAcca11dbeD4F863Bb3bC2336D3CE5BAC52aa1f83",
    "contract": "0x1a4b70d8c9DcA47cD6D0Fb3c52BB8634CA1C0Fdf",
    "datetime": "2000-10-31T01:30:00"
  },

  "purgatory": {
    "state": false
  },

  "stats": {
    "orders": 4
  }
}
```

</details>

## Metadata

This object holds information describing the actual asset.

| Attribute                   | Type                                                | Description                                                                                                                                                                                       |
| --------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`created`**               | `ISO date/time string`                              | Contains the date of the creation of the dataset content in ISO 8601 format preferably with timezone designators, e.g. `2000-10-31T01:30:00Z`.                                                    |
| **`updated`**               | `ISO date/time string`                              | Contains the date of last update of the dataset content in ISO 8601 format preferably with timezone designators, e.g. `2000-10-31T01:30:00Z`.                                                     |
| **`description`**\*         | `string`                                            | Details of what the resource is. For a dataset, this attribute explains what the data represents and what it can be used for.                                                                     |
| **`copyrightHolder`**       | `string`                                            | The party holding the legal copyright. Empty by default.                                                                                                                                          |
| **`name`**\*                | `string`                                            | Descriptive name or title of the asset.                                                                                                                                                           |
| **`type`**\*                | `string`                                            | Asset type. Includes `"dataset"` (e.g. csv file), `"algorithm"` (e.g. Python script). Each type needs a different subset of metadata attributes.                                                  |
| **`author`**\*              | `string`                                            | Name of the entity generating this data (e.g. Tfl, Disney Corp, etc.).                                                                                                                            |
| **`license`**\*             | `string`                                            | Short name referencing the license of the asset (e.g. Public Domain, CC-0, CC-BY, No License Specified, etc. ). If it's not specified, the following value will be added: "No License Specified". |
| **`links`**                 | Array of `string`                                   | Mapping of URL strings for data samples, or links to find out more information. Links may be to either a URL or another asset.                                                                    |
| **`contentLanguage`**       | `string`                                            | The language of the content. Use one of the language codes from the [IETF BCP 47 standard](https://tools.ietf.org/html/bcp47)                                                                     |
| **`tags`**                  | Array of `string`                                   | Array of keywords or tags used to describe this content. Empty by default.                                                                                                                        |
| **`categories`**            | Array of `string`                                   | Array of categories associated to the asset. Note: recommended to use `tags` instead of this.                                                                                                     |
| **`additionalInformation`** | Object                                              | Stores additional information, this is customizable by publisher                                                                                                                                  |
| **`algorithm`**\*\*         | [Algorithm Metadata](did-ddo.md#algorithm-metadata) | Information about asset of `type` `algorithm`                                                                                                                                                     |

\* Required

\*\* Required for algorithms only

<details>

<summary>Metadata Example</summary>

```json
{
  "metadata": {
    "created": "2020-11-15T12:27:48Z",
    "updated": "2021-05-17T21:58:02Z",
    "description": "Sample description",
    "name": "Sample asset",
    "type": "dataset",
    "author": "OPF",
    "license": "https://market.oceanprotocol.com/terms"
  }
}
```

</details>

#### Services

Services define the access for an asset, and each service is represented by its respective datatoken.

An asset should have at least one service to be actually accessible, and can have as many services which make sense for a specific use case.

| Attribute                   | Type                                                                                     | Description                                                                                                                                  |
| --------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **`id`**\*                  | `string`                                                                                 | Unique ID                                                                                                                                    |
| **`type`**\*                | `string`                                                                                 | Type of service `access`, `compute`, `wss` etc.                                                                                              |
| **`name`**                  | `string`                                                                                 | Service friendly name                                                                                                                        |
| **`description`**           | `string`                                                                                 | Service description                                                                                                                          |
| **`datatokenAddress`**\*    | `string`                                                                                 | Datatoken                                                                                                                                    |
| **`serviceEndpoint`**\*     | `string`                                                                                 | Provider URL (schema + host)                                                                                                                 |
| **`files`**\*               | [Files](did-ddo.md#files)                                                                | Encrypted file.                                                                                                                              |
| **`timeout`**\*             | `number`                                                                                 | Describing how long the service can be used after consumption is initiated. A timeout of `0` represents no time limit. Expressed in seconds. |
| **`compute`**\*\*           | [Compute](developers/compute-to-data/compute-options.md)                                 | If service is of `type` `compute`, holds information about the compute-related privacy settings & resources.                                 |
| **`consumerParameters`**    | [Consumer Parameters](developers/compute-to-data/compute-options.md#consumer-parameters) | An object the defines required consumer input before consuming the asset                                                                     |
| **`additionalInformation`** | Object                                                                                   | Stores additional information, this is customizable by publisher                                                                             |

\* Required

\*\* Required for compute assets only

#### Files

The `files` field is returned as a `string` which holds the encrypted file URLs.

<details>

<summary>Files Example</summary>

```json
{
  "files": "0x044736da6dae39889ff570c34540f24e5e084f4e5bd81eff3691b729c2dd1465ae8292fc721e9d4b1f10f56ce12036c9d149a4dab454b0795bd3ef8b7722c6001e0becdad5caeb2005859642284ef6a546c7ed76f8b350480691f0f6c6dfdda6c1e4d50ee90e83ce3cb3ca0a1a5a2544e10daa6637893f4276bb8d7301eb35306ece50f61ca34dcab550b48181ec81673953d4eaa4b5f19a45c0e9db4cd9729696f16dd05e0edb460623c843a263291ebe757c1eb3435bb529cc19023e0f49db66ef781ca692655992ea2ca7351ac2882bf340c9d9cb523b0cbcd483731dc03f6251597856afa9a68a1e0da698cfc8e81824a69d92b108023666ee35de4a229ad7e1cfa9be9946db2d909735"
}
```

</details>

#### Credentials

By default, a consumer can access a resource if they have 1 datatoken. _Credentials_ allow the publisher to optionally specify more fine-grained permissions.

Consider a medical data use case, where only a credentialed EU researcher can legally access a given dataset. Ocean supports this as follows: a consumer can only access the resource if they have 1 datatoken _and_ one of the specified `"allow"` credentials.

This is like going to an R-rated movie, where you can only get in if you show both your movie ticket (datatoken) _and_ some identification showing you're old enough (credential).

Only credentials that can be proven are supported. This includes Ethereum public addresses, and in the future [W3C Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) and more.

Ocean also supports `"deny"` credentials: if a consumer has any of these credentials, they can not access the resource.

Here's an example object with both `"allow"` and `"deny"` entries:

<details>

<summary>Credentials Example</summary>

```json
{
  "credentials": {
    "allow": [
      {
        "type": "address",
        "values": ["0x123", "0x456"]
      }
    ],
    "deny": [
      {
        "type": "address",
        "values": ["0x2222", "0x333"]
      }
    ]
  }
}
```

</details>

#### DDO Checksum

In order to ensure the integrity of the DDO, a checksum is computed for each DDO:

```js
const checksum = sha256(JSON.stringify(ddo));
```

The checksum hash is used when publishing/updating metadata using the `setMetaData` function in the ERC721 contract, and is stored in the event generated by the ERC721 contract.

<details>

<summary>MetadataCreated and MetadataUpdated smart contract events</summary>

```solidity
event MetadataCreated(
  address indexed createdBy,
  uint8 state,
  string decryptorUrl,
  bytes flags,
  bytes data,
  bytes metaDataHash,
  uint256 timestamp,
  uint256 blockNumber
);

event MetadataUpdated(
  address indexed updatedBy,
  uint8 state,
  string decryptorUrl,
  bytes flags,
  bytes data,
  bytes metaDataHash,
  uint256 timestamp,
  uint256 blockNumber
);
```

</details>

_Aquarius_ should always verify the checksum after data is decrypted via a _Provider_ API call.

#### State

Each asset has a state, which is held by the NFT contract. The possible states are:

| State   | Description                    | Discoverable in Ocean Market | Ordering allowed | Listed under profile |
| ------- | ------------------------------ | ---------------------------- | ---------------- | -------------------- |
| **`0`** | Active                         | Yes                          | Yes              | Yes                  |
| **`1`** | End-of-life                    | No                           | No               | No                   |
| **`2`** | Deprecated (by another asset)  | No                           | No               | No                   |
| **`3`** | Revoked by publisher           | No                           | No               | No                   |
| **`4`** | Ordering is temporary disabled | Yes                          | No               | Yes                  |
| **`5`** | Asset unlisted.                | No                           | Yes              | Yes                  |

### Aquarius Enhanced DDO Response

The following fields are added by _Aquarius_ in its DDO response for convenience reasons, where an asset returned by _Aquarius_ inherits the DDO fields stored on-chain.

These additional fields are never stored on-chain, and are never taken into consideration when [hashing the DDO](did-ddo.md#ddo-checksum).

#### NFT

The `nft` object contains information about the ERC721 NFT contract which represents the intellectual property of the publisher.

| Attribute      | Type                   | Description                                                                         |
| -------------- | ---------------------- | ----------------------------------------------------------------------------------- |
| **`address`**  | `string`               | Contract address of the deployed ERC721 NFT contract.                               |
| **`name`**     | `string`               | Name of NFT set in contract.                                                        |
| **`symbol`**   | `string`               | Symbol of NFT set in contract.                                                      |
| **`owner`**    | `string`               | ETH account address of the NFT owner.                                               |
| **`state`**    | `number`               | State of the asset reflecting the NFT contract value. See [State](did-ddo.md#state) |
| **`created`**  | `ISO date/time string` | Contains the date of NFT creation.                                                  |
| **`tokenURI`** | `string`               | tokenURI                                                                            |

<details>

<summary>NFT Object Example</summary>

```json
{
  "nft": {
    "address": "0x000000",
    "name": "Ocean Protocol Asset v4",
    "symbol": "OCEAN-A-v4",
    "owner": "0x0000000",
    "state": 0,
    "created": "2000-10-31T01:30:00Z"
  }
}
```

</details>

#### Datatokens

The `datatokens` array contains information about the ERC20 datatokens attached to [asset services](did-ddo.md#services).

| Attribute       | Type     | Description                                      |
| --------------- | -------- | ------------------------------------------------ |
| **`address`**   | `string` | Contract address of the deployed ERC20 contract. |
| **`name`**      | `string` | Name of NFT set in contract.                     |
| **`symbol`**    | `string` | Symbol of NFT set in contract.                   |
| **`serviceId`** | `string` | ID of the service the datatoken is attached to.  |

<details>

<summary>Datatokens Array Example</summary>

```json
{
  "datatokens": [
    {
      "address": "0x000000",
      "name": "Datatoken 1",
      "symbol": "DT-1",
      "serviceId": "1"
    },
    {
      "address": "0x000001",
      "name": "Datatoken 2",
      "symbol": "DT-2",
      "serviceId": "2"
    }
  ]
}
```

</details>

#### Event

The `event` section contains information about the last transaction that created or updated the DDO.

<details>

<summary>Event Example</summary>

```json
{
  "event": {
    "tx": "0x8d127de58509be5dfac600792ad24cc9164921571d168bff2f123c7f1cb4b11c",
    "block": 12831214,
    "from": "0xAcca11dbeD4F863Bb3bC2336D3CE5BAC52aa1f83",
    "contract": "0x1a4b70d8c9DcA47cD6D0Fb3c52BB8634CA1C0Fdf",
    "datetime": "2000-10-31T01:30:00"
  }
}
```

</details>

#### Purgatory

Contains information about an asset's purgatory status defined in [`list-purgatory`](https://github.com/oceanprotocol/list-purgatory). Marketplace interfaces are encouraged to prevent certain user actions like adding liquidity on assets in purgatory.

| Attribute    | Type      | Description                                                                                   |
| ------------ | --------- | --------------------------------------------------------------------------------------------- |
| **`state`**  | `boolean` | If `true`, asset is in purgatory.                                                             |
| **`reason`** | `string`  | If asset is in purgatory, contains the reason for being there as defined in `list-purgatory`. |

<details>

<summary>Purgatory Example</summary>

\`\`\`json { "purgatory": { "state": true, "reason": "Copyright violation" } } \`\`\`

```json
{
  "purgatory": {
    "state": false
  }
}
```

</details>

#### Statistics

The `stats` section contains different statistics fields.

| Attribute    | Type     | Description                                                                                                  |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------ |
| **`orders`** | `number` | How often an asset was ordered, meaning how often it was either downloaded or used as part of a compute job. |

<details>

<summary>Statistics Example</summary>

```json
{
  "stats": {
    "orders": 4
  }
}
```

</details>

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
- The DDO is stored on-chain. It's stored in in plaintext, with two exceptions: (1) the field for resource-access url is encrypted (2) the whole DDO may be encrypted, if the publisher is willing to lose 100% of discoverability.
- A metadata cache like Aquarius can help in reading and writing DDO data from the chain.

## DID Structure

In Ocean, a DID is a string that looks like:

```text
did:op:0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea
```

It follows [the generic DID scheme](https://w3c-ccg.github.io/did-spec/#the-generic-did-scheme).

The part after `did:op:` is the asset's on-chain Ethereum address (minus the "0x"). One can be computed from the other; therefore there is a 1:1 mapping between did and Ethereum address.

## DDO Attributes

![DDO Content](images/ddo-content.png)

A DDO has these standard attributes:

- `@context`
- `id`
- `created`
- `updated`
- `publicKey`
- `authentication`
- `proof`
- `verifiableCredential`

In Ocean, the DDO also has:

- `dataToken`
- `service`
- `credentials` - optional flag, which describes the credentials needed to access a dataset (see below)

Asset metadata must be included as one of the objects inside the `"service"` array, with type `"metadata"`.

## DDO Service Types

There are many possible service types for a DDO.

- `metadata` - describing the asset
- `access` - describing how the asset can be downloaded
- `compute` - describing how the asset can be computed upon

Each asset has a `metadata` service and at least one other service.

Each service is distinguished by the `DDO.service.type` attribute.

Each service has an `attributes` section holding the information related to the service. That section _must_ have a `main` sub-section, holding all the mandatory information that a service has to provide.

A part of the `attributes.main` sub-section, other optional sub-sections like `attributes.extra` can be added. These depend on the service type.

Each service has a `timeout` (in seconds) section describing how long the sevice can be used after consumption is initiated. A timeout of 0 represents no time limit.

The `cost` attribute is obsolete, as of Ocean V3. As of V3, to consume an asset, one sends exactly 1.0 datatokens of the asset, so a `cost` is not needed.

## DDO Service Example

Here is an example DDO service:

```json
"service": [
  {
    "index": 0,
    "type": "metadata",
    "serviceEndpoint": "https://service/api/v1/metadata/assets/ddo/did:op:0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea",
    "attributes": {
      "main": {},
      "additionalInformation": {},
      "curation": {}
    }
  },
  {
    "index": 1,
    "type": "access",
    "serviceEndpoint": "http://localhost:8030/api/v1/provider/services/consume",
    "attributes": {
      "main": {
        "cost":"10",
        "timeout":0
      },
      "additionalInformation": {}
    }
  },
  {
    "index": 2,
    "type": "compute",
    "serviceEndpoint": "http://localhost:8030/api/v1/provider/services/compute",
    "attributes": {
      "main": {
        "cost":"10",
        "timeout":3600
      },
      "additionalInformation": {}
    }
  }
]
```

## DDO Credentials for Fine-Grained Permissions

By default, a consumer can access a resource if they have 1.0 datatokens. _Credentials_ allow the publisher to optionally specify finer-grained permissions.

Consider a medical data use case, where only a credentialed EU researcher can legally access a given dataset. Ocean supports this as follows: a consumer can only access the resource if they have 1.0 datatokens _and_ one of the specified `"allow"` credentials.

This is like going to an R-rated movie, where you can only get in if you show both your movie ticket (datatoken) _and_ some some id showing you're old enough (credential).

Only credentials that can be proven are supported. This includes Ethereum public addresses, and (in the future) W3C Verifiable Credentials and more.

Ocean also supports `"deny"` credentials: if a consumer has any of these credentials, they cannot access the resource.

Here's an example object with both `"allow"` and `"deny"` entries.

```json
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
```

For future usage, we can extend that with different credentials types. Example:

```json
{
  "type": "credential3Box",
  "values": ["profile1", "profile2"]
}
```

---
title: Identifiers & Metadata
slug: /concepts/did-ddo/
section: concepts
description: >-
  Specification of decentralized identifiers for assets in Ocean Protocol using
  the DID & DDO standards.
---


## Identifiers 

## Metadata



### Overview

This document describes how Ocean assets follow the DID/DDO specification, such that Ocean assets can inherit DID/DDO benefits and enhance interoperability. DIDs and DDOs follow the [specification defined by the World Wide Web Consortium (W3C)](https://w3c-ccg.github.io/did-spec/).

Decentralized identifiers (DIDs) are a type of identifier that enable verifiable, decentralized digital identity. Each DID is associated with a unique entity, and DIDs may represent humans, objects, and more.

A DID Document (DDO) is a JSON blob that holds information about the DID. Given a DID, a _resolver_ will return the DDO of that DID.

### Rules for DID & DDO

An _asset_ in Ocean represents a downloadable file, compute service, or similar. Each asset is a _resource_ under the control of a _publisher_. The Ocean network itself does _not_ store the actual resource (e.g. files).

An _asset_ has a DID and DDO. The DDO should include [metadata](did-ddo.md#metadata) about the asset, and define access in at least one [service](did-ddo.md#services). Only _owners_ or _delegated users_ can modify the DDO.

All DDOs are stored on-chain in encrypted form to be fully GDPR-compatible. A metadata cache like _Aquarius_ can help in reading, decrypting, and searching through encrypted DDO data from the chain. Because the file URLs are encrypted on top of the full DDO encryption, returning unencrypted DDOs e.g. via an API is safe to do as the file URLs will still stay encrypted.

### DID

In Ocean, a DID is a string that looks like this:

```
did:op:0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea
```

The part after `did:op:` is the ERC721 contract address(in checksum format) and the chainId (expressed as a decimal) the asset has been published to:

```js
const checksum = sha256(ERC721 contract address + chainId)
console.log(checksum)
// 0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea
```

It follows [the generic DID scheme](https://w3c-ccg.github.io/did-spec/#the-generic-did-scheme).

### Publishing & Retrieving DDOs

The DDO is stored on-chain as part of the NFT contract and stored in encrypted form using the private key of the _Provider_. To resolve it, a metadata cache like _Aquarius_ must query the provider to decrypt the DDO.

Here is the flow:

![DDO flow](../../.gitbook/assets/architecture/ddo-flow.png)

<details>

<summary>UML source</summary>

```
title DDO flow

User(Ocean library) -> User(Ocean library): Prepare DDO
User(Ocean library) -> Provider: encrypt DDO
Provider -> User(Ocean library): encryptedDDO
User(Ocean library) -> ERC721 contract: publish encryptedDDO
Aquarius <-> ERC721 contract: monitors ERC721 contract and gets MetdadataCreated Event (contains encryptedDDO)
Aquarius -> ERC721 contract: calls getMetaData()
Aquarius -> Provider: decrypt encryptedDDO, signed request using Aquarius's private key
Provider -> ERC721 contract: checks state using getMetaData()
Provider -> Provider: depending on metadataState (expired,retired) and aquarius address, validates the request
Provider -> Aquarius: DDO
Aquarius -> Aquarius : validate DDO
Aquarius -> Aquarius : cache DDO
Aquarius -> Aquarius : enhance cached DDO in response with additional infos like events & stats
```

</details>

---
description: >-
  Specification of decentralized identifiers for assets in Ocean Protocol using
  the DID & DDO standards.
---

# Identifiers (DIDs)

### Identifiers

In Ocean, we use decentralized identifiers (DIDs) to identify your asset within the network. Decentralized identifiers (DIDs) are a type of identifier that enables verifiable, decentralized digital identity. In contrast to typical, centralized identifiers, DIDs have been designed so that they may be decoupled from centralized registries, identity providers, and certificate authorities. Specifically, while other parties might be used to help enable the discovery of information related to a DID, the design enables the controller of a DID to prove control over it without requiring permission from any other party. DIDs are URIs that associate a DID subject with a DID document allowing trustable interactions associated with that subject.

{% embed url="https://www.youtube.com/watch?t=95s&v=I06AUNt7ee8" %}
What is a DID and DDO?
{% endembed %}

### Examples

DIDs in Ocean follow [the generic DID scheme](https://w3c-ccg.github.io/did-spec/#the-generic-did-scheme), they look like this:

```
did:op:0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea
```

The part after `did:op:` is the ERC721 contract address(in checksum format) and the chainId (expressed to 10 decimal places). The following javascript example shows how to calculate the DID for the asset:

```runkit  nodeVersion="18.x.x"
const CryptoJS = require('crypto-js')

const dataNftAddress = '0xa331155197F70e5e1EA0CC2A1f9ddB1D49A9C1De'
const chainId = 1
const checksum = CryptoJS.SHA256(dataNftAddress + chainId.toString(10))
const did = 'did:op:' + checksum

console.log(did)

```

Before creating a DID you should first publish a data NFT, we suggest reading the following sections so you are familiar with the process:&#x20;

* [Creating a data NFT with ocean.js](ocean.js/creating-datanft.md)
* [Publish flow with ocean.py](ocean.py/publish-flow.md)

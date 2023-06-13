---
title: Identifiers & Metadata
slug: /concepts/did-ddo/
section: concepts
description: >-
  Specification of decentralized identifiers for assets in Ocean Protocol using
  the DID & DDO standards.
---

# Identifiers

### Identifiers

In Ocean, we use decentralized identifiers (DIDs) to identify your asset within the network. Decentralized identifiers (DIDs) are a type of identifier that enables verifiable, decentralized digital identity. In contrast to typical, centralized identifiers, DIDs have been designed so that they may be decoupled from centralized registries, identity providers, and certificate authorities. Specifically, while other parties might be used to help enable the discovery of information related to a DID, the design enables the controller of a DID to prove control over it without requiring permission from any other party. DIDs are URIs that associate a DID subject with a DID document allowing trustable interactions associated with that subject.

A DID in Ocean looks like this:

```
did:op:0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea
```

The part after `did:op:` is the ERC721 contract address(in checksum format) and the chainId (expressed as a decimal) the asset has been published to:

```js
const checksum = sha256(ERC721 contract address + chainId)
console.log(checksum)
// 0ebed8226ada17fde24b6bf2b95d27f8f05fcce09139ff5cec31f6d81a7cd2ea
```

DIDs in ocean follow [the generic DID scheme](https://w3c-ccg.github.io/did-spec/#the-generic-did-scheme).

{% embed url="https://www.youtube.com/watch?t=95s&v=I06AUNt7ee8" %}
What is a DID and DDO?
{% endembed %}

###

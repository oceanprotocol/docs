---
description: This page describes the architecture of a Ocean Enterprise system
---

# Technical Architecture

Depending on the required level of asset protection, an OE-enabled dataspace can be deployed in one of two security configurations:

1\. SSI security disabled: In configurations where SSI security is disabled, access control relies solely on the consumer’s Web3 address. Access to an asset is granted if:&#x20;

* The address is explicitly listed in the allow list, or&#x20;
* The address is not present in the deny list

2\. SSI Security Enabled In a dataspace secured by Self-Sovereign Identity (SSI), access to assets is granted upon successful verification of:&#x20;

* &#x20;The consumer’s Web3 address •
* The Verifiable Credentials required by each asset.&#x20;

This dual-layered approach ensures that only authorized identities possessing the appropriate credentials can interact with sensitive resources.

















###

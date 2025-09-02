---
description: This chapter describes the process of publishing an asset in Ocean Enterprise.
---

# Publishing an asset

## Introduction

Publishing an asset involves recording its description on-chain and generating the associated smart contracts. Once this information is stored, the asset description is indexed and cached within the OE node’s indexer database, enabling users to easily discover, access, and utilize the asset.

<mark style="color:$info;background-color:$info;">**Note**</mark><mark style="color:$info;background-color:$info;">: In OE, an asset can have multiple services associated, as outlined</mark> <mark style="color:red;background-color:$info;">here</mark><mark style="color:$info;background-color:$info;">. During the publishing process, the asset’s initial service is automatically created. To add additional services, simply edit the asset after publication.</mark>



### What happens when an asset is published

When an asset is published, the following actions occur:

1. The asset smart contracts (data NFT, data token)  are created on-chain. The price is saved in the Fixed Rate Exchange contract.
2. The location of the service files of the asset  is encrypted
3. Asset's DDO is created in the form of a Verifiable Credential, in JWT format, encrypted and saved in IPFS
4. The Content ID of the file is saved on-chain



## Precondition

The user has logged in to the marketplace.



## Steps

1\. Press the Publish button from the main page.  The Asset Publishing flow has started.

<figure><img src="../../../.gitbook/assets/image (4).png" alt=""><figcaption></figcaption></figure>






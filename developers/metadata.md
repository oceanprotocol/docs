---
description: How can you enhance data discovery?
---

# Metadata

Imagine you're searching for data on Spanish almond production within a dApp operating within the Ocean ecosystem, managed by a European fruit and nut association. This hypothetical dApp may host a vast collection of datasets, making it essential to have a way to identify the relevant ones. One effective approach is to have **metadata** associated with each dataset to serve as valuable information about the data itself.

<figure><img src="../.gitbook/assets/data_everywhere.gif" alt=""><figcaption><p>Data discovery</p></figcaption></figure>

Metadata plays a **crucial role** in asset **discovery**, providing essential information such as **asset type, name, creation date, and licensing details**. Each data asset can have a [decentralized identifier (DID)](identifiers.md) that resolves to a DID document ([DDO](ddo-specification.md)) containing associated metadata. The DDO is essentially [JSON](https://www.json.org/) filling in metadata fields. To understand working with OCEAN DIDs, you can refer to the [DID documentation](identifiers.md). For a more comprehensive understanding of metadata structure, the [DDO Specification](ddo-specification.md) documentation provides in-depth information.

In general, any dApp within the Ocean ecosystem is required to store metadata for every listed dataset. It's important to note that dApps do not necessarily need to possess the datasets themselves; they primarily focus on storing and managing the associated metadata. While specific metadata requirements may vary, certain fundamental pieces of metadata, including:

* **name**, e.g. “Largueta Almond Production: 1995 to 2005”
* **dateCreated**, e.g. “2007–01–20”
* **datePublished**, e.g. “2022–11–10T12:32:15Z”
* **author**, e.g. “Spanish Almond Board”
* **license**, e.g. “SAB Data License v4”
* technical information about the **files**, such as the content type.

Other metadata might also be available. For example:

* **categories**, e.g. \[“agriculture”, “economics”]
* **tags**, e.g. \[“Europe”, “Italy”, “nuts”, “almonds”]
* **description**, e.g. “2002 Italian almond production statistics for 14 varieties and 20 regions.”
* **additionalInformation** can be used to store any other facts about the asset.

### **Overview**

DIDs and DDOs follow the [specification defined by the World Wide Web Consortium (W3C)](https://w3c-ccg.github.io/did-spec/).

**Decentralized identifiers** (DIDs) are a type of identifier that enable verifiable, decentralized digital identity. Each DID is associated with a unique entity, and DIDs may represent humans, objects, and more. A **DID Document** (DDO) is a JSON blob that holds information about the DID. Given a DID, a _resolver_ will return the DDO of that DID.

Decentralized identifiers (DIDs) are a type of identifier that enable verifiable, decentralized digital identity. Each DID is associated with a unique entity, and DIDs may represent humans, objects, and more.

#### Rules for DID & DDO

An _asset_ in Ocean represents a downloadable file, compute service, or similar. Each asset is a _resource_ under the control of a _publisher_. The Ocean network itself does _not_ store the actual resource (e.g. files).

An _asset_ has a DID and DDO. The DDO should include [metadata](did-ddo.md#metadata) about the asset, and define access in at least one [service](did-ddo.md#services). Only _owners_ or _delegated users_ can modify the DDO.

All DDOs are stored on-chain in encrypted form to be fully GDPR-compatible. A metadata cache like [_Aquarius_](aquarius/) can help in reading, decrypting, and searching through encrypted DDO data from the chain. Because the file URLs are encrypted on top of the full DDO encryption, returning unencrypted DDOs e.g. via an API is safe to do as the file URLs will still stay encrypted.

#### Publishing & Retrieving DDOs

The DDO is stored on-chain as part of the NFT contract and stored in encrypted form using the private key of the [_Provider_](provider/). To resolve it, a metadata cache like [_Aquarius_](aquarius/) must query the provider to decrypt the DDO.

Here is the flow:

<figure><img src="../.gitbook/assets/DDO Flow.jpg" alt=""><figcaption><p>DDO Flow</p></figcaption></figure>

To set up the metadata for an asset, you'll need to call the [**setMetaData**](https://github.com/oceanprotocol/contracts/blob/9e29194d910f28a4f0ef17ce6dc8a70741f63309/contracts/templates/ERC721Template.sol#L247) function at the contract level.&#x20;

* [**\_metaDataState**](ddo-specification.md#state) - Each asset has a state, which is held by the NFT contract. One of the following: Active(0), End-of-life(1), Deprecated(2), Revoked(3)....
* **\_metaDataDecryptorUrl** - You create the DDO and then the Provider encrypts it with its private key. Only that Provider can decrypt it.
* **\_metaDataDecryptorAddress** - The decryptor address.
* **flags** - Additional information to represent the state of the data. One of two values: 0 - plain text, 1 - compressed, 2 - encrypted. Used by Aquarius.
* **data -** The [DDO](ddo-specification.md) of the asset. You create the DDO as a JSON, send it to the [Provider](provider/) that encrypts it, and then you set it up at the contract level.
* **\_metaDataHash** - Hash of the clear data **generated before the encryption.** It is used by Provider to check the validity of the data after decryption.
* **\_metadataProofs** - Array with signatures of entities who validated data(before the encryption). Pass an empty array if you don't have any.

```solidity
function setMetadata(uint8 _metaDataState, string calldata _metaDataDecryptorUrl
  , string calldata _metaDataDecryptorAddress, bytes calldata flags, 
  bytes calldata data,bytes32 _metaDataHash, metaDataProof[] memory _metadataProofs) external {
  require(
      permissions[msg.sender].updateMetadata,
      "ERC721Template: NOT METADATA_ROLE"
  );
  _setMetaData(_metaDataState, _metaDataDecryptorUrl, _metaDataDecryptorAddress,flags, 
  data,_metaDataHash, _metadataProofs);
}
```

{% hint style="info" %}
While we utilize a specific DDO structure, you have the flexibility to customize it according to your unique requirements. However, to enable seamless processing, it is essential to have your own Aquarius instance that can handle your modified DDO.
{% endhint %}

You'll have more information about the DIDs, on the [Identifiers](identifiers.md) page.

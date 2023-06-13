# Metadata



Imagine you're searching for data on Spanish almond production within a dApp operating within the Ocean ecosystem, managed by a European fruit and nut association. This hypothetical dApp may host a vast collection of datasets, making it essential to have a way to identify the relevant ones. One effective approach is to have metadata associated with each dataset to serve as valuable information about the data itself.

Metadata plays a **crucial role** in asset **discovery**, providing essential information such as **asset type, name, creation date, and licensing details**. Each data asset can have a [decentralized identifier (DID)](identifiers.md) that resolves to a DID document ([DDO](ddo-specification.md)) containing associated metadata. The DDO is essentially [JSON](https://www.json.org/) filling in metadata fields. To understand working with OCEAN DIDs, you can refer to the [DID documentation](identifiers.md). For a more comprehensive understanding of metadata structure, the [DDO Specification](ddo-specification.md) documentation provides in-depth information.

In general, any dApp within the Ocean ecosystem is required to store metadata for every listed dataset. It's important to note that dApps do not necessarily need to possess the datasets themselves; they primarily focus on storing and managing the associated metadata. While specific metadata requirements may vary, certain fundamental pieces of metadata, including:

* **name**, e.g. “Largueta Almond Production: 1995 to 2005”
* **dateCreated**, e.g. “2007–01–20”
* **datePublished**, e.g. “2022–11–10T12:32:15Z”
* **author**, e.g. “Spanish Almond Board”
* **license**, e.g. “SAB Data License v4”
* **price**, e.g. “0”
* technical information about the **files**, such as the content type.

Other metadata might also be available. For example:

* **categories**, e.g. \[“agriculture”, “economics”]
* **tags**, e.g. \[“Europe”, “Italy”, “nuts”, “almonds”]
* **description**, e.g. “2002 Italian almond production statistics for 14 varieties and 20 regions.”
* **additionalInformation** can be used to store any other facts about the asset.



```solidity
/**
     * @dev setMetaData
     *    Creates or update Metadata for Aqua(emit event)
          Also, updates the METADATA_DECRYPTOR key
     * @param _metaDataState metadata state
     * @param _metaDataDecryptorUrl decryptor URL
     * @param _metaDataDecryptorAddress decryptor public key
     * @param flags flags used by Aquarius
     * @param data data used by Aquarius
     * @param _metaDataHash hash of clear data (before the encryption, if any)
     * @param _metadataProofs optional signatures of entitys who validated data (before the encryption, if any)
     */
    function set metadata(uint8 _metaDataState, string calldata _metaDataDecryptorUrl
        , string calldata _metaDataDecryptorAddress, bytes calldata flags, 
        bytes calldata data,bytes32 _metaDataHash, metaDataProof[] memory _metadataProofs) external {
        require(
            permissions[msg.sender].updateMetadata,
            "ERC721Template: NOT METADATA_ROLE"
        );
        _setMetaData(_metaDataState, _metaDataDecryptorUrl, _metaDataDecryptorAddress,flags, 
        data,_metaDataHash, _metadataProofs);
    }TODO: Add information ab
```

Overview

This document describes how Ocean assets follow the DID/DDO specification, such that Ocean assets can inherit DID/DDO benefits and enhance interoperability. DIDs and DDOs follow the [specification defined by the World Wide Web Consortium (W3C)](https://w3c-ccg.github.io/did-spec/).

Decentralized identifiers (DIDs) are a type of identifier that enable verifiable, decentralized digital identity. Each DID is associated with a unique entity, and DIDs may represent humans, objects, and more.

A DID Document (DDO) is a JSON blob that holds information about the DID. Given a DID, a _resolver_ will return the DDO of that DID.



Decentralized identifiers (DIDs) are a type of identifier that enable verifiable, decentralized digital identity. Each DID is associated with a unique entity, and DIDs may represent humans, objects, and more.

A DID Document (DDO) is a JSON blob that holds information about the DID. Given a DID, a _resolver_ will return the DDO of that DID.

#### Rules for DID & DDO

An _asset_ in Ocean represents a downloadable file, compute service, or similar. Each asset is a _resource_ under the control of a _publisher_. The Ocean network itself does _not_ store the actual resource (e.g. files).

An _asset_ has a DID and DDO. The DDO should include [metadata](did-ddo.md#metadata) about the asset, and define access in at least one [service](did-ddo.md#services). Only _owners_ or _delegated users_ can modify the DDO.

All DDOs are stored on-chain in encrypted form to be fully GDPR-compatible. A metadata cache like _Aquarius_ can help in reading, decrypting, and searching through encrypted DDO data from the chain. Because the file URLs are encrypted on top of the full DDO encryption, returning unencrypted DDOs e.g. via an API is safe to do as the file URLs will still stay encrypted.

#### Publishing & Retrieving DDOs

The DDO is stored on-chain as part of the NFT contract and stored in encrypted form using the private key of the _Provider_. To resolve it, a metadata cache like _Aquarius_ must query the provider to decrypt the DDO.

Here is the flow:

<figure><img src="../.gitbook/assets/DDO Flow.jpg" alt=""><figcaption><p>DDO Flow</p></figcaption></figure>

out:



* add details of the parameters of the setmetadata function
* when you make the ddo, you build it as json then the provider encrypts it
* Flags - info if it is encrypted or not.&#x20;
* We use a certain ddo structure but nobody stops you to do your own ddo that has the structure you want. You need your own aqua
* example on how to call it from ocean.py and ocean.js


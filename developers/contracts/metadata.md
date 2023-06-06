# Metadata

In the Ocean V4, you will hear about two metadata fields:&#x20;

One set at the NFT level&#x20;

On the NFT itself, there is a [metadata store](https://github.com/oceanprotocol/contracts/blob/9e29194d910f28a4f0ef17ce6dc8a70741f63309/contracts/templates/ERC721Template.sol#L247) used to store the following information.

This information is used in the discovery process by aquarius and also gives important information about the asset itself.&#x20;

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
    function setMetaData(uint8 _metaDataState, string calldata _metaDataDecryptorUrl
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



One set at the DDO level





Imagine you're searching for data on Spanish almond production within a dApp operating within the Ocean ecosystem, managed by a European fruit and nut association. This hypothetical dApp may host a vast collection of datasets, making it essential to have a way to identify the relevant ones. One effective approach is to have metadata associated with each dataset to serve as valuable information about the data itself.

Metadata plays a **crucial role** in asset **discovery**, providing essential information such as **asset type, name, creation date, and licensing details**. Each data asset can have a [decentralized identifier (DID)](../Identifiers-Metadata.md) that resolves to a DID document ([DDO](../ddo-specification.md)) containing associated metadata. The DDO is essentially [JSON](https://www.json.org/) filling in metadata fields. To understand working with OCEAN DIDs, you can refer to the [DID documentation](../Identifiers-Metadata.md). For a more comprehensive understanding of metadata structure, the [DDO Specification](../ddo-specification.md) documentation provides in-depth information.

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



There is a complete list of all the possible metadata in [Ocean Enhancement Proposal #8 (OEP-8)](https://github.com/oceanprotocol/OEPs/tree/master/8), which is based on [schema.org’s Dataset schema](https://schema.org/Dataset). The metadata is stored and sent around inside a [JSON](http://json.org/) object like the following example:

```json
{
  "curation": {
    "rating": 0.892,
    "numVotes": 1040,
    "isListed": true
  },
  "base": {
    "name": "Madrid Weather forecast",
    "description": "Weather forecast of Europe/Madrid",
    "dateCreated": "2019-05-16T12:36:14.535Z",
    "author": "Norwegian Meteorological Institute",
    "type": "dataset",
    "license": "Public Domain",
    "copyrightHolder": "Norwegian Meteorological Institute",
    "files": [
      {
        "contentLength": "0",
        "contentType": "text/xml",
        "compression": "none",
        "index": 0
      }
    ],
    "categories": [
      "Meteorology"
    ],
    "tags": ["Europe", "Spain", "Madrid"],
    "price": "0",
    "encryptedFiles": "0x7a0d1c66ae861…df43aa9",
    "checksum": "d7296ccaaec…9cc9adf05faebfca",
    "datePublished": "2019-05-16T12:41:01Z"
  },
  "additionalInformation": {
    "isUseful": true,
    "isMagic": false
  }
}

```

When building dApps, you, as a developer, can leverage the power of metadata in the Ocean Protocol ecosystem.&#x20;

OEP8 specifies the Ocean metadata schema, including the required fields. This schema is based on the public DataSet schema from schema.org. By utilizing Ethereum mainnet and compatible networks as an on-chain metadata store, Ocean ensures the availability and discoverability of data assets. Once the transaction fee is paid, there are no additional expenses or DevOps work required to maintain metadata accessibility in the future. This simplifies integration with the rest of the Ethereum-based Ocean system. Although storage costs on Ethereum mainnet are not negligible, they are manageable and the benefits outweigh the trade-offs compared to alternative solutions.

Thanks to the permissionless and decentralized nature of data on the Ethereum mainnet, any last mile tool can access metadata. Ocean [Aquarius](../aquarius/) supports different metadata fields for each specific Ocean-based marketplace, and developers can also utilize The Graph to observe metadata fields common across all marketplaces.




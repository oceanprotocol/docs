# Asset DDO Metadata

## Overview

This page defines the schema for asset _metadata_. Metadata is the subset of an Ocean DDO that holds information about the asset.

The schema is based on public schema.org [DataSet schema](https://schema.org/Dataset).

Standardized names is critical for effective searching, sorting and filtering (curation).

This page specifies metadata attributes that _must_ be included, and that _may_ be included. These attributes are organized hierarchically, from top-layer attributes like `"main"` to sub-level attributes like `"main.type"`. This page also provides DDO metadata examples.

## Publishing Metadata

The publisher publishes an asset DDO (including metadata) onto the chain. 

Asset DDO metadata is stored in plaintext by default. File URLs are stored encrypted on the chain. All metadata may be encrypted, though at a severe cost to discoverability.

The publisher may be the asset owner, or a marketplace acting on behalf of the owner.

Most metadata fields may be modified after creation. The blockchain records the provenance of changes.

The master reference for the DDO is the on-chain version, aka _remote_ version. Off-chain metadata caches like Aquarius are _local_ versions. 

Aquarius can be used to help read and write data to the chain. Its local cache has decrypted information that was encrypted on-chain.

# Attributes

## Attributes for Metadata

An asset represents a resource in Ocean, e.g. a dataset or an algorithm.

A `metadata` object has the following attributes, all of which are objects.

| Attribute                   | Required | Description                                                |
| --------------------------- | -------- | ---------------------------------------------------------- |
| **`main`**                  | Yes      | Main attributes                                            |
| **`status`**                | No.      | Status attributes                                          |
| **`additionalInformation`** | No       | Optional attributes                                        |
| **`encryptedFiles`**        | (remote) | Encrypted string of the `attributes.main.files` object.    |
| **`encryptedServices`**     | (remote) | Encrypted string of the `attributes.main.services` object. |

The `main` and `additionalInformation` attributes are independent of the asset type. All assets have those metadata sections.

## Attributes for Metadata.Main

**This list of attributes can't be modified after creation**, because these are considered as the metadata essence of the asset created. This information is used to calculate the unique checksum of the asset. If any change would be necessary in the following attributes, it would be necessary to create a new asset derived from the existing one.

The `main` object has the following attributes. Not all are required. Some are required by only the metadata store (_remote_) and others are mandatory for _local_ metadata only. If required or not by both, they are marked with _Yes/No_ in the _Required_ column.

| Attribute           | Type                  | Required | Description                                                                                                                                                                                       |
| ------------------- | --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`name`**          | Text                  | Yes      | Descriptive name or title of the asset.                                                                                                                                                           |
| **`type`**          | Text                  | Yes      | Type of the asset. E.g. "dataset", "algorithm".              |
| **`dateCreated`**   | DateTime              | Yes      | The date on which the asset was created by the originator. ISO 8601 format, Coordinated Universal Time, e.g. `2019-01-31T08:38:32Z`.                                                              |
| **`datePublished`** | DateTime              | (remote) | The date on which the asset DDO is registered into the metadata store (Aquarius)                                                                                                                  |
| **`author`**        | Text                  | Yes      | Name of the entity generating this data (e.g. Tfl, Disney Corp, etc.).                                                                                                                            |
| **`license`**       | Text                  | Yes      | Short name referencing the license of the asset (e.g. Public Domain, CC-0, CC-BY, No License Specified, etc. ). If it's not specified, the following value will be added: "No License Specified". |
| **`files`**         | Array of files object | Yes      | Array of `File` objects including the encrypted file urls.   |

### Attributes for Metadata.Main.Type

_Asset types_ include:

- `dataset` - represents a dataset or data resource. It could be for example a CSV file or a multiple JPG files.
- `algorithm` - represents a piece of software. It could be a python script using tensorflow, a spark job, etc.

Each _asset type_ needs a different subset of metadata attributes.

### Metadata.Main.File Attribute

A file object has the following attributes, with the details necessary to consume and validate the data.

| Attribute            | Required | Description                                                                                                                                                                              |
| -------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`url`**            | (local)  | Content URL. Omitted from the remote metadata. Supports `http(s)://` and `ipfs://` URLs.                                                                                                 |
| **`name`**           | no       | File name.                                                                                                                                                                               |
| **`index`**          | yes      | Index number starting from 0 of the file.                                                                                                                                                |
| **`contentType`**    | yes      | File format.                                                                                                                                                                             |
| **`checksum`**       | no       | Checksum of the file using your preferred format (i.e. MD5). Format specified in `checksumType`. If it's not provided can't be validated if the file was not modified after registering. |
| **`checksumType`**   | no       | Format of the provided checksum. Can vary according to server (i.e Amazon vs. Azure)                                                                                                     |
| **`contentLength`**  | no       | Size of the file in bytes.                                                                                                                                                               |
| **`encoding`**       | no       | File encoding (e.g. UTF-8).                                                                                                                                                              |
| **`compression`**    | no       | File compression (e.g. no, gzip, bzip2, etc).                                                                                                                                            |
| **`encrypted`**      | no       | Boolean. Is the file encrypted? If is not set is assumed the file is not encrypted                                                                                                       |
| **`encryptionMode`** | no       | Encryption mode used. Just valid if `encrypted=true`                                                                                                                                     |
| **`resourceId`**     | no       | Remote identifier of the file in the external provider. It is typically the remote id in the cloud provider.                                                                             |
| **`attributes`**     | no       | Key-Value hash map with additional attributes describing the asset file. It could include details like the Amazon S3 bucket, region, etc.                                                |

## Attributes for Metadata.AdditionalInformation

All the additional information will be stored as part of the `additionalInformation` section.

| Attribute             | Type          | Required |
| --------------------- | ------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`categories`**      | Array of Text | No       | Optional array of categories associated to the asset.                                                                                                                                                                                                                                                                                                                                                                                                            |
| **`tags`**            | Array of Text | No       | Array of keywords or tags used to describe this content. Empty by default.                                                                                                                                                                                                                                                                                                                                                                                       |
| **`description`**     | Text          | No       | Details of what the resource is. For a dataset, this attribute explains what the data represents and what it can be used for.                                                                                                                                                                                                                                                                                                                                    |
| **`copyrightHolder`** | Text          | No       | The party holding the legal copyright. Empty by default.                                                                                                                                                                                                                                                                                                                                                                                                         |
| **`workExample`**     | Text          | No       | Example of the concept of this asset. This example is part of the metadata, not an external link.                                                                                                                                                                                                                                                                                                                                                                |
| **`links`**           | Array of Link | No       | Mapping of links for data samples, or links to find out more information. Links may be to either a URL or another Asset. We expect marketplaces to converge on agreements of typical formats for linked data: The Ocean Protocol itself does not mandate any specific formats as these requirements are likely to be domain-specific. The links array can be an empty array, but if there is a link object in it, then an "url" is required in that link object. |
| **`inLanguage`**      | Text          | No       | The language of the content. Please use one of the language codes from the [IETF BCP 47 standard](https://tools.ietf.org/html/bcp47).                                                                                                                                                                                                                                                                                                                            |

### Other Suggested Additional Attributes

These are examples of attributes that can enhance the discoverability of a resource:

| Attribute              | Description                                                                                                                                                                 |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`sla`**              | Service Level Agreement.                                                                                                                                                    |
| **`industry`**         |                                                                                                                                                                             |
| **`updateFrequency`**  | An indication of update latency - i.e. How often are updates expected (seldom, annually, quarterly, etc.), or is the resource static that is never expected to get updated. |
| **`termsOfService`**   |                                                                                                                                                                             |
| **`privacy`**          |                                                                                                                                                                             |
| **`keyword`**          | A list of keywords/tags describing a dataset.                                                                                                                               |
| **`structuredMarkup`** | A link to machine-readable structured markup (such as ttl/json-ld/rdf) describing the dataset.                                                                              |

The publisher of a DDO _may_ add additional attributes or change the above object definition.

### Status Attributes

A `status` object has the following attributes.

| Attribute             | Type    | Required | Description                                                                                                                                                                        |
| --------------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`isListed`**        | Boolean | No       | Use to flag unsuitable content. True by default. If it's false, the content must not be returned.                                                                                  |
| **`isRetired`**       | Boolean | No       | Flag retired content. False by default. If it's true, the content may either not be returned, or returned with a note about retirement.                                            |
| **`isOrderDisabled`** | Boolean | No       | For temporarily disabling ordering assets, e.g. when file host is in maintenance. False by default. If it's true, no ordering of assets for download or compute should be allowed. |

# Example

## Example: All fields in plaintext (local)

This is what the DDO metadata looks like with all fields in plaintext. This is before it's stored on-chain or when it's retrieved and decrypted into a local cache.

```json
{
  "main": {
    "name": "Madrid Weather forecast",
    "dateCreated": "2019-05-16T12:36:14.535Z",
    "author": "Norwegian Meteorological Institute",
    "type": "dataset",
    "license": "Public Domain",
    "price": "123000000000000000000",
    "files": [
      {
        "index": 0,
        "url": "https://example-url.net/weather/forecast/madrid/350750305731.xml",
        "contentLength": "0",
        "contentType": "text/xml",
        "compression": "none"
      }
    ]
  },
  "additionalInformation": {
    "description": "Weather forecast of Europe/Madrid in XML format",
    "copyrightHolder": "Norwegian Meteorological Institute",
    "categories": ["Other"],
    "links": [],
    "tags": [],
    "updateFrequency": null,
    "structuredMarkup": []
  },
  "status": {
    "isListed": true,
    "isRetired": false,
    "isOrderDisabled": false
  }
}
```

## Example: Some fields encrypted (on-chain / remote)

The previous example gave all fields in plaintext. Here's the same example, with some fields encrypted and changed for on-chain storage.

This is how the metadata looks as a response to querying Aquarius (remote metadata).

url` is removed from all objects in the `files` array, and `encryptedFiles` is added.

```json
{
  "service": [
    {
      "index": 0,
      "serviceEndpoint": "http://aquarius:5000/api/v1/aquarius/assets/ddo/{did}",
      "type": "metadata",
      "attributes": {
        "main": {
          "type": "dataset",
          "name": "Madrid Weather forecast",
          "dateCreated": "2019-05-16T12:36:14.535Z",
          "author": "Norwegian Meteorological Institute",
          "license": "Public Domain",
          "files": [
            {
              "contentLength": "0",
              "contentType": "text/xml",
              "compression": "none",
              "index": 0
            }
          ],
          "datePublished": "2019-05-16T12:41:01Z"
        },
        "encryptedFiles": "0x7a0d1c66ae861…df43aa9",
        "additionalInformation": {
          "description": "Weather forecast of Europe/Madrid in XML format",
          "copyrightHolder": "Norwegian Meteorological Institute",
          "categories": ["Other"],
          "links": [],
          "tags": [],
          "updateFrequency": null,
          "structuredMarkup": []
        },
        "status": {
          "isListed": true,
          "isRetired": false,
          "isOrderDisabled": false
        }
      }
    }
  ]
}
```

# Attributes for Asset Type

## Attributes for Algorithm

An asset of type `algorithm` has the following additional attributes under `main.algorithm`:

| Attribute       | Type     | Required | Description                                   |
| --------------- | -------- | -------- | --------------------------------------------- |
| **`language`**  | `string` | no       | Language used to implement the software       |
| **`format`**    | `string` | no       | Packaging format of the software.             |
| **`version`**   | `string` | no       | Version of the software.                      |
| **`container`** | `Object` | yes      | Object describing the Docker container image. |

The `container` object has the following attributes:

| Attribute        | Type     | Required | Description                                                       |
| ---------------- | -------- | -------- | ----------------------------------------------------------------- |
| **`entrypoint`** | `string` | yes      | The command to execute, or script to run inside the Docker image. |
| **`image`**      | `string` | yes      | Name of the Docker image.                                         |
| **`tag`**        | `string` | yes      | Tag of the Docker image.                                          |
| **`checksum`**   | `string` | yes      | Checksum of the Docker image.                                     |

```json
{
  "index": 0,
  "serviceEndpoint": "http://localhost:5000/api/v1/aquarius/assets/ddo/{did}",
  "type": "metadata",
  "attributes": {
    "main": {
      "author": "John Doe",
      "dateCreated": "2019-02-08T08:13:49Z",
      "license": "CC-BY",
      "name": "My super algorithm",
      "type": "algorithm",
      "algorithm": {
        "language": "scala",
        "format": "docker-image",
        "version": "0.1",
        "container": {
          "entrypoint": "node $ALGO",
          "image": "node",
          "tag": "10",
          "checksum": "efb2c764274b745f5fc37f97c6b0e761"
        }
      },
      "files": [
        {
          "name": "build_model",
          "url": "https://raw.githubusercontent.com/oceanprotocol/test-algorithm/master/javascript/algo.js",
          "index": 0,
          "checksum": "efb2c764274b745f5fc37f97c6b0e761",
          "contentLength": "4535431",
          "contentType": "text/plain",
          "encoding": "UTF-8",
          "compression": "zip"
        }
      ]
    },
    "additionalInformation": {
      "description": "Workflow to aggregate weather information",
      "tags": ["weather", "uk", "2011", "workflow", "aggregation"],
      "copyrightHolder": "John Doe"
    }
  }
}
```

## Attributes for Compute

An asset with a service of type `compute` has the following additional attributes under `main.privacy`:

| Attribute                         | Type               | Required | Description                                                |
| --------------------------------- | ------------------ | -------- | ---------------------------------------------------------- |
| **`allowRawAlgorithm`**           | `boolean`          | yes      | If True, a drag & drop algo can be runned                  |
| **`allowNetworkAccess`**          | `boolean`          | yes      | If True, the algo job will have network access (stil WIP)  |
| **`publisherTrustedAlgorithms `** | Array of `Objects` | yes      | If Empty , then any published algo is allowed. (see below) |

The `publisherTrustedAlgorithms ` is an array of objects with the following structure:

| Attribute                      | Type     | Required | Description                                                        |
| ------------------------------ | -------- | -------- | ------------------------------------------------------------------ |
| **`did`**                      | `string` | yes      | The did of the algo which is trusted by the publisher.             |
| **`filesChecksum`**            | `string` | yes      | Hash of ( algorithm's encryptedFiles + files section (as string) ) |
| **`containerSectionChecksum`** | `string` | yes      | Hash of the algorithm container section (as string)                |

To produce `filesChecksum`:

```javascript
sha256(
  algorithm_ddo.service['metadata'].attributes.encryptedFiles +
    JSON.Stringify(algorithm_ddo.service['metadata'].attributes.main.files)
)
```

To produce `containerSectionChecksum`:

```javascript
sha256(
  JSON.Stringify(
    algorithm_ddo.service['metadata'].attributes.main.algorithm.container
  )
)
```

#### Example of a compute service

```json
{
  "type": "compute",
  "index": 1,
  "serviceEndpoint": "https://provider.oceanprotocol.com",
  "attributes": {
    "main": {
      "name": "dataAssetComputingService",
      "creator": "0xA32C84D2B44C041F3a56afC07a33f8AC5BF1A071",
      "datePublished": "2021-02-17T06:31:33Z",
      "cost": "1",
      "timeout": 3600,
      "privacy": {
        "allowRawAlgorithm": true,
        "allowNetworkAccess": false,
        "publisherTrustedAlgorithms": [
          {
            "did": "0xxxxx",
            "filesChecksum": "1234",
            "containerSectionChecksum": "7676"
          },
          {
            "did": "0xxxxx",
            "filesChecksum": "1232334",
            "containerSectionChecksum": "98787"
          }
        ]
      }
    }
  }
}
```

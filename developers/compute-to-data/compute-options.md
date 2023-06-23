---
title: Compute Options
section: developers
description: Specification of compute options for assets in Ocean Protocol.
---

# Compute Options

### Compute Options

An asset with a service of `type` `compute` has the following additional attributes under the `compute` object. This object is required if the asset is of `type` `compute`, but can be omitted for `type` of `access`.

<table><thead><tr><th width="404.3333333333333">Attribute</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>allowRawAlgorithm</code></strong>*</td><td><code>boolean</code></td><td>If <code>true</code>, any passed raw text will be allowed to run. Useful for an algorithm drag &#x26; drop use case, but increases risk of data escape through malicious user input. Should be <code>false</code> by default in all implementations.</td></tr><tr><td><strong><code>allowNetworkAccess</code></strong>*</td><td><code>boolean</code></td><td>If <code>true</code>, the algorithm job will have network access.</td></tr><tr><td><strong><code>publisherTrustedAlgorithmPublishers</code></strong>*</td><td>Array of <code>string</code></td><td>If not defined, then any published algorithm is allowed. If empty array, then no algorithm is allowed. If not empty any algo published by the defined publishers is allowed.</td></tr><tr><td><strong><code>publisherTrustedAlgorithms</code></strong>*</td><td>Array of <code>publisherTrustedAlgorithms</code></td><td>If not defined, then any published algorithm is allowed. If empty array, then no algorithm is allowed. Otherwise only the algorithms defined in the array are allowed. (see below).</td></tr></tbody></table>

\* Required

### Trusted Algorithms

The `publisherTrustedAlgorithms` is an array of objects with the following structure:

<table><thead><tr><th width="289.3333333333333">Attribute</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>did</code></strong></td><td><code>string</code></td><td>The DID of the algorithm which is trusted by the publisher.</td></tr><tr><td><strong><code>filesChecksum</code></strong></td><td><code>string</code></td><td>Hash of algorithm's files (as <code>string</code>).</td></tr><tr><td><strong><code>containerSectionChecksum</code></strong></td><td><code>string</code></td><td>Hash of algorithm's image details (as <code>string</code>).</td></tr></tbody></table>

To produce `filesChecksum`, call the Provider FileInfoEndpoint with parameter withChecksum = True. If algorithm has multiple files, `filesChecksum` is a concatenated string of all files checksums (ie: checksumFile1+checksumFile2 , etc)

To produce `containerSectionChecksum`:

{% code overflow="wrap" %}
```js
sha256(algorithm_ddo.metadata.algorithm.container.entrypoint + algorithm_ddo.metadata.algorithm.container.checksum);
```
{% endcode %}

<details>

<summary>Compute Options Example</summary>

Example:

```json
{
  "services": [
    {
      "id": "1",
      "type": "access",
      "files": "0x044736da6dae39889ff570c34540f24e5e084f...",
      "name": "Download service",
      "description": "Download service",
      "datatokenAddress": "0x123",
      "serviceEndpoint": "https://myprovider.com",
      "timeout": 0
    },
    {
      "id": "2",
      "type": "compute",
      "files": "0x6dd05e0edb460623c843a263291ebe757c1eb3...",
      "name": "Compute service",
      "description": "Compute service",
      "datatokenAddress": "0x124",
      "serviceEndpoint": "https://myprovider.com",
      "timeout": 0,
      "compute": {
        "allowRawAlgorithm": false,
        "allowNetworkAccess": true,
        "publisherTrustedAlgorithmPublishers": ["0x234", "0x235"],
        "publisherTrustedAlgorithms": [
          {
            "did": "did:op:123",
            "filesChecksum": "100",
            "containerSectionChecksum": "200"
          },
          {
            "did": "did:op:124",
            "filesChecksum": "110",
            "containerSectionChecksum": "210"
          }
        ]
      }
    }
  ]
}
```

</details>

### Consumer Parameters

Sometimes, the asset needs additional input data before downloading or running a Compute-to-Data job. Examples:

* The publisher needs to know the sampling interval before the buyer downloads it. Suppose the dataset URL is `https://example.com/mydata`. The publisher defines a field called `sampling` and asks the buyer to enter a value. This parameter is then added to the URL of the published dataset as query parameters: `https://example.com/mydata?sampling=10`.
* An algorithm that needs to know the number of iterations it should perform. In this case, the algorithm publisher defines a field called `iterations`. The buyer needs to enter a value for the `iterations` parameter. Later, this value is stored in a specific location in the Compute-to-Data pod for the algorithm to read and use it.

The `consumerParameters` is an array of objects. Each object defines a field and has the following structure:

| Attribute           | Type                             | Description                                                                |
| ------------------- | -------------------------------- | -------------------------------------------------------------------------- |
| **`name`**\*        | `string`                         | The parameter name (this is sent as HTTP param or key towards algo)        |
| **`type`**\*        | `string`                         | The field type (text, number, boolean, select)                             |
| **`label`**\*       | `string`                         | The field label which is displayed                                         |
| **`required`**\*    | `boolean`                        | If customer input for this field is mandatory.                             |
| **`description`**\* | `string`                         | The field description.                                                     |
| **`default`**\*     | `string`, `number`, or `boolean` | The field default value. For select types, `string` key of default option. |
| **`options`**       | Array of `option`                | For select types, a list of options.                                       |

\* Required

Each `option` is an `object` containing a single key:value pair where the key is the option name, and the value is the option value.

<details>

<summary>Consumer Parameters Example</summary>

```json
[
  {
    "name": "hometown",
    "type": "text",
    "label": "Hometown",
    "required": true,
    "description": "What is your hometown?",
    "default": "Nowhere"
  },
  {
    "name": "age",
    "type": "number",
    "label": "Age",
    "required": false,
    "description": "Please fill your age",
    "default": 0
  },
  {
    "name": "developer",
    "type": "boolean",
    "label": "Developer",
    "required": false,
    "description": "Are you a developer?",
    "default": false
  },
  {
    "name": "languagePreference",
    "type": "select",
    "label": "Language",
    "required": false,
    "description": "Do you like NodeJs or Python",
    "default": "nodejs",
    "options": [
      {
        "nodejs": "I love NodeJs"
      },
      {
        "python": "I love Python"
      }
    ]
  }
]
```

</details>

Algorithms will have access to a JSON file located at `/data/inputs/algoCustomData.json`, which contains the `keys/values` for input data required. Example:

<details>

<summary>Key Value Example</summary>

\`\`\`json { "hometown": "São Paulo", "age": 10, "developer": true, "languagePreference": "nodejs" } \`\`\`

</details>

---
title: Compute Options
section: developers
description: Specification of compute options for assets in Ocean Protocol.
---

# Compute Options

### Compute Options

An asset categorized as a `compute type` incorporates additional attributes under the `compute object`.

These attributes are specifically relevant to assets that fall within the compute category and are not required for assets classified under the `access type`. However, if an asset is designated as `compute`, it is essential to include these attributes to provide comprehensive information about the compute service associated with the asset.

<table><thead><tr><th width="224.33333333333331">Attribute</th><th width="154">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>allowRawAlgorithm</code></strong>*</td><td><code>boolean</code></td><td>If <code>true</code>, any passed raw text will be allowed to run. Useful for an algorithm drag &#x26; drop use case, but increases risk of data escape through malicious user input. Should be <code>false</code> by default in all implementations.</td></tr><tr><td><strong><code>allowNetworkAccess</code></strong>*</td><td><code>boolean</code></td><td>If <code>true</code>, the algorithm job will have network access.</td></tr><tr><td><strong><code>publisherTrustedAlgorithmPublishers</code></strong>*</td><td>Array of <code>string</code></td><td>If not defined or empty array, then any publisher address has **restricted** access to run the algorithm against that specific dataset. If the list contains wildcard '*', all publishers are allowed to run compute jobs against that dataset.</td></tr><tr><td><strong><code>publisherTrustedAlgorithms</code></strong>*</td><td>Array of <code>publisherTrustedAlgorithms</code></td><td>If not defined or empty array, then any algorithm will not be allowed by that specific dataset. If the list contains wildcard '*', all algorithms are trusted & allowed by the compute asset. (see below).</td></tr></tbody></table>

\* Required

### Trusted Algorithms

The `publisherTrustedAlgorithms` is an array of objects that specifies algorithm permissions. It controls which algorithms can be used for computation. If not defined or empty array, any published algorithm will **not** allowed. If it is defined containing `*`, any published algorithm is allowed by the dataset and permit running compute jobs. However, if the array is not empty, only algorithms published by the defined publishers are permitted.

The structure of each object within the `publisherTrustedAlgorithms` array is as follows:

<table><thead><tr><th width="289.3333333333333">Attribute</th><th width="114">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>did</code></strong></td><td><code>string</code></td><td>The DID of the algorithm which is trusted by the publisher.</td></tr><tr><td><strong><code>filesChecksum</code></strong></td><td><code>string</code></td><td>Hash of algorithm's files (as <code>string</code>).</td></tr><tr><td><strong><code>containerSectionChecksum</code></strong></td><td><code>string</code></td><td>Hash of algorithm's image details (as <code>string</code>).</td></tr></tbody></table>

To produce `filesChecksum`, call the Provider FileInfoEndpoint with parameter withChecksum = True. If the algorithm has multiple files, `filesChecksum` is a concatenated string of all files checksums (ie: checksumFile1+checksumFile2 , etc)

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

<table><thead><tr><th width="176.33333333333331">Attribute</th><th width="201">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>name</code></strong>*</td><td><code>string</code></td><td>The parameter name (this is sent as HTTP param or key towards algo)</td></tr><tr><td><strong><code>type</code></strong>*</td><td><code>string</code></td><td>The field type (text, number, boolean, select)</td></tr><tr><td><strong><code>label</code></strong>*</td><td><code>string</code></td><td>The field label which is displayed</td></tr><tr><td><strong><code>required</code></strong>*</td><td><code>boolean</code></td><td>If customer input for this field is mandatory.</td></tr><tr><td><strong><code>description</code></strong>*</td><td><code>string</code></td><td>The field description.</td></tr><tr><td><strong><code>default</code></strong>*</td><td><code>string</code>, <code>number</code>, or <code>boolean</code></td><td>The field default value. For select types, <code>string</code> key of default option.</td></tr><tr><td><strong><code>options</code></strong></td><td>Array of <code>option</code></td><td>For select types, a list of options.</td></tr></tbody></table>

\* **Required**

Each `option` is an `object` containing a single key: value pair where the key is the option name, and the value is the option value.

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

Algorithms will have access to a JSON file located at `/data/inputs/algoCustomData.json`, which contains the `keys/values` input data required. Example:

<details>

<summary>Key Value Example</summary>

<pre class="language-json"><code class="lang-json">{ 
    "hometown": "São Paulo",
    "age": 10, 
    "developer": true, 
<strong>    "languagePreference": "nodejs" 
</strong>}
</code></pre>

</details>

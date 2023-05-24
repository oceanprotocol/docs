# Asset Requests

The universal Aquarius Endpoint is [`https://v4.aquarius.oceanprotocol.com`](https://v4.aquarius.oceanprotocol.com).

### **DDO**

A method for retrieving all information about the asset using a unique identifier known as a Decentralized Identifier (DID).

* **Endpoint**: `GET /api/aquarius/assets/ddo/<did>`
* **Purpose**: This endpoint is used to fetch the Decentralized Document (DDO) of a particular asset. A DDO is a detailed information package about a specific asset, including its ID, metadata, and other necessary data.
* **Parameters**: The `<did>` in the URL is a placeholder for the DID, a unique identifier for the asset you want to retrieve the DDO for.

<table><thead><tr><th width="100">Name</th><th>Description</th><th width="100">Type</th><th width="100">Within</th><th>Required</th></tr></thead><tbody><tr><td><code>did</code></td><td>DID of the asset</td><td>string</td><td>path</td><td>true</td></tr></tbody></table>

Here are some typical responses you might receive from the API:

* **200**: This is a successful HTTP response code. In this case, it means the server successfully found and returned the DDO for the given DID. The returned data is formatted in JSON.
* **404**: This is an HTTP response code that signifies the requested resource couldn't be found on the server. In this context, it means the asset DID you requested isn't found in Elasticsearch, the database Aquarius uses. The server responds with a JSON-formatted message stating that the asset DID wasn't found.

#### Curl Example

```
curl --location --request GET 'https://v4.aquarius.oceanprotocol.com/api/aquarius/assets/ddo/did:op:cd086344c275bc7c560e91d472be069a24921e73a2c3798fb2b8caadf8d245d6'
```

#### Javascript Example

```runkit  nodeVersion="18.x.x"
const axios = require('axios')
const did = 'did:op:ce3f161fb98c64a2ded37fd34e25f28343f2c88d0c8205242df9c621770d4b3b'
const response = await axios(`https://v4.aquarius.oceanprotocol.com/api/aquarius/assets/ddo/${did}`)
console.log(response.status)
console.log(response.data.nftAddress)
console.log(response.data.metadata.name)
console.log(response.data.metadata.description)

```

### **Metadata**

A method for retrieving the metadata about the asset using the Decentralized Identifier (DID).

* **Endpoint**: `GET /api/aquarius/assets/metadata/<did>`
* **Purpose**: This endpoint is used to fetch the metadata of a particular asset. It includes details about the asset such as its name, description, creation date, owner, etc.
* **Parameters**: The `<did>` in the URL is a placeholder for the DID, a unique identifier for the asset you want to retrieve the metadata for.

Here are some typical responses you might receive from the API:

* **200**: This is a successful HTTP response code. In this case, it means the server successfully found and returned the metadata for the given DID. The returned data is formatted in JSON.
* **404**: This is an HTTP response code that signifies the requested resource couldn't be found on the server. In this context, it means the asset DID you requested isn't found in the database. The server responds with a JSON-formatted message stating that the asset DID wasn't found.

#### Parameters

<table><thead><tr><th width="100">Name</th><th>Description</th><th width="100">Type</th><th width="100">Within</th><th>Required</th></tr></thead><tbody><tr><td><code>did</code></td><td>DID of the asset</td><td>string</td><td>path</td><td>true</td></tr></tbody></table>

#### Curl Example

```bash
curl --location --request GET 'https://v4.aquarius.oceanprotocol.com/api/aquarius/assets/metadata/did:op:cd086344c275bc7c560e91d472be069a24921e73a2c3798fb2b8caadf8d245d6'
```

#### Javascript Example

```runkit  nodeVersion="18.x.x"
const axios = require('axios')
const did = 'did:op:ce3f161fb98c64a2ded37fd34e25f28343f2c88d0c8205242df9c621770d4b3b'
const response = await axios(`https://v4.aquarius.oceanprotocol.com/api/aquarius/assets/metadata/${did}`)
console.log(response.status)
console.log(response.data.name)
console.log(response.data.description)

```

### **Asset Names**&#x20;

Used to retrieve the names of a group of assets using a list of unique identifiers known as Decentralized Identifiers (DIDs).

Here's a more detailed explanation:

* **Endpoint**: `POST /api/aquarius/assets/names`
* **Purpose**: This endpoint is used to fetch the names of specific assets. These assets are identified by a list of DIDs provided in the request payload. The returned asset names are those specified in the assets' metadata.
* **Parameters**: The parameters are sent in the body of the POST request, formatted as JSON. Specifically, an array of DIDs (named "didList") should be provided.

Here are some typical responses you might receive from the API:

* **200**: This is a successful HTTP response code. In this case, it means the server successfully found and returned the names for the assets corresponding to the provided DIDs. The returned data is formatted in JSON, mapping each DID to its respective asset name.
* **400**: This is an HTTP response code that signifies a client error in the request. In this context, it means that the "didList" provided in the request payload was empty. The server responds with a JSON-formatted message indicating that the requested "didList" cannot be empty.

#### Parameters

<table><thead><tr><th>Name</th><th>Description</th><th width="100">Type</th><th width="100">Within</th><th>Required</th></tr></thead><tbody><tr><td><code>didList</code></td><td>list of asset DIDs</td><td>list</td><td>body</td><td>true</td></tr></tbody></table>

#### Curl Example

```bash
curl --location --request POST 'https://v4.aquarius.oceanprotocol.com/api/aquarius/assets/names' \
--header 'Content-Type: application/json' \
--data-raw '{
    "didList" : ["did:op:cd086344c275bc7c560e91d472be069a24921e73a2c3798fb2b8caadf8d245d6"]
}'
```

#### Javascript Example

```runkit  nodeVersion="18.x.x"
const axios = require('axios')

const body =  {didList : ["did:op:cd086344c275bc7c560e91d472be069a24921e73a2c3798fb2b8caadf8d245d6", "did:op:ce3f161fb98c64a2ded37fd34e25f28343f2c88d0c8205242df9c621770d4b3b"]}

const response = await axios.post('https://v4.aquarius.oceanprotocol.com/api/aquarius/assets/names', body)
console.log(response.status)
for (let key in response.data) {
  console.log(key + ': ' + response.data[key]);
}

```

### Query Assets

Used to run a custom search query on the assets using Elasticsearch's native query syntax. We recommend reading the [Elasticsearch documentation](https://www.elastic.co/guide/index.html) to understand their syntax.&#x20;

* **Endpoint**: `POST /api/aquarius/assets/query`
* **Purpose**: This endpoint is used to execute a native Elasticsearch (ES) query against the stored assets. This allows for highly customizable searches and can be used to filter and sort assets based on complex criteria. The body of the request should contain a valid JSON object that defines the ES query.
* **Parameters**: The parameters for this endpoint are provided in the body of the POST request as a valid JSON object that conforms to the Elasticsearch query DSL (Domain Specific Language).

Here are some typical responses you might receive from the API:

* **200**: This is a successful HTTP response code. It means the server successfully ran your ES query and returned the results. The results are returned as a JSON object.
* **500**: This HTTP status code represents a server error. In this context, it typically means there was an error with Elasticsearch while trying to execute the query. It could be due to an invalid or malformed query, an issue with the Elasticsearch service, or some other server-side problem. The specific details of the error are typically included in the response body.

#### Curl Example

```bash
curl --location --request POST 'https://v4.aquarius.oceanprotocol.com/api/aquarius/assets/query' \
--header 'Content-Type: application/json' \
--data-raw '{
    "query": {
        "match_all": {}
    }
}'
```

#### Javascript Example

```runkit  nodeVersion="18.x.x"
const axios = require('axios')

const body =  { "query": { "match_all": { } } }


const response = await axios.post('https://v4.aquarius.oceanprotocol.com/api/aquarius/assets/query', body)
console.log(response.status)
console.log(response.data.hits.hits[0])
for (const value of response.data.hits.hits) {
  console.log(value);
}

```

### Validate DDO

Used to validate the content of a DDO (Decentralized Identifier Document).

* **Endpoint**: `POST /api/aquarius/assets/ddo/validate`
* **Purpose**: This endpoint is used to verify the validity of a DDO. This could be especially helpful prior to submitting a DDO to ensure it meets the necessary criteria and avoid any issues or errors. The endpoint consumes `application/octet-stream`, which means the data sent should be in binary format, often used for handling different data types.
* **Parameters**: The parameters for this endpoint are provided in the body of the POST request as a valid JSON object, which represents the DDO that needs to be validated.

Here are some typical responses you might receive from the API:

* **200**: This is a successful HTTP response code. It means the server successfully validated your DDO content and it meets the necessary criteria.
* **400**: This HTTP status code indicates a client error. In this context, it means that the submitted DDO format is invalid. You will need to revise the DDO content according to the required specifications and resubmit it.
* **500**: This HTTP status code represents a server error. This indicates an internal server error while processing your request. The specific details of the error are typically included in the response body.

#### Curl Example

```bash
curl --location --request POST 'https://v4.aquarius.oceanprotocol.com/api/aquarius/assets/query/api/v1/aquarius/assets/ddo/validate' \
--header 'Content-Type: application/json' \
--data-raw '<json_body>'
```

#### Javascript Example

```runkit  nodeVersion="18.x.x"
const axios = require('axios')

const body =        {
        "@context": ["https://w3id.org/did/v1"],
        "id": "did:op:56c3d0ac76c02cc5cec98993be2b23c8a681800c08f2ff77d40c895907517280",
        "version": "4.1.0",
        "chainId": 1337,
        "nftAddress": "0xabc",
        "metadata": {
            "created": "2000-10-31T01:30:00.000-05:00Z",
            "updated": "2000-10-31T01:30:00.000-05:00",
            "name": "Ocean protocol white paper",
            "type": "dataset",
            "description": "Ocean protocol white paper -- description",
            "author": "Ocean Protocol Foundation Ltd.",
            "license": "CC-BY",
            "contentLanguage": "en-US",
            "tags": ["white-papers"],
            "additionalInformation": {"test-key": "test-value"},
            "links": [
                "http://data.ceda.ac.uk/badc/ukcp09/data/gridded-land-obs/gridded-land-obs-daily/",
                "http://data.ceda.ac.uk/badc/ukcp09/data/gridded-land-obs/gridded-land-obs-averages-25km/",
                "http://data.ceda.ac.uk/badc/ukcp09/"
            ]
        },
        "services": [
            {
                "id": "test",
                "type": "access",
                "datatokenAddress": "0xC7EC1970B09224B317c52d92f37F5e1E4fF6B687",
                "name": "Download service",
                "description": "Download service",
                "serviceEndpoint": "http://172.15.0.4:8030/",
                "timeout": 0,
                "files": "encryptedFiles"
            }
        ]
    }
    
const response = await axios.post( 'https://v4.aquarius.oceanprotocol.com/api/aquarius/assets/ddo/validate', body)
console.log(response.status)
console.log(response.data)

```

### Trigger Caching

Used to manually initiate the process of DDO caching based on a transaction ID. This transaction ID should include either MetadataCreated or MetadataUpdated events.

* **Endpoint**: `POST /api/aquarius/assets/triggerCaching`
* **Purpose**: This endpoint is used to manually trigger the caching process of a DDO (Decentralized Identifier Document). This process is initiated based on a specific transaction ID, which should include either MetadataCreated or MetadataUpdated events. This can be particularly useful in situations where immediate caching of metadata changes is required.
* **Parameters**: The parameters for this endpoint are provided in the body of the POST request as a valid JSON object. This includes the transaction ID and log index that is associated with the metadata event.

<table><thead><tr><th>Name</th><th>Description</th><th width="100">Type</th><th width="100">Within</th><th>Required</th></tr></thead><tbody><tr><td><code>transactionId</code></td><td>DID of the asset</td><td>string</td><td>path</td><td>true</td></tr><tr><td><code>logIndex</code></td><td>custom log index for the transaction</td><td>int</td><td>path</td><td>false</td></tr></tbody></table>

Here are some typical responses you might receive from the API:

* **200**: This is a successful HTTP response code. It means the server successfully initiated the DDO caching process and the updated asset is returned.
* **400**: This HTTP status code indicates a client error. In this context, it suggests issues with the request: either the log index was not found, or the transaction log did not contain MetadataCreated or MetadataUpdated events. You should revise your input parameters and try again.
* **500**: This HTTP status code represents a server error. This indicates an internal server error while processing your request. The specific details of the error are typically included in the response body.

#### Curl Example

```bash
curl --location --request POST 'https://v4.aquarius.oceanprotocol.com/api/aquarius/assets/triggerCaching' \
--header 'Content-Type: application/json' \
--data-raw '<json_body>'
```

#### Javascript Example

```runkit  nodeVersion="18.x.x"
const axios = require('axios')

const body = { "transactionId": "0x945596edf2a26d127514a78ed94fea86b199e68e9bed8b6f6d6c8bb24e451f27", "logIndex": 0}
const response = await axios.post( 'https://v4.aquarius.oceanprotocol.com/api/aquarius/assets/triggerCaching', body)
console.log(response.status)
console.log(response.data)

```


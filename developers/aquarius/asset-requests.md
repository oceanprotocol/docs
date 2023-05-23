# Asset Requests

The universal Aquarius Endpoint is [`https://v4.aquarius.oceanprotocol.com`](https://v4.aquarius.oceanprotocol.com).

### **DDO**

&#x20;GET `/api/aquarius/assets/ddo/<did>`

#### Description

Get DDO of a particular asset.

#### Parameters

| Name  | Description      | Type   | Within | Required |
| ----- | ---------------- | ------ | ------ | -------- |
| `did` | DID of the asset | string | path   | true     |

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

#### Responses

`200`

* content-type: json
* description: On successful operation returns DDO information.

`404`

* content-type: json
* description: This asset DID is not in ES.
*   response body:

    ```
    {
        "error": "Asset DID <did> not found in Elasticsearch."
    }
    ```

### **Metadata**

`GET /api/aquarius/assets/metadata/<did>`

#### Description

Get metadata of a particular asset.

#### Parameters

| Name  | Description      | Type   | Within | Required |
| ----- | ---------------- | ------ | ------ | -------- |
| `did` | DID of the asset | string | path   | true     |

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

#### Responses

`200`

* content-type: json
* description: successful operation.

`404`

* content-type: json
* description: This asset DID is not in ES.
*   response body:

    ```
    {
        "error": "Error encountered while retrieving metadata: NotFoundError(404, '{\"_index\":\"aquarius\",\"_type\":\"_doc\",\"_id\":\"<did>\",\"found\":false}')."
    }
    ```

### **Asset Names**&#x20;

`POST /api/aquarius/assets/names`

#### Description

Get names of assets as specified in the payload.

#### Parameters

| Name      | Description        | Type | Within | Required |
| --------- | ------------------ | ---- | ------ | -------- |
| `didList` | list of asset DIDs | list | body   | true     |

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

#### Responses

`200`

* content-type: json
* description: successful operation.
*   response body:

    ```
    {"did:op:cd086344c275bc7c560e91d472be069a24921e73a2c3798fb2b8caadf8d245d6": "Ocean CEX Aggregator: OHLC history for OCEAN/USDT "}
    ```

`400`

* content-type: json
* description: This asset DID is not in ES.
*   response body:

    ```
    {
    "error": "The requested didList can not be empty."
    }
    ```

### Query Assets

POST `/api/aquarius/assets/query`

#### **Description**

Run a native ES query. Body must be a valid json object.

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

#### Responses

`200`

* content-type: json

`500`

* description: elasticsearch exception

### Validate DDO

POST `/api/aquarius/assets/ddo/validate`

#### Description

Validate DDO content. Cosumes `application/octet-stream`

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

#### Valid body

```
    {
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
```

#### Responses:

`200`

Successfull request.

`400`

Invalid DDO format

`500`

Error

### Trigger Caching

POST `/api/aquarius/assets/triggerCaching`

#### Description

Manually triggers DDO caching based on a `transacionId` containing either MetadataCreated or MetadataUpdated event(s).

#### Parameters

| Name            | Description                          | Type   | Within | Required |
| --------------- | ------------------------------------ | ------ | ------ | -------- |
| `transactionId` | DID of the asset                     | string | path   | true     |
| `logIndex`      | custom log index for the transaction | int    | path   | false    |

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

#### Valid body

```
    {
        "transactionId": "0x945596edf2a26d127514a78ed94fea86b199e68e9bed8b6f6d6c8bb24e451f27",
        "logIndex": 0
    }
```

#### Responses:

`200`

Description: triggering successful, updated asset returned

`400`

Description: request issues: either log index not found, or neither of MetadataCreated, MetadataUpdated found in tx log

`500`

Description: Error

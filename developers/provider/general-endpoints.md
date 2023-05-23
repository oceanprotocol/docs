# General Endpoints


### nonce endpoint

#### GET /api/services/nonce

Parameters

```
    userAddress: String object containing a user's ethereum address
```

Returns: Json object containing the last-used nonce value. The nonce endpoint is just informative, use the current UTC timestamp as a nonce, where required in other endpoints.

Example:

```
GET /api/services/nonce?userAddress=0x990922334
```

Response:

```json
{
  "nonce": 23
}
```

#### POST /api/services/fileinfo

Retrieves Content-Type and Content-Length from the given URL or asset.

Parameters

For published assets:

```
{
    did: String, DID of the dataset
    serviceId: String, ID of the service
}
```

For file objects,see https://docs.oceanprotocol.com/core-concepts/did-ddo#files

If checksum is requests, file size should be lower < MAX\_CHECKSUM\_LENGTH (see Provider ENVs) If file is larger, checksum WILL NOT be computed.

Returns: Json document file info object

Example:

```
POST /api/services/fileinfo
payload:
{
    "did":"0x1111",
    "serviceId": "0",
}
```

Response:

```json
[
    {
        "contentLength":"1161",
        "contentType":"application/json",
        "index":0,
        "valid": true
    },...
]
```

#### Javascript Example

```runkit  nodeVersion="18.x.x"
const axios = require('axios')

const response = await axios( `https://v4.provider.oceanprotocol.com/api/services/nonce?userAddress=0x0db823218e337a6817e6d7740eb17635deadafaf`)
 
console.log(response.status)
console.log(response.data)

```

### Download endpoint

#### GET /api/services/download

Parameters

```
    documentId: String object containing document id (e.g. a DID)
    serviceId: String, representing the list of `file` objects that describe each file in the dataset
    transferTxId: Hex string -- the id of on-chain transaction for approval of datatokens transfer
    given to the provider's account
    fileIndex: integer, the index of the file from the files list in the dataset
    nonce: Nonce
    consumerAddress: String object containing consumer's address
    signature: String object containg user signature (signed message)
```

Returns: File stream. Retrieves the attached asset files.

Example:

```
GET /api/services/download
payload:
{
    "documentId":"0x1111",
    "serviceId": 0,
    "fileIndex": 0,
    "datatoken": "",
    "consumerAddress":"0x990922334",
    "signature":"0x00110011",
    "transferTxId": "0xa09fc23421345532e34829"
```

Response:

```json
{
  "": ""
}
```
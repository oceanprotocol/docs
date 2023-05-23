# Get Requests


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

#### Javascript Example

```runkit  nodeVersion="18.x.x"
const axios = require('axios')

const response = await axios( `https://v4.provider.oceanprotocol.com/api/services/nonce?userAddress=0x0db823218e337a6817e6d7740eb17635deadafaf`)
 
console.log(response.status)
console.log(response.data)

```

### Encrypt endpoint

#### GET /api/services/encrypt

Body: binary application/octet-stream

Returns: Bytes string containing the encrypted document.

Example:

```
POST /api/services/encrypt
body: b'\xfd7zXZ\x00\x00\x04\xe6\xd6\xb4F\ ... \x00\x04YZ'
```

Response:

```
b'0x04b2bfab1f4e...7ed0573'
```

#### Javascript Example

```runkit  nodeVersion="18.x.x"
const fetch = require('cross-fetch')

const data = "test"
const response = await fetch('https://v4.provider.oceanprotocol.com/api/services/encrypt?chainId=1', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/octet-stream' }
      })
console.log(response)      

```
#### GET /api/services/initialize

Parameters

```
    documentId: String object containing document id (e.g. a DID)
    serviceId: String, ID of the service the datatoken is attached to
    consumerAddress: String object containing consumer's address
    environment: String representing a compute environment offered by the provider
    validUntil: Integer, date of validity of the service (optional)
    fileIndex: Integer, the index of the file from the files list in the dataset. If set, provider will validate the file access. (optional)
```

Returns: Json document with a quote for amount of tokens to transfer to the provider account.

Example:

```
GET /api/services/initialize
payload:
{
    "documentId":"0x1111",
    "serviceId": 0,
    "consumerAddress":"0x990922334",
}
payload (with optional parameters):
{
    "documentId":"0x1111",
    "serviceId": 0,
    "consumerAddress":"0x990922334",
    "validUntil": 1578004800,
    "fileIndex": 1
}
```

Response:

```json
{
    "datatoken": "0x21fa3ea32892091...",
    "nonce": 23,
    "providerFee": {
        "providerFeeAddress": "0xabc123...",
        "providerFeeToken": "0xabc123...",
        "providerFeeAmount": "200",
        "providerData": "0xabc123...",
        "v": 27,
        "r": "0xabc123...",
        "s": "0xabc123...",
        "validUntil": 123456,
    },
    "computeAddress": "0x8123jdf8sdsa..."
}
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
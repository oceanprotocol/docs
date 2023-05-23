# Encryption / Decryption


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


### Decrypt endpoint

#### POST /api/services/decrypt

Parameters

```
    decrypterAddress: String object containing the address of the decrypter (required)
    chainId: the chain id of the network the document is on (required)
    transactionId: the transaction id of the encrypted document (optional)
    dataNftAddress: the address of the data nft (optional)
    encryptedDocument: the encrypted document (optional)
    flags: the flags of the encrypted document (optional)
    documentHash: the hash of the encrypted document (optional)
    nonce: the nonce of the encrypted document (required)
    signature: the signature of the encrypted document (required)
```

Returns: Bytes string containing the decrypted document.

Example:

```
POST /api/services/decrypt
payload: {
    'decrypterAddress':'0xA78deb2Fa79463945C247991075E2a0e98Ba7A09'
    'chainId':8996
    'dataNftAddress':'0xBD558814eE914800EbfeF4a1cbE196F5161823d9'
    'encryptedDocument':'0xfd377a585a0...f07afef7dc214'
    'flags': 1
    'documentHash':'0x0cb38a7bba49758a86f8556642aff655d00e41da28240d5ea0f596b74094d91f'
    'nonce':'1644315615.24195'
    'signature':'0xd6f27047853203824ab9e5acef87d0a501a64aee93f33a83b6f91cbe8fb4489824defceaccde91273f41290cb2a0c15572368e8bea0b456c7a653659cad7de311b'
}
```

Response:

```
b'{"@context": ["https://w3id.org/did/v1"], "id": "did:op:0c184915b07b44c888d468be85a9b28253e80070e5294b1aaed81c ...'
```

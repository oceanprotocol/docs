# Post Requests

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

### File info endpoint

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

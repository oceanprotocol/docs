# Encryption / Decryption

### Encrypt endpoint

* **Endpoint**: `POST /api/services/encrypt`
* **Parameters**: The body of the request should contain a binary application/octet-stream.
* **Purpose**: This endpoint is used to encrypt a document. It accepts binary data and returns an encrypted bytes string.
* **Responses**:
  * **200**: This is a successful HTTP response code. It returns a bytes string containing the encrypted document. For example: `b'0x04b2bfab1f4e...7ed0573'`

Example response:

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

### Decrypt endpoint

* **Endpoint**: `POST /api/services/decrypt`
* **Parameters**: The body of the request should contain a JSON object with the following properties:
  * `decrypterAddress`: A string containing the address of the decrypter (required).
  * `chainId`: The chain ID of the network the document is on (required).
  * `transactionId`: The transaction ID of the encrypted document (optional).
  * `dataNftAddress`: The address of the data non-fungible token (optional).
  * `encryptedDocument`: The encrypted document (optional).
  * `flags`: The flags of the encrypted document (optional).
  * `documentHash`: The hash of the encrypted document (optional).
  * `nonce`: The nonce of the encrypted document (required).
  * `signature`: The signature of the encrypted document (required).
* **Purpose**: This endpoint is used to decrypt a document. It accepts the decrypter address, chain ID, and other optional parameters, and returns the decrypted document.
* **Responses**:
  * **200**: This is a successful HTTP response code. It returns a bytes string containing the decrypted document.



Example response:

```
b'{"@context": ["https://w3id.org/did/v1"], "id": "did:op:0c184915b07b44c888d468be85a9b28253e80070e5294b1aaed81c ...'
```

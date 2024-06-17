# Encryption / Decryption

### Encrypt endpoint

* **Endpoint**: `POST /api/services/encrypt`
* **Parameters**: The body of the request should contain a binary application/octet-stream.
* **Purpose**: This endpoint is used to encrypt a document. It accepts binary data and returns an encrypted bytes string.
* **Responses**:
  * **200**: This is a successful HTTP response code. It returns a bytes string containing the encrypted document. For example: `b'0x04b2bfab1f4e...7ed0573'`

Example response:

```python
b'0x04b2bfab1f4e...7ed0573'
```

#### Javascript Example

```runkit nodeVersion="18.x.x"
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

#### Javascript Example

{% code overflow="wrap" %}
```javascript
const axios = require('axios');

async function decryptAsset(payload) {
    // Define the base URL of the services.
    const SERVICES_URL = "<BASE URL>"; // Replace with your base services URL.

    // Define the endpoint.
    const endpoint = `${SERVICES_URL}/api/services/decrypt`;

    try {
        // Send a POST request to the endpoint with the payload in the request body.
        const response = await axios.post(endpoint, payload);

        // Check the response.
        if (response.status !== 200) {
            throw new Error(`Response status code is not 200: ${response.data}`);
        }

        // Use the response data here.
        console.log(response.data);

    } catch (error) {
        console.error(error);
    }
}

// Define the payload.
let payload = {
    "decrypterAddress": "<DECRYPTER ADDRESS>", // Replace with your decrypter address.
    "chainId": "<CHAIN ID>", // Replace with your chain ID.
    "transactionId": "<TRANSACTION ID>", // Replace with your transaction ID.
    "dataNftAddress": "<DATA NFT ADDRESS>", // Replace with your Data NFT Address.
};

// Run the function.
decryptAsset(payload);

```
{% endcode %}

Example response:

{% code overflow="wrap" %}
```python
b'{"@context": ["https://w3id.org/did/v1"], "id": "did:op:0c184915b07b44c888d468be85a9b28253e80070e5294b1aaed81c ...'
```
{% endcode %}

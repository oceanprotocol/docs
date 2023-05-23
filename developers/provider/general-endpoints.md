# General Endpoints

### Nonce

Retrieves the last-used nonce value for a specific user's Ethereum address.

* **Endpoint**: `GET /api/services/nonce`
* **Parameters**: `userAddress`: This is a string that should contain the Ethereum address of the user. It is passed as a query parameter in the URL.
* **Purpose**: This endpoint is used to fetch the last-used nonce value for a user's Ethereum address. A nonce is a number that can only be used once, and it's typically used in cryptography to prevent replay attacks. While this endpoint provides the last-used nonce, it's recommended to use the current UTC timestamp as a nonce, where required in other endpoints.

Here are some typical responses you might receive from the API:

* **200**: This is a successful HTTP response code. It means the server has successfully processed the request and returns a JSON object containing the nonce value.&#x20;

Example response:

```
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

### File Info

Retrieves Content-Type and Content-Length from the given URL or asset.

* **Endpoint**: `POST /api/services/fileinfo`
* **Parameters**: The body of the request should contain a JSON object with the following properties:
  * `did`: This is a string representing the Decentralized Identifier (DID) of the dataset.
  * `serviceId`: This is a string representing the ID of the service.
* **Purpose**: This endpoint is used to retrieve the `Content-Type` and `Content-Length` from a given URL or asset. For published assets, `did` and `serviceId` should be provided. It also accepts file objects (as described in the Ocean Protocol documentation) and can compute a checksum if the file size is less than `MAX_CHECKSUM_LENGTH`. For larger files, the checksum will not be computed.
* **Responses**:
  * **200**: This is a successful HTTP response code. It returns a JSON object containing the file info.&#x20;

Example response:

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

### Download

* **Endpoint**: `GET /api/services/download`
* **Parameters**: The query parameters for this endpoint should contain the following properties:
  * `documentId`: A string containing the document id (e.g., a DID).
  * `serviceId`: A string representing the list of `file` objects that describe each file in the dataset.
  * `transferTxId`: A hex string representing the ID of the on-chain transaction for approval of data tokens transfer given to the provider's account.
  * `fileIndex`: An integer representing the index of the file from the files list in the dataset.
  * `nonce`: The nonce.
  * `consumerAddress`: A string containing the consumer's Ethereum address.
  * `signature`: A string containing the user's signature (signed message).
* **Purpose**: This endpoint is used to retrieve the attached asset files. It returns a file stream of the requested file.
* **Responses**:
  * **200**: This is a successful HTTP response code. It means the server has successfully processed the request and returned the file stream.

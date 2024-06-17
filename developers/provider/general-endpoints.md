# General Endpoints

### Nonce

Retrieves the last-used nonce value for a specific user's Ethereum address.

* **Endpoint**: `GET /api/services/nonce`
* **Parameters**: `userAddress`: This is a string that should contain the Ethereum address of the user. It is passed as a query parameter in the URL.
* **Purpose**: This endpoint is used to fetch the last-used nonce value for a user's Ethereum address. A nonce is a number that can only be used once, and it's typically used in cryptography to prevent replay attacks. While this endpoint provides the last-used nonce, it's recommended to use the current UTC timestamp as a nonce, where required in other endpoints.

Here are some typical responses you might receive from the API:

* **200**: This is a successful HTTP response code. It means the server has successfully processed the request and returns a JSON object containing the nonce value.

Example response:

```json
{
  "nonce": 23
}
```

#### Javascript Example

```runkit nodeVersion="18.x.x"
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
  * **200**: This is a successful HTTP response code. It returns a JSON object containing the file info.

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

```runkit nodeVersion="18.x.x"
const axios = require('cross-fetch')

const data = "test"
const response = await fetch('https://v4.provider.oceanprotocol.com/api/services/encrypt?chainId=1', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/octet-stream' }
      })
console.log(response)   

```

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

#### Javascript Example

Before calling the `/download` endpoint, you need to follow these steps:

1. You need to set up and connect a wallet for the consumer. The consumer needs to have purchased the datatoken for the asset that you are trying to download. Libraries such as ocean.js or ocean.py can be used for this.
2. Get the nonce. This can be done by calling the `/getnonce` endpoint above.
3. Sign a message from the account that has purchased the datatoken.
4. Add the nonce and signature to the payload.

```javascript
const axios = require('axios');

async function downloadAsset(payload) {
    // Define the base URL of the services.
    const SERVICES_URL = "<BASE URL>"; // Replace with your base services URL.

    // Define the endpoint.
    const endpoint = `${SERVICES_URL}/api/services/download`;

    try {
        // Send a GET request to the endpoint with the payload as query parameters.
        const response = await axios.get(endpoint, { params: payload });

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
    "documentId": "<DOCUMENT ID>", // Replace with your document ID.
    "serviceId": "<SERVICE ID>", // Replace with your service ID.
    "consumerAddress": "<CONSUMER ADDRESS>", // Replace with your consumer address.
    "transferTxId": "<TX ID>", // Replace with your transfer transaction ID.
    "fileIndex": 0
};

// Run the function.
downloadAsset(payload);

```

### Initialize

In order to consume a data service the user is required to send one datatoken to the provider.

The datatoken is transferred on the blockchain by requesting the user to sign an ERC20 approval transaction where the approval is given to the provider's account for the number of tokens required by the service.

* **Endpoint**: `GET /api/services/initialize`
* **Parameters**: The query parameters for this endpoint should contain the following properties:
  * `documentId`: A string containing the document id (e.g., a DID).
  * `serviceId`: A string representing the ID of the service the data token is attached to.
  * `consumerAddress`: A string containing the consumer's Ethereum address.
  * `environment`: A string representing a compute environment offered by the provider.
  * `validUntil`: An integer representing the date of validity of the service (optional).
  * `fileIndex`: An integer representing the index of the file from the files list in the dataset. If set, the provider will validate the file access (optional).
* **Purpose**: This endpoint is used to initialize a service and return a quote for the number of tokens to transfer to the provider's account.
* **Responses**:
  * **200**: This is a successful HTTP response code. It returns a JSON object containing information about the quote for tokens to be transferred.

#### Javascript Example

```javascript
const axios = require('axios');

async function initializeServiceAccess(payload) {
    // Define the base URL of the services.
    const SERVICES_URL = "<BASE URL>"; // Replace with your base services URL.

    // Define the endpoint.
    const endpoint = `${SERVICES_URL}/api/services/initialize`;

    try {
        // Send a GET request to the endpoint with the payload in the request query.
        const response = await axios.get(endpoint, { params: payload });

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
    "documentId": "<DOCUMENT ID>", // Replace with your document ID.
    "consumerAddress": "<CONSUMER ADDRESS>", // Replace with your consumer address.
    "serviceId": "<SERVICE ID>", // Replace with your service ID.
    // Add other necessary parameters as needed.
};

// Run the function.
initializeServiceAccess(payload);

```

Example response:

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

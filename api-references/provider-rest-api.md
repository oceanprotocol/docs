# Provider REST API

## Ocean Provider Endpoints Specification

This document specifies the endpoints for Ocean Provider to be implemented by the core developers.

### nonce endpoint

#### GET /api/services/nonce

Parameters

```
    userAddress: String object containing a user's ethereum address
```

Returns: Json object containing the nonce value.

Example:

```
POST /api/services/nonce?userAddress=0x990922334
```

Response:

```json
{
  "nonce": 23
}
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

### Initial service request endpoint

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
    }
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

Returns: File stream

Example:

```
POST /api/services/download
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

### File info endpoint

#### POST /api/services/fileinfo

Retrieves Content-Type and Content-Length from the given URL or asset.

Parameters

```
    type: String, either "url" or "asset"
    did: String, DID of the dataset
    hash: String, hash of the file
    url: String, URL of the file
    serviceId: String, ID of the service the datatoken is attached to
```

Returns: Json document file info object

Example:

```
POST /api/services/fileinfo
payload:
{
    "url": "https://s3.amazonaws.com/testfiles.oceanprotocol.com/info.0.json",
    "type": "url",
    "method": "GET",
}
```

Response:

```json
[
    {
        "contentLength":"1161"
        "contentType":"application/json"
        "index":0
        "valid": true
    },...
]
```

### Compute endpoints

All compute endpoints respond with an Array of status objects, each object describing a compute job info.

Each status object will contain:

```
    owner:The owner of this compute job
    documentId: String object containing document id (e.g. a DID)
    jobId: String object containing workflowId
    dateCreated: Unix timestamp of job creation
    dateFinished: Unix timestamp when job finished (null if job not finished)
    status:  Int, see below for list
    statusText: String, see below
    algorithmLogUrl: URL to get the algo log (for user)
    resultsUrls: Array of URLs for algo outputs
    resultsDid: If published, the DID
```

Status description (`statusText`): (see Operator-Service for full status list)

| status | Description                   |
| ------ | ----------------------------- |
| 1      | Warming up                    |
| 10     | Job started                   |
| 20     | Configuring volumes           |
| 30     | Provisioning success          |
| 31     | Data provisioning failed      |
| 32     | Algorithm provisioning failed |
| 40     | Running algorith              |
| 50     | Filtering results             |
| 60     | Publishing results            |
| 70     | Job completed                 |

### Create new job or restart an existing stopped job

#### POST /api/services/compute

Start a new job

Parameters

```
    signature: String object containg user signature (signed message) (required)
    consumerAddress: String object containing consumer's ethereum address (required)
    nonce: Integer, Nonce (required)
    environment: String representing a compute environment offered by the provider
    dataset: Json object containing dataset information
        dataset.documentId: String, object containing document id (e.g. a DID) (required)
        dataset.serviceId: String, ID of the service the datatoken is attached to (required)
        dataset.transferTxId: Hex string, the id of on-chain transaction for approval of datatokens transfer
            given to the provider's account (required)
        dataset.userdata: Json, user-defined parameters passed to the dataset service (optional)
    algorithm: Json object, containing algorithm information
        algorithm.documentId: Hex string, the did of the algorithm to be executed (optional)
        algorithm.meta: Json object, defines the algorithm attributes and url or raw code (optional)
        algorithm.serviceId: String, ID of the service to use to process the algorithm (optional)
        algorithm.transferTxId: Hex string, the id of on-chain transaction of the order to use the algorithm (optional)
        algorithm.userdata: Json, user-defined parameters passed to the algorithm running service (optional)
        algorithm.algocustomdata: Json object, algorithm custom parameters (optional)
    additionalDatasets: Json object containing a list of dataset objects (optional)

    One of `algorithm.documentId` or `algorithm.meta` is required, `algorithm.meta` takes precedence
```

Returns: Array of `status` objects as described above, in this case the array will have only one object

Example:

```
POST /api/compute
payload:
{
    "signature": "0x00110011",
    "consumerAddress": "0x123abc",
    "nonce": 1,
    "environment": "env",
    "dataset": {
        "documentId": "did:op:2222...",
        "serviceId": "compute",
        "transferTxId": "0x0232123..."
    }
}
```

Response:

```json
[
    {
      "jobId": "0x1111:001",
      "status": 1,
      "statusText": "Job started",
      ...
    }
]
```

### Status and Result

#### GET /api/services/compute

Get all jobs and corresponding stats

Parameters

```
    signature: String object containg user signature (signed message)
    documentId: String object containing document did  (optional)
    jobId: String object containing workflowID (optional)
    consumerAddress: String object containing consumer's address (optional)

    At least one parameter from documentId, jobId and owner is required (can be any of them)
```

Returns

Array of `status` objects as described above

Example:

```
GET /api/services/compute?signature=0x00110011&documentId=did:op:1111&jobId=012023
```

Response:

```json
[
  {
    "owner": "0x1111",
    "documentId": "did:op:2222",
    "jobId": "3333",
    "dateCreated": "2020-10-01T01:00:00Z",
    "dateFinished": "2020-10-01T01:00:00Z",
    "status": 5,
    "statusText": "Job finished",
    "algorithmLogUrl": "http://example.net/logs/algo.log",
    "resultsUrls": [
      "http://example.net/logs/output/0",
      "http://example.net/logs/output/1"
    ],
    "resultsDid": "did:op:87bdaabb33354d2eb014af5091c604fb4b0f67dc6cca4d18a96547bffdc27bcf"
  },
  {
    "owner": "0x1111",
    "documentId": "did:op:2222",
    "jobId": "3334",
    "dateCreated": "2020-10-01T01:00:00Z",
    "dateFinished": "2020-10-01T01:00:00Z",
    "status": 5,
    "statusText": "Job finished",
    "algorithmLogUrl": "http://example.net/logs2/algo.log",
    "resultsUrls": [
      "http://example.net/logs2/output/0",
      "http://example.net/logs2/output/1"
    ],
    "resultsDid": ""
  }
]
```

### Stop

#### PUT /api/services/compute

Stop a running compute job.

Parameters

```
    signature: String object containg user signature (signed message)
    documentId: String object containing document did (optional)
    jobId: String object containing workflowID (optional)
    consumerAddress: String object containing consumer's address (optional)

    At least one parameter from documentId,jobId and owner is required (can be any of them)
```

Returns

Array of `status` objects as described above

Example:

```
PUT /api/services/compute?signature=0x00110011&documentId=did:op:1111&jobId=012023
```

Response:

```json
[
    {
      ...,
      "status": 7,
      "statusText": "Job stopped",
      ...
    }
]
```

### Delete

#### DELETE /api/services/compute

Delete a compute job and all resources associated with the job. If job is running it will be stopped first.

Parameters

```
    signature: String object containg user signature (signed message)
    documentId: String object containing document did (optional)
    jobId: String object containing workflowId (optional)
    consumerAddress: String object containing consumer's address (optional)

    At least one parameter from documentId, jobId is required (can be any of them)
    in addition to consumerAddress and signature
```

Returns

Array of `status` objects as described above

Example:

```
DELETE /api/services/compute?signature=0x00110011&documentId=did:op:1111&jobId=012023
```

Response:

```json
[
    {
      ...,
      "status": 8,
      "statusText": "Job deleted successfully",
      ...
    }
]
```

#### GET /api/services/computeResult

Allows download of asset data file.

Parameters

```
    jobId: String object containing workflowId (optional)
    index: Integer, index of the result to download (optional)
    consumerAddress: String object containing consumer's address (optional)
    nonce: Integer, Nonce (required)
    signature: String object containg user signature (signed message)
```

Returns: Bytes string containing the compute result.

Example:

```
GET /api/services/computeResult?index=0&consumerAddress=0xA78deb2Fa79463945C247991075E2a0e98Ba7A09&jobId=4d32947065bb46c8b87c1f7adfb7ed8b&nonce=1644317370
```

Response:

```
b'{"result": "0x0000000000000000000000000000000000000000000000000000000000000001"}'
```

#### GET /api/services/computeEnvironments

Allows download of asset data file.

Parameters

```
```

Returns: List of compute environments.

Example:

```
GET /api/services/computeEnvironments
```

Response:

```json
[
    {
        "cpuType":"AMD Ryzen 7 5800X 8-Core Processor",
        "currentJobs":0,
        "desc":"This is a mocked enviroment",
        "diskGB":2,
        "gpuType":"AMD RX570",
        "id":"ocean-compute",
        "maxJobs":10,
        "nCPU":2,
        "nGPU":0,
        "priceMin":2.3,
        "ramGB":1
    },
    ...
]
```

### Authentication endpoints

Provider offers an alternative to signing each request, by allowing users to generate auth tokens.
The generated auth token can be used until its expiration in all supported requests.
Simply omit the signature parameter and add the AuthToken request header based on a created token.

Please note that if a signature parameter exists, it will take precedence over the AuthToken headers.
All routes that support a signature parameter support the replacement, with the exception of auth-related ones
(createAuthToken and deleteAuthToken need to be signed).

#### GET /api/services/createAuthToken

Allows the user to create an auth token.

Parameters

```
address: String object containing consumer's address (optional)
nonce: Integer, Nonce (required)
signature: String object containg user signature (signed message)
 The signature is based on hashing the following parameters:
   address + nonce
expiration: valid future UTC timestamp (required)
```

Returns:
Created auth token.

Example:

```
GET /api/services/createAuthToken?address=0xA78deb2Fa79463945C247991075E2a0e98Ba7A09&&nonce=1644317370&&expiration=1660053210&signature=0x70895648fb9957537b0ffd0d12a9705dda35445e5e5b6b40b7b7448902a29e194773b10d8fee1750d9eb5542e252610d4aa7edfc3101fb8fa9d2c45729f0698301
```

Response:

```
b'{"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjAwNTMxMjksImFkZHJlc3MiOiIweEE3OGRlYjJGYTc5NDYzOTQ1QzI0Nzk5MTA3NUUyYTBlOThCYTdBMDkifQ.QaRqYeSYxZpnFayzPmUkj8TORHHJ_vRY-GL88ZBFM0o"}'
```


#### DELETE /api/services/deleteAuthToken

Allows the user to delete an existing auth token before it naturally expires.

Parameters

```
address: String object containing consumer's address (optional)
nonce: Integer, Nonce (required)
signature: String object containg user signature (signed message)
  The signature is based on hashing the following parameters:
  address + nonce
token: token to be expired
```

Returns:
Success message if token is successfully deleted.
If the token is not found or already expired, returns an error message.

Example:

```
DELETE /api/services/deleteAuthToken?address=0xA78deb2Fa79463945C247991075E2a0e98Ba7A09&&nonce=1644317370&&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjAwNTMxMjksImFkZHJlc3MiOiIweEE3OGRlYjJGYTc5NDYzOTQ1QzI0Nzk5MTA3NUUyYTBlOThCYTdBMDkifQ.QaRqYeSYxZpnFayzPmUkj8TORHHJ_vRY-GL88ZBFM0o&signature=0x70895648fb9957537b0ffd0d12a9705dda35445e5e5b6b40b7b7448902a29e194773b10d8fee1750d9eb5542e252610d4aa7edfc3101fb8fa9d2c45729f0698301
```

Response:

```
b'{"success": "Token has been deactivated."}'
```


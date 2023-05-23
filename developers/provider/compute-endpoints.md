# Compute Endpoints

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
        "desc":"This is a mocked environment",
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
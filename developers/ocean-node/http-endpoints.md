---
description: An overview of the available HTTP endpoints
---

# HTTP Endpoints

Ocean Node is a core component of the Ocean Protocol ecosystem, enabling decentralized data exchange and management. Below is an overview of the available HTTP endpoints that provide various functionalities within the Ocean Node.

### Peer Management

* **Get Ocean Peers**
  * **Method**: GET
  * **Endpoint**: `/getOceanPeers`
  * **Description**: Retrieves the list of Ocean peers.
* **Get P2P Peers**
  * **Method**: GET
  * **Endpoint**: `/getP2PPeers`
  * **Description**: Retrieves the list of P2P peers.
* **Get P2P Peer**
  * **Method**: GET
  * **Endpoint**: `/getP2PPeer`
  * **Description**: Retrieves information about a specific P2P peer.

### DID Management

* **Advertise DID**
  * **Method**: POST
  * **Endpoint**: `/advertiseDid`
  * **Description**: Advertises a DID to the network.
* **Get Providers for DID**
  * **Method**: GET
  * **Endpoint**: `/getProvidersForDid`
  * **Description**: Retrieves the list of providers for a specific DID.

### Command Broadcasting

* **Broadcast Command**
  * **Method**: POST
  * **Endpoint**: `/broadcastCommand`
  * **Description**: Broadcasts a command to the network.
* **Direct Command**
  * **Method**: POST
  * **Endpoint**: `/directCommand`
  * **Description**: Sends a direct command to a specific peer.

### Logging

* **Logs**
  * **Method**: POST
  * **Endpoint**: `/logs`
  * **Description**: Retrieves multiple log entries based on various query parameters.
* **Log**
  * **Method**: POST
  * **Endpoint**: `/log/:id`
  * **Description**: Retrieves a single log entry by its unique identifier.

### File Services

* **File Information**
  * **Method**: POST
  * **Endpoint**: `/api/services/fileinfo`
  * **Description**: Retrieves information about a file.
* **Decrypt**
  * **Method**: POST
  * **Endpoint**: `/api/services/decrypt`
  * **Description**: Decrypts data.
* **Encrypt**
  * **Method**: POST
  * **Endpoint**: `/api/services/encrypt`
  * **Description**: Encrypts data.
* **Encrypt File**
  * **Method**: POST
  * **Endpoint**: `/api/services/encryptFile`
  * **Description**: Encrypts a file.
* **Initialize**
  * **Method**: GET
  * **Endpoint**: `/api/services/initialize`
  * **Description**: Initializes a service.
* **Nonce**
  * **Method**: GET
  * **Endpoint**: `/api/services/nonce`
  * **Description**: Retrieves a nonce value.
* **Download**
  * **Method**: GET
  * **Endpoint**: `/api/services/download`
  * **Description**: Downloads a file.

### DDO Management

* **Get DDO**
  * **Method**: GET
  * **Endpoint**: `/api/aquarius/assets/ddo/:did/:force?`
  * **Description**: Retrieves the DDO for a given DID.
* **Get DDO Metadata**
  * **Method**: GET
  * **Endpoint**: `/api/aquarius/assets/metadata/:did/:force?`
  * **Description**: Retrieves the metadata for a given DID.
* **DDO Metadata Query**
  * **Method**: POST
  * **Endpoint**: `/api/aquarius/assets/metadata/query`
  * **Description**: Queries DDO metadata.
* **Get DDO State**
  * **Method**: GET
  * **Endpoint**: `/api/aquarius/state/ddo`
  * **Description**: Retrieves the state of a DDO.
* **Validate DDO**
  * **Method**: POST
  * **Endpoint**: `/api/aquarius/assets/ddo/validate`
  * **Description**: Validates a DDO.

### Indexer

* **Index Queue**
  * **Method**: GET
  * **Endpoint**: `/api/services/indexQueue`
  * **Description**: Retrieves the index queue.

### Compute Services

* **Compute Environments**
  * **Method**: GET
  * **Endpoint**: `/api/services/computeEnvironments`
  * **Description**: Retrieves available compute environments.
* **Compute Start**
  * **Method**: POST
  * **Endpoint**: `/api/services/compute`
  * **Description**: Starts a compute job.
* **Compute Stop**
  * **Method**: PUT
  * **Endpoint**: `/api/services/compute`
  * **Description**: Stops a compute job.
* **Compute Status**
  * **Method**: GET
  * **Endpoint**: `/api/services/compute`
  * **Description**: Retrieves the status of a compute job.
* **Compute Result**
  * **Method**: GET
  * **Endpoint**: `/api/services/computeResult`
  * **Description**: Retrieves the result of a compute job.
* **Initialize Compute**
  * **Method**: POST
  * **Endpoint**: `/api/services/initializeCompute`
  * **Description**: Initializes a compute job.
* **Jobs**
  * **Method**: GET
  * **Endpoint**: `/api/services/jobs/:job`
  * **Description**: Retrieves information about a specific job.
* **Compute Delete**
  * **Method**: DELETE
  * **Endpoint**: `/api/services/compute`
  * **Description**: Deletes a compute job.




# Paid Compute Flow


## Prerequisites

## Flow Illustration

<figure><img src="../../.gitbook/assets/c2d/Paid Flow for Compute to Data - Part 1.png" alt=""><figcaption><p>Sequence Diagram for Paid Compute - Part 1</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/c2d/Paid Flow for Compute to Data - Part 2.png" alt=""><figcaption><p>Sequence Diagram for Paid Compute - Part 2</p></figcaption></figure>

## Flow Description

### Setup
To run paid compute jobs, the end user can deploy a node on its host of infrastructure setup or can use a hosted node from the Nodes network.
1. When end user deploys by itself the node, assure that `DOCKER_COMPUTE_ENVIRONMENTS` environment variable is exported before running the node. Those environments will be returned when `getComputeEnvironments` request is triggered in the consumer tool. 
2. When end user uses an already hosted node, call `status` command on that node and see if `c2dClusters` are available or calling directly `getComputeEnvironments` command.

As consumer tools for running free C2D, Ocean Protocol proposes the following:
- [Ocean CLI](../ocean-cli/run-c2d.md)

### Select compute environment
Each environment has details regarding ID, consumer address
of the environment operating system, architecture of the
operating system, total running jobs, fees for paid compute
resources and resources `min`, `max`, `inUse` for **paid** and **free** compute. 

In this scenario, paid resources (the resources which are **not** marked with `free`) will be
selected by the user within available limits `min` and `max`.

The consumer tool makes a request to the node **GET /computeEnvironments** and the node returns to the consumer tool the environments exported at the node startup from `DOCKER_COMPUTE_ENVIRONMENTS` variable. Consumer tool dispalys then to the end user the list of environemnts.

The end user selects the free resources and fills in the consumer tool together with job duration that the user considers is needed
for the algorithm execution.

### Initialize compute

The end user calls method `initializeCompute` from the consumer tool for provider fees generation, needed for assets ordering and payment details according to **maximum job duration** input from the end user and to the **prefered resources**. 

The consumer tool calls ocean.js dedicated method for initialize, followed by
request to **POST /initializeCompute** from Node to return the provider fees and payment details.

#### Environment check
Ocean Node verifies if the passed environment id is valid from ocean.js, in case of failure, node returns to ocean.js the following error: __500, 'Invalid C2D Environment'__ propagated to consumer tool and displayed to end user.

#### Resources check
Ocean Node does not allow input resources to be outside limits
`min` and `max`, therefore it will throw and error with status code **500** and a message with `Not enough resources`.

#### Token payment check for environment
Ocean Node performs a validation if the token passed from ocean.js is available for the selected environment. In case of failure, node returns to ocean.js the following error: __500, 'This compute env does not accept payments on chain'__ propagated to consumer tool and displayed to end user.

#### Escrow support for chain ID check
Ocean Node validates if for the specified chain ID, payments in escrow are supported. In case of failure, node returns to ocean.js the following error: __500, 'Cannot handle payments on chainId'__ propagated to consumer tool and displayed to end user.

#### Credentials check
If the node has configured `POLICY_SERVER_URL` and ddo contains credentials, the credentials check is performed in `Policy Server`, otherwise node performs credentials check for consumer address. Credentials checks are performed once at the DDO level, but also for services credentials within the DDO object.

In case of failure, node returns to ocean.js __403, 'Error: Access to asset ${ddo.id} was denied'__ which will be passed back to the end user.


#### Provider fees check
For each **orderable asset** (datasets and algorithm), Ocean Node validates provider fees availability according to these 3 scenarios:

**1. New order, new provider fees**
Ocean Node returns to ocean.js `validOrder` false, because there was not a valid order before executed and new provider fees needs to be returned further until end user, including payment details with calculated cost per specified resources and job duration.

**2. Existing order, valid provider fees**
Ocean Node returns to ocean.js `validOrder` the existing order transaction ID, because the order has still valid provider fees. Only escrow payment is returned to cocean.js and further to consumer tool and end user.

**3. Expired order, new provider fees**
Ocean Node returns to ocean.js `validOrder` false, because existing provider fees have expired and new provider fees needs to be returned further until end user, including payment details.

After these checks are performed and are successful, provider fees and escrow payment object are returned to ocean.js, then consumer tool and displayed to the end user to consult regarding the payment amount for compute power usage.

### Funds check and Escrow Payment
Consumer tool calls a method available in ocean.js, `verifyFundsForEscrowPayment`, for checking balances and allowances of token required for Escrow payment and native chain token for gas fees for consumer address of the environment and for end user's address.

Moreover, the function `verifyFundsForEscrowPayment` from coean.js calls Escrow smart contract to deposit the amount retrieved from initialize response into Escrow contract and to authorize the consumer address of the environment if it wasn't already performed before.


### Ordering assets
Consumer tool calls ocean.js method `handleComputeOrder` for each asset involved in compute job (datasets and algorithm).
This method trigger Datatoken smart contract internally for `startOrder` or `reuseOrder` according to availability of provider fees returned from initialize response.

**1. New order, new provider fees-> startOrder**
`startOrder` transaction generates the order transaction ID used further when starting compute as proof of ordering the asset.

**2. Existing order, valid provider fees-> returns existing valid order tx ID**
No smart contract is needed, existing valid order transaction id is returned.

**3. Expired order, new provider fees-> reuseOrder**
`reuseOrder` transaction generates new order transaction ID used further when starting compute as proof of ordering the asset.

### Start compute
#### Nonce & signature check
Consumer tool calls through ocean.js `startCompute` which requests in Ocean Node **POST /compute**. Within Ocean Node,
nonce and signature provided by ocean.js is checked. In case of invalid nonce or signature, node returns to ocean.js  __500, 'Invalid nonce or signature, unable to proceed.'__ which will be passed back to the end user.


#### Credentials check
If the node has configured `POLICY_SERVER_URL` and ddo contains credentials, the credentials check is performed in `Policy Server`, otherwise node performs credentials check for consumer address. In case of failure, node returns to ocean.js __403, 'Error: Access to asset ${ddo.id} was denied'__ which will be passed back to the end user.


#### Validation of the algorithm for dataset
Ocean Node checks if the algorithm has defined `publisherTrustedAlgorithms` or `publisherTrustedAlgorithmPublishers` lists within the `compute` service of the dataset and there are 3 conditions:
- if these are empty, then the validation is **successful**.
- if `publisherTrustedAlgorithms` contains the algorithm DID, then the validation is **successful**, otherwise validation is **false**.
- if `publisherTrustedAlgorithmPublishers` contains the algorithm `nftAddress`, then the validation is **successful**, otherwise validation is **false**.

#### Valid order check for asset
Ocean Node checks the order transaction ID from each asset as proof or ordering the asset. In case of failure, node returns to ocean.js __500, 'TxId Service ${elem.transferTxId} is not valid for DDO'__ which will be passed back to the end user.

After these checks are performed and are successful, job id is generated and C2D engine is called for the actual algorithm execution.

#### Create lock in Escrow
With the deposited funds, for each startCompute requests, Ocean Node calls Escrow smart contracts to create a lock, to apply the calculated cost per resources and per `maxJobDuration` prefered by end user, for that particular compute job. `createLock` generates a transactionID which is represented as **agreement ID**, used as proof for paying the compute power usage.

In case of failure, node returns to ocean.js smart contract error with status code `400`.


#### C2D Engine

The only supported engine for start compute (free and paid) is the one for Docker.
The following steps executed by C2D Docker engine class are:

1. C2D Engine validates the Docker image by checking manifest operating system and operating system architecture with the ones from environment platform. The manifest from the Docker image is retrieved from the `tag` or `image digest hash` using Docker SDK.
If validation is failed, Node throws error withtin the engine:
__Unable to validate docker image__ and creation of the job stops.

2. Creates the folders for datasets, algorithm and result folder of algorithm execution, such as `/data/inputs`, `/data/transformations`, `/data/ddos`, `/data/outputs`.

3. Saves the job structure into `SQLite` database.

4. Starts monitoring the job execution and persists journalizing the lifecycle status of the job in `SQLite` database.

Whenever a job has started, an internal loop which monitors all the new jobs is triggered. The loop determines the lifecycle of a compute job execution.
**Lifecycle of a job according to statuses:**

`JobStarted` -> `PullImage` or `PullImageFailed` -> `ConfiguringVolumes` or `VolumeCreationFailed` -> `Provisioning` or `ContainerCreationFailed` -> `RunningAlgorithm` or `AlgorithmFailed` -> `PublishingResults` or `ResultsUploadFailed`

**Sequence of steps for internal loop:**
1. Pulling docker image for the algorithm - if failure -> throws error and returns to the consumer tool and updates job status `SQLite` database in `PullImageFailed`.
2. Configuring volumes for the dedicated algorithm container - if failure -> throws error and returns to the consumer tool and updates job status `SQLite` database in `VolumeCreationFailed`.
3. Create Docker container for the algorithm - if failure -> throws error and returns to the consumer tool and updates job status `SQLite` database in `ContainerCreationFailed`.
4. Triggers algorithm execution on dedicated container - if failure from the algorithm -> throws error and returns to the consumer tool and updates job status `SQLite` database in `AlgorithmFailed`.
5. Publish results in `/data/outputs` even if the algorithm execution was successful or not - if failure -> throws error and returns to the consumer tool and updates job status `SQLite` database in `ResultsUploadFailed`.
If publishing results step was executed successfully, the container and volumes will be deleted together with the folders
for datasets, algorithms and results.
For paid compute jobs, before cleanup the job, all the expired locks will be cancelled calling **Escrow Smart Contract**.

**Observation**: If a job exceeds its specified duration, C2DEngine internal loop will terminate the allocated container and volumes which facilitates algorithm's execution and sets the job to `PublishingResults`, meaning will perform a forced cleanup of the job setup.

### Get job status

To display the progress to the end user, the consumer tool requests the node at **GET /compute** with job ID for the job status through ocean.js method `computeStatus`.

In case of request failure from node side, the error is retruned back to the consumer tool and displayed to the end user.

### Retrieve compute job results

If compute job status is `PublishingResults`, consumer tool will
call ocean.js `computeResult` method which requests from node
on endpoint `GET /computeResult`. Node returns to ocean.js the results content and ocean.js generates a downloadable URL to pass further to the consumer tools.

In case of request failure from node side, the error is returned to the consumer tool and displayed to the end user.
Consumer tools received the downloadable URL and will fetch the BLOB content from it and store on end user's specified results folder path.


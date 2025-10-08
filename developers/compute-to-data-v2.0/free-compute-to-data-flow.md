# Free Compute Flow

Free compute flow is designed to allow end users run their public algorithms on free resources of environments available from Ocean nodes network.

## Prerequisites

The prerequisite for this flow is the algorithm code which can be input for consumers components: [Ocean CLI](../ocean-cli/run-c2d.md), [VSCode Extension](../vscode/README.md) and it is open for integration with other systems (e.g. Ocean Enterprise Marketplace).

## Flow Illustration

<figure><img src="../../.gitbook/assets/c2d/Free Flow for Compute to Data - Part 1.png" alt=""><figcaption><p>Sequence Diagram for Free Compute - Part 1</p></figcaption></figure>

<figure><img src="../../.gitbook/assets/c2d/Free Flow for Compute to Data - Part 2.png" alt=""><figcaption><p>Sequence Diagram for Free Compute - Part 2</p></figcaption></figure>

## Flow Description

### Setup
To run free compute jobs, the end user can deploy a node on its host of infrastructure setup or can use a hosted node from the Nodes network.
1. When end user deploys by itself the node, assure that `DOCKER_COMPUTE_ENVIRONMENTS` environment variable is exported before running the node. Those environments will be returned when `getComputeEnvironments` request is triggered in the consumer tool. 
2. When end user uses an already hosted node, call `status` command on that node and see if `c2dClusters` are available or calling directly `getComputeEnvironments` command.

As consumer tools for running free C2D, Ocean Protocol proposes the following:
- [VSCode extension](../vscode/README.md)
- [Ocean CLI](../ocean-cli/run-c2d.md)

**Observation**: VSCode extension uses a dedicated OPF node URL.

### Select compute environment
Each environment has details regarding ID, consumer address
of the environment operating system, architecture of the
operating system, total running jobs, fees for paid compute
resources and resources `min`, `max`, `inUse` for **paid** and **free** compute. 

In this scenario, `free` resources will be
selected by the user within available limits `min` and `max`.

The consumer tool makes a request to the node **GET /computeEnvironments** and the node returns to the consumer tool the environments exported at the node startup from `DOCKER_COMPUTE_ENVIRONMENTS` variable. Consumer tool dispalys then to the end user the list of environemnts.

The end user selects the free resources and fills in the consumer tool together with job duration that the user considers is needed
for the algorithm execution.

### Free start compute
#### Nonce & signature check
Consumer tool calls through ocean.js `freeStartCompute` which requests in Ocean Node **POST /freeCompute**. Within Ocean Node,
nonce and signature provided by ocean.js is checked. In case of invalid nonce or signature, node returns __500, 'Invalid nonce or signature, unable to proceed.'__

#### Credentials check
If the node has configured `POLICY_SERVER_URL` and ddo contains credentials, the credentials check is performed in `Policy Server`, otherwise node performs credentials check for consumer address. 

Credentials checks are performed once at the DDO level, but also for services credentials within the DDO object.

In case of failure, node returns to ocean.js __403, 'Error: Access to asset ${ddo.id} was denied'__ which will be passed back to the end user.

After these checks are performed and are successful, job id is generated and C2D engine is called for the actual algorithm execution.

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


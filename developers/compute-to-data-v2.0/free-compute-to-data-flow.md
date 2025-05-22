# Free Compute Flow

Free compute flow is designed to allow end users run their public algorithms on free resources of environments available from Ocean nodes network.

## Prerequisites

The prerequisite for this flow is the algorithm code which can be input for consumers components: Ocean CLI and it is open for integration with other systems (e.g. Ocean Enterprise Marketplace).

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

The consumer tool makes a request to the node **GET /computeEnvironments** and the node returns back to the consumer tool the environments exported at the node startup from `DOCKER_COMPUTE_ENVIRONMENTS` variable. Consumer tool dispalys then to the end user the list of environemnts.

The end user selects the free resources and fills in the consumer tool together with job duration that the user considers is needed
for the algorithm execution.

Consumer tool calls through ocean.js `freeStartCompute` which requests in Ocean Node **POST /freeCompute**. Within Ocean Node,
nonce and signature provided by ocean.js is checked. In case of invalid nonce or signature, node returns __500, 'Invalid nonce or signature, unable to proceed.'__




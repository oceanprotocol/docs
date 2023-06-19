---
title: Compute-to-Data
description: Architecture overview
---

# Architecture

### Architecture Overview

Here's the sequence diagram for starting a new compute job.

<figure><img src="../../.gitbook/assets/C2D High Level Architecture.jpg" alt=""><figcaption></figcaption></figure>

The Consumer calls the Provider with `start(did, algorithm, additionalDIDs)`. It returns job id `XXXX`. The Provider oversees the rest of the work. At any point, the Consumer can query the Provider for the job status via `getJobDetails(XXXX)`.

Here's how Provider works. First, it ensures that the Consumer has sent the appropriate datatokens to get access. Then, it calls asks the Operator-Service (a microservice) to start the job, which passes on the request to Operator-Engine (the actual compute system). Operator-Engine runs Kubernetes compute jobs etc as needed. Operator-Engine reports when to Operator-Service when the job has finished.

Here's the actors/components:

* Consumers - The end users who need to use some computing services offered by the same Publisher as the data Publisher.
* Operator-Service - Micro-service that is handling the compute requests.
* Operator-Engine - The computing systems where the compute will be executed.
* Kubernetes - a K8 cluster

Before the flow can begin, these pre-conditions must be met:

* The Asset DDO has a `compute` service.
* The Asset DDO compute service must permit algorithms to run on it.
* The Asset DDO must specify an Ocean Provider endpoint exposed by the Publisher.

### Access Control using Ocean Provider

As with [the `access` service](broken-reference), the `compute` service requires the **Ocean Provider** as a component handled by Publishers. Ocean Provider is in charge of interacting with users and managing the basics of a Publisher's infrastructure to integrate this infrastructure into Ocean Protocol. The direct interaction with the infrastructure where the data resides happens through this component only.

Ocean Provider includes the credentials to interact with the infrastructure (initially in cloud providers, but it could be on-premise).

### Operator Service

The **Operator Service** is a micro-service in charge of managing the workflow executing requests.

The main responsibilities are:

* Expose an HTTP API allowing for the execution of data access and compute endpoints.
* Interact with the infrastructure (cloud/on-premise) using the Publisher's credentials.
* Start/stop/execute computing instances with the algorithms provided by users.
* Retrieve the logs generated during executions.

Typically the Operator Service is integrated from Ocean Provider, but can be called independently of it.

The Operator Service is in charge of establishing the communication with the K8s cluster, allowing it to:

* Register new compute jobs
* List the current compute jobs
* Get a detailed result for a given job
* Stop a running job

The Operator Service doesn't provide any storage capability, all the state is stored directly in the K8s cluster.

### Operator Engine

The **Operator Engine** is in charge of orchestrating the compute infrastructure using Kubernetes as backend where each compute job runs in an isolated [Kubernetes Pod](https://kubernetes.io/docs/concepts/workloads/pods/). Typically the Operator Engine retrieves the workflows created by the Operator Service in Kubernetes, and manage the infrastructure necessary to complete the execution of the compute workflows.

The Operator Engine is in charge of retrieving all the workflows registered in a K8s cluster, allowing to:

* Orchestrate the flow of the execution
* Start the configuration pod in charge of download the workflow dependencies (datasets and algorithms)
* Start the pod including the algorithm to execute
* Start the publishing pod that publish the new assets created in the Ocean Protocol network.
* The Operator Engine doesn't provide any storage capability, all the state is stored directly in the K8s cluster.

### Pod Configuration

The Pod-Configuration repository operates in conjunction with the Operator Engine, and it initiates at the beginning of a job. It performs crucial functions that set up the environment for the job execution.

The Pod-Configuration is a node.js script that dynamically manages the environment set-up at the start of a job by the operator-engine. Its role involves fetching and preparing necessary assets and files to ensure a seamless job execution.

1. **Fetching Dataset Assets**: It fetches the files corresponding to datasets and saves them in the location `/data/inputs/DID/`. The files are named based on their array index ranging from 0 to X, depending on the total number of files associated with the dataset.
2. **Fetching Algorithm Files**: The script then retrieves the algorithm files and stores them in the `/data/transformations/` directory. The first file is named 'algorithm', and the subsequent files are indexed from 1 to X, based on the number of files present for the algorithm.
3. **Fetching DDOS**: Additionally, the Pod-Configuration fetches Decentralized Document Oriented Storage (DDOS) and saves them to the disk at the location `/data/ddos/`.
4. **Error Handling**: In case of any provisioning failures, whether during data fetching or algorithm processing, the script updates the job status in a PostgreSQL database, and logs the relevant error messages.

Once the Pod-Configuration successfully completes these tasks, it closes and signals the operator-engine to initiate the algorithm pod for the next steps. This repository provides the basis for smooth job processing by effectively managing assets and algorithm files, and handling potential provisioning error.

### Pod Publishing

Pod Publishing is a command-line utility for processing, logging, and uploading workflow outputs, functioning in conjunction with the Operator Service and Operator Engine within a Kubernetes-based compute infrastructure. The primary functionality divided across three areas:

1. **Interaction with Operator Service**: Pod Publishing uploads the outputs of compute workflows initiated by the Operator Service to a designated AWS S3 bucket or the InterPlanetary File System (IPFS). It logs all processing steps and updates a PostgreSQL database.
2. **Role in Publishing Pod**: Within the compute infrastructure orchestrated by the Operator Engine on Kubernetes (K8s), Pod Publishing is integral to the Publishing Pod. The Publishing Pod handles the creation of new assets in the Ocean Protocol network after a workflow execution.
3. **Workflow Outputs Management**: Pod Publishing manages the storage of workflow outputs. Depending on configuration, it interacts with IPFS or AWS S3, and logs the processing steps.

Please note:

* Pod Publishing does not provide storage capabilities; all state information is stored directly in the K8s cluster or the respective data storage solution (AWS S3 or IPFS).
* The utility works in close coordination with the Operator Service and Operator Engine, but does not have standalone functionality.

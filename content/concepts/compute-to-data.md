---
title: Compute-to-Data
description: Providing access to data in a privacy-preserving fashion
slug: /concepts/compute-to-data/
section: concepts
---

## Motivation

The most basic scenario for a Publisher is to provide access to the datasets they own or manage. However, a Publisher may offer a service to execute some computation on top of their data. This has some benefits:

- The data **never** leaves the Publisher enclave.
- It's not necessary to move the data; the algorithm is sent to the data.
- Having only one copy of the data and not moving it makes it easier to be compliant with data protection regulations.

[This page](https://oceanprotocol.com/technology/compute-to-data) elaborates on the benefits.

## Data Sets & Algorithms

With Compute-to-Data, data sets are not allowed to leave the premises of the data holder, only algorithms can be permitted to run on them under certain conditions within an isolated and secure environment. Algorithms are an asset type just like data sets and they too can have a pool or a fixed price to determine their price whenever they are used.

Algorithms can be either public or private by setting either an `access` or a `compute` service in their DDO. An algorithm set to public can be downloaded for its set price, while an algorithm set to private is only available as part of a compute job without any way to download it. If an algorithm is set to private, then the dataset must be published on the same Ocean Provider as the data set it should run on.

For each data set, publishers can choose to allow various permission levels for algorithms to run:

- allow selected algorithms, referenced by their DID
- allow all algorithms published within a network or marketplace
- allow raw algorithms, for advanced use cases circumventing algorithm as an asset type, but most prone to data escape

All implementations should set permissions to private by default: upon publishing a compute data set, no algorithms should be allowed to run on it. This is to prevent data escape by a rogue algorithm being written in a way to extract all data from a data set.

## Architecture Overview

The architecture follows [OEP-12: Compute-to-Data](https://github.com/oceanprotocol/OEPs/tree/master/12) as a spec.

![Sequence Diagram for computing services](images/Starting New Compute Job.png)

In the above diagram you can see the initial integration supported. It involves the following components/actors:

- Consumers - The end users who need to use some computing services offered by the same Publisher as the data Publisher.
- Operator-Service - Micro-service that is handling the compute requests.
- Operator-Engine - The computing systems where the compute will be executed.
- Kubernetes - a K8 cluster

Before the flow can begin, the following pre-conditions must be met:

- The Asset DDO has a `compute` service.
- The Asset DDO compute service must permit algorithms to run on it.
- The Asset DDO must specify an Ocean Provider endpoint exposed by the Publisher.

## Access Control using Ocean Provider

As with the `access` service, the `compute` service requires the **Ocean Provider** as a component handled by Publishers. Ocean Provider is in charge of interacting with users and managing the basics of a Publisher's infrastructure to integrate this infrastructure into Ocean Protocol. The direct interaction with the infrastructure where the data resides happens through this component only.

Ocean Provider includes the credentials to interact with the infrastructure (initially in cloud providers, but it could be on-premise).

<repo name="provider"></repo>

## Compute-to-Data Environment

### Operator Service

The **Operator Service** is a micro-service in charge of managing the workflow executing requests.

The main responsibilities are:

- Expose an HTTP API allowing for the execution of data access and compute endpoints.
- Interact with the infrastructure (cloud/on-premise) using the Publisher's credentials.
- Start/stop/execute computing instances with the algorithms provided by users.
- Retrieve the logs generated during executions.

Typically the Operator Service is integrated from Ocean Provider, but can be called independently of it.

The Operator Service is in charge of establishing the communication with the K8s cluster, allowing it to:

- Register new compute jobs
- List the current compute jobs
- Get a detailed result for a given job
- Stop a running job

The Operator Service doesn't provide any storage capability, all the state is stored directly in the K8s cluster.

<repo name="operator-service"></repo>

### Operator Engine

The **Operator Engine** is in charge of orchestrating the compute infrastructure using Kubernetes as backend. Typically the Operator Engine retrieves the workflows created by the Operator Service in Kubernetes, and manage the infrastructure necessary to complete the execution of the compute workflows.

The Operator Engine is in charge of retrieving all the workflows registered in a K8s cluster, allowing to:

- Orchestrate the flow of the execution
- Start the configuration pod in charge of download the workflow dependencies (datasets and algorithms)
- Start the pod including the algorithm to execute
- Start the publishing pod that publish the new assets created in the Ocean Protocol network.
- The Operator Engine doesn't provide any storage capability, all the state is stored directly in the K8s cluster.

<repo name="operator-engine"></repo>

## Further Reading

- [Tutorial: Writing Algorithms](/tutorials/compute-to-data-algorithms/)
- [Tutorial: Set Up a Compute-to-Data Environment](/tutorials/compute-to-data/)
- [Compute-to-Data in Ocean Market](https://blog.oceanprotocol.com)

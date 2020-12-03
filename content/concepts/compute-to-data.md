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

## Architecture

### Enabling Publisher Services, using Ocean Provider

The direct interaction with the infrastructure where the data resides requires the execution of a component handled by Publishers.

This component will be in charge of interacting with users and managing the basics of a Publisher's infrastructure to provide these additional services.

The business logic supporting these additional Publisher capabilities is the responsibility of this new technical component.

The main and new key component introduced to support these additional Publisher services is named **Ocean Provider**.

Ocean Provider is the technical component executed by the **Publishers**, which provides extended data services. Ocean Provider includes the credentials to interact with the infrastructure (initially in cloud providers, but it could be on-premise).

### Compute-to-Data Environment (Operator-Service)

The Operator Service is a micro-service that implements part of the Compute-to-Data spec [OEP-12](https://github.com/oceanprotocol/OEPs/tree/master/12),
in charge of managing the workflow executing requests.

Typically the Operator Service is integrated from Ocean Provider, but can be called independently of it.

The Operator Service is in charge of establishing the communication with the K8s cluster, allowing it to:

- Register workflows as K8s objects
- List the workflows registered in K8s
- Stop a running workflow execution
- Get information about the state of execution of a workflow

The Operator Service doesn't provide any storage capability, all the state is stored directly in the K8s cluster.

<repo name="operator-service"></repo>

### Responsibilities

The main responsibilities are:

- Expose an HTTP API allowing for the execution of data access and compute endpoints.
- Authorize the user on-chain using the proper Service Agreement. That is, validate that the user requesting the service is allowed to use that service.
- Interact with the infrastructure (cloud/on-premise) using the Publisher's credentials.
- Start/stop/execute computing instances with the algorithms provided by users.
- Retrieve the logs generated during executions.
- Register newly-derived assets arising from the executions (i.e. as new Ocean assets) (if required by the consumer).

### Flow

![Sequence Diagram for computing services](images/4_Starting_New_Compute_Job.png)

In the above diagram you can see the initial integration supported. It involves the following components/actors:

- Data Scientists/Consumers - The end users who need to use some computing services offered by the same Publisher as the data Publisher.
- Ocean Keeper - In charge of enforcing the Service Agreement by tracking conditions.
- Operator-Service - Micro-service that is handling the compute requests.
- Operator-Engine - The computing systems where the compute will be executed.

Before the flow can begin, the following pre-conditions must be met:

- The Asset DDO has a compute service.
- The Asset DDO must specify the Ocean Provider endpoint exposed by the Publisher.
- The Service Agreement template must already be predefined and whitelisted `on-chain`.

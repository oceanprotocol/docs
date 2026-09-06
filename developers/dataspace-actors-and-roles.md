# Dataspace Actors and Roles

Before exploring the various deployment architectures enabled by Ocean Enterprise, it is essential to define the foundational building blocks of any dataspace ecosystem: its actors.

A dataspace is a decentralized, secure, and sovereign data-sharing environment. To maintain trust, security, and operational efficiency, responsibilities are clearly divided between the entities that run the infrastructure and those that exchange assets and value within it. These actors span three distinct layers: **Protocol Creators** (who provide the shared value exchange foundation), **Operators** (who run specific ecosystem infrastructure), and **Participants** (who utilize the ecosystem to exchange data and services).

<figure><img src="../.gitbook/assets/Dataspace Actors (1).png" alt=""><figcaption></figcaption></figure>



## The Protocol Creator Ecosystem

The protocol ecosystem establishes the universal, decentralized rules and immutable logic that govern data and financial transactions across the entire network.

### Ocean Enterprise Collective

The Ocean Enterprise Collective is the foundational entity that deployed the underlying smart contracts used by every Ocean Enterprise-enabled dataspace. These smart contracts act as the standardized, secure protocol layer for executing asset and value exchanges between asset providers and asset consumers. By maintaining this decentralized base layer, the Collective ensures global interoperability, cryptographic security, and trustless settlement across independent entities.



## The Operator Ecosystem

The operator ecosystem is responsible for the uptime, governance, and technical availability of the shared dataspace environment.

### Dataspace Operator

The **Dataspace Operator** is the legal entity responsible for providing, hosting, and maintaining the dataspace environment for all of its members. Enabled by Ocean Enterprise software, the operator provisions the core shared infrastructure. This includes deploying and maintaining the centralized or federated data marketplace, core network nodes, and other shared architectural components required to keep the dataspace operational.



### Dataspace Operator Administrator

The **Dataspace Operator Administrator** is a designated technical professional within the Dataspace Operator organization. This individual is responsible for the day-to-day management of the underlying dataspace infrastructure. Their duties include configuring software stacks, monitoring system health, executing upgrades, and ensuring the overall security and resilience of the system.



## The Participant Ecosystem

The participant ecosystem consists of the organizations and individuals who leverage the dataspace to publish, discover, and consume data assets.

### Dataspace Participant

A **Dataspace Participant** is a legal entity—such as a corporation, research institute, or public agency—that has onboarded into the dataspace. Participants interact with the ecosystem in one or both of the following capacities:

* **Asset Publisher:** An entity that registers, describes, and offers data assets or data services to the network.
* **Asset Consumer:** An entity that discovers, purchases, or accesses data assets and services for various purposes, such as analysis, machine learning, or business intelligence.



### Dataspace Participant User

A **Dataspace Participant User** is an individual employee or representative within a Participant organization. Operating under the authority of their organization, this user logs into the dataspace to perform day-to-day operational tasks. This includes browsing the marketplace, purchasing data access, executing Compute-to-Data jobs, or publishing new organizational data assets.



### Dataspace Participant Administrator

The **Dataspace Participant Administrator** is a specialized role within a Participant organization. This individual does not necessarily interact with data assets directly; instead, they manage the technical resources and cryptographic identities required for their organization to safely interact with the dataspace.

The Participant Administrator is responsible for:

* **User Management:** Granting, modifying, or revoking internal user access to the Ocean Enterprise dataspace.
* **Web3 Address Management:** Managing the cryptographic keys, digital wallets, and blockchain addresses used by the organization for transactions and asset ownership.
* **Verifiable Credentials (VC) Management:** Overseeing the decentralized identities, trust certificates, and compliance credentials required to verify the organization's eligibility within the dataspace network.



## Actor Matrix Summary

| Category    | Actor Name                          | Entity Type                  | Primary Responsibility                                                                                          |
| ----------- | ----------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Protocol    | Ocean Enterprise Collective         | Global Foundation / Protocol | Deployed and maintains the fundamental smart contracts for asset and value exchange used across all dataspaces. |
| Operator    | Dataspace Operator                  | Organization                 | Provisions and maintains the marketplace, nodes, and core components.                                           |
| Operator    | Dataspace Operator Administrator    | Individual                   | Manages and maintains the underlying IT and software infrastructure.                                            |
| Participant | Dataspace Participant               | Organization                 | Acts as a legal entity publishing and/or consuming data assets.                                                 |
| Participant | Dataspace Participant User          | Individual                   | Performs daily business operations (publishing/consuming) on behalf of the organization.                        |
| Participant | Dataspace Participant Administrator | Individual                   | Manages internal users, Web3 accounts, DIDs and Verifiable Credentials.                                         |


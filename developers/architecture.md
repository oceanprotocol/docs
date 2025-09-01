---
description: This page describes the architecture of a Ocean Enterprise system
---

# High Level Architecture

Ocean Enterprise has a multi-layer architecture, as presented in the following diagram.&#x20;

<figure><img src="../.gitbook/assets/image (15).png" alt=""><figcaption></figcaption></figure>



**Data Storage Layer:**  handles saving and retrieving of the data managed by the OE stack. The following types of storage are used:

* _IPFS_ for storing the asset description. When an asset is created in OE, its description including all metadata attached to the asset is saved in IPFS.
* _Blockchain_ for storing the reference to the asset description. After the description of the asset is created in IPFS, the reference to the IPFS object is saved in a transaction on blockchain.
* _Web storage_ for storing the actual content of the assets. For assets of type dataset or algorithm, their content is saved on a storage platform accessible via HTTP protocol. The storage platform can be either on the publisher's premises or in cloud.&#x20;



**Business Logic Layer:** Ocean Enterprise enables a decentralized exchange of data, on one side, and value, on the other side, between a publisher and a consumer. The core element that enables this exchange is represented by the Smart Contracts deployed on-chain.  To this end, the OE Smart Contracts implement the flows for publishing and consuming assets. This layer includes factory contracts, templates for data NFTs and data tokens, fixed rate exchange contracts for paid assets, and Dispenser contracts for free assets.&#x20;



**Services Layer:** Represented by the Ocean Node component, this layer acts as a bridge between the Business Logic Layer and SDK, orchestrating how requests are processed and how business logic is executed. It provides the following services:

* orchestration of the entire consumption flows (download and Compute-To-Data).
* validation for requests.
* data encryption/decryption
* data streaming of the purchased asset to the consumer
* indexing mechanisms for assets
* abstraction of the complexity of the business and data layer, exposing clean APIs&#x20;



**SDK:** The ocean.js library encapsulates the Smart Contract functions to create assets as well as the services provided by Ocean Node in JavaScript functions, which can be used to develop OE-enabled business applications.&#x20;



**User Interface:** This facilitates the interaction between an end-user and the system. OE provides two interfaces:

* _Ocean Enterprise Marketplace_: a graphical interface where users can publish, retrieve and consume assets in a very user friendly manner. The user interface controls how data is displayed and how it responds to user actions. It also performs input validations before passing data to deeper levels.
* _Command Line Interface (CLI)_: a set of high level tools that enable the creation and consumption of OE assets from a command line interface. This is appropriate when OE assets need to be manipulated in back-end like applications, where a user interface is not required. &#x20;



**Access Control Layer:** Is a critical component that governs who can interact with specific resources in OE and under what conditions.  It acts as a gatekeeper, enforcing policies that determine user permissions based on identity or other descriptive attributes. This layer controls, for instance, who is allowed to publish assets, who is allowed to consume a specific asset or what algorithm is allowed to be executed on top of a specific dataset.


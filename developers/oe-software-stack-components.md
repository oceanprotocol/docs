# OE Software Stack Components

The Ocean Enterprise software stack comprises the following components:

## Marketplace

The Marketplace provides the user interface through which dataspace participants manage their own assets and access assets shared by others. Main features include:

* Support for assets with multiple services
* Verification flow for SSI-based access control to assets
* Compute-to-Data wizard for starting C2D jobs&#x20;
* Support for consumers' parameters in download and C2D flows
* User dashboard



## OE Node

The OE Node is the heart of the system; it is a multi-role component, providing the following features:

* encryption of the asset's URI and description during asset publishing
* indexing of the published assets
* on-chain verification for consumer payment
* streaming the asset's data directly to the consumer, without revealing the asset's URI
* providing a Compute-To-Data environment to run jobs using the published assets
* management of the C2D jobs



## Policy Server

The Policy Server is used by the OE Node to determine whether a consumer is authorized to access an asset’s service. It validates access credentials using both the consumer’s web3 address and any SSI‑based access policies defined for the asset. Its core responsibilities include:

* &#x20;Verifying access based on the consumer’s web3 address.
* Checking for SSI-based access control policies if the web3 address is permitted.
* Forwarding any SSI-based access policies to the Verifier component for evaluation.
* Facilitating the data exchange between the Verifier and the consumer’s SSI Wallet to validate the Verifiable Credentials against the asset’s SSI policies.
* Relaying the Verifier’s allow/deny decision back to the OE Node.



## Policy Server Proxy

Policy Server Proxy exposes a set of endpoints that the SSI wallet uses to communicate with the Verifier. Its purpose is to preserve the expected communication flow between the SSI Wallet and the Verifier while routing all interactions through the OE Node and the Policy Server components.



## Verifier

The Verifier (component provided by [walt.id](https://walt.id/)) validates a wide range of digital credentials—such as W3C VCs, SD‑JWT VCs. It checks signatures, formats, and trust policies, and allows you to customize verification behavior through configurable policies, including support for ecosystems like EBSI. For more information about the walt.id verifier, please consult this link: [https://docs.walt.id/community-stack/verifier/getting-started](https://docs.walt.id/community-stack/verifier/getting-started)

In the context of the OE software stack, the Verifier provides the following core functionalities:

* receives the requested credentials and the verification policies from the Policy Server and initiates a presentation session
* validates the Verifiable Credentials submitted by the SSI wallet, for a specific verification request, against the verification policies and returns a success/failure message to the Policy Server.
* invokes the OPA Server to assess and enforce custom policies during the verification process
* optionally interacts with external credential verification services to perform advanced or domain‑specific validation of Verifiable Credentials.



## SSI Wallet

The SSI Wallet (component provided by [walt.id](https://walt.id/)) is an API-driven identity wallet that lets users store, manage, and present a wide range of digital credentials—including W3C VCs, SD‑JWT VCs, using OIDC4VC standards. It also allows users to manage keys and DIDs.

In the context of the OE software stack, the SSI Wallet provides the following core functionalities:

* securely stores the participant's private keys, DIDs, and Verifiable Credentials
* Constructs a Verifiable Presentation from the credentials selected by the participant and submits it to the Verifier for validation

**Note**: <mark style="color:$info;background-color:$info;">It is recommended that, in a production environment, each participant deploys its own SSI Wallet instance within its infrastructure to securely store keys, DIDs, and verifiable credentials. However, the marketplace operator may also provide a default SSI Wallet instance, which the marketplace will automatically use whenever a participant does not supply its own.</mark>

## OPA Server

The Open Policy Agent Server (available [here](https://www.openpolicyagent.org/)) is a general-purpose policy engine that unifies policy enforcement based on a high-level declarative language.

In the context of the OE software stack, the OPA Server is invoked by the Verifier to assess a set of rules and return a true/false response.



## Signer Server

The [Signer Server](https://github.com/OceanProtocolEnterprise/signer-server) is a micro-service responsible for generating and signing Ethereum-compatible transactions using private keys managed by a secure secret management system within Data Space Operator and Data Space Participant environments.

The service enables authenticated users to:

* Execute transactions in the OE Marketplace on behalf of their organization.
* Access and present Verifiable Credentials (VCs) from the organization's SSI wallet during asset consumption workflows.

The Signer Server exposes the following functionalities:

* Sign message
* Send transaction
* Get wallet public address
* Get transaction receipt
* Get account nonce

## OpenBAO Vault

The selected Secret Management System is the open-source [OpenBAO Vault](https://openbao.org/docs/), maintained by the Linux community.

Being a fork of HashiCorp Vault, it can use plugins for performing cryptographic signing operations and returning Ethereum-compatible ECDSA signatures at Vault level, without exposing private keys over Internet. Installed plugin is  [`secpsign`](https://github.com/pelipas/vault-plugin-secp256k1.git) , public repository on GitHub.

OpenBAO Vault is integrated with Signer Server solution for key secure storage and management.

OpenBAO Vault communicates with Signer Server on HTTPS protocol, being compatible with self-signed certificates and signed by a Certificate Authority (CA).



<br>

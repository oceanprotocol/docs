# Dataspaces with basic account abstraction

### Introduction

Dataspaces with basic account abstraction enabled provide a controlled mechanism for blockchain transaction signing without exposing private keys to applications or users. This approach separates blockchain signing from the components that initiate transactions, allowing a dedicated service to handle signing operations.

Basic account abstraction introduces a new software component - Signer Server - as the signing layer between dataspace components and the secure key-management infrastructure. The Signer Server integrates with a Secrets Vault (OpenBao), where it securely stores the blockchain private key. Depending on the deployed dataspace components, the Signer Server can be used by the Marketplace or other services requiring transaction signing, such as walt.id Graphical Interface.



The diagram below shows the main components and the actors of a dataspace with basic account abstraction enabled.

<figure><img src="../../.gitbook/assets/Basic Account Abstraction - HL (1).png" alt=""><figcaption></figcaption></figure>

This solution is built upon the architecture of [Dataspaces with federated market-level authentication](dataspaces-with-market-level-authentication.md#dataspaces-with-federated-market-level-authentication) and complements identity management with Web3 private key management. The Identity Providers (Central and Participant) manage user identities and authentication, while the Secrets Vault (OpenBao) protects the private keys, and the Signer Server performs signing operations on behalf of authorized components. This prevents application components from directly handling private keys while still enabling them to interact with OE smart contracts on the blockchain.

The Signer Server can be deployed centrally, at the Dataspace Operator level, to manage the private keys for the registered organizations in the Central Identity Provider, or at the Participant level, to manage the Participant's private keys. The association between the user and the corresponding Signer Server instance and the private key ID is stored in the user profile in the User Repository.



### Flow Diagrams

The system integration flows selected to highlight the communication between the OE stack components and the newly added Signer Server component are the authentication flows to the Marketplace and to the SSI Wallet UI.

#### User Authentication to Marketplace&#x20;

The diagram below presents two distinct user authentication flows: for users registered on the Central Identity Provider and for users registered on the Participant Identity Provider.

<figure><img src="../../.gitbook/assets/Signer Server High Level Diagram - v5-No-description.drawio.png" alt=""><figcaption></figcaption></figure>



**Marketplace authentication for users registered on the Central Identity Provider**

1. Operational Administrator imports Web3 private keys in OpenBAO Vault. Upon user registration in the Central Identity Provider, a private key is assigned to the user.
2. Organization User requests to authenticate in the application.
3. Marketplace forwards the authentication request to the Central Identity Provider (Authentik).
4. The Central Identity Provider validates the user entry in the user directory stored in PostgreSQL. The user is authenticated to the Marketplace.
5. The Marketplace reads the JWT claims to identify the Signer Server URL and the Wallet ID associated with the user and then forwards the Web3 wallet connection request to the Signer Server.&#x20;
6. Signer Server validates the request, then prepares the transaction payload and sends it to OpenBao Vault for signing based on the wallet ID.
7. OpenBAO uses the secp256k1 plugin with the user's private key to return an Ethereum-compatible signature, avoiding exposing credentials.
8. Signer Server settles the transaction on-chain, and the user is connected to the Signer Server Web3 wallet.



**Marketplace authentication for users registered on the Participant Identity Provider**

1. Operational Administrator imports wallet private keys in OpenBAO Vault. Upon user registration in the Central Identity Provider, the Signer Server URL and a private key are assigned to the user.
2. Organization User requests to authenticate in the application.
3. Marketplace forwards the authentication request to the Central Identity Provider.
4. Organization User selects the Participant OAuth Source, and the Central Identity Provider forwards the request to the Participant Identity Provider for **federated authentication**_._
5. The Participant Identity Provider validates the user entry in the user directory stored in PostgreSQL.
6. The Marketplace reads the JWT claims to identify the Signer Server URL and the Wallet ID associated with the user and then forwards the Web3 wallet connection request to the Signer Server.&#x20;
7. Signer Server validates the request, then prepares the transaction payload and sends it to OpenBao Vault for signing based on the wallet ID.
8. OpenBAO uses the secp256k1 plugin with the user's private key to return an Ethereum-compatible signature, avoiding exposing credentials.
9. Signer Server settles the transaction on-chain, and the user is connected to the Signer Server Web3 wallet.



#### User Authentication to SSI Wallet UI

<figure><img src="../../.gitbook/assets/Signer Server High Level Diagram - Walt.id - v5 - No description.drawio.png" alt=""><figcaption></figcaption></figure>



**SSI Wallet UI authentication for users registered on the Central Identity Provider**

1. Operational Administrator imports wallet private keys in OpenBAO Vault.
2. Operational Administrator requests to authenticate in the SSI Wallet UI application.
3. Walt.id UI forwards the authentication request to the Central Identity Provider.
4. The Central Identity Provider server validates the user entry in the directory persisted in PostgreSQL and returns the authenticated user's JWT.
5. SSI Wallet UI reads the JWT claims to identify the Signer Server URL and the Wallet ID associated with the user and then forwards the Web3 wallet connection request to the Signer Server.&#x20;
6. Signer Server prepares the transaction payload and sends it to Vault for signing based on the **wallet ID.**
7. OpenBAO uses the secp256k1 plugin with the private key to return an Ethereum-compatible signature, avoiding exposing credentials. It signs the message with the nonce, returns the signature to the Signer Server, and authenticates the user in the interface.



**SSI Wallet UI authentication for users registered on the Participant Identity Provider**

1. Operational Administrator imports wallet private keys in OpenBAO Vault.
2. Operational Administrator requests to authenticate in application.
3. Walt.id UI forwards authentication request to Central User Management solution - Authentik.
4. Operational Administrator selects Participant OAuth Source and Data Space Operator Authentik forwards the request to Data Space Participant Authentik for **federated authentication**_._
5. Authentik server validates the user entry in the directory persisted in PostgreSQL.
6. SSI Wallet UI reads the JWT claims to identify the Signer Server URL and the Wallet ID associated with the user and then forwards the Web3 wallet connection request to the Signer Server.&#x20;
7. Signer Server prepares the transaction payload and sends it to Vault for signing based on the **wallet ID**.
8. OpenBAO uses a plugin with a private key to return an Ethereum-compatible signature, avoiding exposing credentials. It signs the message with the nonce, returns the signature to the Signer Server, and authenticates the user in the interface.

### Characteristics

This dataspace with basic account abstraction has the following characteristics:

* **Closed marketplace access:** Only registered users in Dataspace Operator Authentik Server or Dataspace Participant Authentik Server can connect to the marketplace to publish, consume assets, or run C2D jobs.
* **OIDC-based authentication to access the organization's private keys:** Users authenticate through OIDC to the Signer Server component to get access to the organization's private key to sign Web3 transactions.
* **Full control over role and policy management:** The Signer Server supports multiple private keys, each dedicated to a specific operational purpose. The Dataspace Participant Administrator can assign individual users within the organization to distinct Web3 wallets, enabling clear separation of duties and ensuring that responsibilities are properly segmented across teams.
* **Secure storage of the organization's private keys**: The private keys of the organization used to sign Web3 transactions are stored in a dedicated Key Management System. The private keys are never transferred outside the Key Management System, with Web3 transaction signing being performed within this component. &#x20;
* **Improved user experience for marketplace users:** The OE Marketplace no longer triggers browser‑based transaction approval popups (such as MetaMask prompts). This streamlines the user experience by removing disruptive modal dialogs and allowing transactions to proceed through the marketplace’s integrated signing flow.



### Component Diagram

The following diagram depicts the placement of the stack components for a dataspace with basic account abstraction and SSI-based verification enabled.

<figure><img src="../../.gitbook/assets/BAA - component diagram.png" alt=""><figcaption></figcaption></figure>

Basic account abstraction builds directly on the [federated, market‑level authentication model](dataspaces-with-market-level-authentication.md#dataspaces-with-federated-market-level-authentication). In this setup, two Identity Providers operate in trust: a **Central Identity Provider** managed by the Dataspace Operator and a **Participant Identity Provider** managed by each Participant organization. A formal trust relationship links them, ensuring that users authenticated by the Participant Identity Provider are also recognized by the Central Identity Provider.

To enable the basic account abstraction feature, a new component—the **Signer Server**—is deployed in **both** environments: the Participant’s infrastructure and the Dataspace Operator’s infrastructure. Although independently operated, both Signer Servers integrate with the **Central Identity Provider** to validate transaction‑signing requests.

Each Signer Server enforces strict organizational boundaries: it authorizes only those signing requests that originate from users registered on **its own organization’s Identity Provider**. This ensures clear responsibility segregation and prevents cross‑organization signing.

Two components issue transaction‑signing requests to the Signer Server:

* **Marketplace** — for all asset‑related actions, including publishing and consuming assets.
* **SSI Wallet UI** — for authentication flows that rely on a user’s Web3 private key.

Together, these elements provide a unified, federated authentication experience while enabling secure, organization‑scoped transaction signing across the dataspace.



### User Flows

In a deployment where signing is delegated to the Signer Server, the Dataspace Participant's blockchain keys are no longer held by the user. They are held by the Signer Server operated within the Dataspace Participant's environment which signs Web3 transactions on behalf of the user once the user has been authenticated by the Central Identity Provider. Consequently, users are no longer required to install or connect a browser-based Web3 wallet, and every on-chain action they trigger in the Marketplace is carried out by the Signer Server.

#### Registering to the Marketplace

To access the Marketplace, users of a Dataspace Participant must first be registered in the Participant Identity Provider. The Participant Identity Provider is configured to onboard end users through an invitation‑based registration flow.

The Participant Administrator initiates the process by creating a registration invitation. In the invitation, the assigned Signer Server URL and the private key ID are set in the user profile. The invitation is then sent to the end user via email.&#x20;

The end user follows the invitation link and completes the registration form, providing details such as username and password.

Once the registration process is completed, the user’s profile becomes active, enabling them to log in to the Marketplace.



#### Logging in to the Marketplace

To log in, the user begins at the Marketplace login screen. From there, they are redirected to the Central Identity Provider (Central IDP) login page. On this page, users select the Participant Identity Provider to which they belong.

The user is then redirected to the Participant Identity Provider’s login screen, where they authenticate using their username/user ID and password. After the Participant Identity Provider validates the credentials, the user is returned to the Central Identity Provider and subsequently redirected back to the Marketplace.&#x20;

Upon returning to the Marketplace, the Signer Server URL and the wallet ID are extracted from the authenticated user profile, and a Web3 wallet request is sent by the Marketplace to the corresponding Signer Server. Once the user is validated in the Signer Server, the user is connected with its wallet address to the marketplace.&#x20;

Then, the user connects to the SSI Wallet using the wallet address assigned to them by the Signer Server. Now, the user is ready to perform actions in the marketplace.



#### Marketplace Operations

The rest of the user flows - Publishing and accessing assets - are similar to the ones described in the chapter [Dataspaces with SSI-based access control enabled](https://docs.oceanenterprise.io/developers/architecture-1/dataspaces-with-ssi-based-access-control-enabled), with the difference that signing Web3 transactions is now performed by the Signer Server instead of the Web3 wallet installed in the user's browser.&#x20;



### Dataspace Configuration

#### Configuration steps

The simplest way to configure a dataspace with Basic Account Abstraction is to use the [User Management Package](../../infrastructure/user-management-package/), which provides all tools required to install and configure the software components involved in user authentication, private key management, and SSI credentials management within a dataspace organization.

To configure a dataspace with Basic Account Abstraction, perform the following steps:

<table><thead><tr><th width="102.5">Step no.</th><th>Action</th><th>Role</th></tr></thead><tbody><tr><td>1.</td><td><a href="../../infrastructure/marketplace-installation-and-configuration/marketplace-installation.md">Install and perform the basic configuration of the marketplace </a>without configuring market-level authentication</td><td><a href="../dataspace-actors-and-roles.md#dataspace-operator-administrator">Dataspace Operator Administrator</a></td></tr><tr><td>2.</td><td><a href="../../infrastructure/user-management-package/deployment-steps/dataspace-operator-deployment-module-installation-steps.md">Install and configure the User Management Pack for Dataspace Operator</a></td><td><a href="../dataspace-actors-and-roles.md#dataspace-operator-administrator">Dataspace Operator Administrator</a></td></tr><tr><td>3.</td><td><a href="../../infrastructure/marketplace-installation-and-configuration/configure-market-level-authentication/configure-the-oe-marketplace-to-use-oidc-authentication.md">Configure the market-level authentication</a> </td><td><a href="../dataspace-actors-and-roles.md#dataspace-operator-administrator">Dataspace Operator Administrator</a></td></tr><tr><td>4.</td><td><a href="../../infrastructure/user-management-package/deployment-steps/dataspace-participant-deployment-module-installation-steps.md">Install and configure the Participant Identity Provider</a> </td><td><a href="../dataspace-actors-and-roles.md#dataspace-participant-administrator">Dataspace Participant Administrator</a></td></tr><tr><td>5.</td><td><a href="../../operational-guidelines/federated-authentication/onboarding-data-space-participant-in-data-space-operator-authentik.md">Participant Onboarding into Central Identity Provider</a></td><td><a href="../dataspace-actors-and-roles.md#dataspace-operator-administrator">Dataspace Operator Administrator</a></td></tr></tbody></table>

# Dataspaces with basic account abstraction enabled

### Introduction

Dataspaces with basic account abstraction enabled provide a controlled mechanism for blockchain transaction signing without exposing private keys to applications or users. The approach separates blockchain signing from the components that initiate transactions, allowing signing operations to be handled by a dedicated service.

Basic account abstraction uses a Signer Server as the signing layer between dataspace components and the secure key-management infrastructure. The Signer Server integrates with OpenBao Vault, where the blockchain private key is securely stored. Depending on the deployed dataspace components, the Signer Server can be used by the Marketplace or other services requiring transaction signing - walt.id Graphical Interface.

This solution complements identity management and blockchain-based asset operations. Authentik manages user identities and authentication, while OpenBao Vault protects the private keys and the Signer Server performs signing operations on behalf of authorized components. This prevents application components from directly handling private keys while still enabling them to interact with OE smart contracts on the blockchain.

### Components Diagrams

#### Marketplace Communication

<figure><img src="../../.gitbook/assets/Signer Server High Level Diagram - v3-No-description.drawio.png" alt=""><figcaption></figcaption></figure>

**Data Space Operator Steps Description**

&#x20;0\.  Operational Administrator imports wallet private keys in OpenBAO Vault.

1. Organization User requests to authenticate in application.
2. Marketplace forwards authentication request to User Management solution - Authentik.
3. Authentik server validates user entry in directory persisted in PostgreSQL.
4. Signer Server uses JWT claims to request **signer server URL** and **wallet ID** for blockchain transactions.
5. Signer Server prepares transaction payload and sends to Vault for signing based on **wallet ID**.
6. OpenBAO uses plugin with private key to return Ethereum compatible signature, avoiding exposing credentials.
7. Signer Server settles transaction on-chain.

**Data Space Participant Steps Description**

&#x20;0\.  Operational Administrator imports wallet private keys in OpenBAO Vault.

1. Organization User requests to authenticate in application.
2. Marketplace forwards authentication request to User Management solution - Authentik.
3. Organization User selected Participant OAuth Source and Data Space Operator Authentik forwards request to Data Space Participant Authentik for **federated authentication**_._
4. Authentik server validates user entry in directory persisted in PostgreSQL.
5. Signer Server uses JWT claim to request **signer server URL** and **wallet ID** for blockchain transactions.
6. Signer Server prepares transaction payload and sends to Vault for signing based on **wallet ID**.
7. OpenBAO uses plugin with private key to return Ethereum compatible signature, avoiding exposing credentials.
8. Signer Server settles transaction on-chain.

#### Walt.id Graphical Interface Communication

<figure><img src="../../.gitbook/assets/Signer Server High Level Diagram - Walt.id - v3 - No description.drawio (1).png" alt=""><figcaption></figcaption></figure>

**Data Space Operator Steps Description**

&#x20;0\.  Operational Administrator imports wallet private keys in OpenBAO Vault.

1. Operational Administrator requests to authenticate in application.
2. Walt.id UI forwards authentication request to User Management solution - Authentik.
3. Authentik server validates user entry in directory persisted in PostgreSQL.
4. Signer Server uses JWT claims to request **signer server URL** and **wallet ID** to generate signature for portal access.
5. Signer Server prepares transaction payload and sends to Vault for signing based on **wallet ID**.
6. OpenBAO uses plugin with private key to return Ethereum compatible signature, avoiding exposing credentials.\
   Signs message with nonce, returns signature to Signer Server and authenticates user in interface.

**Data Space Participant Steps Description**

&#x20;0\.  Operational Administrator imports wallet private keys in OpenBAO Vault.

1. Operational Administrator requests to authenticate in application.
2. Walt.id UI forwards authentication request to Central User Management solution - Authentik.
3. Operational Administrator selected Participant OAuth Source and Data Space Operator Authentik forwards request to Data Space Participant Authentik for **federated authentication**_._
4. Authentik server validates user entry in directory persisted in PostgreSQL.
5. Signer Server uses JWT claims to request **signer server URL** and **wallet ID** to generate signature for portal access.
6. Signer Server prepares transaction payload and sends to Vault for signing based on **wallet ID**.
7. OpenBAO uses plugin with private key to return Ethereum compatible signature, avoiding exposing credentials.\
   Signs message with nonce, returns signature to Signer Server and authenticates user in interface.

### Characteristics

This configuration has the following characteristics:

* **Close marketplace access:** Only registered users in Dataspace Operator Authentik Server or Dataspace Participant Authentik Server can connect to the marketplace to publish, consume assets, or run C2D jobs.
* **OIDC-based authentication to access the organization's web3 wallets:** Users authenticate through OIDC to the signer server component to get access to the web3 address of the organization and to sign web3 transactions.
* **Full control over role and policy management:** The signer server supports multiple wallets, each dedicated to a specific operational purpose. The dataspace participant administrator can assign individual users within the organization to distinct Web3 wallets, enabling clear separation of duties and ensuring that responsibilities are properly segmented across teams.
* **Secure storage of the organization's private keys**: the private keys of the organization used to sign web3 transactions are stored in a dedicated Key Management System. The private keys are never transferred outside the Key Management System, web3 transaction signing being performed in this component. &#x20;
* **Improved user experience for marketplace users:** The OE Marketplace no longer triggers browser‑based transaction approval popups (such as MetaMask prompts). This streamlines the user experience by removing disruptive modal dialogs and allowing transactions to proceed through the marketplace’s integrated signing flow.

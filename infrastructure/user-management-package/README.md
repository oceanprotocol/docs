# User Management Package

## Table of Contents

* [Overview](./#overview)
  * [Entities](./#entities)
    * [Configuration Differences](./#configuration-differences)
  * [Service Composition](./#service-composition)
    * [Directory Structure](./#directory-structure)
  * [TCP Ports Configuration](./#tcp-ports-configuration)



## Overview

User Management Package is a Docker Compose-based deployment and provides the identity and access management capabilities required to manage users, SSI credentials, and Web3 wallet credentials within a data space.



### Entities

User Management Package can be deployed by both [Data Space Operators](../../developers/dataspace-actors-and-roles.md#dataspace-operator) and [Data Space Participants](../../developers/dataspace-actors-and-roles.md#dataspace-participant), ensuring that user, Web3 private key, and SSI credential management remain under the administrative control of the organization operating the respective data space components.

#### Configuration Differences

The User Management Package uses a set of services and capabilities across both deployment modules, meaning the configuration of these services depends on whether the package is deployed by a **Data Space Operator** or by a **Data Space Participant**.

In the **Data Space Operator** **module**, the configuration supports a broader user management scope. The Data Space Operator is responsible for managing users belonging to the Operator organization as well as the federated providers of the Dataspace Participant&#x73;_._ The deployment also includes the required integration with the **Marketplace**, enabling managed users to authenticate and access marketplace services. \
Its user management solution, Authentik instance, is integrated with Marketplace and SSI Wallet UI for Data Space Operator and Data Space Participants.

In the **Data Space Participant module**, the configuration is scoped to the Participant organization. The Data Space Participant is responsible for managing users belonging to its Participant organization and configuring the User Management Package to integrate with the data space components deployed within its environment. Users belonging to other organizations are outside the scope of the Participant's user management.

The main configuration differences between the two deployment modes are summarized below:

| Configuration Aspect            | Data Space Operator                                  | Data Space Participant                           |
| ------------------------------- | ---------------------------------------------------- | ------------------------------------------------ |
| **User management scope**       | Operator users and federated users                   | Users within the Participant organization        |
| **User federation**             | Configured to support federated users                | Not applicable for users of other organizations  |
| **Administrative scope**        | Data Space Operator environment and federated access | Participant organization                         |
| **Integration scope**           | Data space-level components and Marketplace          | Participant-specific data space components       |
| **Web3 private key management** | Managed for users within the Operator's scope        | Managed for users within the Participant's scope |
| **SSI credential management**   | Managed for users within the Operator's scope        | Managed for users within the Participant's scope |

Despite these differences, both deployment modules follow the same fundamental principle: **the organization deploying the User Management Package retains administrative control over the users, Web3 private keys, and SSI credentials within its defined management scope.**



### Service Composition

User Management Package consists of the following services:

| Service           | Description                                                                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Traefik**       | Reverse proxy used for the SSI stack services, namely **Wallet UI**, **Wallet API,** and **Authentik.**                                                            |
| **Wallet UI**     | Graphical Interface dedicated to operational admins to manage organizational SSI credentials.                                                                      |
| **Wallet API**    | Service that handles SSI credentials management.                                                                                                                   |
| **Signer Server** | Service that signs Ethereum transactions and sends them on-chain whenever a blockchain operation occurs in the graphical interfaces: OE Marketplace and Wallet UI. |
| **OpenBAO Vault** | Secret Management System for storing, managing web3 private keys and Ethereum transaction signing without sharing credentials with other services.                 |
| **Authentik**     | User Management solution.                                                                                                                                          |
| **PostgreSQL**    | Persistence layer that stores the Authentik and SSI Stack databases.                                                                                               |



#### Directory Structure

User Management Package has the following root directory structure:

```
├── dataspace-operator/
├── participant/
├── .gitignore
└── README.md
```

The User Management Package directory structure differs based on the type of organization deploying it.



*   **Data Space Operator**

    ```
    dataspace-operator/
    ├── authentik/
    │   └── dataspace_operator_blueprint.py
    │
    ├── docker-compose/
    │   ├── authentik/
    │   │   ├── blueprints/
    │   │   ├── certs/
    │   │   ├── participant-configs/
    │   │   └── scripts/
    │   ├── openbao/
    │   │   ├── certs/
    │   │   └── secrets/
    │   ├── postgres-init/
    │   ├── signer-server/
    │   │   └── certs/
    │   ├── traefik/
    │   │   ├── certs/
    │   │   └── dynamic/
    │   ├── wallet-api/
    │   │   ├── config/
    │   │   └── data/
    │   └── wallet-ui/
    │   │   
    │   └── .env
    │
    ├── .env.config
    ├── dataspace_operator_environment_configuration.py
    ├── dataspace-operator-initial-setup.sh
    └── requirements.txt
    ```



*   **Data Space Participant**

    ```
    participant/
    ├── authentik/
    │   └── participant_blueprint.py
    │
    ├── docker-compose/
    │   ├── authentik/
    │   │   ├── blueprints/
    │   │   └── certs/
    │   ├── openbao/
    │   │   ├── certs/
    │   │   └── secrets/
    │   ├── postgres-init/
    │   ├── signer-server/
    │   │   └── certs/
    │   ├── traefik/
    │   │   ├── certs/
    │   │   └── dynamic/
    │   ├── wallet-api/
    │   │   ├── config/
    │   │   └── data/
    │   └── wallet-ui/
    │   │   
    │   └── .env      
    │
    ├── .env.config
    ├── participant_environment_configuration.py
    ├── participant-initial-setup.sh
    └── requirements.txt
    ```



**Note:** Each directory structure will be fully described in its corresponding service section within the [User Management Package for Data Space Operator](deployment-steps/dataspace-operator-deployment-module-installation-steps.md) and [User Management Package for Data Space Participant](/broken/pages/0n0sJhueR7vAPKvd6ho3), where all components, subdirectories, and configuration details are documented in depth.



### TCP Ports Configuration

This section highlights implicit ports configured for User Management Pack deployment:

<table><thead><tr><th width="119.39453125">Service</th><th width="123.97265625">TCP Ports</th><th width="203.75390625">Description</th></tr></thead><tbody><tr><td>Traefik</td><td>443 (external), 80 (internal)</td><td>Traefik receives HTTPS traffic on 443, port 80 is exposed only within docker compose deployment.</td></tr><tr><td>Wallet UI</td><td>7104 (internal)</td><td>Traefik forwards traffic on internal port assigned to Wallet UI FQDN.</td></tr><tr><td>Wallet API</td><td>7001 (internal)</td><td>Traefik forwards traffic on internal port assigned to Wallet API FQDN.</td></tr><tr><td>Signer Server</td><td>8443 (external), 3001 (internal)</td><td>Signer Server communicates on HTTPS with all services, on port 8443.</td></tr><tr><td>OpenBAO Vault</td><td>8200</td><td>OpenBAO receives HTTPS traffic from Signer server on 8200 port with docker network.</td></tr><tr><td>Authentik</td><td>9443 (HTTPS), 9000 (HTTP)</td><td>Authentik HTTP port is accessible directly and its traffic is forwarded through Traefik reverse proxy.</td></tr><tr><td>PostgreSQL</td><td>5432</td><td>PostgreSQL receives traffic from internal docker network on default PostgreSQL port 5432, from Authentik services and Wallet API service.</td></tr></tbody></table>

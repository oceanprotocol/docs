# User Management Package

## Table of Contents

* <mark style="background-color:yellow;">to be added</mark>



## Overview

User Management Package is a Docker Compose-based deployment and provides the identity and access management capabilities required to manage users, SSI credentials, and web3 wallet credentials within a data space.

### Entities

User Management Package can be deployed by both **Data Space Operators** and **Data Space Participants**, ensuring that users, web3 private keys, and SSI credentials management remain under the administrative control of the organization operating the respective data space components.

### Service Composition

User Management Package consists of the following services:

| Service           | Description                                                                                                                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Traefik**       | Reverse proxy used for the SSI stack services, namely **wallet UI**, **wallet API,** and **Authentik HTTP.**                                                                                        |
| **Wallet UI**     | Graphical Interface dedicated to operational admins to manage organizational SSI credentials.                                                                                                       |
| **Wallet API**    | Service that handles SSI credentials management business logic.                                                                                                                                     |
| **Signer Server** | Service that communicates with OpenBAO Vault to sign Ethereum transactions and send them on-chain whenever a blockchain operation occurs in the graphical interfaces: OE Marketplace and Wallet UI. |
| **OpenBAO Vault** | Secret Management System for storing, managing web3 private keys and Ethereum transaction signing without sharing credentials with other services.                                                  |
| **Authentik**     | User Management solution.                                                                                                                                                                           |
| **PostgreSQL**    | Persistence layer that stores the Authentik and SSI Stack databases.                                                                                                                                |

#### Directory Structure

User Management Package has the following root directory structure:

```
├── dataspace-operator/
├── participant/
├── .gitignore
└── README.md
```

The User Management Pack directory structure differs based on the type of organization deploying it.

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



**Note:** Each directory structure will be fully described in its corresponding service section within the [User Management Package for Data Space Operator](deployment-steps/dataspace-operator-deployment.md) and [User Management Package for Data Space Participant](/broken/pages/0n0sJhueR7vAPKvd6ho3), where all components, subdirectories, and configuration details are documented in depth.



### TCP Ports Configuration

This section highlights implicit ports configured for User Management Pack deployment:

<table><thead><tr><th width="119.39453125">Service</th><th width="123.97265625">TCP Ports</th><th width="203.75390625">Description</th></tr></thead><tbody><tr><td>Traefik</td><td>443 (external), 80 (internal)</td><td>Traefik receives HTTPS traffic on 443, port 80 is exposed only within docker compose deployment.</td></tr><tr><td>Wallet UI</td><td>7104 (internal)</td><td>Traefik forwards traffic on internal port assigned to Wallet UI FQDN.</td></tr><tr><td>Wallet API</td><td>7001 (internal)</td><td>Traefik forwards traffic on internal port assigned to Wallet API FQDN.</td></tr><tr><td>Signer Server</td><td>8443 (external), 3001 (internal)</td><td>Signer Server communicates on HTTPS with all services, on port 8443.</td></tr><tr><td>OpenBAO Vault</td><td>8200</td><td>OpenBAO receives HTTPS traffic from Signer server on 8200 port with docker network.</td></tr><tr><td>Authentik</td><td>9443 (HTTPS), 9000 (HTTP)</td><td>Authentik HTTP port is accessible directly and its traffic is forwarded through Traefik reverse proxy.</td></tr><tr><td>PostgreSQL</td><td>5432</td><td>PostgreSQL receives traffic from internal docker network on default PostgreSQL port 5432, from Authentik services and Wallet API service.</td></tr></tbody></table>

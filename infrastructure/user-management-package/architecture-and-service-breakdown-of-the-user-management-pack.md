# Architecture and Service Breakdown of the User Management Pack

## Deployment Architecture

<figure><img src="../../.gitbook/assets/User Management Package - Deployment Diagram-v6.drawio.png" alt=""><figcaption></figcaption></figure>

The User Management Package is the deployment that provides identity, wallet and signing services to a Data Space Organization, delivered as a single Docker Compose stack. It is composed on 3 layers:

* Presentation Layer
* Service Layer
* Persistence Layer

Presentation Layer is responsible for traffic forwarding to SSI Wallet docker containers, while Signer Server and Authentik Server from Service Layer communicate directly on HTTPS protocol without passing through reverse proxy.

Persistence Layer is not exposed outside docker internal network. Each container within this layer has at least one volume attached.

## Detailed Service Specifications

As noted earlier, the User Management Pack includes all services required to manage users, Web3 private keys, and SSI credentials. Each service is described in detail in the sections below.

### **Traefik**

Traefik v3.7 is the ingress and reverse-proxy component. Docker provider discovery is enabled, but containers are not exposed by default.

#### **Component Role**

Traefik provides:

* HTTP listener on port 80;
* automatic HTTP→HTTPS redirect;
* HTTPS listener on port 443;
* TLS configuration from a dynamic file provider;
* Docker label-based routing;
* a dedicated Authentik HTTP entrypoint (default 9000);
* health endpoint/ping;
* access logging.

The dashboard and insecure API are disabled.

#### **Specific Configuration**

Important command-line settings include:

```yaml
--providers.docker=true
--providers.docker.exposedbydefault=false
--providers.file.directory=/etc/traefik/dynamic
--entrypoints.web.address=:80
--entrypoints.web.http.redirections.entrypoint.to=websecure
--entrypoints.websecure.address=:443
--entrypoints.websecure.http.tls=true
--log.level=INFO
--accesslog=true
```

TLS configuration comes from:

```yaml
traefik/dynamic/tls.yml
```

and enforces minimum TLS 1.2 in the default TLS option.

#### **Directory Structure**

```
docker-compose/traefik/
├── .env.traefik
├── certs/
│   ├── fullchain.pem
│   └── privkey.pem
└── dynamic/
    └── tls.yml
```



### SSI Wallet API

#### **Component Role**

The **SSI Wallet API** provides the backend capabilities required for managing decentralized identity material. Its responsibilities include:

* **Key management** — generate, import, and delete cryptographic keys used for SSI operations.
* **DID management** — create, import, and remove Decentralized Identifiers.
* **Verifiable Credential management** — issue, import, and delete Verifiable Credentials stored in the wallet.
* **Verifiable Presentation handling** — prepare Verifiable Presentations in response to SSI verifier requests, ensuring credentials are packaged and signed according to the verification policy.

It ensures data persistence by storing all data in the PostgreSQL database.

#### **Specific Configuration**

The SSI Wallet API instance is configured as follows:

* Web3 address-based user authentication.
* Use PostgreSQL database for storing all data (credentials, DIDs, keys etc.)
* The configuration files of this component are located in the `/docker-compose/wallet-api/config` directory and are loaded when the container is started.&#x20;

{% hint style="info" %}
The configuration files must not be modified by users unless explicit guidance is provided. Unauthorized changes can lead to inconsistent behavior, deployment failures, or unsupported system states.
{% endhint %}

* The container starts only after the PostgreSQL service becomes healthy
* Communication type: only HTTP. The Wallet API component is placed behind the Traefik component to be accessible via HTTPS.
* Container TCP port: 7001



#### **Directory Structure**

{% code overflow="wrap" %}
```
docker-compose/wallet-api/
├── .env.wallet-api
├── config/
│   ├── _features.conf
│   ├── auth.conf
│   ├── db.conf
│   ├── db.mssql.conf
│   ├── db.sqlite.conf
│   ├── ktor-authnz.conf
│   ├── logins.conf
│   ├── oidc.conf
│   ├── registration-defaults.conf
│   ├── rejectionreason.conf
│   ├── trust.conf
│   ├── trusted-ca.conf
│   └── web.conf
└── data/
```
{% endcode %}



### **SSI Wallet UI**

#### **Component Role**

The **SSI Wallet UI** provides the front-end capabilities required for managing decentralized identity material. Its responsibilities include:

* User authentication through integration with the Authentik server
* User authorization based on group membership: only users who are members of a specific group (set in `NUXT_ADMIN_USER_GROUP_NAME`) are allowed to access the user interface
* Calling SSI Wallet API endpoints to perform operations on the SSI material upon the user's request: create/import/delete of keys/DIDs/Verifiable Credentials.\
  &#x20;

#### **Specific Configuration**

* Communication type: only HTTP. The Wallet UI component is placed behind the Traefik component to be accessible via HTTPS.
* Container TCP port: 7104





#### **Directory Structure**

```
docker-compose/wallet-ui/
└── .env.wallet-ui
```



### **Signer Server**

The Signer Server is the OE signing service responsible for executing Web3 transactions. Depending on its configured operation mode, it can sign transactions using either in‑memory private keys or OpenBao, which serves as an external secure signing‑key backend.

#### **Component Role**

Signer Server:

* performs web3 transaction signing upon user request;
* authenticates user requests by integrating with the Authentik service;
* authorizes user requests based on the user origin;
* authorizes user requests based on the origin's URL;&#x20;
* accesses Ethereum keys through OpenBao (when configured in `vault` mode);
* connects to configured blockchain RPC endpoints using `NODE_URI_MAP`;
* communicates over HTTPS.



The container starts only after OpenBao becomes healthy and the OpenBao certificate/root token exists.

#### **Directory Structure**

```
docker-compose/signer-server/
├── .env.signer-server
└── certs/
    ├── fullchain.pem
    └── privkey.pem
```



### **OpenBAO Vault**

[OpenBao](https://openbao.org/) is an open-source, community-driven secrets manager that provides private-key custody and secret storage for signing.

#### **Component Role**

OpenBao:

* stores secrets using integrated Raft storage;
* exposes a TLS API internally on 8200;
* hosts the `secpsign` secp256k1 plugin;
* provides the `ethereum/` account engine;
* provides the `secret/` KV v2 engine;
* signs web3 transactions upon Signer Server's request;
* creates wallet ID/address mappings;
* persists OpenBao initialization and mapping metadata.

#### **Specific Configuration**

Volumes:

```
openbao-data -> /bao/data
openbao-keys -> /vault/keys
```

Host paths:

```
./openbao/secrets/private_keys -> /run/secrets/private_keys
./openbao/certs -> /etc/openbao/certs:ro
```

The image entrypoint copies configured TLS material into `/etc/openbao/tls`, starts OpenBao, initializes/unseals it, registers the plugin, enables the required secrets engines, and imports startup accounts.

#### **Directory Structure**

```
docker-compose/openbao/
├── .env.openbao
├── Dockerfile
├── docker-entrypoint.sh
├── init-vault.sh
├── manage-accounts.sh
├── openbao.hcl
├── certs/
│   ├── tls.crt
│   └── tls.key
└── secrets/
    └── private_keys
```



### **Authentik Server**

[Authentik](https://goauthentik.io/) is the identity provider and authentication service within an OE-enabled dataspace. Its main purpose is to provide user authentication to other components, such as OE Marketplace, Signer Server, and SSI Wallet UI.

#### **Component Role**

Authentik provides:

* User registration and recovery flows
* Dataspace Participant onboarding (through federation integration)
* OIDC-based user authentication (centralized and federated)&#x20;
* Session management
* Single Sign-On (SSO)
* Single Logout (SLO)
* OE-specific identity claims (organization ID, wallet ID, Signer Server, well-known URL, and federated identity metadata)



#### **Specific Configuration**

Authentik server comes in two different configurations:&#x20;

* for Dataspace Operator (Central Identity Provider):&#x20;
  * manages central users
  * maintains a trust relationship to registered Federated Identity Providers from Dataspace Participants
  * provides user authentication to other components&#x20;
* for Dataspace Participant (Federated Identity Provider):&#x20;
  * manages participant users
  * maintains a trust relationship with the Central Identity Provider



Authentik server has been configured with the following OE-specific claims attached to the user profile:

* orgId: Organization Identifier
* signerServerURL: The URL of the Signer Server to which the user is assigned
* walletId: The identifier of the web3 wallet address stored in the Signer Server, which is assigned to the user
* wellKnownUrl: The URL of the well-known API endpoint of the Authentik server on which the user was registered



The Authentik stack runs two separate containers - `authentik-server` and `authentik-worker`  - using the same image/tag and the `.env.authentik` configuration file.

The Authentik server uses the PostgreSQL server for data persistence, where a separate database is configured for this purpose.

The server mounts the following volumes:

```
- ./authentik/data:/data
- ./authentik/custom-templates:/templates
- ./authentik/blueprints:/blueprints/custom:ro
- ./authentik/certs:/certs
- ./authentik/scripts:/scripts:ro
- ./authentik/participant-configs:/participant-configs:ro

```

The worker additionally mounts the Docker socket.

#### **Directory Structure**

**For Dataspace Operator**

```
dataspace-operator/
├── authentik/
│   └── dataspace_operator_blueprint.py
└── docker-compose/authentik/
    ├── .env.authentik
    ├── blueprints/
    │   └── dataspace-operator-authentik-blueprint.yaml
    ├── certs/
    ├── participant-configs/
    ├── onboard-participant.sh
    └── scripts/
        └── dataspace_operator_add_participant.py
```



**For Participant**

```
participant/
├── authentik/
│   └── participant_blueprint.py
└── docker-compose/authentik/
    ├── .env.authentik
    ├── blueprints/
    │   └── participant-authentik-blueprint.yaml
    └── certs/
```



### **PostgreSQL**

[PostgreSQL](https://www.postgresql.org/) is the shared database service in the User Management Package.

#### **Component Role**

It provides persistence for:

* SSI Wallet API data;
* Authentik data.

A startup initialization script creates/configures the Authentik database and SSI stack services database using generated environment credentials.

#### **Specific Configuration**

The service uses:

```
image: postgres:18
```

with a health check based on:

```
pg_isready -q -U postgres
```

and the persistent volume:

```
wallet-api-db:/var/lib/postgresql
```

The initialization script is mounted at:

```
/docker-entrypoint-initdb.d/10-create-authentik-db.sh
```

#### **Directory Structure**

```
docker-compose/postgres-init/
├── .env.postgres
└── create-authentik-db.sh
```

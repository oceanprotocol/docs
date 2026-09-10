# Signer Server Installation and Configuration

## Deployment Architecture

The Signer Server is the remote signing service of Ocean Enterprise. It exposes authenticated signing operations to the OE front ends and broadcasts the resulting transactions to the blockchain. It can be deployed in two key custody modes, selected by the environment variable `SIGNER_MODE`:

* **Vault mode** — signing keys are held in an OpenBAO Vault container;
* **Local mode** — signing keys are held in the Signer Server configuration.

Both deployments are described below.&#x20;

Repository: [OceanProtocolEnterprise/signer-server](https://github.com/OceanProtocolEnterprise/signer-server).



### Signer Server - Vault Mode Deployment

<figure><img src="../../.gitbook/assets/Signer Server - Deployment Diagram - Vault Mode - v4.drawio.png" alt=""><figcaption></figcaption></figure>



Vault mode adds a second boundary inside the Compose network: a **Persistence Layer** containing an **OpenBAO Vault** container together with two Docker volumes, `openbao-data` and `openbao-keys`.

The Signer Server holds no key material. It calls Vault over the internal Docker Compose network, and Vault performs the custody.

The dependency lines from the Vault container to the two volumes show that both the Vault data and the unseal keys survive container restarts. This is the default mode selected in the User Management Package deployment.



### Signer Server - Local Mode Deployment

<figure><img src="../../.gitbook/assets/Signer Server - Deployment Diagram - Local Mode - v2.drawio.png" alt=""><figcaption></figcaption></figure>

In **local** mode, the Persistence Layer, the Vault container, and both volumes are absent. The Docker Compose network contains only the Signer Server, and the service holds the keys in its own configuration, in the environment variable `PRIVATE_KEYS`.



## Prerequisites

Before installing and running the Signer Server, it is essential to ensure that your environment meets the required hardware and software prerequisites.

### Hardware requirements

The minimum hardware requirements for the server that will run this component are:

* Number of cores: 1
* RAM: 8 GB
* Disk: 50 GB

### Software requirements

* **Operating System:** Any Linux distribution supported by the Docker Engine and Docker Compose products. For guidance on compatible platforms, see the [Docker Compose supported platforms](https://docs.docker.com/desktop/setup/install/linux/) and [Docker Engine supported platforms](https://docs.docker.com/engine/install/) documentation.
* **Software products:**
  * Docker Engine
  * Docker Compose

### Other requirements

* **Blockchain RPC provider**: The Signer Server needs a blockchain RPC provider to sign blockchain transactions. Use a service such as Alchemy, Infura, or Chainstack. Ensure your subscription tier supports enough requests per second to meet the Signer Server's demand.



## Pre-installation Steps



### Enabling TCP Ports

Ensure that the TCP port used by the Signer Server is available on the host and does not conflict with ports used by other processes.&#x20;

The Signer Server listens on TCP port `3001` by default (container). The configured port can be changed through the `PORT` environment variable.

The Docker configuration supplied with the repository maps host port `8443` to container port `3001`.

### Setting up FQDN

A Fully Qualified Domain Name should be assigned to the Signer Server so that applications and users can access the service through a stable hostname rather than an IP address.

Before starting the services, a Fully Qualified Domain Name (FQDN) must be configured for at least one of the following:

* `signer-server`&#x20;

or

* The VM used to run the entire stack

Add DNS records for the services listed above in your DNS server or DNS management platform.

Examples of widely used DNS management platforms are [Cloudflare](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/), [Amazon Route 53](https://aws.amazon.com/route53/), [Google Cloud DNS](https://cloud.google.com/dns?hl=en), [Azure DNS](https://azure.microsoft.com/en-us/products/dns), etc.



### SSL Certificates Generation & Configuration

Use this guide to generate digital certificates for the Signer Server.

For production:

* use valid CA-issued certificates;
* include all required hostnames in SANs;
* use separate private keys where policy requires separation of duties;
* do not keep certificate private keys in Git;
* mount certificates from a protected deployment secret mechanism where possible;
* renew certificates before expiry and safely restart/reload affected services.

A common setup is installing a free SSL/TLS certificate from [Let's Encrypt](https://letsencrypt.org/) using [Certbot](https://certbot.eff.org/).

For using this mix, a good starting point is [https://certbot.eff.org/instructions](https://certbot.eff.org/instructions).

**Note**: For OpenBao, the certificate files must be added to `<directory>/docker-compose/openbao/certs`. If no certificate files (`tls.crt` and `tls.key`) are provided, OpenBao automatically generates a self-signed certificate using OpenSSL when the OpenBao service starts and the Docker image is created.



### Private Key Generation for OpenBao Vault

For web3 account generation and Vault management, please review the entire chapter [Key Generation & Management in OpenBao Secrets Vault](key-generation-and-management-in-openbao-secrets-vault/) or consult the dedicated sections:

* [Generate Private Keys](key-generation-and-management-in-openbao-secrets-vault/generate-private-keys.md)
* [Key Storage & Management in OpenBao](key-generation-and-management-in-openbao-secrets-vault/key-storage-and-management-in-openbao.md)



## Deployment Steps

The Signer Server supports two signing modes:

* **Local mode** – private keys are supplied directly to the Signer Server through configuration.
* **Vault mode** – signing operations use keys managed through OpenBao Vault.

The signing mode is selected using the `SIGNER_MODE` environment variable.&#x20;



Before starting the deployment, clone the repository and change into the project directory:

```bash
git clone https://github.com/OceanProtocolEnterprise/signer-server.git
cd signer-server
```

{% hint style="info" %}
Please consult the [Environment Variables](./#environment-variables) chapter for details on how to set them for a specific configuration.
{% endhint %}

### Deployment of Signer Server in Local Mode

Local mode stores the configured blockchain signing keys in the Signer Server environment. This deployment mode is typically suitable for development, testing, evaluation environments, or installations where external key management is not required.

#### 1. Change to the local mode directory

Go to the local mode directory

{% code overflow="wrap" %}
```bash
cd docker-compose/local
```
{% endcode %}

#### 2. Configure Local Signing Mode

Copy the `.env.example` file to `.env`. Open the `.env` file and configure:

```bash
SIGNER_MODE=local
```

Define one or more signing keys using `PRIVATE_KEYS`:

```bash
PRIVATE_KEYS=[{"walletId":1,"key":"<PRIVATE_KEY>"}]
```

Each entry contains:

* `walletId` – identifier associated with the signing wallet;
* `key` – private key used by the Signer Server.

The example configuration uses this structure for local signer mode.

> Private keys must be treated as sensitive credentials. Access to the `.env` file should be restricted, and private keys should never be committed to source control.

#### 3. Configure Blockchain RPC Endpoints

Configure the blockchain networks that the Signer Server will use through `NODE_URI_MAP`.

For example:

```bash
NODE_URI_MAP=[{"11155111":{"key":"https://eth-sepolia.g.alchemy.com/v2/<ALCHEMY_API_KEY>","multiplier":3}}]
```

The mapping is keyed by blockchain chain ID and provides the RPC endpoint used by the Signer Server.

Configure only the networks required by the deployment.

#### 4. Configure the OIDC Authentication

Configure the Authentik/OIDC parameters:

```bash
AUTHENTIK_JWKS_URI=<authentik_jwks_uri>
AUTHENTIK_ISSUER=<authentik_issuer_url>
AUTHENTIK_AUDIENCE=<authentik_oidc_client_id>
UPSTREAM_IDP=<participant_authentik_idp_slug_or_id>
```

The Signer Server validates protected requests using the JWT signature, JWKS endpoint, issuer, audience, and expected `upstream_idp` claim.

Configure the permitted origins. In a production environment, only the marketplace and the SSI Wallet UI URLs should be listed in this environment variable.&#x20;

```bash
ALLOWED_ORIGINS='["https://market.example.com","https://wallet.example.com"]'
```

`ALLOWED_ORIGINS` is optional. If configured, requests to protected endpoints whose `Origin` header does not match the configured list are rejected before JWT validation.



#### 5. Configure the TCP port and digital certificates

Configure the server port and environment:

```bash
SIGNER_PORT=8443
PORT=3001
```



If TLS is terminated directly by the Signer Server, configure the certificate paths:

```bash
HTTP_CERT_PATH=/etc/ssl/certs/cert.pem
HTTP_KEY_PATH=/etc/ssl/certs/key.pem
```

The corresponding certificates can be placed in the local `./certs` directory, which Docker Compose mounts read-only at `/etc/ssl/certs`.

#### 6. Start the Signer Server

Deploy the service:

```bash
docker compose up --build -d
```

Verify that the container is running:

```bash
docker compose ps
```

Review the logs:

```bash
docker compose logs -f
```



### Deployment of Signer Server in Vault Mode

Vault mode enables the Signer Server to perform signing operations using keys managed through Vault ([OpenBao](https://openbao.org/)) instead of supplying blockchain private keys directly in the Signer Server configuration.

This mode is recommended for deployments requiring centralized secrets management and stronger separation between application configuration and signing key material.

The Signer Server communicates with OpenBao through the Vault-compatible API.

#### 1. Change to the Vault mode directory

Go to the local mode directory

{% code overflow="wrap" %}
```bash
cd docker-compose/vault
```
{% endcode %}

#### 2. Configure Vault Signing Mode

Copy the `.env.example` file to `.env`. Open the `.env` file and configure:

Set:

```bash
SIGNER_MODE=vault
```

Leave the Vault connection parameters as they are set in `.env.example`:

```bash
VAULT_URL=https://openbao:8200
VAULT_ETHEREUM_MOUNT=ethereum
VAULT_KV_STORE_PATH=secret
VAULT_TIMEOUT_MS=10000
```

The Signer Server configuration currently supports the following Vault settings:

* `VAULT_URL` – OpenBao Vault endpoint;
* `VAULT_ETHEREUM_MOUNT` – Vault mount containing the Ethereum signing functionality;
* `VAULT_KV_STORE_PATH` – Vault KV secrets path;
* `VAULT_TIMEOUT_MS` – timeout for Vault requests.

These variables are defined in the repository's current `.env.example`.

For production deployments, the Vault token should itself be handled as a sensitive secret and should have only the minimum permissions required by the Signer Server.

#### 3. Configure Blockchain RPC Endpoints

Configure the required blockchain networks (example:

```bash
NODE_URI_MAP=[{"11155111":{"key":"https://eth-sepolia.g.alchemy.com/v2/<ALCHEMY_API_KEY>","multiplier":3}}]
```

Ensure that the Signer Server host can resolve and establish outbound connections to all configured RPC endpoints.

#### 4. Configure Authentication

Configure Authentik:

```bash
AUTHENTIK_JWKS_URI=<authentik_jwks_uri>
AUTHENTIK_ISSUER=<authentik_issuer_url>
AUTHENTIK_AUDIENCE=<authentik_oidc_client_id>
UPSTREAM_IDP=<participant_authentik_idp_slug_or_id>
```

Configure the permitted origins. In a production environment, only the marketplace and the SSI Wallet UI URLs should be listed in this environment variable.&#x20;

```bash
ALLOWED_ORIGINS='["https://market.example.com","https://wallet.example.com"]'
```

`ALLOWED_ORIGINS` is optional. If configured, requests to protected endpoints whose `Origin` header does not match the configured list are rejected before JWT validation.



#### 5. Configure the TCP port and digital certificates

For a production deployment:

```bash
SIGNER_PORT=8443
PORT=3001
```



If the Signer Server handles HTTPS directly:

```bash
HTTP_CERT_PATH=/etc/ssl/certs/cert.pem
HTTP_KEY_PATH=/etc/ssl/certs/key.pem
```

Alternatively, terminate TLS at the reverse proxy or load balancer and restrict direct access to the TCP port `3001`.



#### 6. Start the Signer Server

Deploy the service:

```bash
docker compose up --build -d
```

Verify that the container is running:

```bash
docker compose ps
```

Review the logs:

```bash
docker compose logs -f
```

## Post-installation Steps

* Verify that the Signer Server uses HTTPS communication (check the container's log);
* Ensure that the Signer Server can access the Authentik server instance against which the authentication tokens will be validated (the Central Identity Provider deployed by the Dataspace Operator)
* Ensure that the Signer Server is accessible from the Internet
* Verify the health endpoint (example `curl https://<signer-server>/api/v1/health` )



## Environment Variables

### Operation mode

#### SIGNER\_MODE

**Description:** Sets the operation mode of the Signer Server, which can be `local` (with the private keys loaded into the signer server's environment, recommended for demo environments) or `vault` (with the private keys stored in a secrets vault, recommended for production environments).

**Value:** string `(local/vault)`

**Example:** `vault`

**Default Value:** `null`



### Private Keys

#### PRIVATE\_KEYS

**Description:** This variable is valid only if the Signer Server's operating mode ([SIGNER\_MODE](./#signer_mode)) is set to `local` . It lists the private keys the Signer Server uses to sign web3 transactions. Each private key has an ID and the actual value.

**Value:** Array of objects&#x20;

**Example:**&#x20;

```
PRIVATE_KEYS=[{"id":1,"key":"0x..."},{"id":2,"key":"0x..."}]
```

**Default Value:** `null`



### Blockchain RPCs

#### NODE\_URI\_MAP

**Description:** Sets the list of blockchains in which the Signer Server signs transactions. For each blockchain, the following details are specified:

* the RPC endpoint used to access the blockchain
* gas multiplier: Scales the per‑unit gas price that the Signer Server uses when submitting blockchain transactions. The network‑estimated fee is multiplied by this value, and the result becomes the effective gas price paid per gas unit. Increasing the multiplier raises the transaction’s competitiveness and helps ensure timely inclusion during periods of network congestion. \
  **Note**: We recommend using the default values provided in this variable for each blockchain. If the multiplier is not set for a blockchain, the default value is used, which is as follows:
  * Ethereum Sepolia (chain no. 11155111) = 3
  * OP Sepolia (chain no. 11155420) = 2
  * OP Mainnet (chain no. 10) = 1.5
  * Ethereum Mainnet (chain no. 1) = 2.

**Value:** Array of objects&#x20;

**Example:** &#x20;

{% code overflow="wrap" %}
```json
NODE_URI_MAP= [{"11155111":{"key":"https://eth-sepolia.g.alchemy.com/v2/<ALCHEMY_API_KEY>","multiplier":3}},{"11155420":{"key":"https://opt-sepolia.g.alchemy.com/v2/<ALCHEMY_API_KEY>","multiplier":2}},{"10":{"key":"https://opt-mainnet.g.alchemy.com/v2/<ALCHEMY_API_KEY>","multiplier":1.5}},{"1":{"key":"https://eth-mainnet.g.alchemy.com/v2/<ALCHEMY_API_KEY>","multiplier":2}}]
```
{% endcode %}

Here's the structured format of the same value.

```json
NODE_URI_MAP=[
  {
    "11155111": {
      "key": "https://eth-sepolia.g.alchemy.com/v2/<ALCHEMY_API_KEY>",
      "multiplier": 3
    }
  },
  {
    "11155420": {
      "key": "https://opt-sepolia.g.alchemy.com/v2/<ALCHEMY_API_KEY>",
      "multiplier": 2
    }
  },
  {
    "10": {
      "key": "https://opt-mainnet.g.alchemy.com/v2/<ALCHEMY_API_KEY>",
      "multiplier": 1.5
    }
  },
  {
    "1": {
      "key": "https://eth-mainnet.g.alchemy.com/v2/<ALCHEMY_API_KEY>",
      "multiplier": 2
    }
  }
]
```

**Default Value:** `null`



### Authentik Server Integration

The Signer Server APIs are protected by an Authentik JWT guard, meaning that every call to the Signer Server is validated against the following checks:

* JWT signature
* Issuer
* Audience
* `upstream_idp` claim

The following environment variables set the Authentik JWT guard for Signer Server.&#x20;

#### AUTHENTIK\_ISSUER

**Description:** Defines the **issuer URL** of the Authentik provider used to validate the JWT tokens presented by users calling the Signer Server’s endpoints. This must match the issuer URL of the Authentik provider that authenticates users in the OE Marketplace, ensuring that the Signer Server accepts tokens only from the same trusted identity source.

**Value:** String (URL)

**Example:** `https://ocean-node-vm3.oceanenterprise.io:9443/application/o/oe-market-vm3/`

**Default Value:** `null`



#### AUTHENTIK\_AUDIENCE

**Description:** Defines the **client ID** of the Authentik provider used to validate the JWT tokens presented by users calling the Signer Server’s endpoints. This must match the client ID of the Authentik provider that authenticates users in the OE Marketplace, ensuring that the Signer Server accepts tokens only from the same trusted identity source.

**Value:** String (URL)

**Example:** `https://ocean-node-vm3.oceanenterprise.io:9443/application/o/oe-market-vm3/`

**Default Value:** `null`



#### AUTHENTIK\_JWKS\_URI

**Description:** Defines the **JWKS endpoint URL** of the Authentik provider used to validate the JWT tokens presented by users calling the Signer Server’s endpoints. This must match the JWKS endpoint of the Authentik provider that authenticates users in the OE Marketplace, ensuring that the Signer Server accepts tokens only from the same trusted identity source.

**Value:** String (URL)

**Example:** `https://ocean-node-vm3.oceanenterprise.io:9443/application/o/oe-market-vm3/`

**Default Value:** `null`



#### UPSTREAM\_IDP

**Description:** Specifies the identity provider (IDP) from which users must originate to call the Signer Server’s APIs. The Signer Server enforces this by checking the `upstream_idp` claim in the JWT included with each API request. If the value of this claim matches the value of `UPSTREAM_IDP`, the request is accepted; if it differs, the request is rejected.&#x20;

When `UPSTREAM_IDP` is not set, the Signer Server allows any request that passes standard JWT validation.

**Value:** String

**Example:** `"ocean-enterprise"` . This value translates into: only requests from users who have a valid JWT with the `"upstream_idp"` claim set to `"ocean-enterprise"` are accepted.

**Default Value:** `null`



### OpenBao Vault

The following variables need to be set only when the Signer Server is operating in vault mode (Signer Server's operating mode ([SIGNER\_MODE](./#signer_mode)) is set to `vault`),&#x20;

#### VAULT\_URL

**Description:** Sets the URL where the OpenBao service is available, which is based on the internal OpenBao container hostname.

**Values:** String (URL)

**Example:** `https://openbao:8200`&#x20;

**Default Value:** `null`



#### VAULT\_ETHEREUM\_MOUNT

**Description:** Sets the vault path where the private keys used by Signer Server to sign transactions are located.

**Values:** String&#x20;

**Example:** `ethereum`

**Default Value:** `null`

&#x20;

#### VAULT\_KV\_STORE\_PATH

**Description:** Sets the vault path where the walletID-to-wallet address mappings are located.

**Values:** String&#x20;

**Example:** `secret`

**Default Value:** `null`



#### VAULT\_TIMEOUT\_MS

**Description:** Sets the timeout of the vault requests (in miliseconds)&#x20;

**Values:** Integer

**Example:** `10000`

**Default Value:** `null`



### HTTPS connection

Set the following environment variables to enable HTTPS connections on Signer Server.

**Note**: The Signer Server start commands shown in this guide mount the `certs` directory from the repository into the container at `/etc/ssl/certs/`. To enable HTTPS with minimal setup, place your certificate files in this directory and adjust the environment variable to reference the correct certificate file name.

#### **HTTP\_CERT\_PATH**

**Description:** Sets the location where the TLS certificate of the Signer Server resides. If the value is null, the HTTPS connection is not enabled. Make sure that the referenced file includes both the digital certificate and the intermediate certificate.

Please note that the

**Values:** string

**Example:** `/etc/ssl/certs/cert.pem`

**Default Value:** `null`

#### **HTTP\_KEY\_PATH**

**Description:** Sets the location where the private key file of the TLS certificate resides. If the value is null, the HTTPS connection is not enabled.

**Values:** string

**Example:** `/etc/ssl/certs/key.pem`

**Default Value:** `null`

&#x20;

### Accepted URL origins

#### ALLOWED\_ORIGINS

**Description:** Specifies the list of permitted origins (URLs) from which requests to Signer Server's endpoints are allowed. Only requests originating from the values defined in this variable will pass the validation and be accepted by the server.

**Values:** Array of strings (URL)

**Example:** `["https://market2.demo.oceanenterprise.io/", "https://waltid-ui.oceanenterprise.io"]`

**Default Value:** `null`



### TCP Ports

#### SIGNER\_PORT

**Description:** Defines the port on which the application listens inside the host sever. In the `docker-compose.yml` file, the SIGNER\_PORT is mapped to the PORT.&#x20;

**Values:** number

**Example:** `3001`

**Default Value:** `3001`&#x20;



#### PORT

**Description:** Defines the port on which the application listens inside the container. IIn the `docker-compose.yml` file, the SIGNER\_PORT is mapped to the PORT.

**Values:** number

**Example:** `3001`

**Default Value:** `3001`&#x20;



### Node.js environment

#### NODE\_ENV

**Description:** built-in environment variable convention in [Node.js](https://nodejs.org/learn/getting-started/nodejs-the-difference-between-development-and-production) used to tell your application and its libraries whether it is running in development, production, or testing. For production environments, set it to `production`. For an explanation of other values, see this [link](https://nodejs.org/learn/getting-started/nodejs-the-difference-between-development-and-production).

**Values:** string (production/development/testing)

**Example:** `production`

**Default value:** `none`

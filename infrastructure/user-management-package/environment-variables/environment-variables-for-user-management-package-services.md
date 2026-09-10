# Environment Variables for User Management Package Services

This page describes the environment variables used across all services in the **User Management Pack**. Each service organizes its variables into three categories:

* **Generated variables** — values produced automatically by the initialization script, based on user‑provided inputs.
* **Default variables** — values predefined from the start and not influenced by user input.
* **Configurable variables** — values initially set by the initialization script but designed to be updated later by the user without rerunning the script.

{% hint style="info" %}
Traefik and OpenBao services have no environment variables.&#x20;
{% endhint %}



## SSI Wallet API

### Generated variables

#### WALLET\_API\_HOST

**Description:** Sets the FQDN of the server on which the Wallet API service runs.

**Values:** String (URL)

**Example:** `wallet-api.demo.oceanenterprise.io`

**Default Value:** `null`



#### WALLET\_UI\_HOST

**Description:** Sets the FQDN of the server on which the Wallet UI service runs.

**Values:** String (URL)

**Example:** `wallet-ui.demo.oceanenterprise.io`

**Default Value:** `null`



### Default variables

#### WALLET\_API\_TAG

**Description:** Sets the Wallet API Docker image tag.&#x20;

**Values:** String

**Example:** `gaiax-0.1.1-OE`

**Default Value:** `null`



#### WALLET\_BACKEND\_PORT

**Description:** Sets the TCP port on which the Wallet API service listens. The configured port is 7001.

**Values:** Integer

**Example:** `7001`

**Default Value:** `null`



#### DB\_NAME

**Description:** Sets the database name used by the Wallet API service for data persistence. The configured database name is `waltid`.

**Values:** String

**Example:** `waltid`

**Default Value:** `null`



#### DB\_USERNAME

**Description:** Sets the username used by the Wallet API service to access the database. The configured username is `waltid`.

**Values:** String

**Example:** `waltid`

**Default Value:** `null`

&#x20;&#x20;

#### DATABASE\_ENGINE

**Description:** Sets the database type used for data persistence. The configured database is `postgres`.

**Values:** String

**Example:** `postgres`

**Default Value:** `null`

&#x20;

#### POSTGRES\_DB\_PORT

**Description:** Sets the port on which the database listens. The configured port is `5432`.

**Values:** Integer

**Example:** `5432`

**Default Value:** `null`



#### POSTGRES\_DB\_HOST

**Description:** Sets the hostname of the server on which the database runs. The configured value is the container's hostname used in the internal Docker network `postgres`).

**Values:** String

**Example:** `postgres` &#x20;

**Default Value:** `null`&#x20;



#### POSTGRES\_DB\_DATA

**Description:** Sets the directory where the Wallet API database files are located. The configured value is  `/waltid-wallet-api/data/` . &#x20;

**Values:** String

**Example:** `postgres` &#x20;

**Default Value:** `null`&#x20;



#### SERVICE\_HOST

**Description:** Determines the hostname or IP address at which the service container or its dependencies can be discovered internally or externally across the network. The configured value is  `localhost` .&#x20;

**Values:** String

**Example:** `localhost` &#x20;

**Default Value:** `null`&#x20;



### Configurable variables

#### DB\_PASSWORD

**Description:** Sets the password of the database user used by the Wallet API service to access the database.&#x20;

**Values:** String

**Example:** `setastrongpassword`

**Default Value:** `null`



## SSI Wallet UI

### Generated variables

#### NUXT\_PUBLIC\_REDIRECT\_URI

**Description:** Specifies the redirect URI used during the OIDC user authentication flow, telling the identity provider where to securely send the user and return tokens or authorization codes after authentication finishes.

**Values:** String (URL)

**Example:** `https://waltid-ui.oceanenterprise.io/auth/callback`

**Default Value:** `null`



#### NUXT\_PUBLIC\_ISSUER\_CALLBACK\_URL

**Description:** Specifies the callback URI used during the OIDC user authentication flow, telling the identity provider where to send the user back after they finish logging in.

**Values:** String (URL)

**Example:** `https://waltid-ui.oceanenterprise.io`

**Default Value:** `null`

&#x20;

#### NUXT\_PUBLIC\_DEV\_WALLET\_URL

**Description:** Specifies the URL where the SSI Wallet UI application is available.

**Values:** String (URL)

**Example:** `https://waltid-ui.oceanenterprise.io`

**Default Value:** `null`

&#x20;

#### WALLET\_UI\_HOST

**Description:** Specifies the FQDN of the server where the SSI Wallet UI application runs.

**Values:** String

**Example:** `waltid-ui.oceanenterprise.io`

**Default Value:** `null`



### Default variables

#### DEV\_WALLET\_TAG

**Description:** Sets the Wallet UI Docker image tag.&#x20;

**Values:** String

**Example:** `gaiax-0.1.4-OE`

**Default Value:** `null`



#### NUXT\_WALLET\_API\_INTERNAL

**Description:** Sets the URL where the SSI Wallet API is available, which is based on the internal SSI Wallet API container hostname.

**Values:** String (URL)

**Example:** `http://wallet-api:7001/wallet-api`&#x20;

**Default Value:** `null`



#### SERVICE\_HOST

**Description:** Determines the hostname or IP address at which the service container or its dependencies can be discovered internally or externally across the network. The configured value is  `localhost` .&#x20;

**Values:** String

**Example:** `localhost` &#x20;

**Default Value:** `null`&#x20;



### Configurable variables

#### NUXT\_PUBLIC\_ISSUER

**Description:** Sets the OIDC issuer URL used to authenticate users to the SSI Wallet UI service.&#x20;

**Values:** String (URL)

**Example:** `https://ocean-node-vm1-stage.oceanenterprise.io:9443/application/o/oe-market/`

**Default Value:** `null`

&#x20;

#### NUXT\_TOKEN\_URL

**Description:** Sets the OIDC token URL used to authenticate users to the SSI Wallet UI service.

**Values:** String (URL)

**Example:** `https://ocean-node-vm1-stage.oceanenterprise.io:9443/application/o/token/`

**Default Value:** `null`

&#x20;

#### NUXT\_PUBLIC\_LOGOUT\_REDIRECT\_URI

**Description:** Sets the URL where users are redirected when they log out from the SSI Wallet UI application.

**Values:** String (URL)

**Example:** `https://waltid-ui.oceanenterprise.io`

**Default Value:** `null`



#### NUXT\_PUBLIC\_CLIENT\_ID

**Description:** Sets the client ID of the OIDC provider used to authenticate users to the SSI Wallet UI application.

**Values:** String&#x20;

**Example:** `370ax8pyoamtbfc70ml1tmcgmbnwq0dq`

**Default Value:** `null`

&#x20;

#### NUXT\_CLIENT\_SECRET

**Description:** Sets the client secret of the OIDC provider used to authenticate users to the SSI Wallet UI application.

**Values:** String&#x20;

**Example:** `astrongsecretkey`

**Default Value:** `null`

&#x20;

#### NUXT\_ADMIN\_USER\_GROUP\_NAME

**Description:** Defines the name of the administrator group whose members are permitted to access the SSI Wallet user interface.

* If set to `null`, all authenticated users can access the graphical interface.
* If set to a specific group name, only users belonging to that group are granted access.

**Values:** String&#x20;

**Example:** `Admins`

**Default Value:** `null`



## Signer Server

### Generated variables

#### UPSTREAM\_IDP

**Description:** Specifies the identifier of the Authentik server — either the Central IDP or the Federated IDP — whose registered users are permitted to access the Signer Server’s API endpoints.&#x20;

**Values:** String&#x20;

**Example:** `tvl-participant`

**Default Value:** `null`



#### HTTP\_CERT\_PATH

**Description:** Specifies the filesystem path where the digital certificate file used by the Signer Server to enable HTTPS communication is located.

**Values:** String&#x20;

**Example:** `/etc/ssl/certs/fullchain.pem`

**Default Value:** `null`



#### HTTP\_KEY\_PATH

**Description:** Specifies the filesystem path to the private key file associated with the digital certificate used by the Signer Server to enable HTTPS communication.

**Values:** String&#x20;

**Example:** `/etc/ssl/certs/fullchain.pem`

**Default Value:** `null`



#### NODE\_URI\_MAP

**Description:** Sets the list of blockchains in which the Signer Server component provisioned by the User Management Pack signs transactions. For each blockchain, the following details are specified:

* the RPC endpoint used to access the blockchain
* gas multiplier: Scales the per‑unit gas price that the Signer Server uses when submitting blockchain transactions. The network‑estimated fee is multiplied by this value, and the result becomes the effective gas price paid per gas unit. Increasing the multiplier raises the transaction’s competitiveness and helps ensure timely inclusion during periods of network congestion. \
  **Note**: We recommend using the default values for each blockchain. If the multiplier is not set for a blockchain, the default value is used, which is as follows:
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

Here's the same value in a structured format.

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

&#x20;

### Default variables

#### SIGNER\_MODE

**Description:** Sets the operation mode of the Signer Server, which can be `local` (with the private keys loaded into the signer server's environment, recommended for demo environments) or `vault` (with the private keys stored in a secrets vault, recommended for production environments).

**Value:** string `(local/vault)`

**Example:** `vault`

**Default Value:** `null`

&#x20;

#### SIGNER\_SERVER\_TAG

**Description:** Sets the Signet Server Docker image tag.&#x20;

**Values:** String

**Example:** `v0.5.3`

**Default Value:** `null`

&#x20;

#### PORT&#x20;

**Description:** Sets the internal TCP port on which the Signer Server container runs.&#x20;

**Values:** Integer

**Example:** `3001`

**Default Value:** `null`



#### OPENBAO\_PORT

**Description:** Sets the TCP port on OpenBao container listens for requests.&#x20;

**Values:** Integer

**Example:** `8200`

**Default Value:** `null`&#x20;

&#x20;

#### VAULT\_URL

**Description:** Sets the URL where the OpenBao service is available, which is based on the internal OpenBao container hostname.

**Values:** String (URL)

**Example:** `https://openbao:8200`&#x20;

**Default Value:** `null`



#### VAULT\_ETHEREUM\_MOUNT

**Description:** Sets the vault path where the private keys used by Signer Server to sign transactions are located.

**Values:** String&#x20;

**Example:** `ethereum`&#x20;

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



### Configurable variables

#### ALLOWED\_ORIGINS

**Description:** Specifies the list of permitted origins (URLs) from which requests to Signer Server's endpoints are allowed. Only requests originating from the values defined in this variable will pass the validation and be accepted by the server.

**Values:** Array of strings (URL)

**Example:** `["https://market2.demo.oceanenterprise.io/", "https://waltid-ui.oceanenterprise.io"]`

**Default Value:** `null`



#### AUTHENTIK\_ISSUER

**Description:** Sets the OIDC issuer URL used to authenticate users to the SSI Wallet UI service.&#x20;

**Values:** String (URL)

**Example:** `https://ocean-node-vm1-stage.oceanenterprise.io:9443/application/o/oe-market/`

**Default Value:** `null`



#### AUTHENTIK\_JWKS\_URI

**Description:** Sets the OIDC provider JWKS URL used to verify the signatures of the users' JWTs.&#x20;

**Values:** String (URL)

**Example:** `https://ocean-node-vm1-stage.oceanenterprise.io:9443/application/o/oe-market/jwks/`

**Default Value:** `null`

&#x20;

#### AUTHENTIK\_AUDIENCE

**Description:** Sets the client ID of the OIDC provider used to authenticate users to the SSI Wallet UI application.

**Values:** String&#x20;

**Example:** `370ax8pyoamtbfc70ml1tmcgmbnwq0dq`

**Default Value:** `null`

#### AUTHENTIK\_CLIENT\_SECRET

**Description:** Sets the client secret of the OIDC provider used to authenticate users to the SSI Wallet UI application.

**Values:** String&#x20;

**Example:** `astrongsecretkey`

**Default Value:** `null`



## Authentik Server

### Generated variables

#### AUTHENTIK\_APP\_SLUG

**Description:** Specifies the slug of the Authentik application created during this deployment. The value is used exclusively by the blueprint initialization script, which loads the provider’s redirect configuration into the Authentik deployment.

**Values:** String&#x20;

**Example:** `oe-market`

**Default Value:** `null`



#### AUTHENTIK\_PROVIDER\_NAME

**Description:** Specifies the name of the Authentik provider associated with the Authentik application created during this deployment. It defines key OIDC configuration details such as the client ID, client secret, authentication endpoints, and the scopes requested during user authentication. The value is used exclusively by the blueprint initialization script, which loads the provider’s redirect configuration into the Authentik deployment.

**Values:** String

**Example:** `oe-market-provider`

**Default Value:** `null`

&#x20;

#### AUTHENTIK\_BASE\_URL

**Description:** Defines the root URL of the Authentik server instance. This value is used exclusively by the blueprint initialization script, which loads configuration settings into the Authentik deployment.

**Values:** String&#x20;

**Example:** `https://ocean-node-vm3.oceanenterprise.io:9443`

**Default Value:** `null`



#### AUTHENTIK\_REDIRECT\_URIS

**Description:** Specifies the list of permitted Redirect URIs for the Authentik provider created during this deployment. These URIs define where Authentik is allowed to send users after successful authentication. The value is used exclusively by the blueprint initialization script, which loads the provider’s redirect configuration into the Authentik deployment.

**Values:** String&#x20;

**Example:** `['https://market-git-feat-stage-ocean-enterprise.vercel.app/auth/callback', 'https://market-git-feat-stage-ocean-enterprise.vercel.app/auth/login', 'https://wallet-ui-smc.oceanenterprise.io/auth/callback', 'https://wallet-ui-smc`\
`.oceanenterprise.io/auth/login']`

**Default Value:** `null`



#### AUTHENTIK\_LOGOUT\_URI

**Description:** Defines the endpoint where to send a logout request to clear the user's active session inside the connected application. This value is used exclusively by the blueprint initialization script, which loads configuration settings into the Authentik deployment.

**Values:** String&#x20;

**Example:** `https://market-git-feat-stage-ocean-enterprise.vercel.app/auth/callback/logout`

**Default Value:** `null`



#### PARTICIPANT\_IDP\_WELL\_KNOWN\_URL

**Description:** Specifies the URL of the well‑known endpoint of the Authentik provider configured on the Federated Identity Provider.

**Values:** String&#x20;

**Example:** `https://vm1-test.oceanenterprise.io:9443/application/o/tvl-participant/.well-known/openid-configuration`

**Default Value:** `null`



#### AUTHENTIK\_OUTPUT\_FILE

**Description:** Defines the blueprint file that will be executed the first time the Authentik containers are created to load the configuration settings into the Authentik deployment. This value is used exclusively by the blueprint initialization script.

**Values:** String&#x20;

**Example:** `dataspace-operator-authentik-blueprint.yaml`

**Default Value:** `null`

&#x20;

### Default variables - Docker image

#### AUTHENTIK\_IMAGE

**Description:** Sets the Docker image for the Suthentik server.

**Values:** String&#x20;

**Example:** `ghcr.io/goauthentik/server`

**Default Value:** `null`



### Default variables - TCP Ports

#### AUTHENTIK\_PORT\_HTTP

**Description:** Sets the container's TCP port for HTTP connections.&#x20;

**Values:** Integer

**Example:** `9000`

**Default Value:** `null`



#### AUTHENTIK\_PORT\_HTTPS

**Description:** Sets the container's TCP port for HTTPS connections.&#x20;

**Values:** Integer

**Example:** `9443`

**Default Value:** `null`

&#x20;

### Default variables - SMTP settings

#### AUTHENTIK\_EMAIL\_\_USE\_SSL

**Description:** Hostname or IP address of the PostgreSQL server.

**Values:** Boolean

**Example:** `false`

**Default Value:** `null`

&#x20;

#### AUTHENTIK\_EMAIL\_\_TIMEOUT

**Description:** Sets the SMTP connection timeout limit in seconds for Authentik email delivery, in seconds.

**Values:** Integer

**Example:** `10`

**Default Value:** `null`&#x20;



### Default variables - Postgres connection settings

#### AUTHENTIK\_POSTGRESQL\_\_NAME

**Description:** Name of the PostgreSQL database to use.

**Values:** String&#x20;

**Example:** `authentik`

**Default Value:** `null`



#### AUTHENTIK\_POSTGRESQL\_\_USER

**Description:** PostgreSQL username used by authentik to authenticate.

**Values:** String&#x20;

**Example:** `authentik`

**Default Value:** `null`



#### AUTHENTIK\_POSTGRESQL\_\_HOST

**Description:** Hostname or IP address of the PostgreSQL server.

**Values:** String&#x20;

**Example:** `postgres`

**Default Value:** `null`



### Configurable variables - TCP Ports&#x20;

#### COMPOSE\_PORT\_HTTP

**Description:** Sets the host's TCP port for HTTP connection.&#x20;

**Values:** Integer

**Example:** `9000`

**Default Value:** `null`



#### COMPOSE\_PORT\_HTTPS

**Description:** Sets the host's TCP port for HTTPS connection.&#x20;

**Values:** Integer

**Example:** `9000`

**Default Value:** `null`

&#x20;

### Configurable variables - SMTP settings

#### AUTHENTIK\_EMAIL\_\_HOST

**Description:** SMTP server hostname or IP address

**Values:** String&#x20;

**Example:** `postgres`

**Default Value:** `localhost`

&#x20;

#### AUTHENTIK\_EMAIL\_\_PORT

**Description:** SMTP server port number.

**Values:** Integer

**Example:** `465`

**Default Value:** `25`



#### AUTHENTIK\_EMAIL\_\_USERNAME

**Description:** SMTP username. If empty, Authentik will not attempt SMTP authentication.

**Values:** String&#x20;

**Example:** `support@oceanenterprise.io`

**Default Value:** `''`

#### AUTHENTIK\_EMAIL\_\_PASSWORD

**Description:** SMTP password. If empty, Authentik will not attempt SMTP authentication.

**Values:** String&#x20;

**Example:** `astrongpassword`

**Default Value:** `''`

&#x20;

#### &#x20;AUTHENTIK\_EMAIL\_\_FROM

**Description:** Email address that Authentik will send emails from. This should be a valid address for your domain. To include a display name, use the format Name \<account@domain>.

**Values:** String&#x20;

**Example:** `support@oceanenterprise.io`

**Default Value:** `''`



### Configurable variables - PostgreSQL connection settings



#### AUTHENTIK\_POSTGRESQL\_\_PASSWORD

**Description:** PostgreSQL password used by authentik to authenticate.

**Values:** String&#x20;

**Example:** `astrongpassword`

**Default Value:** `null`



### Configurable variables - Cookie signing

#### AUTHENTIK\_SECRET\_KEY

**Description:** Secret key used for cookie signing. Changing this will invalidate active sessions.

**Values:** String&#x20;

**Example:** `astrongkey`

**Default Value:** `null`

&#x20;

## PostgreSQL server&#x20;

### Generated variables

#### AUTHENTIK\_POSTGRESQL\_\_NAME

**Description:** PostgreSQL database name for the Authentik server. This variable is used by the initialization script that runs after the PostgreSQL container is started.

**Values:** String&#x20;

**Example:** `authentik`

**Default Value:** `null`

&#x20;

#### AUTHENTIK\_POSTGRESQL\_\_USER

**Description:** PostgreSQL database user for the Authentik database. This variable is used by the initialization script that runs after the PostgreSQL container is started.

**Values:** String&#x20;

**Example:** `authentik`

**Default Value:** `null`

#### AUTHENTIK\_POSTGRESQL\_\_PASSWORD

**Description:** The password of the PostgreSQL database user for the Authentik database. This variable is used by the initialization script that runs after the PostgreSQL container is started.

**Values:** String&#x20;

**Example:** `astrongpassword`

**Default Value:** `null`&#x20;



#### DB\_NAME

**Description:** PostgreSQL database name for the Wallet API service. This variable is used by the initialization script that runs after the PostgreSQL container is started.

**Values:** String&#x20;

**Example:** `waltid`

**Default Value:** `null`



#### DB\_USERNAME

**Description:** PostgreSQL database user for the Wallet API service. This variable is used by the initialization script that runs after the PostgreSQL container is started.

**Values:** String&#x20;

**Example:** `waltid`

**Default Value:** `null`&#x20;



#### DB\_PASSWORD

**Description:** The password of the PostgreSQL database user for the Wallet API service. This variable is used by the initialization script that runs after the PostgreSQL container is started.

**Values:** String&#x20;

**Example:** `astrongpassword`

**Default Value:** `null`&#x20;



### Default variables

#### POSTGRES\_DB

**Description:** It explicitly defines the name of the default database that is automatically created when the container is initialized for the first time

**Values:** String&#x20;

**Example:** `postgres`

**Default Value:** `null`&#x20;



#### POSTGRES\_USER

**Description:** It explicitly defines the name of the default database superuser that is automatically created when the container is initialized for the first time.

**Values:** String&#x20;

**Example:** `postgres`

**Default Value:** `null`&#x20;



#### POSTGRES\_PASSWORD

**Description:** Sets the superuser password for the PostgreSQL database instance during its initial container startup

**Values:** String&#x20;

**Example:** `astrongpassword`

**Default Value:** `null`&#x20;

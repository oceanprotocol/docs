# Environment Variables for Dataspace Operator Configuration

## Environment variables in the `.env.config` file

Before executing the Dataspace Operator initialization script, ensure that the variables below are correctly set in the `.env.config` file, as they determine how the initialization process configures the deployment.

### Marketplace

Environment variables defining the OE Marketplace instance, secured through the Authentik server provisioned by the User Management Pack for centralized user authentication and access control.

#### MARKETPLACE\_URL

**Description:** Sets the URL of the marketplace server that will be secured by the Authentik server (Central Identity Provider) provisioned by the User Management Pack. The Authentik server will be configured to authenticate requests originating from this URL.

**Values:** String (URL)

**Example:** `https://market.demo.oceanenterprise.io`

**Default Value:** `null`



### Signer Server

Environment variables that configure the Signer Server component provisioned by the User Management Pack.

#### NODE\_URI\_MAP

**Description:** Sets the list of blockchains in which the Signer Server component provisioned by the User Management Pack signs transactions. For each blockchain, the following details are specified:

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



### Wallet UI

Environment variables that configure the Wallet UI component provisioned by the User Management Pack.



#### WALLET\_UI\_URL

**Description:** Sets the URL where the Wallet UI will be available. This URL is used by the reverse proxy component (Traefik) of the User Management Pack to configure the forwarding rules.

**Values:** String (URL)

**Example:** `https://wallet-ui.demo.oceanenterprise.io`

**Default Value:** `null`

#### NUXT\_ADMIN\_USER\_GROUP\_NAME

**Description:** Defines the name of the administrator group whose members are permitted to access the SSI Wallet user interface.

* If set to `null`, all authenticated users can access the graphical interface.
* If set to a specific group name, only users belonging to that group are granted access.

**Values:** String&#x20;

**Example:** `Admins`

**Default Value:** `null`



### Wallet API

Environment variables that configure the Wallet API component provisioned by the User Management Pack.

#### WALLET\_API\_URL

**Description:** Sets the URL where the Wallet API will be available. This URL is used by the reverse proxy component (Traefik) of the User Management Pack to configure the forwarding rules.

**Values:** String (URL)

**Example:** `https://wallet-api.demo.oceanenterprise.io`

**Default Value:** `null`



#### DB\_PASSWORD

**Description:** Sets the password for the user account that accesses the Wallet API database hosted in the PostgreSQL server instance deployed as part of the User Management Pack. The Wallet API uses this database to store all operational data, including users, keys, DIDs, and Verifiable Credentials.

**Values:** String

**Example:** `setastrongpassword`

**Default Value:** `null`



### PostgreSQL

Environment variables that configure the PostgreSQL component provisioned by the User Management Pack.

#### POSTGRES\_PASSWORD

**Description:** Sets the password for the root user account of the PostgreSQL server instance deployed as part of the User Management Pack.

**Values:** String

**Example:** `setastrongpassword`

**Default Value:** `null`



### Authentik (Central Identity Provider)

Environment variables that configure the Authentik component provisioned by the User Management Pack.

#### CENTRAL\_IDP\_HOSTNAME

**Description:** Specifies the fully qualified domain name (FQDN) through which the Authentik server is accessed.

**Values:** String

**Example:** `ocean-node-vm1.oceanenterprise.io`

**Default Value:** `null`



#### CENTRAL\_IDP\_PORT\_HTTP

**Description:** Specifies the TCP port used by the Authentik server for HTTP connections.

**Values:** Integer

**Example:** `9000`

**Default Value:** `9000`&#x20;



#### CENTRAL\_IDP\_PORT\_HTTPS

**Description:** Specifies the TCP port used by the Authentik server for HTTPS connections.

**Values:** Integer

**Example:** `9443`

**Default Value:** `9443`&#x20;



#### AUTHENTIK\_APP\_SLUG

**Description:** Specifies the slug of the Authentik application that will be created in the Authentik server to authenticate users to the OE Marketplace. For simplicity, the Authentik application name and application slug will have the same value.

**Values:** String

**Example:** `oe-market`

**Default Value:** `null`&#x20;



#### AUTHENTIK\_PROVIDER\_NAME

**Description:** Specifies the name of the Authentik provider associated with the Authentik application identified by the [AUTHENTIK\_APP\_SLUG](environment-variables-for-dataspace-operator-configuration.md#authentik_app_slug) variable. This provider will be created on the Authentik server to authenticate users accessing the OE Marketplace. It defines key OIDC configuration details such as the client ID, client secret, authentication endpoints, and the scopes requested during user authentication.

**Values:** String

**Example:** `oe-market-provider`

**Default Value:** `null`&#x20;



#### AUTHENTIK\_POSTGRESQL\_\_PASSWORD

**Description:** Sets the password for the user account that accesses the Authentik database hosted in the PostgreSQL server instance deployed as part of the User Management Pack. The Authentik server uses this database to store all operational data, such as user profiles and OIDC configuration.

**Values:** String

**Example:** `setastrongpassword`

**Default Value:** `null`



#### AUTHENTIK\_SECRET\_KEY

**Description:** Sets the key used by Authentik for cookie signing.

**Values:** String

**Example:** `setastrongpassword`

**Default Value:** `null`



#### AUTHENTIK\_EMAIL\_\_FROM

**Description:** Sets the email address that Authentik will send emails from. This should be a valid address for your domain.

**Values:** String

**Example:** `support@oceanenterprise.io`

**Default Value:** `null`



#### AUTHENTIK\_EMAIL\_\_USERNAME

**Description:** Sets the SMTP username. If empty, Authentik will not attempt SMTP authentication.

**Values:** String

**Example:** `support@oceanenterprise.io`

**Default Value:** `null`



#### AUTHENTIK\_EMAIL\_\_PASSWORD

**Description:** Sets the SMTP password. If empty, Authentik will not attempt SMTP authentication.

**Values:** String

**Example:** `support@oceanenterprise.io`

**Default Value:** `null`

&#x20;

#### AUTHENTIK\_EMAIL\_\_HOST

**Description:** Sets the SMTP server hostname or IP address.

**Values:** String

**Example:** `support@oceanenterprise.io`

**Default Value:** `null`



#### AUTHENTIK\_EMAIL\_\_PORT

**Description:** Sets the SMTP server port. Common values are `25`, `587` for STARTTLS, and `465` for implicit TLS.

**Values:** Integer

**Example:** `587`

**Default Value:** `25`



#### AUTHENTIK\_OUTPUT\_FILE

Specifies the name of the blueprint file generated when the initialization script is executed. This blueprint file contains the Authentik server configuration specific to the current deployment and is produced based on the values of the variables defined in this chapter. The blueprint is imported automatically after the Authentik server containers have started.&#x20;

**Values:** String&#x20;

**Example:** `dataspace-operator-authentik-blueprint.yaml`

**Default Value:** `dataspace-operator-authentik-blueprint.yaml`

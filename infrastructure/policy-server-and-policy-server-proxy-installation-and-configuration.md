# Policy Server and Policy Server Proxy installation and configuration

## Prerequisites

### Hardware requirements

The minimum hardware requirements for the server hosting the marketplace are:

* number of cores: 1
* RAM: 2 GB
* disk: 0.5 GB

### Software requirements

* **Operating System:** Any Linux distribution supported by the Docker Engine and Docker Compose products. For guidance on compatible platforms, see the [Docker Compose supported platforms](https://docs.docker.com/desktop/setup/install/linux/) and [Docker Engine supported platforms](https://docs.docker.com/engine/install/) documentation
* **Software products:**
  * Docker Engine
  * Docker Compose



## Pre-installation steps

Make sure you review the [Compatibility Matrix](compatibility-matrix.md) to ensure that the version is compatible with the other components.



## Deployment steps

There are two ways to install and run the Policy Server: using Docker Compose or the Docker Engine.

### Option 1 - Use Docker Compose to install and run the Policy Server

To install and configure the Policy Server, perform the following steps:

1. The Policy Server repository is located [here](https://github.com/OceanProtocolEnterprise/policy-server).&#x20;

```shellscript
git clone https://github.com/OceanProtocolEnterprise/policy-server.git && cd policy-server
```



2. Change the current directory to `docker-compose` .

```shellscript
cd docker-compose
```





3. Copy `.env.example` to `.env`&#x20;

```sh
cp .env.example .env
```



4. Edit the `.env` file to set environment variables specific to your configuration (please refer to the [Environment Variables](policy-server-and-policy-server-proxy-installation-and-configuration.md#environment-variables) chapter for how to set them).

```sh
nano .env
```



5. Start the Policy Server service

```sh
docker compose up -d
```

The Policy Server will start in a Docker container and will be accessible via HTTP on port 8001 on the host system.



### Option 2 - Use Docker to install and run the Policy Server

To install and configure the marketplace, perform the following steps:

1. The Policy Server repository is located [here](https://github.com/OceanProtocolEnterprise/policy-server).&#x20;

```shellscript
git clone https://github.com/OceanProtocolEnterprise/policy-server.git && cd policy-server
```



2. Copy `.env.example` to `.env`&#x20;

```sh
cp .env.example .env
```



3. Edit the `.env` file to set environment variables specific to your configuration (please refer to the [Environment Variables](policy-server-and-policy-server-proxy-installation-and-configuration.md#environment-variables) chapter for how to set them).

```sh
nano .env
```



4. Start the Policy Server service.

```sh
 docker run --name policy-server --env-file .env -p 8001:3000 -d oceanenterprise/policy-server:latest
```

The Policy Server will start in a Docker container and will be accessible via HTTP on port 8001 on the host system.



## **Post installation steps**

* Deploy the policy server behind a reverse proxy responsible for TLS termination and secure request forwarding. The proxy should enforce HTTPS for all external traffic and route decrypted requests to the internal application port.
* Place the policy server in a network environment that allows outbound communication to the configured OE Node and SSI Verifier.



## Environment Variables

### Operation Mode

The Policy Server component can run in two modes:&#x20;

* as an actual Policy Server: implements the Policy Server functionality, as described [here](../developers/oe-software-stack-components.md#policy-server);
* as a Policy Server Proxy: implements the Policy Server Proxy functionality, as described [here](../developers/oe-software-stack-components.md#policy-server-proxy).

<mark style="color:$info;background-color:$info;">**Note**</mark><mark style="color:$info;background-color:$info;">: While both modes can run within the same component, deploying them on separate servers is recommended to clearly isolate front‑end traffic from back‑end traffic.</mark>

#### MODE\_PS

**Description:** Indicates whether Policy Server mode is enabled.&#x20;

* Value `"1"`: the Policy Server mode is enabled&#x20;
* Value `"0"`: the Policy Server mode is disabled

**Values:** string (`"1"` or `"0"`)

**Example:** `"1"`

**Default Value:** `N/A`



#### MODE\_PROXY

**Description:** Indicates whether Policy Server Proxy mode is enabled.&#x20;

* Value `"1"`: the Policy Server Proxy mode is enabled&#x20;
* Value `"0"`: the Policy Server Proxy mode is disabled

**Values:** string (`"1"` or `"0"`)

**Example:** `"1"`

**Default Value:** `N/A`



### OE Node

#### OCEAN\_NODE\_URL&#x20;

**Description:** Sets the base URL of the OE Node used by the policy server. The policy server will receive authorization requests from this OE Node and will send back either an authorization response (allow/deny) or other messages received from the Verifier. Make sure the OE Node has the corresponding  `POLICY_SERVER_URL` variable set to the policy server's URL.

**Values:** string (URL)

**Example:** `https://ocean-node-vm3.oceanenterprise.io/`

**Default Value:** `N/A`



### SSI Verifier

#### AUTH\_TYPE

**Description:** Sets the type of authorization used by the policy server. The only possible value now is `waltid`, meaning that the authorization is based on the walt.id Identity Suite components.&#x20;

&#x20;**Values:** string

**Example:** `waltid`

**Default Value:** `waltid`



#### WALTID\_VERIFIER\_URL

**Description:** Sets the base URL of the verifier component used by this policy server. For an access request to an asset, the policy server forwards the requested credentials and the verification policies to the verifier component, which initiates a presentation session.&#x20;

**Values:** string (URL)

**Example:** `https://verifier2.demo.oceanenterprise.io/`

**Default Value:** `N/A`



### Policy Server Proxy

#### WALTID\_VERIFY\_RESPONSE\_REDIRECT\_URL

**Description:** Sets the redirect URL for the verify calls performed by the SSI Wallet. The URL must include the base URL of the Policy Server Proxy, followed by `/verify/\$id`.

**Values:** string (URL)

**Example:** `https://psproxy1.demo.oceanenterprise.io/verify/\$id/`

**Default Value:** `N/A`

#### WALTID\_VERIFY\_PRESENTATION\_DEFINITION\_URL

**Description:** Sets the redirect URL for the presentation definition calls performed by the SSI Wallet. The URL must include the base URL of the Policy Server Proxy, followed by `/pd/\$id`.

**Values:** string (URL)

**Example:** `https://psproxy1.demo.oceanenterprise.io/pd/\$id/`

**Default Value:** `N/A`



### Default Verification Policies

The Policy Server can be configured to apply additional static verification policies beyond those provided by the OE Node in a verification request. The verification policies can be applied to the Verifiable Credential presented by the SSI Wallet or to the Verifiable Presentation that embeds the Verifiable Credentials submitted by the SSI Wallet.

The list of static verification policies is available [here](https://docs.walt.id/community-stack/verifier/credential-verification/policies/static-verification-policies). &#x20;

#### DEFAULT\_VC\_POLICIES

**Description:** Sets the default static policies applied to the Verifiable Credentials submitted by the SSI Wallet for verification.&#x20;

**Values:** list of strings

**Example:** `"expired","signature","revoked-status-list","not-before"`

**Default Value:** `[]`



#### DEFAULT\_VP\_POLICIES&#x20;

**Description:** Sets the default static policies applied to the Verifiable Presentation submitted by the SSI Wallet for verification.&#x20;

**Values:** list of strings

**Example:** `"expired","signature","revoked-status-list","not-before"`

**Default Value:** `[]`



### SSI Verification Response

#### WALTID\_SUCCESS\_REDIRECT\_URL

**Description:** Sets the redirect URL to return when all verification policies are passed.&#x20;

**Values:** string (URL)

**Example:** `"https://example.com/success?id=$id"`

**Default Value:** `""`

#### WALTID\_ERROR\_REDIRECT\_URL

**Description:** Sets the redirect URL to return when a verification policy failed.&#x20;

**Values:** string (URL)

**Example:** `"https://example.com/error?id=$id"`

**Default Value:** `""`



### Logs

#### ENABLE\_LOGS

**Description:** Indicates whether the logging is enabled.&#x20;

* Value `"1"`: logging is enabled&#x20;
* Value `"0"`: logging is disabled

**Values:** string (`"1"` or `"0"`)

**Example:** `"1"`

**Default Value:** `"0"`



### TCP Port

#### PORT

**Description:** Defines the port on which the application listens inside the container. In the `docker-compose.yml` file, the host port 8001 is mapped to the default container port (3000). In case you changed the default value, make sure you update the port mapping in the `docker-compose.yml` file.

**Values:** number

**Example:** `3000`

**Default Value:** `3000`



### API Requests Authentication

#### POLICY\_SERVER\_API\_KEY

**Description:** Defines the key used by the Policy Server to authenticate requests. If no value is provided, request authentication is disabled. If a key is provided, use the same key in the [POLICY\_SERVER\_API\_KEY ](oe-node-installation-and-configuration.md#policy_server_api_key) variable of the corresponding OE Node.

**Values:** string

**Example:** `mrgcorhTzA1Ey2WRhZAK8tkw4zBrIgQ757toUz3fXvfHh8Ua`

Defaul Value: `null` (request authentication disabled) &#x20;

# Dataspace Operator deployment module - Installation steps

Use this deployment module when you need to deploy the Central Identity Provider responsible for securing access to an OE marketplace, along with the supporting components required to manage registered users’ SSI credentials and Web3 private keys.

## Installation checklist

Before proceeding with the installation, make sure you have performed the pre-installation steps described [here](pre-installation-steps.md), and you have the following:

* [ ] A server that meets the hardware and software requirements listed
* [ ] The TCP ports used by the services of the User Management Package are enabled
* [ ] FQDNs entries for:
  * [ ] The server that runs the User Management Package
  * [ ] The SSI Wallet API service
  * [ ] The SSI Wallet UI service
* [ ] Qualified digital certificates for:
  * [ ] the server that will run the User Management Package
  * [ ] Traefik service
  * [ ] Signer Server service
  * [ ] OpenBao vault
* [ ] The Web3 private keys used by the OpenBao vault<br>

## Installation steps

To install the User Management Package for Dataspace Operator, perform the following steps:

{% stepper %}
{% step %}
The User Management Package is located [here](https://github.com/OceanProtocolEnterprise/user-management). Clone the User Management Package repository.

{% code overflow="wrap" %}
```bash
git clone https://github.com/OceanProtocolEnterprise/user-management.git && user-management/dataspace-operator
```
{% endcode %}
{% endstep %}

{% step %}
Copy the certificate and private key files used by each of the User Management Package services to the corresponding directories, as follows:

<table><thead><tr><th width="155.27276611328125">Service</th><th width="572.1817016601562">Certificate directory</th></tr></thead><tbody><tr><td>Traefik </td><td><code>&#x3C;user-management>/dataspace-operator/docker-compose/traefik/certs</code></td></tr><tr><td>Authentik</td><td><code>&#x3C;user-management>/dataspace-operator/docker-compose/authentik/certs</code></td></tr><tr><td>Signer Server</td><td><code>&#x3C;user-management>/dataspace-operator/docker-compose/signer-server/certs</code></td></tr><tr><td>OpenBao</td><td><code>&#x3C;user-management>/dataspace-operator/docker-compose/openbao/certs</code></td></tr></tbody></table>

Example

{% code overflow="wrap" %}
```bash
# copy the certificate file to Authentik service's certs directory
cp vm3.oceanenterprise.io.pem ~/user-management/dataspace-operator/docker-compose/authentik/certs/
# copy the private key file to Authentik service's certs directory
cp vm3.oceanenterprise.io.key ~/user-management/dataspace-operator/docker-compose/authentik/certs/
```
{% endcode %}
{% endstep %}

{% step %}
From the  `<user-management>/dataspace-operator` directory, edit the `.env.config` file and set the input parameters (see the [Environment Variables for Dataspace Operator Configuration](../environment-variables/environment-variables-for-dataspace-operator-configuration.md) chapter for explanations regarding each input parameter in the file).

{% code overflow="wrap" %}
```bash
nano .env.config
```
{% endcode %}
{% endstep %}

{% step %}
Run the initialization script.

{% code overflow="wrap" %}
```bash
./dataspace-operator-initial-setup.sh
```
{% endcode %}

The initialization script generates the following artifacts:

* `.env-<service name>` **file** — the environment file used by the service’s container, located in the service’s directory (e.g., `<user-management>/dataspace-operator/docker-compose/authentik/.env-authentik`). This file is tailored to the specifics of the deployment.
* **Authentik blueprint file** — the configuration blueprint loaded by the Authentik server, customized for the deployment (e.g., `<user-management>/dataspace-operator/authentik/dataspace_operator_blueprint.py`).
* `.env.market` **file** — contains the environment variables that must be added to the marketplace’s environment file to integrate with the Authentik service deployed by the User Management Package. Share this file with the marketplace administrator. _(Location:_ `<user-management>/dataspace-operator/.env.market`_)_
* `.env.federation` **file** — contains the environment variables that must be set in the `.env.config` file of the Participant Module of the User Management Package deployed by a Participant connecting to the Dataspace. Share this file with the Dataspace Participant Administrator responsible for deploying the User Management Package in their organization. _(Location:_ `<user-management>/dataspace-operator/.env.federation`_)_
{% endstep %}

{% step %}
Go to the `docker-compose` directory and start the services

{% code overflow="wrap" %}
```bash
cd docker-compose
docker compose up -d
```
{% endcode %}

This will start all User Management Package services.

{% hint style="info" %}
When the Authentik server container starts for the first time, it automatically executes the blueprint script to load the configuration settings. This process can take **10–15 minutes**, so wait until it completes before accessing the Authentik UI; accessing it too early may result in unexpected browser errors. You can monitor the Authentik server logs to determine when the configuration loading has finished.
{% endhint %}
{% endstep %}
{% endstepper %}

## The result of the installation process

At the end of the installation  of the Dataspace Operator module of the User Management Package, the following will be made available in your environment:

* **PostgreSQL service** configured to store data for the SSI Wallet API and Authentik services in two distinct databases
* **SSI Wallet API service** configured to store data in the PostgreSQL service.&#x20;
  * No DIDs or SSI credentials are stored in the SSI Wallet yet.
* **SSI Wallet UI** configured as follows:
  * Connects to the SSI Wallet API service&#x20;
  * Uses the Authentik server to authenticate users
  * Authorizes only the users that are registered on the Dataspace Operator Authentik server
  * Depending on the value of the [NUXT\_ADMIN\_USER\_GROUP\_NAME](../environment-variables/environment-variables-for-dataspace-operator-configuration.md#nuxt_admin_user_group_name) environment variable, authorizes only users that are members of a specific Authentik group;
* **Traefik service** configured to expose the SSI Wallet API and SSI Wallet UI services to users, through their corresponding FQDNs;
* **Signer Server** configured as follows:
  * Uses the Authentik server to validate user requests
  * Authorized only the users registered on the Dataspace Operator Authentik server
  * Authorizes only requests coming from the marketplace and the SSI Wallet UI&#x20;
  * Integrates with the OpenBao service for web3 transaction signing;
* **OpenBao vault** configured to sign web3 transactions
  * The web3 private keys provided at installation time are securely stored in the vault.
* **Dataspace Operator Authentik server** configured as follows:
  * Stores data in the PostgreSQL service;
  * Authenticates users to the configured marketplace;
  * Authenticates users to the SSI Wallet UI;&#x20;
  * Validates users' JWTs for calls to the Signer Server components;
  * Passes OE-specific claims in when users authenticate;
  * OE-specific flows for user management;
  * No users or groups are stored in the Authentik database yet;
  * No Participant Authentik servers are onboarded for federated authentication yet.


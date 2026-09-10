# Dataspace Participant deployment module - Installation steps

Use this deployment module when you need to deploy the Federated Identity Provider that integrates with the Central Identity Provider (operated by the Dataspace Operator) to authenticate Participant users in the OE marketplace, along with the supporting components required to manage registered users’ SSI credentials and Web3 private keys.

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
* [ ] The Web3 private keys used by the OpenBao vault
* [ ] The `.env.federation` file shared by the Dataspace Operator Administrator, containing the configuration parameters of the Central Identity Provider. <br>

## Installation steps

To install the User Management Package for Dataspace Participant, perform the following steps:

{% stepper %}
{% step %}
The User Management Package is located [here](https://github.com/OceanProtocolEnterprise/user-management). Clone the User Management Package repository.

{% code overflow="wrap" %}
```bash
git clone https://github.com/OceanProtocolEnterprise/user-management.git && user-management/participant
```
{% endcode %}
{% endstep %}

{% step %}
Copy the certificate and private key files used by each of the User Management Package services to the corresponding directories, as follows:

<table><thead><tr><th width="155.27276611328125">Service</th><th width="572.1817016601562">Certificate directory</th></tr></thead><tbody><tr><td>Traefik </td><td><code>&#x3C;user-management>/participant/docker-compose/traefik/certs</code></td></tr><tr><td>Authentik</td><td><code>&#x3C;user-management>/participant/docker-compose/authentik/certs</code></td></tr><tr><td>Signer Server</td><td><code>&#x3C;user-management>/participant/docker-compose/signer-server/certs</code></td></tr><tr><td>OpenBao</td><td><code>&#x3C;user-management>/participant/docker-compose/openbao/certs</code></td></tr></tbody></table>

Example

{% code overflow="wrap" %}
```bash
# copy the certificate file to Authentik service's certs directory
cp vm3.oceanenterprise.io.pem ~/user-management/participant/docker-compose/authentik/certs/
# copy the private key file to Authentik service's certs directory
cp vm3.oceanenterprise.io.key ~/user-management/participant/docker-compose/authentik/certs/
```
{% endcode %}
{% endstep %}

{% step %}
From the  `<user-management>/participant` directory, edit the `.env.config` file and set the input parameters (see the [Environment Variables for Participant Configuration](../environment-variables/environment-variables-for-participant-configuration.md) chapter for explanations regarding each input parameter in the file).

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
./participant-initial-setup.sh
```
{% endcode %}

The initialization script generates the following artifacts:

* `.env-<service name>` **file** — the environment file used by the service’s container, located in the service’s directory (e.g., `<user-management>/participant/docker-compose/authentik/.env-authentik`). This file is tailored to the specifics of the deployment.
* **Authentik blueprint file** — the configuration blueprint loaded by the Authentik server, customized for the deployment (e.g., `<user-management>/participant/authentik/participant_blueprint.py`).
* `config-for-onboarding-<participant_name>.json` **file** — contains the parameters that must be set in the Dataspace Operator's Authentik server (Central Identity Provider) to configure a trust relationship to the Participant's Authentik server (Federated Identity Provider). Share this file with the Dataspace Operator Administrator responsible for onboarding Participants to the dataspace. _(Location:_ `<user-management>/participant/.env.federation`_)_
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

At the end of the installation of the Participant module of the User Management Package, the following will be made available in your environment:

* **PostgreSQL service** configured to store data for the SSI Wallet API and Authentik services in two distinct databases
* **SSI Wallet API service** configured to store data in the PostgreSQL service.&#x20;
  * No DIDs or SSI credentials are stored in the SSI Wallet yet.
* **SSI Wallet UI** configured as follows:
  * Connects to the SSI Wallet API service&#x20;
  * Uses the Dataspace Operator Authentik server to authenticate users
  * Authorizes only the users that are registered on the Participant Authentik server
  * Depending on the value of the [NUXT\_ADMIN\_USER\_GROUP\_NAME](../environment-variables/environment-variables-for-dataspace-operator-configuration.md#nuxt_admin_user_group_name) environment variable, authorizes only users that are members of a specific Authentik group;
* **Traefik service** configured to expose the SSI Wallet API and SSI Wallet UI services to users, through their corresponding FQDNs;
* **Signer Server** configured as follows:
  * Uses the Dataspace Operator Authentik server to validate user requests
  * Authorizes only requests coming from the marketplace and the SSI Wallet UI&#x20;
  * Authorizes only the users that are registered on the Participant Authentik server
  * Integrates with the OpenBao service for web3 transaction signing;
* **OpenBao vault** configured to sign web3 transactions
  * The web3 private keys provided at installation time are securely stored in the vault.
* **Participant Authentik server** configured as follows:
  * Stores data in the PostgreSQL service;
  * Passes OE-specific claims when users authenticate;
  * OE-specific flows for user management;
  * No users or groups are stored in the Authentik database yet;

# SSI Stack installation and configuration

The SSI stack used in Ocean Enterprise is based on the [walt.id Identity Infrastructure Community Stack](https://walt.id/identity-infrastructure). The following software components of the Identity Infrastructure are used in Ocean:

* SSI Wallet: API endpoints that implement SSI wallet functionality (managing DIDs and VCs, presenting VCs).
* SSI Wallet User Interface: The graphical interface for the wallet APIs, allowing users to manage DIDs and VCs.&#x20;
* SSI Verifier: API endpoints that implement the SSI verifier functionality (initiate OIDC presentation sessions, verify the responses for a verification request, get information about OIDC presentation sessions)
* OPA server: API endpoints of the policy engine, used for custom policy evaluation



## Prerequisites

### Hardware requirements

The minimum hardware requirements for the server hosting the SSI stack components are:

* number of cores: 1
* RAM: 4 GB
* disk: 25 GB

### Software requirements

* **Operating System:** Any Linux distribution supported by the Docker Engine and Docker Compose products. For guidance on compatible platforms, see the [Docker Compose supported platforms](https://docs.docker.com/desktop/setup/install/linux/) and [Docker Engine supported platforms](https://docs.docker.com/engine/install/) documentation
* **Software products:**
  * Docker Engine
  * Docker Compose
  * git



## Deployment steps



### Pre-installation planning

Before installing the SSI stack components, determine the network segments where each service will run. Consider the following communication requirements:

* The verifier-api must be able to reach both the Policy Server and the OPA Server.&#x20;
* The wallet-api must be able to communicate with the waltid-dev-wallet and the Policy Server Proxy

Depending on your configuration, you can choose to deploy all SSI components on a single server or deploy individual components on separate servers.&#x20;



### Option 1 - Deploy the entire SSI stack

To install and configure the SSI stack, perform the following steps:

1. The OE version of the SSI stack is located [here](https://github.com/OceanProtocolEnterprise/waltid-identity/). Clone the repository.

```shellscript
git clone https://github.com/OceanProtocolEnterprise/waltid-identity.git && cd waltid-identity
```



2. Switch to the `OE` branch.&#x20;

```shellscript
git checkout OE
```



3. Change the current directory to `docker-compose`

```shellscript
cd docker-compose
```



4. Start the Docker SSI services containers

```shellscript
docker compose up -d
```

This command will pull the correct versions of the Docker images used by OE and start the containers. This command will also start other services not used by the OE stack, such as the web portal, the issuer, and the demo wallet.

Note: the OPA server is not automatically started by this command.&#x20;



5. Start the OPA server.&#x20;

```shellscript
docker compose up opa-server -d
```



### Option 2 - Deploy an individual component

Each component is defined as a service in the `docker-compose.yaml` file, as follows:

* `wallet-api`: SSI Wallet
* `waltid-dev-wallet`: SSI Wallet User Interface
* `verifier-api`: SSI Verifier
* `opa-server`: OPA Server

To deploy an individual component, perform the following steps:

1. The OE version of the SSI stack is located [here](https://github.com/OceanProtocolEnterprise/waltid-identity/). Clone the repository.

```shellscript
git clone https://github.com/OceanProtocolEnterprise/waltid-identity.git && cd waltid-identity
```



2. Switch to the `OE` branch.&#x20;

```shellscript
git checkout OE
```



3. Change the current directory to `docker-compose`

```shellscript
cd docker-compose
```



4. Start the service. For instance, to start the `wallet-api` service, run the following command

```shellscript
docker compose up wallet-api -d
```

This command pulls the appropriate version of the component’s Docker image and starts its container.



## **Post installation steps**

* Deploy the SSI stack components behind a reverse proxy responsible for TLS termination and secure request forwarding. The proxy should enforce HTTPS for all external traffic and route decrypted requests to the internal application port.
* After installation, the components work seamlessly with the rest of the OE stack and require no additional configuration. However, for advanced configuration or ongoing maintenance of the SSI Stack components, consult the official [walt.id documentation](https://docs.walt.id/community-stack/home).&#x20;



## TCP ports

The following TCP ports are used by default by the SSI stack components:&#x20;

* wallet-api: 7001
* waltid-dev-wallet: 7104
* verifier-api:7003
* opa-server: 8181

You can change the ports by editing the `/docker-compose/.env` file.




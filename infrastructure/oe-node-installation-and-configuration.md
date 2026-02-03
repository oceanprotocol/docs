# OE Node installation and configuration

## <mark style="color:$warning;">WORK IN PROGRESS</mark>

## Prerequisites

### Hardware requirements

The minimum hardware requirements for the server that will run the marketplace are:

* number of cores: 2
* RAM: 16 GB
* disk: 50 GB

### Software requirements

* **Operating System:** Any Linux distribution supported by the Docker Engine and Docker Compose products. For guidance on compatible platforms, see the [Docker Compose supported platforms](https://docs.docker.com/desktop/setup/install/linux/) and [Docker Engine supported platforms](https://docs.docker.com/engine/install/) documentation
* **Software products:**
  * Docker Engine
  * Docker Compose

### **Other requirements**

* **Blockchain RPC provider**: Use a service such as Alchemy, Infura, or Chainstack. Ensure that your subscription tier supports a sufficient number of requests per second to meet the node demand.&#x20;
* **IPFS gateway provider**: Use a gateway such as Pinata, Cloudflare, or Filebase. Verify that your subscription tier provides adequate storage capacity, file limits, and request throughput for your expected workload.&#x20;





## Deployment steps

The OE Node uses Elasticsearch as the underlying database for its indexer. Elasticsearch can be deployed together with the OE Node or installed separately.

There are two ways of installing and running the OE Node: using Docker Compose or Docker Engine.



### Option 1 - Use Docker Compose to install and run OE Node

&#x20;To install and configure the OE Node, perform the following steps:

1. The OE Node repository is located [here](https://github.com/OceanProtocolEnterprise/ocean-node). Clone the marketplace repository (alternatively, copy only the `docker-compose.yml` and `.env.example` file from the repository).

```sh
git clone https://github.com/OceanProtocolEnterprise/ocean-node.git
```



2. Copy `.env.example` to `.env`&#x20;

```sh
cp .env.example .env
```



3. Edit the _.env_ file to set the environment variables specific to your configuration (please refer to the [Environment Variables](oe-node-installation-and-configuration.md#environment-variables) chapter for how to set the variables).

```sh
nano .env
```



4. Start the OE Node service

```sh
docker compose up -d
```

On the first run, the script installs the OE Node and automatically sets up Elasticsearch if it isn’t already present on the server.





### Option 2 - Use Docker to install and run the OE Node



## Environment variables

In this chapter, the most relevant environment variables for setting the OE Node are presented. The complete list of the node environment variables can be found [here](https://github.com/oceanprotocol/ocean-node/blob/main/docs/env.md).&#x20;

### Blockchain RPC

#### RPCS

**Description:** Sets the list of blockchains, by blockchain ID (e.g., 1 - Ethereum, 11155111 - Eth Sepolia), to which the OE Node connects to retrieve assets. If not specified otherwise in the `INDEXER_NETWORKS` variable, the indexer will connect to all the blockchains listed here.&#x20;

Also, for each blockchain, two things are specified:&#x20;

* `"rpc"` : The RPC provider URL. Use the RPC URL supplied by the RPC provider.
* `"startBlock"` : The block number from which the indexer will search for events related to the asset creation or update

**Values:** JSON map of chainId to object

**Example:** `{"11155111":{"rpc":"https://eth-sepolia.g.alchemy.com/<your_key>","chainId":11155111,"network":"sepolia","chunkSize":50,"startBlock":9802079},"11155420":{"rpc":"https://opt-sepolia.g.alchemy.com/<your_key>","chainId":11155420,"network":"optimism_sepolia","chunkSize": 50,"startBlock":36735314}}`

**Default Value:** `{}`



### IPFS

### IPFS\_GATEWAY

**Description:** Sets the URL of the IPFS gateway used to fetch the asset's DDO. Use the URL supplied by the IFPS provider.&#x20;

**Values:** String (URL)

**Example:** `https://ipfs.io/`

**Default Value:** `null`



### Indexer





### Policy Server

#### POLICY\_SERVER\_URL

**Description:**

**Values:**

**Example:**

**Default Value:**

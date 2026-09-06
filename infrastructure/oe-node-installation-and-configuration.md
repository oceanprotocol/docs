# OE Node installation and configuration

## Prerequisites

### Hardware requirements

The minimum hardware requirements for the server that will run the OE Node are:

* number of cores: 2
* RAM: 16 GB
* disk: 50 GB

### Software requirements

* **Operating System:** Any Linux distribution supported by the Docker Engine and Docker Compose products. For guidance on compatible platforms, see the [Docker Compose supported platforms](https://docs.docker.com/desktop/setup/install/linux/) and [Docker Engine supported platforms](https://docs.docker.com/engine/install/) documentation
* **For OE Node v3.0.1 and newer:** A Linux distribution with library `glibc` v2.38 or newer. To check the current version of glibc, run the following command:

{% code overflow="wrap" %}
```shellscript
ldd --version
```
{% endcode %}

* **Software products:**
  * Docker Engine
  * Docker Compose

### **Other requirements**

* **Blockchain RPC provider**: Use a service such as Alchemy, Infura, or Chainstack. Ensure that your subscription tier supports a sufficient number of requests per second to meet the node demand.&#x20;
* **IPFS gateway provider**: Use a gateway such as Pinata, Cloudflare, or Filebase. Verify that your subscription tier provides adequate storage capacity, file limits, and request throughput for your expected workload. \
  <mark style="color:$warning;background-color:$info;">**Note:**</mark> <mark style="color:$warning;background-color:$info;"></mark><mark style="color:$warning;background-color:$info;">Make sure the IPFS gateway used by the OE Node is a</mark> <mark style="color:$warning;background-color:$info;"></mark><mark style="color:$warning;background-color:$info;">**public gateway**</mark> <mark style="color:$warning;background-color:$info;"></mark><mark style="color:$warning;background-color:$info;">so the node can retrieve the CIDs that were pinned during asset publishing.</mark>&#x20;



## Pre-installation steps

Make sure you review the [Compatibility Matrix](compatibility-matrix.md) to ensure that the version is compatible with the other components.&#x20;



## Deployment steps

The OE Node uses Elasticsearch as the underlying database for its indexer. Elasticsearch can be deployed together with the OE Node or installed separately.

There are multiple ways to install and run the OE Node, but this guide focuses on two primary approaches: using Docker Compose or PM2.&#x20;

### Use Docker Compose to install and run OE Node

To install and configure the OE Node using Docker Compose, perform the following steps:

1. The OE Node repository is located [here](https://github.com/OceanProtocolEnterprise/ocean-node). Clone the OE Node repository.

```sh
git clone https://github.com/OceanProtocolEnterprise/ocean-node.git && cd ocean-node
```



2. Copy `.env.elasticsearch.example` to `.env.elasticsearch`&#x20;

```sh
cp .env.elasticsearch.example .env.elasticsearch
```



3. Edit the _.env.elasticsearch_ file and set the `ELASTIC_PASSWORD` parameter to the password required to connect to the ElasticSearch instance.&#x20;

```shellscript
nano .env.elasticsearch
```



4. Copy `.env.node.example` to `.env.node`&#x20;

```sh
cp .env.node.example .env.node
```



5. Edit the _.env.node_ file and set the OE Node environment variables according to your configuration (see the [Environment Variables](oe-node-installation-and-configuration.md#environment-variables) chapter for details on how to set them).

```sh
nano .env.node
```

<mark style="color:$info;background-color:$info;">**Note**</mark><mark style="color:$info;background-color:$info;">: Make sure the password set in the</mark> <mark style="color:$info;background-color:$info;"></mark><mark style="color:$info;background-color:$info;">`DB_PASSWORD`</mark> <mark style="color:$info;background-color:$info;"></mark><mark style="color:$info;background-color:$info;">parameter matches the password configured for the Elasticsearch instance in step 4.</mark>



6. Start the services

```sh
docker compose up -d
```

On the first run, the script creates both the Elasticsearch and OE Node containers. Because the OE Node depends on Elasticsearch reaching a specific ready state, it may take some time before the OE Node container starts.

<mark style="color:$info;background-color:$info;">**Note:**</mark> <mark style="color:$info;background-color:$info;"></mark><mark style="color:$info;background-color:$info;">This installs the latest available version of the OE Node. To install a specific version, edit the</mark> <mark style="color:$info;background-color:$info;"></mark><mark style="color:$info;background-color:$info;">`docker-compose.yml`</mark> <mark style="color:$info;background-color:$info;"></mark><mark style="color:$info;background-color:$info;">file and set the desired version tag.</mark>



### Use PM2 to run the OE Node

In this configuration, the OE Node runs as a process on the host machine, and it's managed by pm2.&#x20;

Preinstallation tasks:&#x20;

1. Make sure you have the following tools installed on your Linux system:

* [node.js](https://nodejs.org/en/download):  the required version of node.js is listed in the `.nvmrc` file in the [OE Node repository](https://github.com/OceanProtocolEnterprise/ocean-node). Make sure this is the default version. To this end, you can use the [nvm ](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)tool.
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [pm2](https://pm2.keymetrics.io/). Optionally, you can install pm2-logrotate to easily manage the OE node logs. &#x20;



2. Start Elasticsearch in a Docker container on the host machine:

```shellscript
docker run -d \
  --name elasticsearch \
  -p 9200:9200 \
  -e "discovery.type=single-node" \
  -e "ELASTIC_PASSWORD=your_secure_password" \
  -e "xpack.security.enabled=true" \
  docker.elastic.co/elasticsearch/elasticsearch:8.19.12
```

&#x20;

To install and run the OE Node using pm2, perform the following steps:

1. The OE Node repository is located [here](https://github.com/OceanProtocolEnterprise/ocean-node). Clone the OE Node repository.

```sh
git clone https://github.com/OceanProtocolEnterprise/ocean-node.git && cd ocean-node
```



2. Copy `.env.example` to `.env`&#x20;

```sh
cp .env.example .env
```



3. Edit the _.env_ file to set the environment variables specific to your configuration (please refer to the [Environment Variables](oe-node-installation-and-configuration.md#environment-variables) chapter for how to set the variables).

```shellscript
nano .env
```



6. Load the environment variables in the current session

```sh
source .env
```



6. Start OE Node process in pm2&#x20;

```sh
pm2 start npm --name "oe-node" -- run start
```



7. Once the process is started, verify its state.

```sh
pm2 ls
```



8. Verify the logs to make sure the node started well&#x20;

```sh
pm2 logs "oe-node"
```



## **Post installation steps**

* If the OE Node is not configured to use HTTPS directly, deploy it behind a reverse proxy responsible for TLS termination and secure request forwarding. The proxy should enforce HTTPS for all external traffic and route decrypted requests to the OE Node's internal port.
* Ensure that the OE Node operates in a network environment that permits outbound communication to the configured Policy Server, Policy Server Proxy, and Marketplace&#x20;
* For OE Nodes that provide a paid C2D environment, verify that the associated web3 address maintains sufficient native‑token funds on the connected blockchain to cover gas fees for withdrawals from the escrow account. Monitor and replenish the OE Node’s balance regularly.



## Environment variables

In this chapter, the key environment variables required to configure the OE Node are highlighted. The full list of available environment variables is provided in the documentation for the Community Edition of the node, accessible [here](https://github.com/oceanprotocol/ocean-node/blob/main/docs/env.md).&#x20;

### Private Key

#### PRIVATE\_KEY

**Description:** Sets the private key used by the OE Node to encrypt and decrypt assets.

**Values:** String

**Example:** `"0x1d751ded5a32226054cd2e71261039b65afb9ee1c746d055dd699b1150a5befc"`

**Default Value:** `null`



### Blockchain RPC

#### RPCS

**Description:** Sets the list of blockchains, by blockchain ID (e.g., 1 - Ethereum, 11155111 - Eth Sepolia), to which the OE Node connects to retrieve assets. If not specified otherwise in the `INDEXER_NETWORKS` variable, the indexer will connect to all the blockchains listed here.&#x20;

Also, for each blockchain, two things are specified:&#x20;

* `"rpc"` : The RPC provider URL. Use the RPC URL supplied by the RPC provider.
* `"startBlock"` : The block number from which the indexer will search for events related to the asset creation or update. Verify the&#x20;

**Values:** JSON map of chainId to object

**Example:** `{"11155111":{"rpc":"https://eth-sepolia.g.alchemy.com/<your_key>","chainId":11155111,"network":"sepolia","chunkSize":50,"startBlock":9802079},"11155420":{"rpc":"https://opt-sepolia.g.alchemy.com/<your_key>","chainId":11155420,"network":"optimism_sepolia","chunkSize": 50,"startBlock":36735314}}`

**Default Value:** `{}`



### Decentralized File Systems

#### IPFS\_GATEWAY

**Description:** Sets the URL of the IPFS gateway used to fetch the asset's DDO. Use the URL supplied by the IFPS provider. Make sure the IPFS gateway is public; otherwise will not be able to access CIDs pinned by other services, such as the marketplace.&#x20;

**Values:** String (URL)

**Example:** `https://ipfs.io/`

**Default Value:** `null`



### Elasticsearch connection

#### DB\_URL

**Description:** Sets the URL for connecting to the Elasticsearch instance.

**Values:** String (URL)

**Example:** `http://elastic:<your_elasticsearch_password>@localhost:9200/`  (if Elasticsearch is deployed on the same hostmachine as OE Node)

**Default Value:** `null`



#### DB\_USERNAME

**Description:** Sets the user name for connecting to the Elasticsearch instance.

**Values:** String

**Example:** `"elastic"`

**Default Value:** `null`



#### DB\_PASSWORD

**Description:** Sets the password for connecting to the Elasticsearch instance. Make sure you use the same password you set when you started the Elasticsearch container.&#x20;

**Values:** String

**Example:** `"elastic"`

**Default Value:** `null`



### Node fees

#### FEE\_TOKENS

**Description:** Sets the tokens used for the node fees for each blockchain the OE Node is connected to.&#x20;

**Values:**  JSON array of string (chainId) to string (token address) mapping

**Example:** `{"11155111":"0x1B083D8584dd3e6Ff37d04a6e7e82b5F622f3985","11155420":"0xf26c6C93f9f1d725e149d95f8E7B2334a406aD10"}`

**Default Value:** `null`



#### FEE\_AMOUNT

**Description:** Sets the absolute value of the fee and the unit to which the fee is applied. However, applying the fee per unit is currently not implemented in OE Node, so the fee is applied when an asset is purchased, regardless of its size.

**Values:**  JSON object

**Example:** `{"amount":1,"unit":"MB"}` &#x20;

**Default Value:** `null`



### Policy Server

#### POLICY\_SERVER\_URL

**Description:** Sets the URL of the Policy Server used by the OE Node to perform the verification (address-based and SII-based) on asset access attempts. If no URL is set, then SSI verification is disabled, and the OE Node performs only address-based verification.

**Values:** String (URL)

**Example:** `"https://ps3.demo.oceanenterprise.io/"`

**Default Value:** `null`



#### POLICY\_SERVER\_API\_KEY

**Description:** Sets the API KEY used by Policy Server to authenticate API requests. Set the same key that was used in the [POLICY\_SERVER\_API\_KEY](policy-server-and-policy-server-proxy-installation-and-configuration.md#policy_server_api_key) variable of the corresponding Policy Server. If API requests authentication is not enabled on the Policy Server side, leave this variable null.

**Values:** string

**Example:** `mrgcorhTzA1Ey2WRhZAK8tkw4zBrIgQ757toUz3fXvfHh8Ua`

**Defaul Value:** `null`



### Compute Environment

**DOCKER\_COMPUTE\_ENVIRONMENT**

**Description:** Sets the Docker-based compute environment of the OE Node.&#x20;

**Value:** JSON list of objects

**Example:**

* _<mark style="background-color:$primary;">For OE Node up to v2.1.1</mark>_

{% code overflow="wrap" %}
```json
[{"socketPath":"/var/run/docker.sock","paymentClaimInterval":120,"resources":[{"id":"myGPU","description":"NVIDIA GeForce GTX 1060 3GB","type":"gpu","total":4,"init":{"deviceRequests":{"Driver":"nvidia","DeviceIDs":["GPU-294c6802-bb2f-fedb-f9e0-a26b9142dd81"],"Capabilities":[["gpu"]]}}},{"id":"disk","total":4}],"storageExpiry":604800,"maxJobDuration":3600,"fees":{"11155111":[{"feeToken":"0x1B083D8584dd3e6Ff37d04a6e7e82b5F622f3985","prices":[{"id":"cpu","price":1},{"id":"gpu","price":4},{"id":"ram","price":1},{"id":"disk","price":1}]},{"feeToken":"0x08210F9170F89Ab7658F0B5E3fF39b0E03C594D4","prices":[{"id":"cpu","price":0.1},{"id":"gpu","price":0.4},{"id":"ram","price":0.1},{"id":"disk","price":0.1}]},{"feeToken":"0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238","prices":[{"id":"cpu","price":0.15},{"id":"gpu","price":0.6},{"id":"ram","price":0.15},{"id":"disk","price":0.15}]}],"11155420":[{"feeToken":"0xf26c6C93f9f1d725e149d95f8E7B2334a406aD10","prices":[{"id":"cpu","price":1},{"id":"gpu","price":4},{"id":"ram","price":1},{"id":"disk","price":1}]},{"feeToken":"0x5fd84259d66Cd46123540766Be93DFE6D43130D7","prices":[{"id":"cpu","price":0.15},{"id":"gpu","price":0.6},{"id":"ram","price":0.15},{"id":"disk","price":0.15}]}]},"free":{"maxJobDuration":1800,"maxJobs":3,"resources":[{"id":"myGPU","description":"NVIDIA GeForce GTX 1060 3GB","type":"gpu","total":1,"init":{"deviceRequests":{"Driver":"nvidia","DeviceIDs":["GPU-294c6802-bb2f-fedb-f9e0-a26b9142dd81"],"Capabilities":[["gpu"]]}}},{"id":"cpu","max":1},{"id":"myGPU","max":1},{"id":"ram","max":0.5},{"id":"disk","max":0.5}]}}]
```
{% endcode %}

Here's the structured format of the same value.

```json
[
  {
    "socketPath": "/var/run/docker.sock",
    "paymentClaimInterval": 120,
    "resources": [
      {
        "id": "myGPU",
        "description": "NVIDIA GeForce GTX 1060 3GB",
        "type": "gpu",
        "total": 4,
        "init": {
          "deviceRequests": {
            "Driver": "nvidia",
            "DeviceIDs": ["GPU-294c6802-bb2f-fedb-f9e0-a26b9142dd81"],
            "Capabilities": [["gpu"]]
          }
        }
      },
      { "id": "disk", "total": 4 }
    ],
    "storageExpiry": 604800,
    "maxJobDuration": 3600,
    "fees": {
      "11155111": [
        {
          "feeToken": "0x1B083D8584dd3e6Ff37d04a6e7e82b5F622f3985",
          "prices": [
            { "id": "cpu", "price": 1 },
            { "id": "gpu", "price": 4 },
            { "id": "ram", "price": 1 },
            { "id": "disk", "price": 1 }
          ]
        },
        {
          "feeToken": "0x08210F9170F89Ab7658F0B5E3fF39b0E03C594D4",
          "prices": [
            { "id": "cpu", "price": 0.1 },
            { "id": "gpu", "price": 0.4 },
            { "id": "ram", "price": 0.1 },
            { "id": "disk", "price": 0.1 }
          ]
        },
        {
          "feeToken": "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
          "prices": [
            { "id": "cpu", "price": 0.15 },
            { "id": "gpu", "price": 0.6 },
            { "id": "ram", "price": 0.15 },
            { "id": "disk", "price": 0.15 }
          ]
        }
      ],
      "11155420": [
        {
          "feeToken": "0xf26c6C93f9f1d725e149d95f8E7B2334a406aD10",
          "prices": [
            { "id": "cpu", "price": 1 },
            { "id": "gpu", "price": 4 },
            { "id": "ram", "price": 1 },
            { "id": "disk", "price": 1 }
          ]
        },
        {
          "feeToken": "0x5fd84259d66Cd46123540766Be93DFE6D43130D7",
          "prices": [
            { "id": "cpu", "price": 0.15 },
            { "id": "gpu", "price": 0.6 },
            { "id": "ram", "price": 0.15 },
            { "id": "disk", "price": 0.15 }
          ]
        }
      ]
    },
    "free": {
      "maxJobDuration": 1800,
      "maxJobs": 3,
      "resources": [
        {
          "id": "myGPU",
          "description": "NVIDIA GeForce GTX 1060 3GB",
          "type": "gpu",
          "total": 1,
          "init": {
            "deviceRequests": {
              "Driver": "nvidia",
              "DeviceIDs": ["GPU-294c6802-bb2f-fedb-f9e0-a26b9142dd81"],
              "Capabilities": [["gpu"]]
            }
          }
        },
        { "id": "cpu", "max": 1 },
        { "id": "myGPU", "max": 1 },
        { "id": "ram", "max": 0.5 },
        { "id": "disk", "max": 0.5 }
      ]
    }
  }
]
```

The configuration described by this value provides free and paid compute environments. The free compute environment has a maximum job duration of 30 minutes, a maximum number of 3 simultaneous jobs, and limited resources (1 CPU, 1 GPU, 0.5GB of RAM, and 0.5GB of disk). The paid environment has more resources to allocate and allows a maximum job duration of 60 minutes.&#x20;



* _<mark style="background-color:$primary;">For OE Node v3.0.1 or newer</mark>_

{% code overflow="wrap" %}
```json
[{"socketPath":"/var/run/docker.sock","paymentClaimInterval":120,"environments":[{"id":"environment 1","storageExpiry":604800,"maxJobDuration":3600,"minJobDuration":60,"resources":[{"id":"myGPU","description":"NVIDIA GeForce GTX 1060 3GB","type":"gpu","total":4,"init":{"deviceRequests":{"Driver":"nvidia","DeviceIDs":["GPU-294c6802-bb2f-fedb-f9e0-a26b9142dd81"],"Capabilities":[["gpu"]]}}},{"id":"cpu","min":1,"max":1,"total":1},{"id":"ram","min":0,"max":2,"total":2},{"id":"disk","min":0,"max":2,"total":4}],"fees":{"11155111":[{"feeToken":"0x08210F9170F89Ab7658F0B5E3fF39b0E03C594D4","prices":[{"id":"cpu","price":0.1},{"id":"gpu","price":0.4},{"id":"ram","price":0.1},{"id":"disk","price":0.1}]},{"feeToken":"0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238","prices":[{"id":"cpu","price":0.15},{"id":"gpu","price":0.6},{"id":"ram","price":0.15},{"id":"disk","price":0.15}]}],"11155420":[{"feeToken":"0xf26c6C93f9f1d725e149d95f8E7B2334a406aD10","prices":[{"id":"cpu","price":1},{"id":"gpu","price":4},{"id":"ram","price":1},{"id":"disk","price":1}]},{"feeToken":"0x5fd84259d66Cd46123540766Be93DFE6D43130D7","prices":[{"id":"cpu","price":0.15},{"id":"gpu","price":0.6},{"id":"ram","price":0.15},{"id":"disk","price":0.15}]}]},"free":{"maxJobDuration":1800,"maxJobs":3,"resources":[{"id":"myGPU","description":"NVIDIA GeForce GTX 1060 3GB","type":"gpu","total":1,"init":{"deviceRequests":{"Driver":"nvidia","DeviceIDs":["GPU-294c6802-bb2f-fedb-f9e0-a26b9142dd81"],"Capabilities":[["gpu"]]}}},{"id":"cpu","max":1},{"id":"myGPU","max":1},{"id":"ram","min":0,"max":1},{"id":"disk","max":0.5}]}},{"id":"environment 2","storageExpiry":604800,"maxJobDuration":3600,"minJobDuration":60,"resources":[{"id":"myGPU","description":"NVIDIA GeForce GTX 1060 3GB","type":"gpu","total":2,"init":{"deviceRequests":{"Driver":"nvidia","DeviceIDs":["GPU-294c6802-bb2f-fedb-f9e0-a26b9142dd81"],"Capabilities":[["gpu"]]}}},{"id":"cpu","min":1,"max":1,"total":1},{"id":"ram","min":0,"max":2,"total":2},{"id":"disk","min":0,"max":2,"total":4}],"fees":{"11155111":[{"feeToken":"0x08210F9170F89Ab7658F0B5E3fF39b0E03C594D4","prices":[{"id":"cpu","price":0.08},{"id":"gpu","price":0.3},{"id":"ram","price":0.08},{"id":"disk","price":0.08}]},{"feeToken":"0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238","prices":[{"id":"cpu","price":0.1},{"id":"gpu","price":0.5},{"id":"ram","price":0.1},{"id":"disk","price":0.1}]}],"11155420":[{"feeToken":"0xf26c6C93f9f1d725e149d95f8E7B2334a406aD10","prices":[{"id":"cpu","price":1},{"id":"gpu","price":4},{"id":"ram","price":1},{"id":"disk","price":1}]},{"feeToken":"0x5fd84259d66Cd46123540766Be93DFE6D43130D7","prices":[{"id":"cpu","price":0.15},{"id":"gpu","price":0.6},{"id":"ram","price":0.15},{"id":"disk","price":0.15}]}]},"free":{"maxJobDuration":900,"maxJobs":2,"resources":[{"id":"myGPU","description":"NVIDIA GeForce GTX 1060 3GB","type":"gpu","total":1,"init":{"deviceRequests":{"Driver":"nvidia","DeviceIDs":["GPU-294c6802-bb2f-fedb-f9e0-a26b9142dd81"],"Capabilities":[["gpu"]]}}},{"id":"cpu","max":1},{"id":"myGPU","max":1},{"id":"ram","min":0,"max":1},{"id":"disk","max":0.4}]}}]}]
```
{% endcode %}



Here's the structured format of the same value.

{% code overflow="wrap" %}
```json
[
  {
    "socketPath": "/var/run/docker.sock",
    "paymentClaimInterval": 120,
    "environments": [
      {
        "id": "environment 1",
        "storageExpiry": 604800,
        "maxJobDuration": 3600,
        "minJobDuration": 60,
        "resources": [
          {
            "id": "myGPU",
            "description": "NVIDIA GeForce GTX 1060 3GB",
            "type": "gpu",
            "total": 4,
            "init": {
              "deviceRequests": {
                "Driver": "nvidia",
                "DeviceIDs": ["GPU-294c6802-bb2f-fedb-f9e0-a26b9142dd81"],
                "Capabilities": [["gpu"]]
              }
            }
          },
          { "id": "cpu", "min": 1, "max": 1, "total": 1 },
          { "id": "ram", "min": 0, "max": 2, "total": 2 },
          { "id": "disk", "min": 0, "max": 2, "total": 4 }
        ],
        "fees": {
          "11155111": [
            {
              "feeToken": "0x08210F9170F89Ab7658F0B5E3fF39b0E03C594D4",
              "prices": [
                { "id": "cpu", "price": 0.1 },
                { "id": "gpu", "price": 0.4 },
                { "id": "ram", "price": 0.1 },
                { "id": "disk", "price": 0.1 }
              ]
            },
            {
              "feeToken": "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
              "prices": [
                { "id": "cpu", "price": 0.15 },
                { "id": "gpu", "price": 0.6 },
                { "id": "ram", "price": 0.15 },
                { "id": "disk", "price": 0.15 }
              ]
            }
          ],
          "11155420": [
            {
              "feeToken": "0xf26c6C93f9f1d725e149d95f8E7B2334a406aD10",
              "prices": [
                { "id": "cpu", "price": 1 },
                { "id": "gpu", "price": 4 },
                { "id": "ram", "price": 1 },
                { "id": "disk", "price": 1 }
              ]
            },
            {
              "feeToken": "0x5fd84259d66Cd46123540766Be93DFE6D43130D7",
              "prices": [
                { "id": "cpu", "price": 0.15 },
                { "id": "gpu", "price": 0.6 },
                { "id": "ram", "price": 0.15 },
                { "id": "disk", "price": 0.15 }
              ]
            }
          ]
        },
        "free": {
          "maxJobDuration": 1800,
          "maxJobs": 3,
          "resources": [
            {
              "id": "myGPU",
              "description": "NVIDIA GeForce GTX 1060 3GB",
              "type": "gpu",
              "total": 1,
              "init": {
                "deviceRequests": {
                  "Driver": "nvidia",
                  "DeviceIDs": ["GPU-294c6802-bb2f-fedb-f9e0-a26b9142dd81"],
                  "Capabilities": [["gpu"]]
                }
              }
            },
            { "id": "cpu", "max": 1 },
            { "id": "myGPU", "max": 1 },
            { "id": "ram", "min": 0, "max": 1 },
            { "id": "disk", "max": 0.5 }
          ]
        }
      },
      {
        "id": "environment 2",
        "storageExpiry": 604800,
        "maxJobDuration": 3600,
        "minJobDuration": 60,
        "resources": [
          {
            "id": "myGPU",
            "description": "NVIDIA GeForce GTX 1060 3GB",
            "type": "gpu",
            "total": 2,
            "init": {
              "deviceRequests": {
                "Driver": "nvidia",
                "DeviceIDs": ["GPU-294c6802-bb2f-fedb-f9e0-a26b9142dd81"],
                "Capabilities": [["gpu"]]
              }
            }
          },
          { "id": "cpu", "min": 1, "max": 1, "total": 1 },
          { "id": "ram", "min": 0, "max": 2, "total": 2 },
          { "id": "disk", "min": 0, "max": 2, "total": 4 }
        ],
        "fees": {
          "11155111": [
            {
              "feeToken": "0x08210F9170F89Ab7658F0B5E3fF39b0E03C594D4",
              "prices": [
                { "id": "cpu", "price": 0.08 },
                { "id": "gpu", "price": 0.3 },
                { "id": "ram", "price": 0.08 },
                { "id": "disk", "price": 0.08 }
              ]
            },
            {
              "feeToken": "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
              "prices": [
                { "id": "cpu", "price": 0.1 },
                { "id": "gpu", "price": 0.5 },
                { "id": "ram", "price": 0.1 },
                { "id": "disk", "price": 0.1 }
              ]
            }
          ],
          "11155420": [
            {
              "feeToken": "0xf26c6C93f9f1d725e149d95f8E7B2334a406aD10",
              "prices": [
                { "id": "cpu", "price": 1 },
                { "id": "gpu", "price": 4 },
                { "id": "ram", "price": 1 },
                { "id": "disk", "price": 1 }
              ]
            },
            {
              "feeToken": "0x5fd84259d66Cd46123540766Be93DFE6D43130D7",
              "prices": [
                { "id": "cpu", "price": 0.15 },
                { "id": "gpu", "price": 0.6 },
                { "id": "ram", "price": 0.15 },
                { "id": "disk", "price": 0.15 }
              ]
            }
          ]
        },
        "free": {
          "maxJobDuration": 900,
          "maxJobs": 2,
          "resources": [
            {
              "id": "myGPU",
              "description": "NVIDIA GeForce GTX 1060 3GB",
              "type": "gpu",
              "total": 1,
              "init": {
                "deviceRequests": {
                  "Driver": "nvidia",
                  "DeviceIDs": ["GPU-294c6802-bb2f-fedb-f9e0-a26b9142dd81"],
                  "Capabilities": [["gpu"]]
                }
              }
            },
            { "id": "cpu", "max": 1 },
            { "id": "myGPU", "max": 1 },
            { "id": "ram", "min": 0, "max": 1 },
            { "id": "disk", "max": 0.4 }
          ]
        }
      }
    ]
  }
]

```
{% endcode %}



The configuration described by this value provides two different environments on the same host: _environment 1_ and _environment 2_. Each environment has two sub-environments: paid and free. For each environment, the available resources are listed, as well as the price of each resource, for each blockchain to which the node is connected.



For details on how to set this variable, refer to the information available [here](https://github.com/oceanprotocol/ocean-node/blob/main/docs/env.md#compute).

If you want the C2D environment to provide GPU resources, please refer to [this guide](https://github.com/oceanprotocol/ocean-node/blob/main/docs/GPU.md) on how to set it up.



**Default Value:** `null` (i.e., no C2D environment provided by the node).



### OE Node Ownership

#### NODE\_OWNER\_INFO

**DOCKER\_COMPUTE\_ENVIRONMENT**

**Description:** Sets information about the owner of the OE Node

**Value:** JSON object.&#x20;

**Example:** The recommended structure of this field is provided in the example below.

{% code overflow="wrap" %}
```json
{"imprint":{"legalName": "Ocean Enterprise Collective", "email": "info@oceanenterprise.io", "url": "https://www.oceanenterprise.io", "address":"Ocean Enterprise Collective e.V., Carmerstrasse 18, 10623 Berlin, Germany"}, "termsAndConditions":{"url":"https://www.oceanenterprise.io/terms-and-conditions#terms-and-conditions"}, "privacyPolicy":{"url": "https://www.oceanenterprise.io/terms-and-conditions#div-privacy"}
```
{% endcode %}

**Default Value:** `null`


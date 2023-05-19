# Deploying Provider

### About Provider

Provider encrypts the URL and metadata during publish and decrypts the URL when the dataset is downloaded or a compute job is started.
It enables the access to data assets by streaming data (and never the URL).
It performs checks on chain for buyer permissions and payments. It also Provides compute services (connects to C2D environment).
It is a multichain component, meaning that with the proper configurations it can handle these tasks on multiple chains.
The source code of Provider can be access from [here](https://github.com/oceanprotocol/provider).

### Prerequisites

* Docker and Docker compose are installed. Click [here](https://docs.docker.com/engine/install/) to view guide on installing docker.
* [Obtain an API key](../ocean-libraries/configuration.md#obtaining-api-key-for-ethereum-node-provider)

### Create a working directory

```
mkdir Provider
cd Provider
```

### Create a \`.env\` file

Copy the below content into the \`.env\` file and edit the values as needed.

{% code title=".env" %}
```
# Mandatory variables

# Update the value to the appropriate tag from here: https://hub.docker.com/r/oceanprotocol/provider-py/tags
PROVIDER_VERSION=latest
PROVIDER_PRIVATE_KEY=<private-key>
NETWORK_URL=<api-key>
AQUARIUS_URL=<aquarius-url>
```
{% endcode %}

### Create docker-compose file

{% hint style="info" %}
Set the value of OCEAN\_PROVIDER\_WORKERS to 2 or more to avoid a race condition when provider checks whether it should call a remote provider or not.
{% endhint %}

{% code title="docker-compose.provider.yml" %}
```yaml
version: '3'
services:
  provider:
    image: oceanprotocol/provider-py:v1.0.20
    container_name: provider
    ports:
      - 8030:8030
    networks:
      - ocean_backend
    environment:
      # the NETWORK_URL and PROVIDER_PRIVATE_KEY settings can be defined for multiple chains
      # as the JSON encoding e.g. {"chain_id1": "network_url_1", "chain_id2": "network_url_2"}
      NETWORK_URL: '{"8996": "${NETWORK_URL}"}'
      PROVIDER_PRIVATE_KEY: '{"8996": "${PROVIDER_PRIVATE_KEY}"}'
      # defines the key to use where no chain id is applicable (e.g. for auth tokens)
      UNIVERSAL_PRIVATE_KEY: ${PROVIDER_PRIVATE_KEY}
      LOG_LEVEL: DEBUG
      OCEAN_PROVIDER_URL: "http://0.0.0.0:8030"
      OCEAN_PROVIDER_WORKERS: "2"
      OCEAN_PROVIDER_TIMEOUT: "9000"
      # Defining OPERATOR_SERVICE_URL is optional. Set the value only if Provider should support Compute-to-data.
      OPERATOR_SERVICE_URL: "<operator-service-url>"
      # Defining IPFS_GATEWAY is optional. Set the value if Provider should support resolving IPFS urls.
      IPFS_GATEWAY: "<ipfs-url>"
      AQUARIUS_URL: ${AQUARIUS_URL}
volumes:
  data:
    driver: local
networks:
  ocean_backend:
    driver: bridge
```
{% endcode %}

### Start Provider

```
docker-compose \
-f docker-compose.provider.yml
--env-file .env \
-d \
up
```

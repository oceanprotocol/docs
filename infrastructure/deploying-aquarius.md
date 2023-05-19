# Deploying Aquarius

### About Aquarius

Aquarius is an off-chain component with caches the asset metadata published on-chain. By deploying own Aquarius, developers can control which assets are visible in their marketplace. For example, having a custom Aquarius instance allows assets only from specific addresses to be visible on the marketplace. This tutorial will provide the steps to deploy Aquarius. Ocean Protocol provides Aquarius docker images which can be viewed [here](https://hub.docker.com/r/oceanprotocol/aquarius/tags). Visit [this](https://github.com/oceanprotocol/aquarius) page to view Aquarius source code.

Aquarius consists of two parts:\
\- **API:** The Aquarius API offers a convenient way to access the medatata without scanning the chain yourself.\
\- **Event monitor:** Aquarius continually monitors the chains for MetadataCreated and MetadataUpdated events, processes these events and adds them to the database.

### Prerequisites

* A server for hosting Aquarius. See [this guide](setup-server.md) on creating a server.
* Docker and Docker compose are installed. Click [here](https://docs.docker.com/engine/install/) to view guide on installing docker.
* [Obtain an API key](../ocean-libraries/configuration.md#obtaining-api-key-for-ethereum-node-provider)

### Create a working directory

```
mkdir Aquarius
cd Aquarius
```

### Create a \`.env\` file

Copy the below content into the \`.env\` file and edit the values as needed.

{% code title=".env" %}
```
# check the available versions: https://hub.docker.com/repository/docker/oceanprotocol/aquarius
AQUARIUS_VERSION=latest
ALLOWED_PUBLISHERS='[""]'
# Elastic search credentials
DB_USERNAME=username
DB_PASSWORD=password

# Replace below value with the API provider of your choice
EVENTS_RPC_POLYGON=<polygon-key>
EVENTS_RPC_MAINNET=<mainnet-key>
```
{% endcode %}

### Create docker-compose file

{% code title="docker-compose.yml" %}
```yaml
version: '3'
services:
   elasticsearch:
    image: elasticsearch:6.8.17
    container_name: elasticsearch
    restart: on-failure
    environment:
      ES_JAVA_OPTS: "-Xms512m -Xmx512m"
      MAX_MAP_COUNT: "64000"
      discovery.type: "single-node"
    volumes:
      - data:/usr/share/elasticsearch/data
    ports:
      - 9200:9200
    networks:
      - ocean_backend
   aquarius:
    image: oceanprotocol/aquarius:${AQUARIUS_VERSION}
    container_name: aquarius
    restart: on-failure
    ports:
      - 5000:5000
    networks:
      - ocean_backend
    depends_on:
      - elasticsearch
    environment:
      DB_MODULE: elasticsearch
      DB_HOSTNAME: elasticsearch
      DB_PORT: 9200
      DB_USERNAME: ${DB_USERNAME}
      DB_PASSWORD: ${DB_PASSWORD}
      DB_NAME: aquarius
      DB_SCHEME: http
      DB_SSL : "false"
      LOG_LEVEL: "DEBUG"
      AQUARIUS_BIND_URL : "http://0.0.0.0:5000"
      AQUARIUS_WORKERS : "8"
      RUN_AQUARIUS_SERVER: "1"
      AQUARIUS_CONFIG_FILE: "config.ini"
      EVENTS_ALLOW: 0
      RUN_EVENTS_MONITOR: 0
      ALLOWED_PUBLISHERS: ${ALLOWED_PUBLISHERS}
volumes:
  data:
    driver: local
networks:
  ocean_backend:
    driver: bridge
```
{% endcode %}

### Create events monitor docker compose file

{% tabs %}
{% tab title="Events monitor - Mainnet" %}
{% code title="docker-compose-events-mainnet.yml" %}
```yaml
version: '3'
services:
  aquarius-events-mainnet:     
    image: oceanprotocol/aquarius:${AQUARIUS_VERSION}
    container_name: aquarius-events-mainnet
    restart: on-failure
    networks:
      - ocean_backend
    depends_on:
      - elasticsearch
    environment:
      DB_MODULE: elasticsearch
      DB_HOSTNAME: elasticsearch
      DB_PORT: 9200
      DB_USERNAME: ${DB_USERNAME}
      DB_PASSWORD: ${DB_PASSWORD}
      DB_NAME: aquarius
      DB_SCHEME: http
      DB_SSL : "false"
      LOG_LEVEL: "DEBUG"
      AQUARIUS_BIND_URL: "http://0.0.0.0:5000"
      AQUARIUS_WORKERS : "1"
      RUN_AQUARIUS_SERVER : "0"
      AQUARIUS_CONFIG_FILE: "config.ini"
      NETWORK_NAME: "mainnet"
      EVENTS_RPC: ${EVENTS_RPC_MAINNET}
      METADATA_UPDATE_ALL : "0"
      OCEAN_ADDRESS :  "0x967da4048cD07aB37855c090aAF366e4ce1b9F48"
      EVENTS_ALLOW: 0
      RUN_EVENTS_MONITOR: 1
      BLOCKS_CHUNK_SIZE: "5000"
volumes:
  data:
    driver: local
networks:
  ocean_backend:
    driver: bridge
```
{% endcode %}
{% endtab %}

{% tab title="Events monitor - Polygon" %}
{% code title="docker-compose-events-ploygon.yml" %}
```yaml
version: '3'
services:
  aquarius-events-polygon:     
    image: oceanprotocol/aquarius:${AQUARIUS_VERSION}
    container_name: aquarius-events-polygon
    restart: on-failure
    networks:
      - ocean_backend
    depends_on:
      - elasticsearch
    environment:
      DB_MODULE: elasticsearch
      DB_HOSTNAME: elasticsearch
      DB_PORT: 9200
      DB_USERNAME: ${DB_USERNAME}
      DB_PASSWORD: ${DB_PASSWORD}
      DB_NAME: aquarius
      DB_SCHEME: http
      DB_SSL : "false"
      LOG_LEVEL: "DEBUG"
      AQUARIUS_BIND_URL: "http://0.0.0.0:5000"
      AQUARIUS_WORKERS : "1"
      RUN_AQUARIUS_SERVER : "0"
      AQUARIUS_CONFIG_FILE: "config.ini"
      NETWORK_NAME: "polygon"
      EVENTS_RPC: ${EVENTS_RPC_POLYGON}
      METADATA_UPDATE_ALL: "0"
      OCEAN_ADDRESS: "0x282d8efCe846A88B159800bd4130ad77443Fa1A1"
      EVENTS_ALLOW: 0
      RUN_EVENTS_MONITOR: 1
      METADATA_CONTRACT_ADDRESS: "0x80E63f73cAc60c1662f27D2DFd2EA834acddBaa8"
      BLOCKS_CHUNK_SIZE: "5000"
volumes:
  data:
    driver: local
networks:
  ocean_backend:
    driver: bridge
```
{% endcode %}
{% endtab %}
{% endtabs %}

### Start Aquarius

```
docker-compose \
-f docker-compose.yml \
-f docker-compose-events-mainnet.yml \
-f docker-compose-events-polygon.yml \
--env-file .env \
-d \
up
```

After pulling all the asset metadata from the blockchain, Aquarius can be used to query the assets using Elasticsearch query. Aquarius REST API are documented here.

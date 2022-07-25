# Deploying Aquarius

### About Aquarius

Aquarius is an off-chain component with caches the asset metadata published on-chain. By deploying own Aquarius, developers can control which assets are visible in their marketplace. For example, having a custom Aquarius instance allows assets only from specific addresses to be visible on the marketplace. This tutorial will provide the steps to deploy Aquarius. Ocean Protocol provides Aquarius docker images which can be viewed [here](https://hub.docker.com/r/oceanprotocol/aquarius/tags). Visit [this](https://github.com/oceanprotocol/aquarius) page to view Aquarius source code.

Aquarius consists of two parts:\
\- **API:** The Aquarius API offers a convenient way to access the medatata without scanning the chain yourself.\
\- **Event monitor:** Aquarius continually monitors the chains for MetadataCreated and MetadataUpdated events, processes these events and adds them to the database.

### Prerequisites

* Docker and Docker compose are installed. Click [here](https://docs.docker.com/engine/install/) to view guide on installing docker.
* Ethereum API. Aquarius uses Ethereum api for monitoring on-chain events.\
  Choose any api provider of your choice. Some of the commonly used are:
  * [Infura](https://infura.io/)
  * [Alchemy](https://www.alchemy.com/)
  * [Moralis](https://moralis.io/)

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

## **Using hosting services**

Aquarius can be hosted on any infrastructure providers like AWS, Azure, Heroku, Digitalocean, and many others. The tutorial here explains how to create a server using Digitalocean and running the required commands to host Aquarius. Apart from steps for create a server, the remaining part of the tutorial will be same for all hosting providers.

#### Creating account and setting billing

Go to [https://www.digitalocean.com/](https://www.digitalocean.com/) and create an account. Provide the appropriate information for billing and accounting.

#### Create a droplet

Click on **`Create`** button and choose **`Droplets`** options from dropdown.

![](../../.gitbook/assets/image.png)

#### Configure droplet

Select Ubuntu OS and choose a plan. The required CPU, Memory depends on the number of requests Aquarius is expected to serve.&#x20;

![Configure droplet](<../../.gitbook/assets/image (8).png>)

Also, select the region where you want Aquarius to be hosted and a root password.

![](<../../.gitbook/assets/image (4).png>)

![Click Create Droplet](<../../.gitbook/assets/image (7).png>)

Finalize the parameters for the server, click on `Create Droplet.` After the server is ready, s`e`lect the Access console option from the dropdown.

![Click Access Console](<../../.gitbook/assets/image (3).png>)

![Click Launch Droplet Console](<../../.gitbook/assets/image (9).png>)

A window will open with a terminal session. Now, the required infrastructure is ready for hosting Aquarius. Let's install docker and docker-compose on the server. Follow the installation guide [here](https://docs.docker.com/engine/install/ubuntu/).

The below commands shows the commands executed by following the guide.

```bash
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg lsb-release
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Now install docker-compose
sudo apt-get update
sudo apt-get install docker-compose-plugin
```

Now that, the server is ready with all the required dependencies follow the steps from[ creating a working directory](deploying-aquarius.md#create-a-working-directory) to[ Start Aquarius](deploying-aquarius.md#start-aquarius).

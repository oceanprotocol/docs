# Deploying Ocean Subgraph

### About Ocean subgraph

Ocean subgraph allows querying the datatoken, dataNFT, and all event information using GraphQL. Hosting the Ocean subgraph saves the cost and time required in querying the data directly from the blockchain. The steps in this tutorial will explain how to host Ocean subgraph for the EVM compatible chains supported by Ocean Protocol.

### Prerequisites

* A server for hosting Ocean subgraph. See [this guide](setup-server.md) on creating a server.
* Docker and Docker compose are installed. Click [here](https://docs.docker.com/engine/install/) to view guide on installing docker.
* [Obtain an API key](../using-ocean-libraries/configuration.md#obtaining-api-key-for-ethereum-node-provider)

### Create a working directory

```
mkdir ocean-subgraph
cd ocean-subgraph
```

### Create a \`.env\` file

Copy the below content into the \`.env\` file and edit the values as needed.

{% code title=".env" %}
```
ETHEREUM_NODE_PROVIDER_API='mumbai:https://polygon-mumbai.infura.io/v3/${INFURA_PROJECT_ID}'
```
{% endcode %}

### Create docker-compose file

{% code title="docker-compose.yml" %}
```yaml
version: '3'
services:
  graph-node:
    image: graphprotocol/graph-node:v0.26.0
    ports:
      - '9000:8000'
      - '8001:8001'
      - '8020:8020'
      - '8030:8030'
      - '8040:8040'
    depends_on:
      - ipfs
      - postgres
    environment:
      postgres_host: postgres
      postgres_user: graph-node
      postgres_pass: let-me-in
      postgres_db: graph-node
      ipfs: 'ipfs:5001'
      ethereum: ${ETHEREUM_NODE_PROVIDER_API}
      RUST_LOG: info
  ipfs:
    image: ipfs/go-ipfs:v0.4.23
    ports:
      - '5001:5001'
    volumes:
      - ./data/ipfs:/data/ipfs
  postgres:
    image: postgres
    ports:
      - '5432:5432'
    command: ['postgres', '-cshared_preload_libraries=pg_stat_statements']
    environment:
      POSTGRES_USER: graph-node
      POSTGRES_PASSWORD: let-me-in
      POSTGRES_DB: graph-node
    volumes:
      - ./data/postgres:/var/lib/postgresql/data
```
{% endcode %}

### Start Ocean subgraph

```
docker-compose \
-f docker-compose.yml
--env-file .env \
-d \
up
```

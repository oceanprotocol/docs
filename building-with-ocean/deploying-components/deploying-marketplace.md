# Deploying Marketplace

### Prerequisites

* Docker and Docker compose are installed

### Create a directory

```
mkdir my-marketplace
cd my-marketplace
```

### Create file with name \`.env\`

Copy the below content into the \`.env\` file.

<mark style="color:red;">TODO: explain ALLOWED\_PUBLISHERS and EVENTS\_RPC</mark>

{% code title=".env" %}
```
DB_USERNAME=username
DB_PASSWORD=password
# check the available versions: https://hub.docker.com/repository/docker/oceanprotocol/aquarius
```
{% endcode %}

### Build a Marketplace container

#### Create a \`Dockerfile\` file and copy the below content into it.

{% code title="Dockerfile" %}
```
FROM node:16
RUN git clone https://github.com/oceanprotocol/market.git /usr/app/market
WORKDIR /usr/app/market
RUN npm ci --legacy-peer-deps
RUN npm run build
EXPOSE 3000
CMD ["npx", "next", "start"]
```
{% endcode %}

Build a docker image

```bash
docker build . -f Dockerfile -t market:latest
```

### Start the marketplace

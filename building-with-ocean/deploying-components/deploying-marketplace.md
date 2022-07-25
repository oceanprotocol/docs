# Deploying Marketplace

### Prerequisites

* A server for hosting Ocean Marketplace. See [this guide](setup-server.md) on creating a server.

#### Create a directory

```
mkdir my-marketplace
cd my-marketplace
```

### Create file with name \`.env\`

Copy the below content into the \`.env\` file.

{% code title=".env" %}
```
DB_USERNAME=username
DB_PASSWORD=password
Build a Marketplace container
```
{% endcode %}

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

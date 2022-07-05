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

{% code title=".env" %}
```
#NEXT_PUBLIC_INFURA_PROJECT_ID="xxx"
#NEXT_PUBLIC_MARKET_FEE_ADDRESS="0xxx"
#NEXT_PUBLIC_PUBLISHER_MARKET_ORDER_FEE="1"
#NEXT_PUBLIC_PUBLISHER_MARKET_POOL_SWAP_FEE="1"
#NEXT_PUBLIC_PUBLISHER_MARKET_FIXED_SWAP_FEE="1"
#NEXT_PUBLIC_CONSUME_MARKET_ORDER_FEE="1"
#NEXT_PUBLIC_CONSUME_MARKET_POOL_SWAP_FEE="1"
#NEXT_PUBLIC_CONSUME_MARKET_FIXED_SWAP_FEE="1"

#
# ADVANCED SETTINGS
#

# Toggle pricing options presented during price creation
#NEXT_PUBLIC_ALLOW_FIXED_PRICING="true"
#NEXT_PUBLIC_ALLOW_DYNAMIC_PRICING="true"
#NEXT_PUBLIC_ALLOW_FREE_PRICING="true"

# Privacy Preference Center
#NEXT_PUBLIC_PRIVACY_PREFERENCE_CENTER="true"
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

### Create a docker compose file

{% code title="docker-compose.market.yml" %}
```yaml
version: "3"
services:
  market:
    container_name: market
    restart: on-failure
    build: .
    ports:
      - 3000:3000
```
{% endcode %}

### Start the marketplace

```
docker-compose \
-f docker-compose.market.yml \
-d \
up
```

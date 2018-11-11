---
title: Ecosystem
description: The Ocean Protocol network consists of various components. Learn about all of them here.
---

## Keeper-contracts

See also [Set Up a Keeper](/setup/keeper/)

<repo name="keeper-contracts"></repo>

## Aquarius

Aquarius provides an off-chain database store for metadata about data assets. Every marketplace must run an instance of Aquarius.

<repo name="aquarius"></repo>

## Brizo

Brizo is the technical component executed by Publishers allowing them to provide extended data services. Brizo, as part of the Publisher ecosystem, includes the credentials to interact with the infrastructure (initially cloud, but could be on-premise).

<repo name="brizo"></repo>

## Pleuston

An example marketplace front-end for consumers to explore, download, and publish data assets within the Ocean Protocol network. Implemented using React and squid-js.

<repo name="pleuston"></repo>

## Squid

Client libraries used by applications to interact with Ocean nodes, including Keepers, Aquarius nodes, Brizo nodes, etc.

-   [🦑 squid-js](https://github.com/oceanprotocol/squid-js)
-   [🦑 squid-py](https://github.com/oceanprotocol/squid-py)
-   [🦑 squid-java](https://github.com/oceanprotocol/squid-java)

## Docker images

All of our core components generate Docker images automatically and we provide some handy Docker Compose scripts to help with testing, showcasing, and developing Ocean Protocol.

<repo name="docker-images"></repo>

### Full Ocean network stack

As a quick start, you can get a fully working Ocean network with all of the core components mentioned above working together:

```bash
git clone https://github.com/oceanprotocol/docker-images.git
cd docker-images/

./start_ocean.sh --latest
```

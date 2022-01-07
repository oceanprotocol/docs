---
title: Setting up private docker registry for Compute-to-Data environment
description: Learn how to setup own docker registry and push images for running algorithms in C2D environment.
---

## Prerequisites

1. Running docker environment on the server.
2. Domain name is mapped to the server IP address.
3. SSL certificate

## Generate password file

Replace content in `<>` with appropriate content.

```bash
docker run \
  --entrypoint htpasswd \
  httpd:2 -Bbn <username> <password> > <path>/auth/htpasswd
```

## Docker compose template file for registry

Copy the below yml content to `docker-compose.yml` file and replace content in `<>`.

```yml
version: '3'

services:
  registry:
    restart: always
    container_name: my-docker-registry
    image: registry:2
    ports:
      - 5050:5000
    environment:
      REGISTRY_HTTP_TLS_CERTIFICATE: /certs/domain.crt
      REGISTRY_HTTP_TLS_KEY: /certs/domain.key
      REGISTRY_AUTH: htpasswd
      REGISTRY_AUTH_HTPASSWD_PATH: /auth/htpasswd
      REGISTRY_AUTH_HTPASSWD_REALM: Registry Realm
      REGISTRY_HTTP_SECRET: <secret>
    volumes:
      - <path>/data:/var/lib/registry
      - <path>/auth:/auth
      - <path>/certs:/certs

```

## Start the registry

```bash
docker-compose -f docker-compose.yml up 
```

## List images in the registry

```bash
curl -X GET -u <username>:<password> https://example.com/v2/_catalog
```

## Other useful commands


## Login to registry

```bash
docker login example.com -u <username> -p <password>
```

## Build and push image to registry

Use the commands below to build an image from a  `Dockerfile` and push to your own private registry.

```bash
docker build . -t example.com/my-algo:latest

docker image tag example.com/my-algo:latest
```

## Next step

You can publish an algorithm asset with the metadata containing registry url, image, and tag information to enable users to run C2D jobs. 

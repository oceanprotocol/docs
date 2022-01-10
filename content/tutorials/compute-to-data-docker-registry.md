---
title: Setting up private docker registry for Compute-to-Data environment
description: Learn how to setup your own docker registry and push images for running algorithms in a C2D environment.
---

## Prerequisites

1. Running docker environment on the server.
2. Domain name is mapped to the server IP address.
3. SSL certificate

## Generate certificates

```bash
# install certbot: https://certbot.eff.org/
sudo certbot certonly --standalone --cert-name example.com -d example.com
sudo certbot certonly --standalone --cert-name admin.example.com -d admin.example.com
```

## Generate password file

Replace content in `<>` with appropriate content.

```bash
docker run \
  --entrypoint htpasswd \
  httpd:2 -Bbn <username> <password> > <path>/auth/htpasswd
```

## Docker compose template file for registry

Copy the below yml content to `docker-compose.yml` file and replace content in `<>`.
Here, we will be creating two services of the docker registry so that anyone can `pull` the images from the registry but, only authenticated users can `push` the images.

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
      REGISTRY_AUTH: htpasswd
      REGISTRY_AUTH_HTPASSWD_PATH: /auth/htpasswd
      REGISTRY_AUTH_HTPASSWD_REALM: Registry Realm
      REGISTRY_HTTP_SECRET: <secret>
    volumes:
      - <path>/data:/var/lib/registry
      - <path>/auth:/auth
  registry-read-only:
      restart: always
      container_name: my-registry-read-only
      image: registry:2
      read_only: true
      ports:
        - 5051:5000
      environment:
        REGISTRY_HTTP_SECRET: ${REGISTRY_HTTP_SECRET}
      volumes:
        - <path>/docker-registry/data:/var/lib/registry:ro
      depends_on:
        - registry
  nginx:
        image: nginx:latest
        container_name: nginx
        volumes:
            -  <path>/nginx/logs:/app/logs/
            -  nginx.conf:/etc/nginx/nginx.conf
            -  /etc/letsencrypt/:/etc/letsencrypt/
        ports:
            - 80:80
            - 443:443
        depends_on:
            - registry-read-only
```

## Nginx configuration

```conf
events {}
http {
  access_log /app/logs/access.log;
  error_log /app/logs/error.log;
	
	server {
        client_max_body_size 4096M;
    		listen 80 default_server;
    		server_name _;
    		return 301 https://$host$request_uri;
	}

  server {
           # Allowed request size should be large enough to allow push operations
           client_max_body_size 4096M;
           listen 443 ssl;
           server_name admin.example.com;
           ssl_certificate /etc/letsencrypt/live/admin.example.com/fullchain.pem;
           ssl_certificate_key /etc/letsencrypt/live/admin.example.com/privkey.pem;
           location / {
                   proxy_connect_timeout 75s;
                   proxy_pass http://registry:5000;
           }
  }

  server {
          # Allowed request size should be large enough to allow pull operations
          client_max_body_size 4096M;
          listen 443 ssl;
          server_name example.com;
          ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
          ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
          location / {
                  proxy_connect_timeout 75s;
                  proxy_pass http://registry-read-only:5000;
          }
  }
}

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

### Login to registry

```bash
docker login example.com -u <username> -p <password>
```

### Build and push an image to the registry

Use the commands below to build an image from a  `Dockerfile` and push it to your private registry.

```bash
docker build . -t example.com/my-algo:latest

docker image tag example.com/my-algo:latest
```

## Next step

You can publish an algorithm asset with the metadata containing registry URL, image, and tag information to enable users to run C2D jobs. 

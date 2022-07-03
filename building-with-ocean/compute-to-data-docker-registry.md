---
title: Setting up private docker registry for Compute-to-Data environment
description: Learn how to setup your own docker registry and push images for running algorithms in a C2D environment.
---

The document is intended for a production setup. The tutorial provides the steps to setup a private docker registry on the server for the following scenarios:

- Allow registry access only to the C2D environment.
- Anyone can pull the image from the registry but, only authenticated users will push images to the registry.

## Setup 1: Allow registry access only to the C2D environment


To implement this use case, 1 domain will be required:

- **example.com**: This domain will allow only image pull operations

_Note: Please change the domain names to your application-specific domain names._

### 1.1 Prerequisites

- Running docker environment on the linux server.
- Docker compose is installed.
- C2D environment is running.
- The domain names is mapped to the server hosting the registry.

### 1.2 Generate certificates

```bash
# install certbot: https://certbot.eff.org/
sudo certbot certonly --standalone --cert-name example.com -d example.com
```

_Note: Do check the access right of the files/directories where certificates are stored. Usually, they are at `/etc/letsencrypt/`._

### 1.3 Generate password file

Replace content in `<>` with appropriate content.

```bash
docker run \
  --entrypoint htpasswd \
  httpd:2 -Bbn <username> <password> > <path>/auth/htpasswd
```

### 1.4 Docker compose template file for registry

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
      REGISTRY_AUTH: htpasswd
      REGISTRY_AUTH_HTPASSWD_PATH: /auth/htpasswd
      REGISTRY_AUTH_HTPASSWD_REALM: Registry Realm
      REGISTRY_HTTP_SECRET: <secret>
    volumes:
      - <path>/data:/var/lib/registry
      - <path>/auth:/auth
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
            - registry
```

### 1.5 Nginx configuration

Copy the below nginx configuration to a `nginx.conf` file.

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

### 1.6 Create kubernetes secret in C2D server

Login into Compute-to-data enviroment and run the following command with appropriate credentials:

```bash
kubectl create secret docker-registry regcred --docker-server=example.com --docker-username=<username> --docker-password=<password> --docker-email=<email_id> -n ocean-compute
```

### 1.7 Update operator-engine configuration

Add `PULL_SECRET` property with value `regcred` in the [operator.yml](https://github.com/oceanprotocol/operator-engine/blob/main/kubernetes/operator.yml) file of operator-engine configuration.
For more detials on operator-engine properties refer this [link](https://github.com/oceanprotocol/operator-engine/blob/177ca7185c34aa2a503afbe026abb19c62c69e6d/README.md?plain=1#L106)

Apply updated operator-engine configuration.

```bash
kubectl config set-context --current --namespace ocean-compute
kubectl apply  -f operator-engine/kubernetes/operator.yml
```

## Steup 2: Allow anyonymous `pull` operations

To implement this use case, 2 domains will be required:

- **example.com**: This domain will allow image push/pull operations only to the authenticated users.
- **readonly.example.com**: This domain will allow only image pull operations

_Note: Please change the domain names to your application-specific domain names._

### 2.1 Prerequisites

- Running docker environment on the linux server.
- Docker compose is installed.
- 2 domain names is mapped to the same server IP address.

### 2.2 Generate certificates

```bash
# install certbot: https://certbot.eff.org/
sudo certbot certonly --standalone --cert-name example.com -d example.com
sudo certbot certonly --standalone --cert-name readonly.example.com -d readonly.example.com
```

_Note: Do check the access right of the files/directories where certificates are stored. Usually, they are at `/etc/letsencrypt/`._

### 2.3 Generate password file

Replace content in `<>` with appropriate content.

```bash
docker run \
  --entrypoint htpasswd \
  httpd:2 -Bbn <username> <password> > <path>/auth/htpasswd
```

### 2.4 Docker compose template file for registry

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

### 2.5 Nginx configuration

Copy the below nginx configuration to a `nginx.conf` file.

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
           server_name readonly.example.com;
           ssl_certificate /etc/letsencrypt/live/readonly.example.com/fullchain.pem;
           ssl_certificate_key /etc/letsencrypt/live/readonly.example.com/privkey.pem;
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

## Working with registry

### Login to registry

```bash
docker login example.com -u <username> -p <password>
```

### Build and push an image to the registry

Use the commands below to build an image from a `Dockerfile` and push it to your private registry.

```bash
docker build . -t example.com/my-algo:latest
docker image push example.com/my-algo:latest
```

### List images in the registry

```bash
curl -X GET -u <username>:<password> https://example.com/v2/_catalog
```

### Pull an image from the registry

Use the commands below to build an image from a `Dockerfile` and push it to your private registry.

```bash
# requires login
docker image pull example.com/my-algo:latest

# allows anonymous pull if 2nd setup scenario is implemented
docker image pull readonly.example.com/my-algo:latest


```

### Next step

You can publish an algorithm asset with the metadata containing registry URL, image, and tag information to enable users to run C2D jobs.


## Further references

- [Setup Compute-to-Data environment](/tutorials/compute-to-data-minikube/)
- [Writing algorithms](/tutorials/compute-to-data-algorithms/)
- [C2D example](/references/read-the-docs/ocean-py/READMEs/c2d-flow.md)

# Deploying Provider

### About Provider

Provider encrypts the URL and metadata during publishing and decrypts the URL when the dataset is downloaded or a compute job is started. It enables access to the data assets by streaming data (and never the URL). It performs checks on-chain for buyer permissions and payments. It also provides compute services (connects to a C2D environment).

Provider is a multichain component, meaning that it can handle these tasks on multiple chains with the proper configurations. The source code of Provider can be accessed from [here](https://github.com/oceanprotocol/provider).

As mentioned in the Setup a Server document, all Ocean components can be deployed in two types of configurations: simple, based on Docker Engine and Docker Compose, and complex, based on Kubernetes with Docker Engine. In this document, we will present how to deploy Provider in each of these configurations.


## Deploying Provider using Docker Engine and Docker Compose

In this guide, we will deploy Provider for two chains: Goerli (Ethereum test network) and Mumbai (Polygon test network). Therefore, please note that in the following configuration files,  "5" and "80001" are the chain IDs for Goerli and Mumbai respectively.


### Prerequisites

* A server for hosting Provider. See [this guide](setup-server.md) for how to create a server;
* Docker Compose and Docker Engine are installed and configured on the server. See [this guide](setup-server.md#install-docker-engine-and-docker-compose) for how to install these products.
* The RPC URLs and API keys for each of the networks to which the Provider will be connected. See[ this guide](https://app.gitbook.com/o/mTcjMqA4ylf55anucjH8/s/BTXXhmDGzR0Xgj13fyfM/\~/changes/548/developers/obtaining-api-keys-for-blockchain-access) for how to obtain the URL and the API key.
* The private key which will be used by Provider to encrypt/decrypt URLs.

### Steps

The steps to deploy the Provider using Docker Engine and Docker Compose are:

1. [Create the /etc/docker/compose/provider/docker-compose.yml file](deploying-provider.md#1-create-the-etcdockercomposeproviderdocker-composeyml-file)
2. [Create the /etc/systemd/system/docker-compose@provider.service file](deploying-provider.md#2-create-the-etcsystemdsystemdocker-composeproviderservice-file)
3. [Reload the systemd manager configuration](deploying-provider.md#3.-reload-the-systemd-manager-configuration)
4. [Start the Provider service](deploying-provider.md#4.-start-the-provider-service)
5. [Check the service's status](deploying-provider.md#5.-check-the-services-status)
6. [Confirm the Provider is accessible](deploying-provider.md#6.-confirm-the-provider-is-accessible)
7. [Check Provider service logs](deploying-provider.md#7.-check-provider-service-logs)


#### 1. Create the /etc/docker/compose/provider/docker-compose.yml file

From a terminal console, create /etc/docker/compose/provider/docker-compose.yml file, then copy and paste the following content to it. Check the comments in the file and replace the fields with the specific values of your implementation.

```yaml
version: '3'
services:
  provider:
    image: oceanprotocol/provider-py:latest =>(check on https://hub.docker.com/r/oceanprotocol/provider-py for specific tag)
    container_name: provider
    restart: on-failure
    ports:
      - 8030:8030
    networks:
      backend:
    environment:
      ARTIFACTS_PATH: "/ocean-contracts/artifacts"
      NETWORK_URL: '{"5":"https://goerli.infura.io/v3/<your INFURA project id>","80001":"https://polygon-mumbai.infura.io/v3/<your INFURA project id>"}'
      PROVIDER_PRIVATE_KEY: '{"5":"<your private key>","80001":"<your private key"}'
      LOG_LEVEL: DEBUG
      OCEAN_PROVIDER_URL: 'http://0.0.0.0:8030'
      OCEAN_PROVIDER_WORKERS: "1"
      IPFS_GATEWAY: "< your IPFS gateway >"
      OCEAN_PROVIDER_TIMEOUT: "9000"
      OPERATOR_SERVICE_URL: "https://stagev4.c2d.oceanprotocol.com" => (use custom value for Operator Service URL)
      AQUARIUS_URL: "http//localhost:5000" => (use custom value Aquarius URL)
      REQUEST_TIMEOUT: "10"
networks:
  backend:
    driver: bridge
```


#### 2. Create the _/etc/systemd/system/docker-compose@provider.service_ file

Create the _/etc/systemd/system/docker-compose@provider.service_ file then copy and paste the following content to it. This example file could be customized if needed.

```
[Unit]
Description=%i service with docker compose
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=true
Environment="PROJECT=ocean"
WorkingDirectory=/etc/docker/compose/%i
ExecStartPre=/usr/bin/env docker-compose -p $PROJECT pull
ExecStart=/usr/bin/env docker-compose -p $PROJECT up -d
ExecStop=/usr/bin/env docker-compose -p $PROJECT stop


[Install]
WantedBy=multi-user.target
```


#### 3. Reload the systemd manager configuration

Run the following command to reload the systemd manager configuration

```bash
sudo systemctl daemon-reload
```

Optionally, you can enable the services to start at boot, using the following command:

```bash
sudo systemctl enable docker-compose@provider.service
```


#### 4. Start the Provider service

To start the Provider service, run the following command:

```bash
sudo systemctl start docker-compose@provider.service
```


#### 5. Check the service's status

Check the status of the service by running the following command. The output of the command should be similar to the one presented here.

```bash
$ sudo systemctl status docker-compose@provider.service
● docker-compose@provider.service - provider service with docker compose
     Loaded: loaded (/etc/systemd/system/docker-compose@provider.service; disabled; vendor preset: enabled)
     Active: active (exited) since Wed 2023-06-14 09:41:53 UTC; 20s ago
    Process: 4118 ExecStartPre=/usr/bin/env docker-compose -p $PROJECT pull (code=exited, status=0/SUCCESS)
    Process: 4126 ExecStart=/usr/bin/env docker-compose -p $PROJECT up -d (code=exited, status=0/SUCCESS)
   Main PID: 4126 (code=exited, status=0/SUCCESS)
        CPU: 93ms

Jun 14 09:41:52 testvm systemd[1]: Starting provider service with docker compose...
Jun 14 09:41:52 testvm env[4118]:  provider Pulling
Jun 14 09:41:53 testvm env[4118]:  provider Pulled
Jun 14 09:41:53 testvm env[4126]:  Container provider  Created
Jun 14 09:41:53 testvm env[4126]:  Container provider  Starting
Jun 14 09:41:53 testvm env[4126]:  Container provider  Started
Jun 14 09:41:53 testvm systemd[1]: Finished provider service with docker compose.
```


#### 6. Confirm the Provider is accessible

Once started, the Provider service is accessible on `localhost` port 8030/tcp. Run the following command to access the Provider. The output should be similar to the one displayed here.

```bash
$ curl localhost:8030
{"chainIds":[5,80001],"providerAddresses":{"5":"0x00c6A0BC5cD0078d6Cd0b659E8061B404cfa5704","80001":"0x4256Df50c94D9a7e04610976cde01aED91eB531E"},"serviceEndpoints":{"computeDelete":["DELETE","/api/services/compute"],"computeEnvironments":["GET","/api/services/computeEnvironments"],"computeResult":["GET","/api/services/computeResult"],"computeStart":["POST","/api/services/compute"],"computeStatus":["GET","/api/services/compute"],"computeStop":["PUT","/api/services/compute"],"create_auth_token":["GET","/api/services/createAuthToken"],"decrypt":["POST","/api/services/decrypt"],"delete_auth_token":["DELETE","/api/services/deleteAuthToken"],"download":["GET","/api/services/download"],"encrypt":["POST","/api/services/encrypt"],"fileinfo":["POST","/api/services/fileinfo"],"initialize":["GET","/api/services/initialize"],"initializeCompute":["POST","/api/services/initializeCompute"],"nonce":["GET","/api/services/nonce"],"validateContainer":["POST","/api/services/validateContainer"]},"software":"Provider","version":"2.0.2"}
```


#### 7. Check Provider service logs

If needed, use docker CLI to check provider service logs.

First, identify the container id:

```bash
$ docker ps
CONTAINER ID   IMAGE                              COMMAND                  CREATED          STATUS              PORTS                                       NAMES
594415b13f8c   oceanprotocol/provider-py:v2.0.2   "/ocean-provider/doc…"   12 minutes ago   Up About a minute   0.0.0.0:8030->8030/tcp, :::8030->8030/tcp   provider

```

Then, check the logs from the Provider's docker container:

```bash
$ docker logs --follow provider
[2023-06-14 09:31:02 +0000] [8] [INFO] Starting gunicorn 20.0.4
[2023-06-14 09:31:02 +0000] [8] [INFO] Listening at: http://0.0.0.0:8030 (8)
[2023-06-14 09:31:02 +0000] [8] [INFO] Using worker: sync
[2023-06-14 09:31:02 +0000] [10] [INFO] Booting worker with pid: 10
2023-06-14 09:31:02 594415b13f8c rlp.codec[10] DEBUG Consider installing rusty-rlp to improve pyrlp performance with a rust based backend
2023-06-14 09:31:12 594415b13f8c ocean_provider.run[10] INFO incoming request = http, GET, 172.18.0.1, /?
2023-06-14 09:31:12 594415b13f8c ocean_provider.run[10] INFO root endpoint called
2023-06-14 09:31:12 594415b13f8c ocean_provider.run[10] INFO root endpoint response = <Response 1031 bytes [200 OK]>
[2023-06-14 09:41:53 +0000] [8] [INFO] Starting gunicorn 20.0.4
[2023-06-14 09:41:53 +0000] [8] [INFO] Listening at: http://0.0.0.0:8030 (8)
[2023-06-14 09:41:53 +0000] [8] [INFO] Using worker: sync
[2023-06-14 09:41:53 +0000] [10] [INFO] Booting worker with pid: 10
2023-06-14 09:41:54 594415b13f8c rlp.codec[10] DEBUG Consider installing rusty-rlp to improve pyrlp performance with a rust based backend
2023-06-14 09:42:40 594415b13f8c ocean_provider.run[10] INFO incoming request = http, GET, 172.18.0.1, /?
2023-06-14 09:42:40 594415b13f8c ocean_provider.run[10] INFO root endpoint called
2023-06-14 09:42:40 594415b13f8c ocean_provider.run[10] INFO root endpoint response = <Response 1031 bytes [200 OK]>

```


## Deploying Provider using Kubernetes with Docker Engine


In this example, we will run Provider as a Kubernetes deployment resource. We will deploy Provider for two chains: Goerli (Ethereum test network) and Mumbai (Polygon test network). Therefore, please note that in the following configuration files,  "5" and "80001" are the chain IDs for Goerli and Mumbai respectively.

### Prerequisites

* A server for hosting Ocean Marketplace. See [this guide](setup-server.md) for how to create a server;
* Kubernetes with Docker Engine is installed and configured on the server. See [this chapter](setup-server.md#install-kubernetes-with-docker-engine) for information on installing Kubernetes.
* The RPC URLs and API keys for each of the networks to which the Provider will be connected. See[ this guide](https://app.gitbook.com/o/mTcjMqA4ylf55anucjH8/s/BTXXhmDGzR0Xgj13fyfM/\~/changes/548/developers/obtaining-api-keys-for-blockchain-access) for how to obtain the URL and the API key.
* The private key that will be used by Provider to encrypt/decrypt URLs.
* Aquarius is up and running

### Steps

The steps to deploy the Provider in Kubernetes are:

[1. Create a YAML file for Provider configuration.](deploying-provider.md#1-create-a-yaml-file-for-provider-configuration)

[2. Deploy the configuration.](deploying-provider.md#2.-deploy-the-configuration)

[3. Create a Kubernetes service.](deploying-provider.md#3.-create-a-kubernetes-service)


#### 1. Create a YAML file for Provider configuration.

From a terminal window, create a YAML file (in our example the file is named provider-deploy.yaml) then copy and paste the following content. Check the comments in the file and replace the fields with the specific values of your implementation (RPC URLs, the private key etc.).

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: provider
  name: provider
spec:
  progressDeadlineSeconds: 2147483647
  replicas: 1
  revisionHistoryLimit: 2147483647
  selector:
    matchLabels:
      app: provider
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      labels:
        app: provider
    spec:
      containers:
      - env:
        - name: ARTIFACTS_PATH
          value: /ocean-provider/artifacts
        - name: NETWORK_URL
          value: |
            {"5":"https://goerli.infura.io/v3/<your INFURA project id>","80001":"https://polygon-mumbai.infura.io/v3/<your INFURA project id>"}
        - name: PROVIDER_PRIVATE_KEY
          value: |
            {"5":"<your private key>","80001":"<your private key>"}
        - name: LOG_LEVEL
          value: DEBUG
        - name: OCEAN_PROVIDER_URL
          value: http://0.0.0.0:8030
        - name: OCEAN_PROVIDER_WORKERS
          value: "4"
        - name: IPFS_GATEWAY
          value: < your IPFS gateway >
        - name: OCEAN_PROVIDER_TIMEOUT
          value: "9000"
        - name: OPERATOR_SERVICE_URL
          value: < Operator service URL>
        - name: AQUARIUS_URL
          value: < Aquarius URL >
        - name: UNIVERSAL_PRIVATE_KEY
          value: <your universal private key>
        - name: REQUEST_TIMEOUT
          value: "10"
        image: oceanprotocol/provider-py:latest => (check on https://hub.docker.com/r/oceanprotocol/provider-py for specific tag)
        imagePullPolicy: Always
        name: provider
        ports:
        - containerPort: 8030
          protocol: TCP
        resources:
          limits:
            cpu: 500m
            memory: 700Mi
          requests:
            cpu: 500m
            memory: 700Mi
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      terminationGracePeriodSeconds: 30
```

Tip: before deployment, you can [validate](https://github.com/instrumenta/kubeval) the yaml file.


#### 2. Deploy the configuration

Deploy the configuration in Kubernetes using the following commands.

```bash
kubectl config set-context --current --namespace ocean
kubectl apply -f provider-deploy.yaml
deployment.apps/provider created

kubectl get pod -l app=provider
NAME                        READY   STATUS    RESTARTS   AGE
provider-865cb8cf9d-r9xm4   1/1     Running   0          67s
```


#### 3. Create a Kubernetes service

The next step is to create a Kubernetes service (eg. ClusterIP, NodePort, Loadbalancer, ExternalName) for this deployment, depending on the environment specifications. Follow [this link](https://kubernetes.io/docs/concepts/services-networking/service/) for details on how to create a Kubernetes service.


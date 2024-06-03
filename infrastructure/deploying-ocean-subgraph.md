# Deploying Ocean Subgraph

### About Ocean Subgraph

Ocean subgraph allows querying the datatoken, data NFT, and all event information using GraphQL. Hosting the Ocean subgraph saves the cost and time required in querying the data directly from the blockchain. The steps in this tutorial will explain how to host Ocean subgraph for the EVM-compatible chains supported by Ocean Protocol.

Ocean Subgraph is deployed on top of [graph-node](https://github.com/graphprotocol/graph-node), therefore, in this document, we will show first how to deploy graph-node - either using Docker Engine or Kubernetes - and then how to install Ocean Subgraph on the graph-node system.

## Deploying Graph-node using Docker Engine and Docker Compose

### Prerequisites

* A server for hosting Graph-node. See [this guide](setup-server.md) for how to create a server;
* Docker Compose and Docker Engine are installed and configured on the server. See [this guide](setup-server.md#install-docker-engine-and-docker-compose) for how to install these products.
* The RPC URLs and API keys for each of the networks to which Ocean Subgraph will be connected. See [this guide](../developers/obtaining-api-keys-for-blockchain-access.md) for how to obtain the URL and the API key.

### Steps

1. [Create the /etc/docker/compose/graph-node/docker-compose.yml file](deploying-ocean-subgraph.md#1-create-the-etcdockercomposegraph-nodedocker-composeyml-file)
2. [Create the /etc/systemd/system/docker-compose@graph-node.service file](deploying-ocean-subgraph.md#2-create-the-etcsystemdsystemdocker-composegraph-nodeservice-file)
3. [Reload the systemd manager configuration](deploying-ocean-subgraph.md#3.-reload-the-systemd-manager-configuration)
4. [Start the Ocean Subgraph service](deploying-ocean-subgraph.md#4-deploy-ocean-subgraph)
5. [Check the service's status](deploying-ocean-subgraph.md#5.-check-the-services-status)
6. [Check Ocean Subgraph's service logs](deploying-ocean-subgraph.md#6-check-graph-node-service-logs)

#### 1. Create the /etc/docker/compose/graph-node/docker-compose.yml file

From a terminal console, create the _/etc/docker/compose/graph-node/docker-compose.yml_ file, then copy and paste the following content to it (. Check the comments in the file and replace the fields with the specific values of your implementation.

_/etc/docker/compose/graph-node/docker-compose.yml_ (annotated - example for `sepolia` network)

```yaml
version: '3'
services:
  graph-node:
    image: graphprotocol/graph-node:v0.28.2
    container_name: graph-node
    restart: on-failure
    ports:
      - '8000:8000'
      - '8020:8020'
      - '8030:8030'
      - '8040:8040'
    depends_on:
      - ipfs
      - postgres-graph
    environment:
      postgres_host: postgres-graph
      postgres_user: graph-node
      postgres_pass: < password >
      postgres_db: sepolia
      ipfs: 'ipfs:5001'
      ethereum: 'sepolia:https://sepolia.infura.io/v3/<API-KEY>'
      GRAPH_LOG: info
  ipfs:
    image: ipfs/go-ipfs:v0.4.23
    container_name: ipfs
    restart: on-failure
    ports:
      - '5001:5001'
    volumes:
      - ipfs-graph-node:/data/ipfs
  postgres-graph:
    image: postgres:15.3
    container_name: postgres
    restart: on-failure
    ports:
      - '5432:5432'
    command: ["postgres", "-cshared_preload_libraries=pg_stat_statements"]
    environment:
      POSTGRES_USER: graph-node
      POSTGRES_PASSWORD: < password >
      POSTGRES_DB: sepolia
    volumes:
      - pgdata-graph-node:/var/lib/postgresql/data
volumes:
  pgdata-graph-node:
    driver: local
  ipfs-graph-node:
    driver: local
```

#### 2. Create the /etc/systemd/system/docker-compose@graph-node.service file

Create the _/etc/systemd/system/docker-compose@graph-node.service_ file then copy and paste the following content to it. This example file could be customized if needed.

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
ExecStopPost=/usr/bin/env docker-compose -p $PROJECT down


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
sudo systemctl enable docker-compose@graph-node.service
```

#### 4. Start graph-node service

To start the Ocean Subgraph service, run the following command:

```bash
sudo systemctl start docker-compose@graph-node.service
```

#### 5. Check the service's status

Check the status of the service by running the following command. The output of the command should be similar to the one presented here.

```bash
$ sudo systemctl status docker-compose@graph-node.service
● docker-compose@graph-node.service - graph-node service with docker compose
     Loaded: loaded (/etc/systemd/system/docker-compose@graph-node.service; disabled; vendor preset: enabled)
     Active: active (exited) since Sun 2023-06-25 17:05:25 UTC; 6s ago
    Process: 4878 ExecStartPre=/usr/bin/env docker-compose -p $PROJECT pull (code=exited, status=0/SUCCESS)
    Process: 4887 ExecStart=/usr/bin/env docker-compose -p $PROJECT up -d (code=exited, status=0/SUCCESS)
   Main PID: 4887 (code=exited, status=0/SUCCESS)
        CPU: 123ms

Jun 25 17:05:24 testvm env[4887]:  Container ipfs  Created
Jun 25 17:05:24 testvm env[4887]:  Container graph-node  Creating
Jun 25 17:05:24 testvm env[4887]:  Container graph-node  Created
Jun 25 17:05:24 testvm env[4887]:  Container ipfs  Starting
Jun 25 17:05:24 testvm env[4887]:  Container postgres  Starting
Jun 25 17:05:24 testvm env[4887]:  Container ipfs  Started
Jun 25 17:05:25 testvm env[4887]:  Container postgres  Started
Jun 25 17:05:25 testvm env[4887]:  Container graph-node  Starting
Jun 25 17:05:25 testvm env[4887]:  Container graph-node  Started
Jun 25 17:05:25 testvm systemd[1]: Finished graph-node service with docker compose.

```

#### 6. Check graph-node service logs

If needed, use docker CLI to check Ocean Subgraph service logs.

First, check the container status

```bash
$ docker ps --format "table {{.Image}}\t{{.Ports}}\t{{.Names}}\t{{.Status}}"
IMAGE                              PORTS                                                                                                                                                                                  NAMES        STATUS
graphprotocol/graph-node:v0.28.2   0.0.0.0:8000->8000/tcp, :::8000->8000/tcp, 0.0.0.0:8020->8020/tcp, :::8020->8020/tcp, 0.0.0.0:8030->8030/tcp, :::8030->8030/tcp, 0.0.0.0:8040->8040/tcp, :::8040->8040/tcp, 8001/tcp   graph-node   Up 55 minutes
ipfs/go-ipfs:v0.4.23               4001/tcp, 8080-8081/tcp, 0.0.0.0:5001->5001/tcp, :::5001->5001/tcp                                                                                                                     ipfs         Up 55 minutes
postgres:15.3                      0.0.0.0:5432->5432/tcp, :::5432->5432/tcp                                                                                                                                              postgres     Up 55 minutes
```

Then, check the logs of the Ocean Subgraph docker container:

```bash
docker logs graph-node  [--follow]
```

## Deploying graph-node using Kubernetes

In this example, we will deploy graph-node as a Kubernetes deployment service. [graph-node](https://github.com/graphprotocol/graph-node) has the following dependencies: PostgreSQL and IPFS.

### Prerequisites:

* A server for hosting graph-node. See [this guide](setup-server.md) for how to create a server;
* Kubernetes with Docker Engine is installed and configured on the server. See [this chapter](setup-server.md#install-kubernetes-with-docker-engine) for information on installing Kubernetes.
* The RPC URLs and API keys for each of the networks to which the Provider will be connected. See [this guide](../developers/obtaining-api-keys-for-blockchain-access.md) for how to obtain the URL and the API key.

### Steps

1. [Deploy PostgreSQL](deploying-ocean-subgraph.md#1.-deploy-postgresql)
2. [Deploy IPFS](deploying-ocean-subgraph.md#2.-deploy-ipfs)
3. [Deploy Graph-node](deploying-ocean-subgraph.md#deploy-graph-node)

#### 1. Deploy PostgreSQL

It is recommended to deploy PostgreSQL as helm chart.

References: [https://github.com/bitnami/charts/tree/main/bitnami/postgresql/#installing-the-chart](https://github.com/bitnami/charts/tree/main/bitnami/postgresql/#installing-the-chart)

Once PostgreSQL pods are running, a database must be created: eg. `sepolia.`

#### 2. Deploy IPFS

The following template can be customized to deploy IPFS statefulset and service.

```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  labels:
    app: ipfs
  name: ipfs
spec:
  podManagementPolicy: OrderedReady
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app: ipfs
  serviceName: ipfs
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: ipfs
    spec:
      containers:
      - image: ipfs/go-ipfs:v0.4.22
        imagePullPolicy: IfNotPresent
        livenessProbe:
          failureThreshold: 3
          httpGet:
            path: /debug/metrics/prometheus
            port: api
            scheme: HTTP
          initialDelaySeconds: 15
          periodSeconds: 3
          successThreshold: 1
          timeoutSeconds: 1
        name: s1-ipfs
        ports:
        - containerPort: 5001
          name: api
          protocol: TCP
        - containerPort: 8080
          name: gateway
          protocol: TCP
        readinessProbe:
          failureThreshold: 3
          httpGet:
            path: /debug/metrics/prometheus
            port: api
            scheme: HTTP
          initialDelaySeconds: 15
          periodSeconds: 3
          successThreshold: 1
          timeoutSeconds: 1
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
        volumeMounts:
        - mountPath: /data/ipfs
          name: ipfs-storage
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      securityContext:
        fsGroup: 1000
        runAsUser: 1000
      terminationGracePeriodSeconds: 30
  updateStrategy:
    rollingUpdate:
      partition: 0
    type: RollingUpdate
  volumeClaimTemplates:
  - apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      creationTimestamp: null
      name: ipfs-storage
    spec:
      accessModes:
      - ReadWriteOnce
      resources:
        requests:
          storage: 1G
      volumeMode: Filesystem
    status:
      phase: Pending
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: ipfs
  name: ipfs
spec:
  clusterIP:
  clusterIPs:
  ipFamilies:
  - IPv4
  ipFamilyPolicy: SingleStack
  ports:
  - name: api
    port: 5001
  - name: gateway
    port: 8080
  selector:
    app: ipf
```

#### Deploy Graph-node

The following annotated templated can be customized to deploy graph-node deployment and service:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
  labels:
    app: sepolia-graph-node
  name: sepolia-graph-node
spec:
  progressDeadlineSeconds: 600
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      app: sepolia-graph-node
  strategy:
    rollingUpdate:
      maxSurge: 25%
      maxUnavailable: 25%
    type: RollingUpdate
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: sepolia-graph-node
    spec:
      containers:
      - env:
        - name: ipfs
          value: ipfs.<namespace>.svc.cluster.local:5001
        - name: postgres_host
          value: postgresql.<namespace>.svc.cluster.local
        - name: postgres_user
          value: < postgresql user >
        - name: postgres_pass
          value: < postgresql database password >
        - name: postgres_db
          value: < postgresql database >
        - name: ethereum
          value: sepolia:https://sepolia.infura.io/v3/< INFURA ID>
        - name: GRAPH_KILL_IF_UNRESPONSIVE
          value: "true"
        image: graphprotocol/graph-node:v0.28.2
        imagePullPolicy: IfNotPresent
        livenessProbe:
          failureThreshold: 3
          httpGet:
            path: /
            port: 8000
            scheme: HTTP
          initialDelaySeconds: 20
          periodSeconds: 10
          successThreshold: 1
          timeoutSeconds: 1
        name: sepolia-graph-node
        ports:
        - containerPort: 8000
          name: graphql
          protocol: TCP
        - containerPort: 8020
          name: jsonrpc
          protocol: TCP
        - containerPort: 8030
          name: indexnode
          protocol: TCP
        - containerPort: 8040
          name: metrics
          protocol: TCP
        readinessProbe:
          failureThreshold: 3
          httpGet:
            path: /
            port: 8000
            scheme: HTTP
          initialDelaySeconds: 20
          periodSeconds: 10
          successThreshold: 1
          timeoutSeconds: 1
        resources:
          limits:
            cpu: "2"
            memory: 1536Mi
          requests:
            cpu: 1500m
            memory: 1536Mi
        terminationMessagePath: /dev/termination-log
        terminationMessagePolicy: File
      dnsPolicy: ClusterFirst
      restartPolicy: Always
      schedulerName: default-scheduler
      terminationGracePeriodSeconds: 30
---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: sepolia-graph-node
  name:  sepolia-graph-node
spec:
  clusterIP:
  clusterIPs:
  internalTrafficPolicy: Cluster
  ipFamilies:
  - IPv4
  ipFamilyPolicy: SingleStack
  ports:
  - name: graphql
    port: 8000
  - name: jsonrpc
    port: 8020
  - name: indexnode
    port: 8030
  - name: metrics
    port: 8040
  selector:
    app: sepolia-graph-nodeyam
```

## Deploy Ocean Subgraph

After you deployed graph-node, either using Kubernetes or Docker Compose, you can proceed to deploy Ocean Subgraph on top of it.

### Prerequisites

* graph-node up-and-running

### Steps

1. [Install Node.js locally](deploying-ocean-subgraph.md#1.-install-node.js-locally)
2. [Download and extract Ocean-subgraph](#2.-download-and-extract-ocean-subgraph)

#### 1. Install Node.js locally

To install Node.js locally, please refer to this [link ](https://nodejs.org/en/download)for instructions.

#### 2. Download and extract Ocean-subgraph

Download and extract [Ocean-subgraph](https://github.com/oceanprotocol/ocean-subgraph) (check [here](https://github.com/oceanprotocol/ocean-subgraph/releases) the available releases).

#### 3. Install dependencies

From the directory where Ocean subgraph was extracted, run the following command:

```bash
npm i
```

#### 4. Deploy Ocean Subgraph

In the following example, we are deploying on Ocean Subgraph on graph-node running for `sepolia` testnet.

Note: for `ocean-subgraph` deployment in the Kubernetes environment, both `graph-node` and `ipfs` services must be locally forwarded using `kubectl port-forward` command.

Run the following command:

```bash
$ npm run quickstart:sepolia 

> ocean-subgraph@3.0.8 quickstart:sepolia
> node ./scripts/generatenetworkssubgraphs.js sepolia && npm run codegen && npm run create:local && npm run deploy:local

Creating subgraph.yaml for sepolia
         Adding veOCEAN
Skipping polygon
Skipping bsc
Skipping energyweb
Skipping moonriver
Skipping mainnet
Skipping polygonedge
Skipping gaiaxtestnet
Skipping alfajores
Skipping gen-x-testnet
Skipping filecointestnet

> ocean-subgraph@3.0.8 codegen
> graph codegen --output-dir src/@types

  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5
  Skip migration: Bump mapping apiVersion from 0.0.5 to 0.0.6
  Skip migration: Bump manifest specVersion from 0.0.1 to 0.0.2
  Apply migration: Bump manifest specVersion from 0.0.2 to 0.0.4
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Load contract ABI from node_modules/@oceanprotocol/contracts/artifacts/contracts/ERC721Factory.sol/ERC721Factory.json
  Load contract ABI from abis/ERC20.json
  Load contract ABI from node_modules/@oceanprotocol/contracts/artifacts/contracts/pools/FactoryRouter.sol/FactoryRouter.json
  Load contract ABI from abis/ERC20.json
  Load contract ABI from node_modules/@oceanprotocol/contracts/artifacts/contracts/ve/veAllocate.sol/veAllocate.json
  Load contract ABI from node_modules/@oceanprotocol/contracts/artifacts/contracts/ve/veOCEAN.vy/veOCEAN.json
  Load contract ABI from node_modules/@oceanprotocol/contracts/artifacts/contracts/ve/veDelegation.vy/veDelegation.json
  Load contract ABI from node_modules/@oceanprotocol/contracts/artifacts/contracts/ve/veFeeDistributor.vy/veFeeDistributor.json
  Load contract ABI from node_modules/@oceanprotocol/contracts/artifacts/contracts/df/DFRewards.sol/DFRewards.json
✔ Load contract ABIs
  Generate types for contract ABI: ERC721Factory (node_modules/@oceanprotocol/contracts/artifacts/contracts/ERC721Factory.sol/ERC721Factory.json)
  Write types to src/@types/ERC721Factory/ERC721Factory.ts
  Generate types for contract ABI: ERC20 (abis/ERC20.json)
  Write types to src/@types/ERC721Factory/ERC20.ts
  Generate types for contract ABI: FactoryRouter (node_modules/@oceanprotocol/contracts/artifacts/contracts/pools/FactoryRouter.sol/FactoryRouter.json)
  Write types to src/@types/FactoryRouter/FactoryRouter.ts
  Generate types for contract ABI: ERC20 (abis/ERC20.json)
  Write types to src/@types/FactoryRouter/ERC20.ts
  Generate types for contract ABI: veAllocate (node_modules/@oceanprotocol/contracts/artifacts/contracts/ve/veAllocate.sol/veAllocate.json)
  Write types to src/@types/veAllocate/veAllocate.ts
  Generate types for contract ABI: veOCEAN (node_modules/@oceanprotocol/contracts/artifacts/contracts/ve/veOCEAN.vy/veOCEAN.json)
  Write types to src/@types/veOCEAN/veOCEAN.ts
  Generate types for contract ABI: veDelegation (node_modules/@oceanprotocol/contracts/artifacts/contracts/ve/veDelegation.vy/veDelegation.json)
  Write types to src/@types/veDelegation/veDelegation.ts
  Generate types for contract ABI: veFeeDistributor (node_modules/@oceanprotocol/contracts/artifacts/contracts/ve/veFeeDistributor.vy/veFeeDistributor.json)
  Write types to src/@types/veFeeDistributor/veFeeDistributor.ts
  Generate types for contract ABI: DFRewards (node_modules/@oceanprotocol/contracts/artifacts/contracts/df/DFRewards.sol/DFRewards.json)
  Write types to src/@types/DFRewards/DFRewards.ts
✔ Generate types for contract ABIs
  Generate types for data source template ERC20Template
  Generate types for data source template ERC721Template
  Generate types for data source template Dispenser
  Generate types for data source template FixedRateExchange
  Write types for templates to src/@types/templates.ts
✔ Generate types for data source templates
  Load data source template ABI from node_modules/@oceanprotocol/contracts/artifacts/contracts/templates/ERC20Template.sol/ERC20Template.json
  Load data source template ABI from node_modules/@oceanprotocol/contracts/artifacts/contracts/templates/ERC20TemplateEnterprise.sol/ERC20TemplateEnterprise.json
  Load data source template ABI from abis/ERC20.json
  Load data source template ABI from node_modules/@oceanprotocol/contracts/artifacts/contracts/utils/ERC20Roles.sol/ERC20Roles.json
  Load data source template ABI from node_modules/@oceanprotocol/contracts/artifacts/contracts/templates/ERC721Template.sol/ERC721Template.json
  Load data source template ABI from node_modules/@oceanprotocol/contracts/artifacts/contracts/utils/ERC721RolesAddress.sol/ERC721RolesAddress.json
  Load data source template ABI from abis/ERC20.json
  Load data source template ABI from node_modules/@oceanprotocol/contracts/artifacts/contracts/pools/dispenser/Dispenser.sol/Dispenser.json
  Load data source template ABI from abis/ERC20.json
  Load data source template ABI from node_modules/@oceanprotocol/contracts/artifacts/contracts/pools/fixedRate/FixedRateExchange.sol/FixedRateExchange.json
  Load data source template ABI from abis/ERC20.json
✔ Load data source template ABIs
  Generate types for data source template ABI: ERC20Template > ERC20Template (node_modules/@oceanprotocol/contracts/artifacts/contracts/templates/ERC20Template.sol/ERC20Template.json)
  Write types to src/@types/templates/ERC20Template/ERC20Template.ts
  Generate types for data source template ABI: ERC20Template > ERC20TemplateEnterprise (node_modules/@oceanprotocol/contracts/artifacts/contracts/templates/ERC20TemplateEnterprise.sol/ERC20TemplateEnterprise.json)
  Write types to src/@types/templates/ERC20Template/ERC20TemplateEnterprise.ts
  Generate types for data source template ABI: ERC20Template > ERC20 (abis/ERC20.json)
  Write types to src/@types/templates/ERC20Template/ERC20.ts
  Generate types for data source template ABI: ERC20Template > ERC20Roles (node_modules/@oceanprotocol/contracts/artifacts/contracts/utils/ERC20Roles.sol/ERC20Roles.json)
  Write types to src/@types/templates/ERC20Template/ERC20Roles.ts
  Generate types for data source template ABI: ERC721Template > ERC721Template (node_modules/@oceanprotocol/contracts/artifacts/contracts/templates/ERC721Template.sol/ERC721Template.json)
  Write types to src/@types/templates/ERC721Template/ERC721Template.ts
  Generate types for data source template ABI: ERC721Template > ERC721RolesAddress (node_modules/@oceanprotocol/contracts/artifacts/contracts/utils/ERC721RolesAddress.sol/ERC721RolesAddress.json)
  Write types to src/@types/templates/ERC721Template/ERC721RolesAddress.ts
  Generate types for data source template ABI: ERC721Template > ERC20 (abis/ERC20.json)
  Write types to src/@types/templates/ERC721Template/ERC20.ts
  Generate types for data source template ABI: Dispenser > Dispenser (node_modules/@oceanprotocol/contracts/artifacts/contracts/pools/dispenser/Dispenser.sol/Dispenser.json)
  Write types to src/@types/templates/Dispenser/Dispenser.ts
  Generate types for data source template ABI: Dispenser > ERC20 (abis/ERC20.json)
  Write types to src/@types/templates/Dispenser/ERC20.ts
  Generate types for data source template ABI: FixedRateExchange > FixedRateExchange (node_modules/@oceanprotocol/contracts/artifacts/contracts/pools/fixedRate/FixedRateExchange.sol/FixedRateExchange.json)
  Write types to src/@types/templates/FixedRateExchange/FixedRateExchange.ts
  Generate types for data source template ABI: FixedRateExchange > ERC20 (abis/ERC20.json)
  Write types to src/@types/templates/FixedRateExchange/ERC20.ts
✔ Generate types for data source template ABIs
✔ Load GraphQL schema from schema.graphql
  Write types to src/@types/schema.ts
✔ Generate types for GraphQL schema

Types generated successfully


> ocean-subgraph@3.0.8 create:local
> graph create oceanprotocol/ocean-subgraph --node http://127.0.0.1:8020

Created subgraph: oceanprotocol/ocean-subgraph

> ocean-subgraph@3.0.8 deploy:local
> graph deploy oceanprotocol/ocean-subgraph subgraph.yaml -l $npm_package_version --debug --ipfs http://127.0.0.1:5001 --node http://127.0.0.1:8020

  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping apiVersion from 0.0.4 to 0.0.5
  Skip migration: Bump mapping apiVersion from 0.0.5 to 0.0.6
  Skip migration: Bump manifest specVersion from 0.0.1 to 0.0.2
  Skip migration: Bump manifest specVersion from 0.0.2 to 0.0.4
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Compile data source: ERC721Factory => build/ERC721Factory/ERC721Factory.wasm
  Compile data source: FactoryRouter => build/FactoryRouter/FactoryRouter.wasm
  Compile data source: veAllocate => build/veAllocate/veAllocate.wasm
  Compile data source: veOCEAN => build/veOCEAN/veOCEAN.wasm
  Compile data source: veDelegation => build/veDelegation/veDelegation.wasm
  Compile data source: veFeeDistributor => build/veFeeDistributor/veFeeDistributor.wasm
  Compile data source: DFRewards => build/DFRewards/DFRewards.wasm
  Compile data source template: ERC20Template => build/templates/ERC20Template/ERC20Template.wasm
  Compile data source template: ERC721Template => build/templates/ERC721Template/ERC721Template.wasm
  Compile data source template: Dispenser => build/templates/Dispenser/Dispenser.wasm
  Compile data source template: FixedRateExchange => build/templates/FixedRateExchange/FixedRateExchange.wasm
✔ Compile subgraph
  Copy schema file build/schema.graphql
  Write subgraph file build/ERC721Factory/node_modules/@oceanprotocol/contracts/artifacts/contracts/ERC721Factory.sol/ERC721Factory.json
  Write subgraph file build/ERC721Factory/abis/ERC20.json
  Write subgraph file build/FactoryRouter/node_modules/@oceanprotocol/contracts/artifacts/contracts/pools/FactoryRouter.sol/FactoryRouter.json
  Write subgraph file build/FactoryRouter/abis/ERC20.json
  Write subgraph file build/veAllocate/node_modules/@oceanprotocol/contracts/artifacts/contracts/ve/veAllocate.sol/veAllocate.json
  Write subgraph file build/veOCEAN/node_modules/@oceanprotocol/contracts/artifacts/contracts/ve/veOCEAN.vy/veOCEAN.json
  Write subgraph file build/veDelegation/node_modules/@oceanprotocol/contracts/artifacts/contracts/ve/veDelegation.vy/veDelegation.json
  Write subgraph file build/veFeeDistributor/node_modules/@oceanprotocol/contracts/artifacts/contracts/ve/veFeeDistributor.vy/veFeeDistributor.json
  Write subgraph file build/DFRewards/node_modules/@oceanprotocol/contracts/artifacts/contracts/df/DFRewards.sol/DFRewards.json
  Write subgraph file build/ERC20Template/node_modules/@oceanprotocol/contracts/artifacts/contracts/templates/ERC20Template.sol/ERC20Template.json
  Write subgraph file build/ERC20Template/node_modules/@oceanprotocol/contracts/artifacts/contracts/templates/ERC20TemplateEnterprise.sol/ERC20TemplateEnterprise.json
  Write subgraph file build/ERC20Template/abis/ERC20.json
  Write subgraph file build/ERC20Template/node_modules/@oceanprotocol/contracts/artifacts/contracts/utils/ERC20Roles.sol/ERC20Roles.json
  Write subgraph file build/ERC721Template/node_modules/@oceanprotocol/contracts/artifacts/contracts/templates/ERC721Template.sol/ERC721Template.json
  Write subgraph file build/ERC721Template/node_modules/@oceanprotocol/contracts/artifacts/contracts/utils/ERC721RolesAddress.sol/ERC721RolesAddress.json
  Write subgraph file build/ERC721Template/abis/ERC20.json
  Write subgraph file build/Dispenser/node_modules/@oceanprotocol/contracts/artifacts/contracts/pools/dispenser/Dispenser.sol/Dispenser.json
  Write subgraph file build/Dispenser/abis/ERC20.json
  Write subgraph file build/FixedRateExchange/node_modules/@oceanprotocol/contracts/artifacts/contracts/pools/fixedRate/FixedRateExchange.sol/FixedRateExchange.json
  Write subgraph file build/FixedRateExchange/abis/ERC20.json
  Write subgraph manifest build/subgraph.yaml
✔ Write compiled subgraph to build/
  Add file to IPFS build/schema.graphql
                .. QmQa3a9ypCLC84prHGQdhbcGG4DHJceqADGxmZMmAAXuTz
  Add file to IPFS build/ERC721Factory/node_modules/@oceanprotocol/contracts/artifacts/contracts/ERC721Factory.sol/ERC721Factory.json
                .. QmSoG3r5vyWXqjEfKAQYjwtQcQkZCsZEcJXVFWVq1tT1dD
  Add file to IPFS build/ERC721Factory/abis/ERC20.json
                .. QmXuTbDkNrN27VydxbS2huvKRk62PMgUTdPDWkxcr2w7j2
  Add file to IPFS build/FactoryRouter/node_modules/@oceanprotocol/contracts/artifacts/contracts/pools/FactoryRouter.sol/FactoryRouter.json
                .. QmcBVA1R3yi2167UZMvV4LvG4cMHjL8ZZXmPMriCjn8DEe
  Add file to IPFS build/FactoryRouter/abis/ERC20.json
                .. QmXuTbDkNrN27VydxbS2huvKRk62PMgUTdPDWkxcr2w7j2 (already uploaded)
  Add file to IPFS build/veAllocate/node_modules/@oceanprotocol/contracts/artifacts/contracts/ve/veAllocate.sol/veAllocate.json
                .. Qmc3iwQkQAhqe1PjzTt6KZLh9rsWQvyxkFt7doj2iXv8C3
  Add file to IPFS build/veOCEAN/node_modules/@oceanprotocol/contracts/artifacts/contracts/ve/veOCEAN.vy/veOCEAN.json
                .. QmahFjirJqiwKpytFZ9CdE92LdPGBUDZs6AWpsrH2wn1VP
  Add file to IPFS build/veDelegation/node_modules/@oceanprotocol/contracts/artifacts/contracts/ve/veDelegation.vy/veDelegation.json
                .. QmfU6kZ5sksLdj3q88n7SUP63C1cnhQjU8vuMmRYwf2v5r
  Add file to IPFS build/veFeeDistributor/node_modules/@oceanprotocol/contracts/artifacts/contracts/ve/veFeeDistributor.vy/veFeeDistributor.json
                .. QmVU51oBr62D4UFXTwnMcbzuBBAAeQssqmqM9jic7A6L3v
  Add file to IPFS build/DFRewards/node_modules/@oceanprotocol/contracts/artifacts/contracts/df/DFRewards.sol/DFRewards.json
                .. QmcckRMahzpL7foEFGpWfkDBsyoWbNRfLC32uFq8ceUV3a
  Add file to IPFS build/ERC721Factory/ERC721Factory.wasm
                .. QmVfDAgZdKWxMuNfT7kso1LbFre2xhYbEeHBGm3gH3R9oE
  Add file to IPFS build/FactoryRouter/FactoryRouter.wasm
                .. QmYCC9AcaYw3nGSqNXNFHVsuB67FQEyZ8twRjRXrprcgyp
  Add file to IPFS build/veAllocate/veAllocate.wasm
                .. QmUFaYDxChi5nKEJLvHQZP1cRoqqP5k3fYSwk2JjuSceiJ
  Add file to IPFS build/veOCEAN/veOCEAN.wasm
                .. QmRYCyYKwHdSeM55vuvL1mdCooDkFQm6d2TQ7iK2N1qgur
  Add file to IPFS build/veDelegation/veDelegation.wasm
                .. QmaTjRLirzfidtQTYgzxqVVD9AX9e69TN1Y8fEsNQ9AEZq
  Add file to IPFS build/veFeeDistributor/veFeeDistributor.wasm
                .. QmZCEp4yxiDyuksEjSaceogJwLMto2UGfV1KxVuJTJLTqg
  Add file to IPFS build/DFRewards/DFRewards.wasm
                .. QmRSxe52B836bdfoJbuDY4tUCawzqgkHRNxe9ucU1JdYm5
  Add file to IPFS build/ERC20Template/node_modules/@oceanprotocol/contracts/artifacts/contracts/templates/ERC20Template.sol/ERC20Template.json
                .. QmPkhFvnBbqA3You7NsK5Zsyh8kkizXUHF9pcC5V6qDJQu
  Add file to IPFS build/ERC20Template/node_modules/@oceanprotocol/contracts/artifacts/contracts/templates/ERC20TemplateEnterprise.sol/ERC20TemplateEnterprise.json
                .. QmZnogwnfr4TeBPykvmCL2oaX63AKQP1F1uBAbbfnyPAzB
  Add file to IPFS build/ERC20Template/abis/ERC20.json
                .. QmXuTbDkNrN27VydxbS2huvKRk62PMgUTdPDWkxcr2w7j2 (already uploaded)
  Add file to IPFS build/ERC20Template/node_modules/@oceanprotocol/contracts/artifacts/contracts/utils/ERC20Roles.sol/ERC20Roles.json
                .. QmTWTzg4jTx4GxGApVyxirNRTxB7QovS4bHGuWnnW8Ciz2
  Add file to IPFS build/templates/ERC20Template/ERC20Template.wasm
                .. QmUcxes5La7n9481Vf9AoQ2Mjt1CrbS7T6tDhpnfF77Uh5
  Add file to IPFS build/ERC721Template/node_modules/@oceanprotocol/contracts/artifacts/contracts/templates/ERC721Template.sol/ERC721Template.json
                .. QmPE82CiACicgu1WxEjeFrLmskiJADroQRnxH7owpK6jaP
  Add file to IPFS build/ERC721Template/node_modules/@oceanprotocol/contracts/artifacts/contracts/utils/ERC721RolesAddress.sol/ERC721RolesAddress.json
                .. Qmdhi7UK6Ww8vXH9YC3JxVUEFjTyx3XycF53rRZapVK5c3
  Add file to IPFS build/ERC721Template/abis/ERC20.json
                .. QmXuTbDkNrN27VydxbS2huvKRk62PMgUTdPDWkxcr2w7j2 (already uploaded)
  Add file to IPFS build/templates/ERC721Template/ERC721Template.wasm
                .. QmNhLws24szwpz8LM2sL6HHKc6KK4vtJwzfeZWkghuqn7Q
  Add file to IPFS build/Dispenser/node_modules/@oceanprotocol/contracts/artifacts/contracts/pools/dispenser/Dispenser.sol/Dispenser.json
                .. QmdiN7Fhw9sjoVVJgHtTtzxv5fwtFMHLNH1x1yqbswsThW
  Add file to IPFS build/Dispenser/abis/ERC20.json
                .. QmXuTbDkNrN27VydxbS2huvKRk62PMgUTdPDWkxcr2w7j2 (already uploaded)
  Add file to IPFS build/templates/Dispenser/Dispenser.wasm
                .. QmTpn9wagpmH6byjjdCBZdgypFgcw2mva3bC52nC4z3eLW
  Add file to IPFS build/FixedRateExchange/node_modules/@oceanprotocol/contracts/artifacts/contracts/pools/fixedRate/FixedRateExchange.sol/FixedRateExchange.json
                .. Qmd2ToAptK74j8pGxe8mZXfAvY3AxstgmYH8JDMAfLtAGd
  Add file to IPFS build/FixedRateExchange/abis/ERC20.json
                .. QmXuTbDkNrN27VydxbS2huvKRk62PMgUTdPDWkxcr2w7j2 (already uploaded)
  Add file to IPFS build/templates/FixedRateExchange/FixedRateExchange.wasm
                .. QmRrwwoFF33LvPhnGCGgLBLyuLizrFgD44kW9io81tPZzX
✔ Upload subgraph to IPFS

Build completed: QmVUKpgwuyDh9KgUxTzZvVNFJbdevc56YrZpZjQvu8Yp7q

Deployed to http://127.0.0.1:8000/subgraphs/name/oceanprotocol/ocean-subgraph/graphql

Subgraph endpoints:
Queries (HTTP):     http://127.0.0.1:8000/subgraphs/name/oceanprotocol/ocean-subgraph
```

Ocean Subgraph is deployed under /subgraphs/name/oceanprotocol/ocean-subgraph/. To access it from the server on which it was deployed, open a browser and go to [http://127.0.0.1:8000/subgraphs/name/oceanprotocol/ocean-subgraph/graphql](http://127.0.0.1:8000/subgraphs/name/oceanprotocol/ocean-subgraph/graphql).

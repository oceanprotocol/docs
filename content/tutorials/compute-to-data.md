---
title: Set Up a Compute-to-Data Environment
description: 
---

## Requirements

First, create a folder with the following structure:

```text
ocean/
  barge/
  operator-service/
  operator-engine/
```

Then you need the following parts:

- working [Barge](https://github.com/oceanprotocol/barge). For this setup, we will asume the Barge is installed in /ocean/barge/
- a working Kubernetes (K8s) cluster (Minikube is a good start)
- a working `kubectl` connected to the K8s cluster
- one folder (/ocean/operator-service/), in which we will download the following:
  - [postgres-configmap.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-service/main/kubernetes/postgres-configmap.yaml)
  - [postgres-storage.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-service/main/kubernetes/postgres-storage.yaml)
  - [postgres-deployment.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-service/main/kubernetes/postgres-deployment.yaml)
  - [postgres-service.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-service/main/kubernetes/postgresql-service.yaml)
  - [deployment.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-service/main/kubernetes/deployment.yaml)
- one folder (/ocean/operator-engine/), in which we will download the following:
  - [sa.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-engine/main/kubernetes/sa.yml)
  - [binding.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-engine/main/kubernetes/binding.yml)
  - [operator.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-engine/main/kubernetes/operator.yml)
  
## Customize your Operator Service deployment

The following resources need attention:

| Resource                  | Variable           | Description                                                                                            |
| ------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------ |
| `postgres-configmap.yaml` |                    | Contains secrets for the PostgreSQL deployment.                                                        |
| `deployment.yaml`         | `ALGO_POD_TIMEOUT` | Allowed time for a algorithm to run. If it exceeded this value (in minutes), it's going to get killed. |

## Customize your Operator Engine deployment

Check the [README](https://github.com/oceanprotocol/operator-engine#customize-your-operator-engine-deployment) section of operator engine to customize your deployment

## Storage class

For minikube, you can use 'standard' class.

For AWS , please make sure that your class allocates volumes in the same region and zone in which you are running your pods.

We created our own 'standard' class in AWS:

```bash
kubectl get storageclass standard -o yaml
```

```yaml
allowedTopologies:
- matchLabelExpressions:
    - key: failure-domain.beta.kubernetes.io/zone
          values:
          - us-east-1a
apiVersion: storage.k8s.io/v1
kind: StorageClass
parameters:
    fsType: ext4
    type: gp2
provisioner: kubernetes.io/aws-ebs
reclaimPolicy: Delete
volumeBindingMode: Immediate
```

Or we can use this for minikube:

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: standard
provisioner: docker.io/hostpath
reclaimPolicy: Retain
```

For more information, please visit https://kubernetes.io/docs/concepts/storage/storage-classes/

## Create namespaces

```bash
kubectl create ns ocean-operator
kubectl create ns ocean-compute
```

## Deploy Operator Service

```bash
kubectl config set-context --current --namespace ocean-operator
kubectl create -f /ocean/operator-service/postgres-configmap.yaml
kubectl create -f /ocean/operator-service/postgres-storage.yaml
kubectl create -f /ocean/operator-service/postgres-deployment.yaml
kubectl create -f /ocean/operator-service/postgresql-service.yaml
kubectl apply -f /ocean/operator-service/deployment.yaml
```

## Deploy Operator Engine

```bash
kubectl config set-context --current --namespace ocean-compute
kubectl apply -f /ocean/operator-engine/sa.yml
kubectl apply -f /ocean/operator-engine/binding.yml
kubectl apply -f /ocean/operator-engine/operator.yml
kubectl create -f /ocean/operator-service/postgres-configmap.yaml
```

## Expose Operator Service

```bash
kubectl expose deployment operator-api --namespace=ocean-operator --port=8050
```

Run a port forward or create your ingress service (not covered here):

```bash
kubectl -n ocean-operator port-forward svc/operator-api 8050
```

## Initialize database

If your cluster is running on example.com:

```bash
curl -X POST "http://example.com:8050/api/v1/operator/pgsqlinit" -H  "accept: application/json"
```

## Update Barge for local testing

Update Barge's Provider by adding or updating the `OPERATOR_SERVICE_URL` env in `/ocean/barge/compose-files/provider.yaml`

```yaml
OPERATOR_SERVICE_URL: http://example.com:8050/
```

Restart Barge with updated provider configuration

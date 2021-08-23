---
title: Minikube Compute-to-Data Environment
description: 
---

## Requirements

- functioning internet-accessable provider service
- machine capable of running compute (e.g. we used a machine with 8 CPUs, 16 GB Ram, 100GB SSD and fast internet connection)
- Ubuntu 20.04

## Install Docker and Git

```bash
sudo apt update
sudo apt install git docker.io
sudo usermod -aG docker $USER && newgrp docker
```

## Install Minikube

```bash
wget -q --show-progress https://github.com/kubernetes/minikube/releases/download/v1.22.0/minikube_1.22.0-0_amd64.deb
sudo dpkg -i minikube_1.22.0-0_amd64.deb
```

## Download and Configure Operator Service

```bash
git clone https://github.com/oceanprotocol/operator-service.git
```

Edit `operator-service/kubernetes/postgres-configmap.yaml`. Change `POSTGRES_PASSWORD` to nice long random password.

Edit `operator-service/kubernetes/deployment.yaml`. Optionally change:

- `ALGO_POD_TIMEOUT`
- add `requests_cpu`
- add `requests_memory`
- add `limits_cpu`
- add `limits_memory`

```yaml
...
    spec:
      containers:
      - env:
        - name: requests_cpu
          value: "4"
        - name: requests_memory
          value: "8Gi"
        - name: limits_cpu
          value: "8"
        - name: limits_memory
          value: "15Gi"
        - name: ALGO_POD_TIMEOUT
          value: "3600"
...
```

## Download and Configure Operator Engine

```bash
git clone https://github.com/oceanprotocol/operator-engine.git
```

Check the [README](https://github.com/oceanprotocol/operator-engine#customize-your-operator-engine-deployment) section of operator engine to customize your deployment.

At a minimum you should add your IPFS URLs or AWS settings, and add (or remove) notification URLs.

## Install kubectl

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"
echo "$(<kubectl.sha256) kubectl" | sha256sum --check

sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```

## Start Minikube

First command is imporant, and solves a [PersistentVolumeClaims problem](https://github.com/kubernetes/minikube/issues/7828). 

```bash
minikube config set kubernetes-version v1.16.0
minikube start --cni=calico --driver=docker --container-runtime=docker
```

Wait untill all the defaults are running (1/1).

```bash
watch kubectl get pods --all-namespaces
```

## Create namespaces

```bash
kubectl create ns ocean-operator
kubectl create ns ocean-compute
```

## Deploy Operator Service

```bash
kubectl config set-context --current --namespace ocean-operator
kubectl create -f operator-service/kubernetes/postgres-configmap.yaml
kubectl create -f operator-service/kubernetes/postgres-storage.yaml
kubectl create -f operator-service/kubernetes/postgres-deployment.yaml
kubectl create -f operator-service/kubernetes/postgresql-service.yaml
kubectl apply  -f operator-service/kubernetes/deployment.yaml
```

## Deploy Operator Engine

```bash
kubectl config set-context --current --namespace ocean-compute
kubectl apply  -f operator-engine/kubernetes/sa.yml
kubectl apply  -f operator-engine/kubernetes/binding.yml
kubectl apply  -f operator-engine/kubernetes/operator.yml
kubectl create -f operator-service/kubernetes/postgres-configmap.yaml
```

## Expose Operator Service

```bash
kubectl expose deployment operator-api --namespace=ocean-operator --port=8050
```

Run a port forward or create your ingress service and setup DNS and certificates (not covered here):

```bash
kubectl -n ocean-operator port-forward svc/operator-api 8050
```

Alternatively you could use another method to communicate between the C2D Environment and the provider, such as an SSH tunnel.

## Initialize database

If your minikube is running on compute.example.com:

```bash
curl -X POST "https://compute.example.com/api/v1/operator/pgsqlinit" -H  "accept: application/json"
```

## Update Provider

Update your provider service by updating the `operator_service.url` value in `config.ini`

```ini
operator_service.url = https://compute.example.com/
```

Restart your provider service.

[Watch the explanatory video for more details](https://vimeo.com/580934725)

---
title: Minikube Compute-to-Data Environment
---

# Deploying C2D

This chapter will present how to deploy the C2D component of the Ocean stack. As mentioned in the [C2D Architecture chapter](../developers/compute-to-data/#architecture-and-overview-guides), the Compute-to-Data component uses Kubernetes to orchestrate the creation and deletion of the pods in which the C2D jobs are run.

For the ones that do not have a Kubernetes environment available, we added to this guide instructions on how to install Minikube, which is a lightweight Kubernetes implementation that creates a VM on your local machine and deploys a simple cluster containing only one node. In case you have a Kubernetes environment in place, please skip directly to step 4 of this guide.



### Requirements

* Communications: a functioning internet-accessible provider service
* Hardware: a server capable of running compute jobs (e.g. we used a machine with 8 CPUs, 16 GB Ram, 100GB SSD, and a fast internet connection). See [this guide](setup-server.md) for how to create a server;
* Operating system: Ubuntu 22.04 LTS



### Steps

1. [Install Docker and Git](compute-to-data-minikube.md#install-docker-and-git)
2. [Install Minikube](compute-to-data-minikube.md#install-minikube)
3. [Start Minikube](compute-to-data-minikube.md#start-minikube)
4. [Install the Kubernetes command line tool (kubectl)](compute-to-data-minikube.md#install-the-kubernetes-command-line-tool-kubectl)
5. [Run the IPFS host (optional)](compute-to-data-minikube.md#run-the-ipfs-host-optional)
6. [Update the storage class](compute-to-data-minikube.md#update-the-storage-class)
7. [Download and Configure Operator Service](compute-to-data-minikube.md#download-and-configure-operator-service)
8. [Download and Configure Operator Engine](compute-to-data-minikube.md#download-and-configure-operator-engine)
9. [Create namespaces](compute-to-data-minikube.md#create-namespaces)
10. [Deploy Operator Service](compute-to-data-minikube.md#deploy-operator-service)
11. [Deploy Operator Engine](compute-to-data-minikube.md#deploy-operator-engine)
12. [Expose Operator Service](compute-to-data-minikube.md#expose-operator-service)
13. [Initialize the database](compute-to-data-minikube.md#initialize-database)
14. [Update Provider](compute-to-data-minikube.md#update-provider)

#### Install Docker and Git

```bash
sudo apt update
sudo apt install git docker.io
sudo usermod -aG docker $USER && newgrp docker
```

#### Install Minikube

```bash
wget -q --show-progress https://github.com/kubernetes/minikube/releases/download/v1.22.0/minikube_1.22.0-0_amd64.deb
sudo dpkg -i minikube_1.22.0-0_amd64.deb
```

#### Start Minikube

The first command is important and solves a [PersistentVolumeClaims problem](https://github.com/kubernetes/minikube/issues/7828).

```bash
minikube config set kubernetes-version v1.16.0
minikube start --cni=calico --driver=docker --container-runtime=docker
```

Depending on the number of available CPUs, RAM, and the required resources for running the job, consider adding options `--cpu`, `--memory`, and `--disk-size` to avoid runtime issues.

For other options to run minikube refer to this [link](https://minikube.sigs.k8s.io/docs/commands/start/)

#### Install the Kubernetes command line tool (kubectl)

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"
echo "$(<kubectl.sha256) kubectl" | sha256sum --check

sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
```

Wait until all the defaults are running (1/1).

```bash
watch kubectl get pods --all-namespaces
```

#### Run the IPFS host (optional)

To store the results and the logs of the C2D jobs, you can use either an AWS S3 bucket or IPFS.

In case you want to use IPFS you need to run an IPFS host, as presented below.

```bash
export ipfs_staging=~/ipfs_staging
export ipfs_data=~/ipfs_data

docker run -d --name ipfs_host -v $ipfs_staging:/export -v $ipfs_data:/data/ipfs -p 4001:4001 -p 4001:4001/udp -p 127.0.0.1:8080:8080 -p 127.0.0.1:5001:5001 ipfs/go-ipfs:latest

sudo /bin/sh -c 'echo "127.0.0.1    youripfsserver" >> /etc/hosts'

```

#### Update the storage class

The storage class is used by Kubernetes to create the temporary volumes on which the data used by the algorithm will be stored. 

Please ensure that your class allocates volumes in the same region and zone where you are running your pods.

You need to consider the storage class available for your environment.

For Minikube, you can use the default 'standard' class.

In AWS, we created our own 'standard' class:

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

For more information, please visit https://kubernetes.io/docs/concepts/storage/storage-classes/

#### Download and Configure Operator Service

Open a new terminal and run the command below.

```bash
git clone https://github.com/oceanprotocol/operator-service.git
```

Edit `operator-service/kubernetes/postgres-configmap.yaml`. Change `POSTGRES_PASSWORD` to a nice long random password.

Edit `operator-service/kubernetes/deployment.yaml`. Optionally change:

* `ALGO_POD_TIMEOUT`
* add `requests_cpu`
* add `requests_memory`
* add `limits_cpu`
* add `limits_memory`

```yaml

---
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
```

#### Download and Configure Operator Engine

```bash
git clone https://github.com/oceanprotocol/operator-engine.git
```

Check the [README](https://github.com/oceanprotocol/operator-engine#customize-your-operator-engine-deployment) section of the operator engine to customize your deployment.

At a minimum, you should add your IPFS URLs or AWS settings, and add (or remove) notification URLs.

#### Create namespaces

```bash
kubectl create ns ocean-operator
kubectl create ns ocean-compute
```

#### Deploy Operator Service

```bash
kubectl config set-context --current --namespace ocean-operator
kubectl create -f operator-service/kubernetes/postgres-configmap.yaml
kubectl create -f operator-service/kubernetes/postgres-storage.yaml
kubectl create -f operator-service/kubernetes/postgres-deployment.yaml
kubectl create -f operator-service/kubernetes/postgresql-service.yaml
kubectl apply  -f operator-service/kubernetes/deployment.yaml
```

#### Deploy Operator Engine

```bash
kubectl config set-context --current --namespace ocean-compute
kubectl apply  -f operator-engine/kubernetes/sa.yml
kubectl apply  -f operator-engine/kubernetes/binding.yml
kubectl apply  -f operator-engine/kubernetes/operator.yml
kubectl create -f operator-service/kubernetes/postgres-configmap.yaml
```

**Optional**: For production environments, it's safer to block access to metadata. To do so run the below command:

```bash
kubectl -n ocean-compute apply -f /ocean/operator-engine/kubernetes/egress.yaml
```

#### Expose Operator Service

```bash
kubectl expose deployment operator-api --namespace=ocean-operator --port=8050
```

Run a port forward or create your ingress service and setup DNS and certificates (not covered here):

```bash
kubectl -n ocean-operator port-forward svc/operator-api 8050
```

Alternatively you could use another method to communicate between the C2D Environment and the provider, such as an SSH tunnel.

#### Initialize database

If your Minikube is running on compute.example.com:

```bash
curl -X POST "https://compute.example.com/api/v1/operator/pgsqlinit" -H  "accept: application/json"
```

#### Update Provider

Update your provider service by updating the `operator_service.url` value in `config.ini`

```ini
operator_service.url = https://compute.example.com/
```

Restart your provider service.


---
title: Set Up a Compute-to-Data enviroment
description: Set Up a Compute-to-Data enviroment.
---


## Requirements

At the time of writing, we need the following:

- working [Barge](https://github.com/oceanprotocol/barge). For this setup, we will asume the Barge is installed in /ocean/barge/
- a working Kubernetes cluster (minikube is a good start)
- a working kubectl connected to the k8 cluster
- one folder (/ocean/operator-service/), in which we will download the following:
    - [postgres-configmap.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-service/develop/deploy_on_k8s/postgres-configmap.yaml)
    - [postgres-storage.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-service/develop/deploy_on_k8s/postgres-storage.yaml)
    - [postgres-deployment.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-service/develop/deploy_on_k8s/postgres-deployment.yaml)
    - [postgres-service.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-service/develop/deploy_on_k8s/postgresql-service.yaml)
    - [deployment.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-service/develop/deploy_on_k8s/deployment.yaml)
    - [role_binding.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-service/develop/deploy_on_k8s/role_binding.yaml)
    - [service_account.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-service/develop/deploy_on_k8s/service_account.yaml)
- one folder (/ocean/operator-engine/), in which we will download the following:
    - [sa.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-engine/develop/k8s_install/sa.yml)
    - [binding.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-engine/develop/k8s_install/binding.yml)
    - [operator.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-engine/develop/k8s_install/operator.yml)        
    - [computejob-crd.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-engine/develop/k8s_install/computejob-crd.yaml)
    - [workflow-crd.yaml](https://raw.githubusercontent.com/oceanprotocol/operator-engine/develop/k8s_install/workflow-crd.yaml)    

## Customize your Operator Service deployment

The following resources needs attention:

    - postgres-configmap.yaml  - contains secrets for the postgresql deployment
    - deployment.yaml - ALGO_POD_TIMEOUT = Allowed time for a algorithm to run. If it exceeded this value (in minutes), it's going to get killed

## Customize your Operator Engine deployment

The following resource needs attention:

- operator.yaml  - contains configuration variabiles
    - ACCOUNT_JSON , ACCOUNT_PASSWORD = Defines the account that is going to be used when publishing results back to OceanProtocol
    - AWS_ACCESS_KEY_ID, AWS_ACCESS_KEY_ID , AWS_REGION = S3 credidentials for the logs and output buckets
    - AWS_BUCKET_OUTPUT  = Bucket that will hold the output data (algorithm logs & algorithm output)
    - AWS_BUCKET_ADMINLOGS = Bucket that will hold the admin logs (logs from pod-configure & pod-publish)
    - STORAGE_CLASS = Storage class to use (see next section)

## Storage class

For minikube, you can use 'standard' class.

For AWS , please make sure that your class allocates volumes in the same region and zone in which you are running your pods.

We created our own 'standard' class in AWS:


kubectl get storageclass standard -o yaml


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

Or we can use this for minikube:

    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
        name: standard
    provisioner: docker.io/hostpath
    reclaimPolicy: Retain
    
    
    For more information, please visit https://kubernetes.io/docs/concepts/storage/storage-classes/
    
## Create namespaces

    kubectl create ns ocean-operator
    kubectl create ns ocean-compute



## Deploy Operator-Service


    kubectl config set-context --current --namespace ocean-operator
    kubectl create -f /ocean/operator-service/postgres-configmap.yaml
    kubectl create -f /ocean/operator-service/postgres-storage.yaml
    kubectl create -f /ocean/operator-service/postgres-deployment.yaml
    kubectl create -f /ocean/operator-service/postgresql-service.yaml
    kubectl apply -f /ocean/operator-service/deployment.yaml
    kubectl apply -f /ocean/operator-service/role_binding.yaml
    kubectl apply -f /ocean/operator-service/service_account.yaml



## Deploy Operator-Engine


    kubectl config set-context --current --namespace ocean-compute
    kubectl apply -f /ocean/operator-engine/sa.yml
    kubectl apply -f /ocean/operator-engine/binding.yml
    kubectl apply -f /ocean/operator-engine/operator.yml
    kubectl apply -f /ocean/operator-engine/computejob-crd.yaml
    kubectl apply -f /ocean/operator-engine/workflow-crd.yaml
    kubectl create -f /ocean/operator-service/postgres-configmap.yaml



## Expose Operator - Service


    kubectl expose deployment operator-api --namespace=ocean-operator --port=8050


Run a port forward or create your ingress service (not covered here):


    kubectl -n ocean-operator port-forward svc/operator-api 8050


## Initialize database

If your cluster is running on example.com:

    curl -X POST "http://example.com:8050/api/v1/operator/pgsqlinit" -H  "accept: application/json"


## Update Brizo

Update Brizo by adding or updating the OPERATOR_SERVICE_URL env  (in /ocean/barge/compose-files/brizo.yaml)

OPERATOR_SERVICE_URL: http://example.com:8050/


## Restart Barge with updated Brizo configuration

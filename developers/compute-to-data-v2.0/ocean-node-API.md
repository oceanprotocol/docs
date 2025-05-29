---
description: Compute to data version 2 (C2dv2) Node API
---

# Ocean Node API Specifications for C2D

## GET /api/services/computeEnvironments

Request payload:

```json
{
    "command": "getComputeEnvironments",
    "chainId": "8996", // optional, if not provided, the command will fetch the environments for all node supported chains
    "node": "nodeId" // optional, if not provided, the command will fetch the environments from current node
}
```

Response:

```json
[
   {
      "id":"0x4170292f983ab0ca9fcc09630d61f5c30b313a0b1a9f3708254159154cdc27fe-0xe01b9c2d93fce9b07291803394b71f948330f192c53237828406cc84e83fb1cb",
      "runningJobs":1,
      "consumerAddress":"0x7D973DAbc9a81D3faAD1c3dD3EF6dF67631C85E0",
      "platform":{
         "architecture":"x86_64",
         "os":"Ubuntu 24.04.2 LTS"
      },
      "fees":{
         "8996":[
            {
               "feeToken":"0x2473f4F7bf40ed9310838edFCA6262C17A59DF64",
               "prices":[
                  {
                     "id":"cpu",
                     "price":1
                  }
               ]
            }
         ]
      },
      "storageExpiry":604800,
      "maxJobDuration":3600,
      "resources":[
         {
            "id":"cpu",
            "total":4,
            "max":4,
            "min":1,
            "inUse":1
         },
         {
            "id":"ram",
            "total":16766418944,
            "max":16766418944,
            "min":1000000000,
            "inUse":1000000000
         },
         {
            "id":"disk",
            "total":1000000000,
            "max":1000000000,
            "min":0,
            "inUse":0
         }
      ],
      "free":{
         "maxJobDuration":60,
         "maxJobs":3,
         "resources":[
            {
               "id":"cpu",
               "max":1,
               "inUse":1
            },
            {
               "id":"ram",
               "max":1000000000,
               "inUse":1000000000
            },
            {
               "id":"disk",
               "max":1000000000,
               "inUse":0
            }
         ]
      },
      "runningfreeJobs":1
   }
]
```

## POST /api/services/freeCompute
Request payload:

```json
{
    "command": "freeStartCompute",
    "node": "nodeId", // optional, if not provided, the command will fetch the environments from current node
    "consumerAddress": "0x", // it is the consumer wallet address
    "signature": "hash", // we use the nonce as signature message and it is signed by consumer account
    "environment": "0x4170292f983ab0ca9fcc09630d61f5c30b313a0b1a9f3708254159154cdc27fe-0xe01b9c2d93fce9b07291803394b71f948330f192c53237828406cc84e83fb1cb", // selected env with hash
    "algorithm": {
      "meta": {
        "rawcode": "algorithmContent", // algorithm code can be parsed as string here
        "container": {
            "entrypoint": "python $ALGO",
            "image": "oceanprotocol/c2d_examples",
            "tag": "py-general",
            "checksum": "sha:256:aasdd" // checksum of docker image
        }
      }
    },
    "datasets": { // optional, free start compute does not require datasets, it can be triggered only with algorithm
        [
            {
                "documentId": "did:op:df45"
            }
        ]
    },
    "resources": { // optional, node will fallback to available free resources if they are not specified
        "id": "cpu",
        "amount": 2
    },
    "maxJobDuration": 60, // optional, node will fallback to free environment maxJobDuration if not specified
    "policyServer": { // optional, for session ID validation done by policy server from enterprise
        "sessionId": "abcd-89fe"
    },
    "output": { // optional
        "publishAlgorithmLog": true,
        "publishOutput": true
    }
}
```

Respose:

```json
{
    "owner": "consumerAddress",
    "jobId": "jobId",
    "dateCreated": "698765", // UNIX timestamp in milisecs
    "dateFinished": null, // it just started
    "status": 0,
    "statusText": "Job started",
    "results": [],
    "maxJobDuration": 60,
    "environment": "0x4170292f983ab0ca9fcc09630d61f5c30b313a0b1a9f3708254159154cdc27fe-0xe01b9c2d93fce9b07291803394b71f948330f192c53237828406cc84e83fb1cb"
}
```

## POST /api/services/initializeCompute

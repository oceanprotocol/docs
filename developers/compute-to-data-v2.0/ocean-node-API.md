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
Request payload


Response

```json
{
   "algorithm":{
      "validOrder":false,
      "did":"did:op:7e2d9943c58e1960d1b04ec1e62ef060f6051668ceb81415e9894fd29b38fb67",
      "serviceId":"did:op:7e2d9943c58e1960d1b04ec1e62ef060f6051668ceb81415e9894fd29b38fb67",
      "datatoken":"0x7F0960586391A2Db440f1c0571503B3a1c19fD0A",
      "chainId":8996,
      "consumerAddress":"0xe08A1dAe983BC701D05E492DB80e0144f8f4b909",
      "providerFee":{
         "providerFeeAddress":"0xe08A1dAe983BC701D05E492DB80e0144f8f4b909",
         "providerFeeToken":"0x2473f4F7bf40ed9310838edFCA6262C17A59DF64",
         "providerFeeAmount":"0",
         "providerData":"0x7b226474223a22307837463039363035383633393141324462343430663163303537313530334233613163313966443041222c226964223a2264623136346331623938316534643239373465393065363162646131323135313265363930396331303335633930386436383933336165346366616261366230227d",
         "v":27,
         "r":"0x9a047f125b9180d8adc1d56e42389075a8bd6726c44383aad03e8e85e5058c61",
         "s":"0x692d2ccb234b057c66e91217692884dc2417c3382ce96e76716e069bcd3568b0",
         "validUntil":86400
      }
   },
   "datasets":[
      {
         "validOrder":false,
         "did":"did:op:4e325bb46657ced0fbb37b80d475b54da0af3101ed161d5ae616450a35d3daa5",
         "serviceId":"did:op:4e325bb46657ced0fbb37b80d475b54da0af3101ed161d5ae616450a35d3daa5",
         "datatoken":"0x9145eAF48e8052aC112bc0cFea03df1DBB16F42B",
         "chainId":8996,
         "consumerAddress":"0xe08A1dAe983BC701D05E492DB80e0144f8f4b909",
         "providerFee":{
            "providerFeeAddress":"0xe08A1dAe983BC701D05E492DB80e0144f8f4b909",
            "providerFeeToken":"0x2473f4F7bf40ed9310838edFCA6262C17A59DF64",
            "providerFeeAmount":"0",
            "providerData":"0x7b226474223a22307839313435654146343865383035326143313132626330634665613033646631444242313646343242222c226964223a2263636233393863353064366162643562343536653864373234326264383536613137363761383930623533376332663863313062613862386131306536303235227d",
            "v":28,
            "r":"0xdfe25cbf9bad89598efeb49d64d74c6fd19419d60b77c0881b22bfbcf3ddf320",
            "s":"0x7acaf7a51b799514c44c61f0e21508e9a74bd3abb5faef2021501d37db3e8742",
            "validUntil":86400
         }
      }
   ],
   "payment":{
      "escrowAddress":"0xE4f7c64C52085A6df2c7c2972466EEf3ba3aD081",
      "payee":"0xe08A1dAe983BC701D05E492DB80e0144f8f4b909",
      "chainId":8996,
      "minLockSeconds":1500,
      "token":"0x2473f4F7bf40ed9310838edFCA6262C17A59DF64",
      "amount":"15000000000000000000"
   }
}
```

## POST /api/compute

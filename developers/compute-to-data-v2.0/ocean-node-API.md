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

## POST /api/services/compute

Payload example:

```json
"datasets":  [
  {
    "documentId": "did:op:9a0ada50a883e7e8af61fa313ff835ddf1416103ecf237eaa5bf9e8c5bfdc0d2",
    "serviceId": "ccb398c50d6abd5b456e8d7242bd856a1767a890b537c2f8c10ba8b8a10e6025",
    "transferTxId": "0xa9b907717cfb516590ae97c3dc203d06abaeb609568380bff4f0e75bc0a810be"
  }
],
"algorithm":  {
  "documentId": "did:op:e7487c1eaa91015c833d0b0ae0b766d7a14e64dd2fd039b8708aef9775aa77e2",
  "serviceId": "db164c1b981e4d2974e90e61bda121512e6909c1035c908d68933ae4cfaba6b0",
  "meta": {
    "language": "",
    "version": "0.1",
    "container": {
      "entrypoint": "node $ALGO",
      "image": "node",
      "tag": "latest",
      "checksum": "sha256:1155995dda741e93afe4b1c6ced2d01734a6ec69865cc0997daf1f4db7259a36"
    }
  },
  "transferTxId": "0x052aafc6961114216d82bd9e618109a40a5172a3d870ee0ed13d9a207b247689"
}

```

Response:

```json
[
  {
    "owner": "0x529043886F21D9bc1AE0feDb751e34265a246e47",
    "did": null,
    "jobId": "4c4e56df-f134-4a9d-9bb9-5f328cf170a4",
    "dateCreated": "1748863401.699",
    "dateFinished": null,
    "status": 40,
    "statusText": "Running algorithm",
    "results": [],
    "inputDID": null,
    "algoDID": null,
    "agreementId": null,
    "environment": "0x27bb418eca824bdc1fe31a946fcc094297282bc11fb6405612b40108f5d5c5e3-0x269eb044c415a04b372e807b5014b22a2775c07effb60d9c65b47c0569c7dce3",
    "resources": [
      { "id": "cpu", "amount": 1 },
      { "id": "ram","amount": 1000000000 },
      { "id": "disk", "amount": 0 }
    ],
    "isFree": false,
    "algoStartTimestamp": "1748863415.506",
    "algoStopTimestamp": "0",
    "maxJobDuration": 900
  }
]
```

## GET /api/services/compute

Response:

```json
[
  {
    "owner": "0x529043886F21D9bc1AE0feDb751e34265a246e47",
    "did": null,
    "jobId": "4c4e56df-f134-4a9d-9bb9-5f328cf170a4",
    "dateCreated": "1748863401.699",
    "dateFinished": null,
    "status": 40,
    "statusText": "Running algorithm",
    "results": [],
    "inputDID": null,
    "algoDID": null,
    "agreementId": null,
    "environment": "0x27bb418eca824bdc1fe31a946fcc094297282bc11fb6405612b40108f5d5c5e3-0x269eb044c415a04b372e807b5014b22a2775c07effb60d9c65b47c0569c7dce3",
    "resources": [
      { "id": "cpu", "amount": 1 },
      { "id": "ram","amount": 1000000000 },
      { "id": "disk", "amount": 0 }
    ],
    "isFree": false,
    "algoStartTimestamp": "1748863415.506",
    "algoStopTimestamp": "0",
    "maxJobDuration": 900
  }
]
```

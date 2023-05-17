# 🥞 Chapter2

We're excited that you're interested in publishing an **asset** on the Ocean Market. To get started, please connect your wallet on the Ocean Market website and follow the steps to publish your asset. Once you have successfully published your asset, you will receive a DID (Decentralized Identifier) which uniquely identifies your asset on the blockchain. Simply copy-paste your DID into the field below and click "RUN" to proceed.&#x20;

Assuming that you have provided a valid DID, you will receive a new **letter**.&#x20;

```runkit  nodeVersion="18.x.x"
var axios = require("axios")

scavenger_hunt_pass = process.env.scavenger_hunt_2
did = "Add your DID here" // did:op:fa0e8fa9550e8eb13392d6eeb9ba9f8111801b332c8d2345b350b3bc66b379d5
aquarius_url = "https://v4.aquarius.oceanprotocol.com/api/aquarius/assets/ddo"
const full_url = `${aquarius_url}/${did}`

axios.get(full_url)
.then((response) => retrivePasswordLetter())
.catch((error) => console.log("Please try again" + error))

function retrivePasswordLetter(response) {
    password_url = "https://genpass-jz71e97bclh8.runkit.sh?chapter=2"
    
    axios.get(password_url)
    .then((response) => console.log("congratulations, you are right. here is your first password letter: " + response.data))
    .catch((error) => console.log("Please try again" + error))
}

```

# 🍟 Chapter1

If you're here to interact with our smart contract, we kindly ask you to install Metamask. This popular cryptocurrency wallet will allow you to securely interact with the Ethereum blockchain. Once you have Metamask installed, copy-paste your wallet address into the variable below and hit "run" to proceed.

Assuming that you have provided a valid address, you will receive a **letter**. It is essential to save it because, at the end of the process, you will need to generate a password in order to retrieve your NFT certificate.

```runkit  nodeVersion="18.x.x"
var ethers = require("ethers")
var axios = require("axios")
wallet_address = "Add your wallet address here" // 0x8eAC3cF74fe6dC46A8ed9bF07a15F67dFbeEFdc9

if (ethers.isAddress(wallet_address))
     retrivePasswordLetter()
 else
     console.log("You are wrong. Try again!")

function retrivePasswordLetter() {
    password_url = "https://genpass-jz71e97bclh8.runkit.sh?chapter=1"
    
    axios.get(password_url)
    .then((response) => console.log("congratulations, you are right. here is your first password letter: " + response.data))
    .catch((error) => console.log("Please try again" + error))
}

```

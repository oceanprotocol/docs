# 🍷 Get your NFT certificate

By combining the letter you received in the **first chapter** with the one you received in the **second chapter**, you will obtain your **password** confirming that you have successfully completed the Ocean Academy and are now eligible to become an ambassador. Simply input your unique password in the password field bellow.

```runkit  nodeVersion="18.x.x"
var axios = require("axios")
password = "Add your password here" // r8

validation_base_url = 'https://passvalidation-e1hwuf9vdz46.runkit.sh'
const validation_url = `${validation_base_url}?password=${password}`

axios.get(validation_url)
    .then((response) => console.log(response.data))
    .catch((error) => console.log('Please try again' + error))

```

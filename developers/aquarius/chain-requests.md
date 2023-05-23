# Chain Requests

The universal Aquarius Endpoint is [`https://v4.aquarius.oceanprotocol.com`](https://v4.aquarius.oceanprotocol.com).

### Chain List

GET `/api/aquarius/chains/list`

#### Description

Get chains list

#### Curl Example

```bash
curl --location --request GET 'https://v4.aquarius.oceanprotocol.com/api/aquarius/chains/list'
```

#### Javascript Example

```runkit  nodeVersion="18.x.x"
const axios = require('axios')

const response = await axios( 'https://v4.aquarius.oceanprotocol.com/api/aquarius/chains/list')
console.log(response.status)
console.log(response.data)

```

#### Response

`200`

Description: Successful request

Body:

```
{   "246": true, "3": true, "137": true,
    "2021000": true, "4": true, "1": true,
    "56": true, "80001": true, "1287": true
}
```

### **Chain Status**

GET `/api/aquarius/chains/status/{chain_id}`

#### Description

Get index status for a specific chain\_id

#### Curl Example

```bash
curl --location --request GET 'https://v4.aquarius.oceanprotocol.com/api/aquarius/chains/status/137'
```

#### Javascript Example

```runkit  nodeVersion="18.x.x"
const axios = require('axios')
const chainId = 1

const response = await axios( `https://v4.aquarius.oceanprotocol.com/api/aquarius/chains/status/${chainId}`)
console.log(response.status)
console.log(response.data)

```

#### Response

`200`

Description: Successful request

Body:

```
{"last_block": 25198729}
```

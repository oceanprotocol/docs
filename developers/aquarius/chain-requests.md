# Chain Requests

The universal Aquarius Endpoint is [`https://v4.aquarius.oceanprotocol.com`](https://v4.aquarius.oceanprotocol.com).

### Chain List

Retrieves a list of chains that are currently supported or recognized by the Aquarius service.

* **Endpoint**: `GET /api/aquarius/chains/list`
* **Purpose**: This endpoint provides a list of the chain IDs that are recognized by the Aquarius service. Each chain ID represents a different blockchain network, and the boolean value indicates if the chain is currently active (true) or not (false).
* **Parameters**: This endpoint does not require any parameters. You simply send a GET request to it.

Here are some typical responses you might receive from the API:

* **200**: This is a successful HTTP response code. It means the server has successfully processed the request and returns a JSON object containing chain IDs as keys and their active status as values.

Example response:

```json
{   "246": true, "3": true, "137": true,
    "2021000": true, "4": true, "1": true,
    "56": true, "80001": true, "1287": true
}
```

#### Curl Example

{% code overflow="wrap" %}
```bash
curl --location --request GET 'https://v4.aquarius.oceanprotocol.com/api/aquarius/chains/list'
```
{% endcode %}

#### Javascript Example

```runkit  nodeVersion="18.x.x"
const axios = require('axios')

const response = await axios( 'https://v4.aquarius.oceanprotocol.com/api/aquarius/chains/list')
console.log(response.status)
console.log(response.data)

```

### **Chain Status**

Retrieves the index status for a specific chain\_id from the Aquarius service.

* **Endpoint**: `GET /api/aquarius/chains/status/{chain_id}`
* **Purpose**: This endpoint is used to fetch the index status for a specific blockchain chain, identified by its chain\_id. The status, expressed as the "last\_block", gives the most recent block that Aquarius has processed on this chain.
* **Parameters**: This endpoint requires a chain\_id as a parameter in the path. This chain\_id represents the specific chain you want to get the index status for.

Here are some typical responses you might receive from the API:

* **200**: This is a successful HTTP response code. It means the server has successfully processed the request and returns a JSON object containing the "last\_block", which is the most recent block that Aquarius has processed on this chain. In the response example you provided, "25198729" is the last block processed on the chain with the chain\_id "137".

Example response:

```json
{"last_block": 25198729}
```

#### Curl Example

{% code overflow="wrap" %}
```bash
curl --location --request GET 'https://v4.aquarius.oceanprotocol.com/api/aquarius/chains/status/137'
```
{% endcode %}

#### Javascript Example

```runkit  nodeVersion="18.x.x"
const axios = require('axios')
const chainId = 1

const response = await axios( `https://v4.aquarius.oceanprotocol.com/api/aquarius/chains/status/${chainId}`)
console.log(response.status)
console.log(response.data)

```


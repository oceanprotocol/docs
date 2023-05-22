# Other Requests

The universal Aquarius Endpoint is [`https://v4.aquarius.oceanprotocol.com`](https://v4.aquarius.oceanprotocol.com).
## Others

### **GET** `/`

#### Description

Get version, plugin, and software information.

#### Curl Example

```bash
curl --location --request GET 'https://v4.aquarius.oceanprotocol.com/'
```

#### Javascript Example

```runkit  nodeVersion="18.x.x"
const axios = require('axios')

const response = await axios( 'https://v4.aquarius.oceanprotocol.com/')
console.log(response.status)
console.log(response.data)

```

#### Response

`200`

Description: Successful request

Body:

```
{
    "plugin": "elasticsearch",
    "software": "Aquarius",
    "version": "4.2.0"
}
```

### **GET** `/health`

**Description**

Get health status

**Curl Example**

```bash
curl --location --request GET 'https://v4.aquarius.oceanprotocol.com/health'
```

#### Javascript Example

```runkit  nodeVersion="18.x.x"
const axios = require('axios')

const response = await axios( 'https://v4.aquarius.oceanprotocol.com/health')
console.log(response.status)
console.log(response.data)

```

**Response**

`200`

Description: Successful request

Body:

```
Elasticsearch connected
```

### **GET** /spec

#### Description

Get swagger spec

#### Example

```bash
curl --location --request GET 'https://v4.aquarius.oceanprotocol.com/spec'
```

#### Javascript Example

```runkit  nodeVersion="18.x.x"
const axios = require('axios')

const response = await axios( 'https://v4.aquarius.oceanprotocol.com/spec')
console.log(response.status)
console.log(response.data.info)

```

#### Response

`200`

Successful request
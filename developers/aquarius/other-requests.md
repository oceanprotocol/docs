# Other Requests

The universal Aquarius Endpoint is [`https://v4.aquarius.oceanprotocol.com`](https://v4.aquarius.oceanprotocol.com).

### **Info**

Retrieves version, plugin, and software information from the Aquarius service.

* **Endpoint**: `GET /`
* **Purpose**: This endpoint is used to fetch key information about the Aquarius service, including its current version, the plugin it's using, and the name of the software itself.

Here are some typical responses you might receive from the API:

* **200**: This is a successful HTTP response code. It means the server has successfully processed the request and returns a JSON object containing the `plugin`, `software`, and `version`.

Example response:

```json
{
    "plugin": "elasticsearch",
    "software": "Aquarius",
    "version": "4.2.0"
}
```

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



### **Health**

Retrieves the health status of the Aquarius service.

* **Endpoint**: `GET /health`
* **Purpose**: This endpoint is used to fetch the current health status of the Aquarius service. This can be helpful for monitoring and ensuring that the service is running properly.

Here are some typical responses you might receive from the API:

* **200**: This is a successful HTTP response code. It means the server has successfully processed the request and returns a message indicating the health status. For example, "Elasticsearch connected" indicates that the Aquarius service is able to connect to Elasticsearch, which is a good sign of its health.

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

### **Spec**

Retrieves the Swagger specification for the Aquarius service.

* **Endpoint**: `GET /spec`
* **Purpose**: This endpoint is used to fetch the Swagger specification of the Aquarius service. Swagger is a set of rules (in other words, a specification) for a format describing REST APIs. This endpoint returns a document that describes the entire API, including the available endpoints, their methods, parameters, and responses.

Here are some typical responses you might receive from the API:

* **200**: This is a successful HTTP response code. It means the server has successfully processed the request and returns the Swagger specification.

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


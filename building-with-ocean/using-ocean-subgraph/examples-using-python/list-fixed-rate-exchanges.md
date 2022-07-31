# List Fixed Rate Exchanges

{% swagger method="post" path="" baseUrl="https://subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="query" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "data": {
        "fixedRateExchanges": [
            {
                "active": true,
                "baseToken": "0x967da4048cd07ab37855c090aaf366e4ce1b9f48",
                "datatoken": {
                    "address": "0xd3409d159ac9cd9c067b64f7d1bb625febf9abc2"
                },
                "exchangeOwner": {
                    "id": "0x1d2145d078f4957b2d6f1d09cfc68fe5aa839bc7"
                },
                "rate": "55",
                "swaps": []
            },
            {
                "active": true,
                "baseToken": "0x967da4048cd07ab37855c090aaf366e4ce1b9f48",
                "datatoken": {
                    "address": "0xca68c5e7a565ade806b081ad2326a54c390b522f"
                },
                "exchangeOwner": {
                    "id": "0xad23fc9d943018c34ac55e8da29af700a2fd0feb"
                },
                "rate": "1",
                "swaps": []
            }
        ]
    }
}

```
{% endswagger-response %}
{% endswagger %}

{% code title="list_fixed_rate_exchanges.py" %}
```python
import requests
import json


query = """
{
  fixedRateExchanges{
    rate
    active
    baseToken
    datatoken {address}
    exchangeOwner {
      id
    }
    swaps(skip:0, first: 2) {
      by {id}
      tx
      block
      dataTokenAmount
      baseTokenAmount
    }
  }
}"""

print(query)

base_url = "https://subgraph.mainnet.oceanprotocol.com"
route = "/subgraphs/name/oceanprotocol/ocean-subgraph"

url = base_url + route

headers = {"Content-Type": "application/json"}
payload = json.dumps({"query": query})
response = requests.request("POST", url, headers=headers, data=payload)
result = json.loads(response.text)
print(result)

```
{% endcode %}

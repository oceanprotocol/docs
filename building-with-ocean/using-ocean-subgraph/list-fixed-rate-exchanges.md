# List Fixed Rate Exchanges

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

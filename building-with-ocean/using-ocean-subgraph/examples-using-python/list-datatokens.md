# List datatokens

{% code title="list_datatokens.py" %}
```python
import requests
import json

query = """
{
  datatokens(skip:0, first: 5){
    id
    name
    symbol
    address
    cap
    publisher
    supply
    holderCount
    orderCount
    metadataUpdateCount
    orderVolume
    createTime
    tx
  }
}"""

base_url = "https://subgraph.mainnet.oceanprotocol.com"
route = "/subgraphs/name/oceanprotocol/ocean-subgraph"

url = base_url + route

headers = {"Content-Type": "application/json"}
payload = json.dumps({"query": query})
response = requests.request("POST", url, headers=headers, data=payload)
result = json.loads(response.text)
print(result)py
```
{% endcode %}

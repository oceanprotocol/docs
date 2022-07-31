# Get datatoken information

{% code title="datatoken_information.py" %}
```python
import requests
import json

datatoken_address = "0x000ab98efeea06758443fdb30e376cf8b3acd305"

query = """
{
  datatoken(id: "{0}"){
    id
    symbol
    name
    decimals
    cap
    publisher
    orderCount
    metadataUpdateCount
    createTime
    tx
    orders(skip:0, first: 5, where:{datatokenId:"{0}"}) {
      consumer {
        id
      }
      timestamp
      amount
      marketFee
      marketFeeCollector {
        id
      }
      block
      tx
    }
  }
}""".format(
    datatoken_address
)

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

# Get datatoken information

{% tabs %}
{% tab title="Python" %}
#### Create script

{% code title="datatoken_information.py" %}
```python
import requests
import json

datatoken_address = "0x000ab98efeea06758443fdb30e376cf8b3acd305"
query = """
{{
  datatoken(id: "{0}"){{
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
    orders(skip:0, first: 5, where:{{datatokenId:"{0}"}}) {{
      consumer {{
        id
      }}
      timestamp
      amount
      marketFee
      marketFeeCollector {{
        id
      }}
      block
      tx
    }}
  }}
}}""".format(
    datatoken_address
)

base_url = "https://subgraph.mainnet.oceanprotocol.com"
route = "/subgraphs/name/oceanprotocol/ocean-subgraph"

url = base_url + route

headers = {"Content-Type": "application/json"}
payload = json.dumps({"query": query})
response = requests.request("POST", url, headers=headers, data=payload)
result = json.loads(response.text)

print(url)

print(payload)

print(json.dumps(result, indent=4, sort_keys=True))

```
{% endcode %}

#### Execute script

```
python datatoken_information.py
```
{% endtab %}
{% endtabs %}

<details>

<summary>Sample response</summary>

```json
{
    "data": {
        "datatoken": {
            "cap": "1000",
            "createTime": 1657244700,
            "decimals": 18,
            "id": "0x000ab98efeea06758443fdb30e376cf8b3acd305",
            "metadataUpdateCount": "1",
            "name": "Breathtaking Crab Token",
            "orderCount": "0",
            "orders": [],
            "publisher": "0x89717015882d6460e4a0daeb945b3d4032f2d9d6",
            "symbol": "BRECRA-81",
            "tx": "0xb67c9e193e62bdbc7313399c6d38450037f432a06ee615a368a794bf716d1476"
        }
    }
}

```

</details>

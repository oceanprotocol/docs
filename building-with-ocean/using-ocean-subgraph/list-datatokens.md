# List datatokens

{% tabs %}
{% tab title="Python" %}
#### Create script

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

#### Execute script

```
python list_datatokens.py
```
{% endtab %}
{% endtabs %}

<details>

<summary>Sample Response</summary>

```json
{
    "data": {
        "datatokens": [
            {
                "address": "0x000ab98efeea06758443fdb30e376cf8b3acd305",
                "cap": "1000",
                "createTime": 1657244700,
                "holderCount": "0",
                "id": "0x000ab98efeea06758443fdb30e376cf8b3acd305",
                "metadataUpdateCount": "1",
                "name": "Breathtaking Crab Token",
                "orderCount": "0",
                "orderVolume": "0",
                "publisher": "0x89717015882d6460e4a0daeb945b3d4032f2d9d6",
                "supply": "9.375",
                "symbol": "BRECRA-81",
                "tx": "0xb67c9e193e62bdbc7313399c6d38450037f432a06ee615a368a794bf716d1476"
            },
            {
                "address": "0x003af2cdcd9b0bfb56db4166abea7c860f0cdfdc",
                "cap": "1000",
                "createTime": 1604832656,
                "holderCount": "0",
                "id": "0x003af2cdcd9b0bfb56db4166abea7c860f0cdfdc",
                "metadataUpdateCount": "1",
                "name": "Juicy Lobster Token",
                "orderCount": "0",
                "orderVolume": "0",
                "publisher": "0xfebd01993009d3d19049b7186dabd4b49eba15c8",
                "supply": "9.078947368421053",
                "symbol": "JUILOB-15",
                "tx": "0x23dbf414b653f67db437bee0f5f4e8a491bea297b5763d2b9b3ddb454c381df5"
            },
            {
                "address": "0x00d75f1dadaf1cfd77c1c16180b14fcf0c22d859",
                "cap": "1000",
                "createTime": 1606135635,
                "holderCount": "0",
                "id": "0x00d75f1dadaf1cfd77c1c16180b14fcf0c22d859",
                "metadataUpdateCount": "1",
                "name": "Defamatory Fish Token",
                "orderCount": "1",
                "orderVolume": "1",
                "publisher": "0xa5532218769800392408144ab3cafcbea0fd563d",
                "supply": "1000",
                "symbol": "DEFFIS-59",
                "tx": "0x63e4ae50052c35c18612f3b90a6c02c7a5f184281bbbb5bd80c9d37de0b04af2"
            },
            {
                "address": "0x0113b54135e2be4c919ab6fd3c28ead798f7e83f",
                "cap": "1000",
                "createTime": 1603921926,
                "holderCount": "0",
                "id": "0x0113b54135e2be4c919ab6fd3c28ead798f7e83f",
                "metadataUpdateCount": "0",
                "name": "Jocular Otter Token",
                "orderCount": "0",
                "orderVolume": "0",
                "publisher": "0x13496a822830d5e8087d6b216af8919dd03a5ceb",
                "supply": "0",
                "symbol": "JOCOTT-98",
                "tx": "0x1bbe4ce8ac0eb6e9db6cba5a406c03e94f9244bd226ba65f87ea34b50dd0186f"
            },
            {
                "address": "0x018dc6c33e66381cd29ce13c176d9414cfa5cd05",
                "cap": "1000",
                "createTime": 1604303120,
                "holderCount": "0",
                "id": "0x018dc6c33e66381cd29ce13c176d9414cfa5cd05",
                "metadataUpdateCount": "0",
                "name": "Ubiquitous Mackerel Token",
                "orderCount": "0",
                "orderVolume": "0",
                "publisher": "0xde828bfa26f82f9394d7f3a315133933ef523ae1",
                "supply": "0",
                "symbol": "UBIMAC-9",
                "tx": "0x46e853b4938d7a554f29b6f00e7458021dee2f0ac19085d1d207def8ad407896"
            }
        ]
    }
}

```

</details>


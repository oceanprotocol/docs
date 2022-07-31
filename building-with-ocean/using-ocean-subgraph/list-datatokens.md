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

</details>


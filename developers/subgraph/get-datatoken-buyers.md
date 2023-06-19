---
description: Query the Subgraph to see the buyers of a datatoken.
---

# Get datatoken buyers

The result of the following GraphQL query returns the list of buyers for a particular datatoken. Here, `0xc22bfd40f81c4a28c809f80d05070b95a11829d9` is the address of the datatoken.

_PS: In this example, the query is executed on the Ocean subgraph deployed on the **Mumbai** network. If you want to change the network, please refer to_ [_this table_](broken-reference)_._

{% tabs %}
{% tab title="JavaScript" %}
The javascript below can be used to run the query and fetch the list of buyers for a datatoken. If you wish to change the network, replace the variable's value `network` as needed. Change the value of the variable `datatoken` with the address of your choice.

```runkit  nodeVersion="18.x.x"
const axios = require('axios')

const datatoken = "0xc22bfd40f81c4a28c809f80d05070b95a11829d9".toLowerCase()

const query = `{ 
    token(id : "${datatoken}")  {
          id,
          orders(
            orderBy: createdTimestamp
            orderDirection: desc
            first: 1000
          ) {
            id
            consumer {
              id
            }
            payer {
              id
            }
            reuses {
              id
            }
            block
            createdTimestamp
            amount
          }
        }
}`

const network = "mumbai"
var config = {
  method: 'post',
  url: `https://v4.subgraph.${network}.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph`,
  headers: { "Content-Type": "application/json" },
  data: JSON.stringify({ "query": query })
};

axios(config)
  .then(function (response) {
    const orders = response.data.data.token.orders
    console.log(orders)
    for (let order of orders) {
        console.log('id:' + order.id + ' consumer: ' + order.consumer.id + ' payer: ' + order.payer.id)
    }
    console.log(response.data.data.token.orders)
  })
  .catch(function (error) {
    console.log(error);
});

```
{% endtab %}

{% tab title="Python" %}
The Python script below can be used to run the query and fetch the list of buyers for a datatoken. If you wish to change the network, replace the variable's value `base_url` as needed. Change the value of the variable `datatoken_address` with the address of the datatoken of your choice.

**Create Script**

```python
datatoken_information.py
import requests
import json

datatoken_address = "0xc22bfd40f81c4a28c809f80d05070b95a11829d9"
query = """
{{ 
  token(id : "${datatoken_address}")  {
        id,
        orders(
          orderBy: createdTimestamp
          orderDirection: desc
          first: 1000
        ) {
          id
          consumer {
            id
          }
          payer {
            id
          }
          reuses {
            id
          }
          block
          createdTimestamp
          amount
        }
      }
}}""".format(
    datatoken_address
)

base_url = "https://v4.subgraph.mumbai.oceanprotocol.com/"
route = "/subgraphs/name/oceanprotocol/ocean-subgraph"

url = base_url + route

headers = {"Content-Type": "application/json"}
payload = json.dumps({"query": query})
response = requests.request("POST", url, headers=headers, data=payload)
result = json.loads(response.text)

print(json.dumps(result, indent=4, sort_keys=True))
```

**Execute Script**

```
python datatoken_buyers.py
```
{% endtab %}

{% tab title="Query" %}
Copy the query to fetch the list of buyers for a datatoken in the Ocean Subgraph [GraphiQL interface](https://v4.subgraph.mumbai.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph).&#x20;

```graphql
 
  token(id : "0xc22bfd40f81c4a28c809f80d05070b95a11829d9")  {
        id,
        orders(
          orderBy: createdTimestamp
          orderDirection: desc
          first: 1000
        ) {
          id
          consumer {
            id
          }
          payer {
            id
          }
          reuses {
            id
          }
          block
          createdTimestamp
          amount
        }
      }
```
{% endtab %}
{% endtabs %}

<details>

<summary>Sample response</summary>

```json
{
  "data": {
    "token": {
      "id": "0xc22bfd40f81c4a28c809f80d05070b95a11829d9",
      "orders": [
        {
          "id": "0xd65c927af039bed60be4bfcb00a75eebe7db695598350ba9bc6cb5d6a6180062-0xc22bfd40f81c4a28c809f80d05070b95a11829d9-0x0b58857708a6f84e7ee04beaef069a7e6d1d4a0b-38.0",
          "consumer": {
            "id": "0x0b58857708a6f84e7ee04beaef069a7e6d1d4a0b"
          },
          "payer": {
            "id": "0x0b58857708a6f84e7ee04beaef069a7e6d1d4a0b"
          },
          "reuses": [],
          "block": 36669814,
          "createdTimestamp": 1686386048,
          "amount": "1"
        },
        {
          "id": "0x118317568256f457a6ac29ba03875ad83815d5d8ec834c721ea20d80643d8629-0xc22bfd40f81c4a28c809f80d05070b95a11829d9-0x027bfbe29df80bde49845b6fecf5e4ed14518f1f-0.0",
          "consumer": {
            "id": "0x027bfbe29df80bde49845b6fecf5e4ed14518f1f"
          },
          "payer": {
            "id": "0x027bfbe29df80bde49845b6fecf5e4ed14518f1f"
          },
          "reuses": [],
          "block": 35582325,
          "createdTimestamp": 1684067341,
          "amount": "1"
        },
        {
          "id": "0xe9668b60b5fe7cbfacf0311ae4dc93c50c43484c0a8cf94db783ffbee1be7cd5-0xc22bfd40f81c4a28c809f80d05070b95a11829d9-0x86874bf84f0d27dcfc6c4c34ab99aad8ced8d892-1.0",
          "consumer": {
            "id": "0x86874bf84f0d27dcfc6c4c34ab99aad8ced8d892"
          },
          "payer": {
            "id": "0x86874bf84f0d27dcfc6c4c34ab99aad8ced8d892"
          },
          "reuses": [],
          "block": 35578590,
          "createdTimestamp": 1684059403,
          "amount": "1"
        },
        {
          "id": "0x047a7ce1b3c69a5fc4c2c8078a2cc356164519077ef095265e4bcba1e0baf6c9-0xc22bfd40f81c4a28c809f80d05070b95a11829d9-0xb62e762af637b49eb4870bce8fe21bfff189e495-0.0",
          "consumer": {
            "id": "0xb62e762af637b49eb4870bce8fe21bfff189e495"
          },
          "payer": {
            "id": "0xb62e762af637b49eb4870bce8fe21bfff189e495"
          },
          "reuses": [],
          "block": 35511102,
          "createdTimestamp": 1683915991,
          "amount": "1"
        },
        {
          "id": "0x8cbfb5a85d43f5a5b4aff4a2d657fe7dac4528a86cc78f21897fdd0169d3b3c3-0xc22bfd40f81c4a28c809f80d05070b95a11829d9-0x85c1bbdc1b6a199e0964cb849deb59aef3045edd-0.0",
          "consumer": {
            "id": "0x85c1bbdc1b6a199e0964cb849deb59aef3045edd"
          },
          "payer": {
            "id": "0x85c1bbdc1b6a199e0964cb849deb59aef3045edd"
          },
          "reuses": [],
          "block": 35331127,
          "createdTimestamp": 1683533500,
          "amount": "1"
        },
        {
          "id": "0x246637f9a410664c6880e7768880696763e7fd66aa7cc286fdc62d5d8589481c-0xc22bfd40f81c4a28c809f80d05070b95a11829d9-0xf9df381272afc2d1bd8fbbc0061cdb1d387c2032-3.0",
          "consumer": {
            "id": "0xf9df381272afc2d1bd8fbbc0061cdb1d387c2032"
          },
          "payer": {
            "id": "0xf9df381272afc2d1bd8fbbc0061cdb1d387c2032"
          },
          "reuses": [],
          "block": 35254580,
          "createdTimestamp": 1683370838,
          "amount": "1"
        },
        {
          "id": "0xed9bcc6149cab8ee67a38d6b423a05ca328533d43ff83aff140fe9c424e449ee-0xc22bfd40f81c4a28c809f80d05070b95a11829d9-0x726ab53c8da3efed40a32fe6ab5daa65b9da7ede-9.0",
          "consumer": {
            "id": "0x726ab53c8da3efed40a32fe6ab5daa65b9da7ede"
          },
          "payer": {
            "id": "0x726ab53c8da3efed40a32fe6ab5daa65b9da7ede"
          },
          "reuses": [],
          "block": 35110175,
          "createdTimestamp": 1683063962,
          "amount": "1"
        },
        {
          "id": "0xa97fa2c99f8e5f16ba7245989830c552bace1f72476f5dee4da01c0d56ada7be-0xc22bfd40f81c4a28c809f80d05070b95a11829d9-0x56e08babb8bf928bd8571d2a2a78235ae57ae5bd-12.0",
          "consumer": {
            "id": "0x56e08babb8bf928bd8571d2a2a78235ae57ae5bd"
          },
          "payer": {
            "id": "0x56e08babb8bf928bd8571d2a2a78235ae57ae5bd"
          },
          "reuses": [],
          "block": 35053093,
          "createdTimestamp": 1682942664,
          "amount": "1"
        },
        {
          "id": "0xb9b72efad41ded4fcb7e23f14a7caa3ebc4fdfbb710318cbf25d92068c8a650d-0xc22bfd40f81c4a28c809f80d05070b95a11829d9-0x56e08babb8bf928bd8571d2a2a78235ae57ae5bd-0.0",
          "consumer": {
            "id": "0x56e08babb8bf928bd8571d2a2a78235ae57ae5bd"
          },
          "payer": {
            "id": "0x56e08babb8bf928bd8571d2a2a78235ae57ae5bd"
          },
          "reuses": [],
          "block": 34985052,
          "createdTimestamp": 1682798076,
          "amount": "1"
        },
        {
          "id": "0x9d616c85fdfe8655640bf77ecea0e42a7a9d331c5f51975f2a56b4f5ac8ec955-0xc22bfd40f81c4a28c809f80d05070b95a11829d9-0x3f0cc2ad70839e2b684f173389f7dd71fe5186ff-0.0",
          "consumer": {
            "id": "0x3f0cc2ad70839e2b684f173389f7dd71fe5186ff"
          },
          "payer": {
            "id": "0x3f0cc2ad70839e2b684f173389f7dd71fe5186ff"
          },
          "reuses": [],
          "block": 34984847,
          "createdTimestamp": 1682797640,
          "amount": "1"
        },
        {
          "id": "0x16eee832f9e85ca8ac8f82aecb8861e5bb5378c2771bf9abd3930b9438dbbc01-0xc22bfd40f81c4a28c809f80d05070b95a11829d9-0x3f0cc2ad70839e2b684f173389f7dd71fe5186ff-9.0",
          "consumer": {
            "id": "0x3f0cc2ad70839e2b684f173389f7dd71fe5186ff"
          },
          "payer": {
            "id": "0x3f0cc2ad70839e2b684f173389f7dd71fe5186ff"
          },
          "reuses": [],
          "block": 34982389,
          "createdTimestamp": 1682792418,
          "amount": "1"
        },
        {
          "id": "0x5264d4694fc78d9211a658363d98571f8d455dfcf89f3450520909416a103c2c-0xc22bfd40f81c4a28c809f80d05070b95a11829d9-0x3f0cc2ad70839e2b684f173389f7dd71fe5186ff-0.0",
          "consumer": {
            "id": "0x3f0cc2ad70839e2b684f173389f7dd71fe5186ff"
          },
          "payer": {
            "id": "0x3f0cc2ad70839e2b684f173389f7dd71fe5186ff"
          },
          "reuses": [],
          "block": 34980112,
          "createdTimestamp": 1682787580,
          "amount": "1"
        },
        {
          "id": "0x7222faab923d80218b242aec2670c1a775c77a254a28782e04aed5cb36c395d3-0xc22bfd40f81c4a28c809f80d05070b95a11829d9-0x616b5249aaf1c924339f8b8e94474e64ceb22af3-18.0",
          "consumer": {
            "id": "0x616b5249aaf1c924339f8b8e94474e64ceb22af3"
          },
          "payer": {
            "id": "0x616b5249aaf1c924339f8b8e94474e64ceb22af3"
          },
          "reuses": [],
          "block": 34969169,
          "createdTimestamp": 1682764326,
          "amount": "1"
        },
        {
          "id": "0x3eae9d33fe3223e25ca058955744c98ba8aa211b1e3e1bf62eb653c0d0441b79-0xc22bfd40f81c4a28c809f80d05070b95a11829d9-0x71eb23e03d3005803db491639a7ebb717810bd04-0.0",
          "consumer": {
            "id": "0x71eb23e03d3005803db491639a7ebb717810bd04"
          },
          "payer": {
            "id": "0x71eb23e03d3005803db491639a7ebb717810bd04"
          },
          "reuses": [],
          "block": 34938635,
          "createdTimestamp": 1682699439,
          "amount": "1"
        },
        {
          "id": "0x8dfe458aa689a29ceea3208f55856420dbfd80ed777fd01103581cff9d7d76b7-0xc22bfd40f81c4a28c809f80d05070b95a11829d9-0x726ab53c8da3efed40a32fe6ab5daa65b9da7ede-0.0",
          "consumer": {
            "id": "0x726ab53c8da3efed40a32fe6ab5daa65b9da7ede"
          },
          "payer": {
            "id": "0x726ab53c8da3efed40a32fe6ab5daa65b9da7ede"
          },
          "reuses": [],
          "block": 34938633,
          "createdTimestamp": 1682699435,
          "amount": "1"
        }
      ]
    }
  }
}
```

</details>

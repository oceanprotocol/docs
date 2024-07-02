---
description: 'Discover the World of veOCEAN: Retrieving a Stats'
---

# Get veOCEAN stats

If you are already familiarized with veOCEAN, you're off to a great start. However, if you need a refresher, we recommend visiting the [veOCEAN](../../../data-farming/passivedf.md) page for a quick overview :mag:

On this page, you'll find a few examples to fetch the stats of veOCEANS from the Ocean Subgraph. These examples serve as a valuable starting point to help you retrieve essential information about veOCEAN. However, if you're eager to delve deeper into the topic, we invite you to visit the [GitHub](https://github.com/oceanprotocol/ocean-subgraph/blob/main/test/integration/VeOcean.test.ts) repository. There, you'll discover a wealth of additional examples, which provide comprehensive insights. Feel free to explore and expand your knowledge! :books:

{% hint style="info" %}
The veOCEAN is deployed on the Ethereum mainnet, along with two test networks. The statistical data available is specifically limited to these networks.
{% endhint %}

###

### Get the total amount of locked OCEAN

{% tabs %}
{% tab title="JavaScript" %}
You can utilize the following JavaScript code snippet to execute the query and retrieve the total number of locked OCEAN:

```runkit nodeVersion="18.x.x"
var axios = require('axios');

const query = `query{
      globalStatistics{
        totalOceanLocked
      }
    }`

var config = {
  method: 'post',
  url: `https://v4.subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph`,
  headers: { "Content-Type": "application/json" },
  data: JSON.stringify({ "query": query })
};

axios(config)
  .then(function (response) {
    console.log(response.data.data.globalStatistics)
  })
  .catch(function (error) {
    console.log(error);
  });

```
{% endtab %}

{% tab title="Python" %}
You can employ the following Python script to execute the query and retrieve the total amount of locked OCEAN from the subgraph:

**Create script**

{% code title="get_ocean_locked.py" %}
```python
import requests
import json

query = """
{
  globalStatistics {
    totalOceanLocked
  }
}"""

base_url = "https://v4.subgraph.mainnet.oceanprotocol.com"
route = "/subgraphs/name/oceanprotocol/ocean-subgraph"

url = base_url + route

headers = {"Content-Type": "application/json"}
payload = json.dumps({"query": query})
response = requests.request("POST", url, headers=headers, data=payload)
result = response.json()

print(json.dumps(result, indent=4, sort_keys=True))
```
{% endcode %}

**Execute script**

```
python get_ocean_locked.py
```
{% endtab %}

{% tab title="Query" %}
To fetch the total amount of Ocean locked in the Ocean Subgraph [GraphiQL](https://v4.subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql) interface, you can use the following query:

```graphql
query {
  globalStatistics {
    totalOceanLocked
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
        "globalStatistics": [
            {
                "totalOceanLocked": "38490790.606836146522318627"
            }
        ]
    }
}
```

</details>

### Get the veOCEAN holders list

{% tabs %}
{% tab title="JavaScript" %}
You can utilize the following JavaScript code snippet to execute the query and fetch the list of veOCEAN holders.

```runkit nodeVersion="18.x.x"
var axios = require('axios');

const query = `query {
  veOCEANs {    
    id,
    lockedAmount
    unlockTime
  }
}`

var config = {
  method: 'post',
  url: `https://v4.subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph`,
  headers: { "Content-Type": "application/json" },
  data: JSON.stringify({ "query": query })
};

axios(config)
  .then(function (response) {
    for (let veHolder of response.data.data.veOCEANs) {
        console.log(veHolder)
    }
  })
  .catch(function (error) {
    console.log(error);
  });

```
{% endtab %}

{% tab title="Python" %}
You can employ the following Python script to execute the query and fetch the list of veOCEAN holders from the subgraph.

{% code title="get_veOcean_holders.py" %}
```python
import requests
import json

query = """
{
    veOCEANs {    
        id,
        lockedAmount
        unlockTime
    }
}"""

base_url = "https://v4.subgraph.mainnet.oceanprotocol.com"
route = "/subgraphs/name/oceanprotocol/ocean-subgraph"

url = base_url + route

headers = {"Content-Type": "application/json"}
payload = json.dumps({"query": query})
response = requests.request("POST", url, headers=headers, data=payload)
result = json.loads(response.text)

print(json.dumps(result, indent=4, sort_keys=True))
```
{% endcode %}

**Execute script**

```bash
python get_veOcean_holders.py
```
{% endtab %}

{% tab title="Query" %}
To fetch the list of veOCEAN holders in the Ocean Subgraph [GraphiQL](https://v4.subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql) interface, you can use the following query:

```graphql
query {
  veOCEANs {    
    id,
    lockedAmount
    unlockTime
  }
}
```
{% endtab %}
{% endtabs %}

<details>

<summary>Sample response</summary>

{% code overflow="wrap" %}
```json
{
    "data": {
        "veOCEANs": [
            {
                "id": "0x000afce0e19523ca2566b142bd12968fe1e44fe8",
                "lockedAmount": "1011",
                "unlockTime": "1727913600"
            },
            {
                "id": "0x001b71fad769b3cd47fd4c9849c704fdfabf6096",
                "lockedAmount": "8980",
                "unlockTime": "1790208000"
            },
            {
                "id": "0x002570980aa53893c6981765698b6ebab8ae7ea1",
                "lockedAmount": "126140",
                "unlockTime": "1790208000"
            },
            {
                "id": "0x006d0f31a00e1f9c017ab039e9d0ba699433a28c",
                "lockedAmount": "75059",
                "unlockTime": "1812585600"
            },
            {
                "id": "0x006d559fc29090589d02fb71d4142aa58b030013",
                "lockedAmount": "100",
                "unlockTime": "1793232000"
            },
            {
                "id": "0x008ed443f31a4b3aee02fbfe61c7572ddaf3a679",
                "lockedAmount": "1100",
                "unlockTime": "1795651200"
            },
            {
                "id": "0x009ec7d76febecabd5c73cb13f6d0fb83e45d450",
                "lockedAmount": "11200",
                "unlockTime": "1790812800"
            },
            {
                "id": "0x01d5595949fdbe521fbc39eaf09192dffb3bfc17",
                "lockedAmount": "28576",
                "unlockTime": "1675900800"
            },
            {
                "id": "0x02535d7bab47a83d33623c9a4ca854a1b1192121",
                "lockedAmount": "0",
                "unlockTime": "0"
            },
            {
                "id": "0x02a6ab92964309e0d8a739e0252b3acfd3a58972",
                "lockedAmount": "1178",
                "unlockTime": "1712188800"
            },
            {
                "id": "0x02aa319b5ce28294b7207bdce3bbcf4bf514c05b",
                "lockedAmount": "300",
                "unlockTime": "1736985600"
            },
            {
                "id": "0x02ae6dfaffc2c1f410fcad1f36885f6cc8b677d5",
                "lockedAmount": "1009",
                "unlockTime": "1730937600"
            },
            {
                "id": "0x034e1f7a66b582b68e511b325ed0ccb71bb4bc12",
                "lockedAmount": "15919",
                "unlockTime": "1727913600"
            },
            {
                "id": "0x035a209abf018e4f94173fdeabe5abe69f1efbed",
                "lockedAmount": "1907",
                "unlockTime": "1714003200"
            },
            {
                "id": "0x03d4682823c33995184a6a85a97f4ca1715c9d5c",
                "lockedAmount": "0",
                "unlockTime": "0"
            },
            {
                "id": "0x04aa87fa73238b563417d17ca7e57fd91ccd521e",
                "lockedAmount": "9435",
                "unlockTime": "1801699200"
            },
            {
                "id": "0x04c697561092c9cc56be6ff5b8e2789b0ca5837c",
                "lockedAmount": "226",
                "unlockTime": "1681948800"
            },
            {
                "id": "0x051f12380b842104391a0f9c55b32f6636cc7a0f",
                "lockedAmount": "24900",
                "unlockTime": "1685577600"
            },
            {
                "id": "0x054e061f1e1c1d775a2e5f20304aab83af7dab63",
                "lockedAmount": "5000",
                "unlockTime": "1701907200"
            },
            {
                "id": "0x054efb6d55466ba2ffb4133f39ae67985a314bed",
                "lockedAmount": "33083",
                "unlockTime": "1697068800"
            },
            {
                "id": "0x05a79e69c0dcb9335cbfa5b579635cbbd60f70ba",
                "lockedAmount": "15837",
                "unlockTime": "1728518400"
            },
            {
                "id": "0x05b2716d750f50c4fcd2110c5bff3f74bf0910e6",
                "lockedAmount": "744",
                "unlockTime": "1796256000"
            },
            {
                "id": "0x05b93ddd5a0ecfbdda3ccccd11882820f9cf7454",
                "lockedAmount": "0",
                "unlockTime": "0"
            },
            {
                "id": "0x05c01104bd6c4c099fe4d13b0faf0a8c94f11082",
                "lockedAmount": "106026",
                "unlockTime": "1723680000"
            },
            {
                "id": "0x06a2006ca85813e652506b865e590f44eae3928a",
                "lockedAmount": "3100",
                "unlockTime": "1727308800"
            },
            {
                "id": "0x0705adac1869aa2648ddcf00da24b0ab6b76ede1",
                "lockedAmount": "0",
                "unlockTime": "0"
            },
            {
                "id": "0x07dee7fb11086d543ed943bf075ad6ac2007aada",
                "lockedAmount": "34",
                "unlockTime": "1665014400"
            },
            {
                "id": "0x0848db7cb495e7b9ada1d4dc972b9a526d014d84",
                "lockedAmount": "0",
                "unlockTime": "0"
            },
            {
                "id": "0x0861fcabe37a5ce396a8d85cd816e0cc6b4633ff",
                "lockedAmount": "500",
                "unlockTime": "1738800000"
            },
            {
                "id": "0x08c26d09393dc0adc7349c0c8d1bdae63555c312",
                "lockedAmount": "0",
                "unlockTime": "0"
            },
            {
                "id": "0x0a8162d91d6bf4530950e539068c75f7ddf972bc",
                "lockedAmount": "534",
                "unlockTime": "1791417600"
            },
            {
                "id": "0x0abe9b7740686cbf24b9f206e7d4e8ec25519476",
                "lockedAmount": "230",
                "unlockTime": "1690416000"
            },
            {
                "id": "0x0aef715335d0a19b870ca20fb540e16a6e606fbd",
                "lockedAmount": "210",
                "unlockTime": "1696464000"
            },
            {
                "id": "0x0b5665d637f45d6fff6c4afd4ea4191904ef38bb",
                "lockedAmount": "10000",
                "unlockTime": "1710979200"
            },
            {
                "id": "0x0bc1e0d21e3806056eeca20b69dd3f33bb49d0c7",
                "lockedAmount": "690",
                "unlockTime": "1738195200"
            },
            {
                "id": "0x0bc9cd548cc04bfcf8ef2fca50c13b9b4f62f6d4",
                "lockedAmount": "1250",
                "unlockTime": "1796256000"
            },
            {
                "id": "0x0bdf0d54e6f64da97728051e702fa0b9f61d2375",
                "lockedAmount": "1024",
                "unlockTime": "1701302400"
            },
            {
                "id": "0x0be1b7f1a2eacde1cf5b48a4a1034c70dac06a70",
                "lockedAmount": "19982",
                "unlockTime": "1800489600"
            },
            {
                "id": "0x0c16b6d59a9d242f9cf6ca1999e372dd89a098a2",
                "lockedAmount": "1000",
                "unlockTime": "1723075200"
            },
            {
                "id": "0x0c21d79f460f7cacf3fd35172151bdbc5d61d9c1",
                "lockedAmount": "10",
                "unlockTime": "1676505600"
            },
            {
                "id": "0x0c4f299cce0e56004a6e3a30f43146a205bd2b9d",
                "lockedAmount": "250",
                "unlockTime": "1690416000"
            },
            {
                "id": "0x0c59aeeb4f82bbb7e38958900df5bf499c3e9e4f",
                "lockedAmount": "0",
                "unlockTime": "0"
            },
            {
                "id": "0x0c6415489a8cc61ca7d32a29f7cdc1e980af16f1",
                "lockedAmount": "3788",
                "unlockTime": "1725494400"
            },
            {
                "id": "0x0ca0c241a45a9e8abad30a632df1a9a09a4eb692",
                "lockedAmount": "24987",
                "unlockTime": "1729123200"
            },
            {
                "id": "0x0cf776d57e0223f47ed3a101927bb78d41ad8a13",
                "lockedAmount": "16967",
                "unlockTime": "1790208000"
            },
            {
                "id": "0x0d04e73d950ff53e586da588c43bb3ac5ae53872",
                "lockedAmount": "19517",
                "unlockTime": "1703721600"
            },
            {
                "id": "0x0daefc5251f8f7f5a5dc987e8a6c96d9deb84559",
                "lockedAmount": "3000",
                "unlockTime": "1727308800"
            },
            {
                "id": "0x0e0bab764f38d63abf08680a50b33718c98b90e6",
                "lockedAmount": "13782",
                "unlockTime": "1797465600"
            },
            {
                "id": "0x0ed8063fcc5b44f664333b59a12d187de6551088",
                "lockedAmount": "265",
                "unlockTime": "1804118400"
            },
            {
                "id": "0x0ed8486119b992258a3754decaa36bf8bed543e8",
                "lockedAmount": "25881",
                "unlockTime": "1697068800"
            },
            {
                "id": "0x0efbdc4e858cbb269545d48f7b30ab260a3e5d10",
                "lockedAmount": "0",
                "unlockTime": "0"
            },
            {
                "id": "0x0f1107f97af6ae6eb37a9d35060aaa21cdaa109f",
                "lockedAmount": "15000",
                "unlockTime": "1790812800"
            },
            {
                "id": "0x0f84452c0dcda0c9980a0a802eb8b8dbaaf52c54",
                "lockedAmount": "25",
                "unlockTime": "1687392000"
            },
            {
                "id": "0x1019b7e639234c589c34385955adfbe0af8d8453",
                "lockedAmount": "2121",
                "unlockTime": "1706140800"
            },
            {
                "id": "0x104e9bce2d1a6fb449c14272f0157422a00adaa5",
                "lockedAmount": "7300",
                "unlockTime": "1744243200"
            },
            {
                "id": "0x111849a4943891b071f7cdb1babebcb74415204a",
                "lockedAmount": "0",
                "unlockTime": "0"
            },
            {
                "id": "0x11300251b903ba70f51262f3e49aa7c22f81e1b2",
                "lockedAmount": "1504",
                "unlockTime": "1794441600"
            },
            {
                "id": "0x119b6e8c6b258b2b93443e949ef5066a85d75e44",
                "lockedAmount": "30000",
                "unlockTime": "1748476800"
            },
            {
                "id": "0x11e43d79e4193dfc1247697cb0ae15b17d27fc5b",
                "lockedAmount": "0",
                "unlockTime": "0"
            },
            {
                "id": "0x1215fed867ad6eb5f078fc8b477a1a32eb59d75d",
                "lockedAmount": "18752",
                "unlockTime": "1730332800"
            },
            {
                "id": "0x126bc064dbd1d0205fc608c3178a60c9706b482c",
                "lockedAmount": "0",
                "unlockTime": "0"
            },
            {
                "id": "0x1280cfea89a214b490c202fa22688813df8d8c04",
                "lockedAmount": "26000",
                "unlockTime": "1727913600"
            },
            {
                "id": "0x13203b4fef73f05b3db709c41c96179b37bf01eb",
                "lockedAmount": "293",
                "unlockTime": "1738195200"
            },
            {
                "id": "0x1479a4884dee82dc8471e0006102f9d400445332",
                "lockedAmount": "13009",
                "unlockTime": "1698883200"
            },
            {
                "id": "0x149756907221491eca8c5816a6b5d6b60fcd7d60",
                "lockedAmount": "4985",
                "unlockTime": "1701907200"
            },
            {
                "id": "0x153785d85dffe5b92083e30003aa58f18344d032",
                "lockedAmount": "50",
                "unlockTime": "1802304000"
            },
            {
                "id": "0x15558eb2aeb93ed561515a47441bf49250933ba9",
                "lockedAmount": "500000",
                "unlockTime": "1804118400"
            },
            {
                "id": "0x15a919e499d88a71e94d34ab76986799f69b4ff2",
                "lockedAmount": "4940",
                "unlockTime": "1733961600"
            },
            {
                "id": "0x15abf18f424cd2755e9d680eeeaa02bc00c1f00e",
                "lockedAmount": "0",
                "unlockTime": "0"
            },
            {
                "id": "0x15f311af257d6e8520ebf29eae5ba76c4dd45c6a",
                "lockedAmount": "1420",
                "unlockTime": "1796860800"
            },
            {
                "id": "0x1609665376e39e9d9cdfdc75e44f80bb899e9d21",
                "lockedAmount": "8016",
                "unlockTime": "1699488000"
            },
            {
                "id": "0x1694ab8e597e90fcb4cd637bafa3e553fc1d0083",
                "lockedAmount": "364",
                "unlockTime": "1734566400"
            },
            {
                "id": "0x175437b00da09f18d89571b95a41a15aa8415eba",
                "lockedAmount": "88050",
                "unlockTime": "1798675200"
            },
            {
                "id": "0x1758bc68a87abfede6a213666d15c028f2708b2b",
                "lockedAmount": "1494",
                "unlockTime": "1731542400"
            },
            {
                "id": "0x1789bf2df0fffa3ab5d235b41ecb72f48294d955",
                "lockedAmount": "920",
                "unlockTime": "1701302400"
            },
            {
                "id": "0x1843c3d1dd3e2564fada8ea50bb73819c6b53047",
                "lockedAmount": "3354",
                "unlockTime": "1793836800"
            },
            {
                "id": "0x184f19323defce76af86bb5a63aa976cd9f256d7",
                "lockedAmount": "0",
                "unlockTime": "0"
            },
            {
                "id": "0x18559e7f5d87f5c607a34ed45453d62832804c97",
                "lockedAmount": "3275",
                "unlockTime": "1687996800"
            },
            {
                "id": "0x1891c8d948bc041b5e7c1a35185cc593a33b4a6c",
                "lockedAmount": "7436",
                "unlockTime": "1790208000"
            },
            {
                "id": "0x1a0d80e1bd429127bc9a4acee880426b818764ee",
                "lockedAmount": "420",
                "unlockTime": "1807747200"
            },
            {
                "id": "0x1a2409444f2f349c2e539eb013eed985b9d54e2f",
                "lockedAmount": "500",
                "unlockTime": "1687996800"
            },
            {
                "id": "0x1a9a6198c28d4dd5b9ab58e84677520ec741cb29",
                "lockedAmount": "2565",
                "unlockTime": "1683158400"
            },
            {
                "id": "0x1ab21891e9230e4a8c3e09d88e3c0b48d54f1a86",
                "lockedAmount": "980",
                "unlockTime": "1734566400"
            },
            {
                "id": "0x1bafc574581ea4b938dcfe0d0d93778303cb3fb7",
                "lockedAmount": "0",
                "unlockTime": "0"
            },
            {
                "id": "0x1c175ce4f8f3e8a16df7165f15057a82a88c025c",
                "lockedAmount": "953",
                "unlockTime": "1692230400"
            },
            {
                "id": "0x1c7b100cc8a2966d35ac6cc0ccaf4d5cba463b94",
                "lockedAmount": "0",
                "unlockTime": "0"
            },
            {
                "id": "0x1cd1b778cdc329292d196e490b65b7950bee1c97",
                "lockedAmount": "301",
                "unlockTime": "1700092800"
            },
            {
                "id": "0x1d11c308464f09228f7c81daa253ff9f415ea4f7",
                "lockedAmount": "21908",
                "unlockTime": "1697068800"
            },
            {
                "id": "0x1d3c2dc18ca3da0406cfb3634faab589c769215b",
                "lockedAmount": "625",
                "unlockTime": "1689811200"
            },
            {
                "id": "0x1dc865705a03d63953e7df83caefc8928e555b6c",
                "lockedAmount": "5245",
                "unlockTime": "1812585600"
            },
            {
                "id": "0x1ddb98275a09552b5be11e8e3118684ed6a809fc",
                "lockedAmount": "10000",
                "unlockTime": "1725494400"
            },
            {
                "id": "0x1e180d121eff6cd1b376af9318d4128093c46032",
                "lockedAmount": "0",
                "unlockTime": "0"
            },
            {
                "id": "0x1e2394b6b88f9329127d98347f6e696e4af33e13",
                "lockedAmount": "0",
                "unlockTime": "0"
            },
            {
                "id": "0x1e38e305126bfe9b6329f5fdce28d72fdf9d5647",
                "lockedAmount": "183844",
                "unlockTime": "1801699200"
            },
            {
                "id": "0x1f130be1f04e159ef98c54f677b9b980b012417b",
                "lockedAmount": "10663",
                "unlockTime": "1745452800"
            },
            {
                "id": "0x1f3bcd409b2b2d88259aca77115e858ea3c65e9c",
                "lockedAmount": "2000",
                "unlockTime": "1732147200"
            },
            {
                "id": "0x1fac06467b7d9c3a9361f42ab7bd09e6a5719ec7",
                "lockedAmount": "81285",
                "unlockTime": "1802908800"
            },
            {
                "id": "0x1fba4f4446859ab451cb7f3b8fbce9bcdc97fdb9",
                "lockedAmount": "560",
                "unlockTime": "1689206400"
            },
            {
                "id": "0x200fa3e7e3fbfeb15b76e53f2810faec71a5336d",
                "lockedAmount": "2375",
                "unlockTime": "1805932800"
            },
            {
                "id": "0x2017ade0a289de891ca7e733513b264cfec2c8ce",
                "lockedAmount": "9119",
                "unlockTime": "1703721600"
            }
        ]
    }
}
```
{% endcode %}

</details>

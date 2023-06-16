---
description: >-
  Use these steps to reveal the information contained within an asset's DID and
  list the buyers of a datatoken using the Subgraph
---

# List datatoken buyers

## Query the Subgraph to see all buyers of a datatoken

Select the corresponding subgraph URL for the asset's network. Below are some of the popular subgraph URLs, to show you the subgraph URL format.

```
https://v4.subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql?
https://v4.subgraph.polygon.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql?
https://v4.subgraph.bsc.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql?
https://v4.subgraph.moonriver.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql?
https://v4.subgraph.energyweb.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql?
https://v4.subgraph.goerli.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql?
https://v4.subgraph.mumbai.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql?
```

You can then use the following example Javascript query to list the buyers of the datatoken.

Note, that you can also copy and paste the contents of the query function below to fetch the same info from the Ocean Subgraph [GraphiQL interface](https://v4.subgraph.mainnet.oceanprotocol.com/subgraphs/name/oceanprotocol/ocean-subgraph/graphql).&#x20;

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

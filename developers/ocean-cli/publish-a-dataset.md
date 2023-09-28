# Publish a dataset

Once the RPC environment variable has been configured, we can proceed to publish a new dataset on the connected network. The flexibility of our setup allows us to easily switch to a different network by simply substituting the RPC endpoint with one corresponding to another network.

To initiate this process, we'll begin by updating the helper DDO example named "SimpleDownloadDataset.json." This example can be found in the "./metadata" folder, which is located at the root directory of the cloned Ocean CLI project.

<pre><code>```json
{
  "@context": [
    "https://w3id.org/did/v1"
  ],
  "id": "",
  "nftAddress": "",
  "version": "4.1.0",
  "chainId": 80001,
  "metadata": {
    "created": "2021-12-20T14:35:20Z",
    "updated": "2021-12-20T14:35:20Z",
    "type": "dataset",
    "name": "ocean-cli demo asset",
    "description": "asset published using ocean cli tool",
    "tags": [
      "test"
    ],
    "author": "oceanprotocol",
    "license": "https://market.oceanprotocol.com/terms",
    "additionalInformation": {
      "termsAndConditions": true
    }
  },
  "services": [
    {
      "id": "ccb398c50d6abd5b456e8d7242bd856a1767a890b537c2f8c10ba8b8a10e6025",
      "type": "access",
      "files": {
        "datatokenAddress": "0x0",
        "nftAddress": "0x0",
        "files": [
          {
            "type": "url",
            "url": "https://dumps.wikimedia.org/enwiki/latest/enwiki-latest-abstract10.xml.gz-rss.xml",
            "method": "GET"
          }
        ]
      },
      "datatokenAddress": "",
      "serviceEndpoint": "https://v4.provider.oceanprotocol.com",
      "timeout": 86400
    }
  ],
  "event": {
  },
  "nft": {
    "address": "",
    "name": "Ocean Data NFT",
    "symbol": "OCEAN-NFT",
    "state": 5,
    "tokenURI": "",
    "owner": "",
    "created": ""
  },
  "purgatory": {
    "state": false
  },
  "datatokens": [
  ],
  "stats": {
    "allocated": 0,
    "orders": 0,
    "price": {
      "value": "2"
    }
  }
}
```
</code></pre>

Note: The provided example creates a consumable asset with a predetermined price of 2 OCEAN tokens. If you wish to modify this and create an asset that is freely accessible, you can do so by replacing the value of "stats.price.value" with 0 in the JSON example mentioned above.
Next step is to run the npm run cli publish metadata/simpleDownloadDataset.json command

<figure><img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FzQlpIJEeu8x5yl0OLuXn%2Fuploads%2F0WBqBdns3Nqip0W91uld%2FScreenshot%202023-09-28%20at%2000.58.48.png?alt=media&token=29806606-4029-4979-85a5-a3d02bb0a79d" alt=""><figcaption>running publish command</figcaption></figure>

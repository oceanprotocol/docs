# Publish

Once you've configured the RPC environment variable, you're ready to publish a new dataset on the connected network. The flexible setup allows you to switch to a different network simply by substituting the RPC endpoint with one corresponding to another network. 🌐

To initiate the dataset publishing process, we'll start by updating the helper [DDO](../ddo-specification.md)(Decentralized Data Object) example named "SimpleDownloadDataset.json." This example can be found in the `./metadata` folder, located at the root directory of the cloned Ocean CLI project.

```json
{
	"@context": ["https://w3id.org/did/v1"],
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
		"tags": ["test"],
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
	"event": {},
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
	"datatokens": [],
	"stats": {
		"allocated": 0,
		"orders": 0,
		"price": {
			"value": "2"
		}
	}
}
```

{% hint style="info" %}
The provided example creates a consumable asset with a predetermined price of 2 OCEAN. If you wish to modify this and create an asset that is freely accessible, you can do so by replacing the value of "stats.price.value" with 0 in the JSON example mentioned above.
{% endhint %}

Now, let's run the command to publish the dataset:

```bash
npm run cli publish metadata/simpleDownloadDataset.json
```

<figure><img src="../../.gitbook/assets/publish (1).png" alt=""><figcaption><p>Publish dataset</p></figcaption></figure>

Executing this command will initiate the dataset publishing process, making your dataset accessible and discoverable on the Ocean Protocol network. 🌊

# Retrieve DDO Fields 📥


After creating DDO instance based on DDO's version, we can interact with the DDO fields through the following methods:

- `getDDOFields()` which returns DDO fields such as: 
    - **id**: The Decentralized Identifier (DID) of the asset.
    - **version**: The version of the DDO.
    - **metadata**: The metadata describing the asset.
    - **services**: An array of services associated with the asset.
    - **credentials**: An array of verifiable credentials.
    - **chainId**: The blockchain chain ID where the asset is registered.
    - **nftAddress**: The address of the NFT representing the asset.
- `getAssetFields()` which returns Asset fields such as:
   - **datatokens** (optional): The datatokens associated with the asset.
   - **indexedMetadata** (optional): Encapsulates data about blockchain asset related event, NFT, stats (pricing of the asset, number of orders per asset), purgatory (if the asset belongs or not in the purgatory).
        - **event** (optional): The last event related to the asset.
        - **nft** (optional): Information about the NFT representing the asset.
        - **purgatory** (optional): Purgatory status of the asset, if applicable.
        - **stats** (optional): Statistical information about the asset (e.g., usage, views).
   **Example of indexedMetadata**
   ```json
    indexedMetadata: {
      event: {
        txid: '0xceb617f13a8db82ba9ef24efcee72e90d162915fd702f07ac6012427c31ac952',
        block: 39326976,
        from: '0x0DB823218e337a6817e6D7740eb17635DEAdafAF',
        contract: '0xBB1081DbF3227bbB233Db68f7117114baBb43656',
        datetime: '2023-02-15T16:42:22'
      },
      nft: {
        address: '0xBB1081DbF3227bbB233Db68f7117114baBb43656',
        name: 'Ocean Data NFT',
        symbol: 'OCEAN-NFT',
        state: 0,
        tokenURI:
          'data:application/json;base64,eyJuYW1lIjoiT2NlYW4gRGF0YSBORlQiLCJzeW1ib2wiOiJPQ0VBTi1ORlQiLCJkZXNjcmlwdGlvbiI6IlRoaXMgTkZUIHJlcHJlc2VudHMgYW4gYXNzZXQgaW4gdGhlIE9jZWFuIFByb3RvY29sIHY0IGVjb3N5c3RlbS5cblxuVmlldyBvbiBPY2VhbiBNYXJrZXQ6IGh0dHBzOi8vbWFya2V0Lm9jZWFucHJvdG9jb2wuY29tL2Fzc2V0L2RpZDpvcDpmYTBlOGZhOTU1MGU4ZWIxMzM5MmQ2ZWViOWJhOWY4MTExODAxYjMzMmM4ZDIzNDViMzUwYjNiYzY2YjM3OWQ1IiwiZXh0ZXJuYWxfdXJsIjoiaHR0cHM6Ly9tYXJrZXQub2NlYW5wcm90b2NvbC5jb20vYXNzZXQvZGlkOm9wOmZhMGU4ZmE5NTUwZThlYjEzMzkyZDZlZWI5YmE5ZjgxMTE4MDFiMzMyYzhkMjM0NWIzNTBiM2JjNjZiMzc5ZDUiLCJiYWNrZ3JvdW5kX2NvbG9yIjoiMTQxNDE0IiwiaW1hZ2VfZGF0YSI6ImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgdmlld0JveD0nMCAwIDk5IDk5JyBmaWxsPSd1bmRlZmluZWQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGZpbGw9JyUyM2ZmNDA5Mjc3JyBkPSdNMCw5OUwwLDIzQzEzLDIwIDI3LDE4IDM3LDE4QzQ2LDE3IDUyLDE4IDYyLDIwQzcxLDIxIDg1LDI0IDk5LDI3TDk5LDk5WicvJTNFJTNDcGF0aCBmaWxsPSclMjNmZjQwOTJiYicgZD0nTTAsOTlMMCw1MkMxMSw0OCAyMyw0NCAzMyw0NEM0Miw0MyA1MCw0NSA2MSw0OEM3MSw1MCA4NSw1MiA5OSw1NUw5OSw5OVonJTNFJTNDL3BhdGglM0UlM0NwYXRoIGZpbGw9JyUyM2ZmNDA5MmZmJyBkPSdNMCw5OUwwLDcyQzgsNzMgMTcsNzUgMjksNzZDNDAsNzYgNTMsNzYgNjYsNzdDNzgsNzcgODgsNzcgOTksNzhMOTksOTlaJyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRSJ9',
        owner: '0x0DB823218e337a6817e6D7740eb17635DEAdafAF',
        created: '2022-12-30T08:40:43'
      },
      purgatory: {
        state: false
      },
      stats: [
        {
            datatokenAddress: "0x34e84f653Dcb291838aa8AF8Be1E1eF30e749ba0",
            name: "BDT2",
            symbol: "DT2",
            serviceId: "1",
            orders: 5,
            prices: [
                        {  
                            type: "fixedrate", 
                            price: "1",
                            token:"0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
                            contract: "freContractAddress", 
                            exchangeId:  "0x23434" 
                        }
                    ]
        }
      ]
    }
   ```
- `getDDOData()` which simply retruns as `Record<string, any>` the full DDO structure including DDO and Asset fields.
- `getDid()` which returns only the Decentralized Identifier (DID), as `string`, of the asset.

## Usage of DDO Manager Functions

Now let's use [DDO V4 example](./instantiate-ddo.md#usage-examples), `DDOExampleV4` into the following javascript code, assuming `@oceanprotocol/ddo-js` has been installed as dependency before:

```javascript
const { DDOManager } = require ('@oceanprotocol/ddo-js');

const ddoInstance = DDOManager.getDDOClass(DDOExampleV4);

// DDO V4
console.log('DDO V4 Fields: ', ddoInstance.getDDOFields());
// Individual fields access
console.log('DDO V4 chain ID: ', ddoInstance.getDDOFields().chainId);
console.log('DDO V4 Asset Fields: ', ddoInstance.getAssetFields());
console.log('DDO V4 Data: ', ddoInstance.getDDOData());
console.log('DDO V4 DID: ', ddoInstance.getDid());

// The same script can be applied on DDO V5 and deprecated DDO from `Instantiate DDO section`.
```
**Execute script**

```bash
node retrieve-ddo-fields.js
```
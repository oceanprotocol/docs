# Instantiate a DDO 📥

The DDO instantiation within the `DDO.js` library is done through `static` class `DDOManager` which returns the dedicated DDO class according to DDO's version.

Supported versions are: `4.1.0`, `4.3.0`, `4.5.0`, `4.7.0`, `5.0.0`, `deprecated`.

DDO Manager has 3 children classes: 
- `V4DDO` for `4.1.0`, `4.3.0`, `4.5.0`, `4.7.0`
- `V5DDO` for `5.0.0` which contains the credentials subject used for enterprise purposes
- `DeprecatedDDO` for `deprecated` which represents a shorter form of DDO due to `deprecated` state for the NFT field (value of NFT state is different than `0`).

## Usage Examples

DDO V4 example:

```
export const DDOExampleV4 = {
  '@context': ['https://w3id.org/did/v1'],
  id: 'did:op:fa0e8fa9550e8eb13392d6eeb9ba9f8111801b332c8d2345b350b3bc66b379d5',
  nftAddress: '0xBB1081DbF3227bbB233Db68f7117114baBb43656',
  version: '4.1.0',
  chainId: 137,
  metadata: {
    created: '2022-12-30T08:40:06Z',
    updated: '2022-12-30T08:40:06Z',
    type: 'dataset' as 'dataset' | 'algorithm',
    name: 'DEX volume in details',
    description:
      'Volume traded and locked of Decentralized Exchanges (Uniswap, Sushiswap, Curve, Balancer, ...), daily in details',
    tags: ['index', 'defi', 'tvl'],
    author: 'DEX',
    license: 'https://market.oceanprotocol.com/terms',
    additionalInformation: {
      termsAndConditions: true
    }
  },
  services: [
    {
      id: '24654b91482a3351050510ff72694d88edae803cf31a5da993da963ba0087648',
      type: 'access',
      files:
        '0x04beba2f90639ff7559618160df5a81729904022578e6bd5f60c3bebfe5cb2aca59d7e062228a98ed88c4582c290045f47cdf3824d1c8bb25b46b8e10eb9dc0763ce82af826fd347517011855ce1396ac94af8cc6f29b78012b679cb78a594d9064b6f6f4a8229889f0bb53262b6ab62b56fa5c608ea126ba228dd0f87290c0628fe07023416280c067beb01a42d0a4df95fdb5a857f1f59b3e6a13b0ae4619080369ba5bede6c7beff6afc7fc31c71ed8100e7817d965d1f8f1abfaace3c01f0bd5d0127df308175941088a1f120a4d9a0290be590d65a7b4de01ae1efe24286d7a06fadeeafba83b5eab25b90961abf1f24796991f06de6c8e1c2357fbfb31f484a94e87e7dba80a489e12fffa1adde89f113b4c8c4c8877914911a008dbed0a86bdd9d14598c35894395fb4a8ea764ed2f9459f6acadac66e695b3715536338f6cdee616b721b0130f726c78ca60ec02fc86c',
      datatokenAddress: '0xfF4AE9869Cafb5Ff725f962F3Bbc22Fb303A8aD8',
      serviceEndpoint: 'https://v4.provider.polygon.oceanprotocol.com',
      timeout: 604800
    }
  ],
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
        orders: 36,
        price: {
          value: 1000,
          tokenAddress: '0x282d8efCe846A88B159800bd4130ad77443Fa1A1',
          tokenSymbol: 'mOCEAN'
        }
      }
    ]
  },
  datatokens: [
    {
      address: '0xfF4AE9869Cafb5Ff725f962F3Bbc22Fb303A8aD8',
      name: 'Boorish Fish Token',
      symbol: 'BOOFIS-23',
      serviceId:
        '24654b91482a3351050510ff72694d88edae803cf31a5da993da963ba0087648'
    }
  ],
  accessDetails: {
    templateId: 2,
    publisherMarketOrderFee: '0',
    type: 'fixed',
    addressOrId:
      '0xd829c22afa50a25ad965e2c2f3d89940a6a27dbfabc2631964ea882883bc7d11',
    price: '1000',
    isPurchasable: true,
    baseToken: {
      address: '0x282d8efce846a88b159800bd4130ad77443fa1a1',
      name: 'Ocean Token (PoS)',
      symbol: 'mOCEAN',
      decimals: 18
    },
    datatoken: {
      address: '0xff4ae9869cafb5ff725f962f3bbc22fb303a8ad8',
      name: 'Boorish Fish Token',
      symbol: 'BOOFIS-23'
    }
  },
  credentials: null
};
```

DDO V5 example:

```
export const DDOExampleV5 = {
  '@context': ['https://www.w3.org/ns/credentials/v2'],
  version: '5.0.0',
  id: 'did:ope:fa0e8fa9550e8eb13392d6eeb9ba9f8111801b332c8d2345b350b3bc66b379d5',
  credentialSubject: {
    id: 'did:ope:fa0e8fa9550e8eb13392d6eeb9ba9f8111801b332c8d2345b350b3bc66b379d5',
    metadata: {
      created: '2024-10-03T14:35:20Z',
      updated: '2024-10-03T14:35:20Z',
      type: 'dataset',
      name: 'DDO 5.0.0 Asset',
      description: {
        '@value': 'New asset published using ocean CLI tool with version 5.0.0',
        '@language': 'en',
        '@direction': 'ltr'
      },
      copyrightHolder: 'Your Copyright Holder',
      providedBy: 'Your Organization',
      author: 'oceanprotocol',
      license: {
        name: 'https://market.oceanprotocol.com/terms'
      },
      tags: ['version-5', 'new-schema'],
      categories: ['data', 'ocean-protocol'],
      additionalInformation: {
        termsAndConditions: true
      }
    },
    services: [
      {
        id: 'ccb398c50d6abd5b456e8d7242bd856a1767a890b537c2f8c10ba8b8a10e6025',
        type: 'access',
        name: 'Access Service',
        description: {
          '@value': 'Service for accessing the dataset',
          '@language': 'en',
          '@direction': 'ltr'
        },
        datatokenAddress: '0xff4ae9869cafb5ff725f962f3bbc22fb303a8ad8',
        nftAddress: '0xBB1081DbF3227bbB233Db68f7117114baBb43656',
        serviceEndpoint: 'https://v4.provider.oceanprotocol.com',
        files:
          'https://dumps.wikimedia.org/enwiki/latest/enwiki-latest-abstract10.xml.gz-rss.xml',
        timeout: 86400,
        compute: {
          allowRawAlgorithm: false,
          allowNetworkAccess: true
        },
        state: 0,
        credentials: [{}]
      }
    ],
    credentials: {
      allow: {
        request_credentials: [
          {
            type: 'VerifiableId',
            format: 'jwt_vc_json'
          },
          {
            type: 'ProofOfResidence',
            format: 'jwt_vc_json'
          },
          {
            type: 'OpenBadgeCredential',
            format: 'jwt_vc_json',
            policies: ['signature']
          }
        ]
      }
    },
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
          orders: 36,
          price: {
            value: 1000,
            tokenAddress: '0x282d8efCe846A88B159800bd4130ad77443Fa1A1',
            tokenSymbol: 'mOCEAN'
          }
        }
      ]
    },
    datatokens: [
      {
        address: '0xfF4AE9869Cafb5Ff725f962F3Bbc22Fb303A8aD8',
        name: 'Boorish Fish Token',
        symbol: 'BOOFIS-23',
        serviceId:
          '24654b91482a3351050510ff72694d88edae803cf31a5da993da963ba0087648'
      }
    ],
    chainId: 137,
    nftAddress: '0xBB1081DbF3227bbB233Db68f7117114baBb43656'
  },
  issuer: 'did:op:issuer-did',
  type: ['VerifiableCredential'],
  additionalDdos: [{ type: '', data: '' }]
};

```

Deprecated DDO Example:

```
export const deprecatedDDO = {
  id: 'did:op:fa0e8fa9550e8eb13392d6eeb9ba9f8111801b332c8d2345b350b3bc66b379d5',
  version: 'deprecated',
  chainId: 137,
  nftAddress: '0xBB1081DbF3227bbB233Db68f7117114baBb43656',
  indexedMetadata: {
    nft: {
      state: 5
    }
  }
};
```

Now let's use these DDO examples, `DDOExampleV4`, `DDOExampleV5`, `deprecatedDDO` into the following javascript code, assuming `@oceanprotocol/ddo-js` has been installed as dependency before:

```javascript
const { DDOManager } = require ('@oceanprotocol/ddo-js');

const ddoV4Instance = DDOManager.getDDOClass(DDOExampleV4);
const ddoV5Instance = DDOManager.getDDOClass(DDOExampleV5);
const deprecatedDdoInstance = DDOManager.getDDOClass(deprecatedDDO);
```
**Execute script**

```bash
node instantiate-ddo.js
```
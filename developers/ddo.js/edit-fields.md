# Edit DDO Fields ✏️

To edit fields in the DDO structure, DDO instance from `DDOManager` is required to call `updateFields` method which is present for all types of DDOs, but targets specific DDO fields, according to DDO's version.

**NOTE**: There are some restrictions that need to be taken care of before updating fields which do not exist for certain DDO.

For e.g. `deprecatedDDO`, the update on `services` key is not supported, because a `deprecatedDDO` is not supposed to store `services` information. It is design to support only: `id`, `nftAddress`, `chainId`, `indexedMetadata.nft.state`.

Supported fields to be updated are:

```javascript

export interface UpdateFields {
  id?: string;
  nftAddress?: string;
  chainId?: number;
  datatokens?: AssetDatatoken[];
  indexedMetadata?: IndexedMetadata;
  services?: ServiceV4[] | ServiceV5[];
  issuer?: string;
  proof?: Proof;
}
```

## Usage of Update Fields Function

Now let's use [DDO V4 example](./instantiate-ddo.md#usage-examples), `DDOExampleV4` into the following javascript code, assuming `@oceanprotocol/ddo.js` has been installed as dependency before:

```javascript
const { DDOManager } = require ('@oceanprotocol/ddo.js');

const ddoV4Instance = DDOManager.getDDOClass(DDOExampleV4);
const nftAddressToUpdate = "0xfF4AE9869Cafb5Ff725f962F3Bbc22Fb303A8aD8"
ddoV4Instance.updateFields({ nftAddress: nftAddressToUpdate }) // It supports update on multiple fields
// The same script can be applied on DDO V5 and deprecated DDO from `Instantiate DDO section`.
```
**Execute script**

```bash
node update-ddo-fields.js
```
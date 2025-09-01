# Validate

The DDO validation within the `DDO.js` library is performed based on SHACL schemas which enforce DDO fields types and structure based on DDO version.

**NOTE**: For more information regarding DDO structure, please consult [new DDO specification here](../assets-and-services/new-ddo-specification.md).

<figure><img src="../../.gitbook/assets/ddo.js/validation-flow.png" alt=""><figcaption><p>DDO Validation Flow using DDO.js</p></figcaption></figure>

The above diagram depicts the high level flow of Ocean core stack interaction for DDO validation using DDO.js, which will be called by Ocean Node whenever a new DDO is to be published.

Based on the DDO version, `ddo.js` will apply the corresponding SHACL schema to validate DDO fields against it.

Supported SHACL schemas can be found [here](https://github.com/oceanprotocol/ddo.js/tree/main/schemas).

**NOTE**: For DDO validation, `indexedMetadata` will not be taken in consideration in this process.

## Usage of DDO validation from Library

Now let's use [DDO V4 example](instantiate-ddo.md#usage-examples), `DDOExampleV4` into the following javascript code, assuming `@oceanprotocol/ddo-js` has been installed as dependency before:

```javascript
const { DDOManager } = require ('@oceanprotocol/ddo-js');

const ddoInstance = DDOManager.getDDOClass(DDOExampleV4);
const validation = await ddoInstance.validate();
console.log('Validation true/false: ' + validation[0]);
console.log('Validation message: ' + validation[1]);
```

**Execute script**

```bash
node validate-ddo.js
```

# Marketplace installation and configuration

## Prerequisites

### Hardware requirements

The minimum hardware requirements for the server hosting the marketplace are:

* number of cores: 1
* RAM: 8 GB
* disk: 50 GB

### Software requirements

* **Operating System:** Any Linux distribution supported by the Docker Engine and Docker Compose products. For guidance on compatible platforms, see the [Docker Compose supported platforms](https://docs.docker.com/desktop/setup/install/linux/) and [Docker Engine supported platforms](https://docs.docker.com/engine/install/) documentation
* **Software products:**
  * Docker Engine
  * Docker Compose

### **Other requirements**

* **Blockchain RPC provider**: Use a service such as Alchemy, Infura, or Chainstack. Ensure that your subscription tier supports a sufficient number of requests per second to meet the marketplace demand.
* **IPFS gateway provider**: Use a gateway such as Pinata, Cloudflare, or Filebase. Verify that your subscription tier provides adequate storage capacity, file limits, and request throughput for your expected workload.&#x20;
* **OE Node operational**: The marketplace needs an operational OE Node to run properly.



## Deployment steps

There are two ways of installing and running the market: using Docker Compose or Docker Engine.

### Option 1 - Use Docker Compose to install and run the market

To install and configure the marketplace, perform the following steps:

1. The marketplace repository is located [here](https://github.com/OceanProtocolEnterprise/market). Clone the marketplace repository (alternatively, copy only the `docker-compose.yml` and `.env.example` file from the repository).

```sh
git clone https://github.com/OceanProtocolEnterprise/market.git 
```



2. Copy `.env.example` to `.env`&#x20;

```sh
cp .env.example .env
```



3. Edit the _.env_ file to set the environment variables specific to your configuration (please refer to the [Environment Variables](marketplace-installation-and-configuration.md#environment-variables) chapter for how to set the variables).

```sh
nano .env
```



4. Start the marketplace service

```sh
docker compose up -d
```

The marketplace will start in a Docker container and will be accessible via HTTP on port 8008.



### Option 2 - Use Docker to install and run the market

To install and configure the marketplace, perform the following steps:

1. The marketplace repository is located [here](https://github.com/OceanProtocolEnterprise/market). Clone the marketplace repository (alternatively, copy only the `.env.example` file from the repository).

```sh
git clone https://github.com/OceanProtocolEnterprise/market.git 
```



2. Copy `.env.example` to _`.env`_&#x20;

```sh
cp .env.example .env
```



3. Edit the _.env_ file to set the environment variables specific to your configuration (please refer to the [Environment Variables](marketplace-installation-and-configuration.md#environment-variables) chapter for how to set the variables).

```sh
nano .env
```



4. Start the marketplace service

```sh
 docker run --name oe-market --env-file .env -p 8008:8008 -d oceanenterprise/market:latest
```

The marketplace will start in a Docker container and will be accessible via HTTP on port 8008.



## **Post installation steps**

* Deploy the marketplace server behind a reverse proxy responsible for TLS termination and secure request forwarding. The proxy should enforce HTTPS for all external traffic and route decrypted requests to the internal application port.
* Place the marketplace in a network environment that allows outbound communication to the configured OE Node. Depending on your architecture, the marketplace must also be able to reach the default SSI wallet instance and the Policy Server Proxy to function correctly.

&#x20;

## Environment Variables

### OE Node

#### NEXT\_PUBLIC\_PROVIDER\_URL&#x20;

**Description:** Sets the base URL of the OE Node used by the marketplace. This node will be used by the marketplace to encrypt the asset description at the publishing time, to decrypt the asset description at consumption time, and as the C2D environment provider.&#x20;

**Values:** string (URL)

**Example:** `https://ocean-node-vm3.oceanenterprise.io/`

**Default Value:** `https://ocean-node-vm3.oceanenterprise.io/`



#### NEXT\_PUBLIC\_METADATACACHE\_URI&#x20;

**Description:** Sets the base URL of the OE Node where the metadata cache is stored. From this cache, the assets listed in the marketplace's catalogue are read. Set it to the same value as `NEXT_PUBLIC_PROVIDER_URL`.&#x20;

**Values:** string (URL)

**Example:** `https://ocean-node-vm3.oceanenterprise.io/`

**Default Value:** `https://ocean-node-vm3.oceanenterprise.io/`



#### NEXT\_PUBLIC\_NODE\_URI\_INDEXED&#x20;

**Description:** Configures the list of OE nodes whose assets will be shown in the marketplace's catalogue. Only the assets published by the OE nodes in this list will be displayed in the catalogue.

**Values:** JSON array of strings (URL)

**Example:** `["https://ocean-node-vm3.oceanenterprise.io/", ""https://ocean-node-vm3.oceanenterprise.io/""]`

**Default Value:** the value of `NEXT_PUBLIC_PROVIDER_URL` variable or `"https://ocean-node-vm3.oceanenterprise.io"`



***

### Blockchain RPC

#### NEXT\_PUBLIC\_NODE\_URI\_MAP&#x20;

**Description:** Sets the list of blockchains to which the marketplace connects to publish and retrieve assets. Also, for each blockchain, the RPC provider URL is set.

**Values:** JSON map of chainId to RPC URL

**Example:** `{"11155111":"https://eth-sepolia.g.alchemy.com/v2/<your_key>", "11155420":"https://opt-sepolia.g.alchemy.com/v2/<your_key>}`

**Default Value:** `{}`



#### NEXT\_PUBLIC\_NODE\_URI&#x20;

**Description:** Sets the default RPC provider URL when no per-chain override is provided in `NEXT_PUBLIC_NODE_URI_MAP`.

**Values**: string (URL)

**Example:** `https://eth-sepolia-testnet.api.pocket.network/`

**Default Value:** `https://eth-sepolia-testnet.api.pocket.network/`



***

### IPFS

#### NEXT\_PUBLIC\_IPFS\_GATEWAY&#x20;

**Description:** Sets the URL of the IPFS gateway used to fetch the asset's DDO.

**Values:** String (URL)

**Example:** `https://ipfs.io/`

**Default Value:** `null`



#### NEXT\_PUBLIC\_IPFS\_UPLOAD\_URL

**Description:** Sets the API endpoint the marketplace uses to upload content to your configured IPFS provider. Consult your IPFS gateway’s documentation to ensure you supply the correct endpoint and required parameters.

**Values:** String (URL)

**Example:** `https:/api.pinata.cloud/pinning/pinJSONToIPFS/`

**Default Value:** `null`



#### NEXT\_PUBLIC\_IPFS\_DELETE\_URL

**Description:** Sets the API endpoint the marketplace uses to request content deletion from your configured IPFS provider. Check your IPFS gateway’s documentation to ensure you provide the correct endpoint and required parameters.

**Values:** String (URL)

**Example:** `https://api.pinata.cloud/pinning/unpin`

**Default Value:** `null`



#### IPFS\_JWT

**Description:** Sets the access key to the IPFS gateway provider account used to upload and retrieve files on IPFS.

**Values:** string (JWT)

**Example:** `eyJhbGciOi...`

**Default Value:** `null`



#### NEXT\_PUBLIC\_IPFS\_UNPIN\_FILES&#x20;

**Description:** Specifies if an existing license file published in IPFS is deleted or not when a new license file is uploaded

**Values:** `true/false`

**Example:** `true`

**Default Value:** `false`



&#x20;

***

### Currencies and Market Fees

The marketplace can apply two types of fees cumulatively: a fixed fee `(NEXT_PUBLIC_CONSUME_MARKET_ORDER_FEE_MAP)` and a variable, percentage‑based fee `(NEXT_PUBLIC_CONSUME_MARKET_FEE)`. Using both fee types gives the marketplace operator greater flexibility in defining the overall fee policy&#x20;



#### NEXT\_PUBLIC\_ALLOWED\_ERC20\_ADDRESSES

**Description:** Defines the token address for the currency tokens accepted by the marketplace, for each blockchain the market is connected to.&#x20;

Ensure that the listed addresses are supported by the O.E.C. smart contracts; unsupported entries will cause asset publishing to fail. Consult [this chapter](../developers/networks.md) for the latest list of supported currencies. If none of the currency tokens configured in this variable is supported by the O.E.C. smart contracts, an error message is displayed when users connect to the market.&#x20;

<mark style="color:$info;">Note: If you intend to use the fixed market‑order fee (configured via</mark> <mark style="color:$info;"></mark><mark style="color:$info;">`NEXT_PUBLIC_CONSUME_MARKET_ORDER_FEE`</mark><mark style="color:$info;">) in a market connected to multiple blockchains, ensure that all currencies across those chains use the same number of decimals. If the decimal precision differs, the fixed fee will be calculated incorrectly. This limitation will be resolved in a future market release.</mark>

**Values:** JSON map of chainId to a list of token addresses.

**Example:** `{"11155111":["0x08210F9170F89Ab7658F0B5E3fF39b0E03C594D4","0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238"]}`  i.e., for Sepolia blockchain, the supported currencies are EURC and USDC.

**Default Value:** `{}`

#### NEXT\_PUBLIC\_CONSUME\_MARKET\_ORDER\_FEE\_MAP&#x20;

**Description:** Defines the fixed market fee applied when an asset is purchased through the marketplace, whether for download or for use in a C2D job. The fee is expressed as an absolute number, written with the number of decimals used by each of the currency tokens defined in `NEXT_PUBLIC_ALLOWED_ERC20_ADDRESSES`.

**Value:** JSON map of chainId to a list of maps (token address to fee value).



**Example:** `{"11155111":[{"token":"0x08210F9170F89Ab7658F0B5E3fF39b0E03C594D4","amount":"2000000"},{"token":"0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238","amount":"1000000"}]}` , i.e., for Optimism Sepolia blockchain, the applicable fixed fees are:  2 EURC for assets priced in EURC and 1 USDC for assets priced in USDC.



**Default Value:** `{}`



#### NEXT\_PUBLIC\_CONSUME\_MARKET\_FEE

**Description**: Defines the variable fee applied when an asset is purchased through the marketplace, whether for download or for use in a C2D job. The fee is represented as a decimal value (for example,  `0.1` corresponds to a `10%` fee, and `1` corresponds to a `100%` fee). This fee is applied to all prices, regardless of the currency.&#x20;



**Example:** `0.15`, meaning that a variable fee of 15% of the asset price is applied.&#x20;



**Default Value:** `0`



#### NEXT\_PUBLIC\_MARKET\_FEE\_ADDRESS&#x20;

**Description:** Defines the address where the market fees are collected.

**Example:** `0x0db00a90deee402256cb1df89f3e14d6b9130fdd`

**Default Value:** OEC Fee Collector address

***

### SSI

#### NEXT\_PUBLIC\_SSI\_ENABLED&#x20;

**Description:** Whether the SSI-based access control is active or not in the marketplace. If the OE Node used by the marketplace (the one listed in the `NEXT_PUBLIC_PROVIDER_URL` variable) has SSI-based access control activated (i.e., the variable `POLICY_SERVER_URL`  is not null), then this variable must be set to `true`. If not, this variable must be set to `false`.

**Values:** `true/false`

**Example:** `true`

**Default Value:** `false`



#### NEXT\_PUBLIC\_SSI\_POLICY\_SERVER&#x20;

**Description:** Used only if `NEXT_PUBLIC_SSI_ENABLED=true`.  Sets the base URL of the Policy Server used by the marketplace. The value must be the same as that set in the POLICY\_SERVER\_URL of the node used by the marketplace (the one listed in the `NEXT_PUBLIC_PROVIDER_URL` variable) &#x20;

**Values:** string (URL)

**Example:** `https://ocean-node-vm3.oceanenterprise.io`

**Default Value:** `null`



#### NEXT\_PUBLIC\_SSI\_WALLET\_API&#x20;

**Description:** Used only if `NEXT_PUBLIC_SSI_ENABLED=true`.  Sets the base URL of the default SSI wallet instance. When users log in to the marketplace, this is the default SSI wallet to which they connect, in case they don't provide their own wallet instance URL.

**Values:** string (URL)

**Example:** `https://wallet.demo.oceanenterprise.io`

**Default Value:** `null`



#### NEXT\_PUBLIC\_SSI\_DEFAULT\_POLICIES\_URL&#x20;

**Description:** Used only if `NEXT_PUBLIC_SSI_ENABLED=true`.  Sets the URL from where the list of default static policies that will be applied to all requested Verifiable Credentials is read. The URL must contain a list of valid static policies, one policy per line. For reference, see [https://raw.githubusercontent.com/OceanProtocolEnterprise/policy-server/refs/heads/main/default-verification-policies](https://raw.githubusercontent.com/OceanProtocolEnterprise/policy-server/refs/heads/main/default-verification-policies)

**Values:** string (URL)

**Example:** `https://raw.githubusercontent.com/OceanProtocolEnterprise/policy-server/refs/heads/main/default-verification-policies`

**Default Value:** `null`



#### NEXT\_PUBLIC\_OPA\_SERVER\_URL&#x20;

**Description:** Used only if `NEXT_PUBLIC_SSI_ENABLED=true`.  Sets the base URL of the OPA Server used by the verifier for custom SSI policies evaluation.&#x20;

**Values:** string (URL)

**Example:** `http://ocean-node-vm3.oceanenterprise.io:8181`

**Default Value:** `null`



***

### Dataspace

#### NEXT\_PUBLIC\_DATASPACE

**Description:** Sets the identifier of the dataspace associated with the marketplace. This has two effects:

* All assets published through the marketplace will automatically receive this dataspace identifier.
* The marketplace will display only the assets whose dataspace identifier matches this value.

By default, the value of this variable is set to `null`. In this state, no filtering is applied to the assets displayed, and no dataspace identifier is added to an asset’s description

**Values:** string

**Example:** `"oceanenteprise"`

**Default Value:** `null`



### Others

#### NEXT\_PUBLIC\_ENCRYPT\_ASSET&#x20;

**Description:** Defines whether the asset's DDO is encrypted at publishing time

Values: `true/false`

**Example:** `true`

**Default Value:** `false`



#### NEXT\_PUBLIC\_HIDE\_ONBOARDING\_MODULE\_BY\_DEFAULT

**Description:** Defines whether or not the onboarding guide is hidden for new users. By default, the onboarding guide is displayed. By setting this variable to `true`, the onboarding guide is not displayed by default.&#x20;

**Value:** `true/false`

**Example:** `true`

**Default Value:** `false`



#### &#x20;NEXT\_PUBLIC\_SSI\_UI\_URL

**Description:** Defines the URL of the SSI wallet user interface provided by the marketplace operator. This URL is used in the onboarding guide to direct participants to the interface where they can add the DIDs and VCs required to access dataspace assets.

**Value:** string (URL)

**Example:** `https://wallet2-ui.oceanenterprise.io`

**Default Value:** `null`






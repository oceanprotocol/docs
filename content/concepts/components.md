---
title: Architecture Overview
description: Simplicity and Interoperability via a Datatokens Core
---

## Overview

Here is the Ocean architecture.

![Ocean Protocol tools architecture](images/architecture.png)

Here’s an overview of the figure.

- The top layer is **applications** like Ocean Market. With these apps, users can onboard data services into crypto (publish and mint datatokens), hold datatokens as assets (data wallets), discover data assets and buy / sell datatokens for fixed or auto-determined price (data marketplaces), and consume data services (consume datatokens).
- Below that are **libraries** used by the applications: Ocean React hooks, JavaScript library, and Python library. This also includes middleware to assist discovery: Aquarius and (3rd party tool) TheGraph.
- The lowest level has the **smart contracts** used by the libraries. They’re deployed on Ethereum mainnet to start, and other networks later.

Left to right are groupings of functionality: tools for datatokens, tools for markets (including pools), tools to consume data services and for metadata, and external ERC20 tools.

The rest of this page elaborates.

## Datatokens & Access Control Tools

The publisher actor holds the dataset in Google Drive, Dropbox, AWS S3, on their phone, on their home server, etc. The dataset has a URL. The publisher can optionally use IPFS for a content-addressable URL. Or instead of a file, the publisher may run a compute-to-data service.

In the **publish** step, the publisher invokes **Ocean Datatoken Factory** to deploy a new datatoken to the chain. To save gas fees, it uses [ERC1167](https://eips.ethereum.org/EIPS/eip-1167) proxy approach on the **ERC20 datatoken template**. The publisher then mints datatokens.

The publisher runs **Ocean Provider**. In the **consume** step, Provider software needs to retrieve the data service URL given a datatoken address. One approach would be for the publisher to run a database; however this adds another dependency. To avoid this, it stores the URL on-chain. So that others don’t see that URL, it encrypts it.

To initiate the **consume** step, the data consumer sends 1.0 datatokens to the Provider wallet. Then they make a service request to the Provider. The Provider loads the encrypted URL, decrypts it, and provisions the requested service (send static data, or enable a compute-to-data job).

Instead of running a Provider themselves, the publisher can have a 3rd party like Ocean Market run it. While more convenient, it means that the 3rd party has custody of the private encryption/decryption key (more centralized). Ocean will support more service types and url custody options in the future.

**Ocean JavaScript and Python libraries** act as drivers for the lower-level contracts. Each library integrates with Ocean Provider to provision & consume data services, and Ocean Aquarius for metadata. **Ocean React hooks** use the JavaScript library, to help build webapps & React Native apps with Ocean.

## Market Tools

Once someone has generated datatokens, they can be used in any ERC20 exchange, centralized or decentralized. In addition, Ocean provides a convenient default marketplace that is tuned for data: **Ocean Market**. It’s a vendor-neutral reference data marketplace for use by the Ocean community.

The marketplaces are decentralized (no single owner or controller), and non-custodial (only the data owner holds the keys for the datatokens).

Ocean Market supports fixed pricing and automatic price discovery.

- For **fixed pricing**, there’s a simple contract for users to buy/sell datatokens for OCEAN, while avoiding custodianship during value transfer.
- For **automatic price discovery**, Ocean Market uses automated market makers (AMMs) powered by [Balancer](https://www.balancer.finance). Each pool is a datatoken-OCEAN pair. In the Ocean Market GUI, the user adds liquidity then invokes pool creation; the GUI’s React code calls the Ocean JavaScript library, which calls the **Pool Factory** to deploy a **Pool** contract. (The Python library also does this.) Deploying a datatoken pool can be viewed as an “Initial Data Offering” (IDO).

Complementary to Ocean Market, Ocean has reference code to ease building **third-party data marketplaces**, such as for logistics ([dexFreight data marketplace](https://blog.oceanprotocol.com/dexfreight-ocean-protocol-partner-to-enable-transportation-logistics-companies-to-monetize-data-7aa839195ac)) or mobility ([Daimler](https://blog.oceanprotocol.com/ocean-protocol-delivers-proof-of-concept-for-daimler-ag-in-collaboration-with-daimler-south-east-564aa7d959ca)).

[This post](https://blog.oceanprotocol.com/ocean-market-an-open-source-community-marketplace-for-data-4b99bedacdc3) elaborates on Ocean marketplace tools.

## Metadata Tools

Metadata (name of dataset, date created etc.) is used by marketplaces for data asset discovery. Each data asset can have a [decentralized identifier](https://w3c-ccg.github.io/did-spec/) (DID) that resolves to a DID document (DDO) for associated metadata. The DDO is essentially [JSON](https://www.json.org/) filling in metadata fields. [OEP7](https://github.com/oceanprotocol/OEPs/tree/master/7) formalizes Ocean DID usage.

[OEP8](https://github.com/oceanprotocol/OEPs/tree/master/8) specifies Ocean metadata schema, including fields that must be filled. It’s based on the public [DataSet schema from schema.org](https://schema.org/Dataset).

Ocean uses the Ethereum mainnet as an **on-chain metadata store**, i.e. to store both DID and DDO. This means that once the write fee is paid, there are no further expenses or dev-ops work needed to ensure metadata availability into the future, aiding in the discoverability of data assets. It also simplifies integration with the rest of the Ocean system, which is Ethereum-based. Storage cost on Ethereum mainnet is not negligible, but not prohibitive and the other benefits are currently worth the tradeoff compared to alternatives.

Due to the permissionless, decentralized nature of data on Ethereum mainnet, any last-mile tool can access metadata. **Ocean Aquarius** supports different metadata fields for each different Ocean-based marketplace. Developers could also use [TheGraph](https://www.thegraph.com) to see metadata fields that are common across all marketplaces.

## Third-Party ERC20 Apps & Tools

The ERC20 nature of datatokens eases composability with other Ethereum tools and apps, including **MetaMask** and **Trezor** as data wallets, DEXes as data exchanges, and more. [This post](https://blog.oceanprotocol.com/ocean-datatokens-from-money-legos-to-data-legos-4f867cec1837) has details.

## Actor Identities

Actors like data providers and consumers have Ethereum addresses, aka web3 accounts. These are managed by crypto wallets, as one would expect. For most use cases, this is all that’s needed. There are cases where the Ocean community could layer on protocols like [Verifiable Credentials](https://www.w3.org/TR/vc-data-model/) or tools like [3Box](https://3box.io/).


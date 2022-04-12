---
title: Publish a Data asset on Ocean Market place.
description: A tutorial to publish an asset using Ocean Market
---

## What can be published?

Ocean Market provides a convenient interface for individuals as well as organizations to publish their data. Data set can be images, location information, audio, video, sales data, or combinations of all! There is no exhaustive list of what type of data can be published on the Market. Please note that the Ocean Protocol team maintains a purgatory list [here](https://github.com/oceanprotocol/list-purgatory) to block addresses and remove assets for any violations.

## Tutorial

### Connecting wallet and navigating to the publish page

1. Go to <a href="https://v4.market.oceanprotocol.com " target="_blank">Ocean Market</a>

2. Connect wallet.

   ![connect wallet](images/marketplace/connect-wallet.png 'Connect wallet')

   In this tutorial, we will be using Rinkeby testnet.

3. Go to publish page.

   ![publish page](images/marketplace/publish.png 'Go to publish page')

### Step 1 - Fill in metadata

Fill in the metadata.

_Mandatory fields are marked with <span style="color: red;">\*</span>_

- **Asset type**<span style="color: red;">\*</span>

  An asset can be a dataset or an algorithm. The type of asset cannot be changed once the asset is published on chain. Based on the the selected asset type, addtional form fields will appear.

- **Title**<span style="color: red;">\*</span>

  This a descriptive name of the asset and can be changed later.

- **Description**<span style="color: red;">\*</span>

  This field can store the information about the asset. Ocean Marketplace supports rendering the content of this field in Markdown format. The description can be updated anytime.

- **Author**<span style="color: red;">\*</span>

  Author can be an individual or an organization. The author name can be updated anytime.

- **Tags**

  Tags help the asset to be discoverable. If not provided, the list of tags is empty by default.

![publish part-1](images/marketplace/publish-1.png 'Fill in metadata')

### Step 2 - Fill in access details

_Mandatory fields are marked with <span style="color: red;">\*</span>_

- **Access Type**<span style="color: red;">\*</span>

  An asset can be a downloadable file or a compute service on which buyers can run their algorithm. By selecting **download**, buyers will be able to download the dataset. Select **compute** if the access to the dataset is to be allowed in a compute-to-data environment.

- **Provider URL**<span style="color: red;">\*</span>

  Provider facilitates the asset download to buyers or for compute jobs and much more. Provider URL cannot be changed once the asset is published.

- **File**<span style="color: red;">\*</span>

  This is the URL from which the dataset can be accessed. **Provider** encrypts this field before publishing the asset on-chain. Once the asset is published, the file URL cannot be changed.

- **Sample file**<span style="color: red;">\*</span>

  This is the sample URL that potential buyers can access before buying the dataset. **Provider** encrypts this field before publishing the asset on-chain. The sample file can be updated anytime.

- **Timeout**<span style="color: red;">\*</span>

  This field specifies how long the buyer can access the dataset after the dataset is purchased. The timeout can be updated anytime.

![publish part-2](images/marketplace/publish-2.png 'Fill in access details')

### Step 3 - Set pricing

Before the asset is published, the user(s) can choose the pricing option as per their choice. Only the publisher can set the pricing option and cannot be changed once the publisher selects any one method.

There are 3 options for settings the price of an asset on Ocean Marketplace.

1. Fixed pricing
2. Dynamic pricing (using Balancer pools)
3. Free pricing

Flow for dynamic pricing schema is shown below.

![publish part-3](images/marketplace/publish-3.png 'Set pricing')

### Step 4 - Preview and confirm

![publish part-4](images/marketplace/publish-4.png 'Preview')

### Step 5 - Send blockchain transactions

![publish part-5](images/marketplace/publish-5.png 'Transaction 1 - Allow access to Ocean tokens')

<br />

![publish part-6](images/marketplace/publish-6.png 'Transaction 2 - Deploy data NFT and datatoken')

<br />

![publish part-7](images/marketplace/publish-7.png 'Transaction 3 - Publish DDO')

### Confirmation

Once the transactions are completed, the below screen is displayed.

![publish success](images/marketplace/publish-8.png 'Successful publish')

To view the the published assets on the marketplace click [here](https://v4.market.oceanprotocol.com/profile)

## Other Articles

https://blog.oceanprotocol.com/on-selling-data-in-ocean-market-9afcfa1e6e43

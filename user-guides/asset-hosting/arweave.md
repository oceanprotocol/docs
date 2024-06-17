---
description: How to use decentralized hosting for your NFT assets
---

# Arweave

### Using Arweave with Uploader

Enhance the efficiency of your file uploads by leveraging the simplicity of the [Ocean Uploader](https://github.com/oceanprotocol/docs/blob/node-release/user-guides/asset-hosting/Uploader.md) storage system for Arweave. Dive into our comprehensive guide [here](https://github.com/oceanprotocol/docs/blob/node-release/user-guides/asset-hosting/Uploader.md) to discover detailed steps and tips, ensuring a smooth and hassle-free uploading process. Your experience matters, and we're here to make it as straightforward as possible.

### Arweave

[Arweave](https://www.arweave.org/) is a global, permanent, and decentralized data storage layer that allows you to store documents and applications forever. Arweave is different from other decentralized storage solutions in that there is only one up-front cost to upload each file.

**Step 1 - Get a new wallet and AR tokens**

Download & save a new wallet (JSON key file) and receive a small amount of AR tokens for free using the [Arweave faucet](https://faucet.arweave.net/). If you already have an Arweave browser wallet, you can skip to Step 3.

At the time of writing, the faucet provides 0.02 AR which is more than enough to upload a file.

If at any point you need more AR tokens, you can fund your wallet from one of Arweave's [supported exchanges](https://arwiki.wiki/#/en/Exchanges).

**Step 2 - Load the key file into the arweave.app web wallet**

Open [arweave.app](https://arweave.app/) in a browser. Select the '+' icon in the bottom left corner of the screen. Import the JSON key file from step 1.

![Arweave.app import key file](../../.gitbook/assets/arweave-1.png)

**Step 3 - Upload file**

Select the newly imported wallet by clicking the "blockies" style icon in the top left corner of the screen. Select **Send.** Click the **Data** field and select the file you wish to upload.

![Arweave.app upload file](../../.gitbook/assets/arweave-2.png)

The fee in AR tokens will be calculated based on the size of the file and displayed near the bottom middle part of the screen. Select **Submit** to submit the transaction.

After submitting the transaction, select **Transactions** and wait until the transaction appears and eventually finalizes. This can take over 5 minutes so please be patient.

**Step 4 - Copy the transaction ID**

Once the transaction finalizes, select it, and copy the transaction ID.

![Arweave.app transaction ID](../../.gitbook/assets/arweave-3.png)

**Step 5 - Publish the asset with the transaction ID**

![Ocean Market - Publish with arweave transaction ID](../../.gitbook/assets/arweave-4.png)

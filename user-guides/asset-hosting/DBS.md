---
description: How to use Ocean decentralized backend storage
---

# Decentralized Backend Storage

### What is DBS? 

DBS stands for Decentralized Backend Storage. It is designed to simplify the process of storring your assets on decentralized networks (such as arweave and filecoin). It provides access to multiple secure, reliable, and cost-effective storage solutions in an easy to use UI and javascript library.

### What decentralized storage options are available?

Currently we support Arweave and we will soon be releasing Filecoin support. In the future we will also support multiple other options. 

### How to store an asset on Arweave with the DBS UI? 

1. Make sure that you have polygon MATIC and WMATIC in your wallet. You can get WMATIC from uniswap/quickswap or direct from the contract on polygonscan

2. Go to: https://dbs-ui-lib.vercel.app/?path=/docs/dbs-ui-library-dbsuploader--docs

3. Connect your wallet

4. Make sure that you are on polygon network (note that Mumbai is disabled)

5. Click "Choose file" and select the file that you want to upload.

6. Click "Get Quote" and wait for the quote estimate

7. Click "Upload file"

8. Set the spending cap and sign the approval transaction

9. Sign the message

10. Wait for the whole process to complete, it can take a while (in the attached video my upload took > 3 mins)

11. Now click "Get DDO link"

12. sign another message

13. You now have the Arweave transaction id for your asset so you can navigate to arweave.net/{YOUR_TXID} to see your asset.

### How to store an asset on Arweave with the DBS

Install the library using npm or yarn:

```bash
npm install @oceanprotocol/dbs

```bash
yarn add @oceanprotocol/dbs
```

or

yarn add @oceanprotocol/dbs


```typescript
import { ethers } from 'ethers';
import {
  DBSClient,
  GetQuoteArgs,
  GetQuoteResult
} from '@oceanprotocol/dbs';
import dotenv from 'dotenv';

dotenv.config();

// Set up a new instance of the DBS client
const signer = new ethers.Wallet(process.env.PRIVATE_KEY);
const client = new DBSClient(process.env.DBS_API_URL, process.env.DBS_ACCOUNT, signer);

async function uploadAsset() {
  // Get storage info
  const info = await client.getStorageInfo();

  // Fetch a quote using the local file path
  const quoteArgs: GetQuoteArgs = {
    type: info[0].type,
    duration: 4353545453,
    payment: {
      chainId: info[0].payment[0].chainId,
      tokenAddress: info[0].payment[0].acceptedTokens[0].value
    },
    userAddress: process.env.USER_ADDRESS,
    filePath: ['/home/username/ocean/test1.txt']  // example file path
  };
  const quoteResult: GetQuoteResult = await client.getQuote(quoteArgs);

  // Upload the file using the returned quote
  await client.upload(quoteResult.quoteId, quoteArgs.filePath);
  console.log('Files uploaded successfully.');
}

uploadAsset().catch(console.error);

```
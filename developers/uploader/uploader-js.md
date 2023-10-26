# Uploader.js

<a href="https://github.com/oceanprotocol/uploader.js" target="_blank">Uploader.js</a> is a robust TypeScript library that serves as a vital bridge to interact with the Ocean Uploader API. It simplifies the process of managing file storage uploads, obtaining quotes, and more within the Ocean Protocol ecosystem. This library offers developers a straightforward and efficient way to access the full range of Uploader API endpoints, facilitating seamless integration of decentralized storage capabilities into their applications. 

Whether you're building a decentralized marketplace, a content management system, or any application that involves handling digital assets, Uploader.js provides a powerful toolset to streamline your development process and enhance your users' experience.

### Browser Usage

Ensure that the Signer object (signer in this case) you're passing to the function when you call it from the browser is properly initialized and is compatible with the browser. For instance, if you're using something like MetaMask as your Ethereum provider in the browser, you'd typically use the ethers.Web3Provider to generate a signer.

### How to Safely Store Your Precious Files with Ocean Uploader Magic 🌊✨

Excited to get your files safely stored? Let's breeze through the process using Ocean Uploader. First things first, install the package with npm or yarn:

```bash
npm install @oceanprotocol/uploader

```bash
yarn add @oceanprotocol/uploader
```

or

```bash
yarn add @oceanprotocol/uploader
```

Got that done? Awesome! Now, let's dive into a bit of TypeScript:

```typescript
import { ethers } from 'ethers';
import {
  UploaderClient,
  GetQuoteArgs,
  GetQuoteResult
} from '@oceanprotocol/uploader';
import dotenv from 'dotenv';

dotenv.config();

// Set up a new instance of the Uploader client
const signer = new ethers.Wallet(process.env.PRIVATE_KEY);
const client = new UploaderClient(process.env.UPLOADER_URL, process.env.UPLOADER_ACCOUNT, signer);

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

There you go! That's all it takes to upload your files using Uploader.js. Easy, right? Now go ahead and get those files stored securely. You got this! 🌟💾

For additional details, please visit the [Uploader.js](https://github.com/oceanprotocol/uploader.js) repository.

### API

The library provides the following methods:
constructor(baseURL: string): Create a new instance of the UploaderClient.
- ```getStorageInfo(): Promise<StorageInfo[]>```: Fetch information about supported storage types and payments.
- ```getQuote(args: GetQuoteArgs): Promise<GetQuoteResult>```: Fetch a quote for storing files on a specific storage.
- ```upload(quoteId: string, nonce: number, signature: string, files: File[]): Promise<void>```: Upload files according to the quote request.
- ```getStatus(quoteId: string): Promise<GetStatusResult>: Fetch the status of a job.```
- ```getLink(quoteId: string, nonce: number, signature: string): Promise<GetLinkResult[]>```: Fetch the DDO files object for a job.
- ```registerMicroservice(args: RegisterArgs): Promise<void>```: Register a new microservice that handles a storage type.
- ```getHistory(page: number = 1, pageSize: number = 25): Promise<any>```: Retrieves the quote history for the given user address, nonce, and signature.

Whether you're a developer looking to integrate Ocean Uploader into your application or a contributor interested in enhancing this TypeScript library, we welcome your involvement. By following the <a href="https://github.com/oceanprotocol/uploader.js" target="_blank">provided documentation</a>, you can harness the capabilities of Uploader.js to make the most of decentralized file storage in your projects. 

Feel free to explore the API reference, contribute to the library's development, and become a part of the Ocean Protocol community's mission to democratize data access and storage.
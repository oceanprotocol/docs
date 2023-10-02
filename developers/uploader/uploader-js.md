# Uploader.js

<a href="https://github.com/oceanprotocol/uploader.js" target="_blank">Uploader.js</a> is a robust TypeScript library that serves as a vital bridge to interact with the Ocean Uploader API. It simplifies the process of managing file storage uploads, obtaining quotes, and more within the Ocean Protocol ecosystem. This library offers developers a straightforward and efficient way to access the full range of Uploader API endpoints, facilitating seamless integration of decentralized storage capabilities into their applications. 

Whether you're building a decentralized marketplace, a content management system, or any application that involves handling digital assets, Uploader.js provides a powerful toolset to streamline your development process and enhance your users' experience.

### Browser Usage

Ensure that the Signer object (signer in this case) you're passing to the function when you call it from the browser is properly initialized and is compatible with the browser. For instance, if you're using something like MetaMask as your Ethereum provider in the browser, you'd typically use the ethers.Web3Provider to generate a signer.

1. Setting up a Signer: with MetaMask or similar browser wallets, you can set up an ethers signer as follows:

```
const provider = new Web3Provider(window.ethereum)
const signer = provider.getSigner()
```

2. Initialize DBSClient:

3. HTML Setup: Provide a file input for users to select multiple files.
```
<input type="file" multiple id="fileInput" />
```
4. JavaScript: Get the files from the input and call the upload function.
```
document.getElementById('fileInput').addEventListener('change', async function () {
  const files = this.files
  await uploadBrowser(quoteId, tokenAddress, files)
})
```

For additional details, please visit the Uploader.js repository.

### API

The library provides the following methods:
constructor(baseURL: string): Create a new instance of the DBSClient.
- ```getStorageInfo(): Promise<StorageInfo[]>```: Fetch information about supported storage types and payments.
- ```getQuote(args: GetQuoteArgs): Promise<GetQuoteResult>```: Fetch a quote for storing files on a specific storage.
- ```upload(quoteId: string, nonce: number, signature: string, files: File[]): Promise<void>```: Upload files according to the quote request.
- ```getStatus(quoteId: string): Promise<GetStatusResult>: Fetch the status of a job.```
- ```getLink(quoteId: string, nonce: number, signature: string): Promise<GetLinkResult[]>```: Fetch the DDO files object for a job.
- ```registerMicroservice(args: RegisterArgs): Promise<void>```: Register a new microservice that handles a storage type.
- ```getHistory(page: number = 1, pageSize: number = 25): Promise<any>```: Retrieves the quote history for the given user address, nonce, and signature.

Whether you're a developer looking to integrate Ocean Protocol's storage management service into your application or a contributor interested in enhancing this TypeScript library, we welcome your involvement. By following the <a href="https://github.com/oceanprotocol/uploader.js" target="_blank">provided documentation</a>, you can harness the capabilities of Uploader.js to make the most of decentralized file storage in your projects. 

Feel free to explore the API reference, contribute to the library's development, and become a part of the Ocean Protocol community's mission to democratize data access and storage.
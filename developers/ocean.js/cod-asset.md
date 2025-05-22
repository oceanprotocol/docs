# Run C2D Jobs

**Overview**

Compute-to-Data is a powerful feature of Ocean Protocol that enables privacy-preserving data analysis and computation. With Compute-to-Data, data owners can maintain control over their data while allowing external parties to perform computations on that data.

This documentation provides an overview of Compute-to-Data in Ocean Protocol and explains how to use it with Ocean.js. For detailed code examples and implementation details, please refer to the official [Ocean.js](https://github.com/oceanprotocol/ocean.js) GitHub repository.

**Getting Started**

To get started with Compute-to-Data using Ocean.js, follow these steps:

1. **Environment Setup**: Ensure that you have the necessary dependencies and libraries installed to work with Ocean.js. Refer to the Ocean.js documentation for detailed instructions on setting up your development environment.
2. **Connecting to the Ocean Protocol Network**: Establish a connection to the Ocean Protocol network using Ocean.js. This connection will enable you to interact with the various components of Ocean Protocol, including Compute-to-Data.
3. **Registering a Compute-to-Data Service**: As a data provider, you can register a Compute-to-Data service using Ocean.js. This process involves specifying the data you want to expose and defining the computation tasks that can be performed on it.
4. **Searching and Consuming Compute-to-Data Services**: As a data consumer, you can search for Compute-to-Data services available on the Ocean Protocol network. Utilize Ocean.js to discover services based on data types, pricing, and other parameters.
5. **Executing Computations on Data**: Once you have identified a suitable Compute-to-Data service, use Ocean.js to execute computations on the provided data. The actual computation is performed by the service provider, and the results are securely returned to you.

Please note that the implementation details of Compute-to-Data can vary depending on your specific use case. The code examples available in the Ocean.js GitHub repository provide comprehensive illustrations of working with Compute-to-Data in Ocean Protocol. Visit [ComputeExamples.md](https://github.com/oceanprotocol/ocean.js/blob/main/ComputeExamples.md) for detailed code snippets and explanations that guide you through leveraging Compute-to-Data capabilities.

#### Prerequisites

* [Obtain an API key](../get-api-keys-for-blockchain-access.md)
* [Set up the .env file](configuration.md#create-a-env-file)
* [Install the dependencies](configuration.md#setup-dependencies)
* [Create a configuration file](configuration.md#create-a-configuration-file)


The variable **NODE\_URL** should be set correctly in `.env` file

#### Create a script that starts compute to data using an already published dataset and algorithm

Create a new file in the same working directory where configuration file (`config.js`) and `.env` files are present, and copy the code as listed below.

<pre class="language-javascript" data-overflow="wrap"><code class="lang-javascript">// Note: Make sure .env file and config.js are created and setup correctly
const { oceanConfig } = require('./config.js');
const { ZERO_ADDRESS, NftFactory, getHash, Nft } = require ('@oceanprotocol/lib');

// replace the did here
const datasetDid = "did:op:a419f07306d71f3357f8df74807d5d12bddd6bcd738eb0b461470c64859d6f0f";
const algorithmDid = "did:op:a419f07306d71f3357f8df74807d5d12bddd6bcd738eb0b461470c64859d6f0f";

// This function takes dataset and algorithm dids as a parameters,
// and starts a compute job for them
<strong>const startComputeJob = async (datasetDid, algorithmDid) => {
</strong>  
  const consumer = await oceanConfig.consumerAccount.getAddress();
  
   // Fetch the dataset and the algorithm from Aquarius
  const dataset = await await oceanConfig.aquarius.resolve(datasetDid);
  const algorithm = await await oceanConfig.aquarius.resolve(algorithmDid);
  
  // Let's fetch the compute environments and choose the free one
  computeEnvs = await ProviderInstance.getComputeEnvironments(providerUrl)
    const computeEnv = computeEnvs[0] // it is only one environment with paid and free resources
    
    // Let's choose paid available resources
    const resources: ComputeResourceRequest[] = [
      {
        id: 'cpu',
        amount: 2
      },
      {
        id: 'ram',
        amount: 1000000000
      },
      {
        id: 'disk',
        amount: 0
      }
    ]
    const assets: ComputeAsset[] = [
      {
        documentId: dataset.id,
        serviceId: dataset.services[0].id
      }
    ]
    const dtAddressArray = [dataset.services[0].datatokenAddress]
    const algo: ComputeAlgorithm = {
      documentId: algorithm.id,
      serviceId: algorithm.services[0].id
    }

  // Request five minutes of compute access
    const mytime = new Date()
    const computeMinutes = 5
    mytime.setMinutes(mytime.getMinutes() + computeMinutes)
    const computeValidUntil = Math.floor(mytime.getTime() / 1000)

  // Let's initialize the provider fees and escrow payment for the compute job
    const providerInitializeComputeResults = await ProviderInstance.initializeCompute(
      assets,
      algo,
      computeEnv.id,
      paymentToken,
      computeValidUntil,
      providerUrl,
      consumerAccount,
      resources
    )

  // Escrow adding funds for paid compute
    const escrow = new EscrowContract(
      ethers.utils.getAddress(providerInitializeComputeResults.payment.escrowAddress),
      consumerAccount
    )

    const amountToDeposit = (
      providerInitializeComputeResults.payment.amount * 2 // make it double
    ).toString()

    const chainId = (await consumerAccount.provider.getNetwork()).chainId
    // Verifying funds
    await escrow.verifyFundsForEscrowPayment(
      computeEnv.fees[chainId][0].feeToken,
      computeEnv.consumerAddress,
      await unitsToAmount(consumerAccount, paymentToken, amountToDeposit),
      providerInitializeComputeResults.payment.amount.toString(),
      providerInitializeComputeResults.payment.minLockSeconds.toString(),
      '10'
    )
 
  
  // We now order both the dataset and the algorithm
  algo.transferTxId = await handleOrder(
    providerInitializeComputeResults.algorithm,
    algorithm.services[0].datatokenAddress,
    consumerAccount,
    computeEnv.consumerAddress,
    0
  )
  
  asset.transferTxId = await handleOrder(
    providerInitializeComputeResults.datasets[0],
    dataset.services[0].datatokenAddress,,
    consumerAccount,
    computeEnv.consumerAddress,
    0
  )
  
  // Start the compute job for the given dataset and algorithm
  const computeJobs = await ProviderInstance.computeStart(
      providerUrl,
      consumerAccount,
      computeEnv.id,
      assets,
      algo,
      computeJobDuration,
      paymentToken,
      computeEnv.resources,
      chainId
    )
  
  return  computeJobs[0].jobId
  
};

const checkIfJobFinished = async (jobId) => {
  const jobStatus = await ProviderInstance.computeStatus(
      providerUrl,
      await consumerAccount.getAddress(),
      computeJobId,
      DATASET_DDO.id
    )
  if (jobStatus?.status === 70) return true
  else checkIfJobFinished(jobId)
}

const checkIfJobFinished = async (jobId) => {
  const jobStatus = await ProviderInstance.computeStatus(
      providerUrl,
      await consumerAccount.getAddress(),
      computeJobId,
      DATASET_DDO.id
    )
  if (jobStatus?.status === 70) return true
  else checkIfJobFinished(jobId)
}

const downloadComputeResults = async (jobId) => {
  const downloadURL = await ProviderInstance.getComputeResultUrl(
      oceanConfig.providerURI,
      oceanConfig.consumerAccount,
      jobId,
      0
    )
}

// Call startComputeJob(...) checkIfJobFinished(...) downloadComputeResults(...)
// functions defined above in that particular order 
startComputeJob(datasetDid, algorithmDid).then((jobId) => {
  checkIfJobFinished(jobId).then((result) => {
    downloadComputeResults(jobId).then((result) => {
      process.exit();
    })
  })
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
</code></pre>


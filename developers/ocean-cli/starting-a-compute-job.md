# Starting a compute job

To initiate a compute job, there are two main approaches you can take. The first method involves publishing both the dataset and algorithm, as detailed in the previous section Publish a dataset, and then proceeding to start the compute job. Alternatively, you can opt to explore available datasets and algorithms and initiate a compute-to-data job using a combination of your choice.

To demonstrate the latter option, you can utilize the following command:

```bash
npm run cli startCompute 'DATASET_DID' 'ALGO_DID'
```

In this command, 'DATASET_DID' should be replaced with the specific DID of the dataset you wish to employ, and 'ALGO_DID' with the DID of the algorithm you want to apply. By executing this command, you will trigger the initiation of a compute-to-data job that leverages the selected dataset and algorithm for processing.

<figure><img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FzQlpIJEeu8x5yl0OLuXn%2Fuploads%2FMEY5XCfq5mW4Nm7mQlo9%2FScreenshot%202023-09-28%20at%2001.49.16.png?alt=media&token=30b0d80e-cc9b-43fb-a50e-66d7409c6b69" alt=""><figcaption>startCompute method example</figcaption></figure>

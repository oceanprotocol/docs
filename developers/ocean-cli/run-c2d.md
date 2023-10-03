# Run C2D Jobs 🚀

## Start a Compute Job 🎯

Initiating a compute job can be accomplished through two primary methods. 
1. The first approach involves publishing both the dataset and algorithm, as explained in the previous section, [Publish a Dataset](./publish.md) Once that's completed, you can proceed to initiate the compute job. 
2. Alternatively, you have the option to explore available datasets and algorithms and kickstart a compute-to-data job by combining your preferred choices.

To illustrate the latter option, you can use the following command:

```bash
npm run cli startCompute 'DATASET_DID' 'ALGO_DID'
```
In this command, replace `DATASET_DID` with the specific DID of the dataset you intend to utilize and `ALGO_DID` with the DID of the algorithm you want to apply. By executing this command, you'll trigger the initiation of a compute-to-data job that harnesses the selected dataset and algorithm for processing.

<figure><img src="../../.gitbook/assets/cli/c2dstart.png" alt=""><figcaption>Start a compute job</figcaption></figure>


## Download Compute Results 🧮

To obtain the compute results, we'll follow a two-step process. First, we'll employ the `getJobStatus`` method, patiently monitoring its status until it signals the job's completion. Afterward, we'll utilize this method to acquire the actual results.

###  Monitor Job Status
To track the status of a job, you'll require both the dataset DID and the compute job DID. You can initiate this process by executing the following command:

```bash
npm run cli getJobStatus 'DATASET_DID' 'JOB_ID'
```

Executing this command will allow you to observe the job's status and verify its successful completion.

<figure><img src="../../.gitbook/assets/cli/jobstatus.png" alt=""><figcaption>Get Job Status</figcaption></figure>

### Download C2D Results

For the second method, the dataset DID is no longer required. Instead, you'll need to specify the job ID, the index of the result you wish to download from the available results for that job, and the destination folder where you want to save the downloaded content. The corresponding command is as follows:

```bash
 npm run cli downloadJobResults 'JOB_ID' 'RESULT_INDEX' 'DESTINATION_FOLDER'
```

<figure><img src="../../.gitbook/assets/cli/jobResults.png" alt=""><figcaption>Download C2D Job Results</figcaption></figure>

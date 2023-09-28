# Downloading compute results

To retrieve the compute results, we'll employ two distinct methods. Initially, we'll use the getJobStatus method, where we'll wait for or periodically check the status until it indicates that the job is finished. Subsequently, we'll utilize the method to obtain the actual results.

For the first method, you'll need both the dataset DID and the compute job DID. You can execute the following command: <code>npm run cli getJobStatus 'DATASET_DID' 'JOB_ID'</code>. This command will enable you to monitor the status of the job and ensure it has completed successfully.

<figure><img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FzQlpIJEeu8x5yl0OLuXn%2Fuploads%2FGURaTt0siyBHMDLwD1s5%2FScreenshot%202023-09-28%20at%2001.59.14.png?alt=media&token=528bd4e0-4a48-43f1-924d-c32976a7663b" alt=""><figcaption>getJobStatus</figcaption></figure>

For the second method, the dataset DID is no longer required. Instead, you'll need to specify the job ID, the index of the result you wish to download from the available results for that job, and the destination folder where you want to save the downloaded content. The corresponding command is as follows: <code> npm run cli downloadJobResults 'JOB_ID' 'RESULT_INDEX' 'DESTINATION_FOLDER'</code>

<figure><img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FzQlpIJEeu8x5yl0OLuXn%2Fuploads%2FjvvCAOQVQvAv2ygNtPby%2FScreenshot%202023-09-28%20at%2002.01.42.png?alt=media&token=da8868d7-6fdb-4dce-ac9a-6b395a0960e5 alt=""><figcaption>downloadJobResults</figcaption></figure>

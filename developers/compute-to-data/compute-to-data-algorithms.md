---
title: Writing Algorithms for Compute to Data
description: >-
  Learn how to write algorithms for use in Ocean Protocol's Compute-to-Data
  feature.
---

# Writing Algorithms


In the Ocean Protocol stack, algorithms are recognized as distinct asset types, alongside datasets. When it comes to Compute-to-Data, an algorithm comprises the following key components:

* **Algorithm Code**: The algorithm code refers to the specific instructions and logic that define the computational steps to be executed on a dataset. It encapsulates the algorithms' functionalities, calculations, and transformations.
* **Docker Image**: A Docker image plays a crucial role in encapsulating the algorithm code and its runtime dependencies. It consists of a base image, which provides the underlying environment for the algorithm, and a corresponding tag that identifies a specific version or variant of the image.
* **Entry Point**: The entry point serves as the starting point for the algorithm's execution within the compute environment. It defines the initial actions to be performed when the algorithm is invoked, such as loading necessary libraries, setting up configurations, or calling specific functions.

Collectively, these components form the foundation of an algorithm in the context of Compute-to-Data.

### Environment

When creating an algorithm asset in Ocean Protocol, it is essential to include the additional algorithm object in its metadata service. This algorithm object plays a crucial role in defining the Docker container environment associated with the algorithm. By specifying the necessary details within the algorithm object, such as the base image, tags, runtime configurations, and dependencies, the metadata service ensures that the algorithm asset is properly configured for execution within a Docker container.

<details>

<summary>Environment Object Example</summary>

{% code overflow="wrap" %}
```json
{ "algorithm": { "container": { "entrypoint": "node $ALGO", "image": "node", "tag": "latest" } } } 
```
{% endcode %}

</details>

<table><thead><tr><th width="100">Variable</th><th>Usage</th></tr></thead><tbody><tr><td><code>image</code></td><td>The Docker image name the algorithm will run with.</td></tr><tr><td><code>tag</code></td><td>The Docker image tag that you are going to use.</td></tr><tr><td><code>entrypoint</code></td><td>The Docker entrypoint. <code>$ALGO</code> is a macro that gets replaced inside the compute job, depending where your algorithm code is downloaded.</td></tr></tbody></table>

Define your entry point according to your dependencies. E.g. if you have multiple versions of Python installed, use the appropriate command `python3.6 $ALGO`.

#### What Docker container should I use?

There are plenty of Docker containers that work out of the box. However, if you have custom dependencies, you may want to configure your own Docker Image. To do so, create a Dockerfile with the appropriate instructions for dependency management and publish the container, e.g. using Dockerhub.

We also collect some [example images](https://github.com/oceanprotocol/algo_dockers) which you can also view in Dockerhub.

When publishing an algorithm through the [Ocean Market](https://market.oceanprotocol.com), these properties can be set via the publish UI.

<details>

<summary>Environment Examples</summary>

Run an algorithm written in JavaScript/Node.js, based on Node.js v14:

```json
{
  "algorithm": {
    "container": {
      "entrypoint": "node $ALGO",
      "image": "node",
      "tag": "14"
    }
  }
}
```

Run an algorithm written in Python, based on Python v3.9:

```json
{
  "algorithm": {
    "container": {
      "entrypoint": "python3.9 $ALGO",
      "image": "python",
      "tag": "3.9.4-alpine3.13"
    }
  }
}
```

</details>

#### Data Storage

As part of a compute job, every algorithm runs in a K8s pod with these volumes mounted:

| Path            | Permissions | Usage                                                                                                                                                                                   |
| --------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/data/inputs`  | read        | Storage for input data sets, accessible only to the algorithm running in the pod. Contents will be the files themselves, inside indexed folders e.g. `/data/inputs/{did}/{service_id}`. |
| `/data/ddos`    | read        | Storage for all DDOs involved in compute job (input data set + algorithm). Contents will json files containing the DDO structure.                                                       |
| `/data/outputs` | read/write  | Storage for all of the algorithm's output files. They are uploaded on some form of cloud storage, and URLs are sent back to the consumer.                                               |
| `/data/logs/`   | read/write  | All algorithm output (such as `print`, `console.log`, etc.) is stored in a file located in this folder. They are stored and sent to the consumer as well.                               |

Please note that when using local Providers or Metatata Caches, the ddos might not be correctly transferred into c2d, but inputs are still available. If your algorithm relies on contents from the DDO json structure, make sure to use a public Provider and Metadata Cache (Aquarius instance).

#### Environment variables available to algorithms

For every algorithm pod, the Compute to Data environment provides the following environment variables:

<table><thead><tr><th width="100">Variable</th><th>Usage</th></tr></thead><tbody><tr><td><code>DIDS</code></td><td>An array of DID strings containing the input datasets.</td></tr><tr><td><code>TRANSFORMATION_DID</code></td><td>The DID of the algorithm.</td></tr></tbody></table>

<details>

<summary>Example: JavaScript/Node.js</summary>

The following is a simple JavaScript/Node.js algorithm, doing a line count for ALL input datasets. The algorithm is not using any environment variables, but instead it's scanning the `/data/inputs` folder.

```js
const fs = require('fs')

const inputFolder = '/data/inputs'
const outputFolder = '/data/outputs'

async function countrows(file) {
  console.log('Start counting for ' + file)
  const fileBuffer = fs.readFileSync(file)
  const toString = fileBuffer.toString()
  const splitLines = toString.split('\n')
  const rows = splitLines.length - 1
  fs.appendFileSync(outputFolder + '/output.log', file + ',' + rows + '\r\n')
  console.log('Finished. We have ' + rows + ' lines')
}

async function processfolder(folder) {
  const files = fs.readdirSync(folder)

  for (const i = 0; i < files.length; i++) {
    const file = files[i]
    const fullpath = folder + '/' + file
    if (fs.statSync(fullpath).isDirectory()) {
      await processfolder(fullpath)
    } else {
      await countrows(fullpath)
    }
  }
}

processfolder(inputFolder)
```

This snippet will create and expose the following files as compute job results to the consumer:

* `/data/outputs/output.log`
* `/data/logs/algo.log`

To run this, use the following container object:

```json
{
  "algorithm": {
    "container": {
      "entrypoint": "node $ALGO",
      "image": "node",
      "tag": "12"
    }
  }
}
```

</details>

<details>

<summary>Example: Python</summary>

A more advanced line counting in Python, which relies on environment variables and constructs a job object, containing all the input files & DDOs

```python
import pandas as pd
import numpy as np
import os
import time
import json

def get_job_details():
    """Reads in metadata information about assets used by the algo"""
    job = dict()
    job['dids'] = json.loads(os.getenv('DIDS', None))
    job['metadata'] = dict()
    job['files'] = dict()
    job['algo'] = dict()
    job['secret'] = os.getenv('secret', None)
    algo_did = os.getenv('TRANSFORMATION_DID', None)
    if job['dids'] is not None:
        for did in job['dids']:
            # get the ddo from disk
            filename = '/data/ddos/' + did
            print(f'Reading json from {filename}')
            with open(filename) as json_file:
                ddo = json.load(json_file)
                # search for metadata service
                for service in ddo['service']:
                    if service['type'] == 'metadata':
                        job['files'][did] = list()
                        index = 0
                        for file in service['attributes']['main']['files']:
                            job['files'][did].append(
                                '/data/inputs/' + did + '/' + str(index))
                            index = index + 1
    if algo_did is not None:
        job['algo']['did'] = algo_did
        job['algo']['ddo_path'] = '/data/ddos/' + algo_did
    return job


def line_counter(job_details):
    """Executes the line counter based on inputs"""
    print('Starting compute job with the following input information:')
    print(json.dumps(job_details, sort_keys=True, indent=4))

    """ Now, count the lines of the first file in first did """
    first_did = job_details['dids'][0]
    filename = job_details['files'][first_did][0]
    non_blank_count = 0
    with open(filename) as infp:
        for line in infp:
            if line.strip():
                non_blank_count += 1
    print ('number of non-blank lines found %d' % non_blank_count)
    """ Print that number to output to generate algo output"""
    f = open("/data/outputs/result", "w")
    f.write(str(non_blank_count))
    f.close()


if __name__ == '__main__':
    line_counter(get_job_details())

```

To run this algorithm, use the following `container` object:

```json
{
  "algorithm": {
    "container": {
      "entrypoint": "python3.6 $ALGO",
      "image": "oceanprotocol/algo_dockers",
      "tag": "python-sql"
    }
  }
}
```

</details>

#### Algorithm Metadata

An asset of type `algorithm` has additional attributes under `metadata.algorithm`, describing the algorithm and the Docker environment it is supposed to be run under.

<table><thead><tr><th>Attribute</th><th width="150">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>language</code></strong></td><td><code>string</code></td><td>Language used to implement the software.</td></tr><tr><td><strong><code>version</code></strong></td><td><code>string</code></td><td>Version of the software preferably in <a href="https://semver.org">SemVer</a> notation. E.g. <code>1.0.0</code>.</td></tr><tr><td><strong><code>consumerParameters</code></strong></td><td><a href="../compute-to-data/compute-options.md#consumer-parameters">Consumer Parameters</a></td><td>An object that defines required consumer input before running the algorithm</td></tr><tr><td><strong><code>container</code></strong>*</td><td><code>container</code></td><td>Object describing the Docker container image. See below</td></tr></tbody></table>

\* Required

The `container` object has the following attributes defining the Docker image for running the algorithm:

<table><thead><tr><th width="210">Attribute</th><th width="150">Type</th><th>Description</th></tr></thead><tbody><tr><td><strong><code>entrypoint</code></strong>*</td><td><code>string</code></td><td>The command to execute, or script to run inside the Docker image.</td></tr><tr><td><strong><code>image</code></strong>*</td><td><code>string</code></td><td>Name of the Docker image.</td></tr><tr><td><strong><code>tag</code></strong>*</td><td><code>string</code></td><td>Tag of the Docker image.</td></tr><tr><td><strong><code>checksum</code></strong>*</td><td><code>string</code></td><td>Digest of the Docker image. (ie: sha256:xxxxx)</td></tr></tbody></table>

\* Required

<details>

<summary>Algorithm Metadata Example</summary>

{% code overflow="wrap" %}
```json
{ 
  "metadata": { 
    "created": "2020-11-15T12:27:48Z", 
    "updated": "2021-05-17T21:58:02Z", 
    "description": "Sample description", 
    "name": "Sample algorithm asset", 
    "type": "algorithm", 
    "author": "OPF", 
    "license": "https://market.oceanprotocol.com/terms", 
    "algorithm": { "language": "Node.js", "version": "1.0.0", 
      "container": { 
        "entrypoint": "node $ALGO", 
        "image": "ubuntu", 
        "tag": "latest", 
        "checksum": "sha256:44e10daa6637893f4276bb8d7301eb35306ece50f61ca34dcab550" 
        }, 
        "consumerParameters": {} 
        } 
  } 
} 
```
{% endcode %}

</details>

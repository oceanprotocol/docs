---
title: Writing Algorithms for Compute to Data
description: Learn how to write algorithms for use in Ocean Protocol's Compute-to-Data feature.
---

## Overview

An algorithm in the Ocean Protocol stack is another asset type, in addition to data sets. An algorithm for Compute to Data is composed of the following:

- an algorithm code
- a Docker image (base image + tag)
- an entry point

## Environment

When creating an algorithm asset in Ocean Protocol, the additional `algorithm` object needs to be included in its metadata service to define the Docker container environment:

```json
{
  "algorithm": {
    "container": {
      "entrypoint": "node $ALGO",
      "image": "node",
      "tag": "latest"
    }
  }
}
```

| Variable     | Usage                                                                                                                                   |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `image`      | The Docker image name the algorithm will run with.                                                                                      |
| `tag`        | The Docker image tag that you are going to use.                                                                                         |
| `entrypoint` | The Docker entrypoint. `$ALGO` is a macro that gets replaced inside the compute job, depending where your algorithm code is downloaded. |

Define your entrypoint according to your dependencies. E.g. if you have multiple versions of python installed, use the appropriate command `python3.6 $ALGO`.

### What Docker container should I use?

There are plenty of Docker containers that work out-of-the-box. However, if you have custom dependencies, you may want to configure your own Docker Image.
To do so, create a Dockerfile with the appropriate instructions for dependency management and publish the container, e.g. using Dockerhub.

We also collect some [example images](https://github.com/oceanprotocol/algo_dockers) which you can also view in Dockerhub.

When publishing an algorithm through the [Ocean Market](https://market.oceanprotocol.com), these properties can be set via the publish UI.

### Environment Examples

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

### Data Storage

As part of a compute job, every algorithm runs in a K8s pod with these volumes mounted:

| Path            | Permissions | Usage                                                                                                                                                     |
| --------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/data/inputs`  | read        | Storage for input data sets, accessible only to the algorithm running in the pod. Contents will be the files themselves, inside indexed folders e.g. `/data/inputs/{did}/{service_id}`.  |
| `/data/ddos`    | read        | Storage for all DDOs involved in compute job (input data set + algorithm). Contents will json files containing the DDO structure.                         |
| `/data/outputs` | read/write  | Storage for all of the algorithm's output files. They are uploaded on some form of cloud storage, and URLs are sent back to the consumer.                 |
| `/data/logs/`   | read/write  | All algorithm output (such as `print`, `console.log`, etc.) is stored in a file located in this folder. They are stored and sent to the consumer as well. |

Please note that when using local Providers or Metatata Caches, the ddos might not be correctly transferred into c2d, but inputs are still available.
If your algorithm relies on contents from the DDO json structure, make sure to use a public Provider and Metadata Cache (Aquarius instance).

### Environment variables available to algorithms

For every algorithm pod, the Compute to Data environment provides the following environment variables:

| Variable             | Usage                                                  |
| -------------------- | ------------------------------------------------------ |
| `DIDS`               | An array of DID strings containing the input datasets. |
| `TRANSFORMATION_DID` | The DID of the algorithm.                              |

## Example: JavaScript/Node.js

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

- `/data/outputs/output.log`
- `/data/logs/algo.log`

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

## Example: Python

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

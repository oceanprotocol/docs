---
title: Writing C2D Algorithms
description: Writing C2D Algorithms
---

## Overwiew

An C2D algorithm is composed of the following:

 - a docker image (base image)
 - an algorithm code
 - a entry point

That's why, while creating the algorithm asset in ocean, we need the additional object "algorithm" defined in the metadata service:

```json
"algorithm": {
            "container": {
              "entrypoint": "node $ALGO",
              "image": "node",
              "tag": "latest"
            }
          }
```

Most important attributes are the following:

  - image: this is the docker image that your are going to use
  - tag: this is the docker image tag that you are going to use
  - entrypoint: this is the entrypoint. $ALGO is a macro that gets replaced inside C2D, depending where your algo code is downloaded

Here are some examples:

- to run a JS algo, based on node 14:

    ```json
    "algorithm": {
            "container": {
              "entrypoint": "node $ALGO",
              "image": "node",
              "tag": "14"
            }
          }
    ```

- to run a python algo, based on python:3.9.4-alpine3.13:

    ```json
    "algorithm": {
            "container": {
              "entrypoint": "python3.9 $ALGO",
              "image": "python",
              "tag": "3.9.4-alpine3.13"
            }
          }
    ```

Be aware that you might need a lot of dependencies, so it's a lot faster if you are going to build your own images (we build some [HERE](https://github.com/oceanprotocol/algo_dockers))



## Data structure

Every algorithm pod will have some volumes mounted:

 - /data/inputs (read only)   - this is where the datasets are going to be stored
 - /data/ddos (read only)   - this is where all DDOs (input + algorithm) are going to be stored
 - /data/outputs  - this is where the algorithm should store all output files (they are going to be uploaded on storage and URLs sent back to the consumer)

All algorithm output (such as print, console.log, etc) are going to be stored in a file located in /data/logs/. They are going to be stored and sent to the customer as well


## ENV variables available to algorithms


For every algorithm pod, C2D is going to provide the following ENVs:

 - DIDS:  this is an array containing the input datasets
 - TRANSFORMATION_DID:  this is the algorithm did


## Sample Algorithms

## JS example

The following is a simple js algorithm, that does a line count for ALL input datasets.  The algo is not using any ENVS, but instead it's scanning the /data/inputs folder.

```js
const fs = require("fs")
const path = require("path")


var input_folder="/data/inputs";
var output_folder="/data/outputs"


async function processfolder(Path) {
        var files = fs.readdirSync(Path)
        for (var i = 0; i < files.length; i++) {
           var file=files[i];
           var fullpath=Path + "/" + file;
           if (fs.statSync(fullpath).isDirectory()) {
                await processfolder(fullpath)
           } else {
                await countrows(fullpath)
           }
       }
}


async function countrows(file){
        console.log("Start counting for "+file)
        var fileBuffer =  fs.readFileSync(file);
        var to_string = fileBuffer.toString();
        var split_lines = to_string.split("\n");
        var rows=split_lines.length-1;
        fs.appendFileSync(output_folder+'/output.log', file+','+rows+"\r\n");
        console.log('Finished. We have '+rows+' lines')
}

processfolder(input_folder)
```

To run this, use the following container object:

```json
"algorithm": {
    "container": {
        "entrypoint": "node $ALGO",
        "image": "node",
        "tag": "10"
    }
}
```



## Advanced Python example

A more advanced python line counting, which relies on ENVs and constructs a job object, containing all the input files & ddos

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

To run this, use the following container object:

```json
"algorithm": {
            "container": {
                "entrypoint": "python3.6 $ALGO",
                "image": "oceanprotocol/algo_dockers",
                "tag": "python-sql"
            }
}
```


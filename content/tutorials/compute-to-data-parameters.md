---
title: Define and use custom parameters
description: Learn how to define and use custom parameters while downloading assets or using dataset in Compute-to-data environment.
---

## Overview

Ocean Protocol allows dataset buyers to provide custom parameters that can be used to fetch the downloaded data in a specific format, download a different type of data or pass some additional input to the algorithms in the Compute-to-Data job.

There 2 are types of parameters that asset publishers can support:

- User defined parameters
- Algorithm custom parameters

## Dataset publisher flow

The asset publisher must support these parameters. The Provider combines the original asset URL and the entered parameter values into a new URL and then streams the response from the modified URL back to the buyer.

### Use case for user defined parameters

For example, if the publisher has published an URL `https://example.com` which serves large size historical weather data from all over the world. If the publisher wants to allow buyers to filter the data based on location, type of data, etc., it is possible to do so using user defined parameters.

Suppose the publisher defines the following 2 parameters:

- `location`: A string indicating region code
- `type`: A string indicating the type of weather data. It can be temperature/humidity/pressure.

Suppose the buyer wants to download the temperature data in the region code `XYZ`. While downloading the data buyer enters the desired parameter values using ocean.py or ocean.js.

The provider will decrypt the URL from the DDO published on-chain, construct a new URL with the additional parameters and finally stream data to the buyer.

Internally, the new URL will be of the format `https://example.com/?location=XYZ&type=temperature`. The server hosting the data has to read these parameters and serve the appropriate data.

The following steps will specify how the publisher can support additional parameters.

### Step 1: Create a service

The below python script exposes a REST endpoint that takes two parameters, namely: `location` and `type`.
Let's assume that the dataset publisher hosts the service at domain `example.com` along with HTTPS support.
The publisher must ensure that the URL is accessible to Provider.

The code snippet is only for demo purposes and not for production use.

```python
from flask import Flask, request

def get_data(data_type: str, location: str):
    '''
        Add some business logic here to get
        the required data with given parameters
    '''
    return {}

@app.route('/', methods=['GET'])
def serve_content():
    args = request.args
    data_type = args.get('type')
    location = args.get('location')

    result = get_data(data_type, location)

    return result
```

### Step 2: Publish dataset asset with compute service

The publisher now must provide the file URL as `https://example.com` while publishing the asset, as shown in the below image.

![publish part-1](images/compute-to-data-parameters-publish-dataset.png 'Publish dataset URL')

To view a complete tutorial on publishing asset using Ocean Marketplace click [here](/tutorials/marketplace-publish-data-asset/).

## Algoithm publisher flow

### Use case for algorithm custom parameters

For example, if the algorithm publisher has published an URL `https://example.org` which serves python script to analyze historical weather data published in the previous section. If the algorithm publisher wants buyers to specify the number of iterations the algorithm must perform over the data, it is possible to do so using algorithm custom parameters.

Suppose the algorithm publisher defines a parameter called `iterations` and expects the buyer to give this input before running the algorithm in a Compute-to-Data environment. The buyer can enter the desired parameter value using ocean.py or ocean.js.

The provider passes the entered parameters and saves them in a specific path in the Compute-to-Data environment. The algorithm can later read this value and perform required computations.

The following steps will specify how the algorithm publisher can support additional algorithm custom parameters.

### Step 1: Create an algorithm

The code snippet is only for demo purposes and not for production use.

```python

def run_algorithm(i: int):
    pass

def read_algorithm_custom_input():
    parameters_file = os.path.join(os.sep, "data", "inputs", "algoCustomData.json")
    with open(parameters_file, "r") as file:
        return json.load(file)

algorithm_inputs = read_algorithm_custom_input()

iterations = algorithm_inputs["iterations"]

for i in range(iterations):
    # Run some machine learning algorithm
    print(f"Running iteration {i}")
    result = run_algorithm(i)

output_dir = os.path.join(os.sep, "data", "outputs")

with open(os.path.join(output_dir, "result"), "w") as f:
    f.write(result)

```

### Step 2: Publish algorithm asset

The publisher now must provide the file URL as `https://example.org` while publishing the algorithm asset, as shown in the below image.

![publish part-2](images/compute-to-data-parameters-publish-algorithm.png 'Publish algorithm URL')

To view a complete tutorial on publishing asset using Ocean Marketplace click [here](/tutorials/marketplace-publish-data-asset/).

## Consumer flow

### Step 1: Find assets

```javascript

```

### Step 2: Buy datatokens

```javascript

```

### Step 3: Start compute job

```javascript

```

---
title: Define and use custom parameters
description: Learn how to define and use custom parameters while downloading assets or using dataset in Compute-to-data environment.
---

## Overview

Ocean Protocol allows dataset buyers to provide custom parameters that can be used to fetch the downloaded data in a specific format or to download a different type of data. The asset publisher must support these parameters. The provider combines the original asset URL and the entered parameter values into a new URL and then streams the response from the modified URL back to the buyer.

## Use case

For example, if the publisher has published an URL `https://example.com` which serves large size historical weather data from all over the world. If the publisher wants to allow buyers to filter the data based on location, type of data, etc., it is possible to do so using user defined parameters. 

Suppose the publisher defines following 2 parameters:

- `location`: A string indicating region code
- `type`: A string indicating type of weather data. It can be temperature/humidity/pressure.

Suppose the buyer wants to download the temperature data in the region code `XYZ`, while downloading the data buyer enters the desired parameter values using ocean.py or ocean.js.

The provider will decrypt the URL from the DDO published on-chain, construct a new URL with the additional parameters and finally stream data to the buyer.

Internally, the new URL will be of the format `https://example.com/?location=XYZ&type=temperature`. The server hosting the data has to read these parameters and serve the appropriate data.

Thus, user defined parameters allows both the publisher and the buyer to provide additional input.

So, following steps will specify how publisher can support aditional paramters and how consumer can use it.


## Publisher flow

## Step 1: Create a service

```python

```

## Step 2: Publish asset

## Consumer flow

## Step 1: Buy asset

```python

```
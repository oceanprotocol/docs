---
title: Get Status of a Compute Job
description: Get Status of a Compute Job
---

## Requirements

For this setup, we need a compute job that has been started from [Compute using a published algorithm on a Data Set](/tutorials/react-compute-published-algorithm/) or [Compute using a raw algorithm on a Data Set](/tutorials/react-compute-raw/)

## Create an Area to display the status

First, let's define an area to display status:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 213-226 GITHUB-EMBED

## Get Job Status

Since we have the agreementId and jobId, we can get status from a compute job:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 106 GITHUB-EMBED

## Final Result

Let's wrap that into a function:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 102-112 GITHUB-EMBED

and have a button for it:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 223 GITHUB-EMBED

** Notice that the button will be disabled if jobId is missing.

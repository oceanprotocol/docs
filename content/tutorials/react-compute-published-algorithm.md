---
title: Compute using a published algorithm on a Data Set
description: Compute using a published algorithm on a Data Set
---

## Requirements

This is a continuation of the [React App Setup](/tutorials/react-setup/) tutorial, so make sure you have done all the steps described in there.

1. [React App Setup](/tutorials/react-setup/)

Open `src/index.js` from your `marketplace/` folder.

## Define Compute Output

First, let's define some options for our upcoming job:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 163-182 GITHUB-EMBED

and use them

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 61-70 GITHUB-EMBED

## Order the dataset

Next, we have to order the dataset that we are going to compute upon. We are going to use the ddoAssetId, which was set during publishing of the asset.

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 73 GITHUB-EMBED

## Start the compute job

And finally, start the job:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 76-82 GITHUB-EMBED

## Final Result

Now that we have all the requirements, we need a function to handle it. 

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 58-89,92-94 GITHUB-EMBED


The last thing we need is a button to start our compute job:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 202-207 GITHUB-EMBED

** Notice that the button will be disabled if there were no previous published Datasets and Algorithms.

**Move on to [Get Status of a Compute Job](react-compute-status).**

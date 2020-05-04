---
title: Compute using a raw algorithm on a Data Set
description: Compute using a raw algorithm on a Data Set
---

## Requirements

This is a continuation of the [React App Setup](/tutorials/react-setup/) tutorial, so make sure you have done all the steps described in there.

1. [React App Setup](/tutorials/react-setup/)

Open `src/Compute.js` from your `marketplace/` folder.

## Define Raw Code

Sometime, you just need to quickly run an test algorithm. Instead of publishing it as an asset, you can use the code directly.

To do that, we are going to use a textbox for copy/paste and a button to show/hide it.

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 184-195 GITHUB-EMBED

## Define Algorithm MetaData

We need to define all the requirments for the algorithm:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/asset-compute.js jsx 35-44 GITHUB-EMBED

and them import it to our Compute.js:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 4 GITHUB-EMBED


## Define Compute Output

Let's define some options for our upcoming job:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 163-182 GITHUB-EMBED

and use them

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 61-70 GITHUB-EMBED

# Order the dataset

Next, we have to order the dataset that we are going to compute upon. We are going to use the ddoAssetId, which was set during publishing of the asset.

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 73 GITHUB-EMBED

## Start the compute job

We need a function to start the job:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 58-89 GITHUB-EMBED

Get the pasted code:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 96-100 GITHUB-EMBED

The last thing we need is a button inside the `render()` function:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 208-211 GITHUB-EMBED

** Notice that the button will be disabled if there were no previous published Datasets.

**Move on to [Get Status of a Compute Job](react-compute-status).**

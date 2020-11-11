---
title: Publish a Algorithm
description: Tutorial to add Algorithm dataset publishing capabilities to a basic React app.
---

## Requirements

This is a continuation of the [React App Setup](/tutorials/react-setup/) tutorial, so make sure you have done all the steps described in there.

1. [React App Setup](/tutorials/react-setup/)

Open `src/Compute.js` from your `marketplace/` folder.

## Define Asset

First, let's add the data asset that we want to publish.

To do that, we need to define the Algorithm asset based on the [OEP-08](https://github.com/oceanprotocol/OEPs/tree/master/8) metadata structure. An algorithm asset can have multiple `files` attached to it and each file's `url` value will be encrypted during the publish process.

Let's create a new file `src/asset-compute.js` and fill it with:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/asset-compute.js jsx 1-33 GITHUB-EMBED

\*\* Notice the “ALGO” macro in the entrypoint attribute, this is replaced with the downloaded executable algorithm inside the pod

Then import this asset definition at the top of `src/Compute.js`:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 4 GITHUB-EMBED

## Handle Asset Publishing

Now that we have an asset to submit, we need a function to handle it. Just before `render() {` let's add this `publishalgo` function:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 42-56 GITHUB-EMBED

The last thing we need is a button to start our registration inside the `render()` function:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 153 GITHUB-EMBED

**Move on to [Compute using a published algorithm on a Data Set](/tutorials/react-compute-published-algorithm/).**

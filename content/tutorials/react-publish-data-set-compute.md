---
title: Publish a Data Set with Compute features
description: Tutorial to add a dataset with compute capabilities to a basic React app.
---

## Requirements

This is a continuation of the [React App Setup](/tutorials/react-setup/) tutorial, so make sure you have done all the steps described in there.

1. [React App Setup](/tutorials/react-setup/)

Open `src/Compute.js` from your `marketplace/` folder.

## Define Asset

We will use the same asset as in [Publish a Data Set](/tutorials/react-publish-data-set), but we are going to allow only compute features, without the ability to download the asset.

This is achiveable by adding a 'compute' service to the DDO:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 23-27 GITHUB-EMBED


## Handle Asset Publishing

Note that ocean.assets.create will define an 'access' service if the services list is missing. Since we are providing this attribute, our asset will have only a 'compute' service and no 'access' service.

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 18-40 GITHUB-EMBED

The last thing we need is a button to start our registration inside the `render()` function:

GITHUB-EMBED https://github.com/oceanprotocol/react-tutorial/blob/107d1fa7d0c583cc8042339f1f5090ff9ee0920b/src/Compute.js jsx 143 GITHUB-EMBED


**Move on to [Publish a Algorithm](/tutorials/react-publish-algorithm/).**

---
title: Set Up a Marketplace
description: Build and run a data marketplace in the Ocean network.
---

If you want to set up and run a marketplace in the Ocean network, then at a technical level, you must:

- Build your marketplace application
- Run:
  - Your marketplace application
  - Aquarius
  - A database for Aquarius
  - Parity Ethereum
  - Maybe Brizo, unless you are working with others (publishers) running Brizo
  - Maybe more?

We expand on all of that below.

## Building A Marketplace Application

An Ocean marketplace application (app) is one of the primary ways that end users use the Ocean network. For example, a data scientist could use a marketplace app to see what data sets and data services a marketplace has on offer. They can use the marketplace app to buy access to data sets or services.

To build an Ocean marketplace application, you will probably want to use one of the Squid software libraries because they simplify working with the Ocean network.
Currently there are Squid libraries for JavaScript, Python and Java.
As an analogy, squid-py is to Ocean like boto3 is to AWS.

Dev example 1: Fork Pleuston (serverless). Use the Docker Compose workflow that Pleuston devs use.

Dev example 2: Build a marketplace with a Python server-side (using squid-py) and a web frontend. Use one of the Squid libraries.

<hr>

Note that you can probably use Docker Compose or similar to run all the other stuff, for now.

Old content to scavenge:

## Pleuston

Pleuston is an example Ocean marketplace written in JavaScript using React and Redux.
It uses the squid-js library to interact with Ocean network services, such as Keepers, Brizo nodes, Secret Stores, and your own Aquarius node.

Pleuston runs entirely in the browser, i.e. Pleuston has no server-side part. It communicates directly with Keepers etc.

You _could_ build an Ocean marketplace with a browser-side frontend and a server-side part.
For example, the server-side part could be written in Python and it could use the squid-py library.

Currently, there is no explicit example of how to do that, but there are examples of how to use squid-py, e.g. from IPython running in a Jupyter notebook.
See the Tutorials section.

You could even write an entirely server-side marketplace with a command-line interface, but let's not get carried away.

Note: There's also a squid-java library but it's currently not as full-featured as squid-js and squid-py.

## Aquarius

Aquarius is an application used by Marketplaces to store, update, read and delete metadata about assets. The Squid libraries all know how to talk to Aquarius, so you don't need to think about it or its API too much. You just need to make sure you have Aquarius running on a server somewhere.

TODO: Add instructions here.

## Database for Aquarius

At the time of writing, Aquarius worked with three databases:

- MongoDB
- Elasticsearch
- BigchainDB

TODO: Outline the pros and cons of each database.

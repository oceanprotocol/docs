---
title: Set Up a Marketplace
description: Build and run a data marketplace in the Ocean network.
---

If you want to set up and run a marketplace in the Ocean network, then at a technical level, you must:

- Build your marketplace application
- Run your marketplace application and some Ocean components:
  - Aquarius
  - A database for Aquarius
  - An Ethereum client (e.g. Ganache, Parity Ethereum)
  - Maybe Brizo, unless you are working with others (publishers) running Brizo
  - Maybe more?

We expand on all of that below.

## Building A Marketplace Application

An Ocean marketplace application is a web app that lets people list data assets for sale (maybe free) and lets consumers buy those assets. To connect your marketplace with the Ocean network, you'll want to use one of the Squid libraries.

TODO: Expand the following:

Dev option 1: Fork Pleuston (serverless). Use the Docker Compose workflow that Pleuston devs use.

Dev option 2: Build a marketplace with a server-side and a web frontend. Use one of the Squid libraries.

<hr>

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

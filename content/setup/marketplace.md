---
title: Set Up a Marketplace
---

If you want to set up a marketplace for the Ocean network, then you could start by running the following tech stack:

1. Pleuston
1. Aquarius
1. A database for Aquarius

Then you could modify that stack to better suit your needs.
Let's take a closer look inside each of those components.

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

TODO: Link to instructions.

## Database for Aquarius

At the time of writing, Aquarius worked with three databases:

* MongoDB
* Elasticsearch
* BigchainDB

TODO: Outline the pros and cons of each database.

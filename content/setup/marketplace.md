---
title: Set Up a Marketplace
description: Set up and run a data marketplace in the Ocean network.
---

If you want to set up and run a marketplace in the Ocean network, then at a technical level, you must:

1. Develop a marketplace application (app).
2. Run your marketplace app in production.

**Note 1: At the time of writing (late November 2018), it was _possible_ to start developing a marketplace, but very challenging. We anticipate that it will become much easier in December 2018, especially once the docker-images scripts and Docker Compose files are refactored.**

**Note 2: In the early days of the Ocean network, there won't be many marketplaces or publishers, so marketplaces will often also act as publishers.**

## Develop a Marketplace App

An Ocean marketplace app is one of the primary ways that end users use the Ocean network. For example, a data scientist could use a marketplace app to see what data sets and data services (data assets) a marketplace has on offer. They can use the marketplace app to buy access to assets. Publishers make those data assets available.

### Easiest Option: Fork Pleuston

[Pleuston](https://github.com/oceanprotocol/pleuston) is a reference marketplace app written in JavaScript, using React and squid-js (which is like a JavaScript SDK for Ocean).
Pleuston has an Apache v2 license, so you can fork it to make your own Ocean marketplace.

This option is straightforward because you can follow the dev process used by the Pleuston devs. They already have a Docker Compose setup that runs all the other Ocean components needed for testing a marketplace, e.g. Aquarius, a database for Aquarius, a local Parity Ethereum node, and Brizo.

Note that Pleuston is a "serverless" app: it runs entirely in the browser and has no server-side component.

<repo name="pleuston"></repo>

### Other Options for Developing a Marketplace App

There are many ways to create an ocean marketplace app. For example, you could use one of the existing e-commerce platforms and frameworks (e.g. WooCommerce, Magento, Shopify). Or you could use a lower-level framework like Django or Vue.js. The main consideration is that you should probably use a programming language with an existing Squid library.

<repo name="squid-js"></repo>
<repo name="squid-py"></repo>
<repo name="squid-java"></repo>

Note: There are examples of how to use squid-py in the [Tutorials](/tutorials/introduction/). squid-py is to Ocean like boto3 is to AWS.

Of course, you could always write your own Squid library in the language of your choice. A squid-java library is in development.

## Run Your Marketplace App in Production

Before running your marketplace app in production with the Ocean Mainnet, you may want to test it with an Ocean Testnet.
The Ocean Testnets are similar to the Ocean Mainnet.
The main difference is that there is less risk on the Ocean Testnets.

**Note: At the time of writing, the Ocean Mainnet hadn't gone live yet, but the testnets were about to go live. See [the page about testnets](/concepts/testnets/).**

Of course, there are many other things that must be handled for live production apps:

- Security of the infrastructure where the software is running
- Monitoring
- Log aggregation, storage and search
- Handling crashes or other faults

Each of those is a big topic beyond the scope of these docs.

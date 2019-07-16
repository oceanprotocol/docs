---
title: Set Up a Marketplace
description: Set up and run a data marketplace in an Ocean network.
---

In Ocean Protocol, marketplaces and publishers play different roles (outlined in the [Terminology page](/concepts/terminology/)), but both roles can be played by the same person or organization. Initially, we anticipate that will be the most common setup. As a result, this guide explains how to set up and run a combined marketplace/publisher (for now).

## An Outline of the Steps

1. Have [assets](/concepts/terminology/#asset-or-data-asset) to offer in your marketplace.
1. Prepare those assets to work with Ocean Protocol.
1. Develop a marketplace/publisher app.
1. Run everything you need to run in production.

## Prepare Assets

At the time of writing, the following kinds of [assets](/concepts/terminology/#asset-or-data-asset) were supported:

- data sets stored in Azure Storage (i.e. with "core.windows.net" in their URL). See [the tutorial about setting up Azure Storage to work with Ocean Protocol](/tutorials/azure-for-brizo/).
- data sets stored in Amazon S3 storage (i.e. with "s3://" in their URL). See [the tutorial about setting up Amazon S3 storage to work with Ocean Protocol](/tutorials/amazon-s3-for-brizo/).
- data sets stored in on-premise storage. See [the tutorial about setting up on-premise storage to work with Ocean Protocol](/tutorials/on-premise-for-brizo/).

Note: You can use _all_ of the above. You aren't restricted to using only one storage provider.

Support for other kinds of assets (e.g. computing in Azure) is coming.

## Develop a Marketplace/Publisher App

At the time of writing, we recommend the following steps to develop a marketplace/publisher app:

1. Do the [React App Tutorial](/tutorials/react-setup/).
1. Grow your app from there.

For more examples and inspiration, check out [the source code for Pleuston](https://github.com/oceanprotocol/pleuston) and the [the source code for the Commons Marketplace](https://github.com/oceanprotocol/commons). Both have an Apache v2 open source license. Both use React and squid-js. Both are "serverless" apps: they run entirely in the browser and have no server-side component.

<repo name="pleuston"></repo>
<repo name="commons"></repo>

### Other Options

A marketplace/publisher app could have both a back-end component and a front-end component. The main consideration is that you should probably use a programming language with an existing Squid library:

<repo name="squid-js"></repo>
<repo name="squid-py"></repo>
<repo name="squid-java"></repo>

Note: There are examples of how to use squid-py in the [Tutorials](/tutorials/introduction/). squid-py is to Ocean like boto3 is to AWS.

Of course, you could always write your own Squid library in the language of your choice.

## Run Everything You Need to Run in Production

When developing your marketplace/publisher app, you will probably use Barge to run all the Ocean Protocol components on your local machine. When it comes time to go to production, you will have to run some of those components in production:

- Your marketplace/publisher app
- [Aquarius](/concepts/components/#aquarius)
- A database to go with Aquarius, e.g. Elasticsearch or MongoDB
- [Brizo](/concepts/components/#brizo)
- Recommended: a [keeper](/concepts/components/#keeper) node with the keeper contracts deployed to it, connected to an Ocean network
- Optional: your own [Secret Store](/concepts/components/#secret-store) nodes (for a more advanced setup)

Before running all of that in production, you will want to test it with an [Ocean Protocol testnet](/concepts/testnets/).

Of course, there are many other things that must be handled in production:

- Security of the infrastructure where the software is running
- Monitoring
- Log aggregation, storage and search
- Handling crashes or other faults

Each of those is a big topic beyond the scope of these docs.

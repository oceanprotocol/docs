---
title: Set Up a Marketplace
description:
---

In Ocean, marketplaces and publishers are different roles. A common setup is for one organization to do both. We focus on that here.

## The Steps

1. Develop the first cut of the app.
1. Prepare some initial data assets.
1. Deploy to production.

## Develop a First Cut of the App

Here are some approaches:

- Fork [Ocean Market](https://github.com/oceanprotocol/market) code.
- Build from [Ocean React hooks](https://github.com/oceanprotocol/react).
- Build up from [ocean.js](https://github.com/oceanprotocol/ocean.js) or [ocean.py](https://github.com/oceanprotocol/ocean.py) drivers.

## Prepare Some Initial Data Assets

When you deploy, you'll want some initial data assets for your market to offer.

Ocean supports several types, such as Azure and S3 storage. The [tutorials](/tutorials/) section provides more info.

## Deploy to Production

When developing your app, you'll likely use Barge to run all the Ocean Protocol components on your local machine.

When it comes time to go to production, you will have to run these components:

- Your marketplace/publisher app
- Aquarius (with Elasticsearch)
- Provider-py

Of course, there are many other things that must be handled in production:

- Security of the infrastructure where the software is running
- Monitoring
- Log aggregation, storage, and search
- Handling crashes or other faults

Each of those is beyond the scope of these docs.

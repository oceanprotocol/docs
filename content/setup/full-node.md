---
title: Set Up a Full Node
description: Run every Ocean component in one machine, all at once.
---

A "full node" is a machine that runs all the [Ocean components](/concepts/components/), set up so they all work together.

As a quick start, you can run a stand-alone full node by doing the following (which requires Git, Docker and Docker Compose):

```bash
git clone https://github.com/oceanprotocol/docker-images.git
cd docker-images/

./start_ocean.sh --latest
```

For more details, see the [docker-images repository](https://github.com/oceanprotocol/docker-images).

<repo name="docker-images"></repo>

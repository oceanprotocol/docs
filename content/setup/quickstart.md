---
title: Quickstart
description: Do a quick test drive.
---

You can run and try every [Ocean software component](/concepts/components/) in your local machine, all at once, using Docker Compose:

```bash
git clone https://github.com/oceanprotocol/docker-images.git
cd docker-images/

./start_ocean.sh --latest
```

One everything is up and running, you can interact with the components. For example, to interact with Pleuston, go to:

[http://localhost:3000/](http://localhost:3000/)

Note that everything is running on your local machine, including a local Ethereum node, and it's not connected to any external Ethereum network.

For the details of what components are running, see the [Ocean Protocol docker-images repository](https://github.com/oceanprotocol/docker-images).

<repo name="docker-images"></repo>

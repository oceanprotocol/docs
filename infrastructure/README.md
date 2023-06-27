---
description: Infrastructure
cover: ../.gitbook/assets/cover/infrastructure_banner.png
coverY: 0
---

# 🔨 Infrastructure

Now that you know the components of the Ocean Protocol stack and what each does, it's time to learn how to deploy these components in your environment. There are many ways in which the components can be deployed, from simple configurations used for development and testing to complex configurations, used for production systems.&#x20;

All the Ocean Protocol components (Provider, Aquarius, Subgraph) are designed to run in Docker containers, on a Linux operating system. For simple configurations, we rely on Docker Engine and Docker Compose products to deploy and run our components, while for complex configurations we use Kubernetes. The guides included in this section will present both deployment options.&#x20;

Please note that deploying the Ocean components requires a good understanding of:

* Linux operating system;
* Docker Engine;&#x20;
* Docker Compose or Kubernetes (depending on the configuration chosen for the component deployment).&#x20;

Please note that although Ocean Marketplace is not a core component of our stack but rather an example of what can be achieved with our technology, in this section we included a guide on how to deploy it.&#x20;

All components need to be deployed on a server, so we included a guide about how to install and configure a server will all the necessary tools.

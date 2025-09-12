---
description: Learn how to deploy Ocean Enterprise in your environment.
cover: ../.gitbook/assets/Deployment.png
coverY: 0
---

# 🔨 Deployment guides





There are many ways in which the components can be deployed, from simple configurations used for development and testing to complex configurations, used for production systems.

All the Ocean Protocol components ([Provider](../developers/old-infrastructure/provider/), [Aquarius](../developers/old-infrastructure/aquarius/), [Subgraph](../developers/old-infrastructure/subgraph/)) are designed to run in Docker containers, on a Linux operating system. For simple configurations, we rely on Docker Engine and Docker Compose products to deploy and run the components, while for complex configurations we use Kubernetes. The guides included in this section will present both deployment options.

Please note that deploying the Ocean components requires a good understanding of:

* Linux operating system
* Docker Engine
* Docker Compose or Kubernetes (depending on the configuration chosen for the component deployment)

Please note that Ocean Marketplace is not a core component of the stack but rather an example of what can be achieved with the technology, in this section we included a guide on how to deploy it.

All components need to be deployed on a server, so we included a guide about how to install and configure a server will all the necessary tools.

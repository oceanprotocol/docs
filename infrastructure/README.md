---
description: Learn how to deploy Ocean Enterprise in your environment.
cover: ../.gitbook/assets/Deployment.png
coverY: 0
---

# Deployment Guides

This chapter explains how to install and configure the components of the Ocean Enterprise software stack. All components run in Docker containers on a Linux operating system. Deploying the OE components requires solid familiarity with Linux, Docker Engine, and Docker Compose.&#x20;

As described in the [Dataspace Configuration Options](../developers/architecture-1.md) chapter, the OE Stack supports two deployment modes - with SSI-based access control enabled or disabled. Because the required components and installation order vary by configuration, consult the dedicated chapter on the installation sequence for each configuration.  &#x20;



Each deployment subchapter is structured into four parts:&#x20;

* _Prerequisites_: lists the hardware, software, and other requirements for running the component\
  <mark style="color:$info;background-color:$info;">**Note**</mark><mark style="color:$info;background-color:$info;">: The hardware specifications provided represent the minimum configuration identified during our testing. Actual requirements vary based on workload characteristics such as the number of concurrent requests and expected response times. We recommend starting with an estimated configuration based on your anticipated workload, monitoring system performance over time, and adjusting resources accordingly.</mark>
* _Deployment Steps_: describes the tasks required to perform to install and configure the component.
* _Post installation steps_: tasks that must be completed for the component to function properly
* _Environment Variables_: explains the purpose and usage of each environment variable needed by the component



This chapter includes the following information:

* [Deployment Modes](deployment-modes.md)
* [OE Node Installation and Configuration](oe-node-installation-and-configuration.md)
* [Marketplace Installation and Configuration](marketplace-installation-and-configuration/)
* [Policy Server and Policy Server Proxy Installation and Configuration](policy-server-and-policy-server-proxy-installation-and-configuration.md)
* [SSI Stack Installation and Configuration](ssi-stack-installation-and-configuration.md)

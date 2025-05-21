---
description: Compute to data version 2 (C2dv2)
---

# Compute to data

### Introduction

Certain datasets, such as health records and personal information, are too sensitive to be directly sold. However, Compute-to-Data offers a solution that allows you to monetize these datasets while keeping the data private. Instead of selling the raw data itself, you can offer compute access to the private data. This means you have control over which algorithms can be run on your dataset. For instance, if you possess sensitive health records, you can permit an algorithm to calculate the average age of a patient without revealing any other details.

Compute-to-Data effectively resolves the tradeoff between leveraging the benefits of private data and mitigating the risks associated with data exposure. It enables the data to remain on-premise while granting third parties the ability to perform specific compute tasks on it, yielding valuable results like statistical analysis or AI model development.

Private data holds immense value as it can significantly enhance research and business outcomes. However, concerns regarding privacy and control often impede its accessibility. Compute-to-Data addresses this challenge by granting specific access to the private data without directly sharing it. This approach finds utility in various domains, including scientific research, technological advancements, and marketplaces where private data can be securely sold while preserving privacy. Companies can seize the opportunity to monetize their data assets while ensuring the utmost protection of sensitive information.

Private data has the potential to drive groundbreaking discoveries in science and technology, with increased data improving the predictive accuracy of modern AI models. Due to its scarcity and the challenges associated with accessing it, private data is often regarded as the most valuable. By utilizing private data through Compute-to-Data, significant rewards can be reaped, leading to transformative advancements and innovative breakthroughs.

{% hint style="info" %}
The Ocean Protocol provides a compute environment that you can access at the following [address](https://stagev4.c2d.oceanprotocol.com/). Feel free to explore and utilize this platform for your needs.
{% endhint %}

We suggest reading these guides to get an understanding of how compute-to-data works:

### Architecture & Overview Guides

* [Architecture](compute-to-data-architecture.md)
* [Datasets & Algorithms](compute-to-data-datasets-algorithms.md)
* [Writing Algorithms](compute-to-data-algorithms.md)
* [Compute options](compute-options.md)

### User Guides

* [How to write & Publish compute to data algorithms](https://docs.oceanprotocol.com/developers/compute-to-data/compute-to-data-algorithms)
* [How to publish a dataset for compute to data](https://docs.oceanprotocol.com/developers/compute-to-data/compute-workflow)

### Developer Guides

* [How to use compute to data with ocean.js](../ocean.js/cod-asset.md)
* [How to use compute to data with ocean.py](../../data-scientists/ocean.py)

### Infrastructure Deployment Guides

* [Minikube Environment](../../infrastructure/compute-to-data-minikube.md)
* [Private docker registry](../../infrastructure/compute-to-data-docker-registry.md)

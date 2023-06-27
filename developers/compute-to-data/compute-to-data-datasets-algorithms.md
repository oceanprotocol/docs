---
title: Compute-to-Data
description: Datasets and Algorithms
---

# Datasets & Algorithms

### Datasets & Algorithms

Compute-to-Data introduces a paradigm where datasets remain securely within the premises of the data holder, ensuring strict data privacy and control. Only authorized algorithms are granted access to operate on these datasets, subject to specific conditions, within a secure and isolated environment. In this context, algorithms are treated as valuable assets, comparable to datasets, and can be priced accordingly. This approach enables data holders to maintain control over their sensitive data while allowing for valuable computations to be performed on them, fostering a balanced and secure data ecosystem.

To define the accessibility of algorithms, their classification as either public or private can be specified by setting the `attributes.main.type` value in the Decentralized Data Object (DDO):&#x20;

* `"access"` - public. The algorithm can be downloaded, given appropriate datatoken.
* `"compute"` - private. The algorithm is only available to use as part of a compute job without any way to download it. The Algorithm must be published on the same Ocean Provider as the dataset it's targeted to run on.

This flexibility allows for fine-grained control over algorithm usage, ensuring data privacy and enabling fair pricing mechanisms within the Compute-to-Data framework.

For each dataset, Publishers have the flexibility to define permission levels for algorithms to execute on their datasets, offering granular control over data access.&#x20;

There are several options available for publishers to configure these permissions:

* allow selected algorithms, referenced by their DID
* allow all algorithms published within a network or marketplace
* allow raw algorithms, for advanced use cases circumventing algorithm as an asset type, but most prone to data escape

All implementations default to `private`, meaning that no algorithms are allowed to run on a compute dataset upon publishing. This precautionary measure helps prevent data leakage by thwarting rogue algorithms that could be designed to extract all data from a dataset. By establishing private permissions as the default setting, publishers ensure a robust level of protection for their data assets and mitigate the risk of unauthorized data access.

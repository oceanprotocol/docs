---
title: Compute-to-Data
description: Datasets and Algorithms
---

## Datasets & Algorithms

With Compute-to-Data, datasets are not allowed to leave the premises of the data holder, only algorithms can be permitted to run on them under certain conditions within an isolated and secure environment. Algorithms are an asset type just like datasets. They too can have a pool or a fixed price to determine their price whenever they are used.


Algorithms can be public or private by setting `"attributes.main.type"` value in DDO as follows:

- `"access"` - public. The algorithm can be downloaded, given appropriate datatoken.
- `"compute"` - private. The algorithm is only available to use as part of a compute job without any way to download it. The Algorithm must be published on the same Ocean Provider as the dataset it's targeted to run on.

For each dataset, publishers can choose to allow various permission levels for algorithms to run:

- allow selected algorithms, referenced by their DID
- allow all algorithms published within a network or marketplace
- allow raw algorithms, for advanced use cases circumventing algorithm as an asset type, but most prone to data escape

All implementations should set permissions to private by default: upon publishing a compute dataset, no algorithms should be allowed to run on it. This is to prevent data escape by a rogue algorithm being written in a way to extract all data from a dataset.

## DDO Links

- [Algorithm DDO](/concepts/ddo-metadata/#fields-when-attributesmaintype--algorithm)
- [Compute DDO](/concepts/ddo-metadata/#fields-when-attributesmaintype--compute)

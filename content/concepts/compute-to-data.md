---
title: Compute-to-Data
description: Providing access to data in a privacy-preserving fashion
slug: /concepts/compute-to-data/
section: concepts
---

## Quick Start

- [Compute-to-Data example](https://github.com/oceanprotocol/ocean.py/blob/main/READMEs/c2d-flow.md)


## Motivation

The most basic scenario for a Publisher is to provide access to the datasets they own or manage. However, a Publisher may offer a service to execute some computation on top of their data. This has some benefits:

- The data **never** leaves the Publisher enclave.
- It's not necessary to move the data; the algorithm is sent to the data.
- Having only one copy of the data and not moving it makes it easier to be compliant with data protection regulations.

[This page](https://oceanprotocol.com/technology/compute-to-data) elaborates on the benefits.

## Further Reading

- [Compute-to-Data architecture](/tutorials/compute-to-data-architecture/)
- [Tutorial: Writing Algorithms](/tutorials/compute-to-data-algorithms/)
- [Tutorial: Set Up a Compute-to-Data Environment](/tutorials/compute-to-data-minikube/)
- [Use Compute-to-Data in Ocean Market](https://blog.oceanprotocol.com/compute-to-data-is-now-available-in-ocean-market-58868be52ef7)
- [Build ML models via Ocean Market or Python](https://medium.com/ravenprotocol/machine-learning-series-using-logistic-regression-for-classification-in-oceans-compute-to-data-18df49b6b165)
- [Compute-to-Data Python Quickstart](https://github.com/oceanprotocol/ocean.py/blob/main/READMEs/c2d-flow.md)
- [(Old) Compute-to-Data specs](https://github.com/oceanprotocol-archive/OEPs/tree/master/12) (OEP12)

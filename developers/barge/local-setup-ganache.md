---
description: 🧑🏽‍💻 Your Local Development Environment for Ocean Protocol
---

# Local Setup

**Functionalities of Barge**

Barge offers several functionalities that enable developers to create and test the Ocean Protocol infrastructure efficiently. Here are its key components:

<table><thead><tr><th width="120">Functionality</th><th>Description</th></tr></thead><tbody><tr><td>Aquarius</td><td>A metadata storage and retrieval service for Ocean Protocol. Allows indexing and querying of metadata.</td></tr><tr><td>Provider</td><td>A service that facilitates interaction between users and the Ocean Protocol network.</td></tr><tr><td>Ganache</td><td>A local Ethereum blockchain network for testing and development purposes.</td></tr><tr><td>TheGraph</td><td>A decentralized indexing and querying protocol used for building subgraphs in Ocean Protocol.</td></tr><tr><td>ocean-contracts</td><td>Smart contracts repository for Ocean Protocol. Deploys and manages the necessary contracts for local development.</td></tr><tr><td>Customization and Options</td><td>Barge provides various options to customize component versions, log levels, and enable/disable specific blocks.</td></tr></tbody></table>

Barge helps developers to get started with Ocean Protocol by providing a local development environment. With its modular and user-friendly design, developers can focus on building and testing their applications without worrying about the intricacies of the underlying infrastructure.

To use Barge, you can follow the instructions in the [Barge repository](https://github.com/oceanprotocol/barge).

Before getting started, make sure you have the following prerequisites:

* **Linux** or **macOS** operating system. Barge does not currently support Windows, but you can run it inside a Linux virtual machine or use the Windows Subsystem for Linux (WSL).
* Docker installed on your system. You can download and install Docker from the [Docker website](https://www.docker.com/get-started). On Linux, you may need to allow non-root users to run Docker. On Windows or macOS, it is recommended to increase the memory allocated to Docker to 4 GB (default is 2 GB).
* Docker Compose, which is used to manage the Docker containers. You can find installation instructions in the [Docker Compose documentation](https://docs.docker.com/compose/).

Once you have the prerequisites set up, you can clone the Barge repository and navigate to the repository folder using the command line:

```bash
git clone git@github.com:oceanprotocol/barge.git
cd barge
```

The repository contains a shell script called `start_ocean.sh` that you can run to start the Ocean Protocol stack locally for development. To start Barge with the default configurations, simply run the following command:

```bash
./start_ocean.sh
```

This command will start the default versions of Aquarius, Provider, and Ganache, along with the Ocean contracts deployed to Ganache.

For more advanced options and customization, you can refer to the README file in the Barge repository. It provides detailed information about the available startup options, component versions, log levels, and more.

To clean up your environment and stop all the Barge-related containers, volumes, and networks, you can run the following command:

```bash
./cleanup.sh
```

Please refer to the Barge repository's README for more comprehensive instructions, examples, and details on how to use Barge for local development with the Ocean Protocol stack.

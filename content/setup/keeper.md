---
title: Run a Keeper
description: How to run a keeper node.
---

If you want to run a [keeper node (keeper)](/concepts/components#keeper), you have several options. Some of them are outlined below.

## Using Barge

[Barge](https://github.com/oceanprotocol/barge) uses Docker Compose to run one or more keeper nodes (and other components) in Docker containers on your local machine.

- If you use `--local-kovan-node` or `--local-nile-node`, then it will run one local Parity Ethereum node (as a _user node_, i.e. a non-voting node) and it will connect that node to the [Kovan Testnet](/concepts/testnets/#the-kovan-testnet) or [Nile Testnet](/concepts/testnets/#the-nile-testnet), respectively.
- If you use `--local-spree-node` or `--local-ganache-node`, then it will run a strictly-local [Spree Testnet](/concepts/testnets/#a-spree-testnet-for-local-development) or [Ganache-Based Testnet](/concepts/testnets/#a-ganache-based-testnet-for-local-development).

Barge deploys the keeper contracts to whatever keeper nodes are deployed locally.

## Running a Keeper in the Nile Testnet or the Pacific Network

If you're interested in running a keeper node (as a voting _authority node_) in the [Nile Testnet](/concepts/testnets/#the-nile-testnet) or the [Pacific Network](/concepts/pacific-network/), then email <a href="mailto:info@oceanprotocol.com">info@oceanprotocol.com</a>.

Note: The dev-ocean repository contains [a guide for running a keeper node in the Nile Testnet](https://github.com/oceanprotocol/dev-ocean/blob/master/doc/devops/keeper-setup.md) (if you have permission).

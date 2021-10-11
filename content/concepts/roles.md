---
title: v4 roles and permissions
description: The page describes the roles and permissions present in ERC721Template contract.
---

## Roles

[ERC721Template](https://github.com/oceanprotocol/contracts/blob/v4Hardhat/contracts/templates/ERC721Template.sol) contract defines following roles:

- NFT Owner
- Manager

## NFT Owner

- NFT Owner is the publisher. I.e. Owner is a public address which transacted with `ERC721Factory` contract and deployed a new `ERC721` contract.

- NFT Owner can assign managers while deploying the contract.
- NFT Owner is also added to the Managers.
- NFT Owner can add/remove Managers.
- Clean all permissions

## Manager

- A public address with a `Magner` role can update the metadata
- Can deploy new ERC20 contract which is associtated with the `ERC721` contract.

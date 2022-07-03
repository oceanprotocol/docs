---
title: Data NFTs and datatoken roles
description: The permissions stored on chain in the contracts control the access to the data NFT (ERC721) and datatoken (ERC20) smart contract functions.
---

The permissions are stored in the data NFT (ERC721) smart contract. The data NFT (ERC721) and datatoken (ERC20) smart contracts both use this information to restrict access to the smart contract functions. The tables below list restricted actions that are accessible only to the allowed users.

## Roles in data NFT (ERC721) smart contract

| Action &darr; / Role &rarr;       | NFT Owner              | Manager                | ERC20 Deployer         | Store Updater          | Metadata Updater       |
| --------------------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| Set token URI                     |                        |                        |                        |                        |                        |
| Add manager                       | <center>**✓**</center> |                        |                        |                        |                        |
| Remove manager                    | <center>**✓**</center> |                        |                        |                        |                        |
| Clean permissions                 | <center>**✓**</center> |                        |                        |                        |                        |
| Set base URI                      | <center>**✓**</center> |                        |                        |                        |                        |
| Set Metadata state                |                        |                        |                        |                        | <center>**✓**</center> |
| Set Metadata                      |                        |                        |                        |                        | <center>**✓**</center> |
| Create new datatoken              |                        |                        | <center>**✓**</center> |                        |                        |
| Executes any other smart contract |                        | <center>**✓**</center> |                        |                        |                        |
| Set new key-value in store        |                        |                        |                        | <center>**✓**</center> |                        |

## Roles in datatoken (ERC20) smart contract

| Action &darr; / Role &rarr; | ERC20 Deployer         | Minter                 | NFT owner              | Fee manager            |
| --------------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| Deploy pool                 | <center>**✓**</center> |                        |                        |                        |
| Create Fixed Rate exchange  | <center>**✓**</center> |                        |                        |                        |
| Create Dispenser            | <center>**✓**</center> |                        |                        |                        |
| Add minter                  | <center>**✓**</center> |                        |                        |                        |
| Remove minter               | <center>**✓**</center> |                        |                        |                        |
| Add fee manager             | <center>**✓**</center> |                        |                        |                        |
| Remove fee manager          | <center>**✓**</center> |                        |                        |                        |
| Set data                    | <center>**✓**</center> |                        |                        |                        |
| Clean permissions           |                        |                        | <center>**✓**</center> |                        |
| Mint                        |                        | <center>**✓**</center> |                        |                        |
| Set fee collector           |                        |                        |                        | <center>**✓**</center> |

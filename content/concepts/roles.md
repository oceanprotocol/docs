---
title: Data NFTs and datatoken roles
description: Access to the data NFT and datatoken smart contract functions is controlled by the permssions stored on chain in the contracts. 
---

## Roles in data NFT smart contract

| Action &darr; / Role &rarr;       | NFT Owner          | Manager            | ERC20 Deployer     | Store Updater      | Metadata Updater   |
|-----------------------------------|--------------------|--------------------|--------------------|--------------------|--------------------|
| Set token URI                     |    |                    |                    |                    |                    |
| Add manager                       | <center>&#9745;</center> |                    |                    |                    |                    |
| Remove manager                    | <center>&#9745;</center> |                    |                    |                    |                    |
| Clean permissions                 | <center>&#9745;</center> |                    |                    |                    |                    |
| Set base URI                      | <center>&#9745;</center> |                    |                    |                    |                    |
| Set MetaData state                |                    |                    |                    |                    | <center>&#9745;</center> |
| Set MetaData                      |                    |                    |                    |                    | <center>&#9745;</center> |
| Create new Datatoken              |                    |                    | <center>&#9745;</center> |                    |                    |
| Executes any other smart contract |                    | <center>&#9745;</center> |                    |                    |                    |
| Set new key-value in store        |                    |                    |                    | <center>&#9745;</center> |                    |

## Roles in datatoken smart contract

| Action  &darr;  / Role  &rarr; | ERC20 Deployer           | Minter                   | NFT owner                | Fee manager              |
|--------------------------------|--------------------------|--------------------------|--------------------------|--------------------------|
| Deploy pool                    | <center>&#9745;</center> |                          |                          |                          |
| Create Fixed Rate exchange     | <center>&#9745;</center> |                          |                          |                          |
| Create Dispenser               | <center>&#9745;</center> |                          |                          |                          |
| Add minter                     | <center>&#9745;</center> |                          |                          |                          |
| Remove minter                  | <center>&#9745;</center> |                          |                          |                          |
| Add fee manager                | <center>&#9745;</center> |                          |                          |                          |
| Remove fee manager             | <center>&#9745;</center> |                          |                          |                          |
| Set data                       | <center>&#9745;</center> |                          |                          |                          |
| Clean permissions              |                          |                          | <center>&#9745;</center> |                          |
| Mint                           |                          | <center>&#9745;</center> |                          |                          |
| Set fee collector              |                          |                          |                          | <center>&#9745;</center> |

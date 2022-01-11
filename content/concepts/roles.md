---
title: Data NFTs and datatoken roles
description: Access to the data NFT and datatoken smart contract functions is controlled by the permssions stored on chain in the contracts. 
---

## Roles in data NFT smart contract

| Action &darr; / Role &rarr;       | NFT Owner          | Manager            | ERC20 Deployer     | Store Updater      | Metadata Updater   |
|-----------------------------------|--------------------|--------------------|--------------------|--------------------|--------------------|
| Set token URI                     |    |                    |                    |                    |                    |
| Add manager                       | <center>🗸</center> |                    |                    |                    |                    |
| Remove manager                    | <center>🗸</center> |                    |                    |                    |                    |
| Clean permissions                 | <center>🗸</center> |                    |                    |                    |                    |
| Set base URI                      | <center>🗸</center> |                    |                    |                    |                    |
| Set MetaData state                |                    |                    |                    |                    | <center>🗸</center> |
| Set MetaData                      |                    |                    |                    |                    | <center>🗸</center> |
| Create new Datatoken              |                    |                    | <center>🗸</center> |                    |                    |
| Executes any other smart contract |                    | <center>🗸</center> |                    |                    |                    |
| Set new key-value in store        |                    |                    |                    | <center>🗸</center> |                    |

## Roles in datatoken smart contract

| Action  &darr;  / Role  &rarr; | ERC20 Deployer           | Minter                   | NFT owner                | Fee manager              |
|--------------------------------|--------------------------|--------------------------|--------------------------|--------------------------|
| Deploy pool                    | <center>🗸</center> |                          |                          |                          |
| Create Fixed Rate exchange     | <center>🗸</center> |                          |                          |                          |
| Create Dispenser               | <center>🗸</center> |                          |                          |                          |
| Add minter                     | <center>🗸</center> |                          |                          |                          |
| Remove minter                  | <center>🗸</center> |                          |                          |                          |
| Add fee manager                | <center>🗸</center> |                          |                          |                          |
| Remove fee manager             | <center>🗸</center> |                          |                          |                          |
| Set data                       | <center>🗸</center> |                          |                          |                          |
| Clean permissions              |                          |                          | <center>🗸</center> |                          |
| Mint                           |                          | <center>🗸</center> |                          |                          |
| Set fee collector              |                          |                          |                          | <center>🗸</center> |

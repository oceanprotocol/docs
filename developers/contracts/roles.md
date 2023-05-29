---
title: Data NFTs and datatoken roles
description: >-
  The permissions stored on chain in the contracts control the access to the
  data NFT (ERC721) and datatoken (ERC20) smart contract functions.
---

# Roles

The permissions are stored in the data NFT (ERC721) smart contract. The data NFT (ERC721) and datatoken (ERC20) smart contracts both use this information to restrict access to the smart contract functions. The tables below list restricted actions that are accessible only to the allowed users.

### What Roles Can The Data NFT Owner Assign?

The data NFT is the base IP for the asset and all the datatokens are therefore linked to the data NFT smart contract — this has enabled us to do a bunch of cool new things around role administration. We’ve introduced a host of useful roles which give you flexibility in how you manage your project. This can be a big help for enterprises and startups who are ready to scale up and introduce a level of administration.

```mermaid
```

#### NFT Owner

The NFT owner is the owner of the base-IP and is therefore at the highest level. The NFT owner can perform any action or assign any role but crucially, the NFT owner is the only one who can assign the manager role. Upon deployment or transfer of the data NFT, the NFT owner is automatically added as a manager. The NFT owner is also the only role that can’t be assigned to multiple users — the only way to share this role is via multi-sig or a DAO.

#### Manager

The manager can assign or revoke three main roles (deployer, metadata updater, store updater). The manager is also able to interact with the ERC725 data.

#### ERC20 Deployer

The Deployer has a bunch of privileges at the ERC20 datatoken level. They can deploy new datatokens with fixed price exchange, or free pricing. They can also update the ERC725Y key-value store and assign roles the ERC20 level.

#### Metadata Updater

There is also a specific role for updating the metadata. The Metadata updater has the ability to update the information about the data asset (title, description, sample data etc) that is displayed to the user on the asset detail page within the market.

#### Store Updater

The store updater can store, remove or update any arbitrary key value using the ERC725Y implementation (at the ERC721 level). The use case for this role depends a lot on what data is being stored in the ERC725Y key-value pair — as mentioned above, this is highly flexible.

#### Minter

The Minter has the ability to mint new datatokens, provided the limit has not been exceeded. In most cases, this role will not be used as the alternative is for the datatokens to be minted by the side-staking bot which has many advantages. We highly recommend taking a read of this article if you’re interested in learning more about safer staking and one-sided staking.

#### Fee Manager

Finally, we also have a fee manager which has the ability to set a new fee collector — this is the account that will receive the datatokens when a data asset is consumed. If no fee collector account has been set, the datatokens will be sent by default to the NFT Owner. The applicable fees (market and community fees) are automatically deducted from the datatokens that are received.

### Roles in data NFT (ERC721) smart contract

| Action ↓ / Role →                 | NFT Owner | Manager | ERC20 Deployer | Store Updater | Metadata Updater |
| --------------------------------- | --------- | ------- | -------------- | ------------- | ---------------- |
| Set token URI                     |           |         |                |               |                  |
| Add manager                       | **✓**     |         |                |               |                  |
| Remove manager                    | **✓**     |         |                |               |                  |
| Clean permissions                 | **✓**     |         |                |               |                  |
| Set base URI                      | **✓**     |         |                |               |                  |
| Set Metadata state                |           |         |                |               | **✓**            |
| Set Metadata                      |           |         |                |               | **✓**            |
| Create new datatoken              |           |         | **✓**          |               |                  |
| Executes any other smart contract |           | **✓**   |                |               |                  |
| Set new key-value in store        |           |         |                | **✓**         |                  |

### Roles in datatoken (ERC20) smart contract

| Action ↓ / Role →          | ERC20 Deployer | Minter | NFT owner | Fee manager |
| -------------------------- | -------------- | ------ | --------- | ----------- |
| Create Fixed Rate exchange | **✓**          |        |           |             |
| Create Dispenser           | **✓**          |        |           |             |
| Add minter                 | **✓**          |        |           |             |
| Remove minter              | **✓**          |        |           |             |
| Add fee manager            | **✓**          |        |           |             |
| Remove fee manager         | **✓**          |        |           |             |
| Set data                   | **✓**          |        |           |             |
| Clean permissions          |                |        | **✓**     |             |
| Mint                       |                | **✓**  |           |             |
| Set fee collector          |                |        |           | **✓**       |

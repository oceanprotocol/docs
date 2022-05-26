---
title: Fine-Grained Permissions 
description: Control who can publish, buy or browse data
---


A large part of Ocean is about access control, which is primarily handled by datatokens. Users can access a resource (e.g. a file) by redeeming datatokens for that resource. We recognize that enterprises and other users often need more precise ways to specify and manage access, and we have introduced fine-grained permissions for these use cases. 
Fine-grained permissions mean that access can be controlled precisely at two levels:

- [Marketplace-level permissions](./market-level-permissions) for browsing, downloading or publishing within a marketplace frontend.

- [Asset-level permissions](./asset-level-permissions) on downloading a specific asset.

The fine-grained permissions features are designed to work in forks of Ocean Market. We have not enabled them in Ocean Market itself, to keep Ocean Market open for everyone to use. On the front end, the permissions features are easily enabled by setting environment variables.

### Introduction

Some datasets need to be restricted to appropriately credentialed users. In this situation there is tension:

1. Datatokens on their own aren’t enough - the datatokens can be exchanged without any restrictions, which means anyone can acquire them and access the data. 
2. We want to retain datatokens approach, since they enable Ocean users to leverage existing crypto infrastructure e.g. wallets, exchange etc.

We can resolve this tension by drawing on the following analogy:

> Imagine going to an age 18+ rock concert. You can only get in if you show both (a) your concert ticket and (b) an id showing that you’re old enough. 

We can port this model into Ocean, where (a) is a datatoken, and (b) is a credential. The datatoken is the baseline access control. It’s fungible, and something that you’ve paid for or had shared to you. It’s independent of your identity. The credential is something that’s a function of your identity. 

The credential based restrictions are implemented in two ways, at the market level and at the asset level. Access to the market is restricted on a role basis, the user's identity is attached to a role via the role based access control (RBAC) server. Access to individual assets is restricted via allow and deny lists which list the ethereum addresses of the users who can and cannot access the asset within the DDO.



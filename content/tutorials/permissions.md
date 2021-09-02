---
title: Fine-Grained Permissions 
description: Control who can publish, consume or browse data
---


A large part of Ocean is about access control, which is primarily handled by datatokens. Users can access a resource (e.g. a file) by redeeming datatokens for that resource. We recognize that enterprises and other users often need more precise ways to specify and manage access, and we have introduced fine-grained permissions for these use cases. 
Fine-grained permissions mean that access can be controlled precisely at two levels:

- [Marketplace-level permissions](./rbac) for browsing, consuming or publishing within a marketplace frontend.

- [Asset-level permissions](./allow-deny-lists) on consuming a specific asset.

## Introduction

Some datasets need to be restricted to appropriately credentialed users. In this situation there is tension:

1. Datatokens on their own aren’t enough - the datatokens can be exchanged without any restrictions, which means anyone can acquire them and access the data. 
2. We want to retain datatokens approach, since they enable Ocean users to leverage existing crypto infrastructure e.g. wallets, exchange etc.

We can resolve this tension by drawing on the following analogy:

> Imagine going to an age 18+ rock concert. You can only get in if you show both (a) your concert ticket and (b) an id showing that you’re old enough. 

We can port this model into Ocean, where (a) is a datatoken, and (b) is a credential. The datatoken is the baseline access control. It’s fungible, and something that you’ve paid for or had shared to you. It’s independent of your identity. The credential is something that’s a function of your identity. 



---
description: >-
  Fine-Grained Permissions Using Role-Based Access Control. You can Control who
  can publish, buy or browse data
---

# Fine-Grained Permissions

A large part of Ocean is about access control, which is primarily handled by datatokens. Users can access a resource (e.g. a file) by redeeming datatokens for that resource. We recognize that enterprises and other users often need more precise ways to specify and manage access, and we have introduced fine-grained permissions for these use cases. Fine-grained permissions mean that access can be controlled precisely at two levels:

* [Marketplace-level permissions](fg-permissions.md#market-level-permissions) for browsing, downloading or publishing within a marketplace frontend.
* [Asset-level permissions](fg-permissions.md#asset-level-restrictions) on downloading a specific asset.

The fine-grained permissions features are designed to work in forks of Ocean Market. We have not enabled them in Ocean Market itself, to keep Ocean Market open for everyone to use. On the front end, the permissions features are easily enabled by setting environment variables.

### Introduction

Some datasets need to be restricted to appropriately credentialed users. In this situation there is tension:

1. Datatokens on their own aren’t enough - the datatokens can be exchanged without any restrictions, which means anyone can acquire them and access the data.
2. We want to retain datatokens approach, since they enable Ocean users to leverage existing crypto infrastructure e.g. wallets, exchange etc.

We can resolve this tension by drawing on the following analogy:

> Imagine going to an age 18+ rock concert. You can only get in if you show both (a) your concert ticket and (b) an id showing that you’re old enough.

We can port this model into Ocean, where (a) is a datatoken, and (b) is a credential. The datatoken is the baseline access control. It’s fungible, and something that you’ve paid for or had shared to you. It’s independent of your identity. The credential is something that’s a function of your identity.

The credential based restrictions are implemented in two ways, at the market level and at the asset level. Access to the market is restricted on a role basis, the user's identity is attached to a role via the role based access control (RBAC) server. Access to individual assets is restricted via allow and deny lists which list the ethereum addresses of the users who can and cannot access the asset within the DDO.

### Asset-Level Restrictions

For asset-level restrictions Ocean supports allow and deny lists. Allow and deny lists are advanced features that allow publishers to control access to individual data assets. Publishers can restrict assets so that they can only be accessed by approved users (allow lists) or they can restrict assets so that they can be accessed by anyone except certain users (deny lists).

When an allow-list is in place, a consumer can only access the resource if they have a datatoken and one of the credentials in the "allow" list of the DDO. Ocean also has complementary deny functionality: if a consumer is on the "deny" list, they will not be allowed to access the resource.

Initially, the only credential supported is Ethereum public addresses. To be fair, it’s more a pointer to an individual not a credential; but it has a low-complexity implementation so makes a good starting point. For extensibility, the Ocean metadata schema enables specification of other types of credentials like W3C Verifiable Credentials and more. When this gets implemented, asset-level permissions will be properly RBAC too. Since asset-level permissions are in the DDO, and the DDO is controlled by the publisher, asset-level restrictions are controlled by the publisher.

### Market-Level Permissions

For market-level permissions, Ocean implements a role-based access control server (RBAC server). It implements restrictions at the user level, based on the user’s role (credentials). The RBAC server is run & controlled by the marketplace owner. Therefore permissions at this level are at the discretion of the marketplace owner.

The RBAC server is the primary mechanism for restricting your users ability to publish, buy, or browse assets in the market.

#### Roles

The RBAC server defines four different roles:

* Admin
* Publisher
* Consumer
* User

**Admin/ Publisher**

Currently users with either the admin or publisher roles will be able to use the Market without any restrictions. They can publish, buy and browse datasets.

**Consumer**

A user with the consumer is able to browse datasets, purchase them, trade datatokens and also contribute to datapools. However, they are not able to publish datasets.

**Users**

Users are able to browse and search datasets but they are not able to purchase datasets, trade datatokens, or contribute to data pools. They are also not able to publish datasets.

**Address without a role**

If a user attempts to view the data market without a role, or without a wallet connected, they will not be able to view or search any of the datasets.

**No wallet connected**

When the RBAC server is enabled on the market, users are required to have a wallet connected to browse the datasets.

#### Mapping roles to addresses

Currently the are two ways that the RBAC server can be configured to map user roles to Ethereum addresses. The RBAC server is also built in such a way that it is easy for you to add your own authorization service. They two existing methods are:

1. Keycloak

If you already have a [Keycloak](https://www.keycloak.org/) identity and access management server running you can configure the RBAC server to use it by adding the URL of your Keycloak server to the `KEYCLOAK_URL` environmental variable in the RBAC `.enb` file.

2. JSON

Alternatively, if you are not already using Keycloak, the easiest way to map user roles to ethereum addresses is in a JSON object that is saved as the `JSON_DATA` environmental variable in the RBAC `.env` file. There is an example of the format required for this JSON object in `.example.env`

It is possible that you can configure both of these methods of mapping user roles to Ethereum Addresses. In this case the requests to your RBAC server should specify which auth service they are using e.g. `"authService": "json"` or `"authService": "keycloak"`

**Default Auth service**

Additionally, you can also set an environmental variable within the RBAC server that specifies the default authorization method that will be used e.g. `DEFAULT_AUTH_SERVICE = "json"`. When this variable is specified, requests sent to your RBAC server don't need to include an `authService` and they will automatically use the default authorization method.

#### Running the RBAC server locally

You can start running the RBAC server by following these steps:

1. Clone this repository:

```bash
git clone https://github.com/oceanprotocol/RBAC-Server.git
cd RBAC-Server
```

2. Install the dependencies:

```bash
npm install
```

3. Build the service

```bash
npm run build
```

4. Start the server

```bash
npm run start
```

#### Running the RBAC in Docker

When you are ready to deploy the RBAC server to

1. Replace the KEYCLOAK\_URL in the Dockerfile with the correct URL for your hosting of [Keycloak](https://www.keycloak.org/).
2. Run the following command to build the RBAC service in a Docker container:

```bash
npm run build:docker
```

3. Next, run the following command to start running the RBAC service in the Docker container:

```bash
npm run start:docker
```

4. Now you are ready to send requests to the RBAC server via postman. Make sure to replace the URL to `http://localhost:49160` in your requests.

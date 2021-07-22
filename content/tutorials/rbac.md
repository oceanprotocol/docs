---
title: Role-Based Access Control Server
description: Control who can publish, consume or browse data
---
The primary mechanism for restricting your users ability to publish, consume, or browse is the role-based access (RBAC) control server. The RBAC server defines four different roles: 

- Admin
- Publisher
- Consumer
- User

## Roles
### Admin/ Publisher

Currently both users with either the admin or publisher roles will be able to use the Market without any restrictions. They can publish, consume and browse datasets. 

### Consumer

A user with the consumer is able to browse datasets, purchase them, trade datatokens and also contribute to datapools. However, they are not able to publish datasets. 

![Viewing the market without publish permission](images/rbac/without-publish-permission.png)

### Users

Users are able to browse and search datasets but they are not able to purchase datasets, trade datatokens, or contribute to data pools. They are also not able to publish datasets. 

![Viewing the market without consume permission](images/rbac/without-consume-permission.png)

### Address without a role

If a user attempts to view the data market without a role, or without a wallet connected, they will not be able to view or search any of the datasets. 

![Viewing the market without browse permission](images/rbac/without-browse-permission.png)

### No wallet connected

When the RBAC server is enabled on the market, users are required to have a wallet connected to browse the datasets.

![Connect a wallet](images/rbac/connect-wallet.png)

## Running the RBAC server locally

You can start running the RBAC server by following these steps:

1. Clone this repository:

```Bash
git clone https://github.com/oceanprotocol/RBAC-Server.git
cd RBAC-Server
```

2. Install the dependencies:

```Bash
npm install
```

3. Build the service

```Bash
npm run build
```

4. Start the server

```Bash
npm run start
```

## Running in Docker

When you are ready to deploy the RBAC server to 

1. Replace the KEYCLOAK_URL in the Dockerfile with the correct URL for your hosting of  [Keycloak](https://www.keycloak.org/).
2. Run the following command to build the RBAC service in a Docker container:

```Bash
npm run build:docker
```

3. Next, run the following command to start running the RBAC service in the Docker container:

```Bash
npm run start:docker
```

4. Now you are ready to send requests to the RBAC server via postman. Make sure to replace the URL to `http://localhost:49160` in your requests.

## Setting up the RBAC in the Market

To use the RBAC server with the market you need to save your the URL of your RBAC server as an env within the market. 

- First setup and host the Ocean role based access control (RBAC) server. Follow the instructions in the [RBAC repository](https://github.com/oceanprotocol/RBAC-Server)
- In your .env file in your fork of Ocean Market, set the value of the `GATSBY_RBAC_URL` environmental variable to the URL of the Ocean RBAC server that you have hosted, e.g. `GATSBY_RBAC_URL= "http://localhost:3000"`
- Users of your marketplace will now require the correct role ("user", "consumer", "publisher") to access features in your marketplace. The market will check the role that has been allocated to the user based on the address that they have connected to the market with.
- The following features have been wrapped in the `Permission` component and will be restricted once the `GATSBY_RBAC_URL` has been defined:
  - Viewing or searching datasets requires the user to have permission to `browse`
  - Purchasing or trading a datatoken, or adding liquidity to a pool require the user to have permission to `consume`
  - Publishing a dataset requires the user to have permission to `publish`
- You can change the permission restrictions by either removing the `Permission` component or passing in a different eventType prop e.g. `<Permission eventType="browse">`.


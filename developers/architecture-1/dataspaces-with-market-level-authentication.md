---
description: >-
  Use marketplace authentication to verify participants before they browse,
  publish, or consume assets.
---

# Dataspaces with market-level authentication

## Introduction

Market-level authentication verifies participants before they access a dataspace marketplace. It creates a controlled entry point for browsing, publishing, and consuming assets.

Market-level authentication uses the OpenID Connect (OIDC) standard. OIDC is an identity layer built on OAuth 2.0. It lets the marketplace delegate authentication to an identity provider and receive verified identity information through security tokens. In our implementation, Authentik provides the OIDC authentication server.

Market-level authentication complements Web3 wallet connections and asset-level access controls. Wallet connections authorize blockchain transactions. Asset-level controls protect individual assets. Marketplace authentication controls who may use the marketplace itself.

### Advantages

Authenticating users at the marketplace provides these advantages:

* **Controlled participation:** Only verified users can enter the marketplace. This reduces exposure to unknown or unauthorized users.
* **Centralized or decentralized lifecycle management:** Operators or Participants can manage registration, login, session expiry, and account removal through their identity provider.
* **Consistent access policies:** Operators can apply organization, group, or role-based policies before users browse, publish, or consume assets.
* **Improved auditability:** Authenticated sessions associate marketplace activity with verified user identities. This supports operational monitoring and compliance processes.



Choose centralized authentication when the dataspace operator manages all participants. Choose federated authentication when participants authenticate through their own trusted identity providers.



## Dataspaces with centralized market-level authentication

In centralized authentication, the Dataspace Operator runs the Central Identity Provider, which all marketplace participants use for authentication. The diagram below shows the main components and the actors of a dataspace with centralized market-level authentication enabled.

<figure><img src="../../.gitbook/assets/Central Market-level Auth - HL (3).png" alt=""><figcaption></figcaption></figure>

The Dataspace Operator controls the complete user lifecycle. This includes account registration, credential management, and account removal. For each Dataspace Participant, multiple users can be managed in the Central Identity Provider. To enable the Dataspace Operator to manage users belonging to Dataspace Participants, a formal process must be established for communicating the required user details to the Dataspace Operator Administrator.

### Flow diagram&#x20;

The diagram below presents the end‑to‑end centralized user authentication workflow for accessing the Marketplace.

<figure><img src="../../.gitbook/assets/Centralized Marketplace Authentication.png" alt=""><figcaption></figcaption></figure>

The following steps are performed when the user authenticates to the Marketplace:

1. User accesses the Marketplace from the browser
2. Marketplace prepares a URL with parameters for the Central Identity Provider, which the user's browser is redirected to
3. The Central Identity Provider authenticates the user and generates an authorization code
4. The Identity Provider then redirects the user's browser back to the Marketplace, along with the authorization code
5. In the background, the Marketplace sends the same authorization code in an authenticated request&#x20;
6. The Central Identity Provider responds by sending an Access Token saying that the user has been authorized and a Refresh Token.
7. The user connects to the web3 and SSI wallets and at the end it gets redirected to the marketplace main page.



### Component diagram

The following diagram depicts the placement of the stack components for a dataspace with central market-level authentication and SSI-based verification enabled.

<figure><img src="../../.gitbook/assets/Central Market-level Auth and SSI enabled.png" alt=""><figcaption></figcaption></figure>

In this configuration, the Central Identity Provider is operated solely by the Dataspace Operator. Among all components, only the Marketplace integrates directly with the Central Identity Provider. All other components continue to function exactly as they do in a dataspace without user authentication. No additional components are required in the Dataspace Participant’s environment.



### Characteristics

This dataspace with centralized market-level authentication has the following characteristics:

* **Closed marketplace access:** The marketplace is not publicly available. To access the marketplace, users have to be registered in the Central Identity Provider server.
* **Centralized user management**: Users are centrally managed by the Dataspace Operator in the Central Identity Provider Server. The Dataspace Participants don't have to deploy anything in their environment to manage the users. However, the Dataspace Participants and Dataspace Operator need to implement a process to communicate user lifecycle events: create, update, or delete user profiles



### User Flows

#### Registering to the Marketplace

To access the Marketplace, users must first be registered in the Central Identity Provider. Because the Central Identity Provider is managed by the Dataspace Operator Administrator, each Dataspace Participant must provide the necessary user profile information to the Administrator so that the corresponding accounts can be created.

For new users, the Dataspace Operator Administrator issues registration invitations, which are sent by email to the users of the Dataspace Participants. After completing the registration process, the users’ profiles become active, enabling them to log in to the Marketplace.



#### **Logging in to the Marketplace**

To access the Marketplace, a user must first authenticate using their username/user ID and password. After the Central Identity Provider validates these credentials, the user is redirected back to the Marketplace, where they must establish connections to both their Web3 wallet and SSI wallet in order to perform any actions within the platform.



The rest of the user flows - Publishing and accessing assets - are similar to the ones described in the chapter [Dataspaces with SSI-based access control enabled](dataspaces-with-ssi-based-access-control-enabled.md).



### Dataspace configuration

#### Configuration example

In a dataspace with centralized market-level authentication, the Marketplace and the Central Identity Provider need to be configured to work together. The table below provides the assumed initial parameters set for each component.

<table><thead><tr><th width="156">Component</th><th width="232">Parameter</th><th>Value</th></tr></thead><tbody><tr><td><strong>Marketplace</strong></td><td>Base URL</td><td><code>https://market2.demo.oceanenterprise.io</code></td></tr><tr><td><strong>Central Identity Provider</strong></td><td>Base URL</td><td><code>https://ocean-node-vm2.oceanenterprise.io:8443</code></td></tr><tr><td></td><td>Application name for Marketplace</td><td><code>ocean-market-demo</code></td></tr><tr><td></td><td>OpenId Provider's name for Marketplace</td><td><code>ocean-market-demo-provider</code></td></tr><tr><td></td><td>OpenId Provider's client ID</td><td><code>uVdyN8v6rynXK9vKMchvBVRJBKIPHiyLP2yOegIP</code></td></tr><tr><td></td><td>OpenIdProvider's client secret</td><td><code>BtqImZk9yhJjFxfNeT4npEiPidDtYM1xtSTyE1Inm2vG9J4pW6GzxOUM9Sdbauyy46MY5607MrEkaxrlkhGjeK4rGuQBkHH2d8ZjK0BOruTtqhAA3ZRUVelNviZvGi0h</code></td></tr></tbody></table>



Starting from the initial parameters listed in the table above, to ensure correct integration between the Markeplace and the Central Identity Provider, configure the following parameters/system variables for each component, using the examples shown in the table below.

<table><thead><tr><th width="146">Component</th><th width="293.5">Parameter/System Variable</th><th>Value</th></tr></thead><tbody><tr><td><strong>Marketplace</strong></td><td>NEXT_PUBLIC_AUTH_ENABLED</td><td><code>true</code></td></tr><tr><td></td><td>NEXT_PUBLIC_AUTH_PROVIDER</td><td><code>oidc</code></td></tr><tr><td></td><td>NEXT_PUBLIC_OIDC_ISSUER</td><td><code>https://ocean-node-vm2.oceanenterprise.io:8443/application/o/ocean-market-demo/</code></td></tr><tr><td></td><td>NEXT_PUBLIC_OIDC_CLIENT_ID</td><td><code>uVdyN8v6rynXK9vKMchvBVRJBKIPHiyLP2yOegIP</code></td></tr><tr><td></td><td>OIDC_CLIENT_SECRET</td><td><code>BtqImZk9yhJjFxfNeT4npEiPidDtYM1xtSTyE1Inm2vG9J4pW6GzxOUM9Sdbauyy46MY5607MrEkaxrlkhGjeK4rGuQBkHH2d8ZjK0BOruTtqhAA3ZRUVelNviZvGi0h</code></td></tr><tr><td></td><td>NEXT_PUBLIC_OIDC_REDIRECT_URI</td><td><code>https://market.demo.oceanenterprise.io/auth/callback</code></td></tr><tr><td></td><td>NEXT_PUBLIC_OIDC_TOKEN_URL</td><td><code>https://ocean-node-vm2.oceanenterprise.io:8443/application/o/token/</code></td></tr><tr><td><strong>Central Identity Provider</strong></td><td>OpenId Provider's configuration -> Redirect URIs</td><td><code>https://market.demo.oceanenterprise.io/auth/callback</code><br><br><code>https://market.demo.oceanenterprise.io/auth/login</code></td></tr><tr><td></td><td>OpenId Provider's configuration -> Logout URIs</td><td><code>https://market.demo.oceanenterprise.io/auth/login</code></td></tr></tbody></table>



#### Installation sequence

The simplest way to configure a dataspace with Centralized Market‑Level Authentication is to use the [User Management Pack](../../infrastructure/user-management-package/), which provides all tools required to install and configure the software components involved in user authentication and related functionality.

<table><thead><tr><th width="102.5">Step no.</th><th>Action</th><th>Role</th></tr></thead><tbody><tr><td>1.</td><td><a href="../../infrastructure/marketplace-installation-and-configuration/marketplace-installation.md">Install and perform the basic configuration of the marketplace, </a>without configuring the market-level authentication</td><td><a href="../dataspace-actors-and-roles.md#dataspace-operator-administrator">Dataspace Operator Administrator</a></td></tr><tr><td>2.</td><td><a href="../../infrastructure/user-management-package/deployment-steps/dataspace-operator-deployment.md">Install and configure the User Management Pack for Dataspace Operator</a></td><td><a href="../dataspace-actors-and-roles.md#dataspace-operator-administrator">Dataspace Operator Administrator</a></td></tr><tr><td>3.</td><td><a href="../../infrastructure/marketplace-installation-and-configuration/configure-market-level-authentication/">Configure the market-level authentication </a></td><td><a href="../dataspace-actors-and-roles.md#dataspace-operator-administrator">Dataspace Operator Administrator</a></td></tr></tbody></table>



## Dataspaces with federated market-level authentication

In federated authentication, each Participant in the dataspace runs a Participant Identity Provider that has a trust relationship with the Central Identity Provider run by the Dataspace Operator.&#x20;

The diagram below shows the main components and the actors of a dataspace with federated market-level authentication enabled.

<figure><img src="../../.gitbook/assets/Federated Market-level Auth - HL (1).png" alt=""><figcaption></figcaption></figure>

In contrast to centralized market‑level authentication, the **Dataspace Participant** (in this example, _Dataspace Participant 1_) retains full control over the **entire user lifecycle** for its own users. The Participant Administrator manages user onboarding, credential issuance and maintenance, and account deprovisioning for all organizational users authorized to access the Marketplace.

A **trust relationship** is established between the Participant Identity Provider and the Central Identity Provider. Through this trust, the Central Identity Provider accepts authentications performed by the Participant Identity Provider and grants Marketplace access to those validated users.

This configuration also supports scenarios where the **Dataspace Operator** manages user identities on behalf of Participants that cannot operate their own Identity Provider (as illustrated with _Dataspace Participant 2_).



### Flow diagram&#x20;

The diagram below presents the end‑to‑end federated user authentication workflow for accessing the Marketplace.

<figure><img src="../../.gitbook/assets/Federatred user authentication diagram.png" alt=""><figcaption></figcaption></figure>



The authentication process uses the standard OIDC Authorization Code Flow with Proof Key for Code Exchange (PKCE) across two chained execution tiers: Downstream (Marketplace $$ $\leftrightarrow$ $$ Central IdP) and Upstream (Central IdP $$ $\leftrightarrow$ $$ Participant IdP).

#### Step 1: Authentication Initiation

1. The user clicks Login on the Ocean Enterprise Marketplace frontend.
2. The Marketplace generates a cryptographically random `state`, a `nonce`, and a PKCE `code_verifier` / `code_challenge` pair.
3. The Marketplace redirects the user's browser to the Central Authentik IdP Authorization Endpoint (`/application/o/authorize/`) with query parameters specifying `client_id`, `redirect_uri`, `scope=openid profile email`, `code_challenge`, and `code_challenge_method=S256`.

#### Step 2: Tenant Discovery and IdP Routing

4. The Central Authentik IdP receives the request and presents an organization selection interface (or dynamically resolves the target IdP via an email domain typed by the user or an incoming `hd` / `prompt` parameter).
5. Upon identifying the target organization, Central Authentik retrieves the registered OIDC configurations for that specific Participant IdP.

#### Step 3: Upstream Authorization Redirect

6. Central Authentik constructs a secondary OIDC Authorization Code request, acting as an RP relative to the Participant IdP.
7. Central Authentik redirects the user's browser to the Participant Authentik IdP Authorization Endpoint with Central's upstream `client_id`, an upstream `redirect_uri` (pointing back to Central's OAuth callback endpoint), requested scopes, and state context.

#### Step 4: Upstream User Authentication

8. The Participant Authentik IdP prompts the user for local credentials (e.g., username/password, FIDO2 webauthn, TOTP).
9. The user successfully completes primary authentication and any required local MFA challenges.
10. The Participant Authentik IdP generates a short-lived Upstream Authorization Code.
11. The Participant IdP returns an HTTP 302 redirect back to the Central Authentik Callback URL containing the `code` and the original upstream `state`.

#### Step 5: Upstream Token Exchange (Backchannel)

12. Central Authentik receives the authorization code via the user browser redirect.
13. Central Authentik executes a secure, backchannel HTTP POST request to the Participant IdP's Token Endpoint (`/application/o/token/`), exchanging the code and its upstream client secret for the Participant's ID Token and Access Token.
14. Central Authentik validates the Participant ID Token signature against the Participant IdP's public keys (JWKS), verifies `iss` (Issuer) and `aud` (Audience) claims, and extracts requested user attributes.

#### Step 6: Claim Transformation & Downstream Authorization Code Issuance

15. Central Authentik executes configured Property Mappings to normalize user attributes into standard Central claims.
16. Central Authentik constructs a local user context/shadow account and issues a short-lived Central Authorization Code.
17. Central Authentik redirects the user's browser back to the Ocean Enterprise Marketplace `redirect_uri` with the `code` and the original downstream `state`.

#### Step 7: Downstream Token Exchange & Session Establishment

18. The Marketplace application extracts the Central Authorization Code and executes a backchannel HTTP POST request to Central Authentik’s Token Endpoint, transmitting the original PKCE `code_verifier`.
19. Central Authentik verifies the PKCE verifier against the original challenge, validates parameters, and returns a Central ID Token, Access Token, and optional Refresh Token.
20. The Marketplace validates the Central ID Token signature against Central Authentik's JWKS, verifies claims (`iss`, `aud`, `nonce`), creates an authenticated session context for the user, and grants access to protected routes.



### Component diagram

The following diagram depicts the placement of the stack components for a dataspace with federated market-level authentication and SSI-based verification enabled.

<figure><img src="../../.gitbook/assets/Federated Market-level Auth and SSI enabled.png" alt=""><figcaption></figcaption></figure>



In this configuration, the **Central Identity Provider** is deployed and operated by the **Dataspace Operator**, while the **Participant Identity Provider** is deployed and operated by the **Dataspace Participant**. The **Marketplace** integrates directly with the Central Identity Provider and grants access to users authenticated by it.

A **trust relationship** is established between the Central Identity Provider and the Participant Identity Provider. Through this trust, the Central Identity Provider accepts authentications performed by the Participant Identity Provider, enabling users authenticated by the Participant Identity Provider to access the Marketplace as well.

All other components operate exactly as they do in a dataspace without user authentication.&#x20;



### Characteristics

The dataspace with federated market-level authentication has the following characteristics:

* **Closed marketplace access:** The marketplace is not publicly available. To access the marketplace, users have to be registered in the Central Identity Provider server.
* **Decoupled Identity Lifecycle**: Marketplace participants manage user provisioning, credential rotation, and access revocation within their own organizational IdPs without manual coordination with marketplace administrators.
* **Single Integration Target:** The Ocean Enterprise Marketplace integrates solely with the Central IDP using standard OIDC parameters, insulating application code from participant-level IDP configuration changes.

### User Flows

#### Registering to the Marketplace

To access the Marketplace, participants' users must first be registered in the Participant Identity Provider. To this end, the Participant Identity Provider has been configured to register end users through an invitation flow. The Participant Administrator creates a user registration invitation, which is then sent by email to the end-user. The end user access the invitation link and registers the details, such as user name and password.&#x20;

After completing the registration process, the users’ profiles become active, enabling them to log in to the Marketplace.



#### **Logging in to the Marketplace**

To access the Marketplace, a user must access the login screen of the marketplace. From there, it will be redirected to the Central IDP login screen. In that screen, the users should select the Participant IDP which they belong to. The user will then be redirected to the Participant IDP login screen. The user authenticates using their username/user ID and password. After the Participant Central Identity Provider validates these credentials, the user is redirected back to the Central Identity Provider, and from there back to ther Marketplace, where they must establish connections to both their Web3 wallet and SSI wallet in order to perform any actions within the platform.





Here is a clearer, more structured, and more professional version of your text, with improved flow, consistency, and terminology. I’ve kept your meaning intact while tightening phrasing and removing ambiguity.

### **Registering to the Marketplace**

To access the Marketplace, users of a Dataspace Participant must first be registered in the **Participant Identity Provider**. The Participant Identity Provider is configured to onboard end users through an **invitation‑based registration flow**.

The **Participant Administrator** initiates the process by creating a registration invitation, which is then sent to the end user via email. The end user follows the invitation link and completes the registration form, providing details such as username and password.

Once the registration process is completed, the user’s profile becomes active, enabling them to log in to the Marketplace.

### **Logging in to the Marketplace**

To log in, the user begins at the Marketplace login screen. From there, they are redirected to the **Central Identity Provider (Central IDP)** login page. On this page, users select the **Participant Identity Provider** to which they belong.

The user is then redirected to the Participant Identity Provider’s login screen, where they authenticate using their username/user ID and password. After the Participant Identity Provider validates the credentials, the user is returned to the Central Identity Provider, and subsequently redirected back to the Marketplace.

Upon returning to the Marketplace, the user must establish connections to both their **Web3 wallet** and **SSI wallet** in order to perform actions within the platform.



The rest of the user flows - Publishing and accessing assets - are similar to the ones described in the chapter [Dataspaces with SSI-based access control enabled](dataspaces-with-ssi-based-access-control-enabled.md).



### Dataspace Configuration

#### Configuration steps

The simplest way to configure a dataspace with Federated Market‑Level Authentication is to use the [User Management Pack](../../infrastructure/user-management-package/), which provides all tools required to install and configure the software components involved in user authentication and related functionality.

To configure a dataspace with Federated Market‑Level Authentication, perform the following steps:

<table><thead><tr><th width="88.5">Step no.</th><th>Action</th><th>Role</th></tr></thead><tbody><tr><td>1.</td><td><a href="dataspaces-with-market-level-authentication.md#dataspace-configuration">Configure the dataspace for Centralized Market-Level Authentication.</a></td><td><a href="../dataspace-actors-and-roles.md#dataspace-operator-administrator">Dataspace Operator Administrator</a></td></tr><tr><td>2.</td><td><a href="/broken/pages/r4cJFQ1gtCn29r3gSUNO">Install and configure the Participant Identity Provider </a></td><td><a href="../dataspace-actors-and-roles.md#dataspace-participant-administrator">Dataspace Participant Administrator</a></td></tr><tr><td>3.</td><td><a href="/broken/pages/R0jW6vRpHNU72QYGeW1C">Participant Onboarding into Central Identity Provider</a></td><td><a href="../dataspace-actors-and-roles.md#dataspace-operator-administrator">Dataspace Operator Administrator</a></td></tr></tbody></table>


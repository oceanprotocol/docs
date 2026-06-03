# Configure market-level authentication

## Introduction

For dataspaces where controlling access to resources is essential, operators can enable user authentication on the marketplace to ensure that only verified participants interact with sensitive data and services. The Ocean Enterprise Marketplace supports secure, standards‑based authentication through OpenID Connect (OIDC).&#x20;

We used the Authentik server (available at [https://goauthentik.io/](https://goauthentik.io/)) as the Identity Provider (IdP) for the OE Marketplace, handling:

* User authentication
* User registration
* Session management
* Single Sign-On (SSO)
* Single Logout (SLO)

Once configured, users can securely access the marketplace using the credentials registered in Authentik. The following diagram shows the OIDC authentication flow between the user, Ocean Market, and Authentik.

<figure><img src="../../../.gitbook/assets/OE market-level authentication (1).png" alt=""><figcaption></figcaption></figure>

In this configuration, there is a single Authentik server where users reside. The OE Marketplace is configured to use the Authentik server as the OpenID Provider.&#x20;

* When the user accesses the OE Marketplace via the browser (step 1), OE Marketplace prepares a URL with parameters for the Authentik server, which the user's browser is redirected to (step 2)
* The Authentik server authenticates the user (step 3) and generates an authorization code
* &#x20;The Authentik server then redirects the client (the user's browser) back to the OE Marketplace, along with that authorization code (step 4). In the background, the OE Marketplace then sends that same authorization code in a request authenticated by the `client_id` and `client_secret` to the Authentik server. Finally, the Authentik server responds by sending an Access Token, saying this user has been authorized, and optionally a Refresh Token.



This guide explains how to configure Authentik as the OpenID Connect (OIDC) Identity Provider for the Ocean Enterprise Marketplace. The configuration consists of:

1. Creating an OIDC Provider
2. Creating an Application
3. Connecting the Application to Ocean Market
4. Verifying the OIDC endpoints

## Preconditions

Before starting, ensure:

* Authentik is installed and accessible (see [https://docs.goauthentik.io/install-config/](https://docs.goauthentik.io/install-config/)). Make sure it is configured with a qualified digital certificate.
* Ocean Market frontend is deployed (see [this chapter](../marketplace-installation.md))
* You have administrator access to Authentik.
* You know your Ocean Market callback URL.\
  Example callback URL: `https://market.example.com/auth/callback`

## Steps

* [Configure the Authentik provider and application](configure-the-authentik-provider-and-application.md)
* [Configure the marketplace to use OIDC authentication](configure-the-oe-marketplace-to-use-oidc-authentication.md)
* [Authentication Flows and User Enrollment in Authentik](configure-authentication-and-user-enrollment-flows-in-authentik.md)
* [Configure User Groups and Application Access Control](configure-user-groups-and-application-access-control.md)

# Configure the Authentik provider and application

## Log in to the Authentik Admin console

1\. Open your Authentik admin panel

Example: `https://your-authentik-domain:8443`

2\. Log in using an administrator account.

<figure><img src="../../../.gitbook/assets/image (90).png" alt=""><figcaption></figcaption></figure>



## Create an OAuth2 / OIDC provider

1\. In the Authentik admin panel, navigate to `Applications → Providers`

<figure><img src="../../../.gitbook/assets/image (91).png" alt=""><figcaption></figcaption></figure>

2\. Select `Create`

<figure><img src="../../../.gitbook/assets/image (93).png" alt=""><figcaption></figcaption></figure>

3\. Select `OAuth2 / OpenID Provider`

<figure><img src="../../../.gitbook/assets/image (95).png" alt=""><figcaption></figcaption></figure>



## Configure the provider

4\. Press Next and enter the following configuration:

**Basic Configuration**

* Name: `ocean-market-provider`
* Authorization Flow: `default-provider-authorization-implicit-consent`

<figure><img src="../../../.gitbook/assets/image (96).png" alt=""><figcaption></figcaption></figure>

***

**Protocol settings**

* Client Type: `Confidential`
* Client ID: Use the generated value
* Client Secret: Use the generated value
* Redirect URIs
  * Add the Ocean Market callback URL: `https://market.example.com/auth/callback`
  * Use `Strict Matching`

<figure><img src="../../../.gitbook/assets/image (97).png" alt=""><figcaption></figcaption></figure>

* Signing Key: select the key associated with the qualified certificate configured in Authentik

<figure><img src="../../../.gitbook/assets/image (98).png" alt=""><figcaption></figcaption></figure>



***

**Advanced flow settings**

* Authentication flow: `default-authentication-flow`
* Invalidation flow: use the default setting

<figure><img src="../../../.gitbook/assets/image (101).png" alt=""><figcaption></figcaption></figure>

***

**Advanced protocol settings**

* Scopes: add the following to Selected Scopes
  * openid
  * profile
  * email
  * offline\_access

These scopes allow OE Marketplace to retrieve user identity information

***

5\. Click Finish to save the provider

***

## Create the Ocean Market Application

1\. Navigate to `Applications->Applications`

<figure><img src="../../../.gitbook/assets/image (105).png" alt=""><figcaption></figcaption></figure>



2\. Click Create and enter the following information:

* Application Name: `Ocean Market`
* Slug:`ocean-market`&#x20;
* Provider: `ocean-market-provider`

<figure><img src="../../../.gitbook/assets/image (106).png" alt=""><figcaption></figcaption></figure>

3\. Click Create

***

## Retrieve OIDC Credentials

1\. Click the created provider

2\. Copy the following values

* Client ID
* Client Secret (displayed only in Edit mode)
* OpenID Configuration Issuer (example: `https://ocean-node-vm2.oceanenterprise.io:8443/application/o/ocean-market/`)
* OpenID Token URL (example: `https://ocean-node-vm2.oceanenterprise.io:8443/application/o/token/`)

These values are required in the Ocean Market environment configuration.

***

## Verify the OIDC Configuration

1\. Open the provider discovery endpoint (`https://your-authentik-domain:8443/application/o/ocean-market/.well-known/openid-configuration`)

2\. If configured correctly, Authentik returns the OIDC metadata as JSON. This confirms that the provider is correctly configured.

# Configure authentication and user enrollment flows in Authentik

This guide explains how to configure authentication flows in Authentik for Ocean Market.

The flow configuration defines how users:

* Log in to Ocean Market
* Register new accounts
* Complete user enrollment
* Start authenticated sessions



By the end of this guide, users will be able to:

* Sign in using existing credentials
* Create accounts through self-service registration
* Be automatically redirected back to Ocean Market after authentication



## Preconditions

Before starting, ensure the following requirements are met:

* Authentik Provider and Application are already configured
* Ocean Market OIDC integration is working.
* The provider uses: `default-authentication-flow`



## Steps

### 1. Configure the Login Flow

The OE Market uses Authentik’s authentication flow to handle user login.

1\. Navigate to `Flows and Stages -> Flows`&#x20;

<figure><img src="../../../.gitbook/assets/image (107).png" alt=""><figcaption></figcaption></figure>



2\. Open `default-authentication-flow` . This flow is used by the OIDC provider created in the previous guide.

<figure><img src="../../../.gitbook/assets/image (109).png" alt=""><figcaption></figcaption></figure>



3\. Select Stage Bindings and Edit `default-authentication-identification` (Type Identification Stage).



4\. Configure the following:

* Stage-specific settings
  * User fields: check `Username` and `Email`. This allows users to log in using either their username or email address.
  * Password Stage: `default-authentication-password`

<figure><img src="../../../.gitbook/assets/image (110).png" alt=""><figcaption></figcaption></figure>

This allows users to log in using either their username or email address.

5\. Save the changes.

\
6\. In the Stage Binding view, make sure the flow includes the `default-authentication-mfa-validation`  and `default-authentication-login` stages, as shown in the image below.



<figure><img src="../../../.gitbook/assets/image (111).png" alt=""><figcaption></figcaption></figure>



### 2. Configure the Registration Flow

To allow users to create accounts without administrator intervention, create a self-service registration flow. &#x20;

#### Create the registration flow

1\. Navigate to `Flows & Stages → Flows → Create`

2\. In the Create Flow form, configure the following attributes:

* Name: `self-service-registration`
* Title: `Sign-up`
* Slug: `self-service-registration`&#x20;
* Designation: `Enrollment`

<figure><img src="../../../.gitbook/assets/image (112).png" alt=""><figcaption></figcaption></figure>

3\. Click `Create`.



#### Add registration stages to the registration flow

1\. Open the newly created flow

2\. Navigate to `Stage Bindings`

3\. Add the following stages in this order by pressing `Bind Existing Stage`:

* Stage name: `default-source-enrollment-prompt`. This stage identifies the new user.
  * Type: `Prompt Stage`
  * Order: `10`
  * Within this stage, configure the following fields:
    * **Stage-specific settings**
      * _Fields_: select the following attributes:
        * Username (`default-user-settings-field-username`);
        * Email (`default-user-settings-field-email`);
        * Name (`default-user-settings-field-name`);
        * Password (`default-user-settings-field-password`);
        * Re-enter password (`default-user-settings-field-password-repeat`);

<figure><img src="../../../.gitbook/assets/image (115).png" alt=""><figcaption></figcaption></figure>



* Stage name: `default-source-enrollment-write`. This stage creates the user account in Authentik.
  * Type: `User Write Stage`
  * Order: `20`
  * Within this stage, configure the following fields:
    * **Stage-specific settings**
      * Select `Create users when required`&#x20;
      * Select `Create users as inactive`
      * User Type: `Internal`&#x20;
      * Do not configure policies or group assignments at this stage

<figure><img src="../../../.gitbook/assets/image (116).png" alt=""><figcaption></figcaption></figure>



* Stage name: `email-account-confirmation`. This stage creates the user account in Authentik.
  * Type: `Email Stage`
  * Order: `30`
  * Within this stage, configure the following fields:
    * **Stage-specific settings**
      * Select `Activate pending users on success`&#x20;
      * Template: `Account Confirmation`
    * **Connection settings**
      * In case you didn't set the SMTP configuration at the Authentik server level, you can set the parameters in this group&#x20;

<figure><img src="../../../.gitbook/assets/image (119).png" alt=""><figcaption></figcaption></figure>

\
4\. Add the following stage by pressing `Create and bind Stage`

* Stage name: `after-signup-redirect`. This stage redirects the user to the application login page.
  * Type: `Redirect Stage`
  * Order: `40`
  * Within this stage, configure the following fields:
    * **Stage-specific settings**
      * Mode: `Static`
      * Target URL: the login URL of the marketplace (i.e. `https://market.demo.oceanenterprise.io/auth/login`)

<figure><img src="../../../.gitbook/assets/image (120).png" alt=""><figcaption></figcaption></figure>



In the end, the stages of the registration flow should look similar to the image below.

<figure><img src="../../../.gitbook/assets/image (118).png" alt=""><figcaption></figcaption></figure>



### 3. Enable Sign-Up on Login Screen

1\. Open `default-authentication-flow`

2\. Navigate to `Stage Bindings` and edit `default-authentication-identification` (Identification Stage)

3\. Configure the following fields:&#x20;

* **Flow Settings**&#x20;
  * Enrollment Flow: `self-service-registration`

<figure><img src="../../../.gitbook/assets/image (121).png" alt=""><figcaption></figcaption></figure>

4\. Press Update to save the changes.&#x20;



### 4. Test the configuration

To test the configuration, perform the following:

**User login test:**

* Open Ocean Market login page
* Click Login with Authentik
* Authenticate&#x20;
* Verify the user is redirected back to Ocean Market



**User Registration test:**

* Open Ocean Market signup page
* Click Sign up with Authentik&#x20;
* Create a new account&#x20;
* Verify the user is created in Authentik&#x20;
* Verify successful login and redirect back to Ocean Market



**Expected Result**

* After completing this configuration:
* Existing users can log in
* New users can self-register
* Users are automatically authenticated
* Ocean Market receives the OIDC token and creates the session

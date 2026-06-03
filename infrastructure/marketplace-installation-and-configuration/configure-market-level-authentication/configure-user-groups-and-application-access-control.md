---
description: >-
  This guide explains how to configure user groups and access control in
  Authentik for Ocean Market.
---

# Configure User Groups and Application Access Control

In Authentik, user groups allow administrators to:

* Organize users by role
* Control application access
* Assign administrative privileges
* Manage marketplace permissions

By the end of this guide, administrators will be able to:

* Create user groups
* Assign users to groups
* Restrict access to Ocean Market
* Separate administrative users from standard users

## Access Control Model

Ocean Market uses role-based access control through Authentik groups.

The recommended initial structure is:

| **Group**          | **Purpose**                |
| ------------------ | -------------------------- |
| marketplace-users  | Standard marketplace users |
| marketplace-admins | Marketplace administrators |

Standard users can access the marketplace and perform normal operations.

Administrative users can access the marketplace and manage platform operations.

## Preconditions

Before starting, ensure the following requirements are met:

* Authentik Provider and Application are configured.
* Authentication and registration flows are working.
* Users can successfully log in to Ocean Market.

## Steps

### 1. Create a standard user group

1\. Navigate to `Directory → Groups` and click New Group.

2\. Configure the following attributes:

* Name: `marketplace-users`
* Parent: Leave empty
* Attributes: Leave the default values unless custom metadata is required

3\. Click `Create Group`

### 2. Create an administrator group

1\. Navigate to `Directory → Groups` and click New Group.

2\. Configure the following attributes:

* Name: `marketplace-admins`
* Parent: Leave empty
* Attributes: Leave the default values unless custom metadata is required

3\. Click `Create Group`<br>

### 3. Assign existing users to groups

1\. Navigate to `Directory → Users`

2\. Click a user name to open the user details page

3\. Select the `Groups` tab

4\. Click `Add to existing group`

5\. Click the plus sign to open the list of groups

6\. From the list, select `marketplace-users` for a standard user or `marketplace-admins` for an administrator

7\. Click `Add` to assign the user to the group. The list of groups will close.

8\. Click `Add` in the Add Group window to save the changes.

### 4. Automatic group assignment during user signup

To automatically assign new users to a marketplace group during registration, do the following:

1\. Navigate to `Flows & Stages → Flows` and select the sign-up flow created earlier (`self-service-registration`)

2\. Select the `Stage Bindings` tab

3\. Edit `User Write Stage`

4\. Configure the following field:

Group: `marketplace-users`

5\. Click `Update` to save the stage.

<img src="../../../.gitbook/assets/unknown (5).png" alt="" height="339" width="624">

This ensures that every new user created through self-service registration automatically receives marketplace access.<br>

### 5. Restrict Application Access

To allow only users in the `marketplace-users` group to access the Ocean Market application, do the following:

1\. Navigate to `Applications → Applications`

2\. Open `Ocean Market`

3\. Select the `Policies / Group / User Bindings` tab

4\. Click `Bind existing Policy / Group / User`

5\. In the `Create Binding` window, select the `Group` tab

6\. In the `Group` field, select the `marketplace-users` group that should have access to the application. Leave the other fields with their default values.

7\. Click `Create` to save the changes.

<br>


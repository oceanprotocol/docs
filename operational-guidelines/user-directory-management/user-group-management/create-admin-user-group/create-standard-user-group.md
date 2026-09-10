# Create Standard User Group

### Overview

Creating the Authentik group whose members are permitted to use the Participant SSI Wallet UI.

The group is created in Authentik and then bound to the deployment through `NUXT_ADMIN_USER_GROUP_NAME` environment variable.

### Procedure

1. Authenticate in the Authentik Dashboard as `akadmin` Administrator account, registered at [initial setup](../../../../infrastructure/user-management-package/deployment-steps/post-installation-steps.md#set-the-authentik-server-administrator-account).
2. Access the Authentik interface and navigate to **Directory → Groups, then** select the **New Group** button.

<figure><img src="../../../../.gitbook/assets/Screenshot 2026-09-08 at 21.44.33.png" alt=""><figcaption></figcaption></figure>



3. Complete the group fields as described below.

| Field                  | Type    | Description                                                                                                              |
| ---------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| `Name`                 | string  | Name of the group. Emitted in the `groups` claim, and matched against `NUXT_ADMIN_USER_GROUP_NAME` for Wallet UI access. |
| `Superuser privileges` | boolean | Mark as **disabled**.                                                                                                    |

4. Select **Create Group**.&#x20;

<figure><img src="../../../../.gitbook/assets/Screenshot 2026-09-10 at 19.20.29.png" alt=""><figcaption></figcaption></figure>

### Verification

The group is displayed in the group list.

<figure><img src="../../../../.gitbook/assets/Screenshot 2026-09-10 at 19.24.52.png" alt=""><figcaption></figcaption></figure>

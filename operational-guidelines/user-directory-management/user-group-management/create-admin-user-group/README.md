# Create Admin User Group

### Overview

Creating the Authentik group whose members are permitted to use the SSI Wallet UI.

The group is created in Authentik and then bound to the deployment through `NUXT_ADMIN_USER_GROUP_NAME`.&#x20;

For a detailed flow illustration, please consult [Sequence Flow](./#sequence-flow).

{% hint style="warning" %}
For granting access to the Wallet UI on the Participant side, the user group configured in the Participant’s Authentik Identity Provider must not have superuser privileges. Refer to [Create Standard User Group](create-standard-user-group.md) to ensure that only standard‑privilege groups are used for Participant Wallet UI access.

On the Data Space Operator Identity Provider, the Wallet UI can grant access to users who belong to Authentik groups that hold superuser‑level privileges.
{% endhint %}

### Procedure

1. Authenticate in the Authentik Dashboard as `akadmin` , Administrator account, which was created at [initial setup](../../../../infrastructure/user-management-package/deployment-steps/post-installation-steps.md#set-the-authentik-server-administrator-account).
2. Access the Authentik interface and navigate to **Directory → Groups, then** select the **New Group** button.

<figure><img src="../../../../.gitbook/assets/Screenshot 2026-09-08 at 21.44.33.png" alt=""><figcaption></figcaption></figure>



3. Complete the group fields as described below.

| Field                  | Type    | Description                                                                                                                             |
| ---------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `Name`                 | string  | Name of the group. Emitted in the `groups` claim, and matched against `NUXT_ADMIN_USER_GROUP_NAME` for Wallet UI access.                |
| `Superuser privileges` | boolean | Grants Authentik administrative permissions to all members. Leave disabled unless the group is intended to administer Authentik itself. |

4. Select **Create Group**.&#x20;

<figure><img src="../../../../.gitbook/assets/Screenshot 2026-09-08 at 21.45.58.png" alt=""><figcaption></figcaption></figure>

### Verification

1. The group is displayed in the group list.

<figure><img src="../../../../.gitbook/assets/Screenshot 2026-09-08 at 21.46.56.png" alt=""><figcaption></figcaption></figure>

### Appendix

#### Sequence Flow

```mermaid
sequenceDiagram
    autonumber
    actor OA as Administrator
    participant UI as Authentik<br>Service
    participant PG as Authentik<br>Database


    OA->>UI: Creates User Group
    OA->>UI: Enter the group name and keep superuser privileges disabled
    UI->>PG: Store the group
    PG-->>UI: Group stored
    UI->>PG: Record the creation event
    UI-->>OA: Group listed under Directory → Groups
```

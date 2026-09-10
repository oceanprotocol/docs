# User Group Management

### Table of Contents

* [Create Admin User Group](create-admin-user-group/)
* [Assign User to Group](assign-user-to-group.md)
* [Remove User from Group](remove-user-from-group.md)
* [Delete User Group](delete-user-group.md)

### Overview

Authentik groups are used for **application level authorization**, not for OE claim delivery. The OE scope mappings read the OE values from the user attributes only.

Group membership is exposed to applications through the `groups` claim of the standard `profile` scope mapping, which is requested by both the Operator and the Participant provider.

The deployment consumes group membership in one place explicitly:

| Variable                     | File          | Purpose                                                                          |
| ---------------------------- | ------------- | -------------------------------------------------------------------------------- |
| `NUXT_ADMIN_USER_GROUP_NAME` | `.env.config` | Name of the Authentik group whose members are permitted to use the SSI Wallet UI |

The value is propagated by the environment configuration script into `docker-compose/wallet-ui/.env.wallet-ui`. The Wallet UI is intended to be used by the administrative group only.

{% hint style="info" %}
For detailed environment configuration, please consult [Environment Variables for User Management Package Services](../../../infrastructure/user-management-package/environment-variables/environment-variables-for-user-management-package-services.md#configurable-variables-1).
{% endhint %}

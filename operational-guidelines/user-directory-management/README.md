# User Directory Management

User Directory Management covers invitation-based enrollment, claim assignment, group administration, claim updates, and account deactivation.

Administrators perform these operations from the Authentik Admin Interface.

Before performing user-management operations, verify that:

* Authentik is running and accessible over HTTPS.
* You have Authentik administrator access.
* The appropriate OE blueprint has been applied successfully.
* The enrollment flow exists.
* The OE property/scope mappings are attached to the relevant OIDC provider.
* SMTP is configured if invitations are sent by Authentik email.
* The organization-specific values to be assigned to the user are known and have been validated.

***

User Directory Management covers the operational lifecycle of users stored directly in Authentik. The procedures apply to users in either the Data Space Operator or Data Space Participant Authentik instance.

The user management repository configures an enrollment flow named:

```
oe-enrollment-invitation
```

The flow requires an invitation and creates internal users through the following User Write stage:

```
oe-enrollment-invitation-write
```

The configured enrollment flow also checks for existing e-mail addresses and usernames. The repository defines the following deny messages:

```
Email already exists! Contact admin.
Username already exists! Try another one.
```

The enrollment flow creates the user as active. It does not create the user in a predefined group.

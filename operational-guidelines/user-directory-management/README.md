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

### 3.1.1 Users Enrollment in Authentik

OE uses an invitation-based enrollment flow for controlled account creation.

The supplied enrollment design performs the following logical sequence:

1. Validate the invitation token.
2. Reject enrollment if the email already belongs to an existing user.
3. Collect the user's account information.
4. Reject enrollment if the requested username already exists.
5. Create the Authentik user.
6. Store OE-specific user attributes.
7. Redirect the user to the OE application.

The invitation supplies organization-specific values. The user normally supplies only their account credentials.

#### Enrollment data separation

**Administrator-controlled values**

* Email
* `orgId`
* `walletId`
* `signerServer`
* `wellKnownUrl`
* `upstream_idp` when explicitly enrolling a user in the central Operator Authentik context

**User-entered values**

* Username
* Full name
* Password
* Password confirmation

This separation prevents the enrolling user from arbitrarily choosing security-sensitive OE routing or wallet metadata.

***

### 3.1.1.1 Create Invitation

#### Prerequisites

Before creating an invitation, verify that the Authentik deployment contains the required enrollment resources.

For a Participant/IDP deployment, the blueprint should provide an invitation enrollment flow and a policy that saves OE attributes to the new user.

For the Operator deployment, the central Authentik blueprint must additionally support federated identity metadata and the central federated JIT enrollment flow.

#### Procedure

1. Sign in to the target Authentik Admin Interface with an administrator account.
2.  Navigate to:

    **Directory → Invitations**
3. Click **Create**.
4.  Configure the invitation.

    | Field                              | Recommended value                                                                   |
    | ---------------------------------- | ----------------------------------------------------------------------------------- |
    | **Name**                           | Descriptive operational name, for example `OE Participant User - alice@example.com` |
    | **Flow**                           | OE invitation enrollment flow configured by the blueprint                           |
    | **Expires**                        | Set according to the organization's onboarding policy                               |
    | **Single Use**                     | Enabled/recommended for individual onboarding                                       |
    | **Enabled**                        | Enabled                                                                             |
    | **Attributes / Custom Attributes** | Populate the OE user metadata described below                                       |
5. Add the user-specific custom attributes.

#### Participant Authentik invitation example

```json
{
  "email": "alice@example.com",
  "orgId": "participant-a",
  "walletId": "1",
  "signerServer": "https://signer.participant-a.example.com",
  "wellKnownUrl": "https://participant-a.example.com/.well-known/..."
}
```

#### Operator Authentik local-user invitation example

```json
{
  "email": "operator.user@example.com",
  "orgId": "dataspace-operator",
  "walletId": "1",
  "signerServer": "https://signer.operator.example.com",
  "wellKnownUrl": "https://operator.example.com/.well-known/...",
  "upstream_idp": "main-authentik"
}
```

`upstream_idp` is primarily meaningful for federation. For a purely local Operator account, use it only if the deployment's local-user policy intentionally expects it; otherwise leave it unset.

6. Create/save the invitation.
7. Open the invitation and obtain the generated invitation URL.
8.  Deliver the invitation through an approved channel.

    If SMTP is configured, Authentik can send the invitation by email. Otherwise, securely copy and distribute the unique invitation URL.

#### Enrollment behavior

When the user opens the invitation URL:

1. Authentik validates the invitation token.
2. Invitation attributes are loaded into the enrollment flow.
3. The user enters their username, full name, and password.
4. Authentik creates the account.
5. The OE enrollment policy copies the invitation values into the Authentik user attributes.
6. The user is redirected to the configured application.

#### Post-enrollment verification

Navigate to:

**Directory → Users → `<user>` → Attributes**

Verify the expected values.

Example:

```json
{
  "orgId": "participant-a",
  "walletId": "1",
  "signerServer": "https://signer.participant-a.example.com",
  "wellKnownUrl": "https://participant-a.example.com/.well-known/..."
}
```

Then authenticate as the user and verify that the OIDC token contains the corresponding claims.

#### Common invitation errors

| Symptom                                     | Checks                                                                                                                                        |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Invitation link is invalid                  | Verify expiration, enabled status, and whether a single-use invitation has already been redeemed.                                             |
| Email already exists                        | Check whether the email is already assigned to another Authentik user. The documented OE enrollment flow can deny duplicate-email enrollment. |
| Username already exists                     | Select another username. The documented flow can deny duplicate usernames.                                                                    |
| User created but OE attributes are missing  | Verify the attribute-saving policy/User Write stage and the invitation custom attributes.                                                     |
| Attributes exist but JWT claims are missing | Verify provider scope mappings and confirm that the client requests the required OE scopes.                                                   |

***

### 3.1.1.2 User Claims Assignment for Data Space Operator

The Data Space Operator Authentik instance is the central identity broker.

The current Operator blueprint exposes these OE scopes:

```
oe-organizationId
oe-signerServer
oe-wellKnownUrl
oe-walletId
oe-central-federated_identity
```

The corresponding token claims are:

```
orgId
signerServer
wellKnownUrl
walletId
upstream_idp
```

#### Local Operator user

For a locally enrolled Operator user, assign the OE values through the invitation or by editing the user's Authentik attributes after enrollment.

Recommended attribute set:

```json
{
  "orgId": "<operator-organization-id>",
  "walletId": "<wallet-id>",
  "signerServer": "<operator-signer-server-url>",
  "wellKnownUrl": "<operator-well-known-url>"
}
```

The repository's Operator enrollment policy can also store `upstream_idp` if it is present in the enrollment context. This field should not be fabricated for a local account unless the surrounding application explicitly uses it.

#### Federated Participant user on the Operator

A Participant user should normally **not** be manually re-created as an independent local Operator user.

Instead:

1. Configure the Participant Authentik as an OAuth/OIDC federation source.
2. Attach the Operator federated JIT enrollment flow.
3. Attach the Operator OAuth source property mapping.
4. Allow the user to authenticate through the Participant source.
5. Let Authentik create the local shadow user automatically.

The current repository Operator source mapping normalizes these values from the upstream token:

```json
{
  "attributes": {
    "upstream_idp": "<source-name>",
    "orgId": "<upstream orgId>",
    "walletId": "<upstream walletId>",
    "signerServer": "<upstream signerServer>",
    "wellKnownUrl": "<upstream wellKnownUrl>",
    "external_subject": "<upstream sub>",
    "idp_issuer": "<upstream iss>"
  }
}
```

#### Verification

After a local or federated user authenticates:

1. Navigate to **Directory → Users**.
2. Open the user.
3. Review **Attributes**.
4. Confirm the expected OE metadata.
5. Inspect the application access/ID token and verify the required claims.

For a federated user, also confirm:

* `upstream_idp` is populated;
* `external_subject` corresponds to the Participant user's upstream OIDC `sub`;
* `idp_issuer` identifies the Participant issuer;
* the user was created through JIT rather than duplicated manually.

***

### 3.1.1.3 User Claims Assignment for Data Space Participant

The Participant Authentik instance is the authoritative user directory for Participant-local users.

The current Participant blueprint exposes:

```
oe-organizationId
oe-signerServer
oe-wellKnownUrl
oe-walletId
```

These mappings produce:

```
orgId
signerServer
wellKnownUrl
walletId
```

#### Required participant user attributes

A Participant user should have an attribute set similar to:

```json
{
  "orgId": "<participant-organization-id>",
  "walletId": "<participant-wallet-id>",
  "signerServer": "<participant-signer-server-url>",
  "wellKnownUrl": "<participant-well-known-url>"
}
```

#### Assignment during invitation enrollment

The current repository Participant save-user-attributes policy reads these values from enrollment `prompt_data` and persists them into the user profile:

* `orgId`
* `walletId`
* `signerServer`
* `wellKnownUrl`

Administrators should therefore provide these values as invitation-controlled metadata rather than asking end users to type them manually.

#### Verification

After enrollment:

1. Navigate to **Directory → Users**.
2. Open the user.
3. Open **Attributes**.
4. Confirm all four OE attributes.
5. Authenticate through the Participant OIDC provider.
6. Inspect the issued token.
7. Confirm that the Participant provider emits the expected OE claims.

These claims are also the values consumed by the Data Space Operator's federation source when the Participant is onboarded to the Operator.

***

### 3.1.2 Create User Group

Authentik groups can be used to organize users and to apply role-based application access.

The supplied federation documentation recommends an initial marketplace-oriented group structure:

| Group                  | Purpose                                  |
| ---------------------- | ---------------------------------------- |
| `marketplace-users`    | Standard marketplace users               |
| `marketplace-admins`   | Marketplace administrators               |
| `partner-<name>-users` | Optional participant-specific separation |

#### Create a group

1. Sign in to the Authentik Admin Interface.
2.  Navigate to:

    **Directory → Groups**
3. Click **Create**.
4. Enter the group name.
5. Leave **Parent** empty unless the deployment intentionally uses nested groups.
6. Leave group attributes at their defaults unless group metadata is explicitly required.
7. Save the group.

Example:

```
Name: marketplace-users
Parent: <empty>
```

#### Assign an existing user to a group

1.  Navigate to:

    **Directory → Users**
2. Select the user.
3. Open the user's **Groups** configuration.
4. Add the required group.
5. Save.

Typical assignment:

| User type                 | Group                |
| ------------------------- | -------------------- |
| Standard application user | `marketplace-users`  |
| Application administrator | `marketplace-admins` |

#### Automatic assignment

The supplied Authentik guidance describes two patterns:

**Local/self-service enrollment**

Configure the User Write stage to assign newly created users to `marketplace-users`.

**Federated enrollment**

Use an OAuth Source Mapping to derive the target group from upstream identity/group information.

Example logic from the supplied federation design:

```python
external_groups = info.get("groups", [])
target_group = "marketplace-users"

if "partner-admin" in external_groups:
    target_group = "marketplace-admins"

return {
    "groups": [target_group]
}
```

The mapping is then attached to:

**Directory → Federation & Social Login → `<participant-source>` → User Property Mappings**

#### Access-control caution

Group creation by itself does not restrict an application.

If the application is intended to be group-restricted, bind an Authentik access policy to the application. The supplied federation guide uses logic equivalent to:

```python
return (
    user.is_member_of("marketplace-users")
    or user.is_member_of("marketplace-admins")
)
```

Test standard and administrative users separately after changing group mappings.

***

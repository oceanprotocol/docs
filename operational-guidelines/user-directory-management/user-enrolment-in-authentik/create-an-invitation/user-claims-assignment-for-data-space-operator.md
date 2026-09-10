# User Claims Assignment for Data Space Operator

The Data Space Operator OIDC provider exposes OE claims through scope mappings. For local Operator users, the authoritative values are stored under the user's Authentik `attributes` object.

The repository defines the following OE attributes:

| User attribute | OAuth scope mapping             | Purpose                                             |
| -------------- | ------------------------------- | --------------------------------------------------- |
| `orgId`        | `oe-organizationId`             | Organization identifier                             |
| `walletId`     | `oe-walletId`                   | Wallet identifier                                   |
| `signerServer` | `oe-signerServer`               | Signer Server URL                                   |
| `wellKnownUrl` | `oe-wellKnownUrl`               | OE well-known URL                                   |
| `upstream_idp` | `oe-central-federated_identity` | Upstream source identifier for federated identities |

For a **Data Space Operator user**, assign the first four values according to the Operator's deployed organization and service endpoints. `upstream_idp` is primarily populated for federated shadow users and should not be invented for a normal **Data Space Operator** account.

Example user attributes structure:

```yaml
orgId: <operator-organization-id>
walletId: <operator-wallet-id>
signerServer: <operator-signer-server-url>
wellKnownUrl: <operator-well-known-url>
```

If the invitation form supports fixed context, the equivalent invitation data can be represented as:

```json
{
  "orgId": "<operator-organization-id>",
  "walletId": "<operator-wallet-id>",
  "signerServer": "<operator-signer-server-url>",
  "wellKnownUrl": "<operator-well-known-url>"
}
```

The  `oe-save-user-attributes` policy used for `oe-enrollment-invitation` saves these values to the pending user when the corresponding values are available in the enrollment flow context.

### Verification

1. Open the newly created user in the Authentik administration interface.
2. To see property mappings responsible for generating JWT claims, accesses Customization from Authentik User Interface connected as Authentik Admin:

<figure><img src="../../../../.gitbook/assets/Screenshot 2026-09-07 at 22.39.45 (1).png" alt=""><figcaption></figcaption></figure>

3.  Verify that all required Operator values are present and are not blank. Users stored within Data Space Operator Authentik - User Directory will have assigned these attributes from

    **Directory → Users → `<user>` → Custom Attributes** or **Directory → Users → `<user>` → Edit User → Advanced settings → Attributes**:

<figure><img src="../../../../.gitbook/assets/Screenshot 2026-09-07 at 22.41.09.png" alt=""><figcaption></figcaption></figure>

4. Authenticate to an OE application that requests the corresponding scopes.
5. Inspect the resulting token and verify that the expected claims are emitted.

# User Claims Assignment for Data Space Participant

The Data Space Participant Authentik blueprint exposes the same four OE business claims:

* `orgId`;
* `walletId`;
* `signerServer`;
* `wellKnownUrl`.

For a Participant user, these values must identify the Participant organization and Participant services, not the Data Space Operator services.

Example user attributes structure:

```yaml
orgId: <participant-organization-id>
walletId: <participant-wallet-id>
signerServer: <participant-signer-server-url>
wellKnownUrl: <participant-well-known-url>
```

Equivalent invitation context, when supported by the deployed Authentik invitation form:

```json
{
  "orgId": "<participant-organization-id>",
  "walletId": "<participant-wallet-id>",
  "signerServer": "<participant-signer-server-url>",
  "wellKnownUrl": "<participant-well-known-url>"
}
```

The Participant provider maps these user attributes into the corresponding OIDC claims. When the Participant is federated with the Data Space Operator, the Operator source-property mapping copies these upstream values into the Operator shadow user's attributes.

### Verification

1. The Participant user contains all attributes from **Directory → Users → `<user>` → Custom Attributes** or **Directory → Users → `<user>` → Edit User → Advanced settings → Attributes**:

<figure><img src="../../../../.gitbook/assets/Screenshot 2026-09-08 at 02.50.04.png" alt=""><figcaption></figcaption></figure>

2. The Participant OIDC provider includes the OE scope mappings.

<figure><img src="../../../../.gitbook/assets/Screenshot 2026-09-08 at 02.47.33.png" alt=""><figcaption></figcaption></figure>

3. A Participant-issued token contains the correct values when the relevant scopes are requested.
4. After federated login to the Data Space Operator, the Data Space Operator shadow user receives the same values.

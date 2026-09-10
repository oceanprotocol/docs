# Modify User Claim Values

### Overview

The OE claims `orgId`, `walletId`, `signerServer`, `wellKnownUrl` and, on the Data Space Operator, `upstream_idp` are stored as attributes of the user and emitted through the OE scope mappings.

For detail-oriented flow illustration, please consult [Sequence Flow](modify-user-claim-values.md#sequence-flow).

### Procedure

1. Authenticate in Authentik Dashboard as `akadmin` , Administrator account which was created at [initial setup](../../infrastructure/user-management-package/deployment-steps/post-installation-steps.md#set-the-authentik-server-administrator-account).
2. Navigate to **Directory → Users** and search for the user.
3. Select the user and select **Edit**.

<figure><img src="../../.gitbook/assets/Screenshot 2026-09-09 at 02.12.50.png" alt=""><figcaption></figcaption></figure>

4. Update the **Attributes** field, keeping all attributes that must be retained:

{% code overflow="wrap" %}
```yaml
orgId: ocean_enterprise
walletId: "3"
signerServer: https://<host>:8443
wellKnownUrl: https://<idp-host>:9443/application/o/<app-slug>/.well-known/openid-configuration
upstream_idp: <app-slug>
```
{% endcode %}

5. Select **Save Changes**.

<figure><img src="../../.gitbook/assets/Screenshot 2026-09-09 at 02.14.06.png" alt=""><figcaption></figcaption></figure>

### Verification

1. The **Attributes** section of the user shows the intended values.
2. After the user authenticates again, the decoded JWT contains `orgId`, `walletId`, `signerServer`, `wellKnownUrl`, `upstream_idp`, `name` and `email`.

### Notes

* Federated shadow users must not be corrected on the Data Space Operator. Their attributes are rewritten from the upstream token at every federated login. Correct the Participant user or the Participant scope mappings instead.
* A missing `upstream_idp` attribute produces the fallback value `unknown3` in the token. Treat any `unknown*` value as a configuration error.

### Appendix

#### Sequence Flow

```mermaid
sequenceDiagram
    actor OA as Administrator
    participant UI as Authentik<br>Service
    participant PG as Authentik<br>Database
    actor U as Directory User

    OA->>UI: Open Directory → Users and select the user
    OA->>UI: Edit the attributes with the new OE claim values
    UI->>PG: Save the updated attributes on the user
    PG-->>UI: User updated
    UI-->>OA: New values displayed

    U->>UI: Authenticate again to the OE application
    UI->>PG: Read the attributes of the user
    PG-->>UI: Updated OE claim values
    UI-->>U: Token carrying the updated OE claims
```

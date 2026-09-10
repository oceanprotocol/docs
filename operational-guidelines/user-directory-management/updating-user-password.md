# Updating User Password

### Overview

Passwords can be set by an Administrator or changed by the user through the `oe-recovery` flow.

For detail-oriented flow illustration, please consult [Sequence Flow](updating-user-password.md#sequence-flow).

### Procedure

**Administrator initiated**

1. Navigate to **Directory → Users** and select the user.
2. Select **Set password** to set it directly, or **Create Recovery Link** to let the user choose their own password.

<figure><img src="../../.gitbook/assets/Screenshot 2026-09-09 at 02.53.44.png" alt=""><figcaption></figcaption></figure>

1. Deliver the password or the link.

**User initiated**

1. The user selects **Forgot username or password?** on the login form.

<figure><img src="../../.gitbook/assets/image (122).png" alt="" width="375"><figcaption></figcaption></figure>

1. The user opens the link from the recovery email and sets a new password.

### Verification

* The user can authenticate with the new password.

### Notes

* The password policy requires at least 8 characters. It applies to the recovery and password change flow, not to the enrollment prompt.
* The recovery token is valid for 30 minutes, with a maximum of 5 recovery attempts.
* Recovery email delivery requires the `AUTHENTIK_EMAIL__*` variables to be configured.
* Prefer **Create Recovery Link** over **Set password**, so that the administrator never handles the user's password.

### Appendix

#### Sequence Flow

```mermaid
sequenceDiagram
    actor OA as Administrator
    participant UI as Authentik<br>Service
    participant PG as Authentik<br>Database
    participant SMTP as SMTP Server
    actor U as Directory User

    alt Administrator sets the password or issues a recovery link
        OA->>UI: Open the user and select Set password or Create Recovery Link
        UI->>PG: Save the new password or store a single-use recovery token
        UI-->>OA: Confirmation or recovery link
        OA-->>U: Deliver the password or the link out-of-band
    else User starts the recovery himself
        U->>UI: Select Forgot username or password and provide the identifier
        UI->>PG: Store a single-use recovery token
        UI->>SMTP: Send the recovery email
        SMTP-->>U: Recovery email with the single-use link
        U->>UI: Open the recovery link
    end

    U->>UI: Provide the new password twice
    UI->>UI: Validate the password against the password policy
    UI->>PG: Save the new password and remove the used token
    PG-->>UI: Password updated
    UI-->>U: Password changed, return to the login form
```

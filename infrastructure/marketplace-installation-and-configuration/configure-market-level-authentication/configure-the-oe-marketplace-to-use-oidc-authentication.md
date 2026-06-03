# Configure the OE marketplace to use OIDC authentication

## Configure OE Market Environment Variables

1\. Add the following environment variables to OE Marketplace (in the `.env` file):

{% code overflow="wrap" %}
```shellscript
EXT_PUBLIC_AUTH_ENABLED=true
NEXT_PUBLIC_AUTH_PROVIDER=oidc
NEXT_PUBLIC_OIDC_ISSUER=<your_oidc_issuer_url>
NEXT_PUBLIC_OIDC_CLIENT_ID=<your_oidc_client_id>
OIDC_CLIENT_SECRET=<your_oidc_client_secret>
NEXT_PUBLIC_OIDC_REDIRECT_URI=<your_oidc_redirect_uri>
NEXT_PUBLIC_OIDC_TOKEN_URL=<your_oidc_token_url>
NEXT_PUBLIC_OIDC_SIGNUP_FLOW=<your_oidc_signup_flow> # Optional: only needed if your OIDC provider has a separate signup flow
```
{% endcode %}

2\. Restart the OE Marketplace with the new environment variables



## Expected results

After completing this configuration:

1. Users can log in from Ocean Market.
2. Authentik authenticates the user.
3. The user is redirected back to OE Market.
4. OE Market receives the OIDC tokens and creates the session.

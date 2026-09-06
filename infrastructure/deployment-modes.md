# Deployment modes

The OE stack supports two deployment modes, determined by whether the dataspace uses SSI‑based access control.

## Dataspace with SSI-based access control disabled



###



## Dataspace with SSI-based access control enabled

### Configuration example

In a dataspace with SSI‑based access control enabled, all OE components are required. The table below provides the assumed URLs for each element.

| Component           | URL                                 |
| ------------------- | ----------------------------------- |
| OE Node             | https://node.oceanenterprise.io     |
| Marketplace         | https://market.oceaneneteprise.io   |
| Policy Server       | https://ps.oceanenterprise.io       |
| Policy Server Proxy | https://proxy.oceanenterprise.io    |
| SSI Wallet          | https://wallet.oceanenterprise.io   |
| Verifier            | https://verifier.oceanenterprise.io |
| OPA Server          | http://opa.oceanenterprise.io:8181  |



To ensure correct operation, configure the relevant environment variable in each component, using the examples shown in the table below.

| Component               | Environment variable                                                                                                                                         | Value                                       |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| **Policy Server**       | [MODE\_PS](policy-server-and-policy-server-proxy-installation-and-configuration.md#mode_ps)                                                                  | 1                                           |
|                         | [MODE\_PROXY](policy-server-and-policy-server-proxy-installation-and-configuration.md#mode_proxy)                                                            | 0                                           |
|                         | [OCEAN\_NODE\_URL](policy-server-and-policy-server-proxy-installation-and-configuration.md#ocean_node_url)                                                   | https://node.oceanenterprise.io             |
|                         | [WALTID\_VERIFIER\_URL](policy-server-and-policy-server-proxy-installation-and-configuration.md#waltid_verifier_url)                                         | https://wallet.oceanenterprise.io           |
|                         | [WALTID\_VERIFY\_RESPONSE\_REDIRECT\_URL](policy-server-and-policy-server-proxy-installation-and-configuration.md#waltid_verify_response_redirect_url)       | https://proxy.oceanenterprise.io/verify/$id |
|                         | [WALTID\_VERIFY\_PRESENTATION\_DEFINITION\_URL](policy-server-and-policy-server-proxy-installation-and-configuration.md#waltid_verify_response_redirect_url) | https://proxy.oceanenterprise.io/pd/$id     |
| **Policy Server Proxy** | [MODE\_PS](policy-server-and-policy-server-proxy-installation-and-configuration.md#mode_ps)                                                                  | 0                                           |
|                         | [MODE\_PROXY](policy-server-and-policy-server-proxy-installation-and-configuration.md#mode_proxy)                                                            | 1                                           |
|                         | [OCEAN\_NODE\_URL](policy-server-and-policy-server-proxy-installation-and-configuration.md#ocean_node_url)                                                   | https://node.oceanenterprise.io             |
| **OE Node**             | [POLICY\_SERVER\_URL](oe-node-installation-and-configuration.md#policy_server_url)                                                                           | https://ps.oceanenterprise.io               |
|  **Marketplace**        | [NEXT\_PUBLIC\_PROVIDER\_URL](marketplace-installation-and-configuration/#next_public_provider_url)                                                          | https://node.oceanenterprise.io             |
|                         | [NEXT\_PUBLIC\_METADATACACHE\_URI](marketplace-installation-and-configuration/#next_public_metadatacache_uri)                                                | https://node.oceanenterprise.io             |
|                         | [NEXT\_PUBLIC\_SSI\_ENABLED](marketplace-installation-and-configuration/#next_public_ssi_enabled)                                                            | true                                        |
|                         | [NEXT\_PUBLIC\_SSI\_POLICY\_SERVER](marketplace-installation-and-configuration/#next_public_ssi_policy_server)                                               | https://ps.oceanenterprise.io               |
|                         | [NEXT\_PUBLIC\_OPA\_SERVER\_URL](marketplace-installation-and-configuration/#next_public_opa_server_url)                                                     | http://opa.oceanenterprise.io:8181          |
|                         | [NEXT\_PUBLIC\_SSI\_WALLET\_API](marketplace-installation-and-configuration/#next_public_ssi_wallet_api)                                                     | https://wallet.oceanenterprise.io           |



### Installation sequence

The recommended deployment order for this setup is:

1. [Install and configure the SSI Stack](ssi-stack-installation-and-configuration.md)
2. [Install the Policy Server](policy-server-and-policy-server-proxy-installation-and-configuration.md)
3. [Install and configure the OE Node](oe-node-installation-and-configuration.md)
4. [Install and configure the Policy Server Proxy](policy-server-and-policy-server-proxy-installation-and-configuration.md)
5. [Install and configure the marketplace](marketplace-installation-and-configuration/)


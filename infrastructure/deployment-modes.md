# Deployment modes

## Dataspace with SSI-based access control disabled



### Configuration example

In a dataspace where SSI‑based access control is disabled, only two OE components are required: the OE Node and the marketplace. The table beldockeow provides the assumed URLs for each component.

| Component   | URL                               |
| ----------- | --------------------------------- |
| OE Node     | https://node.oceanenterprise.io   |
| Marketplace | https://market.oceaneneteprise.io |



To ensure correct operation, configure the relevant environment variable in each component, using the examples shown in the table below.

| Component       | Environment variable             | Value                           |
| --------------- | -------------------------------- | ------------------------------- |
| **OE Node**     | POLICY\_SERVER\_URL              | null                            |
| **Marketplace** | NEXT\_PUBLIC\_PROVIDER\_URL      | https://node.oceanenterprise.io |
|                 | NEXT\_PUBLIC\_METADATACACHE\_URI | https://node.oceanenterprise.io |
|                 | NEXT\_PUBLIC\_SSI\_ENABLED       | false                           |

### Installation sequence

The recommended deployment order for this setup is:

1. [Install and configure the OE Node](oe-node-installation-and-configuration.md)
2. [Install and configure the marketplace](marketplace-installation-and-configuration.md)



## Dataspace with SSI-based access control enabled

### Configuration example

In a dataspace where SSI‑based access control is enabled, all the OE components are required. The table below provides the assumed URLs for each component.

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

| Component               | Environment variable                          | Value                                       |
| ----------------------- | --------------------------------------------- | ------------------------------------------- |
| **Policy Server**       | MODE\_PS                                      | 1                                           |
|                         | MODE\_PROXY                                   | 0                                           |
|                         | OCEAN\_NODE\_URL                              | https://node.oceanenterprise.io             |
|                         | WALTID\_VERIFIER\_URL                         | https://wallet.oceanenterprise.io           |
|                         | WALTID\_VERIFY\_RESPONSE\_REDIRECT\_URL       | https://proxy.oceanenterprise.io/verify/$id |
|                         | WALTID\_VERIFY\_PRESENTATION\_DEFINITION\_URL | https://proxy.oceanenterprise.io/pd/$id     |
| **Policy Server Proxy** | MODE\_PS                                      | 0                                           |
|                         | MODE\_PROXY                                   | 1                                           |
|                         | OCEAN\_NODE\_URL                              | https://node.oceanenterprise.io             |
| **OE Node**             | POLICY\_SERVER\_URL                           | https://ps.oceanenterprise.io               |
|  **Marketplace**        | NEXT\_PUBLIC\_PROVIDER\_URL                   | https://node.oceanenterprise.io             |
|                         | NEXT\_PUBLIC\_METADATACACHE\_URI              | https://node.oceanenterprise.io             |
|                         | NEXT\_PUBLIC\_SSI\_ENABLED                    | true                                        |
|                         | NEXT\_PUBLIC\_SSI\_POLICY\_SERVER             | https://ps.oceanenterprise.io               |
|                         | NEXT\_PUBLIC\_OPA\_SERVER\_URL                | http://opa.oceanenterprise.io:8181          |
|                         | NEXT\_PUBLIC\_SSI\_WALLET\_API                | https://wallet.oceanenterprise.io           |



### Installation sequence

The recommended deployment order for this setup is:

1. [Install and configure the SSI Stack](ssi-stack-installation-and-configuration.md)
2. [Install the Policy Server](policy-server-installation-and-configuration/)
3. [Install and configure the OE Node](oe-node-installation-and-configuration.md)
4. [Install and configure the Policy Server Proxy](policy-server-installation-and-configuration/)
5. [Install and configure the marketplace](marketplace-installation-and-configuration.md)


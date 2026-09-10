# Pre-installation steps

Before deploying the User Management Package, a number of foundational preparations must be completed to ensure a secure and reliable installation. These pre‑installation steps —configuring the Fully Qualified Domain Name (FQDN), setting up the required digital certificates, and generating the necessary private keys—form the technical baseline for the deployment. They must be performed **in both deployment modes**, for dataspace operators as well as dataspace participants, to guarantee that each environment is correctly prepared for the subsequent installation and configuration stages.

## Enabling TCP Ports

Ensure that all required deployment ports, including both the implicit ports defined in the [TCP Ports Configuration](../#tcp-ports-configuration) section and any custom-configured ports, are available on the host and do not conflict with ports used by other processes.

## Setting up FQDN

Before starting the services, this stack requires at minimum a Fully Qualified Domain Name (FQDN) to be configured for the following:

* `wallet-ui`
* `wallet-api`
* The VM used to run the entire stack

Add DNS records for the services listed above in your DNS server or DNS management platform.

Examples of widely used DNS management platforms are [Cloudflare](https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/), [Amazon Route 53](https://aws.amazon.com/route53/), [Google Cloud DNS](https://cloud.google.com/dns?hl=en), [Azure DNS](https://azure.microsoft.com/en-us/products/dns), etc.



## **SSL Certificates Generation & Configuration**

Use this guide to generate digital certificates for: the server that will run the User Management Package, Traefik service, Signer Server service, and OpenBao vault.

For production:

* use valid CA-issued certificates;
* include all required hostnames in SANs;
* use separate private keys where policy requires separation of duties;
* do not keep certificate private keys in Git;
* mount certificates from a protected deployment secret mechanism where possible;
* renew certificates before expiry and safely restart/reload affected services.

Traefik dynamic TLS configuration currently loads:

```yaml
tls:
  certificates:
    - certFile: /certs/fullchain.pem
      keyFile: /certs/privkey.pem
  options:
    default:
      minVersion: VersionTLS12
```

{% hint style="info" %}
Ensure Traefik certificate files are present within `certs/` directory from `traefik/` and file names are `fullchain.pem` and `privkey.pem` .
{% endhint %}

A common setup is installing a free SSL/TLS certificate from [Let's Encrypt](https://letsencrypt.org/) using [Certbot](https://certbot.eff.org/).

For using this mix, a good starting point is [https://certbot.eff.org/instructions](https://certbot.eff.org/instructions).

**Note**: This solution is using Traefik, so for specific instructions, the user must select "`My HTTP website is running`` `**`Other`**` ``on <your specific platform>"`

**Note**: For OpenBao, the certificate files must be added to `<directory>/docker-compose/openbao/certs`. If no certificate files (`tls.crt` and `tls.key`) are provided, OpenBao automatically generates a self-signed certificate using OpenSSL when the OpenBao service starts and the Docker image is created.

## Private Key Generation for OpenBao Vault

For web3 account generation and Vault management, please consult dedicated sections:

* [Generate Private Keys](../../signer-server-installation-and-configuration/key-generation-and-management-in-openbao-secrets-vault/generate-private-keys.md)
* [Key Storage & Management in OpenBao](../../signer-server-installation-and-configuration/key-generation-and-management-in-openbao-secrets-vault/key-storage-and-management-in-openbao.md)

# Pre-installation steps

### **SSL Certificates Generation & Configuration**

Use the certificate guidance in section 2.1.2.1 for Traefik, Signer Server and OpenBao.

For production:

* use valid CA-issued certificates;
* include all required hostnames in SANs;
* use separate private keys where policy requires separation of duties;
* do not keep certificate private keys in Git;
* mount certificates from a protected deployment secret mechanism where possible;
* renew certificates before expiry and restart/reload affected services safely.

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

#### Setting up FQDN



### Private Keys Generation for OpenBAO Vault

For web3 account generation and Vault management, please consult dedicated sections:

* [Generate Private Keys](../../signer-server-installation-and-configuration/key-generation-and-management-in-openbao-secrets-vault/generate-private-keys.md)
* [Key Storage & Management in OpenBao](../../signer-server-installation-and-configuration/key-generation-and-management-in-openbao-secrets-vault/key-storage-and-management-in-openbao.md)

### Enabling TCP Ports

Ensure that all required deployment ports, including both the implicit ports defined in the [TCP Ports Configuration](../#tcp-ports-configuration) section and any custom-configured ports, are available on the host and do not conflict with ports used by other processes.

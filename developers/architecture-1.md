# Dataspace Configuration Options

Depending on the required level of protection for the assets published in an OE-enabled dataspace, the OE stack can be configured either with or without **SSI-based access control**. Each configuration requires a distinct set of software components, which are detailed in this chapter.

**Note:** For details on SSI-based access control, refer to [Managing access to assets](fg-permissions.md).

## OE-enabled dataspace with SSI-based access control enabled (SSI on)

The configuration of an OE-enabled dataspace with SSI on is presented in the diagram below.&#x20;

<figure><img src="../.gitbook/assets/TA-SSI (1).png" alt=""><figcaption></figcaption></figure>

Participants interact with the dataspace through the **Marketplace**’s user interface, which enables them to manage their own assets and access assets shared by others. The **OE Node** serves as the core component of the system, supporting the secure publication, retrieval, and consumption of assets.

### **Logging in to the Marketplace**

To publish or consume assets, a user must first log in to the marketplace. Logging in requires establishing a connection to the marketplace server using both the **Web3 wallet** and the **SSI wallet**. The Web3 Wallet stores the participant’s Web3 private key, while the SSI wallet manages the participant’s DID and associated Verifiable Credentials.

In a production environment, each participant deploys their own SSI wallet instance within the dataspace to safeguard their private keys, DIDs, and Verifiable Credentials. Alternatively, the marketplace operator may offer a shared SSI wallet instance for participants who have not provisioned their own.

### Publishing an asset

When an asset is published, a corresponding NFT is created on the **Blockchain.** Then, the asset description (DDO) is encrypted by the OE Node, saved in **IPFS,** and the ID of the IPFS content is saved on-chain. The asset is then indexed by the OE Node and becomes available for consumption through the Marketplace.

### Controlling access to assets

In this configuration, the OE Node delegates asset access control to the **Policy Server**. When a participant attempts to consume the service of an asset, the OE Node forwards the request to the Policy Server, including the access control rules defined at both the asset and service levels and the participant's web3 address. Using this information, the Policy Server evaluates the request and determines whether the participant is authorized to access the service, should be denied, or - if SSI-based access policies apply - must complete additional verification.&#x20;

If additional verification is required, the Policy Server forwards the request to the Verifier component, which initiates an OIDC presentation session. During this session, the Verifier and the SSI Wallet exchange several messages to determine which Verifiable Credentials must be presented. These messages flow between the Verifier and the SSI Wallet through the Policy Server, the Ocean Node, and the **Policy Server Proxy**.

Once this exchange is complete, the participant sees in the Marketplace UI a list of Verifiable Credentials that satisfy the presentation requirements. The participant selects the credentials to submit, and the SSI Wallet packages them into a Verifiable Presentation, which is then sent to the Verifier.

The Verifier evaluates the submitted credentials against the rules defined for the asset. If custom rules are present, the Verifier consults the **OPA (Open Policy Agent) Server**. Optionally, it may rely on an external **Credential Verification Service** to determine whether the credentials meet the verification criteria.

Finally, the Verifier returns an allow/deny decision to the Policy Server, which relays the result back to the participant. Access to the service is granted or denied based on this outcome.

&#x20;

## OE-enabled dataspace with SSI-based access control disabled (SSI off)

The configuration of an OE-enabled dataspace with SSI off is presented in the diagram below.&#x20;

<figure><img src="../.gitbook/assets/TA-no SSI.png" alt=""><figcaption></figcaption></figure>

With SSI‑based access control disabled, asset access decisions rely solely on web3 addresses. In this setup, the OE Node handles access verification internally. As a result, the dataspace architecture remains straightforward, requiring only the **Marketplace** and **OE Node** components.

### **Logging in to the Marketplace**

To publish or consume assets, a user must first log in to the marketplace. Logging in requires establishing a connection to the marketplace server using the **Web3 wallet**.

### Publishing an asset

When an asset is published, a corresponding NFT is created on the **Blockchain.** Then, the asset description (DDO) is encrypted by the OE Node, saved in **IPFS,** and the ID of the IPFS content is saved on-chain. The asset is then indexed by the OE Node and becomes available for consumption through the Marketplace.

### Controlling access to assets

When a participant attempts to consume the service of an asset, the OE Node verifies the participant's web3 address against the allow and deny rules defined for web3 addresses, at both the asset and the service levels. The deny list takes precedence. Access to the service is granted or denied based on this outcome.

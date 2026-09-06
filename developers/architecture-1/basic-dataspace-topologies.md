# Basic Dataspace Topologies

The basic dataspace configurations are the ones in which the advanced features provided by the OE software stack are not enabled. &#x20;

## Single-node dataspace&#x20;

The most basic OE-enabled dataspace consists of a single marketplace served by a single OE Node. The architecture of such a dataspace is shown in the following diagram.

<figure><img src="../../.gitbook/assets/OE Arch - one node (3).png" alt=""><figcaption></figcaption></figure>

The basic dataspace architecture is straightforward, requiring only the **Marketplace** and **OE Node** components deployed by the dataspace operator.&#x20;

Participants interact with the dataspace through the **Marketplace**’s user interface, which enables them to manage their own assets and access assets shared by others. The **OE Node** serves as the core component of the system, supporting the secure publication, retrieval, and consumption of assets.

The participants in the dataspace connect to the marketplace through the **Web3 wallet** deployed on their users' browsers.



### Characteristics

This minimal setup has the following characteristics:

* **Open marketplace access:** The marketplace is publicly accessible—any user can connect to publish or consume assets, with no access restrictions enforced at the marketplace level.
* **Web3-based authentication:** Users access the marketplace through a non‑custodial Web3 wallet (such as MetaMask). Each user is uniquely identified within the marketplace by the Web3 address used during connection.
* **Credential checks based solely on wallet addresses:** Asset‑level and service‑level access control is enforced solely by verifying the user’s Web3 address.
* **Unrestricted catalogue visibility:** All assets indexed by the OE node appear in the marketplace catalogue, without additional filtering or dataspace‑specific segmentation.

### User Flows

#### **Logging in to the Marketplace**

To publish or consume assets, a user must first log in to the marketplace. Logging in requires connecting to the marketplace server using a **Web3 wallet**.

#### **Publishing an asset**

When an asset is published, a corresponding NFT is created on the **Blockchain.** Then, the asset description (DDO) is encrypted by the OE Node, saved in **IPFS,** and the ID of the IPFS content is saved on-chain. The OE Node then indexes the asset, making it available for consumption through the Marketplace.

#### **Controlling access to assets**

When a participant attempts to consume an asset's service, the OE Node verifies the participant's Web3 address against the allow and deny rules defined for Web3 addresses at both the asset and service levels. The deny list takes precedence. Access to the service is granted or denied based on this outcome.



### Dataspace configuration

#### Configuration example

In this dataspace configuration, only two OE components are required: the OE Node and the marketplace. The table below provides the assumed URLs for each element.

| Component   | URL                                 |
| ----------- | ----------------------------------- |
| OE Node     | `https://node.oceanenterprise.io`   |
| Marketplace | `https://market.oceaneneteprise.io` |

To ensure correct operation, configure the relevant environment variable for each component using the examples in the table below.

<table><thead><tr><th width="147.5">Component</th><th width="318">Environment variable</th><th>Value</th><th>Comments</th></tr></thead><tbody><tr><td><strong>OE Node</strong></td><td><a href="../../infrastructure/oe-node-installation-and-configuration.md#policy_server_url">POLICY_SERVER_URL</a></td><td><code>null</code></td><td>Sets off the SSI verification for asset access control. </td></tr><tr><td><strong>Marketplace</strong></td><td><a href="../../infrastructure/marketplace-installation-and-configuration/#next_public_provider_url">NEXT_PUBLIC_PROVIDER_URL</a></td><td><code>https://node.oceanenterprise.io</code></td><td>Sets the default OE Node used to encrypt and decrypt assets</td></tr><tr><td></td><td><a href="../../infrastructure/marketplace-installation-and-configuration/#next_public_metadatacache_uri">NEXT_PUBLIC_METADATACACHE_URI</a></td><td><code>["https://node.oceanenterprise.io"]</code></td><td>Sets the OE Node from where the asset descriptions will be retrieved and listed in the catalogue.</td></tr><tr><td></td><td><a href="../../infrastructure/marketplace-installation-and-configuration/marketplace-installation.md#oe-node">NEXT_PUBLIC_NODE_URI_INDEXED</a></td><td><code>["https://node.oceanenterprise.io"]</code></td><td>In this configuration, set this variable only if you want the marketplace to display only the assets encrypted by this OE Node.</td></tr><tr><td></td><td><a href="../../infrastructure/marketplace-installation-and-configuration/#next_public_ssi_enabled">NEXT_PUBLIC_SSI_ENABLED</a></td><td><code>false</code></td><td>Sets off the SSI verification flow for asset access control.</td></tr></tbody></table>

#### Installation sequence

The recommended installation order for this setup is presented in the following table.

<table><thead><tr><th width="90.5">Step no.</th><th>Action</th><th>Role</th></tr></thead><tbody><tr><td>1.</td><td><a href="../../infrastructure/oe-node-installation-and-configuration.md">Install and configure the datapasce operator OE Nodes</a></td><td><a href="../dataspace-actors-and-roles.md#dataspace-operator-administrator">Dataspace Operator Administrator</a></td></tr><tr><td>2.</td><td><a href="../../infrastructure/marketplace-installation-and-configuration/marketplace-installation.md">Install and configure the marketplace</a></td><td><a href="../dataspace-actors-and-roles.md#dataspace-operator-administrator">Dataspace Operator Administrator</a></td></tr></tbody></table>



## Multiple nodes dataspace

In this configuration, the Marketplace is connected to multiple OE Nodes, which may be deployed either by the dataspace operator or by individual participants.&#x20;

The Marketplace aggregates and displays a consolidated catalog of all assets registered across the OE Nodes in the dataspace. Additionally, it allows users to publish new assets to a specific OE Node, giving participants full control over where their assets are hosted and managed.

The architecture of this type of dataspace is illustrated in the diagram below.

<figure><img src="../../.gitbook/assets/OE Arch - multiple nodes (2).png" alt=""><figcaption></figcaption></figure>

As shown in the diagram, the marketplace is connected to multiple OE Nodes, operated either by the dataspace operator (OE Nodes DO1 and DO2) or by the dataspace participant (OE Node DP1).

The dataspace operator can deploy multiple nodes within a dataspace to offer a variety of C2D environments to participants. Dataspace participants may also add their own nodes, either to provide C2D execution environments or to maintain tighter control over access to the assets they publish.

<mark style="background-color:$info;">**Note:**</mark> <mark style="background-color:$info;"></mark><mark style="background-color:$info;">For clarity, the Blockchain and IPFS services included in the single‑node dataspace diagram have been omitted here.</mark>



### Characteristics

This minimal setup has the following characteristics:

* **Open marketplace access:** The marketplace is publicly accessible—any user can connect to publish or consume assets, with no access restrictions enforced at the marketplace level.
* **Web3-based authentication:** Users access the marketplace through a non‑custodial Web3 wallet (such as MetaMask). Each user is uniquely identified within the marketplace by the Web3 address used during connection.
* **Credential checks based solely on wallet addresses:** Asset‑level and service‑level access control is enforced solely by verifying the user’s Web3 address.
* **Federated catalogue:** The marketplace connects to all OE nodes defined in the dataspace and provides a consolidated asset catalogue.
* **Unrestricted catalogue visibility:** All assets indexed by any dataspace’s OE nodes are visible in the marketplace catalogue, with no additional filtering or dataspace‑specific segmentation applied.
* **Decentralized dataspace infrastructure:** OE Nodes can be provided and operated by the dataspace operator or by the dataspace participants.&#x20;

### User Flows

#### **Logging in to the Marketplace**

To publish or consume assets, a user must first log in to the marketplace. Logging in requires connecting to the marketplace server using a **Web3 wallet**.

#### **Publishing an asset**

Publishing an asset works similarly to the single-node dataspace. The difference is that at publishing time, the user has the option to choose the OE Node that will encrypt the data. After publishing, the asset is indexed by the OE nodes.&#x20;

#### **Controlling access to assets**

When a participant attempts to consume the service of an asset, the OE Node verifies the participant's web3 address against the allow and deny rules defined for web3 addresses, at both the asset and the service levels. The deny list takes precedence. Access to the service is granted or denied based on this outcome.



### Dataspace configuration

#### Configuration example

In this dataspace configuration, the marketplace is connected to three OE Nodes: OE Node DO1 and OE Node DO2 belong to the dataspace operator, while OE Node DP1 belongs to the dataspace participant. The table below provides the assumed URLs for each element.

<table><thead><tr><th width="143.5">Component</th><th>URL</th></tr></thead><tbody><tr><td>OE Node DO1</td><td><code>https://node1.oceanenterprise.io</code></td></tr><tr><td>OE Node DO2</td><td><code>https://node2.oceanenterprise.io</code></td></tr><tr><td>OE Node DP1</td><td><code>https://node1.ds-participant.io</code></td></tr><tr><td>Marketplace</td><td><code>https://market.oceaneneteprise.io</code></td></tr></tbody></table>

To ensure correct operation, configure the relevant environment variable in each component, using the examples shown in the table below.

<table><thead><tr><th width="145.5">Component</th><th width="195.5">Environment variable</th><th>Value</th><th width="190">Comments</th></tr></thead><tbody><tr><td><strong>OE Node DO1</strong><br><strong>OE Node DO2</strong><br><strong>OE Node DP1</strong></td><td><a href="../../infrastructure/oe-node-installation-and-configuration.md#policy_server_url">POLICY_SERVER_URL</a></td><td><code>null</code></td><td>Sets off the SSI verification for asset access control. </td></tr><tr><td><strong>Marketplace</strong></td><td><a href="../../infrastructure/marketplace-installation-and-configuration/#next_public_provider_url">NEXT_PUBLIC_PROVIDER_URL</a></td><td><code>https://node1.oceanenterprise.io</code></td><td>Sets the default OE Node used to encrypt and decrypt assets</td></tr><tr><td></td><td><a href="../../infrastructure/marketplace-installation-and-configuration/marketplace-installation.md#oe-node">NEXT_PUBLIC_NODE_URI_INDEXED</a></td><td><code>["https://node1.oceanenterprise.io","https://node2.oceanenterprise.io","https://node1.ds-participant.io"]</code></td><td>Sets the list of OE Nodes used by the marketplace for encrypt/decrypt operations and whose assets are listed in the marketplace catalogue.</td></tr><tr><td></td><td><a href="../../infrastructure/marketplace-installation-and-configuration/#next_public_metadatacache_uri">NEXT_PUBLIC_METADATACACHE_URI</a></td><td><code>["https://node1.oceanenterprise.io","https://node2.oceanenterprise.io","https://node1.ds-participant.io"]</code></td><td>Sets the OE Nodes from where the asset descriptions will be retrieved and listed in the catalogue.</td></tr><tr><td></td><td><a href="../../infrastructure/marketplace-installation-and-configuration/#next_public_ssi_enabled">NEXT_PUBLIC_SSI_ENABLED</a></td><td><code>false</code></td><td>Sets off the SSI verification flow for asset access control.</td></tr></tbody></table>

#### Installation sequence

The recommended installation order for this setup is presented in the following table.

<table><thead><tr><th width="109.5">Step no.</th><th>Action</th><th>Role</th></tr></thead><tbody><tr><td>1.</td><td><a href="../../infrastructure/oe-node-installation-and-configuration.md">Install and configure the datapasce operator OE Nodes</a></td><td><a href="../dataspace-actors-and-roles.md#dataspace-operator-administrator">Dataspace Operator Administrator</a></td></tr><tr><td>2.</td><td><a href="../../infrastructure/oe-node-installation-and-configuration.md">Install and configure the dataspace participant OE Nodes </a></td><td><a href="../dataspace-actors-and-roles.md#dataspace-participant-administrator">Dataspace Participant Administrator</a></td></tr><tr><td>3.</td><td><a href="../../infrastructure/marketplace-installation-and-configuration/marketplace-installation.md">Install and configure the marketplace</a></td><td><a href="../dataspace-actors-and-roles.md#dataspace-operator-administrator">Dataspace Operator Administrator</a></td></tr></tbody></table>

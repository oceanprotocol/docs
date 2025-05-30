---
description: How to host your data and algorithm NFT assets
---

# Host Assets - to be updated/deleted

The most important thing to remember is that wherever you host your asset... it needs to be **reachable & downloadable**. It cannot live behind a private firewall such as a private Github repo. You need to **use a proper hosting service!**

**The URL to your asset is encrypted in the publishing process!**

### Publish. Cool. Things.

If you want to publish cool things on the Ocean Marketplace, then you'll first need a place to host your assets as **Ocean doesn't store data**; you're responsible for hosting it on your chosen service and providing the necessary details for publication. You have SO many options where to host your asset including centralized and decentralized storage systems. Places to host may include: Github, IPFS, Arweave, AWS, Azure, Google Cloud, and your own personal home server (if that's you, then you probably don't need a tutorial on hosting assets). Really, anywhere with a downloadable link to your asset is fine.

In this section, we'll walk you through three options to store your assets: Arweave (decentralized storage), AWS (centralized storage), and Azure (centralized storage). Let's goooooo!

Read on, if you are interested in the security details!

### Security Considerations

When you publish your asset as an NFT, then the URL/TX ID/CID required to access the asset is encrypted and stored as a part of the NFT's [DDO](../../developers/identifiers.md) on the blockchain. Buyers don't have access directly to this information, but they interact with the [Provider](https://github.com/oceanprotocol/provider#provider), which decrypts the DDO and acts as a proxy to serve the asset.

We recommend implementing a security policy that allows **only the Provider's IP address to access the file** and blocks requests from other unauthorized actors is recommended. Since not all hosting services provide this feature, **you must carefully consider the security features while choosing a hosting service.**

{% hint style="warning" %}
**Please use a proper hosting solution to keep your files.** Systems like `Google Drive` are not specifically designed for this use case. They include various virus checks and rate limiters that prevent the [`Provider`](../../developers/old-infrastructure/provider/)downloading the asset once it was purchased.
{% endhint %}

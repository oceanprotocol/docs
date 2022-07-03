---
title: Set Up MetaMask Wallet
description: Tutorial about how to set up MetaMask for Chrome.
---

> MetaMask can also be used with a TREZOR or Ledger hardware wallet but we don't cover those options below; see [the MetaMask documentation](https://metamask.zendesk.com/hc/en-us/articles/360020394612-How-to-connect-a-Trezor-or-Ledger-Hardware-Wallet).

## MetaMask Set Up Steps

1. Go to the [Chrome Web Store for extensions](https://chrome.google.com/webstore/category/extensions) and search for MetaMask.

   ![metamask-chrome-store](images/metamask-chrome-extension.png)

- Install MetaMask. The wallet provides a friendly user interface that will help you through each step. MetaMask gives you two options: importing an existing wallet or creating a new one. Choose to `Create a Wallet`:

   ![Create a wallet](images/create-new-metamask-wallet.png)

- In the next step create a new password for your wallet. Read through and accept the terms and conditions. After that, MetaMask will generate Secret Backup Phrase for you. Write it down and store it in a safe place.

   ![Secret Backup Phrase](images/secret-backup-phrase.png)

- Continue forward. On the next page, MetaMask will ask you to confirm the backup phrase. Select the words in the correct sequence:

   ![Confirm secret backup phrase](images/confirm-backup-phrase.png)
   
- Voila! Your account is now created. You can access MetaMask via the browser extension in the top right corner of your browser. 

   ![MetaMask browser extension](images/metamask-browser-extension.png)

- You can now manage Ether and Ocean Tokens with your wallet. You can copy your account address to the clipboard from the options. When you want someone to send Ether or Ocean Tokens to you, you will have to give them that address. It's not a secret.

   ![Manage tokens](images/manage-tokens.png)

You can also watch our [tutorial video snippets](https://www.youtube.com/playlist?list=PL_dn0wVs9kWolBCbtHaFxsi408cumOeth) if you want more help setting up MetaMask.

## Set Up Custom Network

Sometimes it is required to use custom or external networks in MetaMask. We can add a new one through MetaMask's Settings. 

Open the Settings menu and find the `Networks` option. When you open it, you'll be able to see all available networks your MetaMask wallet currently use. Click the `Add Network` button. 

![Add custom/external network](images/metamask-add-network.png)

There are a few empty inputs we need to fill:

- **Network Name:** this is the name that MetaMask is going to use to differentiate your network from the rest.
- **New RPC URL:** to operate with a network we need an endpoint (RPC). This can be a public or private URL.
- **Chain Id:** each chain has an Id
- **Currency Symbol:** it's the currency symbol MetaMask uses for your network
- **Block Explorer URL:** MetaMask uses this to provide a direct link to the network block explorer when a new transaction happens

When all the inputs are filled just click `Save`. MetaMask will automatically switch to the new network.

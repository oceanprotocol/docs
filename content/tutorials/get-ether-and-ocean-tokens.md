---
title: Get Ether and Ocean Tokens
description: A tutorial about how to get Ether and Ocean Tokens.
---

If you want to interact with an Ethereum-based network that supports Ocean Protocol, then you'll eventually need Ether or Ocean Tokens _for that network_. (Every Ethereum-based network has its own Ether and its own Ocean Tokens, and you can't use those in other networks.)

At the time of writing, there were some public testnets you could use to test an Ocean Protocol application. For more information about those, see the page about [testnets](/concepts/testnets/).

Note: This page _doesn't_ explain how to get Ether or Ocean Tokens for use in the Ocean Mainnet. We'll add that in the future.

## Get a Compatible Wallet

You will need a [wallet that can hold Ether (for any Ethereum network) and Ocean Tokens (for any Ethereum network)](/concepts/wallets/). For the purpose of this tutorial, you can use MetaMask. See [our tutorial about how to set up MetaMask](/tutorials/metamask-setup/).

In MetaMask, be sure to switch from the **Main Ethereum Network** to whatever network you're using.

## Get Ether

### Get Ether for the Kovan Testnet

You can get Kovan Ether (KEth), for the Kovan Testnet, from a Kovan faucet: see [the official list of Kovan faucets](https://github.com/kovan-testnet/faucet). You have to give the faucet your Kovan address (wallet account address). You can get that from MetaMask. It's a string that looks like:

```text
0xa0A9d7f78bF293514e7cA2789A0Af689eEC99282
```

### Get Ether for the Nile Testnet

At the time of writing, there was no easy way to get Ether for the Nile Testnet. We may set up a Nile Ether faucet, so check back from time to time.

### Get Ether for a Local Ganache-Based Testnet

If you're running a local Ganache-based testnet, then it creates several accounts at network launch time, and gives each of them some Ether. The addresses and private keys of those accounts should be shared (to logs or the console) during the launch process. You can use those accounts and their Ether.

### Get Ether for a Local Spree Testnet

**Option 1:** If you're running a local Spree testnet, then you can send some Spree Ether to `<YOUR ADDRESS>` using the following command (a long command that wraps around):

`curl --data '{"jsonrpc":"2.0","method":"personal_sendTransaction","params":[{"from":"0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e","to":"<YOUR ADDRESS>","value":"0x7FFFFFFFFFFFFFFFFFF"}, "node0"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8545`

That command uses [Ethereum's JSON RPC API](https://wiki.parity.io/JSONRPC.html). You can also create a new account using the Parity Ethereum CLI. See [the Parity Ethereum CLI documentation](https://wiki.parity.io/CLI-Sub-commands).

**Option 2:** Import the `spree` seed phrase.

By default `spree` is configured to bootstrap `10` initial accounts with a decent amount of ether on them. To get access to this accounts you can import the seed phrase for example in MetaMask or use an HD Wallet to access the accounts'

`taxi music thumb unique chat sand crew more leg another off lamp`

Details about the bootstrapped accounts can be found here: [Barge](https://github.com/oceanprotocol/barge/#spree-network)

**WARNING!** Never use any of those accounts any mainnet, this is for testing purpose only.

**Option 3:** Another option is to run [the Ocean faucet server](https://github.com/oceanprotocol/faucet) on your machine, with default configuration settings. The default settings enable it to dispense Spree Ether. To ask the faucet to send some Spree Ether to `<YOUR ADDRESS>`, use the command (a long command that wraps around):

`curl --data '{"address":"<YOUR ADDRESS>"}' -H "Content-Type: application/json" -X POST localhost:3001/faucet`

## Get Ocean Tokens

It used to be possible to get Ocean Tokens by clicking Pleuston's "Make it rain" button, but that used an Ocean Protocol keeper function that has been removed for security reasons. The "Make it rain" button might be made to work again in the future, but only in testnets.

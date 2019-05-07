---
title: Get Ether and Ocean Tokens
description: A tutorial about how to get Ether and Ocean Tokens.
---

If you want to interact with an Ethereum-based network that supports Ocean Protocol, then you'll eventually need Ether or [Ocean Tokens](/concepts/ocean-tokens/) _for that network_. (Every Ethereum-based network has its own Ether and maybe its own Ocean Tokens, and you can't use those in other networks.)

At the time of writing, there were some public testnets you could use to test an Ocean Protocol application. For more information about those, see the page about [testnets](/concepts/testnets/).

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

If you're connecting to the Nile testnet, you can use the Ocean Faucet. A simple UI for it is deployed as part of the Commons marketplace under:

- client: [commons.oceanprotocol.com/faucet](https://commons.oceanprotocol.com/faucet)

This interface is set up to communicate with the deployed Ocean Faucet Server under:

- server: [faucet.nile.dev-ocean.com](https://faucet.nile.dev-ocean.com)

You can also communicate with that server directly and get some Nile Ether into `<YOUR ADDRESS>` using the following command:

```bash
curl --data '{"address": "<YOUR ADDRESS>", "agent": "curl"}' -H "Content-Type: application/json" -X POST https://faucet.nile.dev-ocean.com/faucet
```

In the above command you only need to replace `<YOUR ADDRESS>` with your own Ethereum address.

Check out the [Ocean Faucet Server repository](https://github.com/oceanprotocol/faucet) to learn more about what the server provides.

The Nile faucet has a limit of one request every 24 hours for the same Ethereum address. But don't worry, the Ether given is more than enough for interacting with the network.

### Get Ether for a Local Ganache-Based Testnet

If you're running a local Ganache-based testnet, then it creates several accounts at network launch time, and gives each of them some Ether. The addresses and private keys of those accounts should be shared (to logs or the console) during the launch process. You can use those accounts and their Ether.

### Get Ether for a Local Spree Testnet

**Option 1:** If you're running a local Spree testnet, then you can send some Spree Ether to `<YOUR ADDRESS>` using the following command (a long command that wraps around):

```bash
curl --data '{"jsonrpc":"2.0","method":"personal_sendTransaction","params":[{"from":"0x00Bd138aBD70e2F00903268F3Db08f2D25677C9e","to":"<YOUR ADDRESS>","value":"0x7FFFFFFFFFFFFFFFFFF"}, "node0"],"id":0}' -H "Content-Type: application/json" -X POST localhost:8545
```

That command uses [Ethereum's JSON RPC API](https://wiki.parity.io/JSONRPC.html). You can also create a new account using the Parity Ethereum CLI. See [the Parity Ethereum CLI documentation](https://wiki.parity.io/CLI-Sub-commands).

**Option 2:** By default, the Spree testnet is configured to bootstrap ten accounts with a decent amount of Spree Ether in each one. To get access to those accounts, you can import the following seed phrase into MetaMask (e.g. by logging out and then clicking "Import using account seed phrase"):

`taxi music thumb unique chat sand crew more leg another off lamp`

Details about the bootstrapped accounts can be found in [the README.md file in the Barge repository](https://github.com/oceanprotocol/barge/#spree-network). They're the ones of type "mnemonic."

**WARNING!** Never use any of those accounts in any mainnet. They are for testing purposes only.

**Option 3:** Another option is to run [the Ocean faucet server](https://github.com/oceanprotocol/faucet) on your machine, with default configuration settings. The default settings enable it to dispense Spree Ether. To ask the faucet to send some Spree Ether to `<YOUR ADDRESS>`, use the command (a long command that wraps around):

```bash
curl --data '{"address":"<YOUR ADDRESS>"}' -H "Content-Type: application/json" -X POST localhost:3001/faucet
```

## Get Ocean Tokens

See the page about [Ocean Tokens](/concepts/ocean-tokens/).

### Get Mainnet Ocean Tokens

There were several ways to acquire some of the Mainnet Ocean Tokens in the initial circulating supply, including:

- participation in the seed round
- participation in the pre-sale
- participation in the token sale
- participation in the initial exchange offering
- completion of a [bounty](/concepts/bounties/)

After [the initial exchange offering on Bittrex International](https://blog.oceanprotocol.com/initial-exchange-offering-of-ocean-protocol-on-bittrex-international-a454688f466a), Mainnet Ocean Tokens became available in the Ethereum Mainnet (_not_ the Ocean Mainnet; there was no Ocean Mainnet at the time).

As of 7 May 2019, there was one exchange in the official list of exchanges listing Mainnet Ocean Tokens (in the Ethereum Mainnet): **Bittrex International**.

In the future, the Ocean Mainnet will be launched and later it will become possible to move Ocean Tokens from the Ethereum Mainnet to the Ocean Mainnet.

In the future, it will become possible to earn Mainnet Ocean Tokens as network rewards and in other ways. The [Ocean Protocol Technical Whitepaper](https://oceanprotocol.com/tech-whitepaper.pdf) gives more details.

### Get Testnet Ocean Tokens

All Squid libraries have methods to request Ocean Tokens. They work by calling the "Dispenser" keeper contract, a contract which is only deployed to testnets. Therefore they will only work in testnets. They're documented in the following places:

- The squid-js docs for:
  - [OceanAccounts.requestTokens()](/references/squid-js/#OceanAccounts-requestTokens)
  - [Account.requestTokens()](/references/squid-js/#Account-requestTokens)
- The squid-py docs for:
  - [the `squid_py.ocean.ocean_tokens` module](https://squid-py.readthedocs.io/en/develop/api/squid_py.ocean.ocean_tokens.html): see the `request()` method.
  - [the `squid_py.ocean.ocean_accounts` module](https://squid-py.readthedocs.io/en/develop/api/squid_py.ocean.ocean_accounts.html): see the `request_tokens()` method.
- [The squid-java docs](https://www.javadoc.io/doc/com.oceanprotocol/squid/): click "All Classes" then "AccountsManager" then scroll to the bottom of the Class AccountsManager page where you'll find the `requestTokens()` method.

The [Example Code page](/tutorials/example-code/) has links to example Squid code (in all of the languages), including examples of using the above methods.

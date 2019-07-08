---
title: Ocean Tokens
description: The technical basics of Ocean Tokens.
---

**NOTICE: Below we outline some plans at the time of writing. Those plans might change. We will update this page on a regular basis.**

## Basics

**Ocean Tokens** are the [cryptocurrency](https://en.wikipedia.org/wiki/Cryptocurrency) associated with Ocean Protocol. They are standards-compliant [ERC-20 tokens](https://en.wikipedia.org/wiki/ERC-20).

| Property               | Value                                                    |
| ---------------------- | -------------------------------------------------------- |
| Token Contract Address | [See the tutorial](/tutorials/wallets-and-ocean-tokens/) |
| Token Symbol           | OCEAN                                                    |
| Decimals of Precision  | 18                                                       |

## Ethereum Mainnet Ocean Tokens

There were several ways to acquire some of the Ethereum Mainnet Ocean Tokens in the initial circulating supply, including:

- participation in the seed round
- participation in the pre-sale
- participation in the token sale
- participation in the initial exchange offering
- completion of a [bounty](/concepts/bounties/)

After [the initial exchange offering on Bittrex International](https://blog.oceanprotocol.com/initial-exchange-offering-of-ocean-protocol-on-bittrex-international-a454688f466a), Ethereum Mainnet Ocean Tokens became available in the Ethereum Mainnet (and not in any other network).

The initial circulating supply of Ethereum Mainnet Ocean Tokens became available on the Ethereum Mainnet in May 2019. If you acquired Ocean Tokens in the initial circulating supply, they should have been, or will be, sent to the address you provided, in the Ethereum Mainnet.

### How to Check Your Ethereum Mainnet Ocean Token Balance

There are many ways to check your Ethereum Mainnet Ocean Token balance. Starting with the easiest, here are some ways:

- Enter your account address into the form at [https://wallet.oceanprotocol.com/tokens](https://wallet.oceanprotocol.com/tokens)
- Go to [Etherscan](https://etherscan.io/), enter your account address into the search field, click **Search**, click on **Erc20 Token Txns**, look for an "OceanToken" transaction in the "Token" colum, and click on **OceanToken** there.
- Download and use [Blowfish](https://github.com/kremalicious/blowfish), a desktop app that tells you your Ocean Token balance (and other things).
- Use MetaMask or other wallet software. See the page about [using wallet software to manage Ocean Tokens](/tutorials/wallets-and-ocean-tokens/). You can also use wallet software to send Ocean Tokens to some other account.

### Ethereum Mainnet Ocean Token Utility

At the time of writing, you could use Ethereum Mainnet Ocean Tokens to do various things in the Ethereum Mainnet, including but not limited to:

- buy other cryptocurrencies. See the next subsection for more details.
- stake in [dxDAO](https://dxdao.daostack.io/).

### How to Buy or Sell Ethereum Mainnet Ocean Tokens

You can buy or sell Ethereum Mainnet Ocean Tokens via any exchange that lists them. See the official list of exchanges below.

You could also make a deal with someone where you send them something and they send you some Ocean Tokens in return (or vice versa). Ethereum Mainnet Ocean Tokens are standard ERC-20 tokens, so any software that can send ERC-20 tokens can be used (e.g. [wallet software](/concepts/wallets/) such as MetaMask).

### Official List of Exchanges

Below is the _official list_ of exchanges which listed Ethereum Mainnet Ocean Tokens (OCEAN), at the time of writing:

- [Bittrex International](https://international.bittrex.com/)
- [KuCoin](https://www.kucoin.com/)
- [DutchX](https://dutchx.readthedocs.io/en/latest/)

## Pacific Network Ocean Tokens

Ocean Tokens in Ocean's Mainnet, [Pacific](/concepts/pacific-network/), represent the same value as they have in the Ethereum Mainnet. The only way to get Ocean Tokens in Pacific is to transfer them from the Ethereum Mainnet.

For this purpose there is a token bridge, allowing you to move Ocean Tokens from the Ethereum Mainnet to the Pacific Network:

- [**Ocean Token Bridge**](https://bridge.oceanprotocol.com)
- [Tutorial: Transfer Ocean Tokens between Networks](/tutorials/token-bridge/)

## Testnet Ocean Tokens

There are Ocean Tokens in several testnets, including the Nile testnet. They are just testnet Ocean Tokens (i.e. for testing purposes only) and they aren't interchangeable with Ethereum Mainnet Ocean Tokens. For more details, see the the [page about Testnets](/concepts/testnets/) and the [tutorials](/tutorials/introduction/).

### Testnet Ocean Token Utility

Once you have some Testnet Ocean Tokens, you can use them for all currently-implemented Ocean Protocol tasks _in that testnet_ (e.g. buying assets).

### Get Testnet Ocean Tokens

All Squid libraries have methods to request Ocean Tokens. They work by calling the _Dispenser_ keeper contract, a contract which is only deployed to testnets. Therefore they will only work in testnets.

They're documented in the following places:

- The squid-js docs for:
  - [`OceanAccounts.requestTokens()`](/references/squid-js/#OceanAccounts-requestTokens)
  - [`Account.requestTokens()`](/references/squid-js/#Account-requestTokens)
- The squid-py docs for:
  - [the `squid_py.ocean.ocean_tokens` module](https://squid-py.readthedocs.io/en/develop/api/squid_py.ocean.ocean_tokens.html): see the `request()` method.
  - [the `squid_py.ocean.ocean_accounts` module](https://squid-py.readthedocs.io/en/develop/api/squid_py.ocean.ocean_accounts.html): see the `request_tokens()` method.
- [The squid-java docs](https://www.javadoc.io/doc/com.oceanprotocol/squid/): click _All Classes_ then _AccountsManager_ then scroll to the bottom of the Class _AccountsManager_ page where you'll find the `requestTokens()` method.

The [Example Code page](/tutorials/example-code/) has links to example Squid code (in all of the languages), including examples of using the above methods.

## Further Reading about Ocean Tokens

- [Teach Your Wallet to Track Ocean Tokens](/tutorials/wallets-and-ocean-tokens/)
- [Ocean Tokenomics](https://blog.oceanprotocol.com/ocean-tokenomics-d34f28c480a8)
- [Ocean Tokenomics II](https://blog.oceanprotocol.com/https-blog-oceanprotocol-com-ocean-tokenomics-ii-faf05854314b)
- [Ocean Protocol Technical Whitepaper](https://oceanprotocol.com/tech-whitepaper.pdf)

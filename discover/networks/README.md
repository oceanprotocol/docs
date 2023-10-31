---
title: Supported Networks
description: All the public networks the Ocean Protocol contracts are deployed to.
---

# Networks

Ocean Protocol contracts are deployed on multiple public networks. You can always find the most up-to-date deployment addresses for all individual contracts in the [address.json](https://github.com/oceanprotocol/contracts/blob/v4main/addresses/address.json).

In each network, whether it's the Ethereum mainnet, a testnet, or the Polygon/Matic network, you'll need ETH or Matic to pay for gas and OCEAN for certain actions on the Ocean Protocol network. The Ethereum mainnet and the Polygon network are both live networks and the tokens on these networks have real value. However, the tokens on the test networks are not of real value and are only used for testing purposes. You can obtain testnet ETH and OCEAN from faucets, which are services that provide small amounts of tokens for free.

### Ethereum Mainnet

The Ethereum mainnet is a production network, which means that it is a live and operational network that handles real transactions and has actual economic value. To connect to the Ethereum mainnet using a wallet such as MetaMask, you can click on the network name dropdown and select Ethereum mainnet from the list of available networks.

<table data-header-hidden><thead><tr><th width="100">Gas Token</th><th>ETH(Native token)</th></tr></thead><tbody><tr><td>OCEAN</td><td><a href="https://etherscan.io/token/0x967da4048cD07aB37855c090aAF366e4ce1b9F48">0x967da4048cD07aB37855c090aAF366e4ce1b9F48</a></td></tr><tr><td>Explorer</td><td><a href="https://etherscan.io">https://etherscan.io</a></td></tr></tbody></table>

### Polygon Mainnet

Ocean Protocol is also deployed to Polygon Mainnet, which is another production network. The native token of Polygon Mainnet is MATIC. If you cannot find Polygon Mainnet as a predefined network in your wallet, you can manually connect to it by following Polygon's [guide](https://wiki.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/#add-the-polygon-network-manually), which provides step-by-step instructions for connecting to Polygon Mainnet.

<table data-header-hidden><thead><tr><th width="100">Gas Token</th><th>Matic(Native token)</th></tr></thead><tbody><tr><td>OCEAN</td><td><a href="https://polygonscan.com/token/0x282d8efce846a88b159800bd4130ad77443fa1a1">0x282d8efCe846A88B159800bd4130ad77443Fa1A1</a></td></tr><tr><td>Explorer</td><td><a href="https://polygonscan.com">https://polygonscan.com</a></td></tr></tbody></table>

**Bridge**

Check out the Polygon Bridge [guide](bridges.md) to learn how you can deposit, withdraw and send tokens.

### Oasis Sapphire Mainnet

Ocean Protocol is also deployed to Oasis Sapphire Mainnet, which is a production network that Ocean Protocol uses for [Predictoor](https://predictoor.ai). Ocean Protocol does do not currently support ocean.js, ocean.py, or Ocean Market on Oasis Sapphire. The native token of Oasis Sapphire is ROSE. If you cannot find Oasis Sapphire Mainnet as a predefined network in your wallet, you can manually connect to it by entering the following information during the import process: Network Name: `Oasis Sapphire`, RPC URL: `https://sapphire.oasis.io`, Chain ID: `23294`, Token: `ROSE`.

<table data-header-hidden><thead><tr><th width="100">Gas Token</th><th>ROSE(Native token)</th></tr></thead><tbody><tr><td>OCEAN</td><td><a href="https://explorer.oasis.io/mainnet/sapphire/token/0x39d22B78A7651A76Ffbde2aaAB5FD92666Aca520">0x39d22B78A7651A76Ffbde2aaAB5FD92666Aca520</a></td></tr><tr><td>Explorer</td><td><a href="https://explorer.oasis.io/mainnet/sapphire/">https://explorer.oasis.io/mainnet/sapphire/</a></td></tr></tbody></table>

**Bridge**

Check out our Celer Bridge [guide](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/get-ocean-on-sapphire.md#2-transfer-ocean-to-sapphire-mainnet-via-celer) to learn how you can bridge your OCEAN tokens from Ethereum Mainnet to Oasis Sapphire Mainnet.

### Oasis Sapphire Testnet

Ocean Protocol is also deployed to Oasis Sapphire Testnet, which is a test network that Ocean Protocol uses for [Predictoor](https://predictoor.ai). Ocean Protocol does do not currently support ocean.js, ocean.py, or Ocean Market on Oasis Sapphire. The native token of Oasis Sapphire is ROSE. If you cannot find Oasis Sapphire Testnet as a predefined network in your wallet, you can manually connect to it by entering the following information during the import process: Network Name: `Oasis Sapphire Testnet`, RPC URL: `https://testnet.sapphire.oasis.dev`, Chain ID: `23295`, Token: `ROSE`.

<table data-header-hidden><thead><tr><th width="100">Gas Token</th><th>ROSE(Native token)</th></tr></thead><tbody><tr><td>OCEAN</td><td><a href="https://explorer.oasis.io/testnet/sapphire/address/0x973e69303259B0c2543a38665122b773D28405fB">0x973e69303259B0c2543a38665122b773D28405fB</a></td></tr><tr><td>Explorer</td><td><a href="https://explorer.oasis.io/testnet/sapphire/">https://explorer.oasis.io/testnet/sapphire/</a></td></tr></tbody></table>

**Get (fake) OCEAN on Sapphire Testnet**

Check out our [guide](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/testnet-faucet.md#get-fake-ocean-on-sapphire-testnet) for how to get fake OCEAN tokens on Sapphire Testnet. 

Check out our [guide](https://github.com/oceanprotocol/pdr-backend/blob/main/READMEs/testnet-faucet.md#get-fake-rose-on-sapphire-testnet) for how to get fake ROSE tokens on Oasis Sapphire Testnet.

### BNB Smart Chain

Ocean Protocol is also deployed to BNB Smart Chain, which is another production network. The native token of the BNB Smart Chain is BNB, which is the token of the Binance exchange. If BNB Smart Chain is not listed as a predefined network in your wallet, you can manually connect to it by following Binance's [guide](https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain), which provides detailed instructions on how to connect to BNB Smart Chain.

<table data-header-hidden><thead><tr><th width="100">Gas Token</th><th>BSC BNB(Native token)</th></tr></thead><tbody><tr><td>OCEAN</td><td><a href="https://bscscan.com/token/0xdce07662ca8ebc241316a15b611c89711414dd1a">0xdce07662ca8ebc241316a15b611c89711414dd1a</a></td></tr><tr><td>Explorer</td><td><a href="https://bscscan.com/">https://bscscan.com/</a></td></tr></tbody></table>

**Bridge**

Check out the BSC Bridge [guide](bridges.md#bnb-smart-chain-bridge) to learn how you can deposit, withdraw and send tokens.

### Energy Web Chain

Ocean Protocol is also deployed to [Energy Web Chain](https://energy-web-foundation.gitbook.io/energy-web/technology/trust-layer-energy-web-chain), which is another production network. The native token of the Energy Web Chain is EWT. If you cannot find Energy Web Chain as a predefined network in your wallet, you can manually connect to it by following this [guide](https://energy-web-foundation.gitbook.io/energy-web/how-tos-and-tutorials/connect-to-energy-web-chain-main-network-with-metamash).

<table data-header-hidden><thead><tr><th width="100">Gas Token</th><th>Energy Web Chain EWT(Native token)</th></tr></thead><tbody><tr><td>OCEAN</td><td><a href="https://explorer.energyweb.org/token/0x593122aae80a6fc3183b2ac0c4ab3336debee528">0x593122aae80a6fc3183b2ac0c4ab3336debee528</a></td></tr><tr><td>Explorer</td><td><a href="https://explorer.energyweb.org/">https://explorer.energyweb.org/</a></td></tr></tbody></table>

**Bridge**

To bridge assets between Energy Web Chain and Ethereum mainnet, you can use [this](https://bridge.carbonswap.exchange/) bridge.

### Moonriver

Ocean Protocol is also deployed to [Moonriver](https://docs.moonbeam.network/builders/get-started/networks/moonriver/), which is another production network. The native token of Moonriver is MOVR. If Moonriver is not listed as a predefined network in your wallet, you can manually connect to it by following this [guide](https://docs.moonbeam.network/builders/get-started/networks/moonriver/#connect-metamask).

<table data-header-hidden><thead><tr><th width="100">Gas Token</th><th>Moonriver MOVR(Native token)</th></tr></thead><tbody><tr><td>OCEAN</td><td><a href="https://blockscout.moonriver.moonbeam.network/token/0x99C409E5f62E4bd2AC142f17caFb6810B8F0BAAE/token-transfers">0x99C409E5f62E4bd2AC142f17caFb6810B8F0BAAE</a></td></tr><tr><td>Explorer</td><td><a href="https://blockscout.moonriver.moonbeam.network">https://blockscout.moonriver.moonbeam.network</a></td></tr></tbody></table>

**Bridge**

To bridge assets between Moonriver and Ethereum mainnet, you can use [this](https://anyswap.exchange/#/bridge) bridge.

### Görli

Ocean Protocol is deployed on the Görli test network, which is used for testing and experimentation. Tokens on Görli do not hold real economic value, as it is a non-production network. To connect to Görli using a wallet like MetaMask, simply click on the network name dropdown and select _Goerli_ from the list of available networks.

<table data-header-hidden><thead><tr><th width="100">Gas Token</th><th>Görli ETH(Native token)</th></tr></thead><tbody><tr><td>Görli ETH</td><td><a href="https://goerlifaucet.com/">Faucet</a>. You may find others by <a href="https://www.google.com/search?q=goerli+ether+faucet%5C&#x26;oq=goerli+ether+faucet">searching</a>.</td></tr><tr><td>Görli OCEAN</td><td><a href="https://faucet.goerli.oceanprotocol.com">Faucet</a></td></tr><tr><td>OCEAN</td><td><a href="https://goerli.etherscan.io/address/0xcfdda22c9837ae76e0faa845354f33c62e03653a">0xCfDdA22C9837aE76E0faA845354f33C62E03653a</a></td></tr><tr><td>Explorer</td><td><a href="https://blockscout.moonriver.moonbeam.network">https://blockscout.moonriver.moonbeam.network</a></td></tr></tbody></table>

### Mumbai

Ocean Protocol is deployed on the Mumbai test network Matic / Polygon, which is designed for testing and experimentation purposes. Tokens in Mumbai do not hold any real economic value, as it is not a production network. To connect to Mumbai using a wallet like MetaMask, you can select "Görli" from the network dropdown list.

If Mumbai is not listed as a predefined network in your wallet, you can connect to it manually by following [Matic's guide](https://wiki.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/).

<table data-header-hidden><thead><tr><th width="100"></th><th>Mumbai MATIC(Native token)</th></tr></thead><tbody><tr><td>Mumbai MATIC</td><td><a href="https://faucet.matic.network/">Faucet</a>. You may find others by <a href="https://www.google.com/search?q=mumbai+faucet">searching</a>.</td></tr><tr><td>Mumbai OCEAN</td><td><a href="https://faucet.mumbai.oceanprotocol.com/">Faucet</a></td></tr><tr><td>OCEAN</td><td><a href="https://mumbai.polygonscan.com/token/0xd8992Ed72C445c35Cb4A2be468568Ed1079357c8">0xd8992Ed72C445c35Cb4A2be468568Ed1079357c8</a></td></tr><tr><td>Explorer</td><td><a href="https://mumbai.polygonscan.com">https://mumbai.polygonscan.com</a></td></tr></tbody></table>

### Sepolia

Ocean Protocol is deployed on the Sepolia test network, which is designed for testing and experimentation purposes. Tokens in Sepolia do not hold any real economic value, as it is not a production network. To connect to Sepolia using a wallet like MetaMask, you can select "Sepolia" from the network dropdown list(enable "Show test networks").

<table data-header-hidden><thead><tr><th width="100">Gas Token</th><th>SepoliaETH (Native token)</th></tr></thead><tbody><tr><td>SepoliaETH</td><td><a href="https://sepoliafaucet.com/">Faucet</a></td></tr><tr><td>Sepolia OCEAN</td><td><a href="https://faucet.sepolia.oceanprotocol.com/">Faucet</a></td></tr><tr><td>OCEAN</td><td><a href="https://sepolia.etherscan.io/address/0x1B083D8584dd3e6Ff37d04a6e7e82b5F622f3985">0x1B083D8584dd3e6Ff37d04a6e7e82b5F622f3985</a></td></tr><tr><td>Explorer</td><td><a href="https://sepolia.etherscan.io/">https://sepolia.etherscan.io/</a></td></tr></tbody></table>

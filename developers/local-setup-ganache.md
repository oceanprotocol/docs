# Local Setup - Ganache

\----WORK in progress----

### Local / Ganache

The most straightforward way for local-only development is to use [Barge](https://www.github.com/oceanprotocol/barge), which runs [Ganache](https://www.trufflesuite.com/ganache), Aquarius, and Provider. It is used extensively by the Ocean core devs and for automated integration testing.

To connect to it from MetaMask, select the network called _Localhost 8545_.

Alternatively, you can run Ganache independently. Install it according to [the Ganache docs](https://www.trufflesuite.com/ganache). Then deploy Ocean contracts onto Ganache following [docs in Ocean contracts repo](https://www.github.com/oceanprotocol/contracts). Ganache is at the RPC URL [http://localhost:8545](http://localhost:8545).

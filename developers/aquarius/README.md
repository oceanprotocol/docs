# Aquarius

### What is Aquarius?&#x20;

Aquarius is a tool that tracks and caches the metadata from each chain where the Ocean Protocol smart contracts are deployed. It operates off-chain, running an Elasticsearch database. This makes it easy to query the metadata generated on-chain.

The core job of Aquarius is to continually look out for new metadata being created or updated on the blockchain. Whenever such events occur, Aquarius takes note of them, processes this information, and adds it to its database. This allows it to keep an up-to-date record of the metadata activity on the chains.

Aquarius has its own interface (API) that allows you to easily query this metadata. With Aquarius, you don't need to do the time-consuming task of scanning the data chains yourself. It offers you a convenient shortcut to the information you need. It's ideal for when you need a search feature within your Dapp.

### Postman documentation

Click [here](https://documenter.getpostman.com/view/2151723/UVkmQc7r) to explore the documentation and more examples in postman.

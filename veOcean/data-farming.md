
## On Claiming DF Rewards

How to claim? Go to the DF Webapp at [df.oceandao.org/activerewards](df.oceandao.org/activerewards)

”Rewards” page at Data Farming webapp
Where to claim? All earnings for veOCEAN holders are claimable in Ethereum mainnet. Though, data assets for DF may published in any [network where Ocean’s deployed in production](https://docs.oceanprotocol.com/core-concepts/networks): Eth mainnet, Polygon, etc.

When to claim? There are fresh rewards available every Thursday. If you wish, you can wait for many weeks to accumulate before claiming. (It’s all on-chain.)

When to do a first claim? From the time you lock OCEAN, you must wait at least a week, and up to two weeks, to be able to claim rewards. The nerdy version: if you lock OCEAN on day x, you’ll be able to claim rewards on the first weekly ve “epoch” that begins after day x+7. This behavior is inherited from [veCRV](https://curve.readthedocs.io/dao-fees.html); [here’s the code](https://github.com/oceanprotocol/contracts/blob/main/contracts/ve/veFeeDistributor.vy#L240-L256).


## Data Assets that Qualify for DF

Data assets that have veOCEAN allocated towards them get DF rewards.

The data asset may be of any type — dataset (for static URIs) or algorithm for Compute-to-Data. The data asset may be fixed price or free price. If fixed price, any token of exchange is alright (OCEAN, H2O, USDC, ..).

To qualify for DF, a data asset must also:

Have been created by Ocean smart contracts, [deployed](https://github.com/oceanprotocol/contracts/blob/v4main/addresses/address.json) by OPF to [production networks](https://docs.oceanprotocol.com/core-concepts/networks)
Be visible on [Ocean Market](https://market.oceanprotocol.com/)
Can’t be in [purgatory](https://github.com/oceanprotocol/list-purgatory/blob/main/policies/README.md)

## Active Work to Drive APY

Data Farming is not a wholly passive activity. The name of the game is to drive data consume volume (DCV). High APYs happen only when there is sufficiently high DCV. High DCV means publishing and consuming truly useful datasets (or algorithms).

Thus, if you really want to max out your APY:
- create & publish datasets (and make $ in selling them) — or work with people who can
- consume the datasets (to make $) — or work with people who can
- go stake on them, and finally claim the rewards.

Driving DCV for publishing & consuming is your challenge. It will take real work. And then the reward is APY. It’s incentives all the way down:)
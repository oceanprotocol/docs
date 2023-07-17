---
description: This page shows how you can get datatokens & download an asset
---

# Consume Flow

Consume flow highlights the methods for getting a datatoken for accessing an asset from Ocean Market and for downloading the content of the asset.

We assumed that you accomplished the publish flow presented previously.

Now let's see how can Bob get access to Alice's asset in order to download/consume it.

### Get access for a dataset 🔑

Below, we show four possible approaches:

* A & B are when Alice is in contact with Bob. She can mint directly to him, or mint to herself and transfer to him.
* C is when Alice wants to share access for free, to anyone
* D is when Alice wants to sell access

<figure><img src="../../.gitbook/assets/gif/giphy.webp" alt="" width="199"><figcaption></figcaption></figure>

In the same Python console:

```python
from ocean_lib.ocean.util import to_wei

#Approach A: Alice mints datatokens to Bob
datatoken.mint(bob, to_wei(1), {"from": alice})

#Approach B: Alice mints for herself, and transfers to Bob
datatoken.mint(alice, to_wei(1), {"from": alice})
datatoken.transfer(bob, to_wei(1), {"from": alice})

#Approach C: Alice posts for free, via a dispenser / faucet; Bob requests & gets
datatoken.create_dispenser({"from": alice})
datatoken.dispense(to_wei(1), {"from": bob})

#Approach D: Alice posts for sale; Bob buys
# D.1 Alice creates exchange
price = to_wei(100)
exchange = datatoken.create_exchange({"from": alice}, price, ocean.OCEAN_address)

# D.2 Alice makes 100 datatokens available on the exchange
datatoken.mint(alice, to_wei(100), {"from": alice})
datatoken.approve(exchange.address, to_wei(100), {"from": alice})

# D.3 Bob lets exchange pull the OCEAN needed
OCEAN_needed = exchange.BT_needed(to_wei(1), consume_market_fee=0)
ocean.OCEAN_token.approve(exchange.address, OCEAN_needed, {"from":bob})

# D.4 Bob buys datatoken
exchange.buy_DT(to_wei(1), consume_market_fee=0, tx_dict={"from": bob})
```

For more info, check [Technical Details](https://app.gitbook.com/o/mTcjMqA4ylf55anucjH8/s/BTXXhmDGzR0Xgj13fyfM/\~/changes/336/developers/ocean.py/technical-details) about ocean.py most used functions and also the smart contracts for [Dispenser](https://github.com/oceanprotocol/contracts/blob/main/contracts/pools/dispenser/Dispenser.sol) & [Fixed Rate Exchange](https://github.com/oceanprotocol/contracts/blob/main/contracts/pools/fixedRate/FixedRateExchange.sol).

### Consume the asset ⬇️

To "consume" an asset typically means placing an "order", where you pass in 1.0 datatokens and get back a url. Then, you typically download the asset from the url.

Bob now has the datatoken for the dataset! Time to download the dataset and use it.

<figure><img src="https://media.giphy.com/media/px8O7NANzzaqk/giphy.gif" alt="" width="375"><figcaption></figcaption></figure>

In the same Python console:

```python
# Bob sends a datatoken to the service to get access
order_tx_id = ocean.assets.pay_for_access_service(ddo, {"from": bob})

# Bob downloads the file. If the connection breaks, Bob can try again
asset_dir = ocean.assets.download_asset(ddo, bob, './', order_tx_id)

import os
file_name = os.path.join(asset_dir, "file0")
```

Let's check that the file is downloaded. In a new console:

```bash
cd my_project/datafile.did:op:*
cat file0
```

The _beginning_ of the file should contain the following contents:

```bash
% 1. Title: Branin Function
% 3. Number of instances: 225
% 6. Number of attributes: 2

@relation branin

@attribute 'x0' numeric
@attribute 'x1' numeric
@attribute 'y' numeric

@data
-5.0000,0.0000,308.1291
-3.9286,0.0000,206.1783
...
```

Here’s a video version for this post 👇

{% embed url="https://www.youtube.com/watch?v=JQF-5oRvq9w" %}
Main Flow Video
{% endembed %}

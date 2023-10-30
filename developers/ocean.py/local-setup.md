---
description: Local setup for running & testing ocean.py
---

# Local Setup

On this page, we continue our journey from [installation part](install.md), to do setup for local testing. Local setup means that we will use Ganache as local blockchain where we can effectuate transactions and all the services point to this network.

⚠️ Ocean local setup uses Docker, which is fine for Linux/Ubuntu but plays badly with MacOS and Windows. If you are on these, you’ll want [remote setup](remote-setup.md)_._

Here are the following steps for configuring ocean.py on Ganache network using barge.

### Prerequisites

Ahoy there, matey! 🌊⚓️ When it comes to setting up ocean.py locally, we're diving into the world of Docker containers. These clever containers hold the trusty local blockchain nodes (Ganache) and the mighty Ocean middleware (Aquarius metadata cache and Provider to aid in consuming data assets). But fear not, for a smooth sailing experience, you'll need to ensure the following Docker components are shipshape and ready to go:

1. [Docker](https://docs.docker.com/engine/install/) 🐳
2. [Docker Compose](https://docs.docker.com/compose/install/) 🛠️
3. Oh, and don't forget to [allow those non-root users](https://www.thegeekdiary.com/run-docker-as-a-non-root-user/) to join in on the fun! 🙅‍♂️

So hoist the anchor, prepare your Docker crew, and let's embark on an exciting voyage with ocean.py! 🚢⛵️

### 1. Download barge and run services

Ocean `barge` runs ganache (local blockchain), Provider (data service), and Aquarius (metadata cache).

Barge helps you quickly become familiar with Ocean, because the local blockchain has low latency and no transaction fees.\


In a new console:

```bash
# Grab repo
git clone https://github.com/oceanprotocol/barge
cd barge

# Clean up old containers (to be sure)
docker system prune -a --volumes

# Run barge: start Ganache, Provider, Aquarius; deploy contracts; update ~/.ocean
export GANACHE_HARDFORK=london  # for support of type 2 transactions
./start_ocean.sh
```

Let barge do its magic and wait until the blockchain is fully synced. That means when you start to see continuously `eth_blockNumber`

### 2. Set envvars

From here on, go to a console different than Barge. (E.g. the console where you installed Ocean, or a new one.)

First, ensure that you're in the working directory, with venv activated:

```bash
cd my_project
source venv/bin/activate
```

For this tutorial Alice is the publisher of the dataset and Bob is the consumer of the dataset. As a Linux user, you'll use "`export`" for setting the private keys. In the same console:

```bash
# keys for alice and bob
export TEST_PRIVATE_KEY1=0x8467415bb2ba7c91084d932276214b11a3dd9bdb2930fefa194b666dd8020b99
export TEST_PRIVATE_KEY2=0x1d751ded5a32226054cd2e71261039b65afb9ee1c746d055dd699b1150a5befc


# key for minting fake OCEAN
export FACTORY_DEPLOYER_PRIVATE_KEY=0xc594c6e5def4bab63ac29eed19a134c130388f74f019bc74b8f4389df2837a58
```

### 3. Setup in Python

In the same console, run Python console:

```bash
python
```

In the Python console:

```python
# Create Ocean instance
from ocean_lib.example_config import get_config_dict
config = get_config_dict("development")

from ocean_lib.ocean.ocean import Ocean
ocean = Ocean(config)

# Create OCEAN object. Barge auto-created OCEAN, and ocean instance knows
OCEAN = ocean.OCEAN_token

# Mint fake OCEAN to Alice & Bob
from ocean_lib.ocean.mint_fake_ocean import mint_fake_OCEAN
mint_fake_OCEAN(config)

# Create Alice's wallet
import os
from eth_account import Account

alice_private_key = os.getenv("TEST_PRIVATE_KEY1")
alice = Account.from_key(private_key=alice_private_key)
assert alice.balance() > 0, "Alice needs ETH"
assert OCEAN.balanceOf(alice) > 0, "Alice needs OCEAN"

# Create additional wallets. While some flows just use Alice wallet, it's simpler to do all here.
bob_private_key = os.getenv('TEST_PRIVATE_KEY2')
bob = Account.from_key(private_key=bob_private_key)
assert bob.balance() > 0, "Bob needs ETH"
assert OCEAN.balanceOf(bob) > 0, "Bob needs OCEAN"

# Compact wei <> eth conversion
from ocean_lib.ocean.util import to_wei, from_wei
```

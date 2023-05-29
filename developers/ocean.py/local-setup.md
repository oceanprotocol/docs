---
description: Local setup for running & testing ocean.py
---

# Local Setup

⚠️ This setup can be accomplished only on Linux operator systems

Here are the following steps for configuring ocean.py on Ganache network using barge

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
./start_ocean.sh
```

Let barge do its magic and wait until the blockchain is fully synced. That means  when you    start to see continuosly `eth_blockNumber`

### 2. Brownie local network configuration

(You don't need to do anything in this step, it's just useful to understand.)

Brownie's network configuration file is at `~/.brownie/network-config.yaml`.

When running locally, Brownie will use the chain listed under `development`, having id `development`. This refers to Ganache, which is running in Barge.

### 3. Set envvars

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

### 4. Setup in Python

In the same console, run Python console:

```bash
python
```

In the Python console:

```python
# Create Ocean instance
from ocean_lib.web3_internal.utils import connect_to_network
connect_to_network("development")

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
from brownie.network import accounts
accounts.clear()

alice_private_key = os.getenv("TEST_PRIVATE_KEY1")
alice = accounts.add(alice_private_key)
assert alice.balance() > 0, "Alice needs ETH"
assert OCEAN.balanceOf(alice) > 0, "Alice needs OCEAN"

# Create additional wallets. While some flows just use Alice wallet, it's simpler to do all here.
bob_private_key = os.getenv('TEST_PRIVATE_KEY2')
bob = accounts.add(bob_private_key)
assert bob.balance() > 0, "Bob needs ETH"
assert OCEAN.balanceOf(bob) > 0, "Bob needs OCEAN"

# Compact wei <> eth conversion
from ocean_lib.ocean.util import to_wei, from_wei
```

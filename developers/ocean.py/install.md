# Install

Let’s start interacting with the python library by firstly installing it & its prerequisites.

### Prerequisites

Ahoy there, matey! 🌊⚓️ When it comes to setting up ocean.py locally, we're diving into the world of Docker containers. These clever containers hold our trusty local blockchain nodes (Ganache) and the mighty Ocean middleware (Aquarius metadata cache and Provider to aid in consuming data assets). But fear not, for a smooth sailing experience, you'll need to ensure the following Docker components are shipshape and ready to go:

1. Docker 🐳
2. Docker Compose 🛠️
3. Oh, and don't forget to allow those non-root users to join in on the fun! 🙅‍♂️

So hoist the anchor, prepare your Docker crew, and let's embark on an exciting voyage with ocean.py! 🚢⛵️\
\
From the adventurous `Python 3.8.5` all the way up to `Python 3.10.4`, ocean.py has got your back! 🚀

While `ocean.py` can join you on your `Python 3.11` journey, a few manual tweaks may be required. But worry not, brave explorers, we've got all the juicy details for you below! 📚✨\
\
⚠️ Make sure that you have `autoconf`, `pkg-config` and `build-essential` or their equivalents installed on your host.

### Installing ocean.py

ocean.py is a Python library [on pypi as ocean-lib](https://pypi.org/project/ocean-lib/). So after you have completed the prerequisites step, let's create a new console for library installation:

```console
# Create your working directory
mkdir my_project
cd my_project

# Initialize virtual environment and activate it. Install artifacts.
# Make sure your Python version inside the venv is >=3.8.
# Anaconda is not fully supported for now, please use venv
python3 -m venv venv
source venv/bin/activate

# Avoid errors for the step that follows
pip install wheel

# Install Ocean library.
pip install ocean-lib
```

### Potential issues & workarounds <a href="#60e8" id="60e8"></a>

Issue: M1 \* `coincurve` or `cryptography`

* If you have an Apple M1 processor, `coincurve` and `cryptography` installation may fail due missing packages, which come pre-packaged in other operating systems.
* Workaround: ensure you have `autoconf`, `automake` and `libtool` installed as it is mentioned in the prerequisites, e.g. using Homebrew or MacPorts.

Issue: MacOS “Unsupported Architecture”

* If you run MacOS, you may encounter an “Unsupported Architecture” issue.
* Workaround: install including ARCHFLAGS: `ARCHFLAGS="-arch x86_64" pip install ocean-lib`. [Details](https://github.com/oceanprotocol/ocean.py/issues/486).

To install ocean-lib using Python 3.11, run `pip install vyper==0.3.7 --ignore-requires-python` and `sudo apt-get install python3.11-dev` before installing ocean-lib. Since the parsimonious dependency does not support Python 3.11, you need to edit the `parsimonious/expressions.py` to `import getfullargspec as getargsspec` instead of the regular import. These are temporary fixes until all dependencies are fully supported in Python 3.11. We do not directly use Vyper in ocean-lib.

### ocean.py uses Brownie

Let's dive deeper into the Ocean world! 💙 Did you know that Ocean and Brownie are like best buddies? When you installed Ocean (ocean-lib pypi package) earlier, it automatically took care of installing Brownie (eth-brownie package) too. Talk about a dynamic duo! 🦸‍♀️🦸‍♂️

`ocean.py` treats each Ocean smart contract as a Python class, and each deployed smart contract as a Python object. We love this feature, because it means Python programmers can treat Solidity code as Python code! 🤯

### Helpful resources

Oh, buoy! 🌊🐙 When it comes to installation, ocean.py has you covered with a special README called ["install.md"](https://github.com/oceanprotocol/ocean.py/blob/main/READMEs/install.md). It's like a trusty guide that helps you navigate all the nitty-gritty details. So, let's dive in and ride the waves of installation together! 🏄‍♂️🌊

\
Or if you prefer a video format, you can check this tutorial on Youtube

{% embed url="https://www.youtube.com/watch?v=mbniGPNHE_M" %}
Install ocean.py
{% endembed %}

### Local Setup

⚠️ This setup can be accomplished only on Linux operator systems

Here are the following steps for configuring ocean.py on Ganache network using barge

### 1. Download barge and run services

Ocean `barge` runs ganache (local blockchain), Provider (data service), and Aquarius (metadata cache).

Barge helps you quickly become familiar with Ocean, because the local blockchain has low latency and no transaction fees.\


In a new console:

```
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

```
cd my_project
source venv/bin/activate
```

For this tutorial Alice is the publisher of the dataset and Bob is the consumer of the dataset. As a Linux user, you'll use "`export`" for setting the private keys. In the same console:

```
# keys for alice and bob
export TEST_PRIVATE_KEY1=0x8467415bb2ba7c91084d932276214b11a3dd9bdb2930fefa194b666dd8020b99
export TEST_PRIVATE_KEY2=0x1d751ded5a32226054cd2e71261039b65afb9ee1c746d055dd699b1150a5befc


# key for minting fake OCEAN
export FACTORY_DEPLOYER_PRIVATE_KEY=0xc594c6e5def4bab63ac29eed19a134c130388f74f019bc74b8f4389df2837a58
```

### 4. Setup in Python

In the same console, run Python console:

```
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



### Remote Setup

Here, we do setup for Mumbai, the testnet for Polygon. It's similar for other remote chains.

Here, we will:

1. Configure Brownie networks
2. Create two accounts - `REMOTE_TEST_PRIVATE_KEY1` and `2`
3. Get fake MATIC on Mumbai
4. Get fake OCEAN on Mumbai
5. Set envvars
6. Set up Alice and Bob wallets in Python

Let's go!

### 1. Configure Brownie Networks (One-Time)

#### 1.1 Network config file

Brownie's network config file is `network-config.yaml`. It is located in the `.brownie/` subfolder of your home folder.

* For Linux & MacOS, it's: `~/.brownie/network-config.yaml`
* For Windows users, it's: `C:\Users\<user_name>\.brownie\network-config.yaml`

#### 1.2 Generate network config file (if needed)

If you already see the config file, skip this section.

If you don't, you need to auto-generate by calling any brownie function from a Python console. Here's an example.

First, in a new or existing console, run Python:

```
python
```

In the Python console:

```
from ocean_lib.example_config import get_config_dict
```

It will generate the file in the target location. You can check the target location to confirm.

#### 1.3 Contents of network config file

The network configuration file has settings for each network, e.g. development (ganache), Ethereum mainnet, Polygon, and Mumbai.

Each network gets specifications for:

* `host` - the RPC URL, i.e. what URL do we pass through to talk to the chain
* `required_confs` - the number of confirmations before a tx is done
* `id` - e.g. `polygon-main` (Polygon), `polygon-test` (Mumbai)

`development chains` run locally; `live` chains run remotely.

The example `network-config.yaml` in Brownie's GitHub repo is [here](https://github.com/eth-brownie/brownie/blob/master/brownie/data/network-config.yaml). It can serve as a comparison to your local copy.

Ocean.py follows the exact `id` name for the network's name from the default Brownie configuration file. Therefore, you need to ensure that your target network name matches the corresponding Brownie `id`.

#### 1.4 Networks Supported

All [Ocean-deployed](https://docs.oceanprotocol.com/core-concepts/networks) chains (Eth mainnet, Polygon, etc) should be in Brownie's default `network-config.yaml` except Energy Web Chain (EWC).

For Windows users: it's possible that your `network-config.yaml` doesn't have all the network entries. In this case, just replace your local file's content with the `network-config.yaml` in Brownie's GitHub repo, [here](https://github.com/eth-brownie/brownie/blob/master/brownie/data/network-config.yaml).

For all users: to use EWC, add the following to network-config.yaml:

```
- name: energyweb
  networks:
  - chainid: 246
    host: https://rpc.energyweb.org
    id: energyweb
    name: energyweb
```

#### 1.5 RPCs and Infura

The config file's default RPCs point to Infura, which require you to have an Infura account with corresponding token `WEB3_INFURA_PROJECT_ID`.

**If you do have an Infura account**

* Linux & MacOS users: in console: `export WEB3_INFURA_PROJECT_ID=<your infura ID>`
* Windows: in console: `set WEB3_INFURA_PROJECT_ID=<your infura ID>`

**If you do **_**not**_** have an Infura account**

One option is to get an Infura account. A simpler option is to _bypass the need_ for an Infura account: just change to RPCs that don't need Infura.

You can bypass manually: just edit your brownie network config file.

Or you can bypass via the command line. The following command replaces Infura RPCs with public ones in `network-config.yaml`:

* Linux users: in the console: `sed -i 's#https://polygon-mainnet.infura.io/v3/$WEB3_INFURA_PROJECT_ID#https://polygon-rpc.com/#g; s#https://polygon-mumbai.infura.io/v3/$WEB3_INFURA_PROJECT_ID#https://rpc-mumbai.maticvigil.com#g' ~/.brownie/network-config.yaml`
* MacOS users: you can achieve the same thing with `gnu-sed` and the `gsed` command. (Or just manually edit the file.)
* For Windows: you might need something similar to [powershell](https://www.marek.tokyo/2020/01/remove-string-from-file-in-windows-10.html). (Or just manually edit the file.)

**1.6 Network config file wrapup**

Congrats, you've now configured your Brownie network file! You rarely need to worry about it from now on.

### 2. Create EVM Accounts (One-Time)

An EVM account is singularly defined by its private key. Its address is a function of that key. Let's generate two accounts!

In a new or existing console, run Python.

```
python
```

In the Python console:

```
from eth_account.account import Account
account1 = Account.create()
account2 = Account.create()

print(f"""
REMOTE_TEST_PRIVATE_KEY1={account1.key.hex()}, ADDRESS1={account1.address}
REMOTE_TEST_PRIVATE_KEY2={account2.key.hex()}, ADDRESS2={account2.address}
""")
```

Then, hit Ctrl-C to exit the Python console.

Now, you have two EVM accounts (address & private key). Save them somewhere safe, like a local file or a password manager.

These accounts will work on any EVM-based chain: production chains like Eth mainnet and Polygon, and testnets like Goerli and Mumbai. Here, we'll use them for Mumbai.

### 3. Get (fake) MATIC on Mumbai

We need the a network's native token to pay for transactions on the network. [ETH](https://ethereum.org/en/get-eth/) is the native token for Ethereum mainnet; [MATIC](https://polygon.technology/matic-token/) is the native token for Polygon, and [(fake) MATIC](https://faucet.polygon.technology/) is the native token for Mumbai.

To get free (fake) MATIC on Mumbai:

1. Go to the faucet [https://faucet.polygon.technology/](https://faucet.polygon.technology/). Ensure you've selected "Mumbai" network and "MATIC" token.
2. Request funds for ADDRESS1
3. Request funds for ADDRESS2

You can confirm receiving funds by going to the following url, and seeing your reported MATIC balance: `https://mumbai.polygonscan.com/address/<ADDRESS1 or ADDRESS2>`

### 4. Get (fake) OCEAN on Mumbai

[OCEAN](https://oceanprotocol.com/token) can be used as a data payment token, and locked into veOCEAN for Data Farming / curation. The READMEs show how to use OCEAN in both cases.

* OCEAN is an ERC20 token with a finite supply, rooted in Ethereum mainnet at address [`0x967da4048cD07aB37855c090aAF366e4ce1b9F48`](https://etherscan.io/token/0x967da4048cD07aB37855c090aAF366e4ce1b9F48).
* OCEAN on other production chains derives from the Ethereum mainnet OCEAN. OCEAN on Polygon (mOCEAN) is at [`0x282d8efce846a88b159800bd4130ad77443fa1a1`](https://polygonscan.com/token/0x282d8efce846a88b159800bd4130ad77443fa1a1).
* (Fake) OCEAN is on each testnet. Fake OCEAN on Mumbai is at [`0xd8992Ed72C445c35Cb4A2be468568Ed1079357c8`](https://mumbai.polygonscan.com/token/0xd8992Ed72C445c35Cb4A2be468568Ed1079357c8).

To get free (fake) OCEAN on Mumbai:

1. Go to the faucet [https://faucet.mumbai.oceanprotocol.com/](https://faucet.mumbai.oceanprotocol.com/)
2. Request funds for ADDRESS1
3. Request funds for ADDRESS2

You can confirm receiving funds by going to the following url, and seeing your reported OCEAN balance: `https://mumbai.polygonscan.com/token/0xd8992Ed72C445c35Cb4A2be468568Ed1079357c8?a=<ADDRESS1 or ADDRESS2>`

### 5. Set envvars

As usual, Linux/MacOS needs "`export`" and Windows needs "`set`". In the console:

**Linux & MacOS users:**

```
# For accounts: set private keys
export REMOTE_TEST_PRIVATE_KEY1=<your REMOTE_TEST_PRIVATE_KEY1>
export REMOTE_TEST_PRIVATE_KEY2=<your REMOTE_TEST_PRIVATE_KEY2>
```

**Windows users:**

```
# For accounts: set private keys
set REMOTE_TEST_PRIVATE_KEY1=<your REMOTE_TEST_PRIVATE_KEY1>
set REMOTE_TEST_PRIVATE_KEY2=<your REMOTE_TEST_PRIVATE_KEY2>
```

### 6. Setup in Python

In your working console, run Python:

```
python
```

In the Python console:

```python
# Create Ocean instance
from ocean_lib.web3_internal.utils import connect_to_network
connect_to_network("polygon-test") # mumbai is "polygon-test"

import os
from ocean_lib.example_config import get_config_dict
from ocean_lib.ocean.ocean import Ocean
config = get_config_dict("polygon-test")
ocean = Ocean(config)

# Create OCEAN object. ocean_lib knows where OCEAN is on all remote networks
OCEAN = ocean.OCEAN_token

# Create Alice's wallet
from brownie.network import accounts
accounts.clear()

alice_private_key = os.getenv('REMOTE_TEST_PRIVATE_KEY1')
alice = accounts.add(alice_private_key)
assert alice.balance() > 0, "Alice needs MATIC"
assert OCEAN.balanceOf(alice) > 0, "Alice needs OCEAN"

# Create Bob's wallet. While some flows just use Alice wallet, it's simpler to do all here.
bob_private_key = os.getenv('REMOTE_TEST_PRIVATE_KEY2')
bob = accounts.add(bob_private_key)
assert bob.balance() > 0, "Bob needs MATIC"
assert OCEAN.balanceOf(bob) > 0, "Bob needs OCEAN"

# Compact wei <> eth conversion
from ocean_lib.ocean.util import to_wei, from_wei
```

If you get a gas-related error like `transaction underpriced`, you'll need to change the `priority_fee` or `max_fee`. See details in [brownie docs](https://eth-brownie.readthedocs.io/en/stable/core-gas.html) or you can check the dedicated [README ](https://github.com/oceanprotocol/ocean.py/blob/main/READMEs/gas-strategy-remote.md)which customize your gas strategy.

# Install

Let’s start interacting with the python library by firstly installing it & its prerequisites.

### Prerequisites

Ahoy there, matey! 🌊⚓️ When it comes to setting up ocean.py locally, we're diving into the world of Docker containers. These clever containers hold our trusty local blockchain nodes (Ganache) and the mighty Ocean middleware (Aquarius metadata cache and Provider to aid in consuming data assets). But fear not, for a smooth sailing experience, you'll need to ensure the following Docker components are shipshape and ready to go:

1. [Docker](https://docs.docker.com/engine/install/) 🐳
2. [Docker Compose](https://docs.docker.com/compose/install/) 🛠️
3. Oh, and don't forget to [allow those non-root users](https://www.thegeekdiary.com/run-docker-as-a-non-root-user/) to join in on the fun! 🙅‍♂️

So hoist the anchor, prepare your Docker crew, and let's embark on an exciting voyage with ocean.py! 🚢⛵️\
\
From the adventurous `Python 3.8.5` all the way up to `Python 3.10.4`, ocean.py has got your back! 🚀

While `ocean.py` can join you on your `Python 3.11` journey, a few manual tweaks may be required. But worry not, brave explorers, we've got all the juicy details for you below! 📚✨\
\
⚠️ Make sure that you have `autoconf`, `pkg-config` and `build-essential` or their equivalents installed on your host.

### Installing ocean.py

ocean.py is a Python library [on pypi as ocean-lib](https://pypi.org/project/ocean-lib/). So after you have completed the prerequisites step, let's create a new console for library installation:

```bash
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


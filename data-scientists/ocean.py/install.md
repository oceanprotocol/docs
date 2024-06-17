# Install

Let’s start interacting with the python library by firstly installing it & its prerequisites.

From the adventurous `Python 3.8.5` all the way up to `Python 3.10.4`, ocean.py has got your back! 🚀

While `ocean.py` can join you on your `Python 3.11` journey, a few manual tweaks may be required. But worry not, brave explorers, we've got all the juicy details for you below! 📚✨ ⚠️ Make sure that you have `autoconf`, `pkg-config` and `build-essential` or their equivalents installed on your host.

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

### Potential issues & workarounds

Issue: M1 \* `coincurve` or `cryptography`

* If you have an Apple M1 processor, `coincurve` and `cryptography` installation may fail due missing packages, which come pre-packaged in other operating systems.
* Workaround: ensure you have `autoconf`, `automake` and `libtool` installed as it is mentioned in the prerequisites, e.g. using Homebrew or MacPorts.

Issue: MacOS “Unsupported Architecture”

* If you run MacOS, you may encounter an “Unsupported Architecture” issue.
* Workaround: install including ARCHFLAGS: `ARCHFLAGS="-arch x86_64" pip install ocean-lib`. [Details](https://github.com/oceanprotocol/ocean.py/issues/486).

### why we 🥰 ocean.py

`ocean.py` treats each Ocean smart contract as a Python class, and each deployed smart contract as a Python object. We love this feature, because it means Python programmers can treat Solidity code as Python code! 🤯

### Helpful resources

Oh, buoy! 🌊🐙 When it comes to installation, ocean.py has you covered with a special README called ["install.md"](https://github.com/oceanprotocol/ocean.py/blob/main/READMEs/install.md). It's like a trusty guide that helps you navigate all the nitty-gritty details. So, let's dive in and ride the waves of installation together! 🏄‍♂️🌊

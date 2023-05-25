---
description: >-
  This page shows how you can publish a data NFT, a datatoken & a data asset all
  in once in different scenarios.
---

# Publish flow

[**ocean.py**](https://github.com/oceanprotocol/ocean.py) is a [Python library](https://pypi.org/project/ocean-lib/) to privately & securely publish, exchange, and consume data, using [Ocean Protocol](https://www.oceanprotocol.com/).

In this page, we provide some tips & tricks for publishing an asset on Ocean Market using ocean.py.

We assume you've already (a) [installed Ocean](https://github.com/oceanprotocol/ocean.py/blob/main/READMEs/install.md), and (b) done [local setup](https://github.com/oceanprotocol/ocean.py/blob/main/READMEs/setup-local.md) or [remote setup](https://github.com/oceanprotocol/ocean.py/blob/main/READMEs/setup-remote.md). This flow works for either one, without any changes between them.

In the Python console:

```python
#data info
name = "Branin dataset"
url = "https://raw.githubusercontent.com/trentmc/branin/main/branin.arff"

#create data asset
(data_nft, datatoken, ddo) = ocean.assets.create_url_asset(name, url, {"from": alice})

#print
print("Just published asset:")
print(f"  data_nft: symbol={data_nft.symbol}, address={data_nft.address}")
print(f"  datatoken: symbol={datatoken.symbol}, address={datatoken.address}")
print(f"  did={ddo.did}")
```

You've now published an Ocean asset!

* `data_nft` is the base (base IP)
* `datatoken` for access by others (licensing)
* `ddo` holding metadata

<figure><img src="../../.gitbook/assets/200.webp" alt=""><figcaption></figcaption></figure>

For more info, see [Appendix: Publish Details](https://github.com/oceanprotocol/ocean.py/blob/main/READMEs/main-flow.md#appendix-publish-details).

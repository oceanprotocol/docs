---
description: Technical details about OceanAssets functions
---

# Ocean Assets

Through this class we can publish assets & consume them to make 💲💲💲

### Creates URL Asset

* **create\_url\_asset**(`self`, `name: str`, `url: str`, `publisher_wallet`, `wait_for_aqua: bool = True` ) -> `tuple`

It is the most used functions in all the READMEs.

Creates asset of type "dataset", having `UrlFiles`, with good defaults.

It can be called after instantiating Ocean object.

**Parameters**

* `name` - name of the asset, `string`
* `url` - url that is stored in the asset, `string`
* `publisher_wallet` - wallet of the asset publisher/owner, `Brownie account`
* `wait_for_aqua` - boolean value which default is `True`, waiting for aquarius to fetch the asset takes additional time, but if you want to be sure that your asset is indexed, keep the default value.

**Returns**

`tuple`

A tuple which contains the data NFT, datatoken and the data asset.

**Defined in**

[ocean/ocean\_assets.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/ocean/ocean\_assets.py#LL178C1-L185C82)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
 @enforce_types
    def create_url_asset(
        self, name: str, url: str, publisher_wallet, wait_for_aqua: bool = True
    ) -> tuple:
        """Create asset of type "data", having UrlFiles, with good defaults"""
        metadata = self._default_metadata(name, publisher_wallet)
        files = [UrlFile(url)]
        return self._create_1dt(metadata, files, publisher_wallet, wait_for_aqua)
```
{% endcode %}

</details>

### Creates Algorithm Asset

* **create\_algo\_asset**(`self`, `name: str`, `url: str`, `publisher_wallet`, `image: str = "oceanprotocol/algo_dockers"`, `tag: str = "python-branin"`, `checksum: str = "sha256:8221d20c1c16491d7d56b9657ea09082c0ee4a8ab1a6621fa720da58b09580e4"`, `wait_for_aqua: bool = True`) -> `tuple`:

Create asset of type "algorithm", having `UrlFiles`, with good defaults.

It can be called after instantiating Ocean object.

**Parameters**:

* `name` - name of the asset, `string`
* `url` - url that is stored in the asset, `string`
* `publisher_wallet` - wallet of the asset publisher/owner, `Brownie account`
* `image` - docker image of that algorithm, `string`
* `tag` - docker tag for that algorithm image, `string`
* `checksum` - docker checksum for algorithm's image, `string`
* `wait_for_aqua` - boolean value which default is `True`, waiting for aquarius to fetch the asset takes additional time, but if you want to be sure that your asset is indexed, keep the default value.

**Returns**

`tuple`

A tuple which contains the algorithm NFT, algorithm datatoken and the algorithm asset.

**Defined in**

[ocean/ocean\_assets.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/ocean/ocean\_assets.py#LL146C4-L176C82)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
@enforce_types
    def create_algo_asset(
        self,
        name: str,
        url: str,
        publisher_wallet,
        image: str = "oceanprotocol/algo_dockers",
        tag: str = "python-branin",
        checksum: str = "sha256:8221d20c1c16491d7d56b9657ea09082c0ee4a8ab1a6621fa720da58b09580e4",
        wait_for_aqua: bool = True,
    ) -> tuple:
        """Create asset of type "algorithm", having UrlFiles, with good defaults"""

        if image == "oceanprotocol/algo_dockers" or tag == "python-branin":
            assert image == "oceanprotocol/algo_dockers" and tag == "python-branin"

        metadata = self._default_metadata(name, publisher_wallet, "algorithm")
        metadata["algorithm"] = {
            "language": "python",
            "format": "docker-image",
            "version": "0.1",
            "container": {
                "entrypoint": "python $ALGO",
                "image": image,
                "tag": tag,
                "checksum": checksum,
            },
        }

        files = [UrlFile(url)]
        return self._create_1dt(metadata, files, publisher_wallet, wait_for_aqua)
```
{% endcode %}

</details>

### Creates Arweave Asset

* **create\_arweave\_asset**(`self`, `name: str`, `transaction_id: str`, `publisher_wallet`, `wait_for_aqua: bool = True`) -> `tuple`

Creates asset of type "data", having `ArweaveFile`, with good defaults.

It can be called after instantiating Ocean object.

**Parameters**

* `name` - name of the asset, `string`
* `transaction_id` - transaction id from the arweave file, `string`
* `publisher_wallet` - wallet of the asset publisher/owner, `Brownie account`
* `wait_for_aqua` - boolean value which default is `True`, waiting for aquarius to fetch the asset takes additional time, but if you want to be sure that your asset is indexed, keep the default value.

**Returns**

`tuple`

A tuple which contains the data NFT, datatoken and the data asset.

**Defined in**

[ocean/ocean\_assets.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/ocean/ocean\_assets.py#LL187C5-L198C82)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
@enforce_types
    def create_arweave_asset(
        self,
        name: str,
        transaction_id: str,
        publisher_wallet,
        wait_for_aqua: bool = True,
    ) -> tuple:
        """Create asset of type "data", having ArweaveFiles, with good defaults"""
        metadata = self._default_metadata(name, publisher_wallet)
        files = [ArweaveFile(transaction_id)]
        return self._create_1dt(metadata, files, publisher_wallet, wait_for_aqua)
```
{% endcode %}

</details>

### Creates GraphQL Asset

* **create\_graphql\_asset**(`self`, `name: str`, `url: str`, `query: str`, `publisher_wallet`, `wait_for_aqua: bool = True`) -> `tuple`

Creates asset of type "data", having `GraphqlQuery` files, with good defaults.

It can be called after instantiating Ocean object.

**Parameters**

* `name` - name of the asset, `string`
* `url` - url of subgraph that you are using, `string`
* `query` - GraphQL query, `string`
* `publisher_wallet` - wallet of the asset publisher/owner, `Brownie account`
* `wait_for_aqua` - boolean value which default is `True`, waiting for aquarius to fetch the asset takes additional time, but if you want to be sure that your asset is indexed, keep the default value.

**Returns**

`tuple`

A tuple which contains the data NFT, datatoken and the data asset.

**Defined in**

[ocean/ocean\_assets.py](https://github.com/oceanprotocol/ocean.py/blob/4aa12afd8a933d64bc2ed68d1e5359d0b9ae62f9/ocean\_lib/ocean/ocean\_assets.py#LL200C5-L212C82)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
@enforce_types
    def create_graphql_asset(
        self,
        name: str,
        url: str,
        query: str,
        publisher_wallet,
        wait_for_aqua: bool = True,
    ) -> tuple:
        """Create asset of type "data", having GraphqlQuery files, w good defaults"""
        metadata = self._default_metadata(name, publisher_wallet)
        files = [GraphqlQuery(url, query)]
        return self._create_1dt(metadata, files, publisher_wallet, wait_for_aqua)
```
{% endcode %}

</details>

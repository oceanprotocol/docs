---
description: Technical details about OceanCompute functions
---

# Ocean Compute Tech Details

Using this class, we are able to manipulate a compute job, run it on Ocean environment and retrieve the results after the execution is finished.

### Start Compute Job

* **start**(`self`, `consumer_wallet`, `dataset: ComputeInput`, `compute_environment: str`, `algorithm: Optional[ComputeInput] = None`, `algorithm_meta: Optional[AlgorithmMetadata] = None`, `algorithm_algocustomdata: Optional[dict] = None`, `additional_datasets: List[ComputeInput] = []`) -> `str`

Starts a compute job.

It can be called within Ocean Compute class.

**Parameters**

* `consumer_wallet` - the `Brownie account` of consumer who pays & starts for compute job.
* `dataset` - `ComputeInput` object, each of them includes mandatory the DDO and service.
* `compute_environment` - `string` that represents the ID from the chosen C2D environment.
* `additional_datasets` - list of `ComputeInput` objects for additional datasets in case of starting a compute job for multiple datasets.

**Optional parameters**

* `algorithm` - `ComputeInput` object, each of them includes mandatory the DDO and service for algorithm.
* `algorithm_meta` - either provide just the algorithm metadata as `AlgorithmMetadata.`
* `algorithm_algocustomedata` - additional user data for the algorithm as dictionary.

**Returns**

`str`

Returns a string type job ID.

**Defined in**

[ocean/ocean\_compute.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean\_compute.py#LL32C4-L70C33)

<details>

<summary>Source code</summary>

```python
 @enforce_types
    def start(
        self,
        consumer_wallet,
        dataset: ComputeInput,
        compute_environment: str,
        algorithm: Optional[ComputeInput] = None,
        algorithm_meta: Optional[AlgorithmMetadata] = None,
        algorithm_algocustomdata: Optional[dict] = None,
        additional_datasets: List[ComputeInput] = [],
    ) -> str:
        metadata_cache_uri = self._config_dict.get("METADATA_CACHE_URI")
        ddo = Aquarius.get_instance(metadata_cache_uri).get_ddo(dataset.did)
        service = ddo.get_service_by_id(dataset.service_id)
        assert (
            ServiceTypes.CLOUD_COMPUTE == service.type
        ), "service at serviceId is not of type compute service."

        consumable_result = is_consumable(
            ddo,
            service,
            {"type": "address", "value": consumer_wallet.address},
            with_connectivity_check=True,
        )
        if consumable_result != ConsumableCodes.OK:
            raise AssetNotConsumable(consumable_result)

        # Start compute job
        job_info = self._data_provider.start_compute_job(
            dataset_compute_service=service,
            consumer=consumer_wallet,
            dataset=dataset,
            compute_environment=compute_environment,
            algorithm=algorithm,
            algorithm_meta=algorithm_meta,
            algorithm_custom_data=algorithm_algocustomdata,
            input_datasets=additional_datasets,
        )
        return job_info["jobId"]
```

</details>

### Compute Job Status

* **status**(`self`, `ddo: DDO`, `service: Service`, `job_id: str`, `wallet`) -> `Dict[str, Any]`

Gets status of the compute job.

It can be called within Ocean Compute class.

**Parameters**

* `ddo` - DDO offering the compute service of this job
* `service` - Service object of compute
* `job_id` - ID of the compute job
* `wallet` - Brownie account which initiated the compute job

**Returns**

`Dict[str, Any]`

A dictionary which contains the status for an existing compute job, keys are `(ok, status, statusText)`.

**Defined in**

[ocean/ocean\_compute.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean\_compute.py#LL72C5-L88C24)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
@enforce_types
    def status(self, ddo: DDO, service: Service, job_id: str, wallet) -> Dict[str, Any]:
        """
        Gets job status.

        :param ddo: DDO offering the compute service of this job
        :param service: compute service of this job
        :param job_id: str id of the compute job
        :param wallet: Wallet instance
        :return: dict the status for an existing compute job, keys are (ok, status, statusText)
        """
        job_info = self._data_provider.compute_job_status(
            ddo.did, job_id, service, wallet
        )
        job_info.update({"ok": job_info.get("status") not in (31, 32, None)})

        return job_info
```
{% endcode %}

</details>

### Compute Job Result

* **result**(`self`, `ddo: DDO`, `service: Service`, `job_id: str`, `index: int`, `wallet` ) -> `Dict[str, Any]`

Gets compute job result.

It can be called within Ocean Compute class.

**Parameters**

* `ddo` - DDO offering the compute service of this job
* `service` - Service object of compute
* `job_id` - ID of the compute job
* `index` - compute result index
* `wallet` - Brownie account which initiated the compute job

**Returns**

`Dict[str, Any]`

A dictionary wich contains the results/logs urls for an existing compute job, keys are `(did, urls, logs)`.

**Defined in**

[ocean/ocean\_compute.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean\_compute.py#LL90C5-L106C22)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
@enforce_types
    def result(
        self, ddo: DDO, service: Service, job_id: str, index: int, wallet
    ) -> Dict[str, Any]:
        """
        Gets job result.

        :param ddo: DDO offering the compute service of this job
        :param service: compute service of this job
        :param job_id: str id of the compute job
        :param index: compute result index
        :param wallet: Wallet instance
        :return: dict the results/logs urls for an existing compute job, keys are (did, urls, logs)
        """
        result = self._data_provider.compute_job_result(job_id, index, service, wallet)

        return result
```
{% endcode %}

</details>

### Compute Job Result Logs

* **compute\_job\_result\_logs**(`self`, `ddo: DDO`, `service: Service`, `job_id: str`, `wallet`, `log_type="output"`) -> `Dict[str, Any]`

Gets job output if exists.

It can be called within Ocean Compute class.

**Parameters**

* `ddo` - DDO offering the compute service of this job
* `service` - Service object of compute
* `job_id` - ID of the compute job
* `wallet` - Brownie account which initiated the compute job
* `log_type` - string which selects what kind of logs to display. Default "output"

**Returns**

`Dict[str, Any]`

A dictionary which includes the results/logs urls for an existing compute job, keys are `(did, urls, logs)`.

**Defined in**

[ocean/ocean\_compute.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean\_compute.py#LL108C5-L130C22)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
@enforce_types
    def compute_job_result_logs(
        self,
        ddo: DDO,
        service: Service,
        job_id: str,
        wallet,
        log_type="output",
    ) -> Dict[str, Any]:
        """
        Gets job output if exists.

        :param ddo: DDO offering the compute service of this job
        :param service: compute service of this job
        :param job_id: str id of the compute job
        :param wallet: Wallet instance
        :return: dict the results/logs urls for an existing compute job, keys are (did, urls, logs)
        """
        result = self._data_provider.compute_job_result_logs(
            ddo, job_id, service, wallet, log_type
        )

        return result
```
{% endcode %}

</details>

### Stop Compute Job

* **stop**(`self`, `ddo: DDO`, `service: Service`, `job_id: str`, `wallet`) -> `Dict[str, Any]`

Attempts to stop the running compute job.

It can be called within Ocean Compute class.

**Parameters**

* `ddo` - DDO offering the compute service of this job
* `service` - Service object of compute
* `job_id` - ID of the compute job
* `wallet` - Brownie account which initiated the compute job

**Returns**

`Dict[str, Any]`

A dictionary which contains the status for the stopped compute job, keys are `(ok, status, statusText)`.

**Defined in**

[ocean/ocean\_compute.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean\_compute.py#LL132C5-L146C24)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
@enforce_types
    def stop(self, ddo: DDO, service: Service, job_id: str, wallet) -> Dict[str, Any]:
        """
        Attempt to stop the running compute job.

        :param ddo: DDO offering the compute service of this job
        :param job_id: str id of the compute job
        :param wallet: Wallet instance
        :return: dict the status for the stopped compute job, keys are (ok, status, statusText)
        """
        job_info = self._data_provider.stop_compute_job(
            ddo.did, job_id, service, wallet
        )
        job_info.update({"ok": job_info.get("status") not in (31, 32, None)})
        return job_info
```
{% endcode %}

</details>

### Get Priced C2D Environments

* **get\_c2d\_environments**(`self`, `service_endpoint: str`, `chain_id: int`)

Get list of compute environments.

It can be called within Ocean Compute class.

**Parameters**

* `service_endpoint` - string Provider URL that is stored in compute service.
* `chain_id` - using Provider multichain, `chain_id` is required to specify the network for your environment. It has `int` type.

**Returns**

`list`

A list of objects containing information about each compute environment. For each compute environment, these are the following keys: `(id, feeToken, priceMin, consumerAddress, lastSeen, namespace, status)`.

**Defined in**

[ocean/ocean\_compute.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean\_compute.py#LL148C4-L150C84)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
    @enforce_types
    def get_c2d_environments(self, service_endpoint: str, chain_id: int):
        return DataServiceProvider.get_c2d_environments(service_endpoint, chain_id)
```
{% endcode %}

</details>

### Get Free C2D Environments

* **get\_free\_c2d\_environment**(`self`, `service_endpoint: str`, `chain_id`)

Get list of free compute environments.

Important thing is that not all Providers contain free environments (`priceMin = 0`).

It can be called within Ocean Compute class.

**Parameters**

* `service_endpoint` - string Provider URL that is stored in compute service.
* `chain_id` - using Provider multichain, `chain_id` is required to specify the network for your environment. It has `int` type.

**Returns**

`list`

A list of objects containing information about each compute environment. For each compute environment, these are the following keys: `(id, feeToken, priceMin, consumerAddress, lastSeen, namespace, status)`.

**Defined in**

[ocean/ocean\_compute.py](https://github.com/oceanprotocol/ocean.py/blob/main/ocean\_lib/ocean/ocean\_compute.py#LL152C5-L155C87)

<details>

<summary>Source code</summary>

{% code overflow="wrap" %}
```python
@enforce_types
    def get_free_c2d_environment(self, service_endpoint: str, chain_id):
        environments = self.get_c2d_environments(service_endpoint, chain_id)
        return next(env for env in environments if float(env["priceMin"]) == float(0))
```
{% endcode %}

</details>

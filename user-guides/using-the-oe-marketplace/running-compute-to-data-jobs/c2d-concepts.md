# C2D Concepts

## How C2D jobs work

To run a C2D job, the user needs to purchase an "_algorithm"_ asset and zero or more "_dataset_" assets. The algorithm is the program that will be executed in a container on the Ocean Node server. The datasets are downloaded in the container and accessed by the running algorithm. When the job finishes, the algorithm’s output and log files are saved. The user who started the C2D job can then download them.

<mark style="color:$info;background-color:$info;">**Note:**</mark> <mark style="color:$info;background-color:$info;"></mark><mark style="color:$info;background-color:$info;">In contrast to asset downloads, which prevent users from downloading their own assets, publishers are permitted to execute C2D jobs on assets they have published.</mark>

## C2D environment

When starting a C2D job, the user can configure the environment in which the job will run, including the processing and storage resources allocated to it, as well as its maximum duration. The following resources can be configured.&#x20;

* Number of processing cores&#x20;
* RAM
* Disk space
* Maximum job duration

**Note**: <mark style="color:$info;background-color:$info;">Ensure the maximum job duration is sufficient for the job to finish. If the duration expires, the job will be terminated automatically.</mark>

When a C2D job starts, resources are allocated from the resource pool for the duration of its execution. The remaining pool resources remain available for other C2D jobs. Once the job completes, its resources are released back into the pool.

## C2D environment types

Ocean Node provides two C2D environments to run jobs:

* **Free environment:** Best for testing. It has limited compute, storage, and job duration, and is free of charge.
* **Paid environment**: Best for production. It offers more compute, storage, and longer job durations. Used resources are billed; running jobs here generates costs.

Each environment has a pool of processing and storage resources. When a C2D job starts, resources are allocated from the resource pool for the duration of its execution. Unused pool resources remain available for other C2D jobs. When a job completes, its resources are automatically released back into the pool.

<mark style="color:$info;background-color:$info;">**Node**</mark><mark style="color:$info;background-color:$info;">: the Ocean Node operator configures each environment, so resources and job duration limits can differ from one Ocean Node to another.</mark>

## C2D job cost

In a paid environment, running C2D jobs incurs costs. Each resource has a per‑minute price (set by the Ocean Node provider), and the job cost is determined by multiplying the resource prices by the job’s duration in minutes. Let's take the following example:&#x20;

In the paid environment, the unit price of each resource is:

* CPU: 0.2 EUR per 1 core/ 1 minute
* RAM: 0.1 EUR per 1 GB/ 1 minute
* Storage: 0.05 EUR per 1GB/ 1 minute

\
If the C2D job runs in a paid environment with **2 cores, 8 GB of RAM and 16 GB of storage**, for **3 minutes**, the total cost associated with this job is calculated as:

**`C2D env cost/minute`**` ``= (2 cores)*0.2EUR + (8GB RAM)*0.1EUR + (16GB storage)*0.05EUR =`` `**`2 EUR/min`**

**`Job cost = (`**`C2D env cost/minute) * 3minutes`` `**`=`**` ``2 * 3 =`` `**`6 EUR`** &#x20;

So, to run the job in this environment costs 6 EUR.

To start a C2D job in a paid environment, the user needs to allocate in advance the amount that covers running the job in the selected environment for the specified maximum duration.&#x20;

Continuing with our example, if the user wants to run a job for **a maximum duration of 10 minutes** in the environment described above, the allocated amount is calculated as:

**Allocated amount** = **C2D env cost/minute** \* **maximum job duration** = 2 EUR/minutes \* 10 minute = **20 EUR**

## Escrow account

When running a C2D job in a paid environment, the user must deposit the full amount needed for the maximum job duration into an escrow account. This account is set by the Ocean Enterprise Collective and is unique to each blockchain.

The following happens when the C2D job starts in a paid environment:

1. The user deposits the allocated amount into the escrow account.&#x20;
2. The Ocean Node that runs the job locks this amount while the job runs.
3. Once the job finishes, the actual cost is calculated based on the per‑minute environment cost and the job’s duration (rounded up to the nearest minute).&#x20;
4. The Ocean Node deducts the job cost and unlocks the rest.
5. Any leftover funds remain in the escrow account, available for future jobs or withdrawal.


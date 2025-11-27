# Update the asset's attributes and state

To update the asset's attributes, perform the following:

1\. From the Edit page, select the option "**Edit Asset**". You can update the following attributes:

* Title
* Description
* Sample file URL
* Tags
* Author
* Access rules
* State. Select one of the following:&#x20;
  * Active - the asset is consumable
  * EndOfLife - the asset is not consumable
  * Deprecated - the asset is not consumable
  * RevokedByPublisher - the asset is not consumable
  * OrderingIsTemporaryDisabled - the asset is not consumable
  * Unlisted - the asset is not consumable
* License file
* Additional Asset Description

For a description of each of these attributes, please review the [Publishing an asset](../publishing-an-asset/) page, steps 1 and 2.

<mark style="background-color:$info;">**Note**</mark><mark style="background-color:$info;">: The Asset Type (Dataset or Algorithm) cannot be changed once set.</mark>

2\. After the changes were made, click "**Submit**". A  transaction request notification from Metamask appears on the screen. Press "**Confirm**".

<figure><img src="../../../.gitbook/assets/image (49).png" alt=""><figcaption></figcaption></figure>

3\. A confirmation message is displayed on the screen. Click "**Back to Asset**" to return to the asset details screen.

<figure><img src="../../../.gitbook/assets/image (50).png" alt=""><figcaption></figcaption></figure>



<mark style="background-color:$info;">Please note that from the time an asset is updated on the blockchain until it is indexed by the Ocean Node’s indexer, a delay may occur. This delay typically ranges from a few seconds to several minutes, depending on factors such as RPC endpoint performance, the current indexed block, and the machine’s processing capacity running the Ocean Node.</mark>

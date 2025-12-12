# Update an existing service

To update an existing service, perform the following:

1 . Click on the service. The service attributes are displayed.&#x20;

2\. You can change the following attributes:

* Service Name
* Service Description
* Service Language
* Price: <mark style="color:$info;background-color:$info;">Please note that if the service is paid, it cannot be changed to a free service and vice versa.</mark>&#x20;
* Payment Collector Address: By default, the payment collector address is the publisher's address; however, it can be changed to a different address.
* Provider URL: the Ocean Node that will encrypt the asset.&#x20;
* The asset's file: it is protected and not displayed in this field. If you want to change it, first, delete the existing file and then add the new one.
* Timeout
* Service State: select one of the following:&#x20;
  * Active - the service is consumable
  * EndOfLife - the service is not consumable
  * Deprecated - the service is not consumable
  * RevokedByPublisher - the service is not consumable
  * OrderingIsTemporaryDisabled - the service is not consumable
  * Unlisted - the service is not consumable
* Access Rules
* Consumer Parameters

<mark style="color:$info;background-color:$info;">For a description of each of these attributes, please review the</mark> [<mark style="color:$info;background-color:$info;">Publishing an asset</mark>](../../publishing-an-asset/) <mark style="color:$info;background-color:$info;">page, step 3.</mark>&#x20;



3\. After the changes were made, click "**Submit**". A transaction request notification from Metamask appears on the screen. Press "**Confirm**".

<figure><img src="../../../../.gitbook/assets/image (1) (1) (1).png" alt=""><figcaption></figcaption></figure>



4\. A confirmation message is displayed on the screen. Click "**Back to Asset**" to return to the asset details screen.

<figure><img src="../../../../.gitbook/assets/image (2) (1) (1).png" alt=""><figcaption></figcaption></figure>



<mark style="background-color:$info;">Please note that from the time an asset is updated on the blockchain until it is indexed by the Ocean Node’s indexer, a delay may occur. This delay typically ranges from a few seconds to several minutes, depending on factors such as RPC endpoint performance, the current indexed block, and the machine’s processing capacity running the Ocean Node.</mark>

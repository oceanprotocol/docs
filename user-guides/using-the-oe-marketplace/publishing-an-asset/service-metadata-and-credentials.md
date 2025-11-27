# Service Metadata and Credentials

14\. The Service Metadata and Credentials screen is displayed. This screen allows you to define the metadata and the access credentials of the first service created, along with the asset. For a better understanding of how access credentials work, please check this <mark style="color:red;">link</mark>.

<figure><img src="../../../.gitbook/assets/image (40).png" alt=""><figcaption></figcaption></figure>



15. **Service Data** group

Fill in the following fields

* **Title:** input a suggestive name for the Service you are publishing
* **Description:** create a detailed description of the Asset. You can use free text, but also Markdown
* **Service language**: select the language of the service
* **Service language direction**: the direction of the text in the selected language. It is automatically set, based on the selected language

<figure><img src="../../../.gitbook/assets/image (1) (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>



16\. **Access Type / Algorithm Privacy**

* **Access Type:** In case an asset of type **dataset** is created, the **Access Type** group is displayed. You can choose either _Download_ or _Compute_.
  *   Choose **Download** if you want the dataset to be downloaded by the consumer when the asset is purchased. This will give the consumer full access to the content downloaded dataset.

      <figure><img src="../../../.gitbook/assets/image (10) (1).png" alt=""><figcaption></figcaption></figure>
  * Choose **Compute** is you want the asset to be accessible only through a C2D job, meaning that only an algorithm can be run on the dataset and the only the results of the algorithm will be accessible to the consumer.
  * In case you selected **Compute**, the "**Set Allowed Algorithms**" group is displayed on the screen.
  * In this group, you can select which algorithms are allowed to run on the dataset. You can select either specific algorithms or algorithms published by trusted publishers.
    *   **Allowed Algorithms**: In this dropdown list, the "_Allow selected algorithms_" is selected and the "Selected Algorithms" list is active. The list will include all the published algorithms to which the dataset publisher has access based on their web3 address.

        * select one or more algorithms in the list that will be allowed to run on the dataset

        <div data-with-frame="true"><figure><img src="../../../.gitbook/assets/image (5) (1) (1) (1).png" alt=""><figcaption></figcaption></figure></div>

        * if you want to allow all published algorithms to run on the dataset, in the "Allowed Algorithms" dropdown list select "_Allow any published algorithm_". Once you select this option, the "**Selected Algorithms**" and "**Allow Trusted Algorithm Publishers**" list will be disabled.

        <figure><img src="../../../.gitbook/assets/image (6) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

        *   **Allowed Trusted Algorithm Publishers**: in this dropdown list, the "_Allow specific algorithm publishers_" option is selected and an input field is displayed.

            * To allow the algorithms published by a specific publisher, enter the web3 address of the publisher and click "Add". The address will be added to the list. You can add as many publishers as you need.

            <figure><img src="../../../.gitbook/assets/image (7) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

            * To allow algorithms published by all publisher, in the "**Allowed Trusted Algorithm Publishers**", select the option _"Allow all trusted algorithm publishers_". Once you select this option, the "**Selected Algorithms**" and "**Allow Trusted Algorithm Publishers**" list will be disabled.

            <figure><img src="../../../.gitbook/assets/image (8) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

            <mark style="background-color:$info;">**Note**</mark><mark style="background-color:$info;">: if you select nothing in the "</mark><mark style="background-color:$info;">**Allowed Algorithms**</mark><mark style="background-color:$info;">" and "</mark><mark style="background-color:$info;">**Allow Trusted Algorithm Publishers**</mark><mark style="background-color:$info;">", no algorithm will have access to run on the dataset.</mark>



* **Algorithm Privacy**: n case an asset of type **algorithm** is created, the **Algorithm Privacy** group is displayed. In this group, the checkbox "**Keep my algorithm privvate for Compute-to-Data**" is displayed.
  * If you want the algorithm to only be run in C2D jobs, check the checkbox
  * If you want the algorithm to be downloaded by consumers and have acces to the code, uncheck the checkbox

<div data-with-frame="true"><figure><img src="../../../.gitbook/assets/image (14) (1).png" alt=""><figcaption></figcaption></figure></div>

**17. Service Configuration Group**

In this group, the dataset location and the node that will encrypt the file location are specified.

* **Dataset location:** based on the content's location, four types of the assets can be registered in Ocean Enterprise: of type URL, IPFS, Arweave or GraphQL&#x20;
  *   **URL**: to register a content stored at a URL, select the **URL** tab.&#x20;

      * In the **File** field, add the URL. The URL can point to a file or to an API endpoint
      * From the right side, select the HTTP method: GET or POST
      * If header parameters are required, specify the key and value for each parameter and press "**Add**"&#x20;
      * Press "**Submit URL**" to verify the URL is accessible.

      <figure><img src="../../../.gitbook/assets/image (15) (1).png" alt=""><figcaption></figcaption></figure>
  *   **IPFS**: to register content stored in IPFS, select the **IPFS** tab.

      * In the CID field, enter the content identifier of the content you want to register and press **Validate**

      <figure><img src="../../../.gitbook/assets/image (18) (1).png" alt=""><figcaption></figcaption></figure>
  * **Arweave**: to register content stored in Arweave, select the Arweave tab
    *   In the **Transaction ID** field, enter the transaction ID of the content and press **Validate**

        <figure><img src="../../../.gitbook/assets/image (45).png" alt=""><figcaption></figcaption></figure>
  * &#x20;**GraphQL**: to register a GraphQL query, select the **GraphQL** tab
    * In the **URL** field, enter the URL of the GrapghQL server
    * If header parameters are required, specify the key and value for each parameter and press "**Add**"&#x20;
    * In the **Query** field, enter the query to run on the GrapghQL server
    *   Press **Submit Query** to verify the URL

        <figure><img src="../../../.gitbook/assets/image (47).png" alt=""><figcaption></figcaption></figure>
* **Provider URL, Sample File, Timeout**
  *   **Provider URL**: This field indicates the Ocean Node that will encrypt the URL. By default, this field is prepopulated with the Ocean Node URL used by the marketplace. If you want to use a different node, press Delete, then insert the URL of the desired Ocean Node and press Validate.

      <figure><img src="../../../.gitbook/assets/image (8) (1) (1).png" alt=""><figcaption></figcaption></figure>
* **Sample File** (optional field): Enter the URL where a sample file of the asset is located and press **Validate**.
*   **Timeout**: the time the consumer who purchased an asset has access to the asset. In the marketplace, it can be set to: 1 day, 1 week, 1 month, 1 year, or forever. The time counter starts the moment the asset is purchased. Once the time expires, the asset has to be purchased again to access it.

    * Select a value from the dropdown list



**18. Access Rules**

* **Allow Eth Address** and **Deny Eth Address** lists: Use the fields in this group to determine who is allowed or denied access to the service. The rules are based on web3 addresses. These fields work the same way as the ones defined at the asset-level credentials, so please refer to steps 5 - 8 on the[ Asset Level Credentials page](asset-level-credentials.md).

<mark style="background-color:$info;">**Note:**</mark> <mark style="background-color:$info;"></mark><mark style="background-color:$info;">To assess a user's right to access a service of an asset, the allow and deny lists at the asset and service level are cumulated and evaluated altogether.</mark>&#x20;



**19. SSI Policies:** to enable access rules based on SSI credentials at the service level, select the "Enable SSI Policies" checkbox. The SSI Policies group is displayed. Please refer to step 11 on the[ Asset Level Credentials page](asset-level-credentials.md) for an understanding of how these fields work.



20\. **Consumer Parameters**

Consumer Parameters are the parameters the asset uses. For a dataset of type URL, the consumer parameters are the query parameters used to call the URL. For an asset of type algorithm, the consumer parameters are the arguments passed to the program.

*   To define consumer parameters for an asset, check the **"This asset uses user-defined parameters"** checkbox. The Custom parameters group is displayed

    <figure><img src="../../../.gitbook/assets/image (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>
* Four types of parameters can be defined in the interface: text, number, boolean, or select (list of values).
* To define a consumer Parameter, input the following fields:
  * **Parameter Name**: the name of the parameter
  * **Parameter Label**: the label that will be displayed on screen&#x20;
  * **Description**: parameter description
  * **Parameter Type**: one of the four types listed above
  * **Required**: if the field is required or optional
  *   **Default value**: the default value of the parameter. It will be used if no value is input by the consumer at the time of consumption&#x20;

      <figure><img src="../../../.gitbook/assets/image (1) (1) (1) (1) (1).png" alt=""><figcaption></figcaption></figure>

      *   For Parameters of type "select", the screen includes additional fields where the list's values are entered.

          <figure><img src="../../../.gitbook/assets/image (4) (1) (1).png" alt=""><figcaption></figcaption></figure>
  * To add a new consumer parameter, press "**Add parameter**"

21\. Press the **Continue** button.&#x20;










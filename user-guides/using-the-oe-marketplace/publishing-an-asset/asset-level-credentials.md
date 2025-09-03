# Asset Level Credentials

5\. The Asset Level Credentials screen is displayed. This screen allows you to define the access rules at the asset level. For a better understanding of how access credentials work, please check this <mark style="color:red;">link</mark>.

6\. The Access Rules group is displayed. Using the fields in this group, you can decide who is allowed or denied access to the asset. The rules are based on web3 addresses.

7\. The "**Allow ETH Address"** option enables the user to define  who can access the asset:&#x20;

* To grant access to everybody, select "_Allow all addresses_"

<figure><img src="../../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>



* To restrict access to specific users, select "_Allow specific addresses_".&#x20;
  * A text field is displayed. Enter the web3 address and press _Add new address_. You can add multiple addresses.&#x20;

<figure><img src="../../../.gitbook/assets/image.png" alt=""><figcaption></figcaption></figure>



8\. The "**Deny ETH Address"** option enables the user to define  who is denied access to the asset:&#x20;

* To deny access to everybody, select "_Deny all addresses_"

<figure><img src="../../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

* To deny access to specific addresses, select _"Deny specific addresses"_.
  * A text field is displayed. Enter the web3 address and press _Add new address_. You can add multiple addresses.

<figure><img src="../../../.gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>



**Note:** <mark style="color:$info;background-color:$info;">Selecting both "Allow all addresses" and "Deny all addresses" simultaneously will result in access being denied to all users, as the deny list takes precedence.</mark>



9\. To enable access rules based on SSI credentials, select the "Enable SSI Policies" checkbox. The SSI Policies group is displayed.

<figure><img src="../../../.gitbook/assets/image (18).png" alt=""><figcaption></figcaption></figure>

Using this user interface, the publisher can define access rules at the asset level based on the Verifiable Credentials (VCs) owned by the consumer in their SSI wallet. The VC-based access rules are named SSI policies or simply policies. Three types of SSI policies can be defined:

*   **Policies applied to all requested VCs (static policies)**: their scope includes all requested VCs. The following static policies can be applied:

    * _signature_: verifies the signature of the VC
    * _not-before_: verifies the credential is not used before its validity time
    * _revoked-status-list_: verifies the credenatil was not&#x20;
    * _expired_: Verifies that the credential has not expired
    * signature\_sd-jwt-vc: verifies the signature for the selective disclosure JWT (SD-JWT) type of VCs.

    <mark style="color:$info;background-color:$info;">**Note**</mark><mark style="color:$info;background-color:$info;">: by default, certain policies are enforced by the marketplace and come preselected. Additionally, the component responsible for the execution of the policies against the submitted VCs has a list of predefined policies that are automatically applied to all VCs. Therefore, even if you manually deselect a default policy, it may still be enforced due to these underlying system rules.</mark>
* **Policies applied to a specific VC**: applicable only to the VC for which they were defined. The following policies can be applied to the VC level:
  * _Static policies_ (see the list above)
  * &#x20;_Allowed issuer:_ verifies that the VC was issued by a list of specific entities defined by their DIDs. If the VC was not issued by any of the DIDs in the list, the policy fails
  * _Custom policy:_  verification rules based on the fields within the requested VCs. For instance, the publisher can enforce a rule that only legal entities from Germany can access the asset. This policy verifies that the `credentialSubject.gx:headquartersAddress.gx:countryCode` equals `"DE"`.
  * _Custom URL policy_: A custom policy authored in the REGO language and hosted at a designated URL. This approach enables advanced verification scenarios by allowing tailored logic based on the specific fields within the requested Verifiable Credentials (VCs).
*   **Advanced policies:** applicable to all VCs. The following advanced policies can be applied:

    * _Credential presenter same as credential owner:_ verifies that the entity that issues the verifiable presentation (VP) that embeds the VC is the same as the subject of the VC. In case the entity that submits the VP for verification is not the subject of the VC, the policy fails.&#x20;
    * _All requested credential types are necessary for verification:_ verifies that all requested VCs are submitted for verification. If this policy is not enabled and the access rules to the asset request , for instance, two VCs - LegalPerson and LegalRegistrationNumber - a consumer who submits just one of the of these credentials passes the verification. With the policy enabled, passing just one of the credentials will result in failure. &#x20;
    * _Minimum number of credentials required_: Set the minimum number of credentials that must be presented for successful verification. Presenting less VCs than the minimum number of credentials will result in failure.&#x20;
    * _Maximum number of credentials required_: Set the maximum number of credentials that must be presented for successful verification.

    <mark style="color:$info;background-color:$info;">**Note**</mark><mark style="color:$info;background-color:$info;">: some of the advanced policies are enforced by default by the marketplace and are checked in the user interface.</mark>



10\. **Policies applied to all credentials:** To add a new policy applied to all credentials, mark the corresponding checkbox.

<figure><img src="../../../.gitbook/assets/image (21).png" alt=""><figcaption></figcaption></figure>

11\. **Policies applied to a specifc VC**: To define policies applicable to a specific VC, perform the following steps:&#x20;

* Click the **New Credential Request** button. The **Credential Request #1** group is displayed.

<figure><img src="../../../.gitbook/assets/image (22).png" alt=""><figcaption></figcaption></figure>



* From the **Type** list, select the VC you want to be requested. The list of supported VCs will be periodically updated. Please consult <mark style="color:red;">here</mark> the list of supported VCs.  \
  From the **Format** list, select the format in which the VC should be presented: `jwt_vc_json`, `mso_mdoc` or `vc+sd_jwt`.&#x20;

<figure><img src="../../../.gitbook/assets/image (25).png" alt=""><figcaption></figcaption></figure>

*   To apply a static policy to the requested VC, perform the following:

    *   click on **Add policy** button and from the list select **Static Policy**.

        <figure><img src="../../../.gitbook/assets/image (27).png" alt=""><figcaption></figcaption></figure>



    *   The **Static Policy** list is displayed. Select a static policy from the list.

        <figure><img src="../../../.gitbook/assets/image (28).png" alt=""><figcaption></figcaption></figure>



*   To apply the Allowed issuer policy to the requested VC, perform the following:

    *   click on **Add policy** button and from the list select **Allowed Issuer**.

        <figure><img src="../../../.gitbook/assets/image (29).png" alt=""><figcaption></figcaption></figure>



    *   The allowed-issuer policy is diplayed. Press the **New Issuer DID** button and in the **Issuer DID** field enter the DID of the issuer. You can add multiple entries by pressing the **New Issuer DID** button.

        <figure><img src="../../../.gitbook/assets/image (30).png" alt=""><figcaption></figcaption></figure>



*   To apply a custom policy to the requested VC, perform the following:

    *   click on **Add policy** button and from the list select **Custom Policy**.

        <figure><img src="../../../.gitbook/assets/image (32).png" alt=""><figcaption></figcaption></figure>



    *   The **Name** field is displayed. Enter a meaningful name for the custom policy, using letters and numbers. \
        For consistency and readability, it's recommended to use camelCase notation when naming your policy.

        <figure><img src="../../../.gitbook/assets/image (33).png" alt=""><figcaption></figcaption></figure>



    *   To create a new rule, click the **New rule** button. From the **Credential field** list, choose a field from the selected VC that you want to evaluate. \
        Next, select the appropriate operator from the **Operator** list.        \
        Finally, enter the desired value in the **Value** field.. Please note that for strings, the comparison is case-insensitive (e.g. "DE", "de" and "De" have the same value).\
        You can add multiple rules in the same custom policy.

        <figure><img src="../../../.gitbook/assets/image (34).png" alt=""><figcaption></figcaption></figure>



* To apply a custom policy available at an URL, perform the following:
  *   click on **Add policy** button and from the list select **Custom URL Policy**.\


      <figure><img src="../../../.gitbook/assets/image (35).png" alt=""><figcaption></figcaption></figure>


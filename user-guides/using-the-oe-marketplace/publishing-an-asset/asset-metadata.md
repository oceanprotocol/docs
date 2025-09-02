---
description: This page describes the Asset Metadata screen in the asset publishing flow.
---

# Asset Metadata

2\. The first step in this process - Asset Metadata - is displayed on the screen.

<figure><img src="../../../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>



3\. Fill in the following fields

* **Title:** input a suggestive name for the Asset you are publishing

<figure><img src="../../../.gitbook/assets/image (2) (1).png" alt=""><figcaption></figcaption></figure>

* **Description:** create a detailed description of the Asset. You can use free text, but also Markdown

<figure><img src="../../../.gitbook/assets/image (3) (1).png" alt=""><figcaption></figcaption></figure>

* **Tags:** add suggestive tags for your asset.  The tags help users filter the assets. You can add as many tags as you wish.

<figure><img src="../../../.gitbook/assets/image (4) (1).png" alt=""><figcaption></figcaption></figure>

* **Author:** Enter the name of the author of the asset. It could be your name/company name or an alias.

<figure><img src="../../../.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure>

* **Asset type:** Select if the asset is a Dataset or an Algorithm. To understand the difference between those two types, please consult <mark style="color:red;">this page</mark>.&#x20;

<figure><img src="../../../.gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>

* If the selected asset type is **Algorithm**, the additional fields must be completed.
  * **Docker image**: select the Docker image to be used for running the algorithm. It can be one of the following:
    * _node:latest_
    * _python:latest_
    * _Custom._ If you selected this option, the following fields are required:
      * _Custom Docker Image_: specify the name and the tag of a public Docker hub image or the custom image if you have it hosted in a 3rd party repository
      * _Docker Image Checksum_: enter the checksum (DIGEST) of your Docker image.
      * _Docker Image Entrypoint_: define the command to be executed to run the algorithm.
  * **Custom Parameters**: If the algorithm has custom parameters, select the checkbox "This asset uses algorithm custom parameters". Then, for each custom parameter, enter the Parameter Name and Parameter Label. &#x20;

<figure><img src="../../../.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

* If the selected asset type is **Dataset**, the checkbox labeled "**Consent of data subjects**" will appear. To proceed, you must check this box to confirm that you have obtained the necessary consent from the data subjects or holders to publish the asset.
* &#x20;**License Type:** Each asset is accompanied by a license that outlines the terms and conditions for its use. All participants intending to consume the asset must adhere to the specified license requirements. Please choose one of the following options to attach the license file to the asset:
  * _Upload a license file_: the file will be saved in IPFS, and the link to it will be saved in the asset's description
  * URL: provide the URL where the file is located and press "Validate". After the file location is validated, it is saved in the asset's description.
* **Terms and Conditions:** All participants within the dataspace are required to comply with its Terms and Conditions. You can review these by clicking the "Terms and Conditions" link. To proceed with the publishing workflow, please confirm your agreement by checking the box labeled "I agree to the Terms and Conditions."&#x20;

4\. Press Continue.

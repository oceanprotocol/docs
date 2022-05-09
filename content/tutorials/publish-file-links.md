---
title: Publish assets using hosting services
description: Tutorial about using hosting services like Google drive, IPFS, or AWS for publishing assets.
---

## Overview

While publishing assets on Ocean Marketplace, publishers must provide a link (a URL) to the asset from where the content of the asset can be accessed. The URL of the asset is encrypted and is stored as a part of DDO on the blockchain. When a buyer pays for the asset, **Provider** decrypts this content and acts as a proxy to serve the asset. It is up to the asset publisher to decide where to host the asset. For example, a publisher can store the content on their google drive, AWS server, private cloud server, or other third-party hosting services. The DDO only stores the location of the asset, which is accessed on-demand by the Provider. 

On Ocean Marketplace, a publisher must provide the link to the asset during publish step. Once the asset is published, this link cannot be changed. So, it is essential that the publisher correctly sets this field (shown in the below image).

![Publish - File URL field](./images/marketplace/publish/marketplace-publish-file-field.png)

## Using hosting services

Publishers can choose any hosting service of their choice. The below section explains how to use commonly used hosting services with Ocean Marketplace.

### Google drive

Google Drive allows users to share files/folders with various access policies. Publishers must set the access policy such that anyone with the link can download the file when using Ocean Marketplace with Ocean Protocol's default Provider (https://v4.provider.rinkeby.oceanprotocol.com).

#### Step 1: Get link

Open https://drive.google.com and upload the file you want to publish on the Ocean Marketplace.
Right-click on the uploaded file and click the `Share` option. Set the file access policy correctly and click the `Copy link` button.

The file URL will be of the form `https://drive.google.com/file/d/<FILE-ID>/view?usp=sharing`, where the `<FILE-ID>` is the unique alphanumeric string. Verify if the URL is correct by entering it in a browser and check if file is downloaded.

![Publish - Google drive link](./images/marketplace/publish/publish-google-drive.png)

#### Step 2: Create a downloadable link

If you paste the copied URL into the browser, it will load an HTML page. Directly pasting the link in the publish page will publish the HTML page instead of a downloadable file URL. So, let's make a downloadable file URL.

Note the `<FILE-ID>` from step 1 and create a URL as below.

`https://drive.google.com/uc?export=download&id=<FILE-ID>`

#### Step 3: Enter the downloadable link in publish page.

After creating a downloadable file URL, fill the `File*` field with the downloadable URL created in step 2.

![Publish - Google drive downloadable link](./images/marketplace/publish/publish-google-drive-2.png)

---
title: Set Up Azure Storage
description: Tutorial about how to set up Azure storage for use with Ocean.
---

_Note: This needs updating for Ocean V3._

This tutorial is for publishers who want to get started using Azure to store some of their data assets. (Some data assets could also be stored in other places.)

Publishers must run [Provider](https://github.com/oceanprotocol/provider) to mediate consumer access to data assets stored in Azure Storage. Provider needs the following Azure credentials from the publisher:

- `AZURE_ACCOUNT_NAME`: Azure Storage Account Name (for storing files)
- `AZURE_ACCOUNT_KEY`: Azure Storage Account key
- `AZURE_RESOURCE_GROUP`: Azure resource group
- `AZURE_LOCATION`: Azure Region
- `AZURE_CLIENT_ID`: Azure Application ID
- `AZURE_CLIENT_SECRET`: Azure Application Secret
- `AZURE_TENANT_ID`: Azure Tenant ID
- `AZURE_SUBSCRIPTION_ID`: Azure Subscription ID

If you go through this tutorial, then you will get all the Azure credentials listed above.

If you already have data assets stored in Azure, then you might already have, or be able to get, the above information. You could use this tutorial to get a sense of where to look (but don't create anything new).

To give the above Azure credentials to Provider, you either put them in a Provider config file or in environment variables with the above names. Environment variables should be used if you're running Provider inside a container. If you want to use the config file option, see [Provider README](https://github.com/oceanprotocol/provider).

If you're using [Barge](https://github.com/oceanprotocol/barge) to run Provider and other Ocean Protocol components, then the above Azure credentials should go in the file `barge/provider.env`. (That file gets used to set environment variables.)

This tutorial uses the [Microsoft Azure Portal](https://azure.microsoft.com/en-us/features/azure-portal/), but [there are many other ways to interact with Azure](https://docs.microsoft.com/en-us/azure/#pivot=sdkstools).

**Note: Azure is constantly changing. For that reason, we give try to give links to official Azure documentation, since it _should_ stay up-to-date.**

## Sign in to Azure Portal

If you don't already have an Azure account, then you will have to create one. Go to the [Microsoft Azure website](https://azure.microsoft.com) and follow the links.

Once you have an Azure account, go to [https://portal.azure.com/](https://portal.azure.com/) and sign in.

## Get Your Subscription ID

The [Azure docs say](https://docs.microsoft.com/en-us/azure/guides/developer/azure-developer-guide), "A subscription is a logical grouping of Azure services that is linked to an Azure account. A single Azure account can contain multiple subscriptions."

If you see **Subscriptions** in the left sidebar of Azure Portal, then click that. If you don't see it, just type "Subscriptinos" into the search bar at the top, then click on **Subscriptions** under the SERVICES heading.

You should see a list of one or more subscriptions. Click on the one you want to use for Azure storage. Remember to use that one for the rest of this tutorial (whenever you are asked for a subscription name).

Copy the `Subscription ID`. That's what Provider calls `AZURE_SUBSCRIPTION_ID`. You now have one of the Azure credentials!

```text
# Example AZURE_SUBSCRIPTION_ID (Azure Subscription ID)
479284be-0104-421a-8488-1aeac0caecaa
```

## Create an Azure Active Directory (AD) Application

See the Azure docs page:

[How to: Use the portal to create an Azure AD application and service principal that can access resources](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal)

The first step there is to **Create an Azure Active Directory application**. Do that.

The app `Name` and `Sign-on URL` can be totally made up. The URL doesn't need to be real.

Once the app is created, copy the `Application ID`: that's what Provider calls the `AZURE_CLIENT_ID`. It should look something like this:

```text
# Example AZURE_CLIENT_ID (Application ID)
5d25ee8a-da2c-4e6f-8fba-09b6dd091038
```

## Get Authentication Key for Your AD Application

On [the same Azure docs page](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal), find the section titled **Get application ID and authentication key** or similar. You already have your application ID, but you still need generate an authentication key by following the instructions in that section.

You can make up whatever you like for the key's `Description`.

Once the application key is generated, copy its value: that's what Provider calls the `AZURE_CLIENT_SECRET`. It should look something like this:

```text
# Example AZURE_CLIENT_SECRET (Application key)
RVJ1H5gYOmnMitikmM5ehszqmgrY5BFkoalnjfWMuDM
```

## Get Tenant ID

On [the same Azure docs page](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal), find the section titled **Get tenant ID** or similar. Follow the instructions.

The tenant ID is what Provider calls `AZURE_TENANT_ID`.

```text
# Example AZURE_TENANT_ID (tenant ID, Directory ID)
2a4a3887-4e2e-4a31-8006-6e2b5877640e
```

## Create a Resource Group for Your Data Storage

See the Azure docs page:

[Manage Azure resources through portal](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-portal)

That page says how to create a new empty resource group. Do that.
You can make up whatever name you like, but it's good practice to avoid special characters and to include:

- some words to indicate what it's for, e.g. `Storage`
- your name
- the month and year it was created, e.g. `Nov2018`

to help you and others manage it. The Resource group name is what Provider calls the `AZURE_RESOURCE_GROUP` and the Resource group location is what Provider calls the `AZURE_LOCATION`. Here are examples of both:

```text
# Example AZURE_RESOURCE_GROUP (Resource group name)
StorageCreatedNov2018ByTroy
```

```text
# Example AZURE_LOCATION (Resource group location)
West Europe
```

## Give Your AD Application Access to Your Resource Group

Inside your new resource group:

- click **Access control (IAM)**
- click **+ Add role assignment**
- In the `Role` field, select `Contributor`. See the note below.
- Assign access to `Azure AD user, group, or service principal`
- In the `Select` field, begin entering the name of your AD application (created earlier). When it appears in the list, click on it there. It should now be listed as one of the "Selected members".
- Click **Save**

Note: You might want to give your application fewer permissions than what a `Contributor` role gets. The Azure docs have [a list of all the built-in roles for Azure resources](https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles).

## Create a Storage Account

Follow the instructions in the Azure docs page:

[Create a storage account](https://docs.microsoft.com/en-us/azure/storage/common/storage-quickstart-create-account?tabs=portal)

except you should use the _existing_ resource group you created earlier, i.e. don't create a new one.

The Storage account name you choose is what Provider calls the `AZURE_ACCOUNT_NAME`.

```text
# Example AZURE_ACCOUNT_NAME (Storage account name)
troystorageaccount1
```

Use the same `Location` as your resource group.
The other fields can be left with their default values unless you want to change them.

Wait for it to say, "Your deployment is complete."

## Get a Storage Account Access Key

See the Azure docs page:

[Manage storage account settings in the Azure portal](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-manage)

Go to the subsection about access keys and follow the instructions to view your new storage account's credentials.
Copy the value of one of the keys (e.g. key1, not the connection string). That's what Provider calls `AZURE_ACCOUNT_KEY`.

```text
# Example AZURE_ACCOUNT_KEY (Storage account access key)
93uKDkbjfnSUNPKw2tpe0LOM+3Wk+OSkNmgwhzjvzDw1d3sKVhMRTC5ikvN0r3zsx8eQrmT9Wgjz22iLPu3aGw==
```

You now have all the Azure credentials Provider needs. See the instructions near the top of this page about how to give those Azure credentials to Provider.

## Store Some Data in Azure Storage

You now have a storage account, but you don't have any data stored under it yet. To get some data stored in [Azure Storage](https://docs.microsoft.com/en-us/azure/storage/common/storage-introduction), the easiest option is to use [Azure Storage Explorer](https://azure.microsoft.com/en-us/features/storage-explorer/), a free desktop app that works on Windows, macOS and Linux.

[Get Azure Storage Explorer](https://azure.microsoft.com/en-us/features/storage-explorer/).

Azure Storage can store blobs, files, queues and tables. To work with Ocean Network, you should store your files in [Azure Blob storage (also called object storage)](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction), not Azure Files.

Besides Azure Storage Explorer, there are [many other Azure Storage APIs, libraries and tools](https://docs.microsoft.com/en-us/azure/storage/common/storage-introduction#storage-apis-libraries-and-tools).

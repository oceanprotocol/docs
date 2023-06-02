---
description: >-
  The following tutorial shows how to create a server ready for hosting Ocean
  Protocol's components.
---

# Setup a Server

Now that you know the components of the Ocean Protocol stack and what each does, it's time to learn how to deploy these components in your environment. The deployment of each component starts with setting up a server on which the component will be installed, either on-premise or hosted in a cloud platform.&#x20;

## Prerequisites

All Ocean Protocol components (Provider, Aquarius, Subgraph) are designed to run in Docker containers on a Linux operating system. We rely on Docker Engine and Docker Compose to deploy and run our components, so when you set up your server, select a Linux operating system supported by these two products. Please refer to these links for choosing a compatible operating system:

* [Docker Engine supported platforms](https://docs.docker.com/engine/install/)&#x20;
* [Docker Compose supported platforms](https://docs.docker.com/desktop/install/linux-install/)

## Server Size

The required CPU and memory for the server depend on the number of requests the component is expected to serve, however, the minimum configuration of the server is:

* 1 core
* 1 GB RAM

## Steps

The steps for setting up a server on which to deploy the Ocean components are the following:

1. Install the operating system
2. Install Docker and Docker Compose



### Install the operating system

As mentioned earlier, you can use either an on-premise server or one hosted in the cloud (AWS, Azure, Digitalocean, etc.). To install the operating system on an on-premise server, please refer to the installation documentation of the operating system.

If you choose to use a server hosted in the cloud, you need to create the server using the user interface provided by the cloud platform. Following is an example of how to create a server in Digitalocean.&#x20;

#### Example: Creating an Ubuntu Linux server in the Digitalocean cloud

1. Creating account and setting billing

Go to [https://www.digitalocean.com/](https://www.digitalocean.com/) and create an account. Provide the appropriate information for billing and accounting.



2. Create a server

Click on **`Create`** button and choose **`Droplets`** options from dropdown.

<figure><img src="../.gitbook/assets/image (1).png" alt=""><figcaption><p>Select Droplet</p></figcaption></figure>



3. Select a server configuration

Select Ubuntu OS, and choose a plan and a configuration.

<figure><img src="../.gitbook/assets/image (2).png" alt=""><figcaption><p>Configure the server</p></figcaption></figure>

###

4. Select the region and set the root password

Select the region where you want the component to be hosted and a root password.

<figure><img src="../.gitbook/assets/image (6).png" alt=""><figcaption><p>Select the region and set the root password</p></figcaption></figure>



5. Finish the configuration and create the server

Specify a hostname for the server, specify the project to which you assign the server and then click on `Create Droplet.`&#x20;

<figure><img src="../.gitbook/assets/image (5).png" alt=""><figcaption><p>Finalize and create the server</p></figcaption></figure>



6. Access the server's console

After the server is ready, select the `Access console` option from the dropdown list to open a terminal window.

<figure><img src="../.gitbook/assets/image.png" alt=""><figcaption><p>Access the server's console</p></figcaption></figure>

### Install Docker and Docker Compose

From the terminal window, run the following commands to install Docker and Docker Compose.

```
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg lsb-release
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Now install docker-compose
sudo apt-get update
sudo apt-get install docker-compose-plugin
```

Now that the server is prepared and the prerequisites installed, we can proceed to deploying the Ocean's components.



<<<< old documentation>>>

##

## **Using hosting services**

Ocean Protocol's components can be hosted on any infrastructure providers like AWS, Azure, Heroku, Digitalocean, and many others. The tutorial here explains how to create a server using Digitalocean and installing docker which will be required to host Ocean Protocol's components. Apart from steps for create a server, the remaining part of the tutorial will be same for all hosting providers.

#### Creating account and setting billing

Go to [https://www.digitalocean.com/](https://www.digitalocean.com/) and create an account. Provide the appropriate information for billing and accounting.

#### Create a droplet

Click on **`Create`** button and choose **`Droplets`** options from dropdown.

![Server Setup](../.gitbook/assets/server-setup/server-setup1.png)

#### Configure droplet

Select Ubuntu OS and choose a plan. The required CPU and Memory depends on the number of requests Aquarius is expected to serve.

![Configure droplet](../.gitbook/assets/server-setup/server-setup2.png)

Also, select the region where you want Aquarius to be hosted and a root password.

![Select region](<../.gitbook/assets/server-setup/server-setup3 (1).png>)

![Click create Droplet](../.gitbook/assets/server-setup/server-setup4.png)

Finalize the parameters for the server, click on `Create Droplet.` After the server is ready, select the `Access console` option from the dropdown.

![Click access console](../.gitbook/assets/server-setup/server-setup5.png)

![Click launch Droplet console](../.gitbook/assets/server-setup/server-setup6.png)

A window will open with a terminal session. Now, the required infrastructure is ready for hosting Aquarius, Provider or the Subgraph. Let's install docker and docker-compose on the server. Follow the installation guide [here](https://docs.docker.com/engine/install/ubuntu/).

The below commands shows the commands executed by following the guide.

```bash
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg lsb-release
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Now install docker-compose
sudo apt-get update
sudo apt-get install docker-compose-plugin
```

Now that, the server is ready with all the required dependencies are installed for hosting Ocean Components, follow the instructions given in Component specific guide.

* [Deploying Marketplace](deploying-marketplace.md)
* [Deploying Aquarius](deploying-aquarius.md)

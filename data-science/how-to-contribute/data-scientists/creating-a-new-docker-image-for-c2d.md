# Creating a new docker image for C2D

Docker is widely used to run containerized applications with Ocean Compute-to-Data. Ocean Compute-to-Data allows computations to be brought to the data, preserving data privacy, and enabling the use of private data without exposing it. Docker is a crucial part of this infrastructure, allowing applications to run in a secure, isolated manner.



The best way to sell access to models using C2D is by creating a docker image. Docker is an open-source platform designed to automate the deployment, scaling, and management of applications. It uses containerization technology to bundle up an application along with all of its related configuration files, libraries, and dependencies into a single package. This means your applications can run uniformly and consistently on any infrastructure. Docker helps solve the problem of "it works on my machine" by providing a consistent environment from development to production.



Main Value:

* Consistency across multiple development and release cycles, ensuring that your application (and its full environment) can be replicated and reliably moved from one environment to another.
* Rapid deployment of applications. Docker containers are lightweight, featuring fast startup times as they don't include the unnecessary binaries and libraries of full-fledged virtual machines.
* Isolation of applications and resources, allowing for safe testing and effective use of system resources.



**Step by Step Guide to Creating a Docker Image**

1.  **Install Docker**

    First, you need to install Docker on your machine. Visit Docker's official website for installation instructions based on your operating system.

    * [Docker for Windows](https://docs.docker.com/desktop/windows/install/)
    * [Docker for Mac](https://docs.docker.com/desktop/mac/install/)
    * [Docker for Linux](https://docs.docker.com/engine/install/)
2.  **Write a Dockerfile**

    Docker images are created using Dockerfiles. A Dockerfile is a text document that contains all the commands needed to assemble an image. Create a new file in your project directory named `Dockerfile` (no file extension).
3.  **Configure Your Dockerfile**

    Here is a basic example of what a Dockerfile might look like for a simple Python Flask application:

    ```bash
    bashCopy code# Use an official Python runtime as a parent image
    FROM python:3.7-slim

    # Set the working directory in the container to /app
    WORKDIR /app

    # Add the current directory contents into the container at /app
    ADD . /app

    # Install any needed packages specified in requirements.txt
    RUN pip install --no-cache-dir -r requirements.txt

    # Make port 80 available to the world outside this container
    EXPOSE 80

    # Define environment variable
    ENV NAME World

    # Run app.py when the container launches
    CMD ["python", "app.py"]
    ```

    For a more detailed explanation of Dockerfile instructions, check the [Docker documentation](https://docs.docker.com/engine/reference/builder/).
4.  **Build the Docker Image**

    Navigate to the directory that houses your Dockerfile in the terminal. Build your Docker image using the `docker build` command. The `-t` flag lets you tag your image so it's easier to find later.

    ```shell
    shellCopy codedocker build -t friendlyhello .
    ```

    The `.` tells the Docker daemon to look for the Dockerfile in your current directory.
5.  **Verify Your Docker Image**

    Use the `docker images` command to verify that your image was created correctly.

    ```shell
    shellCopy codedocker images
    ```
6.  **Run a Container from Your Image**

    Now you can run a Docker container based on your new image:

    ```shell
    shellCopy codedocker run -p 4000:80 friendlyhello
    ```

    The `-p` flag maps the port on your machine to the port on the Docker container.

You've just created and run your first Docker image! For more in-depth information about Docker and its various uses, refer to the [official Docker documentation](https://docs.docker.com/).

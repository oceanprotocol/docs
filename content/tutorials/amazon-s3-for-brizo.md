---
title: Set Up Amazon S3 Storage
description: Tutorial about how to set up Amazon S3 storage for use with Ocean Protocol.
---

To enable Brizo to use files stored in Amazon S3 (i.e. files with an URL containing "s3://"), you must:

1. have an Amazon AWS user account (IAM account) with permission to read those files from S3, and
1. set the AWS credentials on the machine where Brizo is running to those of the AWS user in question. Instructions are given below.
1. Note that you don't have to set any Brizo-specific configuration settings, e.g. in the `[osmosis]` section of the Brizo config file or in some special Brizo environment variables.

Under the hood, Brizo uses [boto3](https://aws.amazon.com/sdk-for-python/) (the Python library for interacting with AWS) to interact with AWS and boto3 has a whole process for determining AWS credentials. The easiest way to set the AWS credentials on the machine where Brizo is running is to install the [AWS CLI](https://aws.amazon.com/cli/) and then use the `aws configure` command. For more details, see [the boto3 user guide about credentials](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/configuration.html).

---
title: Set Up On-Premise Storage
description: Tutorial about how to set up on-premise storage for use with Ocean.
---
*Note: This needs updating for Ocean V3.*

To enable Provider to use files stored in on-premise storage (i.e. files with an URL not containing `core.windows.net` or `s3://`), there is _nothing to do, other than make sure Provider can resolve the URLs_. In particular, you don't have to set any Provider-specific configuration settings, e.g. in the `[osmosis]` section of the Provider config file or in some special Provider environment variables.

Local and private network URLs are fine so long as they can be resolved by Provider. Potential examples include `http://localhost/helicopter_data.xls`, `http://192.168.12.34/almond_sales_2012.csv` and `http://10.12.34.56/duck_photos.zip`.

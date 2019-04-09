---
title: Aquarius API Reference Docs
description: Where to find the Aquarius API reference docs.
---

## Local Aquarius

If you have Aquarius running locally, you can find its API documentation at one of:

- [http://localhost:5000/api/v1/docs](http://localhost:5000/api/v1/docs)
- [http://127.0.0.1:5000/api/v1/docs](http://127.0.0.1:5000/api/v1/docs)
- [http://0.0.0.0:5000/api/v1/docs](http://0.0.0.0:5000/api/v1/docs)

If none of those work, then try `https` instead of `http`.

If your browser shows the Swagger header across the top but says "Failed to load spec." then we found that, in Chrome, if we went to [chrome://flags/#allow-insecure-localhost](chrome://flags/#allow-insecure-localhost) and toggled it to Enabled, then relaunched Chrome, it worked.

## Remote Aquarius

Every remote Aquarius instance has an Aquarius URL, and you can get the Swagger API spec (JSON file) by going to `{Aquarius URL}/spec`. For example, the Aquarius instance associated with the Nile Testnet has its Swagger API Spec at:

[https://nginx-aquarius.dev-ocean.com/spec](https://nginx-aquarius.dev-ocean.com/spec)

That spec file can then be given to [SwaggerHub](https://app.swaggerhub.com) to render human-readable API docs. For example, the docs rendered by SwaggerHub, as of 9 April 2019, could be found at:

[https://app.swaggerhub.com/apis-docs/Ocean-Protocol/aquarius/0.2.1](https://app.swaggerhub.com/apis-docs/Ocean-Protocol/aquarius/0.2.1)

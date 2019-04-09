---
title: Brizo API Reference Docs
description: Where to find the Brizo API reference docs.
---

## Local Brizo

If you have Brizo running locally, you can find its API documentation at one of:

- [http://localhost:5000/api/v1/docs](http://localhost:5000/api/v1/docs)
- [http://127.0.0.1:5000/api/v1/docs](http://127.0.0.1:5000/api/v1/docs)
- [http://0.0.0.0:5000/api/v1/docs](http://0.0.0.0:5000/api/v1/docs)

If none of those work, then try `https` instead of `http`.

If your browser shows the Swagger header across the top but says "Failed to load spec." then we found that, in Chrome, if we went to [chrome://flags/#allow-insecure-localhost](chrome://flags/#allow-insecure-localhost) and toggled it to Enabled, then relaunched Chrome, it worked.

## Remote Brizo

Every remote Brizo instance has a Brizo URL, and you can get the Swagger API spec (JSON file) by going to `{Brizo URL}/spec`. For example, the Brizo instance associated with the Nile Testnet has its Swagger API Spec at:

[https://nginx-brizo.dev-ocean.com/spec](https://nginx-brizo.dev-ocean.com/spec)

That spec file can then be given to [SwaggerHub](https://app.swaggerhub.com) to render human-readable API docs. For example, the docs rendered by SwaggerHub, as of 9 April 2019, could be found at:

[https://app.swaggerhub.com/apis-docs/Ocean-Protocol/brizo/0.3.4](https://app.swaggerhub.com/apis-docs/Ocean-Protocol/brizo/0.3.4)

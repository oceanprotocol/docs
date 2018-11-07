[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://oceanprotocol.com)

<h1 align="center">docs</h1>

> One site to rule all docs.

[![Build Status](https://travis-ci.com/oceanprotocol/docs.svg?branch=master)](https://travis-ci.com/oceanprotocol/docs)
[![js oceanprotocol](https://img.shields.io/badge/js-oceanprotocol-7b1173.svg)](https://github.com/oceanprotocol/eslint-config-oceanprotocol)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-7b1173.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/oceanprotocol/docs.svg)](https://greenkeeper.io/)

- [Content](#content)
    - [Editing docs](#editing-docs)
    - [Adding docs](#adding-docs)
- [Development](#development)
- [Authors](#authors)
- [License](#license)

## Content

...documentation concept...

The documentation is split in multiple parts whose content lives in this repo:

-   Core concepts: high-level explanation of concepts, assumptions, and components
-   Setup: getting started for various stakeholders and use cases
-   Tutorials: detailed tutorials

Additionally, these docs live in their respective repos and are pulled into this site on build time:

-   API reference
-   Component docs

### Editing docs

### Adding docs

## Development

The site is a React app built with [Gatsby](https://www.gatsbyjs.org), pulling its content from various sources.

To start development, clone this repo, install all dependencies, and start the development server:

```bash
git clone git@github.com:oceanprotocol/docs.git
cd docs/

npm i
npm start
```

This will start a hot-reloading local server exposed under [localhost:8000](http://localhost:8000).

## Authors

-   Troy McConaghy ([@ttmc](https://github.com/ttmc)) - [Ocean Protocol](https://oceanprotocol.com)
-   Matthias Kretschmann ([@kremalicious](https://github.com/kremalicious)) - [Ocean Protocol](https://oceanprotocol.com)

## License

```
Copyright 2018 Ocean Protocol Foundation Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

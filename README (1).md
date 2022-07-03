# README

[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://docs.oceanprotocol.com)

## docs

> 🐬 Ocean Protocol documentation. https://docs.oceanprotocol.com

[![Build Status](https://github.com/oceanprotocol/docs/workflows/CI/badge.svg)](https://github.com/oceanprotocol/docs/actions) [![Netlify Status](https://api.netlify.com/api/v1/badges/218e617e-45da-47ab-8f2a-bcfedf80550f/deploy-status)](https://app.netlify.com/sites/docs-oceanprotocol/deploys) [![Maintainability](https://api.codeclimate.com/v1/badges/d39837421591f0bc2550/maintainability)](https://codeclimate.com/github/oceanprotocol/docs/maintainability) [![js oceanprotocol](https://img.shields.io/badge/js-oceanprotocol-7b1173.svg)](https://github.com/oceanprotocol/eslint-config-oceanprotocol) [![css bigchaindb](https://img.shields.io/badge/css-bigchaindb-39BA91.svg)](https://github.com/bigchaindb/stylelint-config-bigchaindb)

***

**These docs are meant to be viewed on** [**docs.oceanprotocol.com**](https://docs.oceanprotocol.com)**. You can still browse them here but links or images might not work in some places.**

**If you want to contribute to these docs, then keep reading.**

***

* [Content](<README (1).md#content>)
* [Development](<README (1).md#development>)
* [Linting & Formatting](<README (1).md#linting--formatting>)
  * [Editor Setup: VS Code](<README (1).md#editor-setup-vs-code>)
* [⬆️ Deployment](<README (1).md#️-deployment>)
* [License](<README (1).md#license>)

### Content

To write or update content, refer to the documentation of the documentation:

* [**Documentation: Content →**](broken-reference)
* [**Documentation: API References →**](broken-reference)
* [**Documentation: GitHub Data Fetching →**](broken-reference)
* [**Documentation: Repository Component →**](broken-reference)

### Development

The site is a React app built with [Gatsby](https://www.gatsbyjs.org), pulling its content from local and external Markdown files, and from various APIs.

To start, clone this repo and set your `GITHUB_TOKEN` (see [GitHub GraphQL API](broken-reference)):

```bash
git clone git@github.com:oceanprotocol/docs.git
cd docs/

# add GITHUB_TOKEN
cp .env.sample .env
vi .env
```

Then install dependencies and start up the development server:

```bash
# use Node.js/npm version defined in .nvmrc
nvm use

npm i
npm start
```

Alternatively, you can use [Docker Compose](https://docs.docker.com/compose/) to do the same, but without using your local system:

```bash
docker-compose up
```

Either one of these commands will expose a hot-reloading server under:

* [localhost:8000](http://localhost:8000)
* [localhost:8000/\_\_\_graphql](http://localhost:8000/\_\_\_graphql)

### Linting & Formatting

To enforce a consistent code style, linting is setup for pretty much every file. Linting is part of the test suite, meaning builds on Travis will fail in case of linting errors.

In this repo the following tools are setup for that:

* ESLint with [eslint-config-oceanprotocol](https://github.com/oceanprotocol/eslint-config-oceanprotocol)
* [markdownlint](https://github.com/DavidAnson/markdownlint)
* [Prettier](https://prettier.io)

```bash
# only run linting checks
npm run lint

# auto-formatting of all js, css, md, yml files
npm run format
```

#### Editor Setup: VS Code

If you use VS Code as your editor, you can install those extensions to get linting as you type, and auto-formatting as you save:

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

### ⬆️ Deployment

Every branch or Pull Request is automatically deployed by [Netlify](https://netlify.com) with their GitHub integration. A link to a preview deployment will appear under each Pull Request.

The latest deployment of the `main` branch is automatically aliased to `docs.oceanprotocol.com`.

### License

```
Copyright ((C)) 2022 Ocean Protocol Foundation Ltd.

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

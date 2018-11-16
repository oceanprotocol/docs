[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://docs.oceanprotocol.com)

<h1 align="center">docs</h1>

> 🐍 Ocean Protocol's official documentation.

[![Build Status](https://travis-ci.com/oceanprotocol/docs.svg?token=3psqw6c8KMDqfdGQ2x6d&branch=master)](https://travis-ci.com/oceanprotocol/docs)
[![js oceanprotocol](https://img.shields.io/badge/js-oceanprotocol-7b1173.svg)](https://github.com/oceanprotocol/eslint-config-oceanprotocol)
[![css bigchaindb](https://img.shields.io/badge/css-bigchaindb-39BA91.svg)](https://github.com/bigchaindb/stylelint-config-bigchaindb)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-7b1173.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/oceanprotocol/docs.svg?token=2757ede2de02f4679c4dfc6597a331a26f2f206fed53bfeb708c64cbe3d5f55f&ts=1541590505792)](https://greenkeeper.io/)

---

**These docs are meant to be viewed on [docs.oceanprotocol.com](https://docs.oceanprotocol.com). You can still browse them here but links or images might not work in some places.**

**If you want to contribute to these docs, then keep reading.**

---

- [Content](#content)
  - [Content Files](#content-files)
    - [External Content Files](#external-content-files)
  - [Markdown File Requirements](#markdown-file-requirements)
  - [Adding Docs](#adding-docs)
  - [Editing Docs](#editing-docs)
  - [Repositories](#repositories)
- [Development](#development)
  - [Use Docker](#use-docker)
- [Linting & formatting](#linting--formatting)
  - [Editor setup: VS Code](#editor-setup-vs-code)
- [GitHub GraphQL API](#github-graphql-api)
- [Deployment](#deployment)
- [Authors](#authors)
- [License](#license)

## Content

The documentation is split in multiple sections whose content lives in this repo:

- **Core concepts**: high-level explanation of concepts, assumptions, and components
- **Setup**: getting started for various stakeholders and use cases
- **Tutorials**: detailed tutorials

Those sections are defined in the [`/data/sections.yml`](data/sections.yml) file.

### Content Files

Some content files live in the [`/content`](content/) & [`/data`](data/) folders, and is written using Markdown and YAML.

That content is organized into subfolders corresponding to the sections mentioned above. The subfolder names, along with the filenames, define the final URL of a given piece of content.

The final navigational organization of the content is driven through the sidebar files under [`/data/sidebars`](data/sidebars/).

Some global values used throughout the site can be set in [`config.js`](config.js).

#### External Content Files

Additionally, some content files live in other repositories and are maintained there. They are pulled into the site at build time.

At the moment, this is setup for the following repositories:

- [dev-ocean](https://github.com/oceanprotocol/dev-ocean)

For including a document from any of the above repositories, 4 values are required in a document's YAML frontmatter. If found, a page will be generated automatically, accessible under the defined `slug`.

This will NOT include this page in the doc's sidebar navigation, this needs to be done manually in the docs repo in one of the sidebar files. This is so you can check out everything before exposing it to visitors, and to ensure editorial workflow of the categorization.

TODO: In a later stage, we will include more documentation in this site, e.g.:

- API references
- Component docs
- Maybe more

### Markdown File Requirements

All Markdown files should use
[GitHub Flavored Markdown](https://help.github.com/articles/about-writing-and-formatting-on-github/) and must satisfy some extra requirements:

1. The file must begin with a section called YAML frontmatter that looks like this:

   ```md
   ---
   title: This is the Title in Title Case
   description: A short description of the page.
   ---

   Markdown content begins here.
   ```

   For external documents in other repos, defining the `slug` and `section` is required:

   ```md
   ---
   title: This is the Title in Title Case
   description: A short description of the page.
   slug: /concepts/architecture/
   section: concepts
   ---

   Markdown content begins here.
   ```

   Note: The `description` value will be rendered on-page below the title, and it will also be used for description tags in the HTML head.

2. Don't include the page title or description in the Markdown section. That is, don't begin the Markdown content with `# This is the Title in Title Case`. Just write as if that were already there.
3. start your heading levels with `h2`, so `## My heading`
4. Internal links to other docs pages should be:
   - to a absolute URL without the host, that looks like `/concepts/terminology/` with slashes on the beginning and end, and with no `.md` or `.html` at the end (before the last slash).
   - when linking from external repos, to the _full absolute URL_, such as `https://docs.oceanprotocol.com/hello/you-are-awesome/`
5. no TOC please, this will be generated automatically from all headings
6. for images and media, you can keep them in the original repo. Images will be automatically grabbed by the docs site on querying. When doing that, docs site will generate all sorts of image sizes to handle proper responsive images, so no need to keep an eye on image dimensions or file sizes

**Have a look at [docs.oceanprotocol.com/test/](https://docs.oceanprotocol.com/test/) to see what content elements can be used in all markdown files included in docs site.**

### Adding Docs

1. Add new Markdown file under one of the folders under [`/content`](content/)
2. Add new path to one of the sidebars in [`/data/sidebars`](data/sidebars/)
3. ...

### Editing Docs

Every article on [docs.oceanprotocol.com](https://docs.oceanprotocol.com) ends with an _Edit this page on GitHub_ link. Clicking that will put you to the right place in the repository from where you can hit the _Edit_ pencil icon on GitHub.

GitHub will automatically fork the repository if you are not part of the `oceanprotocol` organisation on GitHub. Members can simply push to a new branch on the original repo.

The editing workflow is as follows:

1. Make your changes
2. Push your changes to a new branch in the repo, or in your fork
3. Open a pull request against `master`, automatically asking for review
4. Wait for review, possibly make requested changes
5. Wait for all checks to pass
6. Merge!

### Repositories

The repositories list is currently sourced from the [`/data/repositories.yml`](data/repositories.yml) file, defining the grouping, the display order, and which repos to include.

Including a repo requires only the `name` key and value, and it needs to be exactly the same as the repo name on GitHub:

```yaml
- name: pleuston
```

Additional information about a repo will then be fetched automatically via [GitHub's GraphQL API](https://developer.github.com/v4/) on build time, and re-fetched every 5 minutes on client side. You can also add a private repo to prepare for a release, it will show up as soon as it is made public on GitHub.

The above example will result in:

<img width="547" alt="screen shot 2018-11-10 at 22 43 41" src="https://user-images.githubusercontent.com/90316/48306511-164fea00-e53a-11e8-97d6-c481ea087c7d.png">

This repository component can also be used within any Markdown content like so:

```html
<repo name="pleuston"></repo>
```

Additionally, you can attach multiple links to a repo. The GitHub link is automatically added for every repository and will always be displayed. Add more links like so:

```yaml
- name: keeper-contracts
  links:
    - name: Documentation
      url: https://github.com/oceanprotocol/keeper-contracts/tree/develop/doc
```

in [`/data/repositories.yml`](data/repositories.yml).

## Development

The site is a React app built with [Gatsby](https://www.gatsbyjs.org).

As a prerequisite you'll need on your machine:

- Node.js
- npm

Clone this repo, install all dependencies, and start the development server:

```bash
git clone --recursive git@github.com:oceanprotocol/docs.git
cd docs/

# add GITHUB_TOKEN
cp .env.sample .env
vi .env

npm i
npm start
```

For getting your `GITHUB_TOKEN`, see [GitHub GraphQL API](#github-graphql-api).

This will start a hot-reloading local server exposed under [localhost:8000](http://localhost:8000).

### Use Docker

Alternatively, you can use Docker for which you need to have installed on your machine:

- [Docker](https://www.docker.com)
- [Docker Compose](https://docs.docker.com/compose/)
- `GITHUB_TOKEN` in `.env`, see [GitHub GraphQL API](#github-graphql-api)

Then use Docker Compose to bring everything up:

```bash
docker-compose up
```

This will expose a hot-reloading server under [localhost:8000](http://localhost:8000).

## Linting & formatting

To enforce a consistent code style, linting is setup for pretty much every file. Linting is part of the test suite, meaning builds on Travis will fail in case of linting errors.

In this repo the following tools are setup for that:

- ESLint with [eslint-config-oceanprotocol](https://github.com/oceanprotocol/eslint-config-oceanprotocol)
- Stylelint with [stylelint-config-bigchaindb](https://github.com/bigchaindb/stylelint-config-bigchaindb)
- [markdownlint](https://github.com/DavidAnson/markdownlint)
- [Prettier](https://prettier.io)

```bash
# only run linting checks
npm run lint

# auto-formatting of all js, css, md, yml files
npm run format
```

### Editor setup: VS Code

If you use VS Code as your editor, you can install those extensions to get linting as you type, and auto-formatting as you save:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

## GitHub GraphQL API

The GitHub GraphQL API integration is done through [gatsby-source-graphql](https://www.gatsbyjs.org/packages/gatsby-source-graphql/) and requires authorization.

An environment variable `GITHUB_TOKEN` needs to present, filled with a [personal access token](https://github.com/settings/tokens) with the scope `public_repo`.

For local development, you can simply [create a personal access token](https://github.com/settings/tokens) and use it in your local .env file:

```bash
cp .env.sample .env
vi .env
# GITHUB_TOKEN=add_your_token_here
```

When running the site locally, you can use the GraphiQL client running under [localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql) to explore the whole GraphQL layer of the site (not just the GitHub infos).

<img width="982" alt="screen shot 2018-11-10 at 18 41 45" src="https://user-images.githubusercontent.com/90316/48304718-66b94e80-e51e-11e8-8333-e5cadbf4d4b8.png">

This query should get you started to explore what information you can get from GitHub:

```graphql
query {
  github {
    organization(login: "oceanprotocol") {
      repositories(first: 100) {
        edges {
          node {
            name
            description
            url
          }
        }
      }
    }
  }
}
```

## Deployment

Automatic deployments are triggered upon successful tests & builds on Travis:

- push to `master` initiates a live deployment
  -> [docs.oceanprotocol.com](https://docs.oceanprotocol.com)
- any Pull Request, and subsequent pushes to it, initiates a beta deployment
  -> [betadocs.oceanprotocol.com](https://betadocs.oceanprotocol.com)

The deploy command simply calls the [`scripts/deploy.sh`](scripts/deploy.sh) script, syncing the contents of the `public/` folder to S3:

```bash
npm run deploy
```

Requires authorization against AWS with [one of the various ways](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html), on Travis this is done with those environment variables:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_DEFAULT_REGION`

## Authors

- Troy McConaghy ([@ttmc](https://github.com/ttmc)) - [Ocean Protocol](https://oceanprotocol.com)
- Matthias Kretschmann ([@kremalicious](https://github.com/kremalicious)) - [Ocean Protocol](https://oceanprotocol.com)

## License

```text
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

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

**If you want to contribute to those docs, then [read on here](#content).**

---

- [Content](#content)
    - [Content files](#content-files)
    - [Editing docs](#editing-docs)
    - [Adding docs](#adding-docs)
    - [Repositories](#repositories)
- [Development](#development)
    - [Use Docker](#use-docker)
- [GitHub GraphQL API](#github-graphql-api)
- [Authors](#authors)
- [License](#license)

## Content

The documentation is split in multiple sections whose content lives in this repo:

-   **Core concepts**: high-level explanation of concepts, assumptions, and components
-   **Setup**: getting started for various stakeholders and use cases
-   **Tutorials**: detailed tutorials

Those sections are defined in the [`/data/sections.yml`](data/sections.yml) file.

### Content files

All content lives in the [`/content`](content/) & [`/data`](data/) folders utilizing GitHub Flavored Markdown and YAML. Content is organized through subfolders corresponding to the sections mentioned above. Those subfolder names, along with the file name, define the final url of a given piece of content.

The final navigational organisation of the content is driven through the sidebar files under [`/data/sidebars`](data/sidebars/). Some global values used throughout the site can be set in [`config.js`](config.js).

Have a look at [docs.oceanprotocol.com/test/](https://docs.oceanprotocol.com/test/) to see what content elements can be used in the docs.

TODO: Additionally, these docs live in their respective repos and are pulled into this site on build time:

-   API references
-   Component docs

### Editing docs

Every article on [docs.oceanprotocol.com](https://docs.oceanprotocol.com) ends with an _Edit this page on GitHub_ link. Clicking that will put you to the right place in the repository from where you can hit the _Edit_ pencil icon on GitHub.

GitHub will automatically fork the repository if you are not part of the `oceanprotocol` organisation on GitHub. Members can simply push to a new branch on the original repo.

The editing workflow is as follows:

1. Make your changes
2. Push your changes to a new branch in the repo, or in your fork
3. Open a pull request against `master`, automatically asking for review
4. Wait for review, possibly make requested changes
5. Wait for all checks to pass
6. Merge!

### Adding docs

1. Add new Markdown file under one of the folders under [`/content`](content/)
2. Add new path to one of the sidebars in [`/data/sidebars`](data/sidebars/)
3. ...

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

```
<repo name="pleuston"></repo>
```

Additionally, you can attach multiple links to a repo. The GitHub link is automatically added for every repository and will always be displayed. Add more links like so:

```yaml
- name: keeper-contracts
  links:
      - name: Documentation
        url: https://github.com/oceanprotocol/keeper-contracts/tree/develop/doc
```

-   [`/data/repositories.yml`](data/repositories.yml)

## Development

The site is a React app built with [Gatsby](https://www.gatsbyjs.org), pulling its content from various sources.

As a prerequisite you'll need on your machine:

-   Node.js
-   npm

Clone this repo, install all dependencies, and start the development server:

```bash
git clone git@github.com:oceanprotocol/docs.git
cd docs/

# add GITHUB_TOKEN
cp .env.sample .env
vi .env

npm i
npm start
```

For getting your `GITHUB_TOKEN`, see [GitHub GraphQL API](#github-graphql-api)

This will start a hot-reloading local server exposed under [localhost:8000](http://localhost:8000).

### Use Docker

Alternatively, you can use Docker for which you need to have installed on your machine:

-   [Docker](https://www.docker.com)
-   [Docker Compose](https://docs.docker.com/compose/)
-   `GITHUB_TOKEN` in `.env`, see [GitHub GraphQL API](#github-graphql-api)

Then use Compose to bring everything up:

```bash
docker-compose up
```

This will expose a hot-reloading server under [localhost:8000](http://localhost:8000).

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

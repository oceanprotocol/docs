[![banner](https://raw.githubusercontent.com/oceanprotocol/art/master/github/repo-banner%402x.png)](https://docs.oceanprotocol.com)

<h1 align="center">docs</h1>

> 🐍 Ocean Protocol's official documentation.

[![Build Status](https://travis-ci.com/oceanprotocol/docs.svg?token=3psqw6c8KMDqfdGQ2x6d&branch=master)](https://travis-ci.com/oceanprotocol/docs)
[![js oceanprotocol](https://img.shields.io/badge/js-oceanprotocol-7b1173.svg)](https://github.com/oceanprotocol/eslint-config-oceanprotocol)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-7b1173.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/oceanprotocol/docs.svg?token=2757ede2de02f4679c4dfc6597a331a26f2f206fed53bfeb708c64cbe3d5f55f&ts=1541590505792)](https://greenkeeper.io/)

---

**These docs are meant to be viewed on [docs.oceanprotocol.com](https://docs.oceanprotocol.com). You can still browse them here but links or images might not work in some places.**

---

- [Content](#content)
    - [Sections](#sections)
    - [Editing docs](#editing-docs)
    - [Adding docs](#adding-docs)
    - [Repositories](#repositories)
- [Development](#development)
    - [Use Docker](#use-docker)
- [Authors](#authors)
- [License](#license)

## Content

All content lives in the [`/content`](content/) & [`/data`](data/) folders utilizing GitHub Flavored Markdown and YAML. Content is organized into the above mentioned categories through subfolders. Those subfolder names, along with the file name, define the final url of a given piece of content.

The final navigational organisation of the content is driven through the sidebar files under [`/data/sidebars`](data/sidebars/).

Have a look at [docs.oceanprotocol.com/test/](https://docs.oceanprotocol.com/test/) to see what content elements can be used in the docs.

### Sections

The documentation is split in multiple sections whose content lives in this repo:

-   Core concepts: high-level explanation of concepts, assumptions, and components
-   Setup: getting started for various stakeholders and use cases
-   Tutorials: detailed tutorials

Those sections and their copy are defined in the [`/data/sections.yml`](data/sections.yml) file.

TODO: Additionally, these docs live in their respective repos and are pulled into this site on build time:

-   API reference
-   Component docs

### Editing docs

Every article on [docs.oceanprotocol.com](https://docs.oceanprotocol.com) ends with an _Edit this page on GitHub_ link. Clicking that will put you to the right place in the repository from where you can hit the _Edit_ pencil icon.

GitHub will automatically fork the repository if you are not part of the `oceanprotocol` organisation on GitHub. Members can simply push to a new branch on the original repo.

The editing workflow is as follows:

1. Make your changes
2. Push your changes to a new branch in the repo, or in your fork
3. Open a pull request against `master`, automatically asking for review
4. Wait for review, possibly make request changes
5. Wait for all checks to pass
6. Merge!

### Adding docs

...

### Repositories

The repositories list is currently sourced from the [`/data/repositories.yml`](data/repositories.yml) file. The GitHub link is auto generated from the given repository name and will always be added by default.

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

npm i
npm start
```

This will start a hot-reloading local server exposed under [localhost:8000](http://localhost:8000).

### Use Docker

Alternatively, you can use Docker for which you need to have installed on your machine:

-   [Docker](https://www.docker.com)
-   [Docker Compose](https://docs.docker.com/compose/)

Then use Compose to bring everything up:

```bash
docker-compose up
```

This will expose a hot-reloading server under [localhost:8000](http://localhost:8000).

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

# Repository Component

- [Overview](#overview)
- [Add Links to a Repository](#add-links-to-a-repository)
- [Version Numbers](#version-numbers)

## Overview

Includes a repository component which can be used throughout the site and in all Markdown documents.

On the front page it is used to show an overview of all our key repositories. This repositories list is sourced from the [`/data/repositories.yml`](../data/repositories.yml) file, defining the grouping, the display order, which repos to include, and what additional links to show for every repository.

Including a repo on the front page requires only the `name` key and value, and it needs to be exactly the same as the repo name on GitHub:

```yaml
- name: pleuston
```

Additional information about a repo will then be [fetched automatically from GitHub](github.md). The above example will result in:

<img width="547" alt="screen shot 2018-11-10 at 22 43 41" src="https://user-images.githubusercontent.com/90316/48306511-164fea00-e53a-11e8-97d6-c481ea087c7d.png">

This repository component can also be used within any Markdown content like so:

```html
<repo name="ocean.js"></repo>
```

You can also add a private repo to prepare for a release, it will show up as soon as it is made public on GitHub.

## Add Links to a Repository

You can attach multiple links to a repo by attaching them to the respective repo in the [`/data/repositories.yml`](../data/repositories.yml) file:

```yaml
- name: ocean-contracts
  links:
    - name: Documentation
      url: https://github.com/oceanprotocol/ocean-contracts/tree/develop/doc
```

The GitHub link is automatically added for every repository and will always be displayed.

## Version Numbers

The displayed version number is based on the tag name of the latest release for a given repository. That means only GitHub releases will trigger a version number update, creating a new Git tag alone is not sufficient.

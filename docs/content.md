# Content

- [Overview](#overview)
- [External Content Files](#external-content-files)
- [Workflow](#workflow)
  - [Adding Docs](#adding-docs)
  - [Editing Docs](#editing-docs)
- [Markdown File Requirements](#markdown-file-requirements)

## Overview

The documentation is split in multiple sections whose content lives in this repo:

- **Core concepts**: high-level explanation of concepts, assumptions, and components
- **Setup**: getting started for various stakeholders and use cases
- **Tutorials**: detailed tutorials
- **API References**: docs for ocean.js, ocean.py, Aquarius REST API, and Provider REST API

Those sections are defined in the [`/data/sections.yml`](../data/sections.yml) file.

Most content lives in the [`/content`](../content/) & [`/data`](../data/) folders, and are written using Markdown and YAML.

That content is organized into subfolders corresponding to the sections mentioned above. The subfolder names, along with the filenames, define the final URL of a given piece of content.

The final navigational organization of the content is driven through the sidebar files under [`/data/sidebars`](../data/sidebars/).

Some global values used throughout the site can be set in [`config.js`](../config.js).

## External Content Files

Additionally, some content files live in other repositories and are maintained there. They are pulled into Gatsby's data layer at build time, and pages are created automatically for them as defined in [gatsby-node.js](../gatsby-node.js).

At the moment, this is set up for the following repositories:

- [dev-ocean](https://github.com/oceanprotocol/dev-ocean)

For including a document from any of the above repositories, 4 values are required in a document's YAML frontmatter. If found, a page will be generated automatically, accessible under the defined `slug`.

This will NOT include this page in the doc's sidebar navigation, this needs to be done manually in the docs repo in one of the sidebar files. This is so you can check out everything before exposing it to visitors, and to ensure editorial workflow of the categorization.

## Workflow

### Adding Docs

1. Add new Markdown file under one of the folders under [`/content`](../content/)
1. Add new path to one of the sidebars in [`/data/sidebars`](../data/sidebars/)
1. Push your changes to a new branch in the repo, or in your fork
1. Open a pull request against `main`, automatically asking for review
1. Wait for review, possibly make requested changes
1. Wait for all checks to pass
1. Merge!

### Editing Docs

Every article on [docs.oceanprotocol.com](https://docs.oceanprotocol.com) ends with an _Edit this page on GitHub_ link. Clicking that will put you to the right place in the repository from where you can hit the _Edit_ pencil icon on GitHub.

GitHub will automatically fork the repository if you are not part of the `oceanprotocol` organization on GitHub. Members can simply push to a new branch on the original repo.

The editing workflow is as follows:

1. Make your changes
1. Push your changes to a new branch in the repo, or in your fork
1. Open a pull request against `main`, automatically asking for review
1. Wait for review, possibly make requested changes
1. Wait for all checks to pass
1. Merge!

## Markdown File Requirements

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

1. Don't include the page title or description in the Markdown section. That is, don't begin the Markdown content with `# This is the Title in Title Case`. Just write as if that were already there.
2. start your heading levels with `h2`, so `## My heading`
3. Internal links to other docs pages should be:
   - to a absolute URL without the host, that looks like `/concepts/introduction/` with slashes on the beginning and end, and with no `.md` or `.html` at the end (before the last slash).
   - when linking from external repos, to the _full absolute URL_, such as `https://docs.oceanprotocol.com/hello/you-are-awesome/`
4. no TOC please, this will be generated automatically from all headings
5. for images and media, you can keep them in the original repo. Images will be automatically grabbed by the docs site on querying. When doing that, docs site will generate all sorts of image sizes to handle proper responsive images, so no need to keep an eye on image dimensions or file sizes

**Have a look at [docs.oceanprotocol.com/test/](https://docs.oceanprotocol.com/test/) to see what content elements can be used in all Markdown files included in docs site.**

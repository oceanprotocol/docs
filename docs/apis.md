# API References

- [Overview](#overview)
- [Swagger specs](#swagger-specs)
- [TypeDoc specs](#typedoc-specs)

## Overview

You can add Markdown documents under `/content/references/`, link to them from the [`/data/sidebars/references.yml`](../data/sidebars/references.yml), and they will appear just like in all the other sections.

But the actual reference pages in this section are constructed from data files during site build (as defined in [`gatsby-node.js`](../gatsby-node.js)) with their own little rules. Generally, you can't edit their content within this site, you have to go to the respective repository and edit the documentation strings living with the source code.

The sidebar for those generated reference pages will automatically switch to include the table of contents of those pages so no need to define additional links in the [`/data/sidebars/references.yml`](../data/sidebars/references.yml) file for them.

## Swagger specs

Reference pages based on Swagger specs are sourced from remotely hosted Swagger specs:

- [`https://aquarius.test.oceanprotocol.com/spec`](https://aquarius.test.oceanprotocol.com/spec)
- [`https://provider.test.oceanprotocol.com/spec`](https://provider.test.oceanprotocol.com/spec)

They are fetched and updated automatically upon every site build. For more information about stylistic issues, take a look at the section in the test page:

- [Swagger spec references](https://docs.oceanprotocol.com/test#swagger-spec-references)

## TypeDoc specs

Reference pages based on generated `json` file from TypeDoc. On every site build, the spec files are fetched from GitHub release artifacts and pages are created from it. The data from these json files is then used by the TypeDoc template.

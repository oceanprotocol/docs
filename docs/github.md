# GitHub Data Fetching

- [Overview](#overview)
- [GitHub GraphQL API](#github-graphql-api)
- [GitHub REST API](#github-rest-api)

## Overview

Currently, there are three ways of getting data from GitHub to construct various parts of the docs site:

- as [external content files](content.md#external-content-files) via Git submodules of selected repos, on build time
- via GitHub's GraphQL API v4, on build time
- via GitHub's FETCH API v3, on run time

## GitHub GraphQL API

The GitHub GraphQL API integration is done through [gatsby-source-graphql](https://www.gatsbyjs.org/packages/gatsby-source-graphql/) and requires authorization.

An environment variable `GITHUB_TOKEN` needs to be present, filled with a [personal access token](https://github.com/settings/tokens) with the scope `public_repo`.

For local development, you can simply [create a personal access token](https://github.com/settings/tokens) and use it in your local .env file:

```bash
cp .env.sample .env
vi .env # GITHUB_TOKEN=add_your_token_here
```
An alternative to typing the above code is to just create a .env file and add this line `GITHUB_TOKEN=add_your_token_here` in it. Do not put your token in quotes.

Here's a guide on how to [create a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

When running the site locally, you can use the GraphiQL client running under [localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql) to explore the whole GraphQL layer of the site (not just the GitHub infos).

<img width="982" alt="screen shot 2018-11-10 at 18 41 45" src="https://user-images.githubusercontent.com/90316/48304718-66b94e80-e51e-11e8-8333-e5cadbf4d4b8.png">

This query should get you started to explore what information you can get from GitHub. All that is described in [GitHub GraphQL API](https://developer.github.com/v4/) can be used :

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

## GitHub REST API

The GitHub GraphQL API is only queried on build time, further GitHub updates on client side need to be done through additional fetch API calls. At the moment this is done for the [repositories component](repositories.md), where the stars and forks numbers are updated on client-side.

We use [github-projects](https://github.com/oceanprotocol/github-projects) for all communications with the [GitHub REST API v3](https://developer.github.com/v3/), deployed on [Now](https://zeit.co/now).

This microservice should be used for all client-side integrations for performance and security reasons, required changes in data structure should be done over there. This service does data refetching automatically, caches results for 15min, and it has access to a secret GitHub token for making authorized API calls.

As a next step, using the REST API could be made obsolete by using some GraphQL client like [Apollo](https://www.apollographql.com) to query GitHub's GraphQL API on run time too.

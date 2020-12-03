import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Numbers from './Numbers'
import Readme from './Readme'
import styles from './index.module.scss'
import Title from './Title'
import Links from './Links'

const queryGithub = graphql`
  query GitHubReposInfo {
    github {
      organization(login: "oceanprotocol") {
        repositories(first: 100, privacy: PUBLIC) {
          edges {
            node {
              name
              description
              url
              forkCount
              isFork
              parent {
                nameWithOwner
              }
              stargazers {
                totalCount
              }
              releases(
                first: 1
                orderBy: { field: CREATED_AT, direction: DESC }
              ) {
                edges {
                  node {
                    tag {
                      name
                    }
                  }
                }
              }
              object(expression: "main:README.md") {
                id
                ... on GitHub_Blob {
                  text
                }
              }
            }
          }
        }
      }
    }

    allRepositoriesYaml {
      edges {
        node {
          items {
            name
            links {
              name
              url
            }
          }
        }
      }
    }
  }
`

const Repository = ({ name, links, readme }) => (
  <StaticQuery
    query={queryGithub}
    render={(data) => {
      const repositoriesGitHub = data.github.organization.repositories.edges
      const repositoriesYaml = data.allRepositoriesYaml.edges

      // just iterate over all repos until we have a name match,
      // then return that repo, and then filter out all empty nodes
      const repoFilteredArray = repositoriesGitHub
        .map(({ node }) => {
          if (node.name === name) return node
        })
        .filter((n) => n)

      const repo = repoFilteredArray[0]

      // safeguard against more empty items,
      // e.g. when private repos are referenced in repositories.yml
      if (repo === undefined) return null

      const {
        url,
        description,
        forkCount,
        isFork,
        parent,
        stargazers,
        releases,
        object
      } = repo

      // enhance passed links array with what's in repositories.yml,
      // iterating over all repos until we have a name match
      const linksFilteredArray = []

      repositoriesYaml.map(({ node }) => {
        node.items.forEach((item) => {
          if (item.name === name) {
            linksFilteredArray.push(item.links)
          }
        })
      })

      const moreLinks = links || linksFilteredArray.filter((n) => n)[0]

      return (
        <article className={styles.repository}>
          <Title
            name={name}
            releases={releases}
            url={url}
            isFork={isFork}
            parent={parent}
          />

          <p>{!description ? '...' : description}</p>

          <footer className={styles.repositoryMeta}>
            <Links links={moreLinks} url={url} />
            <Numbers
              stargazers={stargazers}
              forkCount={forkCount}
              url={url}
              name={name}
            />
          </footer>

          {readme && <Readme object={object} />}
        </article>
      )
    }}
  />
)

Repository.propTypes = {
  name: PropTypes.string.isRequired,
  links: PropTypes.array,
  readme: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

export default Repository

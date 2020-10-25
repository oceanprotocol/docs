import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import RepositoryList from './RepositoryList'
import styles from './index.module.scss'

const query = graphql`
  query {
    allRepositoriesYaml {
      edges {
        node {
          id
          group
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

const Repositories = () => (
  <StaticQuery
    query={query}
    render={(data) => {
      const repositories = data.allRepositoriesYaml.edges

      return (
        <div className={styles.repositories}>
          <header>
            <h1 className={styles.repositoriesTitle}>Repositories</h1>
          </header>

          <RepositoryList repositories={repositories} />
        </div>
      )
    }}
  />
)

export default Repositories

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import RepositoryList from './RepositoryList'
import QuickRun from './QuickRun'
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
        render={data => {
            const repositories = data.allRepositoriesYaml.edges

            return (
                <div className={styles.repositories}>
                    <QuickRun name="docker-images" />
                    <RepositoryList repositories={repositories} />
                </div>
            )
        }}
    />
)

export default Repositories

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
        render={data => {
            const repositories = data.allRepositoriesYaml.edges

            return (
                <div className={styles.repositories}>
                    <header>
                        <h1 className={styles.repositoriesTitle}>
                            Repositories
                        </h1>
                        <p className={styles.repositoriesText}>
                            <strong>
                                Most of our repositories are open source and we
                                listed the key repositories here. Start with the{' '}
                                <Link to="/concepts/components/">
                                    software components
                                </Link>{' '}
                                document for an introduction to the components
                                found in a typical Ocean network.
                            </strong>
                        </p>
                    </header>

                    <RepositoryList repositories={repositories} />
                </div>
            )
        }}
    />
)

export default Repositories

import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import RepositoryList from './RepositoryList'
import styles from './index.module.scss'

const QuickRun = () => (
    <div className={styles.quickrun}>
        <strong>
            Wanna quickly get an Ocean network running on your machine? Check
            out{' '}
            <a href="https://github.com/oceanprotocol/docker-images">
                🐳 docker-images
            </a>
            .
        </strong>
    </div>
)

const Repositories = () => (
    <StaticQuery
        query={graphql`
            query {
                allRepositoriesYaml {
                    edges {
                        node {
                            id
                            group
                            items {
                                name
                                description
                                links {
                                    name
                                    url
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            const repositories = data.allRepositoriesYaml.edges

            return (
                <div className={styles.repositories}>
                    <QuickRun />
                    <RepositoryList repositories={repositories} />
                </div>
            )
        }}
    />
)

export default Repositories

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styles from './Repository.module.scss'

const queryGithub = graphql`
    query GitHubReposInfo {
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
`

const Repository = ({ name, links }) => (
    <StaticQuery
        query={queryGithub}
        render={data => {
            const repositoriesGitHub =
                data.github.organization.repositories.edges

            // just iterate over all repos until we have a name match,
            // then return that repo
            const repoFilteredArray = repositoriesGitHub
                .map(({ node }) => {
                    if (node.name === name) return node
                })
                .filter(el => el != null)

            const repo = Object.assign(...repoFilteredArray)

            return (
                <div className={styles.repository}>
                    <h1 className={styles.repositoryName}>{name}</h1>

                    <p>{!repo ? '...' : repo.description}</p>

                    <ul className={styles.repositoryLinks}>
                        <li>
                            <a href={repo.url}>GitHub</a>
                        </li>
                        {links &&
                            links.map(link => (
                                <li key={link.url}>
                                    <a href={link.url}>{link.name}</a>
                                </li>
                            ))}
                    </ul>
                </div>
            )
        }}
    />
)

Repository.propTypes = {
    name: PropTypes.string.isRequired,
    links: PropTypes.array
}

export default Repository

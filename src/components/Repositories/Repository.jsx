import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ReactComponent as Star } from '../../images/star.svg'
import { ReactComponent as Forks } from '../../images/forks.svg'
import styles from './Repository.module.scss'

const queryGithub = graphql`
    query GitHubReposInfo {
        github {
            organization(login: "oceanprotocol") {
                repositories(first: 100, privacy: PUBLIC, isFork: false) {
                    edges {
                        node {
                            name
                            description
                            url
                            forkCount
                            stargazers {
                                totalCount
                            }
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
            // then return that repo, and then filter out all empty nodes
            let repoFilteredArray = repositoriesGitHub
                .map(({ node }) => {
                    if (node.name === name) return node
                })
                .filter(n => n)

            const repo = repoFilteredArray[0]

            // safeguard against more empty items,
            // e.g. when private repos are referenced in repositories.yml
            if (repo === undefined) return null

            const { url, description, forkCount, stargazers } = repo

            return (
                <article className={styles.repository}>
                    <h1 className={styles.repositoryName}>{name}</h1>

                    <p>{!description ? '...' : description}</p>

                    <footer className={styles.repositoryMeta}>
                        <ul className={styles.repositoryLinks}>
                            <li>
                                <a href={url}>GitHub</a>
                            </li>
                            {links &&
                                links.map(link => (
                                    <li key={link.url}>
                                        <a href={link.url}>{link.name}</a>
                                    </li>
                                ))}
                        </ul>
                        <aside className={styles.repositorynumbers}>
                            <a href={`${url}/stargazers`}>
                                <Star /> <span>{stargazers.totalCount}</span>
                            </a>
                            {forkCount > 0 && (
                                <a href={`${url}/network`}>
                                    <Forks /> <span>{forkCount}</span>
                                </a>
                            )}
                        </aside>
                    </footer>
                </article>
            )
        }}
    />
)

Repository.propTypes = {
    name: PropTypes.string.isRequired,
    links: PropTypes.array
}

export default Repository

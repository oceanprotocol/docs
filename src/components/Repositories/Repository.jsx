import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import remark from 'remark'
import remarkReact from 'remark-react'
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
                            object(expression: "develop:README.md") {
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
    }
`

const Title = ({ name, releases, url }) => (
    <h1 className={styles.repositoryName}>
        {name}
        {releases.edges[0] && (
            <a
                href={`${url}/releases`}
                className={styles.repositoryRelease}
                title="Latest release"
            >
                {releases.edges[0].node.tag.name}
            </a>
        )}
    </h1>
)

Title.propTypes = {
    name: PropTypes.string.isRequired,
    releases: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired
}

const Links = ({ links, url }) => (
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
)

Links.propTypes = {
    links: PropTypes.array,
    url: PropTypes.string.isRequired
}

const Numbers = ({ stargazers, forkCount, url }) => (
    <aside className={styles.repositorynumbers}>
        <a href={`${url}/stargazers`} title="Show Stargazers">
            <Star /> <span>{stargazers.totalCount}</span>
        </a>
        {forkCount > 0 && (
            <a href={`${url}/network`} title="Show Forks">
                <Forks /> <span>{forkCount}</span>
            </a>
        )}
    </aside>
)

Numbers.propTypes = {
    stargazers: PropTypes.object.isRequired,
    forkCount: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
}

const Repository = ({ name, links, readme }) => (
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

            const {
                url,
                description,
                forkCount,
                stargazers,
                releases,
                object
            } = repo

            const readmeHtml = object
                ? remark()
                      .use(remarkReact)
                      .processSync(object.text).contents
                : null

            return (
                <article className={styles.repository}>
                    <Title name={name} releases={releases} url={url} />

                    <p>{!description ? '...' : description}</p>

                    <footer className={styles.repositoryMeta}>
                        <Links links={links} url={url} />
                        <Numbers
                            stargazers={stargazers}
                            forkCount={forkCount}
                            url={url}
                        />
                    </footer>

                    {readme && object && (
                        <aside className={styles.repositoryReadme}>
                            <h3 className={styles.repositoryReadmeTitle}>
                                README.md
                            </h3>
                            {readmeHtml}
                        </aside>
                    )}
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

import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import RepositoryList from './RepositoryList'
import styles from './index.module.scss'

const QuickRun = () => (
    <div className={styles.quickrun}>
        <strong className={styles.tldr}>TL;DR</strong>
        <strong>
            Wanna quickly get an Ocean network with all{' '}
            <Link to="/concepts/ecosystem/">core components</Link> running on
            your machine? Check out{' '}
            <a href="https://github.com/oceanprotocol/docker-images">
                🐳 docker-images
            </a>
            :
        </strong>
        <pre className="language-bash">
            <code className="language-bash">
                <span className="token function">git</span> clone
                https://github.com/oceanprotocol/docker-images.git
                <br />
                <span className="token function">cd</span> docker-images/
                <br />
                <br />
                ./start_ocean.sh --latest
            </code>
        </pre>
    </div>
)

const query = graphql`
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

        github {
            organization(login: "oceanprotocol") {
                repositories(first: 100) {
                    edges {
                        node {
                            id
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

const Repositories = () => (
    <StaticQuery
        query={query}
        render={data => {
            const repositories = data.allRepositoriesYaml.edges
            const repositoriesGitHub =
                data.github.organization.repositories.edges

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

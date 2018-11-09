import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { ReactComponent as Logo } from '@oceanprotocol/art/logo/logo-white.svg'
import styles from './Header.module.scss'

const Header = () => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }

                allSectionsYaml {
                    edges {
                        node {
                            title
                            description
                            link
                        }
                    }
                }
            }
        `}
        render={data => {
            const { title } = data.site.siteMetadata
            const sections = data.allSectionsYaml.edges

            return (
                <header className={styles.header}>
                    <div className={styles.headerContent}>
                        <Link to={'/'} className={styles.headerLogo}>
                            <Logo className={styles.headerLogoImage} />
                            <h1 className={styles.headerTitle}>{title}</h1>
                        </Link>

                        <nav className={styles.headerMenu}>
                            {sections.map(({ node }) => (
                                <Link
                                    key={node.title}
                                    to={node.link}
                                    className={styles.section}
                                >
                                    {node.title}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </header>
            )
        }}
    />
)

export default Header

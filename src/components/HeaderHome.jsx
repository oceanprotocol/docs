import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ReactComponent as Logo } from '@oceanprotocol/art/logo/logo-white.svg'
import Content from '../components/Content'
import styles from './HeaderHome.module.scss'

const HeaderHome = () => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `}
        render={data => {
            const { title, description } = data.site.siteMetadata

            return (
                <header className={styles.header}>
                    <Content>
                        <Logo className={styles.headerLogo} />
                        <h1 className={styles.headerTitle}>{title}</h1>
                        <p className={styles.headerDescription}>
                            {description}
                        </p>
                    </Content>
                </header>
            )
        }}
    />
)

export default HeaderHome

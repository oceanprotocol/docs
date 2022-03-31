import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { ReactComponent as Logo } from '@oceanprotocol/art/logo/logo.svg'
import styles from './Header.module.scss'
import SearchButton from './Search/SearchButton'
import ToggleSwitch from './ToggleSwitch'

const query = graphql`
  query {
    site {
      siteMetadata {
        siteTitle
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
`

const Header = () => (
  <StaticQuery
    query={query}
    render={(data) => {
      const { siteTitle } = data.site.siteMetadata
      const sections = data.allSectionsYaml.edges

      return (
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <Link to="/" className={styles.headerLogo}>
              <Logo className={styles.headerLogoImage} />
              <h1 className={styles.headerTitle}>{siteTitle}</h1>
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
              <div className={styles.section}>
                <SearchButton />
              </div>
              <div className={styles.section}>
                <ToggleSwitch />
              </div>
            </nav>
          </div>
        </header>
      )
    }}
  />
)

export default Header

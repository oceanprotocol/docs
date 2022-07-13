import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { ReactComponent as Logo } from '@oceanprotocol/art/logo/logo.svg'
import Content from '../components/Content'
import styles from './HeaderHome.module.scss'
import SearchButton from '../components/Search/SearchButton'
import ToggleSwitch from './ToggleSwitch'
import Badge from './@shared/atoms/Badge'
import { fontSizeSmall } from '../styles/_variables.scss'

const HeaderHome = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            siteTitle
            siteDescription
          }
        }
      }
    `}
    render={(data) => {
      const { siteTitle, siteDescription } = data.site.siteMetadata

      return (
        <header className={styles.header}>
          <Content>
            <div className={styles.tagline}>
              <b>Please be informed</b>: The Ocean Docs are currently out of
              date. The AMM pools, and dynamic pricing schema are no longer
              available on the{' '}
              <a
                href={
                  'https://blog.oceanprotocol.com/ocean-market-changes-3384fd7e113c'
                }
              >
                Ocean Market
              </a>
              . Stay tuned for updates coming out soon.
            </div>
            <Logo className={styles.headerLogo} />
            <h1 className={styles.headerTitle}>
              {siteTitle}
              <Badge label="v4" size={fontSizeSmall} />
            </h1>
            <p className={styles.headerDescription}>
              {siteDescription}
              <div className={styles.container}>
                <SearchButton />
              </div>
              <div className={styles.container}>
                <div style={{ display: 'inline-block' }}>
                  <ToggleSwitch />
                </div>
              </div>
            </p>
          </Content>
        </header>
      )
    }}
  />
)

export default HeaderHome

import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Repository from './Repository'
import styles from './QuickRun.module.scss'

const QuickRun = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: { fields: { slug: { eq: "/quickrun/" } } }) {
          edges {
            node {
              html
            }
          }
        }
      }
    `}
    render={(data) => (
      <aside className={styles.quickrun}>
        <header className={styles.header}>
          <h1 className={styles.tldr}>Quickstart</h1>
          <strong>
            The <Link to="/references/ocean.js">ocean.js</Link> and <Link to="/references/python.js">ocean.py</Link> repos have quickstarts. Have fun!
          </strong>
        </header>
      </aside>
    )}
  />
)

export default QuickRun

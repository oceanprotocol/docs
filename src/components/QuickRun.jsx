import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
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
            The <Link to=".">ocean.js</Link>, <Link to=".">ocean.py</Link>, and <Link to=".">Ocean React</Link> repos have quickstarts. Pick your favorite and have fun!
          </strong>
        </header>
      </aside>
    )}
  />
)

export default QuickRun

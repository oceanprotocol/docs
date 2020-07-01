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
          <h1 className={styles.tldr}>TL;DR</h1>
          <strong>
            Wanna quickly get an Ocean network with all{' '}
            <Link to="/concepts/components/">core components</Link> running on
            your machine?
          </strong>
        </header>

        <div className={styles.docker}>
          <div
            dangerouslySetInnerHTML={{
              __html: data.allMarkdownRemark.edges[0].node.html
            }}
          />

          <Repository name="barge" />
        </div>
      </aside>
    )}
  />
)

export default QuickRun

import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import classnames from 'classnames'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import Content from '../components/Content'
import HeaderHome from '../components/HeaderHome'
import Repositories from '../components/Repositories'
import { ReactComponent as Arrow } from '../images/arrow.svg'
import styles from './index.module.scss'
import SearchButton from '../components/Search/SearchButton'

const SectionBox = ({ to, children, ...props }) =>
  to ? (
    <Link to={to} {...props}>
      {children}
    </Link>
  ) : (
    <div {...props}>{children}</div>
  )

SectionBox.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
}

const SectionLink = ({ to, title, color, children }) => {
  // eslint-disable-next-line
  let classNames = classnames(styles.link, {
    [styles.purple]: color === 'purple',
    [styles.blue]: color === 'blue',
    [styles.orange]: color === 'orange',
    [styles.green]: color === 'green'
  })

  return (
    <SectionBox to={to} className={classNames}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <p className={styles.sectionText}>{children}</p>
      <span className={styles.sectionMore}>
        Learn More <Arrow />
      </span>
    </SectionBox>
  )
}

SectionLink.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string,
  children: PropTypes.any
}

const IndexPage = ({ data, location }) => (
  <>
    <Seo location={location} />

    <Layout location={location} header={<HeaderHome />}>
      <Content>
        <ul className={styles.sections}>
          {data.allSectionsYaml.edges.map(({ node }) => (
            <li key={node.title} className={styles.section}>
              <SectionLink to={node.link} title={node.title} color={node.color}>
                {node.description}
              </SectionLink>
            </li>
          ))}
        </ul>
        <div className={styles.searchButton}>
          <SearchButton />
        </div>
        <Repositories />
      </Content>
    </Layout>
  </>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default IndexPage

export const IndexQuery = graphql`
  query {
    site {
      siteMetadata {
        siteDescription
      }
    }

    allSectionsYaml {
      edges {
        node {
          title
          description
          link
          color
        }
      }
    }
  }
`

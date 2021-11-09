import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import SearchClient from './SearchClient'
import Layout from '../../components/Layout'
import HeaderSection from '../../components/HeaderSection'
import PropTypes from 'prop-types'
import styles from './SearchComponent.module.scss'

const SearchComponent = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/|/markdowns/" } }
      ) {
        edges {
          node {
            fields {
              slug
              section
            }
            frontmatter {
              title
              description
              app
              slug
              module
            }
            id
            plainText
          }
        }
      }
    }
  `)

  const searchableData = data.allMarkdownRemark.edges.map(({ node }) => {
    var { slug } = node.fields
    var section = null

    if (node.fields.slug.startsWith('/tutorials')) {
      section = 'Tutorials'
    } else if (node.fields.slug.startsWith('/concepts')) {
      section = 'Core concepts'
    } else if (node.frontmatter.module) {
      // This is for adding py module docs to index
      slug = `/references/read-the-docs/${node.frontmatter.app.replace(
        '.',
        '-'
      )}/${node.frontmatter.slug}`
      section = `API References [${node.frontmatter.app}]`
    }

    return {
      title: node.frontmatter.title,
      description: node.frontmatter.description,
      id: node.id,
      text: node.plainText,
      slug,
      section
    }
  })
  return (
    <Layout location={location}>
      <HeaderSection title="Search" />
      <main>
        <article className={styles.searchPage}>
          <SearchClient searchableData={searchableData} />
        </article>
      </main>
    </Layout>
  )
}

SearchComponent.propTypes = {
  location: PropTypes.object.isRequired
}

export default SearchComponent

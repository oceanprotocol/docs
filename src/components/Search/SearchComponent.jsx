import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import SearchClient from './SearchClient'
import Layout from '../../components/Layout'
import HeaderSection from '../../components/HeaderSection'
import PropTypes from 'prop-types'

const SearchComponent = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/content/" } }) {
        edges {
          node {
            fields {
              slug
              section
            }
            frontmatter {
              title
              description
            }
            id
            plainText
          }
        }
      }
    }
  `)
  const searchableData = data.allMarkdownRemark.edges.map(({ node }) => {
    var section = 'Concepts'
    if (node.fields.slug.startsWith('/tutorials')) section = 'Tutorials'

    return {
      title: node.frontmatter.title,
      description: node.frontmatter.description,
      slug: node.fields.slug,
      id: node.id,
      text: node.plainText,
      section: section
    }
  })

  return (
    <Layout location={location}>
      <HeaderSection title="Search" />
      <main>
        <article style={{ height: '700px' }}>
          <div
            id="search-client-container"
            style={{
              margin: 'auto',
              width: '50%',
              height: '100%',
              paddingBottom: '50px'
            }}
          >
            <SearchClient searchableData={searchableData} />
          </div>
        </article>
      </main>
    </Layout>
  )
}

SearchComponent.propTypes = {
  location: PropTypes.object.isRequired
}

export default SearchComponent

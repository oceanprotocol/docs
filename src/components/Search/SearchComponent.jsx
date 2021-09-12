import React from 'react'

import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import SearchClient from './SearchClient'

const SearchComponent = ({ data, pageContext }) => {
  console.log('data', data)
  const { searchData } = pageContext
  const searchableData = searchData.map(({ node }) => {
    return {
      title: node.frontmatter.title,
      description: node.frontmatter.description,
      slug: node.fields.slug,
      id: node.id
    }
  })
  return (
    <>
      <SearchClient searchableData={searchableData} />
    </>
  )
}

SearchComponent.propTypes = {
  pageContext: PropTypes.object,
  data: PropTypes.object
}

export const SearchComponentQuery = graphql`
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
        }
      }
    }
  }
`

export default SearchComponent

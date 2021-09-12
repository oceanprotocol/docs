import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import SearchClient from './SearchClient'

const SearchComponent = () => {
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
          }
        }
      }
    }
  `)

  const searchableData = data.allMarkdownRemark.edges.map(({ node }) => {
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

export default SearchComponent

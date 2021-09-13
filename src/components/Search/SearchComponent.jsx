import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import SearchClient from './SearchClient'
import Layout from '../../components/Layout'
import HeaderSection from '../../components/HeaderSection'

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
            plainText
          }
        }
      }
    }
  `)
  console.log('data', data)
  const searchableData = data.allMarkdownRemark.edges.map(({ node }) => {
    return {
      title: node.frontmatter.title,
      description: node.frontmatter.description,
      slug:
        node.fields.slug[0] === '/' ? node.fields.slug : '/' + node.fields.slug,
      id: node.id,
      text: node.plainText
    }
  })

  return (
    <Layout location={location}>
      <HeaderSection title="Search" />
      <main>
        <article style={{ height: '400px' }}>
          <div
            id="search-client-container"
            style={{ margin: 'auto', width: '50%', height: '100%' }}
          >
            <SearchClient searchableData={searchableData} />
          </div>
        </article>
      </main>
    </Layout>
  )
}

export default SearchComponent

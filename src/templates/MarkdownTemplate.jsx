import { graphql } from 'gatsby'
import React from 'react'
import DocToc from '../components/DocToc'
import DocHeader from '../components/DocHeader'
import DocContent from '../components/DocContent'
import Layout from '../components/Layout'
import HeaderSection from '../components/HeaderSection'
import Content from '../components/Content'

export default function MarkdownTemplate({data}) {
    const post = data.markdownRemark
  return (
    <Layout>
        {/* <div dangerouslySetInnerHTML={{__html:post.html}}></div> */}
        {/* <DocHeader title={post.frontmatter.title}/> */}
        <HeaderSection title={post.frontmatter.title} />
        {post.tableOfContents && <DocToc tableOfContents={post.tableOfContents} />}
        <Content>
        <DocContent html={post.html} htmlAst={post.htmlAst} />
        </Content>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      htmlAst
      tableOfContents(maxDepth: 2)
      frontmatter {
        slug
        title
        section
      }
      ...PageFooter
    }
  }
  fragment PageFooter on MarkdownRemark {
    parent {
      ... on File {
        relativePath
        sourceInstanceName
      }
    }
  }
`


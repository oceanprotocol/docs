import { graphql } from 'gatsby'
import React from 'react'
import DocToc from '../components/DocToc'
import DocHeader from '../components/DocHeader'
import DocContent from '../components/DocContent'
import Layout from '../components/Layout'

export default function MarkdownTemplate({data}) {
    const post = data.markdownRemark
  return (
    <Layout>
        {/* <div dangerouslySetInnerHTML={{__html:post.html}}></div> */}
        <DocHeader title={post.frontmatter.title}/>
        {post.tableOfContents && <DocToc tableOfContents={post.tableOfContents} />}
        <DocContent html={post.html} htmlAst={post.htmlAst} />
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


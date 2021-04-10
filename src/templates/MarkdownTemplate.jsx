import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function MarkdownTemplate({data}) {
    const post = data.markdownRemark
  return (
    <Layout>
        <div dangerouslySetInnerHTML={{__html:post.html}}></div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`


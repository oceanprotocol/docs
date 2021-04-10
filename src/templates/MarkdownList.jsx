import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function MarkdownList({pageContext}) {
  return (
    <Layout>
        <div>{pageContext.name}</div>
        <ul>
         {pageContext.markdownList.map(({node})=><li><Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link></li>)}
        </ul>
    </Layout>
  )
}



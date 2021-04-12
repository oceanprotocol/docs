import React from 'react'
import DocContent from '../components/DocContent'
import Content from '../components/Content'

export default function MarkdownTemplate({ data }) {
  const post = data
  return (
    <>
      {/* <div dangerouslySetInnerHTML={{__html:post.html}}></div> */}
      {/* <DocHeader title={post.frontmatter.title}/> */}
      {/* <HeaderSection title={post.frontmatter.title} />
        {post.tableOfContents && <DocToc tableOfContents={post.tableOfContents} />}*/}
      <Content>
        <DocContent html={post.html} htmlAst={post.htmlAst} />
      </Content>
    </>
  )
}

// export const postQuery = graphql`
//   query BlogPostByPath($path: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $path } }) {
//       html
//       htmlAst
//       tableOfContents
//       frontmatter {
//         slug
//         title
//         section
//       }
//       ...PageFooter
//     }
//   }
//   fragment PageFooter on MarkdownRemark {
//     parent {
//       ... on File {
//         relativePath
//         sourceInstanceName
//       }
//     }
//   }
//`

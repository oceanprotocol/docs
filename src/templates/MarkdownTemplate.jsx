import React from 'react'
import DocContent from '../components/DocContent'
import Content from '../components/Content'

export default function MarkdownTemplate({ data }) {
  const post = data
  return (
    <>
      <Content>
        {post && post.html ? (
          <DocContent html={post.html} htmlAst={post.htmlAst} />
        ) : (
          <div>No content present</div>
        )}
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
// `

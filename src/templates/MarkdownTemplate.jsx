import React from 'react'
import PropTypes from 'prop-types'
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

MarkdownTemplate.propTypes = {
  data: PropTypes.object.isRequired
}

import React from 'react'
import PropTypes from 'prop-types'
import DocContent from '../components/DocContent'
import styles from '../components/DocFooter.module.scss'
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
        <footer className={styles.footer}>
          <a
            style={{ cursor: 'pointer' }}
            href={post.frontmatter.source}
            target="_blank"
          >
            View source on Github
          </a>
        </footer>
      </Content>
    </>
  )
}

MarkdownTemplate.propTypes = {
  data: PropTypes.object.isRequired
}

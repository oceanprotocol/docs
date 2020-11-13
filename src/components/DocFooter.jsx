import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Pencil } from '../images/pencil.svg'
import styles from './DocFooter.module.scss'
import { social, githubContentPath } from '../../config'

export default function DocFooter({ post, url, externalName }) {
  if (post) {
    url = `${githubContentPath}/${post.parent.relativePath}`
  }

  return (
    <footer className={styles.footer}>
      <a href={social.Discord}>✋ Ask a question on Discord</a>
      <a href={url} className={post && !post.html ? styles.active : null}>
        <Pencil /> Edit this page on GitHub
        {externalName && (
          <span className={styles.externalRepoName}>{externalName}</span>
        )}
      </a>
    </footer>
  )
}

DocFooter.propTypes = {
  post: PropTypes.object,
  url: PropTypes.string,
  externalName: PropTypes.string
}

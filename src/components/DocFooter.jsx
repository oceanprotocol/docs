import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Pencil } from '../images/pencil.svg'
import styles from './DocFooter.module.scss'

const githubContentPath =
    'https://github.com/oceanprotocol/docs/blob/master/content'

const DocFooter = ({ post }) => (
    <footer className={styles.footer}>
        <a
            href={`${githubContentPath}/${post.parent.relativePath}`}
            className={!post.html ? styles.active : null}
        >
            <Pencil /> Edit this page on GitHub
        </a>
    </footer>
)

DocFooter.propTypes = {
    post: PropTypes.object.isRequired
}

export default DocFooter

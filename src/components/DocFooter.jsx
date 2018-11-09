import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Pencil } from '../images/pencil.svg'
import styles from './DocFooter.module.scss'

const DocFooter = ({ post }) => (
    <footer className={styles.footer}>
        <a
            href={`https://github.com/oceanprotocol/docs/blob/master/content/${
                post.parent.relativePath
            }`}
        >
            <Pencil /> Edit this page on GitHub
        </a>
    </footer>
)

DocFooter.propTypes = {
    post: PropTypes.object.isRequired
}

export default DocFooter

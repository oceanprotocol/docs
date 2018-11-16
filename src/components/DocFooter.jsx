import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Pencil } from '../images/pencil.svg'
import styles from './DocFooter.module.scss'
import { githubContentPath, githubDevOceanPath } from '../../config'

const DocFooter = ({ post }) => {
    const { sourceInstanceName } = post.parent

    let path
    let externalRepoName

    switch (sourceInstanceName) {
        case 'dev-ocean':
            path = githubDevOceanPath
            externalRepoName = sourceInstanceName
            break
        default:
            path = githubContentPath
    }

    return (
        <footer className={styles.footer}>
            <a
                href={`${path}/${post.parent.relativePath}`}
                className={!post.html ? styles.active : null}
            >
                <Pencil /> Edit this page on GitHub
                {externalRepoName && (
                    <span className={styles.externalRepoName}>
                        {externalRepoName}
                    </span>
                )}
            </a>
        </footer>
    )
}

DocFooter.propTypes = {
    post: PropTypes.object.isRequired
}

export default DocFooter

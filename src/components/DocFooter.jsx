import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as Pencil } from '../images/pencil.svg'
import styles from './DocFooter.module.scss'
import { githubContentPath, githubDevOceanPath } from '../../config'

const DocFooter = ({ post, url, externalName }) => {
    let path

    if (post) {
        const { sourceInstanceName } = post.parent

        switch (sourceInstanceName) {
            case 'dev-ocean':
                path = githubDevOceanPath
                externalName = sourceInstanceName
                break
            default:
                path = githubContentPath
        }

        url = `${path}/${post.parent.relativePath}`
    }

    return (
        <footer className={styles.footer}>
            <a href={url} className={post && !post.html ? styles.active : null}>
                <Pencil /> Edit this page on GitHub
                {externalName && (
                    <span className={styles.externalRepoName}>
                        {externalName}
                    </span>
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

export default DocFooter

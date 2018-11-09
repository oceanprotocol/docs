import React from 'react'
import PropTypes from 'prop-types'
import styles from './DocContent.module.scss'

const DocContent = ({ html }) =>
    html ? (
        <div
            className={styles.docContent}
            dangerouslySetInnerHTML={{
                __html: html
            }}
        />
    ) : (
        <div className={styles.empty}>
            This is a placeholder for now. Help creating it.
        </div>
    )

DocContent.propTypes = {
    html: PropTypes.string
}

export default DocContent

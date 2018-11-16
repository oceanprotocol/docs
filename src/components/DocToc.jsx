import React from 'react'
import PropTypes from 'prop-types'
import styles from './DocToc.module.scss'

const DocToc = ({ tableOfContents }) => (
    <aside
        className={styles.toc}
        dangerouslySetInnerHTML={{ __html: tableOfContents }}
    />
)

DocToc.propTypes = {
    tableOfContents: PropTypes.string.isRequired
}

export default DocToc

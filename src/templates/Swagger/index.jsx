import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.scss'

const BasePath = ({ host, basePath }) => (
    <div className={styles.basePath}>
        <h2>Base Path</h2>
        <code>
            <span>{host}</span>
            {basePath}
        </code>
    </div>
)

BasePath.propTypes = {
    host: PropTypes.string,
    basePath: PropTypes.string
}

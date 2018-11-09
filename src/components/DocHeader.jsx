import React from 'react'
import PropTypes from 'prop-types'
import styles from './DocHeader.module.scss'

const DocHeader = ({ title, description }) => (
    <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.lead}>{description}</p>}
    </header>
)

DocHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}

export default DocHeader

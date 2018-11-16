import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import remarkReact from 'remark-react'
import styles from './DocHeader.module.scss'

const DocHeader = ({ title, description }) => {
    const descriptionHtml =
        description &&
        remark()
            .use(remarkReact)
            .processSync(description).contents

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            {description && <p className={styles.lead}>{descriptionHtml}</p>}
        </header>
    )
}

DocHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}

export default DocHeader

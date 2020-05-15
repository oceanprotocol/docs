import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import remarkReact from 'remark-react'
import styles from './DocHeader.module.scss'

const DocHeader = ({ title, description, prepend }) => {
    const descriptionHtml =
        description && remark().use(remarkReact).processSync(description).result

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                {title} {prepend && prepend}
            </h1>
            {description && (
                <div className={styles.lead}>{descriptionHtml}</div>
            )}
        </header>
    )
}

DocHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    prepend: PropTypes.any
}

export default DocHeader

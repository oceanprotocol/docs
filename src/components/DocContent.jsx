import React from 'react'
import PropTypes from 'prop-types'
import RehypeReact from 'rehype-react'
import Repository from './Repositories/Repository'
import styles from './DocContent.module.scss'

const renderAst = new RehypeReact({
    createElement: React.createElement,
    components: { repo: Repository }
}).Compiler

const DocContent = ({ html, htmlAst, github }) => {
    if (github) {
        return <div className={styles.docContent}>{html}</div>
    }

    return html ? (
        <div className={styles.docContent}>{renderAst(htmlAst)}</div>
    ) : (
        <div className={styles.empty}>
            This is a placeholder for now. Help creating it.
        </div>
    )
}

DocContent.propTypes = {
    html: PropTypes.string,
    htmlAst: PropTypes.object,
    github: PropTypes.bool
}

export default DocContent

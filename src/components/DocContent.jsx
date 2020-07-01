import React from 'react'
import PropTypes from 'prop-types'
import RehypeReact from 'rehype-react'
import Repository from './Repository'
import styles from './DocContent.module.scss'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: { repo: Repository }
}).Compiler

const DocContent = ({ html, htmlAst }) =>
  html ? (
    <div className={styles.docContent}>{renderAst(htmlAst)}</div>
  ) : (
    <div className={styles.empty}>
      This is a placeholder for now. Help creating it.
    </div>
  )

DocContent.propTypes = {
  html: PropTypes.string,
  htmlAst: PropTypes.object
}

export default DocContent

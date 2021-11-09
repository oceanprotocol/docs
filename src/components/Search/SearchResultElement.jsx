import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styles from './SearchComponent.module.scss'

const SearchResultElement = ({ element }) => {
  const { slug, title, section, description } = element
  return (
    <Link to={slug}>
      <div className={styles.resultBox}>
        <header>
          <div className={styles.section}>{section}</div>
          <h1 className={styles.title}>{title}</h1>
        </header>
        {description && (
          <div className={styles.content}>{description.substring(0, 100)}</div>
        )}
      </div>
    </Link>
  )
}

SearchResultElement.propTypes = {
  element: PropTypes.object.isRequired
}

export default SearchResultElement

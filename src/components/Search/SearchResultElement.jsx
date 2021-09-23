import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styles from './SearchComponent.module.scss'

const SearchResultElement = ({ element }) => {
  const { slug, title, section, description } = element
  return (
    <div className={styles.resultElementCard}>
      <p className={styles.resultTextSecondary}>{section}</p>
      <div className={styles.resultElementtitle}>
        <b>
          <Link to={slug}>{title}</Link>
        </b>
      </div>
      <div className={styles.resultTextSecondary}>
        {description ? description.substring(0, 100) + '...' : null}
      </div>
    </div>
  )
}

SearchResultElement.propTypes = {
  element: PropTypes.object.isRequired
}

export default SearchResultElement

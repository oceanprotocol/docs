import React from 'react'
import { navigate } from 'gatsby'
import styles from './SearchComponent.module.scss'
import { ReactComponent as SearchIcon } from '../../images/search.svg'

const SearchButton = () => {
  return (
    <div className={styles.searchButtonWrapper}>
      <SearchIcon
        className={styles.searchButton}
        onClick={() => navigate('/search')}
      />
    </div>
  )
}
export default SearchButton

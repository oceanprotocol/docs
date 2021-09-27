import React, { useState, useEffect } from 'react'
import * as JsSearch from 'js-search'
import PropTypes from 'prop-types'
import SearchResultElement from './SearchResultElement'
import { ReactComponent as SearchIcon } from '../../images/search.svg'
import styles from './SearchComponent.module.scss'

const SearchClient = ({ searchableData }) => {
  const [searchState, setSearchState] = useState({
    isLoading: true,
    searchResults: [],
    search: null,
    isError: false,
    termFrequency: true,
    removeStopWords: false,
    searchQuery: '',
    selectedStrategy: '',
    selectedSanitizer: '',
    touched: false
  })

  useEffect(() => {
    rebuildIndex(searchableData)
  }, [])

  const rebuildIndex = (searchableData) => {
    const dataToSearch = new JsSearch.Search('title')
    dataToSearch.addIndex('title')
    dataToSearch.addIndex('description')
    dataToSearch.addIndex('text')

    dataToSearch.addDocuments(searchableData)
    setSearchState({
      ...searchState,
      isLoading: false,
      search: dataToSearch
    })
  }

  const searchData = (e) => {
    const { search } = searchState
    const queryResult = search.search(e.target.value)
    setSearchState({
      ...searchState,
      touched: true,
      searchQuery: e.target.value,
      searchResults: queryResult
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div style={{ height: '100%' }}>
      <form onSubmit={handleSubmit}>
        <div id="search-container" className={styles.searchContainer}>
          <SearchIcon className={styles.searchBoxImg} />
          <input
            className={styles.searchBox}
            placeholder="Search"
            type="text"
            autoFocus
            value={searchState.searchQuery}
            onChange={searchData}
          />
        </div>
      </form>

      <div id="result-list-conatiner">
        {searchState.touched ? (
          <div>
            <ResultList searchResults={searchState.searchResults} />
          </div>
        ) : null}
      </div>
    </div>
  )
}

SearchClient.propTypes = {
  searchableData: PropTypes.array.isRequired
}

const ResultList = ({ searchResults }) => {
  return (
    <div style={{ maxHeight: '100%' }}>
      <div>Total results found: {searchResults.length}</div>

      <div>
        <ul style={{ maxHeight: '100%' }}>
          {searchResults.map((element) => (
            <li className={styles.resultListElement} key={element.id}>
              <SearchResultElement element={element} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

ResultList.propTypes = {
  searchResults: PropTypes.array.isRequired
}

export default SearchClient

import React, { useState, useEffect } from 'react'
import * as JsSearch from 'js-search'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
import SearchResultElement from './SearchResultElement'

const useStyles = makeStyles((theme) => ({
  parent: {
    overflow: 'hidden',
    position: 'relative',
    width: '100%'
  },
  child: {
    background: 'green',
    height: '100%',
    width: '50%',
    position: 'absolute',
    right: 0,
    top: 0
  },
  root: {
    margin: 'auto',
    width: '50%'
  }
}))

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

  const classes = useStyles()

  useEffect(() => {
    rebuildIndex(searchableData)
  }, [])

  const rebuildIndex = (searchableData) => {
    // const {
    //   removeStopWords,
    //   selectedStrategy,
    //   selectedSanitizer,
    //   termFrequency
    // } = searchState
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
        <TextField
          variant="outlined"
          placeholder="Search"
          style={{
            margin: '10px auto',
            width: '100%'
          }}
          autoFocus
          value={searchState.searchQuery}
          onChange={searchData}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </form>

      <div
        id="result-list-conatiner"
        style={{ overflowY: 'auto', height: '100%' }}
        className={classes.parent}
      >
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
        <List style={{ maxHeight: '100%' }}>
          {searchResults.map((element) => (
            <ListItem style={{ before: { content: null } }} key={element.id}>
              <SearchResultElement element={element} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  )
}

ResultList.propTypes = {
  searchResults: PropTypes.array.isRequired
}

export default SearchClient

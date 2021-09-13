import React, { useState, useEffect } from 'react'
import * as JsSearch from 'js-search'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Pagination from '@material-ui/lab/Pagination'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import SearchIcon from '@material-ui/icons/Search'
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
          fullwidth
          style={{
            margin: '10px auto',
            width: '100%'
          }}
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
        style={{ overflowY: 'scroll', height: '100%' }}
        className={classes.parent}
      >
        {searchState.touched ? (
          <div>
            <div>Total results found: {searchState.searchResults.length}</div>

            <List>
              {searchState.searchResults.map((element) => (
                <ListItem
                  style={{ before: { content: null } }}
                  key={element.id}
                >
                  <Link to={element.slug}>{element.title} </Link>
                </ListItem>
              ))}
            </List>
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
  const url = typeof window !== 'undefined' ? window.location.host : ''
  console.log('url', url)
  return (
    <div style={{ maxHeight: '100%', overflowY: 'scroll' }}>
      <div>Total results found: {searchResults.length} </div>
      <Pagination count={10} size="small" />

      <div>
        <List style={{ maxHeight: '100%', overflowY: 'scroll' }}>
          {searchResults.map((element) => (
            <ListItem style={{ before: { content: null } }} key={element.id}>
              <Link to={element.slug}>{element.title} </Link>
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

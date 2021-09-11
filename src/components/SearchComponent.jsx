import React, { useState, useEffect } from 'react'
import * as JsSearch from 'js-search'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const SearchComponent = ({ pageContext }) => {
  const { searchData } = pageContext
  const searchableData = searchData.map(({ node }) => {
    return {
      title: node.frontmatter.title,
      description: node.frontmatter.description,
      slug: node.fields.slug,
      id: node.id
    }
  })
  return (
    <>
      Search feature
      <ClientSearch searchableData={searchableData} />
    </>
  )
}

SearchComponent.propTypes = {
  pageContext: PropTypes.object.isRequired
}

const ClientSearch = ({ searchableData }) => {
  const [searchState, setSearchState] = useState({
    isLoading: true,
    searchResults: [],
    search: null,
    isError: false,
    termFrequency: true,
    removeStopWords: false,
    searchQuery: '',
    selectedStrategy: '',
    selectedSanitizer: ''
  })

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
      searchQuery: e.target.value,
      searchResults: queryResult
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <div style={{ margin: '0 auto' }}>
        <form onSubmit={handleSubmit}>
          <input
            id="Search"
            value={searchState.searchQuery}
            onChange={searchData}
            placeholder="Enter your search here"
            style={{
              margin: '0 auto',
              width: '400px'
            }}
          />
        </form>
      </div>

      <br />

      <div>
        <ResultList searchResults={searchState.searchResults} />
      </div>
    </div>
  )
}

ClientSearch.propTypes = {
  searchableData: PropTypes.array.isRequired
}

const ResultList = ({ searchResults }) => {
  return (
    <div>
      <div>Total results found: {searchResults.length} </div>
      <ul>
        {searchResults.map((element) => (
          <li key={element.id}>
            <ResultElement title={element.title} slug={element.slug} />
          </li>
        ))}
      </ul>
    </div>
  )
}

ResultList.propTypes = {
  searchResults: PropTypes.array.isRequired
}

const ResultElement = ({ title, slug }) => {
  return (
    <>
      <Link to={slug}>{title} </Link>
    </>
  )
}

ResultElement.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
}

export default SearchComponent

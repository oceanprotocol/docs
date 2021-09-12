import React, { useState, useEffect } from 'react'
import * as JsSearch from 'js-search'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import styles from './SearchComponent.module.scss'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    margin: theme.spacing(3)
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
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        disableRipple
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div>
              <div style={{ margin: '0 auto' }}>
                <form onSubmit={handleSubmit} className={styles.searchform}>
                  <input
                    id="Search"
                    value={searchState.searchQuery}
                    onChange={searchData}
                    placeholder="Search..."
                    style={{
                      margin: '0 auto',
                      width: '400px'
                    }}
                    type="text"
                  />
                </form>
              </div>
              <div>
                {searchState.touched ? (
                  <ResultList searchResults={searchState.searchResults} />
                ) : null}
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  )
}

SearchClient.propTypes = {
  searchableData: PropTypes.array.isRequired
}

const ResultList = ({ searchResults }) => {
  return (
    <div>
      <div>Total results found: {searchResults.length} </div>
      <List>
        {searchResults.map((element) => (
          <ListItem style={{ before: { content: null } }} key={element.id}>
            <Link to={element.slug}>{element.title} </Link>
          </ListItem>
        ))}
      </List>
    </div>
  )
}

ResultList.propTypes = {
  searchResults: PropTypes.array.isRequired
}

export default SearchClient

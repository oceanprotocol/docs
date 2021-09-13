import React from 'react'
import { navigate } from 'gatsby'

import { IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
const SearchButton = () => {
  return (
    <IconButton onClick={() => navigate('/search')}>
      <SearchIcon />
    </IconButton>
  )
}
export default SearchButton

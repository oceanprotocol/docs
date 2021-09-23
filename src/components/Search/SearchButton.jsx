import React from 'react'
import { navigate } from 'gatsby'

import { ReactComponent as SearchIcon } from '../../images/search.svg'

const SearchButton = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <SearchIcon onClick={() => navigate('/search')} />
    </div>
  )
}
export default SearchButton

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
    <header>
        <h1 style={{ margin: 0 }}>
            <Link to="/">{siteTitle}</Link>
        </h1>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string
}

export default Header

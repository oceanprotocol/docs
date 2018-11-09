import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

const Layout = ({ children, header }) => {
    const headerElement = header || <Header />

    return (
        <>
            {headerElement}
            {children}
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.element
}

export default Layout

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'

const Layout = ({ children, header }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => {
            const { title } = data.site.siteMetadata
            const headerElement = header || <Header siteTitle={title} />

            return (
                <>
                    {headerElement}
                    {children}
                </>
            )
        }}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.element
}

export default Layout

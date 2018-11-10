import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import Header from './Header'
import Footer from './Footer'

const query = graphql`
    query {
        site {
            siteMetadata {
                siteTitle
                siteDescription
            }
        }
    }
`

const Layout = ({ children, header }) => {
    const headerElement = header || <Header />

    return (
        <StaticQuery
            query={query}
            render={data => {
                const siteMeta = data.site.siteMetadata

                return (
                    <>
                        <Helmet
                            defaultTitle={siteMeta.siteTitle}
                            titleTemplate={`%s - ${siteMeta.siteTitle}`}
                        />
                        {headerElement}
                        {children}
                        <Footer />
                    </>
                )
            }}
        />
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.element
}

export default Layout

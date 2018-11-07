import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

const IndexPage = ({ data, location }) => {
    const { edges } = data.allMarkdownRemark

    const DocsList = edges.map(({ node }) => {
        const { title } = node.frontmatter
        const { slug } = node.fields

        return (
            <li key={node.id}>
                <Link to={slug}>{title}</Link>
            </li>
        )
    })

    return (
        <Layout location={location}>
            <h1>Hi there</h1>
            <ul>{DocsList}</ul>
        </Layout>
    )
}

IndexPage.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}

export default IndexPage

export const indexQuery = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    id
                    html
                    excerpt(pruneLength: 250)
                    frontmatter {
                        title
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

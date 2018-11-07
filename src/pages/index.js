import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

const SectionLink = ({ to, title, children }) => (
    <Link to={to}>
        <h3>{title}</h3>
        <p>{children}</p>
    </Link>
)

SectionLink.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.any
}

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

            <SectionLink to="/concepts/introduction/" title="Core Concepts">
                Understand the fundamentals of Ocean Protocol.
            </SectionLink>

            <SectionLink to="/setup/" title="Setup Guides">
                Setting up the Ocean Protocol components.
            </SectionLink>

            <SectionLink to="/tutorials/" title="Tutorials">
                Browse tutorials for most common setup and development
                use-cases.
            </SectionLink>

            <h1>Docs list</h1>

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

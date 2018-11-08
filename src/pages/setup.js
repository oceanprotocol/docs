import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import HeaderSection from '../components/HeaderSection'
import Content from '../components/Content'

const SetupIndexPage = ({ data, location }) => {
    const { edges } = data.allMarkdownRemark

    const SetupList = edges.map(({ node }) => {
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
            <HeaderSection title="Setup Guides" />
            <Content>
                <ul>{SetupList}</ul>
            </Content>
        </Layout>
    )
}

export default SetupIndexPage

SetupIndexPage.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}

export const indexQuery = graphql`
    query {
        allMarkdownRemark(filter: { fields: { section: { eq: "setup" } } }) {
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

import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import HeaderSection from '../components/HeaderSection'
import Content from '../components/Content'

const TutorialsIndexPage = ({ data, location }) => {
    const { edges } = data.allMarkdownRemark

    const TutorialsList = edges.map(({ node }) => {
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
            <HeaderSection title={['Tutorials']} />
            <Content>
                <ul>{TutorialsList}</ul>
            </Content>
        </Layout>
    )
}

export default TutorialsIndexPage

TutorialsIndexPage.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}

export const indexQuery = graphql`
    query {
        allMarkdownRemark(
            filter: { fields: { section: { eq: "tutorials" } } }
        ) {
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

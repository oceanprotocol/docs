import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content from '../components/Content'
import styles from './index.module.scss'

const SectionLink = ({ to, title, children }) => (
    <Link to={to}>
        <h3 className={styles.sectionTitle}>{title}</h3>
        <p className={styles.sectionText}>{children}</p>
    </Link>
)

SectionLink.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.any
}

const IndexPage = ({ data, location }) => (
    <Layout location={location}>
        <Content>
            <ul className={styles.sections}>
                {data.allSectionsYaml.edges.map(({ node }) => (
                    <li key={node.title} className={styles.section}>
                        <SectionLink to={node.link} title={node.title}>
                            {node.description}
                        </SectionLink>
                    </li>
                ))}
            </ul>
        </Content>
    </Layout>
)

IndexPage.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}

export default IndexPage

export const IndexQuery = graphql`
    query {
        allSectionsYaml {
            edges {
                node {
                    title
                    description
                    link
                }
            }
        }
    }
`

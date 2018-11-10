import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Content from '../components/Content'
import HeaderHome from '../components/HeaderHome'
import Repositories from '../components/Repositories'
import { ReactComponent as Arrow } from '../images/arrow.svg'
import styles from './index.module.scss'

const SectionLink = ({ to, title, children }) => (
    <Link to={to} className={styles.link}>
        <h3 className={styles.sectionTitle}>{title}</h3>
        <p className={styles.sectionText}>{children}</p>
        <span className={styles.sectionMore}>
            Learn More <Arrow />
        </span>
    </Link>
)

SectionLink.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.any
}

const IndexPage = ({ data, location }) => (
    <>
        <Helmet>
            <meta
                name="description"
                content={data.site.siteMetadata.siteDescription}
            />
        </Helmet>
        <Layout location={location} header={<HeaderHome />}>
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

                <Repositories />
            </Content>
        </Layout>
    </>
)

IndexPage.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}

export default IndexPage

export const IndexQuery = graphql`
    query {
        site {
            siteMetadata {
                siteDescription
            }
        }

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

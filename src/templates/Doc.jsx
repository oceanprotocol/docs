import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content from '../components/Content'
import HeaderSection from '../components/HeaderSection'
import Sidebar from '../components/Sidebar'
import styles from './Doc.module.scss'

export default class DocTemplate extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    }

    render() {
        const { location } = this.props
        const post = this.props.data.markdownRemark
        const sections = this.props.data.allSectionsYaml.edges
        const { section } = post.fields
        const { title, description } = post.frontmatter

        // output section title as defined in sections.yml
        const sectionTitle = sections.map(({ node }) => {
            // compare section against section title from sections.yml
            if (node.title.toLowerCase().includes(section)) {
                return node.title
            }
        })

        return (
            <Layout location={location}>
                <HeaderSection title={sectionTitle} />

                <Content>
                    {section ? (
                        <main className={styles.wrapper}>
                            <aside className={styles.sidebar}>
                                <Sidebar
                                    location={location}
                                    sidebar={section}
                                />
                            </aside>
                            <article className={styles.main}>
                                <header className={styles.header}>
                                    <h1 className={styles.title}>{title}</h1>
                                    {description && (
                                        <p className={styles.lead}>
                                            {description}
                                        </p>
                                    )}
                                </header>

                                <div
                                    className={styles.docContent}
                                    dangerouslySetInnerHTML={{
                                        __html: post.html
                                    }}
                                />
                            </article>
                        </main>
                    ) : (
                        <article className={styles.mainSingle}>
                            <header className={styles.header}>
                                <h1 className={styles.title}>{title}</h1>
                                {description && (
                                    <p className={styles.lead}>{description}</p>
                                )}
                            </header>

                            <div
                                className={styles.docContent}
                                dangerouslySetInnerHTML={{
                                    __html: post.html
                                }}
                            />
                        </article>
                    )}
                </Content>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
    query DocBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }

        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt
            html
            frontmatter {
                title
                description
            }
            fields {
                section
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

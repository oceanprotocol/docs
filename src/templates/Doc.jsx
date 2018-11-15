import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Content from '../components/Content'
import HeaderSection from '../components/HeaderSection'
import Sidebar from '../components/Sidebar'
import DocToc from '../components/DocToc'
import DocContent from '../components/DocContent'
import DocHeader from '../components/DocHeader'
import DocFooter from '../components/DocFooter'
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
        const { tableOfContents } = post

        // output section title as defined in sections.yml
        const sectionTitle = sections.map(({ node }) => {
            // compare section against section title from sections.yml
            if (node.title.toLowerCase().includes(section)) {
                return node.title
            }
        })

        return (
            <>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <body className={section} />
                </Helmet>
                <Layout location={location}>
                    <HeaderSection title={section ? sectionTitle : title} />

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
                                    <DocHeader
                                        title={title}
                                        description={description}
                                    />

                                    {tableOfContents && (
                                        <DocToc
                                            tableOfContents={tableOfContents}
                                        />
                                    )}

                                    <DocContent
                                        html={post.html}
                                        htmlAst={post.htmlAst}
                                    />
                                    <DocFooter post={post} />
                                </article>
                            </main>
                        ) : (
                            <article className={styles.mainSingle}>
                                <DocHeader
                                    title={title}
                                    description={description}
                                />

                                {tableOfContents && (
                                    <DocToc tableOfContents={tableOfContents} />
                                )}

                                <DocContent
                                    html={post.html}
                                    htmlAst={post.htmlAst}
                                />
                                <DocFooter post={post} />
                            </article>
                        )}
                    </Content>
                </Layout>
            </>
        )
    }
}

export const pageQuery = graphql`
    query DocBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            tableOfContents
            html
            htmlAst
            frontmatter {
                title
                description
            }
            fields {
                section
            }
            ...PageFooter
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

    fragment PageFooter on MarkdownRemark {
        parent {
            ... on File {
                relativePath
                sourceInstanceName
            }
        }
    }
`

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
import SEO from '../components/Seo'
import styles from './Doc.module.scss'

const DocMain = ({ title, description, tableOfContents, post, single }) => (
    <article className={single ? styles.mainSingle : styles.main}>
        <DocHeader title={title} description={description} />

        {tableOfContents && <DocToc tableOfContents={tableOfContents} />}

        <DocContent html={post.html} htmlAst={post.htmlAst} />
        <DocFooter post={post} />
    </article>
)

DocMain.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tableOfContents: PropTypes.string.isRequired,
    post: PropTypes.object.isRequired,
    single: PropTypes.bool
}

export default class DocTemplate extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    }

    render() {
        const { location } = this.props
        const post = this.props.data.markdownRemark
        const sections = this.props.data.allSectionsYaml.edges
        const { section, slug } = post.fields
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
                    <body className={section} />
                </Helmet>

                <SEO
                    title={title}
                    description={description}
                    slug={slug}
                    article
                />

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
                                <DocMain
                                    title={title}
                                    description={description}
                                    tableOfContents={tableOfContents}
                                    post={post}
                                />
                            </main>
                        ) : (
                            <DocMain
                                title={title}
                                description={description}
                                tableOfContents={tableOfContents}
                                post={post}
                                single
                            />
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
                slug
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

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Content from '../components/Content'
import HeaderSection from '../components/HeaderSection'
import Sidebar from '../components/Sidebar'
import DocContent from '../components/DocContent'
import DocHeader from '../components/DocHeader'
import styles from './Doc.module.scss'

export default class DocRepoTemplate extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        pageContext: PropTypes.object
    }

    render() {
        const { location } = this.props
        const sections = this.props.data.allSectionsYaml.edges
        const { section } = this.props.pageContext
        const { title, description, content } = this.props.pageContext

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
                                    <DocContent html={content} github />
                                </article>
                            </main>
                        ) : (
                            <article className={styles.mainSingle}>
                                <DocHeader
                                    title={title}
                                    description={description}
                                />
                                <DocContent html={content} github />
                            </article>
                        )}
                    </Content>
                </Layout>
            </>
        )
    }
}

export const pageQuery = graphql`
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

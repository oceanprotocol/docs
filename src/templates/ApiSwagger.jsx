import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Content from '../components/Content'
import HeaderSection from '../components/HeaderSection'
import Sidebar from '../components/Sidebar'
import DocHeader from '../components/DocHeader'
import SEO from '../components/Seo'
import stylesDoc from './Doc.module.scss'
import styles from './ApiSwagger.module.scss'

export default class ApiSwaggerTemplate extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        pageContext: PropTypes.object.isRequired
    }

    render() {
        const { location, data, pageContext } = this.props
        const sections = this.props.data.allSectionsYaml.edges
        const { title, description } = pageContext.json.info

        // output section title as defined in sections.yml
        const sectionTitle = sections.map(({ node }) => {
            // compare section against section title from sections.yml
            if (node.title.toLowerCase().includes('api')) {
                return node.title
            }
        })

        console.log(data)

        return (
            <>
                <Helmet>
                    <body className={'api'} />
                </Helmet>

                <SEO
                    title={title}
                    description={description}
                    slug={pageContext.slug}
                    article
                />

                <Layout location={location}>
                    <HeaderSection title={sectionTitle} />

                    <Content>
                        <main className={stylesDoc.wrapper}>
                            <aside className={stylesDoc.sidebar}>
                                <Sidebar
                                    location={location}
                                    sidebar={'api'}
                                    collapsed
                                />
                            </aside>
                            <article className={stylesDoc.main}>
                                <DocHeader title={title} />

                                {Object.keys(pageContext.json.paths).map(
                                    path => (
                                        <div key={path} className={styles.path}>
                                            <h2>{path}</h2>
                                            {path.get && <h3>GET</h3>}
                                        </div>
                                    )
                                )}
                            </article>
                        </main>
                    </Content>
                </Layout>
            </>
        )
    }
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            tableOfContents
            html
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

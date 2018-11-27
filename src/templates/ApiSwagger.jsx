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

export default class ApiSwaggerTemplate extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        pageContext: PropTypes.object.isRequired
    }

    render() {
        const { location } = this.props
        const api = this.props.data.openApiSpec
        const paths = api.childrenOpenApiSpecPath
        const sections = this.props.data.allSectionsYaml.edges
        const { title, description } = api

        // output section title as defined in sections.yml
        const sectionTitle = sections.map(({ node }) => {
            // compare section against section title from sections.yml
            if (node.title.toLowerCase().includes('api')) {
                return node.title
            }
        })

        return (
            <>
                <Helmet>
                    <body className={'api'} />
                </Helmet>

                <SEO
                    title={title}
                    description={description}
                    slug={this.props.pageContext.slug}
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

                                {Object.keys(paths).map(path => (
                                    <div key={path}>{path}</div>
                                ))}
                            </article>
                        </main>
                    </Content>
                </Layout>
            </>
        )
    }
}

export const pageQuery = graphql`
    query ApiQuery($id: String!) {
        openApiSpec(id: { eq: $id }) {
            version
            title
            description
            childrenOpenApiSpecPath {
                name
                verb
                summary
                description
                parameters {
                    name
                    in
                    description
                    required
                    type
                }
                tag
                childrenOpenApiSpecResponse {
                    id
                    statusCode
                    description
                }
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

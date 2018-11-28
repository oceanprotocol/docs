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
// import styles from './ApiSwagger.module.scss'

const toc = api => {
    const items = Object.keys(api.paths).map(
        key =>
            `<li key=${key}>
                <a href="#${key.replace(/\//gi, '-')}"><code>${key}</code></a>
            </li>`
    )

    return `<ul>${items}</ul>`
}

export default class ApiSwaggerTemplate extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        pageContext: PropTypes.object.isRequired
    }

    render() {
        const { location, data, pageContext } = this.props
        const sections = data.allSectionsYaml.edges
        const { api } = pageContext
        const { title, description, version } = api.info

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
                                    toc
                                    tableOfContents={toc(api)
                                        .split(',')
                                        .join('')}
                                />
                            </aside>
                            <article className={stylesDoc.main}>
                                <DocHeader
                                    title={title}
                                    description={description}
                                />

                                {version}

                                {Object.entries(api.paths).map(
                                    ([key, value]) => (
                                        <>
                                            <h2
                                                key={key}
                                                id={key.replace(/\//gi, '-')}
                                            >
                                                <code>{key}</code>
                                            </h2>

                                            {Object.entries(value).map(
                                                ([key, value]) => (
                                                    <>
                                                        <h4 key={key}>
                                                            <code>{key}</code>
                                                        </h4>
                                                        <p>
                                                            {value['summary']}
                                                        </p>
                                                    </>
                                                )
                                            )}
                                        </>
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

export const apiSwaggerQuery = graphql`
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

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../../components/Layout'
import Content from '../../components/Content'
import HeaderSection from '../../components/HeaderSection'
import Sidebar from '../../components/Sidebar'
import DocHeader from '../../components/DocHeader'
import DocFooter from '../../components/DocFooter'
import SEO from '../../components/Seo'

import Toc from './Toc'
import Paths from './Paths'

import stylesDoc from '../Doc.module.scss'
import styles from './index.module.scss'

const SwaggerMeta = ({ contact, license }) => (
    <ul className={styles.swaggerMeta}>
        {contact && (
            <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
        )}
        {license && (
            <li>
                <a href={license.url}>{license.name}</a>
            </li>
        )}
    </ul>
)

SwaggerMeta.propTypes = {
    contact: PropTypes.object,
    license: PropTypes.object
}

const BasePath = ({ host, basePath }) => (
    <div className={styles.basePath}>
        <h2>Base Path</h2>
        <code>
            <span>{host}</span>
            {basePath}
        </code>
    </div>
)

BasePath.propTypes = {
    host: PropTypes.string,
    basePath: PropTypes.string
}

export default class ApiSwaggerTemplate extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        pageContext: PropTypes.object.isRequired
    }

    // output section title as defined in sections.yml
    sectionTitle = this.props.data.allSectionsYaml.edges.map(({ node }) => {
        // compare section against section title from sections.yml
        if (node.title.toLowerCase().includes('references')) {
            return node.title
        }
    })

    render() {
        const { location, pageContext } = this.props
        const { api } = pageContext
        const { host, basePath, info, paths } = api
        const { title, description, version, license, contact } = info

        return (
            <>
                <Helmet>
                    <body className={'references'} />
                </Helmet>

                <SEO
                    title={title}
                    description={description}
                    slug={pageContext.slug}
                    article
                    location={location}
                />

                <Layout location={location}>
                    <HeaderSection title={this.sectionTitle} />

                    <Content>
                        <main className={stylesDoc.wrapper}>
                            <aside className={stylesDoc.sidebar}>
                                <Sidebar
                                    location={location}
                                    sidebar={'references'}
                                    collapsed
                                    toc
                                    tocComponent={<Toc data={api} />}
                                />
                            </aside>
                            <article className={stylesDoc.main}>
                                <DocHeader
                                    title={title}
                                    description={description}
                                    prepend={
                                        <span className={stylesDoc.version}>
                                            <span>v{version}</span>
                                        </span>
                                    }
                                />

                                {(contact || license) && (
                                    <SwaggerMeta
                                        contact={contact}
                                        license={license}
                                    />
                                )}

                                {(host || basePath) && (
                                    <BasePath host={host} basePath={basePath} />
                                )}

                                <Paths paths={paths} />

                                <DocFooter
                                    url={`https://github.com/oceanprotocol/${title.toLowerCase()}`}
                                    externalName={`${title} Swagger spec`}
                                />
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

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import slugify from 'slugify'
import Layout from '../../components/Layout'
import Content from '../../components/Content'
import HeaderSection from '../../components/HeaderSection'
import Sidebar from '../../components/Sidebar'
import DocHeader from '../../components/DocHeader'
import SEO from '../../components/Seo'
import stylesDoc from '../Doc.module.scss'

import Toc from './Toc'
import { cleanPaths } from './utils'

const title = 'squid-java'
const description = 'Java client library for Ocean Protocol'
const version = '0.2.0'

const Paths = ({ javadoc }) => {
    return Object.keys(javadoc).map(path => (
        <div
            key={path}
            id={slugify(cleanPaths(path), {
                remove: /[*+~.()'"/!:@]/g
            })}
        >
            <h2 className={stylesDoc.pathName}>
                <code>{cleanPaths(path)}</code>
            </h2>
        </div>
    ))
}

export default class JavadocTemplate extends Component {
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
        const { javadoc } = pageContext

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
                                    tocComponent={<Toc data={javadoc} />}
                                />
                            </aside>
                            <article className={stylesDoc.main}>
                                <DocHeader
                                    title={title}
                                    description={description}
                                    prepend={
                                        <span className={stylesDoc.version}>
                                            {version}
                                        </span>
                                    }
                                />

                                <Paths javadoc={javadoc} />
                            </article>
                        </main>
                    </Content>
                </Layout>
            </>
        )
    }
}

export const JavadocQuery = graphql`
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

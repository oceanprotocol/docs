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

const Paths = ({ javadoc }) => {
    return Object.entries(javadoc).map(([key, value]) => (
        <div
            key={key}
            id={slugify(cleanPaths(key), {
                remove: /[*+~.()'"/!:@]/g
            })}
        >
            <h2 className={stylesDoc.pathName}>
                <code>{cleanPaths(key)}</code>
            </h2>

            {value[0][0].text}

            <h4>Parameters</h4>

            {/*
            {value
                .filter(item => {
                    return item.name === '@param'
                })
                .map(item => {
                    return item.text
                })}
            */}

            <h4>Returns</h4>

            <h4>Throws</h4>
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
        const { javadoc, title, description, version } = pageContext

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

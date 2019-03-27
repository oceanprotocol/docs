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
import styles from './index.module.scss'

import Toc from './Toc'
import { cleanPaths } from './utils'

const filterPropertyItems = (item, name) => {
    let title
    switch (name) {
        case '@param':
            title = 'Parameters'
            break
        case '@return':
            title = 'Returns'
            break
        case '@throws':
            title = 'Throws'
            break
    }

    return (
        <>
            {item.filter(item => item.name === name).length > 0 && (
                <h4 className={styles.subHeading}>{title}</h4>
            )}

            {item
                .filter(item => item.name === name)
                .map((item, index) => (
                    <div key={index}>
                        <code>{item.text}</code>
                    </div>
                ))}
        </>
    )
}

const Entities = ({ javadoc }) => {
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

            <p>{value[0][0].text}</p>

            {value.map((item, index) => {
                if (index === 0) return

                return (
                    <div key={index} className={styles.property}>
                        <h3 className={styles.propertyName}>Function Name</h3>

                        <p>{item[0].text}</p>

                        {filterPropertyItems(item, '@param')}
                        {filterPropertyItems(item, '@return')}
                        {filterPropertyItems(item, '@throws')}
                    </div>
                )
            })}
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

                                <Entities javadoc={javadoc} />
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

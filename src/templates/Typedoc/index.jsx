import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../../components/Layout'
import Content from '../../components/Content'
import HeaderSection from '../../components/HeaderSection'
import Sidebar from '../../components/Sidebar'
import DocHeader from '../../components/DocHeader'
import Seo from '../../components/Seo'

import Entities from './Entities'
import Toc from './Toc'

import stylesDoc from '../Doc.module.scss'

export default class TypedocTemplate extends Component {
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
    const { typedoc } = pageContext
    const { title, description, version, sourceUrl } = typedoc.info

    return (
      <>
        <Helmet>
          <body className="references" />
        </Helmet>

        <Seo
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
                  sidebar="references"
                  collapsed
                  toc
                  tocComponent={<Toc data={typedoc.children} />}
                />
              </aside>
              <article className={stylesDoc.main}>
                <DocHeader
                  title={title}
                  description={description}
                  prepend={<span className={stylesDoc.version}>{version}</span>}
                />

                <Entities entities={typedoc.children} sourceUrl={sourceUrl} />
              </article>
            </main>
          </Content>
        </Layout>
      </>
    )
  }
}

export const TypedocQuery = graphql`
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

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Content from '../components/Content'
import HeaderSection from '../components/HeaderSection'
import Sidebar from '../components/Sidebar'
import DocHeader from '../components/DocHeader'
import Seo from '../components/Seo'

import stylesDoc from './Doc.module.scss'

export default class ContentWrapperTemplate extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    pageContext: PropTypes.object.isRequired,
    toc: PropTypes.object.isRequired,
    info: PropTypes.object.isRequired
  }

  sectionTitle = this.props.data.allSectionsYaml.edges.map(({ node }) => {
    if (node.title.toLowerCase().includes('references')) {
      return node.title
    }
  })

  render() {
    const { location, pageContext } = this.props
    const { title, description, version } = this.props.info

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
                  tocComponent={this.props.toc}
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

                {this.props.children}
              </article>
            </main>
          </Content>
        </Layout>
      </>
    )
  }
}

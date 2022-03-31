import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Content from '../components/Content'
import HeaderSection from '../components/HeaderSection'
import Sidebar from '../components/Sidebar'
import stylesDoc from '../templates/Doc.module.scss'
import Seo from '../components/Seo'
import DocContent from '../components/DocContent'
import PropTypes from 'prop-types'

export default function RestApiDoc({ location, pageContext }) {
  const { node, slug } = pageContext
  return (
    <>
      <Helmet>
        <body className="references" />
      </Helmet>

      <Seo
        title="Rest api documentation"
        description=""
        slug={slug}
        article
        location={location}
      />

      <Layout location={location}>
        <HeaderSection title="Rest Api documentation" />
        <Content>
          <main className={stylesDoc.wrapper}>
            <aside className={stylesDoc.sidebar}>
              {/* Add sidebar */}
              <Sidebar location={location} sidebar="references" collapsed />
            </aside>
            <article className={stylesDoc.main}>
              <DocContent html={node.html} htmlAst={node.htmlAst} />
            </article>
          </main>
        </Content>
      </Layout>
    </>
  )
}

RestApiDoc.propTypes = {
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

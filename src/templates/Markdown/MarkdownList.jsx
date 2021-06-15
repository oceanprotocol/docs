import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import HeaderSection from '../../components/HeaderSection'
import Content from '../../components/Content'
import styles from '../../templates/Doc.module.scss'
import MarkdownTemplate from '../MarkdownTemplate'
import sidebarStyles from '../../components/Sidebar.module.scss'
import moduleStyles from './Markdown.module.scss'
import { generatedNestedObject } from './utils'
import { navigate } from 'gatsby'

export default function MarkdownList({ location, pageContext }) {
  const flattenedModules = {}
  const nestedModules = {}
  pageContext.markdownList.map(({ node }) => {
    const modulePath = node.frontmatter.module.split('.')
    const key =
      modulePath.slice(0, modulePath.length - 1).join('.') ||
      modulePath.join('.')
    if (!flattenedModules[key]) {
      flattenedModules[key] = []
    }
    flattenedModules[key].push(node)
    generatedNestedObject(nestedModules, modulePath, node)
  })

  const moduleKeys = Object.keys(flattenedModules).sort()

  const path = location.pathname.replace(pageContext.baseUrl + '/', '')
  const found = pageContext.markdownList.find(({ node }) => {
    return node.frontmatter.slug === path
  })

  const selectedModule = found ? found.node : flattenedModules[moduleKeys[0]][0]

  const changeNodeid = (id) => {
    const found = pageContext.markdownList.find(({ node }) => {
      return node.id === id
    })

    navigate(pageContext.baseUrl + '/' + found.node.frontmatter.slug)
  }

  const generateModuleListElement = (id, label) => {
    const className =
      selectedModule.id === id ? moduleStyles.active : moduleStyles.link

    return (
      <li key={id} id={id} style={{ cursor: 'pointer' }}>
        <a className={className} onClick={() => changeNodeid(id)}>
          {label}
        </a>
      </li>
    )
  }

  const sidebarList = (title, nestedModules) => {
    const { id } = nestedModules

    if (id)
      return generateModuleListElement(nestedModules.id, nestedModules.label)

    const keys = Object.keys(nestedModules).sort()
    const children = []
    if (title) {
      children.push(
        <li key={title}>
          <b>{title}</b>
        </li>
      )
    }

    keys.forEach((element) => {
      children.push(
        <ul className={sidebarStyles.list}>
          {sidebarList(element, nestedModules[element])}
        </ul>
      )
    })
    return children
  }

  const nestedSidebarList = sidebarList(null, nestedModules)

  return (
    <Layout>
      <HeaderSection title={pageContext.name} />
      <Content>
        <main className={styles.wrapper}>
          <aside className={styles.sidebar}>
            <div className={sidebarStyles.sidebar}>{nestedSidebarList}</div>
          </aside>
          <article className={styles.main}>
            <MarkdownTemplate data={selectedModule} />
          </article>
        </main>
      </Content>
    </Layout>
  )
}

MarkdownList.propTypes = {
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

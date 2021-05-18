import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/Layout'
import HeaderSection from '../../components/HeaderSection'
import Content from '../../components/Content'
import styles from '../../templates/Doc.module.scss'
import MarkdownTemplate from '../MarkdownTemplate'
import sidebarStyles from '../../components/Sidebar.module.scss'
import { generatedNestedObject } from './utils'

export default function MarkdownList({ pageContext }) {
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
  const [selectedNodeId, setSelectedNodeId] = useState(
    flattenedModules[moduleKeys[0]][0].id
  )
  const [selectedModule, setSelectedModule] = useState(
    flattenedModules[moduleKeys[0]][0]
  )

  const changeNodeid = (id) => {
    setSelectedNodeId(id)

    for (let i = 0; i < pageContext.markdownList.length; i++) {
      var { node } = pageContext.markdownList[i]
      if (node.id === id) {
        setSelectedModule(node)
        break
      }
    }
  }

  const generateModuleListElement = (node) => {
    const { id } = node
    const color = selectedNodeId === id ? 'black' : '#8b98a9'
    const className =
      selectedNodeId === id ? sidebarStyles.active : sidebarStyles.link

    return (
      <li key={id} id={id}>
        <a
          className={className}
          onClick={() => changeNodeid(id)}
          style={{
            cursor: 'pointer',
            color
          }}
        >
          {node.label}
        </a>
      </li>
    )
  }

  const sidebarList = (title, nestedModules) => {
    const { id } = nestedModules

    if (id) return generateModuleListElement(nestedModules)

    const keys = Object.keys(nestedModules).sort()
    const children = []
    children.push(
      <li key={title}>
        <b>{title}</b>
      </li>
    )
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
        <div style={{ color: '#ff8c00' }}>
          <span>&#9888;</span>
          This documentation is a work in progess. Please feel free to report
          any issues.
        </div>
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
  pageContext: PropTypes.object.isRequired
}

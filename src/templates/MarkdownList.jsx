import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import HeaderSection from '../components/HeaderSection'
import Content from '../components/Content'
import styles from '../templates/Doc.module.scss'
import MarkdownTemplate from './MarkdownTemplate'
import sidebarStyles from '../components/Sidebar.module.scss'

export default function MarkdownList({ pageContext }) {
  const modules = {}

  const nestedModules = {}

  function generatedNested(obj, keyPath, node) {
    var lastKeyIndex = keyPath.length - 1
    for (var i = 0; i < lastKeyIndex; ++i) {
      var key = keyPath[i]
      if (!(key in obj)) {
        obj[key] = {}
      }
      obj = obj[key]
    }
    if (!obj[keyPath[lastKeyIndex]]) {
      obj[keyPath[lastKeyIndex]] = {
        id: node.id,
        label: node.frontmatter.title
      }
    }
  }

  pageContext.markdownList.map(({ node }) => {
    const modulePath = node.frontmatter.module.split('.')
    const key =
      modulePath.slice(0, modulePath.length - 1).join('.') ||
      modulePath.join('.')

    if (!modules[key]) {
      modules[key] = []
    }
    modules[key].push(node)

    generatedNested(nestedModules, modulePath, node)
  })

  const moduleKeys = Object.keys(modules).sort()
  const [selectedNodeId, setSelectedNodeId] = useState(
    modules[moduleKeys[0]][0].id
  )
  const [elem, setElem] = useState(modules[moduleKeys[0]][0])

  const changeNodeid = (id) => {
    setSelectedNodeId(id)

    for (let i = 0; i < pageContext.markdownList.length; i++) {
      var node = pageContext.markdownList[i].node
      if (node.id === id) {
        setElem(node)
        break
      }
    }
  }

  const generateNestedSidebarList = (title, nestedModules) => {
    if (nestedModules.id) {
      return (
        <li key={nestedModules.id} id={nestedModules.id}>
          <a
            className={
              selectedNodeId === nestedModules.id
                ? sidebarStyles.active
                : sidebarStyles.link
            }
            onClick={() => changeNodeid(nestedModules.id)}
            style={{
              cursor: 'pointer',
              color: selectedNodeId === nestedModules.id ? 'black' : '#8b98a9'
            }}
          >
            {nestedModules.label}
          </a>
        </li>
      )
    } else {
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
            {generateNestedSidebarList(element, nestedModules[element])}
          </ul>
        )
      })
      return children
    }
  }

  const nestedSidebarList = generateNestedSidebarList(null, nestedModules)

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
            <MarkdownTemplate data={elem} />
          </article>
        </main>
      </Content>
    </Layout>
  )
}

MarkdownList.propTypes = {
  pageContext: PropTypes.object.isRequired
}

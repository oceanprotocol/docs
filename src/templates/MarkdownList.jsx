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

  const nested = {}
  const [selectedNodeId, setSelectedNodeId] = useState(0)

  const changeNodeid = (id) => {
    setSelectedNodeId(id)

    for (let i = 0; i < pageContext.markdownList.length; i++) {
      var node = pageContext.markdownList[i]['node']
      if (node.id == id) {
        setElem(node)
        break
      }
    }
  }

  function generatedNested(obj, keyPath, value) {
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
        id: value.id,
        label: value.frontmatter.title
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

    generatedNested(nested, modulePath, node)
  })

  const g = (title, nested) => {
    if (nested.id) {
      return (
        <li key={nested.id} id={nested.id}>
          <a
            className={
              selectedNodeId === nested.id
                ? sidebarStyles.active
                : sidebarStyles.link
            }
            onClick={() => changeNodeid(nested.id)}
            style={{
              cursor: 'pointer',
              color: selectedNodeId === nested.id ? 'black' : '#8b98a9'
            }}
          >
            {nested.label}
          </a>
        </li>
      )
    } else {
      let keys = Object.keys(nested).sort()
      const children = []
      children.push(
        <li key={title}>
          <b>{title}</b>
        </li>
      )
      keys.forEach((element) => {
        children.push(
          <ul className={sidebarStyles.list}>{g(element, nested[element])}</ul>
        )
      })
      return children
    }
  }

  const n2 = g(null, nested)

  const moduleKeys = Object.keys(modules).sort()

  const [selectedSubSection, setSelectedSubSection] = useState(0)
  const [elem, setElem] = useState(modules[moduleKeys[selectedSubSection]][0])

  const changePage = (subSectionIndex, node) => {
    setElem(node)
    setSelectedSubSection(subSectionIndex)
  }

  const changeSubsection = (index) => {
    setSelectedSubSection(index)
    setElem(modules[moduleKeys[index]][0])
  }

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
            <div className={sidebarStyles.sidebar}>{n2}</div>
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

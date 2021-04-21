import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import HeaderSection from '../components/HeaderSection'
import Content from '../components/Content'
import styles from '../templates/Doc.module.scss'
import MarkdownTemplate from './MarkdownTemplate'
import sidebarStyles from '../components/Sidebar.module.scss'

export default function MarkdownList({ pageContext }) {
  const subSections = {}
  const temp = {}

  const assign = (obj, keyPath, value) => {
    let lastKeyIndex = keyPath.length - 1
    for (var i = 0; i < lastKeyIndex; ++i) {
      let key = keyPath[i]
      if (!(key in obj)) {
        obj[key] = {}
      }
      obj = obj[key]
    }
    obj[keyPath[lastKeyIndex]] = value
  }

  // console.log('pageContext', pageContext)
  // pageContext.markdownList.map(({ node }) => {
  //   let modules = node.frontmatter.module.split('.')
  //   assign(temp, modules, node)
  // })

  pageContext.markdownList.map(({ node }) => {
    let modules = node.frontmatter.module.split('.')
    let key =
      modules.slice(0, modules.length - 1).join('.') || modules.join('.')

    console.log(key)

    if (!subSections[key]) {
      subSections[key] = []
    }
    subSections[key].push(node)
  })

  console.log('subSections', subSections)

  const [selectedSubSection, setSelectedSubSection] = useState(0)
  const [elem, setElem] = useState(
    subSections[Object.keys(subSections)[selectedSubSection]][0]
  )

  const changePage = (subSectionIndex, node) => {
    setElem(node)
    setSelectedSubSection(subSectionIndex)
  }

  const changeSubsection = (index) => {
    setSelectedSubSection(index)
    setElem(subSections[Object.keys(subSections)[index]][0])
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
            <nav className={sidebarStyles.sidebar}>
              {Object.keys(subSections)
                .sort()
                .map((ele, subSectionIndex) => {
                  return selectedSubSection === subSectionIndex ? (
                    <div key={subSectionIndex}>
                      <h4 className={sidebarStyles.groupTitle}>
                        <a
                          style={{ cursor: 'pointer', color: 'black' }}
                          onClick={() => changeSubsection(subSectionIndex)}
                        >
                          {ele}
                        </a>
                        <div className={sidebarStyles.list}>
                          <ul>
                            {subSections[ele].map((node) => (
                              <li
                                className={
                                  elem.id === node.id
                                    ? sidebarStyles.active
                                    : sidebarStyles.link
                                }
                                key={node.id}
                                onClick={() =>
                                  changePage(subSectionIndex, node)
                                }
                              >
                                <a
                                  style={{
                                    cursor: 'pointer'
                                  }}
                                >
                                  {node.frontmatter.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </h4>
                    </div>
                  ) : (
                    <div>
                      <h4 className={sidebarStyles.groupTitle}>
                        <a
                          onClick={() => changeSubsection(subSectionIndex)}
                          style={{ cursor: 'pointer', color: '#8b98a9' }}
                        >
                          {ele}
                        </a>
                      </h4>
                    </div>
                  )
                })}
            </nav>
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

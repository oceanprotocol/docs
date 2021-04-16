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
  pageContext.markdownList.map(({ node }) => {
    if (!subSections[node.frontmatter.sub_section]) {
      subSections[node.frontmatter.sub_section] = []
    }
    subSections[node.frontmatter.sub_section].push(node)
  })

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
        <main className={styles.wrapper}>
          <aside className={styles.sidebar}>
            <nav className={sidebarStyles.sidebar}>
              {Object.keys(subSections).map((ele, subSectionIndex) => {
                return selectedSubSection === subSectionIndex ? (
                  <div key={subSectionIndex}>
                    <h4 className={sidebarStyles.groupTitle}>
                      <a
                        style={{ cursor: 'pointer', color: 'black' }}
                        onClick={() => changeSubsection(subSectionIndex)}
                      >
                        {ele.replace(/_/g, ' ')}
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
                              onClick={() => changePage(subSectionIndex, node)}
                            >
                              <a
                                style={{
                                  cursor: 'pointer'
                                }}
                              >
                                {node.frontmatter.title.replace(/_/g, ' ')}
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
                        {ele.replace(/_/g, ' ')}
                      </a>
                    </h4>
                  </div>
                )
              })}
            </nav>
          </aside>
          <article className={styles.main}>
            <MarkdownTemplate data={elem}></MarkdownTemplate>
          </article>
        </main>
      </Content>
    </Layout>
  )
}

MarkdownList.propTypes = {
  pageContext: PropTypes.object.isRequired
}

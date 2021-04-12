import React, { useState } from 'react'
import Layout from '../components/Layout'
import HeaderSection from '../components/HeaderSection'
import Content from '../components/Content'
import styles from '../templates/Doc.module.scss'
import MarkdownTemplate from './MarkdownTemplate'

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
            <ul>
              {Object.keys(subSections).map((ele, subSectionIndex) => {
                return selectedSubSection === subSectionIndex ? (
                  <li key={subSectionIndex}>
                    <a
                      style={{ cursor: 'pointer', color: 'black' }}
                      onClick={() => changeSubsection(subSectionIndex)}
                    >
                      {ele.replace(/_/g, ' ')}
                    </a>
                    <ul>
                      {subSections[ele].map((node) => (
                        <li
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
                  </li>
                ) : (
                  <li>
                    <a
                      onClick={() => changeSubsection(subSectionIndex)}
                      style={{ cursor: 'pointer', color: '#8b98a9' }}
                    >
                      {ele.replace(/_/g, ' ')}
                    </a>
                  </li>
                )
              })}
            </ul>
          </aside>
          <article className={styles.main}>
            <MarkdownTemplate data={elem}></MarkdownTemplate>
          </article>
        </main>
      </Content>
    </Layout>
  )
}

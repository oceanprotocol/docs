import React, { useState } from 'react'
import Layout from '../components/Layout'
import HeaderSection from '../components/HeaderSection'
import Content from '../components/Content'
import styles from '../templates/Doc.module.scss'
import MarkdownTemplate from './MarkdownTemplate'

export default function MarkdownList({ pageContext }) {
  const sub_sections = {}
  pageContext.markdownList.map(({ node }) => {
    if (!sub_sections[node.frontmatter.sub_section]) {
      sub_sections[node.frontmatter.sub_section] = []
    }
    sub_sections[node.frontmatter.sub_section].push(node)
  })

  const [selectedSubSection, setSelectedSubSection] = useState(0)
  const [elem, setElem] = useState(
    sub_sections[Object.keys(sub_sections)[selectedSubSection]][0]
  )

  const changePage = (subSectionIndex, node) => {
    setElem(node)
    setSelectedSubSection(subSectionIndex)
  }

  const changeSubsection = (index) => {
    setSelectedSubSection(index)
    setElem(sub_sections[Object.keys(sub_sections)[index]][0])
  }

  return (
    <Layout>
      <HeaderSection title={pageContext.name} />
      <Content>
        <main className={styles.wrapper}>
          <aside className={styles.sidebar}>
            <ul>
              {Object.keys(sub_sections).map((ele, subSectionIndex) => {
                return selectedSubSection === subSectionIndex ? (
                  <li key={subSectionIndex}>
                    <div onClick={() => changeSubsection(subSectionIndex)}>
                      {ele.replace(/_/g, ' ')}
                    </div>
                    <ul>
                      {sub_sections[ele].map((node) => (
                        <li
                          key={node.id}
                          onClick={() => changePage(subSectionIndex, node)}
                        >
                          {node.frontmatter.title.replace(/_/g, ' ')}
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li>
                    <div onClick={() => changeSubsection(subSectionIndex)}>
                      {ele.replace(/_/g, ' ')}
                    </div>
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

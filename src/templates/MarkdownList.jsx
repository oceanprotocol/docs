import { Link } from "gatsby"
import React, {useState} from "react"
import Layout from "../components/Layout"
import HeaderSection from '../components/HeaderSection'
import Content from '../components/Content'
import styles from '../templates/Doc.module.scss'
import MarkdownTemplate from './MarkdownTemplate'
import stylesDoc from '../templates/Doc.module.scss'

export default function MarkdownList({pageContext}) {

  const sub_sections =  {}
  pageContext.markdownList.map(({node}, index) => {
    if(!sub_sections[node.frontmatter.sub_section]){
      sub_sections[node.frontmatter.sub_section] = []
    }
    sub_sections[node.frontmatter.sub_section].push(node)
  })

  const [selectedSubSection, setSelectedSubSection] = useState(0);
  const [elem, setElem] = useState(sub_sections[Object.keys(sub_sections)[selectedSubSection]][0]);


  const changePage = (sub_section_index, node)=>{
    setElem(node)
    setSelectedSubSection(sub_section_index)
  };

  const changeSubsection = (index)=>{
    setSelectedSubSection(index)
    setElem(sub_sections[Object.keys(sub_sections)[index]][0])

  };

  return (
    <Layout>
        <HeaderSection title={pageContext.name} />
        <Content>
        <main className={styles.wrapper}>
        <aside className={styles.sidebar}>
        <ul>
        {Object.keys(sub_sections).map((ele, sub_section_index)=>{return<li key={sub_section_index}>
         <div onClick={()=>changeSubsection(sub_section_index)}>{ele}</div> 
        <ul>
          {sub_sections[ele].map((node)=><li key={node.id} onClick={()=>changePage(sub_section_index, node)}>{node.frontmatter.title}</li>)}
        </ul>
        </li>})}
        </ul>
        </aside>
        <article className={stylesDoc.main}>
          <MarkdownTemplate data={elem}></MarkdownTemplate>
        </article>
        </main>
        </Content>
    </Layout>
  )
}



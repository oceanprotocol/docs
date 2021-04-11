import { Link } from "gatsby"
import React, {useState} from "react"
import Layout from "../components/Layout"
import HeaderSection from '../components/HeaderSection'
import Content from '../components/Content'
import styles from '../templates/Doc.module.scss'
import MarkdownTemplate from './MarkdownTemplate'
import stylesDoc from '../templates/Doc.module.scss'

export default function MarkdownList({pageContext}) {
  const [elem, setElem] = useState(0);
  const changePage= (index)=>{
    console.log("Onclickj")
    setElem(index)
  };
  return (
    <Layout>
        <HeaderSection title={pageContext.name} />
        <Content>
        <main className={styles.wrapper}>
        <aside className={styles.sidebar}>
        <ul>
         {pageContext.markdownList.map(({node}, index)=><li onClick={()=>changePage(index)} key={node.id}>
           {node.frontmatter.title}</li>)}
        </ul>
        </aside>
        {/* <MarkdownTemplate path={pageContext.markdownList[0]}></MarkdownTemplate> */}
        <article className={stylesDoc.main}>
          <MarkdownTemplate data={pageContext.markdownList[elem].node}></MarkdownTemplate>
        </article>
        </main>
        </Content>
    </Layout>
  )
}



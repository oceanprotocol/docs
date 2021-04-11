import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import HeaderSection from '../components/HeaderSection'
import Content from '../components/Content'
import styles from './Doc.module.scss'
import MarkdownTemplate from "./MarkdownTemplate"

export default function MarkdownList({pageContext}) {
  return (
    <Layout>
        <HeaderSection title={pageContext.name} />
        <Content>
        <main className={styles.wrapper}>
        <aside className={styles.sidebar}>
        <ul>
         {pageContext.markdownList.map(({node})=><li><Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link></li>)}
        </ul>
        </aside>
        {/* <MarkdownTemplate path={pageContext.markdownList[0]}></MarkdownTemplate> */}
        {/* {pageContext.markdownList[0]} */}
        </main>
        </Content>
    </Layout>
  )
}



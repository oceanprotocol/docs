import React from 'react'
import PropTypes from 'prop-types'
import MarkdownTemplate from '../MarkdownTemplate'
import sidebarStyles from '../../components/Sidebar.module.scss'
import { generatedNestedObject } from './utils'
import { navigate, graphql } from 'gatsby'
import ContentWrapperTemplate from '../ContentWrapperTemplate'

export default function MarkdownList({ data, location, pageContext }) {
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

  const path = location.pathname.replace(pageContext.baseUrl + '/', '')
  const found = pageContext.markdownList.find(({ node }) => {
    return node.frontmatter.slug === path
  })

  const selectedModule = found ? found.node : flattenedModules[moduleKeys[0]][0]

  const changeNodeid = (id) => {
    const found = pageContext.markdownList.find(({ node }) => {
      return node.id === id
    })

    navigate(pageContext.baseUrl + '/' + found.node.frontmatter.slug)
  }

  const generateModuleListElement = (id, label) => {
    const className =
      selectedModule.id === id ? sidebarStyles.active : sidebarStyles.link

    return (
      <li key={id} id={id} style={{ cursor: 'pointer' }}>
        <a className={className} onClick={() => changeNodeid(id)}>
          {label}
        </a>
      </li>
    )
  }

  const sidebarList = (title, nestedModules) => {
    const { id } = nestedModules

    if (id)
      return generateModuleListElement(nestedModules.id, nestedModules.label)

    const keys = Object.keys(nestedModules).sort()
    const children = []

    children.push(
      <li key={title}>
        <b>{title}</b>
      </li>
    )

    keys.forEach((element) => {
      children.push(
        <ul key={element}>{sidebarList(element, nestedModules[element])}</ul>
      )
    })
    return children
  }

  const nestedSidebarList = sidebarList('', nestedModules)

  return (
    <>
      <ContentWrapperTemplate
        data={data}
        path={path}
        location={location}
        slug={pageContext.baseUrl}
        info={{
          title: selectedModule.frontmatter.title,
          description: null,
          version: selectedModule.frontmatter.version
        }}
        toc={nestedSidebarList}
      >
        <MarkdownTemplate data={selectedModule} />
      </ContentWrapperTemplate>
    </>
  )
}

MarkdownList.propTypes = {
  pageContext: PropTypes.shape({
    name: PropTypes.string,
    baseUrl: PropTypes.string,
    markdownList: PropTypes.arrayOf(PropTypes.object)
  }),
  location: PropTypes.object.isRequired,
  data: PropTypes.object
}

export const MarkdownListQuery = graphql`
  query {
    allSectionsYaml {
      edges {
        node {
          title
          description
          link
        }
      }
    }
  }
`

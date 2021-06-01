import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import DocFooter from '../../components/DocFooter'

import Toc from './Toc'
import Paths from './Paths'

import styles from './index.module.scss'
import ContentWrapperTemplate from '../ContentWrapperTemplate'

const SwaggerMeta = ({ contact, license }) => (
  <ul className={styles.swaggerMeta}>
    {contact && (
      <li>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </li>
    )}
    {license && (
      <li>
        <a href={license.url}>{license.name}</a>
      </li>
    )}
  </ul>
)

SwaggerMeta.propTypes = {
  contact: PropTypes.object,
  license: PropTypes.object
}

const BasePath = ({ host, basePath }) => (
  <div className={styles.basePath}>
    <h2>Base Path</h2>
    <code>
      <span>{host}</span>
      {basePath}
    </code>
  </div>
)

BasePath.propTypes = {
  host: PropTypes.string,
  basePath: PropTypes.string
}

export default function ApiSwaggerTemplate({
  data,
  path,
  location,
  pageContext
}) {
  const { api } = pageContext
  const { host, basePath, info, paths } = api
  const { title, license, contact } = info

  return (
    <>
      <ContentWrapperTemplate
        data={data}
        path={path}
        location={location}
        pageContext={pageContext}
        info={info}
        toc={<Toc data={api} />}
      >
        {(contact || license) && (
          <SwaggerMeta contact={contact} license={license} />
        )}

        {(host || basePath) && <BasePath host={host} basePath={basePath} />}

        <Paths paths={paths} />

        <DocFooter
          url={`https://github.com/oceanprotocol/${title.toLowerCase()}`}
          externalName={`${title} Swagger spec`}
        />
      </ContentWrapperTemplate>
    </>
  )
}

export const apiSwaggerQuery = graphql`
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

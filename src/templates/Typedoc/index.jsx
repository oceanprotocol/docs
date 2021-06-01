import React from 'react'
import { graphql } from 'gatsby'

import Entities from './Entities'
import Toc from './Toc'

import ContentWrapperTemplate from '../ContentWrapperTemplate'

export default function TypedocTemplate({ data, path, location, pageContext }) {
  const { typedoc } = pageContext
  const { sourceUrl } = typedoc.info

  return (
    <>
      <ContentWrapperTemplate
        data={data}
        path={path}
        location={location}
        pageContext={pageContext}
        info={typedoc.info}
        toc={<Toc data={typedoc.children} />}
      >
        <Entities entities={typedoc.children} sourceUrl={sourceUrl} />
      </ContentWrapperTemplate>
    </>
  )
}

export const TypedocQuery = graphql`
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

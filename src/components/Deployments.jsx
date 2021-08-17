import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Content from '../components/Content'
import HeaderSection from '../components/HeaderSection'
import Sidebar from '../components/Sidebar'
import stylesDoc from '../templates/Doc.module.scss'
import Seo from './Seo'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export default function Deployments({ data, location }) {
  const [content, setContent] = useState(undefined)
  const [loading, setLoading] = useState(true)

  const networks = {
    'Ethereum Mainnet': {
      aquarius: 'https://aquarius.oceanprotocol.com',
      provider: 'https://provider.mainnet.oceanprotocol.com'
    },
    'Polygon Mainnet': {
      aquarius: 'https://aquarius.polygon.oceanprotocol.com',
      provider: 'https://provider.polygon.oceanprotocol.com'
    },
    'Binance Smart Chain': {
      aquarius: 'https://aquarius.oceanprotocol.com/',
      provider: 'https://provider.bsc.oceanprotocol.com'
    },
    Ropsten: {
      aquarius: 'https://aquarius.ropsten.oceanprotocol.com',
      provider: 'https://provider.ropsten.oceanprotocol.com'
    },
    Rinkeby: {
      aquarius: 'https://aquarius.oceanprotocol.com',
      provider: 'https://provider.rinkeby.oceanprotocol.com'
    },
    Mumbai: {
      aquarius: 'https://aquarius.mumbai.oceanprotocol.com',
      provider: 'https://provider.mumbai.oceanprotocol.com'
    }
  }

  useEffect(async () => {
    const table = await getTable(networks)
    setContent(table)
    setLoading(false)
  }, [])

  const getVersion = async (url) => {
    if (!url) return
    try {
      const data = await fetch(url)
      const { version } = await data.json()
      return version
    } catch {
      return '-'
    }
  }

  const getTable = async (networks) => {
    const objs = []

    for (const key of Object.keys(networks)) {
      const aquariusVerison = await getVersion(networks[key].aquarius)
      const providerVerison = await getVersion(networks[key].provider)
      objs.push(
        <tr key={key}>
          <td>{key}</td>
          <td>{aquariusVerison}</td>
          <td>{providerVerison}</td>
        </tr>
      )
    }

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Network</th>
              <th>Aquarius</th>
              <th>Provider</th>
            </tr>
          </thead>
          <tbody>{objs}</tbody>
        </table>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <body className="concepts" />
      </Helmet>

      <Seo
        title="Deployments"
        description=""
        slug="/concepts/deployments/"
        article
        location={location}
      />

      <Layout location={location}>
        <HeaderSection title="Core Concepts" />
        <Content>
          <main className={stylesDoc.wrapper}>
            <aside className={stylesDoc.sidebar}>
              <Sidebar location={location} sidebar="concepts" collapsed />
            </aside>
            <article className={stylesDoc.main}>
              <div>{loading ? <>Fetching versions</> : content}</div>
            </article>
          </main>
        </Content>
      </Layout>
    </>
  )
}

Deployments.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export const DeploymentsQuery = graphql`
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

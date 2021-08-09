import React from 'react'
import PropTypes from 'prop-types'
import slugify from 'slugify'
import Scrollspy from 'react-scrollspy'
import Scroll from '../../components/Scroll'
import { cleanPathKey } from './utils'
import stylesSidebar from '../../components/Sidebar.module.scss'

const Toc = ({ data }) => {
  const Ids = []

  const itemsV1 = Object.keys(data.paths)
    .filter((key) => key.startsWith('/api/v1/aquarius'))
    .map((key) => {
      Ids.push(slugify(key))

      return (
        <li key={key}>
          <Scroll type="id" element={`${slugify(key)}`} offset={-20}>
            <code>{cleanPathKey(key)}</code>
          </Scroll>
        </li>
      )
    })

  const itemsOther = Object.keys(data.paths)
    .filter((key) => !key.startsWith('/api/v1/aquarius'))
    .map((key) => {
      Ids.push(slugify(key))

      return (
        <li key={key}>
          <Scroll type="id" element={`${slugify(key)}`} offset={-20}>
            <code>{key}</code>
          </Scroll>
        </li>
      )
    })
  return (
    <Scrollspy
      items={Ids}
      currentClassName={stylesSidebar.scrollspyActive}
      offset={-100}
    >
      <code>/api/v1/aquarius</code>
      <ul>{itemsV1}</ul>
      {itemsOther.length ? (
        <>
          <code>Other REST endpoints</code>
          <ul>{itemsOther}</ul>
        </>
      ) : null}
    </Scrollspy>
  )
}

Toc.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default Toc

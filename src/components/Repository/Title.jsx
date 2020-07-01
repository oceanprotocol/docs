import React from 'react'
import PropTypes from 'prop-types'
import styles from './Title.module.scss'

import { ReactComponent as Forks } from '../../images/forks.svg'

export default function Title({ name, isFork, parent, releases, url }) {
  return (
    <h1 className={styles.title}>
      <a href={url}>
        {isFork && <Forks />}
        {name}
        {isFork && (
          <span className={styles.forkLine}>{parent.nameWithOwner}</span>
        )}
      </a>
      {releases.edges[0] && (
        <a
          href={`${url}/releases`}
          className={styles.repositoryRelease}
          title="Latest release"
        >
          {releases.edges[0].node.tag.name}
        </a>
      )}
    </h1>
  )
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
  isFork: PropTypes.bool,
  parent: PropTypes.shape({
    nameWithOwner: PropTypes.string
  }),
  releases: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
}

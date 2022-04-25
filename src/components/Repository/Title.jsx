import React from 'react'
import PropTypes from 'prop-types'
import styles from './Title.module.scss'
import { v3Versions } from '../../../config'

import { ReactComponent as Forks } from '../../images/forks.svg'

export default function Title({ name, isFork, parent, releases, url }) {
  const releaseVersion = v3Versions[name]
    ? v3Versions[name]
    : releases.edges[0] && releases.edges[0].node.tag.name

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
          href={`${url}/releases/tag/${releaseVersion}`}
          className={styles.repositoryRelease}
          title="Latest release"
        >
          {releaseVersion}
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

import React from 'react'
import styles from './Badge.module.scss'
import PropTypes from 'prop-types'

export default function Badge({ label, size }) {
  return (
    <span className={styles.badge} style={{ fontSize: size }}>
      {label}
    </span>
  )
}

Badge.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string
}

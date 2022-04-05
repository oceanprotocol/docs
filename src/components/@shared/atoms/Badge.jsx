import React from 'react'
import styles from './Badge.module.scss'
import PropTypes from 'prop-types'

export default function Badge({ label }) {
  return <span className={styles.badge}>{label}</span>
}

Badge.propTypes = {
  label: PropTypes.string
}

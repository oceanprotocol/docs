import React from 'react'
import PropTypes from 'prop-types'
import styles from './Content.module.scss'

const Content = ({ children }) => (
    <div className={styles.content}>{children}</div>
)

Content.propTypes = {
    children: PropTypes.any.isRequired
}

export default Content

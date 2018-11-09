import React from 'react'
import PropTypes from 'prop-types'
import styles from './Content.module.scss'

const Content = ({ children }) => (
    <section className={styles.content}>{children}</section>
)

Content.propTypes = {
    children: PropTypes.any.isRequired
}

export default Content

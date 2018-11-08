import React from 'react'
import PropTypes from 'prop-types'
import Content from './Content'
import styles from './HeaderSection.module.scss'

const HeaderSection = ({ title }) => (
    <header className={styles.headerSection}>
        <Content>
            <h1 className={styles.headerSectionTitle}>{title}</h1>
        </Content>
    </header>
)

HeaderSection.propTypes = {
    title: PropTypes.string
}

export default HeaderSection

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Content from './Content'
import styles from './HeaderSection.module.scss'

const HeaderSection = ({ title }) => (
    <header className={styles.headerSection}>
        <Content>
            <h1 className={styles.headerSectionTitle}>
                <Link className={styles.rootLink} to="/">
                    /
                </Link>
                {title}
            </h1>
        </Content>
    </header>
)

HeaderSection.propTypes = {
    title: PropTypes.array
}

export default HeaderSection

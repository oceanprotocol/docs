import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { ReactComponent as Logo } from '@oceanprotocol/art/logo/logo-white.svg'
import styles from './Header.module.scss'

const Header = ({ siteTitle }) => (
    <header className={styles.header}>
        <div className={styles.headerContent}>
            <Link to={'/'} className={styles.headerLogo}>
                <Logo className={styles.headerLogoImage} />
                <h1 className={styles.headerTitle}>{siteTitle}</h1>
            </Link>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string
}

export default Header

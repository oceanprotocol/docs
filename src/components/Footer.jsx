import React from 'react'
import Content from '../components/Content'
import styles from './Footer.module.scss'

const Footer = () => (
    <footer className={styles.footer}>
        <Content>
            <small>
                &copy; {new Date().getFullYear()}{' '}
                <a href="https://oceanprotocol.com">
                    Ocean Protocol Foundation Ltd.
                </a>{' '}
                &mdash; All Rights Reserved
            </small>

            <nav className={styles.links}>
                <a href="https://blog.oceanprotocol.com">Blog</a>
                <a href="https://twitter.com/oceanprotocol">Twitter</a>
                <a href="https://github.com/oceanprotocol">GitHub</a>
            </nav>
        </Content>
    </footer>
)

export default Footer

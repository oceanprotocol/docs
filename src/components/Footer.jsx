import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Content from '../components/Content'
import styles from './Footer.module.scss'

const query = graphql`
    query {
        site {
            siteMetadata {
                siteCompany
                social {
                    site
                    blog
                    github
                    twitter
                    gitter
                    telegram
                }
            }
        }
    }
`

const FooterSocial = ({ social }) => (
    <nav className={styles.links}>
        {Object.keys(social).map(key => (
            <a key={key} href={social[key]}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
            </a>
        ))}
    </nav>
)

FooterSocial.propTypes = {
    social: PropTypes.object
}

const Footer = () => (
    <StaticQuery
        query={query}
        render={data => {
            const { siteCompany, social } = data.site.siteMetadata

            return (
                <footer className={styles.footer}>
                    <Content>
                        <small>
                            &copy; {new Date().getFullYear()}{' '}
                            <a href={social.site}>{siteCompany}</a> &mdash; All
                            Rights Reserved
                        </small>

                        <FooterSocial social={social} />
                    </Content>
                </footer>
            )
        }}
    />
)

export default Footer

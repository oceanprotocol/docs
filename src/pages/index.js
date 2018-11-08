import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Content from '../components/Content'
// import styles from './index.module.scss'

const SectionLink = ({ to, title, children }) => (
    <Link to={to}>
        <h3>{title}</h3>
        <p>{children}</p>
    </Link>
)

SectionLink.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.any
}

const IndexPage = ({ location }) => (
    <Layout location={location}>
        <Content>
            <SectionLink to="/concepts/introduction/" title="Core Concepts">
                Understand the fundamentals of Ocean Protocol.
            </SectionLink>

            <SectionLink to="/setup/keeper/" title="Setup Guides">
                Setting up the Ocean Protocol components.
            </SectionLink>

            <SectionLink to="/tutorials/jupyter/" title="Tutorials">
                Browse tutorials for most common setup and development
                use-cases.
            </SectionLink>
        </Content>
    </Layout>
)

IndexPage.propTypes = {
    location: PropTypes.object.isRequired
}

export default IndexPage

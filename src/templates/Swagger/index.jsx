import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../../components/Layout'
import Content from '../../components/Content'
import HeaderSection from '../../components/HeaderSection'
import Sidebar from '../../components/Sidebar'
import DocHeader from '../../components/DocHeader'
import DocFooter from '../../components/DocFooter'
import SEO from '../../components/Seo'

import Toc from './Toc'
import Paths from './Paths'

import stylesDoc from '../Doc.module.scss'
import styles from './index.module.scss'

const BasePath = ({ host, basePath }) => (
    <div className={styles.basePath}>
        <h2>Base Path</h2>
        <code>
            <span>{host}</span>
            {basePath}
        </code>
    </div>
)

BasePath.propTypes = {
    host: PropTypes.string,
    basePath: PropTypes.string
}

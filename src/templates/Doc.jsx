import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content from '../components/Content'
import HeaderSection from '../components/HeaderSection'
import Sidebar from '../components/Sidebar'
import styles from './Doc.module.scss'

export default class DocTemplate extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired
    }

    render() {
        const { location } = this.props
        const post = this.props.data.markdownRemark
        const { section } = post.fields

        return (
            <Layout location={location}>
                <HeaderSection title={section} />
                <Content>
                    <div className={styles.wrapper}>
                        <aside className={styles.sidebar}>
                            <Sidebar location={location} sidebar={section} />
                        </aside>

                        <main className={styles.main}>
                            <h1>{post.frontmatter.title}</h1>
                            <div
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                        </main>
                    </div>
                </Content>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
    query DocBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt
            html
            frontmatter {
                title
            }
            fields {
                section
            }
        }
    }
`

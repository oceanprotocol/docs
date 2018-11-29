/* eslint-disable no-console */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { redirects } = require('./config')

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const fileNode = getNode(node.parent)
        const parsedFilePath = path.parse(fileNode.relativePath)

        let slug = createFilePath({ node, getNode, basePath: 'content' })
        let section = parsedFilePath.dir

        if (node.frontmatter.slug) {
            ;({ slug } = node.frontmatter)
        }

        if (node.frontmatter.section) {
            ;({ section } = node.frontmatter)
        }

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })

        createNodeField({
            node,
            name: 'section',
            value: section
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions

    //
    // create redirects
    //
    redirects.forEach(({ from, to }) => {
        createRedirect({
            fromPath: from,
            redirectInBrowser: true,
            toPath: to
        })

        console.log('Create redirect: ' + from + ' --> ' + to)
    })

    return new Promise((resolve, reject) => {
        resolve(
            graphql(
                `
                    {
                        allMarkdownRemark(
                            filter: { fileAbsolutePath: { regex: "/content/" } }
                        ) {
                            edges {
                                node {
                                    fields {
                                        slug
                                        section
                                    }
                                }
                            }
                        }

                        devOceanDocs: allMarkdownRemark(
                            filter: {
                                fileAbsolutePath: { regex: "/dev-ocean/doc/" }
                            }
                        ) {
                            edges {
                                node {
                                    fields {
                                        slug
                                        section
                                    }
                                    frontmatter {
                                        slug
                                        title
                                        description
                                        section
                                    }
                                }
                            }
                        }
                    }
                `
            ).then(result => {
                if (result.errors) {
                    /* eslint-disable-next-line no-console */
                    console.log(result.errors)
                    reject(result.errors)
                }

                const docTemplate = path.resolve('./src/templates/Doc.jsx')
                const posts = result.data.allMarkdownRemark.edges

                // Create Doc pages
                posts.forEach(post => {
                    createPage({
                        path: `${post.node.fields.slug}`,
                        component: docTemplate,
                        context: {
                            slug: post.node.fields.slug,
                            section: post.node.fields.section
                        }
                    })
                })

                // Create pages from dev-ocean contents
                const postsDevOcean = result.data.devOceanDocs.edges

                postsDevOcean
                    // only grab files with required frontmatter defined
                    .filter(
                        post =>
                            post.node.frontmatter &&
                            post.node.frontmatter.slug &&
                            post.node.frontmatter.title &&
                            post.node.frontmatter.description &&
                            post.node.frontmatter.section
                    )
                    .forEach(post => {
                        createPage({
                            path: `${post.node.fields.slug}`,
                            component: docTemplate,
                            context: {
                                slug: post.node.fields.slug,
                                section: post.node.fields.section
                            }
                        })
                    })

                resolve()
            })
        )
    })
}

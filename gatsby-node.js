const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

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
    const { createPage } = actions

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

                        architectureDocs: allMarkdownRemark(
                            filter: {
                                fileAbsolutePath: {
                                    regex: "/dev-ocean/doc/architecture.md/"
                                }
                            }
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

                // Create Architecture section from dev-ocean contents
                const postsArchitecture = result.data.architectureDocs.edges

                postsArchitecture.forEach(post => {
                    createPage({
                        path: `${post.node.fields.slug}`,
                        component: docTemplate,
                        context: {
                            slug: post.node.fields.slug,
                            section: post.node.fields.section
                        }
                    })
                })

                // createPage({
                //     path: '/concepts/architecture/',
                //     component: docTemplate,
                //     context: {
                //         slug: post.node.fields.slug,
                //         section: post.node.fields.section
                //     }
                // })

                // const docRepoTemplate = path.resolve(
                //     './src/templates/DocRepo.jsx'
                // )

                // createPage({
                //     path: '/concepts/architecture/',
                //     component: docRepoTemplate,
                //     context: {
                //         slug: '/concepts/architecture/',
                //         section: 'concepts',
                //         title: 'Architecture',
                //         description: 'Hello description',
                //         content: `${result.data.github.repository.root.text}`
                //     }
                // })

                // createPage({
                //     path: '/concepts/squid/',
                //     component: docRepoTemplate,
                //     context: {
                //         slug: '/concepts/squid/',
                //         section: 'concepts',
                //         title: 'Squid',
                //         description: 'Hello description',
                //         content: `${result.data.github.repository.squid.text}`
                //     }
                // })

                resolve()
            })
        )
    })
}

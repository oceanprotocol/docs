const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const fileNode = getNode(node.parent)
        const parsedFilePath = path.parse(fileNode.relativePath)
        const slug = createFilePath({ node, getNode, basePath: 'content' })
        const section = parsedFilePath.dir

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

    //     // console.log(node)

    //     // if (node.internal.owner === 'gatsby-source-graphql') {
    //     //     console.log(node)
    //     // }
}

// exports.sourceNodes = (
//     { actions, createNodeId, createContentDigest },
//     configOptions
// ) => {
//     const { createNode } = actions

//     // Gatsby adds a configOption that's not needed for this plugin, delete it
//     delete configOptions.plugins

//     createNode({
//         // Data for the node.
//         field1: `a string`,
//         field2: 10,
//         field3: true,
//         ...arbitraryOtherData,

//         // Required fields.
//         id: `a-node-id`,
//         parent: `the-id-of-the-parent-node`, // or null if it's a source node without a parent
//         children: [],
//         internal: {
//             type: `CoolServiceMarkdownField`,
//             contentDigest: crypto
//                 .createHash(`md5`)
//                 .update(JSON.stringify(fieldData))
//                 .digest(`hex`),
//             mediaType: `text/markdown`, // optional
//             content: JSON.stringify(fieldData), // optional
//             description: `Cool Service: "Title of entry"` // optional
//         }
//     })
// }

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

                        github {
                            repository(
                                owner: "oceanprotocol"
                                name: "dev-ocean"
                            ) {
                                root: object(
                                    expression: "master:doc/architecture.md"
                                ) {
                                    ... on GitHub_Blob {
                                        text
                                    }
                                }
                                squid: object(
                                    expression: "master:doc/architecture/squid.md"
                                ) {
                                    ... on GitHub_Blob {
                                        text
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
                const docRepoTemplate = path.resolve(
                    './src/templates/DocRepo.jsx'
                )

                createPage({
                    path: '/concepts/architecture/',
                    component: docRepoTemplate,
                    context: {
                        slug: '/concepts/architecture/',
                        section: 'concepts',
                        title: 'Architecture',
                        description: 'Hello description',
                        content: `${result.data.github.repository.root.text}`
                    }
                })

                createPage({
                    path: '/concepts/squid/',
                    component: docRepoTemplate,
                    context: {
                        slug: '/concepts/squid/',
                        section: 'concepts',
                        title: 'Squid',
                        description: 'Hello description',
                        content: `${result.data.github.repository.squid.text}`
                    }
                })

                resolve()
            })
        )
    })
}

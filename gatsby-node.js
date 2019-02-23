/* eslint-disable no-console */

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const Swagger = require('swagger-client')
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

// https://github.com/swagger-api/swagger-js
const getSpec = async () => {
    const spec = await Swagger(
        'http://petstore.swagger.io/v2/swagger.json'
    ).then(client => {
        return client.spec // The resolved spec

        // client.originalSpec // In case you need it
        // client.errors // Any resolver errors

        // Tags interface
        // client.apis.pet.addPet({id: 1, name: "bobby"}).then(...)

        // TryItOut Executor, with the `spec` already provided
        // client.execute({operationId: 'addPet', parameters: {id: 1, name: "bobby") }).then(...)
    })

    return spec
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions

    return new Promise((resolve, reject) => {
        resolve(
            graphql(
                `
                    query {
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
            ).then(async result => {
                if (result.errors) {
                    console.log(result.errors)
                    reject(result.errors)
                }

                const docTemplate = path.resolve('./src/templates/Doc.jsx')
                const posts = result.data.allMarkdownRemark.edges

                //
                // Create Doc pages
                //
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

                //
                // Create pages from dev-ocean contents
                //
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

                //
                // Create pages from swagger json files
                //
                const apiSwaggerTemplate = path.resolve(
                    './src/templates/Swagger/index.jsx'
                )

                const petStoreSlug = '/references/petstore/'

                try {
                    const spec = await getSpec()

                    createPage({
                        path: petStoreSlug,
                        component: apiSwaggerTemplate,
                        context: {
                            slug: petStoreSlug,
                            api: spec
                        }
                    })
                } catch (error) {
                    console.log(error)
                }

                const aquariusSpecs = require('./data/aquarius.json')
                const aquariusSlug = '/references/aquarius/'

                createPage({
                    path: aquariusSlug,
                    component: apiSwaggerTemplate,
                    context: {
                        slug: aquariusSlug,
                        api: aquariusSpecs
                    }
                })

                const brizoSpecs = require('./data/brizo.json')
                const brizoSlug = '/references/brizo/'

                createPage({
                    path: brizoSlug,
                    component: apiSwaggerTemplate,
                    context: {
                        slug: brizoSlug,
                        api: brizoSpecs
                    }
                })

                //
                // Create pages from TypeDoc json files
                //
                const typeDocSpecs = ['./data/squid-js.json']
                const typedocTemplate = path.resolve(
                    './src/templates/Typedoc/index.jsx'
                )

                typeDocSpecs.forEach(spec => {
                    const typedoc = require(spec) // eslint-disable-line

                    const name = path
                        .basename(spec)
                        .split('.json')
                        .join('')

                    const slug = `/references/${name}/`

                    createPage({
                        path: slug,
                        component: typedocTemplate,
                        context: {
                            slug,
                            typedoc,
                            // TODO: defining these classes for inclusion
                            // needs to be handled somewhere else to keep
                            // it generic for all TypeDoc specs
                            classes: [
                                'ocean/Ocean',
                                'ocean/OceanAccounts',
                                'ocean/OceanAssets',
                                'ocean/OceanAgreements',
                                'ocean/Account',
                                'ocean/DID',
                                'ocean/ServiceAgreements/ServiceAgreement',
                                'ddo/DDO',
                                'ddo/Service',
                                'aquarius/AquariusProvider',
                                'aquarius/Aquarius',
                                'aquarius/query/SearchQuery',
                                'brizo/BrizoProvider',
                                'brizo/Brizo',
                                'keeper/Keeper',
                                'keeper/Web3Provider',
                                'secretstore/SecretStoreProvider',
                                'models/Config',
                                'models/Balance'
                            ]
                        }
                    })
                })

                //
                // Create pages from Javadoc json files
                //
                const javadocSpecs = ['./data/squid-java.json']
                const javadocTemplate = path.resolve(
                    './src/templates/Javadoc/index.jsx'
                )

                javadocSpecs.forEach(spec => {
                    const javadoc = require(spec) // eslint-disable-line

                    const name = path
                        .basename(spec)
                        .split('.json')
                        .join('')

                    const slug = `/references/${name}/`

                    createPage({
                        path: slug,
                        component: javadocTemplate,
                        context: {
                            slug,
                            javadoc
                        }
                    })
                })

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

                resolve()
            })
        )
    })
}

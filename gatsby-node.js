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

            oceanJs: github {
              repository(name: "ocean.js", owner: "oceanprotocol") {
                name
                releases(
                  first: 30
                  orderBy: { field: CREATED_AT, direction: DESC }
                ) {
                  edges {
                    node {
                      isPrerelease
                      isDraft
                      releaseAssets(first: 1, name: "lib.json") {
                        edges {
                          node {
                            name
                            downloadUrl
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `
      ).then(async (result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const docTemplate = path.resolve('./src/templates/Doc.jsx')
        const posts = result.data.allMarkdownRemark.edges

        //
        // Create Doc pages
        //
        posts.forEach((post) => {
          createPage({
            path: `${post.node.fields.slug}`,
            component: docTemplate,
            context: {
              slug: post.node.fields.slug,
              section: post.node.fields.section
            }
          })
        })

        // API: brizo, aquarius
        await createSwaggerPages(createPage)

        // API: ocean.js
        const lastRelease = result.data.oceanJs.repository.releases.edges.filter(
          ({ node }) => !node.isPrerelease && !node.isDraft
        )[0].node.releaseAssets.edges[0].node

        await createTypeDocPage(
          createPage,
          result.data.oceanJs.repository.name,
          lastRelease.downloadUrl
        )

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

//
// Create pages from TypeDoc json files
//
const createTypeDocPage = async (createPage, name, downloadUrl) => {
  try {
    const typedoc = require('./ocean.js.json')
    // const typedoc = await fetch(downloadUrl)
    const typedocTemplate = path.resolve('./src/templates/Typedoc/index.jsx')
    const slug = `/references/${name}/`

    createPage({
      path: slug,
      component: typedocTemplate,
      context: {
        slug,
        typedoc
        // typedoc: await typedoc.json()
      }
    })
  } catch (error) {
    console.log(error.message)
  }
}

//
// Create pages from swagger json files
//
// https://github.com/swagger-api/swagger-js
const fetchSwaggerSpec = async (component) => {
  try {
    const client = await Swagger(
      `https://${component}.mainnet.oceanprotocol.com/spec`
    )
    return client.spec // The resolved spec

    // client.originalSpec // In case you need it
    // client.errors // Any resolver errors

    // Tags interface
    // client.apis.pet.addPet({id: 1, name: "bobby"}).then(...)

    // TryItOut Executor, with the `spec` already provided
    // client.execute({operationId: 'addPet', parameters: {id: 1, name: "bobby") }).then(...)
  } catch (error) {
    console.error(error.message)
  }
}

const createSwaggerPages = async (createPage) => {
  const swaggerComponents = ['aquarius', 'provider']
  const apiSwaggerTemplate = path.resolve('./src/templates/Swagger/index.jsx')

  const getSlug = (name) => `/references/${name}/`

  for (const component of swaggerComponents) {
    const slug = getSlug(component)

    createPage({
      path: slug,
      component: apiSwaggerTemplate,
      context: {
        slug,
        name: component,
        api: await fetchSwaggerSpec(component)
      }
    })
  }

  // Swagger Pet Store example
  const petStoreSlug = '/references/petstore/'

  try {
    const client = await Swagger(`http://petstore.swagger.io/v2/swagger.json`)

    createPage({
      path: petStoreSlug,
      component: apiSwaggerTemplate,
      context: {
        slug: petStoreSlug,
        api: client.spec
      }
    })
  } catch (error) {
    console.error(error.message)
  }
}

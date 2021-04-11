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

            allRepoMarkdown: allMarkdownRemark (
                filter: { fileAbsolutePath: { regex: "/markdowns/" } }
              ) {
                edges {
                  node {
                    id
                    html
                    frontmatter {
                      slug
                      title
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

        // console.log("Query result:", JSON.stringify(result))
        const markdowns = result.data.allRepoMarkdown.edges
        const prefix = '/read-the-docs'
        let oceanPyList = markdowns.filter(({node}) => node.frontmatter.slug.startsWith(prefix + '/ocean-py/'))
        let aquariusList = markdowns.filter(({node}) => node.frontmatter.slug.startsWith(prefix + '/aquarius/'))
        let providerList = markdowns.filter(({node}) => node.frontmatter.slug.startsWith(prefix + '/provider/'))


        await createReadTheDocsPage(createPage, 'oceanpy', oceanPyList)
        await createReadTheDocsPage(createPage, 'aquarius', aquariusList)
        await createReadTheDocsPage(createPage, 'provider', providerList)


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
    const typedoc = await fetch(downloadUrl)
    const typedocTemplate = path.resolve('./src/templates/Typedoc/index.jsx')
    const slug = `/references/${name}/`

    createPage({
      path: slug,
      component: typedocTemplate,
      context: {
        slug,
        typedoc: await typedoc.json(),
        // We define the classes here so the data object passed as page context
        // is as small as possible.
        // Caveat: no live update during development when these values are changed.
        //
        // TODO: defining these classes for inclusion
        // needs to be handled somewhere else to keep
        // it generic for all TypeDoc specs
        classes: [
          'ocean/Ocean',
          'ocean/Account',
          'ocean/Assets',
          'ocean/Compute',
          'ocean/Versions',
          'ocean/DID',
          'ddo/DDO',
          'metadatacache/MetadataCache',
          'metadatacache/OnChainMetaDataCache',
          'provider/Provider',
          'datatokens/Datatokens',
          'datatokens/Network',
          'datatokens/Web3Provider',
          'balancer/OceanPool',
          'balancer/Pool',
          'balancer/PoolFactory',
          'exchange/FixedRateExchange',
          'models/Config',
          'utils/ConfigHelper',
          'utils/GasUtils',
          'ocean/utils/OceanUtils',
          'ocean/utils/WebServiceConnector',
          'utils/Logger'
        ]
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

const createReadTheDocsPage = async (createPage, name, list)=>{
  const markdownListTemplate = path.resolve('./src/templates/MarkdownList.jsx')
  createPage({
    path: `/read-the-docs/${name}`,
    component: markdownListTemplate,
    context: {
      markdownList: list,
      name: name
    }
  })

  list.forEach((element)=>{
    createMarkdownPage(createPage, element)
  })

}


const createMarkdownPage = async (createPage, element)=>{
  // console.log("element", JSON.stringify(element.node.frontmatter))
  const markdownTemplate = path.resolve('./src/templates/MarkdownTemplate.jsx')
  createPage({
    path: element.node.frontmatter.slug,
    component: markdownTemplate
  })
}
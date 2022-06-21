require('dotenv').config()

if (!process.env.GITHUB_TOKEN) {
  throw new Error(
    `A GitHub token is required to build the site. Check the README
        \nhttps://github.com/oceanprotocol/docs.`
  )
}

const config = require('./config.js')

module.exports = {
  siteMetadata: {
    // spread all of our config values here
    // so they can easily be queried with GraphQL
    ...config
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'art',
        path: `${__dirname}/node_modules/@oceanprotocol/art`
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
        refetchInterval: 300 // 5 min.
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 666,
              quality: 80,
              withWebp: true,
              linkImagesToOriginal: false,
              showCaptions: true
            }
          },
          'gatsby-remark-smartypants',
          'gatsby-remark-embed-video',
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-autolink-headers',
          'gatsby-remark-code-titles',
          {
            // https://github.com/andrewbranch/gatsby-remark-vscode
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: 'Quiet Light',
              injectStyles: false,
              languageAliases: {
                text: 'log'
              }
            }
          },
          {
            resolve: 'gatsby-remark-component',
            options: {
              components: ['repo']
            }
          }
        ]
      }
    },
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          includePaths: [`${__dirname}/node_modules`, `${__dirname}/src/styles`]
        }
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        icon: true,
        viewBox: false
        // see https://github.com/smooth-code/svgr for a list of all options
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/test', '/references/petstore']
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteShortTitle,
        description: config.siteDescription,
        start_url: '/',
        background_color: '#e2e2e2',
        theme_color: '#141414',
        display: 'minimal-ui',
        icon: config.siteIcon
      }
    },
    'gatsby-plugin-webpack-size',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-git`,
      options: {
        name: 'repo-read-the-docs',
        remote: `https://github.com/oceanprotocol/readthedocs.git`,
        local: 'read-the-docs',
        branch: 'v4',
        patterns: [
          'read-the-docs/ocean-py',
          'read-the-docs/aquarius',
          'read-the-docs/provider'
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/read-the-docs/markdowns`,
        name: 'markdowns'
      }
    },
    `gatsby-transformer-remark-plaintext`
  ]
}

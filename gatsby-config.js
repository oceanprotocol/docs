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
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'dev-ocean',
                path: `${__dirname}/external/dev-ocean/doc`
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
                        resolve: 'gatsby-remark-draw',
                        options: {
                            strategy: 'img',
                            mermaid: {
                                theme: 'default',
                                backgroundColor: 'transparent'
                            }
                        }
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 666,
                            quality: 80,
                            withWebp: true,
                            linkImagesToOriginal: true,
                            showCaptions: true,
                            sizeByPixelDensity: true
                        }
                    },
                    {
                        resolve: 'gatsby-remark-github',
                        options: {
                            marker: 'GITHUB-EMBED',
                            insertEllipsisComments: true,
                            ellipsisPhrase: '...',
                            useCache: true,
                            cacheKey: 'gatsby-remark-github-v1',
                            token: process.env.GITHUB_TOKEN
                        }
                    },
                    'gatsby-remark-smartypants',
                    'gatsby-remark-embed-video',
                    'gatsby-remark-responsive-iframe',
                    'gatsby-remark-prismjs',
                    'gatsby-remark-autolink-headers',
                    'gatsby-remark-copy-linked-files',
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
                includePaths: [
                    `${__dirname}/node_modules`,
                    `${__dirname}/src/styles`
                ]
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
                exclude: ['/test/', '/references/petstore/']
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
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: config.analyticsId,
                head: false,
                anonymize: true,
                respectDNT: true,
                cookieDomain: 'oceanprotocol.com'
            }
        }
    ]
}

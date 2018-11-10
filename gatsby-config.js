const config = {
    title: 'Ocean Protocol Documentation',
    description:
        'Learn everything you need to know to develop with Ocean Protocol. This should be a bit longer cause it is also the meta description so why not write some more.',
    siteUrl: process.env.SITE_URL || 'https://docs.oceanprotocol.com',
    analyticsId: 'UA-60614729-11'
}

module.exports = {
    siteMetadata: {
        siteTitle: config.title,
        siteDescription: config.description,
        siteUrl: config.siteUrl
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
                    'gatsby-remark-prismjs',
                    'gatsby-remark-autolink-headers',
                    'gatsby-remark-copy-linked-files'
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
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: config.title,
                short_name: 'Docs',
                description: config.description,
                start_url: '/',
                background_color: '#e2e2e2',
                theme_color: '#141414',
                display: 'minimal-ui',
                icon: 'src/images/profile.png'
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

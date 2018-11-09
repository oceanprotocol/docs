const title = 'Ocean Protocol Documentation'
const description =
    'Learn everything about how to develop with Ocean Prototocol'
const siteUrl = process.env.SITE_URL || 'https://docs.oceanprotocol.com'

module.exports = {
    siteMetadata: {
        title,
        description,
        siteUrl
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
                            maxWidth: 640,
                            quality: 80,
                            withWebp: true,
                            linkImagesToOriginal: false,
                            showCaptions: true
                        }
                    },
                    'gatsby-remark-smartypants',
                    'gatsby-remark-prismjs',
                    'gatsby-remark-autolink-headers',
                    'gatsby-remark-relative-linker'
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
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: title,
                short_name: 'Docs',
                start_url: '/',
                background_color: '#e2e2e2',
                theme_color: '#141414',
                display: 'minimal-ui',
                icon: 'src/images/profile.png'
            }
        },
        'gatsby-plugin-offline'
    ]
}

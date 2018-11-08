module.exports = {
    siteMetadata: {
        title: 'Ocean Protocol Documentation',
        description: '',
        siteUrl: process.env.SITE_URL || 'https://docs.oceanprotocol.com'
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
                path: `${__dirname}/src/data`
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 756,
                            quality: 80,
                            withWebp: true,
                            linkImagesToOriginal: false,
                            showCaptions: true
                        }
                    },
                    'gatsby-remark-smartypants',
                    'gatsby-remark-prismjs',
                    'gatsby-remark-autolink-headers'
                ]
            }
        },
        'gatsby-transformer-yaml',
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                includePaths: [`${__dirname}/src/styles`]
            }
        },
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
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp'
        // 'gatsby-plugin-offline',
    ]
}

module.exports = {
    siteMetadata: {
        title: 'Ocean Protocol Docs',
        descritpion: '',
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
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 600
                        }
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-autolink-headers'
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                includePaths: [`${__dirname}/src/styles`]
            }
        },
        'gatsby-plugin-react-svg',
        'gatsby-plugin-catch-links',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp'
        // 'gatsby-plugin-offline',
    ]
}

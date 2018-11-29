module.exports = {
    siteTitle: 'Ocean Protocol Documentation',
    siteShortTitle: 'Docs',
    siteDescription:
        'Learn about the components of the Ocean Protocol software stack, and how to run or use the components relevant to you.',
    siteUrl: process.env.SITE_URL || 'https://docs.oceanprotocol.com',
    siteIcon: 'node_modules/@oceanprotocol/art/logo/favicon-black.png',
    siteCompany: 'Ocean Protocol Foundation Ltd.',
    analyticsId: 'UA-60614729-11',
    social: {
        site: 'https://oceanprotocol.com',
        blog: 'https://blog.oceanprotocol.com',
        github: 'https://github.com/oceanprotocol',
        twitter: 'https://twitter.com/oceanprotocol',
        gitter: 'https://gitter.im/oceanprotocol/Lobby',
        telegram: 'https://t.me/joinchat/GUyxrE0Hi154D0NrlOqLFg'
    },
    githubContentPath:
        'https://github.com/oceanprotocol/docs/blob/master/content',
    githubDevOceanPath:
        'https://github.com/oceanprotocol/dev-ocean/blob/master/doc',
    redirects: [
        {
            from: '/concepts/',
            to: '/concepts/introduction/'
        },
        {
            from: '/setup/',
            to: '/setup/quickstart/'
        },
        {
            from: '/tutorials/',
            to: '/tutorials/introduction/'
        },
        {
            from: '/references/',
            to: '/references/introduction/'
        }
    ]
}

module.exports = {
  siteTitle: 'Ocean Developer Documentation',
  siteShortTitle: 'Docs',
  siteDescription: 'Tools to Build Data Markets, and Manage ERC20 Data Assets',
  siteUrl: process.env.SITE_URL || 'https://docs.oceanprotocol.com',
  siteIcon: 'node_modules/@oceanprotocol/art/logo/favicon-black.png',
  siteCompany: 'Ocean Protocol Foundation Ltd.',
  analyticsId: 'UA-60614729-11',
  social: {
    Site: 'https://oceanprotocol.com',
    Blog: 'https://blog.oceanprotocol.com',
    GitHub: 'https://github.com/oceanprotocol',
    Twitter: 'https://twitter.com/oceanprotocol',
    Discord: 'https://discord.gg/TnXjkR5',
    Port: 'https://port.oceanprotocol.com',
    Telegram: 'https://t.me/OceanProtocol_Community'
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
      from: '/tutorials/',
      to: '/tutorials/introduction/'
    },
    {
      from: '/references/',
      to: '/references/introduction/'
    },
    {
      from: '/tutorials/wallets/',
      to: '/concepts/wallets/'
    },
    {
      from: '/references/ocean.js/',
      to: 'https://github.com/oceanprotocol/ocean.js'
    },
    {
      from: '/references/react/',
      to: 'https://github.com/oceanprotocol/react'
    },
    {
      from: '/references/ocean.py/',
      to: 'https://github.com/oceanprotocol/ocean.py'
    },
    {
      from: '/references/ocean-contracts/',
      to: 'https://github.com/oceanprotocol/ocean-contracts'
    },
    {
      from: '/references/aquarius/',
      to: 'https://github.com/oceanprotocol/aquarius'
    },
    {
      from: '/references/provider-py/',
      to: 'https://github.com/oceanprotocol/provider-py'
    }
  ]
}

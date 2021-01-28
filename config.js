module.exports = {
  siteTitle: 'Ocean Developer Documentation',
  siteShortTitle: 'Docs',
  siteDescription: 'Tools to Build Data Markets, and Manage ERC20 Data Assets',
  siteUrl: process.env.SITE_URL || 'https://docs.oceanprotocol.com',
  siteIcon: 'node_modules/@oceanprotocol/art/logo/favicon-black.png',
  siteCompany: 'Ocean Protocol Foundation Ltd.',
  social: {
    Site: 'https://oceanprotocol.com',
    Blog: 'https://blog.oceanprotocol.com',
    GitHub: 'https://github.com/oceanprotocol',
    Twitter: 'https://twitter.com/oceanprotocol',
    Discord: 'https://discord.gg/TnXjkR5',
    Port: 'https://port.oceanprotocol.com',
    Telegram: 'https://t.me/OceanProtocol_Community'
  },
  githubContentPath: 'https://github.com/oceanprotocol/docs/blob/main/content',
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
      from: '/concepts/wallets/',
      to: '/tutorials/wallets/'
    },
    {
      from: '/tutorials/get-ether-and-ocean-tokens/',
      to: '/concepts/get-ether-and-ocean-tokens/'
    },
    {
      from: '/tutorials/connect-to-networks/',
      to: '/concepts/connect-to-networks/'
    },
    {
      from: '/setup/compute-to-data/',
      to: '/tutorials/compute-to-data/'
    },
    {
      from: '/concepts/networks-overview/',
      to: '/concepts/networks/'
    },
    {
      from: '/concepts/network-ethmainnet/',
      to: '/concepts/networks/'
    },
    {
      from: '/concepts/network-rinkeby/',
      to: '/concepts/networks/'
    },
    {
      from: '/concepts/network-ropsten/',
      to: '/concepts/networks/'
    },
    {
      from: '/concepts/network-local/',
      to: '/concepts/networks/'
    },
    {
      from: '/concepts/connect-to-networks/',
      to: '/concepts/networks/'
    }
  ]
}

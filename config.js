module.exports = {
  siteTitle: 'Ocean Developer Documentation',
  siteShortTitle: 'Docs',
  siteDescription: 'Tools to Build Data Markets, and Manage ERC20 Data Assets',
  siteTagline: 'Ocean Protocol V4 public testing kicks off on ',
  siteTaglineURL: 'https://immunefi.com/bounty/oceanprotocol/',
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
      to: '/tutorials/compute-to-data-minikube/'
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
    },
    {
      from: '/concepts/oeps-did/',
      to: '/concepts/did-ddo/'
    },
    {
      from: '/concepts/oeps-asset-ddo/',
      to: '/concepts/ddo-metadata/'
    },
    {
      from: '/tutorials/azure-for-brizo/',
      to: '/tutorials/azure-for-provider/'
    },
    {
      from: '/tutorials/amazon-s3-for-brizo/',
      to: '/tutorials/amazon-s3-for-provider/'
    },
    {
      from: '/tutorials/on-premise-for-brizo/',
      to: '/tutorials/on-premise-for-provider/'
    },
    {
      from: '/tutorials/marketplace-fees/',
      to: '/concepts/fees/'
    }
  ],
  swaggerComponents: [
    {
      name: 'aquarius',
      url: 'https://v4.aquarius.oceanprotocol.com/spec'
    },
    {
      name: 'provider',
      url: 'https://provider.mainnet.oceanprotocol.com/spec'
    }
  ]
}

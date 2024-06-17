# Uploader UI

The [Uploader UI](https://github.com/oceanprotocol/uploader-ui-lib) stands as a robust UI react library dedicated to optimizing the uploading, and interaction with digital assets.

Through an intuitive platform, the tool significantly simplifies the entire process, offering users a seamless experience for uploading files, acquiring unique identifiers such as hashes or CIDs, and effectively managing their decentralized assets. Developed using React, TypeScript, and CSS modules, the library seamlessly connects to Ocean remote components by default, ensuring a cohesive and efficient integration within the ecosystem.

## 🚀 Usage

Integrating [Uploader UI](https://github.com/oceanprotocol/uploader-ui-lib) into your application is straightforward. The package facilitates seamless uploads but requires a wallet connector library to function optimally. Compatible wallet connection choices include [ConnectKit](https://docs.family.co/), [Web3Modal](https://web3modal.com/), [Dynamic](https://dynamic.xyz/) and [RainbowKit](https://www.rainbowkit.com/docs/installation).

**Step 1:** Install the necessary packages. For instance, if you're using ConnectKit, the installation command would be:

```bash
npm install connectkit @oceanprotocol/uploader-ui-lib
```

**Step 2:** Incorporate the UploaderComponent from the uploader-ui-lib into your app. It's crucial to ensure the component is nested within both the WagmiConfig and ConnectKit providers. Here's a basic implementation:

```javascript
import React from 'react'
import { WagmiConfig, createConfig } from 'wagmi'
import { polygon } from 'wagmi/chains'
import {
  ConnectKitProvider,
  getDefaultConfig,
  ConnectKitButton
} from 'connectkit'
import UploaderComponent from 'uploader-ui-lib'

export default function App () {
  // Initialize the Wagmi client
  const wagmiConfig = createConfig(
    getDefaultConfig({
      appName: 'Ocean Uploader UI',
      infuraId: 'Your infura ID',
      chains: [polygon],
      walletConnectProjectId: 'Your wallet connect project ID'
    })
  )

  return (
    <WagmiConfig config={wagmiConfig}>
      <ConnectKitProvider>
        {/* Your App */}
        <ConnectKitButton />
        <UploaderComponent
            uploader_url={
                process.env.NEXT_PUBLIC_UPLOADER_URL ||'https://api.uploader.oceanprotocol.com/'
            }
            uploader_account={
                process.env.NEXT_PUBLIC_UPLOADER_ACCOUNT ||
                '0x5F8396D1BfDa5259Ee89196F892E4401BF3B596d'
            }
        />
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

```

By following the steps above, you can smoothly incorporate the Uploader UI into your application while ensuring the essential providers wrap the necessary components.

Alternatively, the example below shows how you could use [uploader-ui-lib](https://github.com/oceanprotocol/uploader-ui-lib) with RainbowKit:

```javascript
import React from 'react'
import { WagmiConfig, createConfig } from 'wagmi'
import { polygon } from 'wagmi/chains'
import { RainbowKitProvider, ConnectButton } from '@rainbow-me/rainbowkit';
import UploaderComponent from 'uploader-ui-lib'

export default function App () {
  // Initialize the Wagmi client
  const wagmiConfig = createConfig(
    getDefaultConfig({
      appName: 'Ocean Uploader UI',
      infuraId: 'Your infura ID',
      chains: [polygon],
      walletConnectProjectId: 'Your wallet connect project ID'
    })
  )

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider>
        {/* Your App */}
        <ConnectButton />
        <UploaderComponent
            uploader_url={
                process.env.NEXT_PUBLIC_UPLOADER_URL ||'https://api.uploader.oceanprotocol.com/'
            }
            uploader_account={
                process.env.NEXT_PUBLIC_UPLOADER_ACCOUNT ||
                '0x5F8396D1BfDa5259Ee89196F892E4401BF3B596d'
            }
        />
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

```

\*\* under development

## NextJS Setup for Ocean Protocol Uploader UI Library

1. To use Ocean's Uploader UI library in your NextJS project modify your `next.config.js` file to include these fallbacks:

```javascript
module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      process: false,
      net: false,
      tls: false
    }
    return config
  }
}
```

\*\* add these fallbacks to avoid any issue related to webpack 5 Polyfills imcompatibility: https://github.com/webpack/changelog-v5#automatic-nodejs-polyfills-removed

2. Install dependencies:

```bash
npm install @oceanprotocol/uploader-ui-lib
```

3. Import the library's CSS into your project:

```javascript
import '@oceanprotocol/uploader-ui-lib/dist/index.es.css';
```

4. Dynamically import the Uploader component and ensure it is not processed during server-side rendering (SSR) using the next/dynamic function:

```javascript
import dynamic from 'next/dynamic';
...

const Uploader = dynamic(() => import('@oceanprotocol/uploader-ui-lib').then((module) => module.Uploader), { ssr: false });
```

5. Import component:

```javascript
<WagmiConfig config={wagmiConfig}>
    <ConnectKitProvider>
    <Layout>
        ...
        <UploaderConnection
            uploader_url={
                process.env.NEXT_PUBLIC_UPLOADER_URL ||'https://api.uploader.oceanprotocol.com/'
            }
            uploader_account={
                process.env.NEXT_PUBLIC_UPLOADER_ACCOUNT ||
                '0x5F8396D1BfDa5259Ee89196F892E4401BF3B596d'
            }
        />
    </Layout>
    </ConnectKitProvider>
</WagmiConfig>
```

When incorporating the Uploader component into your application, make sure to set 'use client' on top in your app's component. This ensures that the component operates on the client side, bypassing SSR when rendering:

```javascript
'use client'
import dynamic from 'next/dynamic'
```

This comprehensive setup ensures the proper integration and functioning of the Ocean Protocol's Uploader UI library within a NextJS application.

For more details visit the [Uploader UI](https://github.com/oceanprotocol/uploader-ui) project.

import { createConfig, cookieStorage, createStorage, http } from 'wagmi'
import { base, baseSepolia } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export function getConfig() {
  const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

  if (!projectId) {
    throw new Error('Project ID is not defined in getConfig')
  }

  return createConfig({
    chains: [base, baseSepolia],
    ssr: true,
    storage: createStorage({
      storage: cookieStorage
    }),
    transports: {
      [base.id]: http(),
      [baseSepolia.id]: http()
    },
    appName: 'cryptosanta',
    // projectId,
    connectors: [
      injected()
      // metaMask({
      //   dappMetadata: {
      //     name: 'Crypto Santa',
      //     iconUrl:
      //       'https://res.cloudinary.com/sbbcd/image/upload/v1729537091/cryptosanta/other/token_qtzupe.png'
      //   }
      // })
      // coinbaseWallet({
      //   appName: 'Crypto Santa',
      //   appLogoUrl:
      //     'https://res.cloudinary.com/sbbcd/image/upload/v1729537091/cryptosanta/other/token_qtzupe.png'
      // })
      // walletConnect({
      //   projectId
      // })
    ],
    experimental: {
      prefetchInRender: true
    }
  })
}

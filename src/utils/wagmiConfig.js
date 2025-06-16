import { getDefaultConfig, connectorsForWallets } from '@rainbow-me/rainbowkit'
import { base, baseSepolia } from 'wagmi/chains'

import {
  coinbaseWallet,
  metaMaskWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets'

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Suggested',
      wallets: [coinbaseWallet, metaMaskWallet, rainbowWallet, trustWallet]
    },
    {
      groupName: 'Other',
      wallets: [walletConnectWallet]
    }
  ],
  { appName: 'cryptosanta', projectId: projectId }
)

export const config = getDefaultConfig({
  appName: 'cryptosanta',
  projectId,
  chains: [base, baseSepolia],
  ssr: true,
  connectors
})

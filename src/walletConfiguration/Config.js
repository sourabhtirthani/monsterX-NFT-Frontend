import { createWeb3Modal } from '@web3modal/wagmi1/react'
import { walletConnectProvider, EIP6963Connector } from '@web3modal/wagmi1'

import {  configureChains, createConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { polygonMumbai,polygon } from 'viem/chains'

import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '8944084f691c908709de92b8ce2cf1a5'

// 2. Create wagmiConfig
const { chains, publicClient } = configureChains(
  [polygonMumbai,polygon],
  [walletConnectProvider({ projectId }), publicProvider()]
)

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
  ],
  publicClient
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  // enableAnalytics: false, // Optional - defaults to your Cloud configuration,
  defaultChain:polygonMumbai,

})
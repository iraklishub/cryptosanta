'use client'

import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'
// import { ETHBlueIcon } from '..'
import { Button } from '..'
import { useBalance } from 'wagmi'
import formatTokenValue from '@/src/utils/formatTokenValue'
import tokenIcon32 from '@/public/assets/icons/token.png'

const ConnectWallet = ({ label, classNameConnect, classNameAccount }) => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, mounted }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted !== 'loading'
        const connected = ready && account && chain

        const { data } = useBalance({
          address: account?.address,
          // token address here
          token: '0x5a4C81600dF2f76a19aC97eE1d31E82eCFd5C33D'
        })

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none'
              }
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    type="button"
                    onClick={openConnectModal}
                    className={`bg-slate-100 !text-black rounded-lg font-semibold hover:bg-slate-50 ${
                      classNameConnect || ''
                    }`}
                  >
                    {label || 'Connect Wallet'}
                  </Button>
                )
              }

              if (chain.unsupported) {
                return (
                  <Button
                    type="button"
                    onClick={openChainModal}
                    className="bg-slate-100 !text-black rounded-lg font-semibold hover:bg-slate-50"
                  >
                    Wrong network
                  </Button>
                )
              }

              return (
                <button
                  onClick={openAccountModal}
                  type="button"
                  className={`flex items-center gap-2 bg-slate-900 text-white rounded-full ${
                    classNameAccount || ''
                  }`}
                >
                  {chain.hasIcon && (
                    <div
                      style={{
                        background: chain.iconBackground,
                        width: 28,
                        height: 28,
                        borderRadius: 999,
                        overflow: 'hidden'
                      }}
                      className="hidden md:inline-block"
                    >
                      {chain.iconUrl && (
                        <img
                          alt={chain.name ?? 'Chain icon'}
                          src={chain.iconUrl}
                          style={{ width: 28, height: 28 }}
                        />
                      )}
                    </div>
                  )}
                  <span className="hidden md:inline">{account.ensName || account.displayName}</span>
                  <hr className="border-white border h-full hidden md:block" />
                  <span className="flex items-center gap-1 ml-2 md:ml-0">
                    {/* {account.displayBalance} */}
                    <span className="min-w-8">
                      {data ? `${formatTokenValue(data.value, data.decimals)}` : ''}
                    </span>
                    <Image src={tokenIcon32} alt="token icon" className="w-7 h-auto" />
                  </span>
                  {/* <ETHBlueIcon className="w-7 h-7" /> */}
                </button>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
}

export default ConnectWallet

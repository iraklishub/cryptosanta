// 'use client'

import clsx from 'clsx'
import { ConnectButton } from '@rainbow-me/rainbowkit'
// import { useBalance, useAccount } from 'wagmi'

const ConnectWallet = ({ label, className }) => {
  // const { address } = useAccount()
  // const { data } = useBalance({
  //   address: address,
  //   token: '0x5a4C81600dF2f76a19aC97eE1d31E82eCFd5C33D'
  // })

  // console.log(data)

  return (
    <div className={clsx('flex justify-center items-center', className)}>
      <ConnectButton chainStatus="icon" showBalance={false} label={label} />
    </div>
  )
}

export default ConnectWallet

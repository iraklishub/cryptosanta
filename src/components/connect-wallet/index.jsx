import clsx from 'clsx'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const ConnectWallet = ({ label, className }) => {
  return (
    <div className={clsx('flex justify-center items-center', className)}>
      <ConnectButton chainStatus="icon" showBalance={false} label={label} />
    </div>
  )
}

export default ConnectWallet

import Image from 'next/image'
import walletIcon from '@/public/assets/icons/wallet.webp'

const WalletIcon = ({ className }) => (
  <Image src={walletIcon} priority width={20} height={20} alt="walletico" className={className} />
)

export default WalletIcon

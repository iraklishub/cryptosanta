import Image from 'next/image'
import ethIcon from '@/public/assets/icons/eth-blue-logo.png'

const ETHBlueIcon = ({ className }) => (
  <Image src={ethIcon} width={20} height={20} alt="ethico" className={className} />
)

export default ETHBlueIcon

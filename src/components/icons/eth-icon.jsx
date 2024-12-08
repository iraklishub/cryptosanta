import Image from 'next/image'
import ethIcon from '@/public/assets/icons/eth-logo.png'

const ETHIcon = ({ className }) => (
  <Image src={ethIcon} width={20} height={20} alt="ethico" className={className} />
)

export default ETHIcon

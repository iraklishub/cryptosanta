import Image from 'next/image'
import usdcIcon from '@/public/assets/icons/usdc-logo.png'

const USDCIcon = ({ className }) => (
  <Image src={usdcIcon} width={20} height={20} alt="usdcico" className={className} />
)

export default USDCIcon

import Image from 'next/image'
import marketIcon from '@/public/assets/icons/market.webp'

const MarketIcon = ({ className }) => (
  <Image src={marketIcon} priority width={30} height={30} alt="marketico" className={className} />
)

export default MarketIcon

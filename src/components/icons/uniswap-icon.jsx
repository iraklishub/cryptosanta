import Image from 'next/image'
import uniswapIcon from '@/public/assets/icons/uniswap-logo.png'

const UniswapIcon = ({ className }) => (
  <Image src={uniswapIcon} width={20} height={20} alt="uniswapico" className={className} />
)

export default UniswapIcon

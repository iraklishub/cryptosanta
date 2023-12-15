import Image from 'next/image'
import amazonIcon from '@/public/assets/icons/amazon.webp'

const AmazonIcon = ({ className }) => (
  <Image src={amazonIcon} width={20} height={20} alt="amazonico" className={className} />
)

export default AmazonIcon

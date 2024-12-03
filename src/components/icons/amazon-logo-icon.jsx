import Image from 'next/image'
import amazonLogoIcon from '@/public/assets/icons/amazonlogo.webp'

const AmazonLogoIcon = ({ className }) => (
  <Image src={amazonLogoIcon} alt="amazonlogoico" className={`w-12 h-auto ${className || ''}`} />
)

export default AmazonLogoIcon

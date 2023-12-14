import Image from 'next/image'
import amazonLogoIcon from '@/public/assets/icons/amazonlogo.webp'

const AmazonLogoIcon = ({ className }) => (
  <Image src={amazonLogoIcon} width={50} height={50} alt="amazonlogoico" className={className} />
)

export default AmazonLogoIcon
